import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { MatchAttempt, MatchHistoryService } from '../core/match-history.service';
import { Trick, TrickLevel } from '../core/trick.model';
import { TrickStore } from '../core/trick-store';

interface PlayerState {
  name: string;
  misses: number;
}

@Component({
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './blade-game.page.html',
})
export class BladeGamePage {
  private readonly route = inject(ActivatedRoute);
  private readonly history = inject(MatchHistoryService);
  readonly store = inject(TrickStore);

  readonly level = (this.route.snapshot.queryParamMap.get('level') || 'Iniciante') as TrickLevel;
  readonly mode = (this.route.snapshot.queryParamMap.get('mode') || 'draw') as 'draw' | 'choose';
  readonly players = signal<PlayerState[]>([
    { name: this.route.snapshot.queryParamMap.get('p1') || 'Player 1', misses: 0 },
    { name: this.route.snapshot.queryParamMap.get('p2') || 'Player 2', misses: 0 },
  ]);
  readonly activeIndex = signal(0);
  readonly currentTrick = signal<Trick | null>(null);
  readonly round = signal(1);
  readonly query = signal('');
  readonly attempts = signal<MatchAttempt[]>([]);
  readonly winner = signal<string | null>(null);

  readonly letters = ['B', 'L', 'A', 'D', 'E'];
  readonly playable = computed(() => this.store.playable(this.level));
  readonly options = computed(() => {
    const query = this.query().trim().toLowerCase();
    return this.playable().filter((trick) => !query || trick.name.toLowerCase().includes(query) || trick.family.toLowerCase().includes(query)).slice(0, 24);
  });
  readonly activePlayer = computed(() => this.players()[this.activeIndex()]);

  draw(): void {
    const pool = this.playable();
    this.currentTrick.set(pool[Math.floor(Math.random() * pool.length)] || null);
  }

  choose(trick: Trick): void {
    this.currentTrick.set(trick);
    this.query.set('');
  }

  register(success: boolean): void {
    const trick = this.currentTrick();
    const active = this.activePlayer();
    if (!trick || this.winner()) return;

    this.attempts.update((items) => [
      ...items,
      { player: active.name, trickId: trick.id, trickName: trick.name, success, round: this.round() },
    ]);

    if (!success) {
      this.players.update((players) => players.map((player, index) => index === this.activeIndex() ? { ...player, misses: player.misses + 1 } : player));
      if (this.activePlayer().misses >= this.letters.length) {
        const winner = this.players()[this.activeIndex() === 0 ? 1 : 0].name;
        this.winner.set(winner);
        this.history.save({
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
          level: this.level,
          winner,
          loser: active.name,
          attempts: this.attempts(),
        });
        return;
      }
    }

    this.activeIndex.update((index) => index === 0 ? 1 : 0);
    if (this.activeIndex() === 0) {
      this.round.update((value) => value + 1);
      if (this.mode === 'draw') this.draw();
    }
  }

  reset(): void {
    this.players.update((players) => players.map((player) => ({ ...player, misses: 0 })));
    this.activeIndex.set(0);
    this.round.set(1);
    this.currentTrick.set(null);
    this.attempts.set([]);
    this.winner.set(null);
  }
}

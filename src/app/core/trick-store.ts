import { Injectable, computed, signal } from '@angular/core';

import { Trick, TrickLevel, grindGuide, levelOrder } from './trick.model';

@Injectable({ providedIn: 'root' })
export class TrickStore {
  private readonly tricksSignal = signal<Trick[]>([]);
  readonly tricks = this.tricksSignal.asReadonly();
  readonly guide = grindGuide;
  readonly readyCount = computed(() => this.tricks().filter((trick) => trick.hasAsset).length);

  constructor() {
    void this.load();
  }

  async load(): Promise<void> {
    const response = await fetch('/assets/data/tricks.json');
    const tricks = (await response.json()) as Trick[];
    this.tricksSignal.set(tricks.map((trick) => this.withDescription(trick)));
  }

  find(id: number): Trick | undefined {
    return this.tricks().find((trick) => trick.id === id);
  }

  playable(level: TrickLevel): Trick[] {
    const max = levelOrder.indexOf(level);
    const allowed = new Set(levelOrder.slice(0, max + 1));
    return this.tricks().filter((trick) => trick.hasAsset && (max < 0 || allowed.has(trick.level)));
  }

  levels(): TrickLevel[] {
    return levelOrder;
  }

  private withDescription(trick: Trick): Trick {
    const text = trick.description.toLowerCase();
    if (!text.includes('referencia visual') && !text.includes('complete a descricao')) return trick;

    const variations = trick.badges.slice(2).join(', ') || 'sem variacao extra';
    return {
      ...trick,
      description: `${trick.name} e um grind de ${trick.baseLock}. Entre baixo, mire o ponto de encaixe no obstaculo e mantenha ombros acompanhando a linha. Variacoes: ${variations}.`,
    };
  }
}

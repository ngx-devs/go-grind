import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { TrickLevel } from '../core/trick.model';
import { TrickStore } from '../core/trick-store';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blade-setup.page.html',
})
export class BladeSetupPage {
  private readonly router = inject(Router);
  readonly store = inject(TrickStore);
  readonly playerOne = signal('Player 1');
  readonly playerTwo = signal('Player 2');
  readonly level = signal<TrickLevel>('Iniciante');
  readonly mode = signal<'draw' | 'choose'>('draw');

  start(): void {
    void this.router.navigate(['/blade/play'], {
      queryParams: {
        p1: this.playerOne(),
        p2: this.playerTwo(),
        level: this.level(),
        mode: this.mode(),
      },
    });
  }
}

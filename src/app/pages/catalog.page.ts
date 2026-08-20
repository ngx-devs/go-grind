import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { TrickStore } from '../core/trick-store';
import { TrickLevel } from '../core/trick.model';

@Component({
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './catalog.page.html',
})
export class CatalogPage {
  readonly store = inject(TrickStore);
  readonly query = signal('');
  readonly level = signal<TrickLevel | 'Todas'>('Todas');

  readonly tricks = computed(() => {
    const query = this.query().trim().toLowerCase();
    return this.store.tricks().filter((trick) => {
      const matchesLevel = this.level() === 'Todas' || trick.level === this.level();
      const matchesQuery = !query || `${trick.name} ${trick.family} ${trick.baseLock} ${trick.badges.join(' ')}`.toLowerCase().includes(query);
      return matchesLevel && matchesQuery;
    });
  });
}

import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TrickStore } from '../core/trick-store';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.page.html',
})
export class HomePage {
  readonly store = inject(TrickStore);
  readonly families = computed(() => new Set(this.store.tricks().map((trick) => trick.family)).size);
}

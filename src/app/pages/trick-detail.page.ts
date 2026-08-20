import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { TrickStore } from '../core/trick-store';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './trick-detail.page.html',
})
export class TrickDetailPage {
  private readonly route = inject(ActivatedRoute);
  readonly store = inject(TrickStore);
  readonly trick = computed(() => this.store.find(Number(this.route.snapshot.paramMap.get('id'))));
}

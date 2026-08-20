import { Component, inject } from '@angular/core';

import { TrickStore } from '../core/trick-store';

@Component({
  standalone: true,
  templateUrl: './guide.page.html',
})
export class GuidePage {
  readonly store = inject(TrickStore);
}

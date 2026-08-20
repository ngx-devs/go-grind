import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { MatchHistoryService } from '../core/match-history.service';

@Component({
  standalone: true,
  imports: [DatePipe],
  templateUrl: './history.page.html',
})
export class HistoryPage {
  readonly history = inject(MatchHistoryService);
}

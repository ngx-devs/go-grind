import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { AuthService } from '../core/auth.service';
import { MatchHistoryService } from '../core/match-history.service';

@Component({
  standalone: true,
  imports: [DatePipe],
  templateUrl: './history.page.html',
})
export class HistoryPage {
  readonly auth = inject(AuthService);
  readonly history = inject(MatchHistoryService);
}

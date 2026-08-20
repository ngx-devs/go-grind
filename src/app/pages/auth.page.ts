import { Component, computed, effect, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../core/auth.service';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './auth.page.html',
})
export class AuthPage {
  readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly next = computed(() => this.router.parseUrl(this.router.url).queryParams['next'] ?? '/');

  constructor() {
    effect(() => {
      if (this.auth.signedIn()) {
        void this.router.navigateByUrl(this.next());
      }
    });
  }

  signIn(): void {
    void this.auth.signInWithGoogle(this.next());
  }
}

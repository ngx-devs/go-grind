import { Injectable, computed, inject, signal } from '@angular/core';
import { Session, User } from '@supabase/supabase-js';

import { SupabaseClientService } from './supabase.client';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly supabase = inject(SupabaseClientService);
  private readonly sessionSignal = signal<Session | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  readonly session = this.sessionSignal.asReadonly();
  readonly user = computed<User | null>(() => this.sessionSignal()?.user ?? null);
  readonly signedIn = computed(() => this.user() !== null);

  constructor() {
    const client = this.supabase.client;

    if (!client) {
      this.error.set('Supabase nao configurado.');
      return;
    }

    void client.auth.getSession().then(({ data, error }) => {
      if (error) {
        this.error.set(error.message);
        return;
      }

      this.sessionSignal.set(data.session);
    });

    client.auth.onAuthStateChange((_event, session) => {
      this.sessionSignal.set(session);
      this.loading.set(false);
    });
  }

  async signInWithGoogle(next = '/'): Promise<void> {
    const client = this.supabase.client;

    if (!client) {
      this.error.set('Supabase nao configurado.');
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const redirectUrl = new URL('/auth', window.location.origin);
    redirectUrl.searchParams.set('next', next);

    const { error } = await client.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUrl.toString(),
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });

    if (error) {
      this.loading.set(false);
      this.error.set(error.message);
    }
  }

  async signOut(): Promise<void> {
    const client = this.supabase.client;

    if (!client) {
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const { error } = await client.auth.signOut();

    this.loading.set(false);

    if (error) {
      this.error.set(error.message);
    }
  }
}

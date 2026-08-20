import { Injectable, computed, inject, signal } from '@angular/core';
import { Session, User } from '@supabase/supabase-js';

import { SupabaseClientService } from './supabase.client';

export interface SkaterProfile {
  skateModel: string;
  skatingSince: string;
  stance: string;
}

const DEFAULT_PROFILE: SkaterProfile = {
  skateModel: '',
  skatingSince: '',
  stance: '',
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly supabase = inject(SupabaseClientService);
  private readonly sessionSignal = signal<Session | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  readonly session = this.sessionSignal.asReadonly();
  readonly user = computed<User | null>(() => this.sessionSignal()?.user ?? null);
  readonly signedIn = computed(() => this.user() !== null);
  readonly profile = computed<SkaterProfile>(() => {
    const metadata = this.user()?.user_metadata ?? {};

    return {
      skateModel: typeof metadata['skate_model'] === 'string' ? metadata['skate_model'] : '',
      skatingSince: typeof metadata['skating_since'] === 'string' ? metadata['skating_since'] : '',
      stance: typeof metadata['stance'] === 'string' ? metadata['stance'] : '',
    };
  });
  readonly displayName = computed(() => {
    const metadata = this.user()?.user_metadata ?? {};
    const name = metadata['full_name'] ?? metadata['name'];

    if (typeof name === 'string' && name.trim()) {
      return name.trim();
    }

    return this.user()?.email ?? 'Skater';
  });

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

  async updateSkaterProfile(profile: SkaterProfile): Promise<void> {
    const client = this.supabase.client;

    if (!client) {
      this.error.set('Supabase nao configurado.');
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const metadata = {
      ...(this.user()?.user_metadata ?? {}),
      skate_model: profile.skateModel.trim(),
      skating_since: profile.skatingSince,
      stance: profile.stance.trim(),
    };

    const { data, error } = await client.auth.updateUser({ data: metadata });

    this.loading.set(false);

    if (error) {
      this.error.set(error.message);
      return;
    }

    this.sessionSignal.update((session) => {
      if (!session) {
        return session;
      }

      return {
        ...session,
        user: data.user,
      };
    });
  }

  emptyProfile(): SkaterProfile {
    return { ...DEFAULT_PROFILE };
  }
}

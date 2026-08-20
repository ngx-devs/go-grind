import { Injectable, effect, inject, signal } from '@angular/core';

import { AuthService } from './auth.service';

export interface MatchAttempt {
  player: string;
  trickId: number;
  trickName: string;
  success: boolean;
  round: number;
}

export interface MatchRecord {
  id: string;
  date: string;
  level: string;
  winner: string;
  loser: string;
  attempts: MatchAttempt[];
}

const legacyStorageKey = 'go-grind:matches';
const accountStorageKeyPrefix = 'go-grind:matches:account:';

@Injectable({ providedIn: 'root' })
export class MatchHistoryService {
  private readonly auth = inject(AuthService);
  private readonly recordsSignal = signal<MatchRecord[]>([]);
  readonly records = this.recordsSignal.asReadonly();

  constructor() {
    effect(() => {
      const userId = this.auth.user()?.id ?? null;

      if (userId) {
        this.migrateLegacyRecords(userId);
      }

      this.recordsSignal.set(this.read(this.storageKey(userId)));
    });
  }

  save(record: MatchRecord): void {
    this.recordsSignal.update((records) => [record, ...records].slice(0, 50));
    localStorage.setItem(this.storageKey(), JSON.stringify(this.recordsSignal()));
  }

  clear(): void {
    this.recordsSignal.set([]);
    localStorage.removeItem(this.storageKey());
  }

  private storageKey(userId = this.auth.user()?.id ?? null): string {
    return userId ? `${accountStorageKeyPrefix}${userId}` : legacyStorageKey;
  }

  private read(storageKey: string): MatchRecord[] {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || '[]') as MatchRecord[];
    } catch {
      return [];
    }
  }

  private migrateLegacyRecords(userId: string): void {
    const legacyRecords = this.read(legacyStorageKey);

    if (!legacyRecords.length) {
      return;
    }

    const accountKey = this.storageKey(userId);
    const accountRecords = this.read(accountKey);
    const accountRecordIds = new Set(accountRecords.map((record) => record.id));
    const mergedRecords = [
      ...legacyRecords.filter((record) => !accountRecordIds.has(record.id)),
      ...accountRecords,
    ].slice(0, 50);

    localStorage.setItem(accountKey, JSON.stringify(mergedRecords));
    localStorage.removeItem(legacyStorageKey);
  }
}

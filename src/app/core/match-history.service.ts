import { Injectable, signal } from '@angular/core';

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

const storageKey = 'go-grind:matches';

@Injectable({ providedIn: 'root' })
export class MatchHistoryService {
  private readonly recordsSignal = signal<MatchRecord[]>(this.read());
  readonly records = this.recordsSignal.asReadonly();

  save(record: MatchRecord): void {
    this.recordsSignal.update((records) => [record, ...records].slice(0, 50));
    localStorage.setItem(storageKey, JSON.stringify(this.recordsSignal()));
  }

  clear(): void {
    this.recordsSignal.set([]);
    localStorage.removeItem(storageKey);
  }

  private read(): MatchRecord[] {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || '[]') as MatchRecord[];
    } catch {
      return [];
    }
  }
}

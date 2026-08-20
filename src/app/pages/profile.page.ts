import { Component, ElementRef, ViewChild, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AuthService, SkaterProfile } from '../core/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './profile.page.html',
})
export class ProfilePage {
  readonly auth = inject(AuthService);
  readonly profile = signal<SkaterProfile>(this.auth.emptyProfile());
  readonly saved = signal(false);
  readonly closingModal = signal(false);
  @ViewChild('setupDialog') private setupDialog?: ElementRef<HTMLDialogElement>;

  constructor() {
    effect(() => {
      this.profile.set(this.auth.profile());
    });
  }

  async save(): Promise<void> {
    await this.auth.updateSkaterProfile(this.profile());

    if (!this.auth.error()) {
      this.saved.set(true);
      window.setTimeout(() => this.saved.set(false), 2200);
    }
  }

  update(field: keyof SkaterProfile, value: string): void {
    this.saved.set(false);
    this.profile.update((profile) => ({ ...profile, [field]: value }));
  }

  openSetupModal(): void {
    this.closingModal.set(false);
    this.setupDialog?.nativeElement.showModal();
  }

  closeSetupModal(): void {
    this.closingModal.set(true);
    window.setTimeout(() => {
      this.setupDialog?.nativeElement.close();
      this.closingModal.set(false);
    }, 160);
  }
}

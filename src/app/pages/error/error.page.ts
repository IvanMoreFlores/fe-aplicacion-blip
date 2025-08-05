import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage {
  errorType: 'maintenance' | 'server' | 'client' = 'server';
  errorCode: number | null = null;

  get showButton(): boolean {
    return this.errorType !== 'maintenance';
  }

  get buttonText(): string {
    switch (this.errorType) {
      case 'server':
        return 'Reintentar';
      case 'client':
        return 'Ir al inicio';
      default:
        return '';
    }
  }

  constructor(
    private router: Router,
    private location: Location,
    private storage: Storage
  ) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['type']) {
      this.errorType = nav.extras.state['type'];
    }
    if (nav?.extras?.state?.['statusCode']) {
      this.errorCode = nav.extras.state['statusCode'];
    }
  }

  async clearSession() {
    await this.storage.clear();
  }

  async onButtonClick() {
    if (this.errorType === 'server') {
      this.location.back();
    } else if (this.errorType === 'client') {
      await this.clearSession();
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }
  }
}

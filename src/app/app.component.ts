import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private checkingSession = false;

  constructor(
    private storageService: StorageService,
    private router: Router
  ) {
    this.checkSession();
  }

  async checkSession() {
    if (this.checkingSession) return;
    this.checkingSession = true;

    const user = await this.storageService.getItem('user');
    const refreshToken = await this.storageService.getItem('refreshToken');

    if (user && refreshToken) {
      this.router.navigate(['/tab-home/home'], { replaceUrl: true });
    } else {
      this.router.navigate(['/login'], { replaceUrl: true });
    }

    this.checkingSession = false;
  }
}

import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { Keyboard, KeyboardResize } from '@capacitor/keyboard';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private checkingSession = false;

  constructor(
    private storageService: StorageService,
    private router: Router,
    private authService: AuthService
  ) {
    this.checkSession();
  }

  async checkSession() {
    if (this.checkingSession) return; 
    this.checkingSession = true;

    const token = await this.authService.ensureValidToken();

    if (token) {
      const user = await this.storageService.getItem('user');
      const refreshToken = await this.storageService.getItem('refreshToken');
      if (user && refreshToken) {
        this.router.navigate(['/tab-home/home'], { replaceUrl: true });
      } else {
        this.router.navigate(['/login'], { replaceUrl: true });
      }
    } else {
      this.router.navigate(['/login'], { replaceUrl: true });
    }

    this.checkingSession = false;
  }
}


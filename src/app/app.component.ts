import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { Keyboard, KeyboardResize } from '@capacitor/keyboard';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private storageService: StorageService,
    private router: Router,
    private authService: AuthService
  ) {
    Keyboard.setResizeMode({
      mode: KeyboardResize.Native,
    });

    Keyboard.addListener('keyboardWillShow', () => {
      document.body.classList.add('keyboard-open');
    });

    Keyboard.addListener('keyboardWillHide', () => {
      document.body.classList.remove('keyboard-open');
    });

    this.checkSession();
  }

  async checkSession() {
    const token = await this.authService.ensureValidToken();

    if (token) {
      this.router.navigate(['/tab-home/home'], { replaceUrl: true });
    } else {
      this.router.navigate(['/login'], { replaceUrl: true });
    }
  }
}

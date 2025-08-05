import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { JwtService } from './jwt.service';
import { ApiLoginService } from './api-login.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isRefreshing = false;

  constructor(
    private storage: StorageService,
    private jwtService: JwtService,
    private apiLoginService: ApiLoginService,
    private router: Router
  ) {}

  async logout() {
    this.isRefreshing = false;
    await this.storage.clear();
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  async ensureValidToken(): Promise<string | null> {
    const token = await this.storage.getItem('token');
    const refreshToken = await this.storage.getItem('refreshToken');
    const user = await this.storage.getItem('user');

    console.log('Validando token...', {
      token: !!token,
      refreshToken: !!refreshToken,
      user: !!user,
    });

    if (!token || !refreshToken || !user) return null;

    const decoded = await this.jwtService.verifyToken(token);
    if (decoded) {
      return token;
    }
    if (this.isRefreshing) {
      return null;
    }

    this.isRefreshing = true;
    console.log('Token expirado. Intentando refrescar...');

    return new Promise((resolve) => {
      this.apiLoginService.getTokenSession(refreshToken).subscribe({
        next: async (response) => {
          console.log('Refresh exitoso');
          const { token: newToken, refreshToken: newRefresh } = response;
          await this.storage.setItem('token', newToken);
          await this.storage.setItem('refreshToken', newRefresh);
          this.isRefreshing = false;
          resolve(newToken);
        },
        error: async (err) => {
          console.error('Refresh token inválido:', err);
          this.isRefreshing = false;
          await this.logout();
          resolve(null);
        },
      });
    });
  }
}

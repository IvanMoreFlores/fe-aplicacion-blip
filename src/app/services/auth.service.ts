import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { JwtService } from './jwt.service';
import { ApiLoginService } from './api-login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private storage: StorageService,
    private jwtService: JwtService,
    private apiLoginService: ApiLoginService
  ) {}
  async ensureValidToken(): Promise<string | null> {
    const token = await this.storage.getItem('token');
    const refreshToken = await this.storage.getItem('refreshToken');

    if (!token || !refreshToken) return null;

    const decoded = await this.jwtService.verifyToken(token);
    if (decoded) {
      return token;
    }

    return new Promise((resolve, reject) => {
      this.apiLoginService.getTokenSession(refreshToken).subscribe({
        next: async (response) => {
          const { token: newToken, refreshToken: newRefresh } = response;
          await this.storage.setItem('token', newToken);
          await this.storage.setItem('refreshToken', newRefresh);
          resolve(newToken);
        },
        error: (err) => reject(err),
      });
    });
  }
}

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
  const user = await this.storage.getItem('user');

  console.log('Validando token...', { token: !!token, refreshToken: !!refreshToken, user: !!user });

  if (!token || !refreshToken || !user) return null;

  const decoded = await this.jwtService.verifyToken(token);
  if (decoded) {
    console.log('Token válido');
    return token;
  }

  console.log('Token expirado. Intentando refrescar...');
  return new Promise((resolve) => {
    this.apiLoginService.getTokenSession(refreshToken).subscribe({
      next: async (response) => {
        console.log('Refresh exitoso');
        const { token: newToken, refreshToken: newRefresh } = response;
        await this.storage.setItem('token', newToken);
        await this.storage.setItem('refreshToken', newRefresh);
        resolve(newToken);
      },
      error: async (err) => {
        console.error('Refresh token inválido:', err);
        await this.storage.clear();
        resolve(null);
      },
    });
  });
}

}

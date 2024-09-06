import { Injectable } from '@angular/core';
import * as jose from 'jose';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private secretKey = new TextEncoder().encode('BlIp@2024');

  constructor() {}

  async generateToken(payload: object): Promise<string> {
    return new jose.SignJWT({payload})
      .setProtectedHeader({ alg: 'HS256' })
      .sign(this.secretKey);
  }

  async verifyToken(token: string): Promise<object | null> {
    try {
      const { payload } = await jose.jwtVerify(token, this.secretKey);
      return payload;
    } catch (err) {
      console.error('Token verification failed:', err);
      return null;
    }
  }

  decodeToken(token: string): object | null {
    try {
      return jose.decodeJwt(token);
    } catch (err) {
      console.error('Token decoding failed:', err);
      return null;
    }
  }
}

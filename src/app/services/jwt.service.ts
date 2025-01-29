import { Injectable } from '@angular/core';
import * as jose from 'jose';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private secretKey = new TextEncoder().encode('BlIp@2024');

  constructor() { }

  async generateTokenLogEmail(type_login: string, email: string, password: string, isLogged: boolean): Promise<string> {
    return new jose.SignJWT({ type_login, email, password, isLogged })
      .setProtectedHeader({ alg: 'HS256' })
      .sign(this.secretKey);
  }

  async generateTokenLogPhone(type_login: string, phone: string, isLogged: boolean): Promise<string> {
    return new jose.SignJWT({ type_login, phone, isLogged })
      .setProtectedHeader({ alg: 'HS256' })
      .sign(this.secretKey);
  }

  async generateTokenMain(type_login: string, idUser: number, isLogged: boolean): Promise<string> {
    return new jose.SignJWT({ type_login, idUser, isLogged })
      .setProtectedHeader({ alg: 'HS256' })
      .sign(this.secretKey);
  }

  async generateToken(payload: object): Promise<string> {
    return new jose.SignJWT({ payload })
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

}

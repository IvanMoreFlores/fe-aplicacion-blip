import { Injectable } from '@angular/core';
import { FacebookLoginResponse, Facebook } from '@awesome-cordova-plugins/facebook/ngx';

@Injectable({
  providedIn: 'root'
})
export class FaceAuthService {

  constructor(private facebook: Facebook) { }

  async loginWithFacebook(): Promise<FacebookLoginResponse | null> {
    try {
      const response = await this.facebook.login(['public_profile', 'email']);
      if (response.status === 'connected') {
        console.log('Acceso exitoso', response);
        return response;
      } else {
        console.log('Login cancelado');
        return null;
      }
    } catch (error) {
      console.error('Error en Facebook login:', error);
      return null;
    }
  }

  async logoutFromFacebook(): Promise<void> {
    try {
      await this.facebook.logout();
      console.log('Desconectado de Facebook');
    } catch (error) {
      console.error('Error en Facebook logout:', error);
    }
  }
}

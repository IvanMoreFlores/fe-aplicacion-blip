import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavigationBar } from '@capgo/capacitor-navigation-bar';
import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private navController: NavController) {}

  goToRegistro() {
    this.navController.navigateForward('/registro');
  }
  ngOnInit(){
    this.fbWebConfig();
    this.goMobileConfig();
  }
  goTocorre(){
    this.navController.navigateForward('/ing-cor');
  }

  async fbMobileLogin(){
    const FACEBOOK_PERMISSIONS = [
      'email',
      'public_profile',
    ];
    
    const result = await (
      FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS })
    );
    
    if (result.accessToken) {
      console.log(`Facebook access token is ${result.accessToken.token}`);
      this.fbMobileGetProfile();
    }
  }

  async fbMobileGetProfile(){
    const result = await FacebookLogin.getProfile<{
      email: string;
    }>({ fields: ['email'] });
    
    console.log(`Facebook user's email is ${result.email}`);
    alert(`Facebook user's email is ${result.email}`);
  }

  async fbWebConfig(){
    await FacebookLogin.initialize({ appId: '666844798911407' });
  }

  async fbMobileLogOut(){
    await FacebookLogin.logout();
  }

  goMobileConfig(){
    GoogleAuth.initialize({
      clientId: '1065508143243-0nnjgpqihtstvqt17lulhtkh682587of.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
      grantOfflineAccess: true,
    });
  }

  async googleSignIn(){
    let googleUser = await GoogleAuth.signIn();
    console.log(googleUser);
  }

}

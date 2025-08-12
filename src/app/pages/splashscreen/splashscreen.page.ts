import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavigationBar } from '@capgo/capacitor-navigation-bar';
import { StorageService } from '../../services/storage.service';
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {
  constructor(
    private router: Router,
    private storageService: StorageService,
    private jwtService: JwtService
  ) {
    if (Capacitor.getPlatform() !== 'web') {
      StatusBar.setStyle({ style: Style.Light });
      StatusBar.setOverlaysWebView({ overlay: true });
      StatusBar.setBackgroundColor({ color: '#79FFAF' });
      NavigationBar.setNavigationBarColor({ color: '#79FFAF' });
    }
  }

  ngOnInit() {
    //this.init_value();
    const btnPlay = document.getElementById('btnPlay') as HTMLButtonElement;
    const animationCircle = document.getElementById(
      'animated-circle'
    ) as HTMLDivElement;
    const animationLogo = document.getElementById(
      'animated-logo'
    ) as HTMLImageElement;

    setTimeout(() => {
      animationCircle.classList.add('run');

      setTimeout(() => {
        animationLogo.style.display = 'block';
        this.playCarlock();
      }, 1000); 
    }, 20);
  }

 async init_value() {
  const token = await this.storageService.getItem('token');

  // Si hay token, el usuario ya está logueado, ir directamente a lds
  if (token) {
    this.router.navigate(['/lds'], { replaceUrl: true });
    return;
  }

  // Si no hay token, verificar si ya vio el welcome
  const welcome = await this.storageService.getItem('welcome');
  if (!welcome) {
    this.router.navigate(['/walkthrough'], { replaceUrl: true });
    return;
  }

  // Si no hay token pero ya vio el welcome, ir a login
  this.router.navigate(['/login'], { replaceUrl: true });
}


  playCarlock() {
    const carlock = document.getElementById('carlock') as HTMLAudioElement;
    carlock.play();
    carlock.onended = () => {
      setTimeout(() => {
        this.init_value();
      }, 500); 
    };
  }

  onSoundEnded() {
    this.router.navigate(['/walkthrough']);
  }
}

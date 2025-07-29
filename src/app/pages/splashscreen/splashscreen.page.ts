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
      }, 1000); // Tiempo para mostrar la animación antes de reproducir el sonido
    }, 20);
  }

  async init_value() {
    const valor = await this.storageService.getItem('welcome');

    if (valor === true) {
      const token = await this.storageService.getItem('token');

      if (token !== null) {
        console.log('token desde el Storage:', token);
        console.log('descifrado del token');
        const result: any = await this.jwtService.verifyToken(token);
        console.log(result);
        const isLogged = result?.isLogged;

        if (isLogged === true) {
          this.router.navigate(['/lds'], { replaceUrl: true });
        } else {
          this.router.navigate(['/login'], { replaceUrl: true });
        }
      } else {
        this.router.navigate(['/login'], { replaceUrl: true });
      }
    } else {
      this.router.navigate(['/walkthrough'], { replaceUrl: true });
    }
  }

  playCarlock() {
    const carlock = document.getElementById('carlock') as HTMLAudioElement;
    carlock.play();
    carlock.onended = () => {
      // Retrasar la redirección para asegurarse de que todo se haya completado
      setTimeout(() => {
        this.init_value();
      }, 500); // Retraso en milisegundos (ajustar según sea necesario)
    };
  }

  onSoundEnded() {
    // Redirigir a la página deseada después de que el sonido termine
    this.router.navigate(['/walkthrough']);
  }
}

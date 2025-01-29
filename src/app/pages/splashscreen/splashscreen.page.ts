import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavigationBar } from '@capgo/capacitor-navigation-bar';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {
  carlock: any;

  constructor(private router: Router){
    if(Capacitor.getPlatform() != 'web'){
      StatusBar.setStyle({ style: Style.Light });
      StatusBar.setOverlaysWebView({overlay: true})
      StatusBar.setBackgroundColor({color: "#79FFAF"});
      NavigationBar.setNavigationBarColor({color: '#79FFAF'});
    }
  }

  ngOnInit(){
    const animationCircle = document.getElementById('animated-circle') as HTMLDivElement;
    const animationLogo = document.getElementById('animated-logo') as HTMLImageElement;
  
    setTimeout(() => {
      animationCircle.classList.add('run');  // Muestra el círculo
  
      setTimeout(() => {
        animationLogo.style.display = 'block';  // Muestra el logo después de la animación del círculo
        this.playCarlock();  // Reproduce el sonido directamente
      }, 1000);
    }, 20);
  
    // Redirige después de 1.5 segundos
    setTimeout(() => {
      if (localStorage.getItem("walkthrough")) {
        // Si ya vio el walkthrough, va al login
        this.router.navigate(['walkthrough']);
      } else {
        // Si no, va al walkthrough
        this.router.navigate(['walkthrough']);
        localStorage.setItem("walkthrough", "true"); // Guarda que ya pasó el walkthrough
      }
    }, 1500); // Ajusta el tiempo según el fin de la animación
  }
  playCarlock(){
    this.carlock = document.getElementById('carlock') as HTMLAudioElement;
    this.carlock.play();
  }
}

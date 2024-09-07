import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {
  selectedTab: string = 'home'; // Selecciona la pestaña predeterminada

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  setCurrentTab(event: any) {
    this.selectedTab = event.tab;

    // Encontrar el botón de la pestaña seleccionada
    const tabButton = document.querySelector(`ion-tab-button[tab="${this.selectedTab}"]`);

    // Aplicar la animación de escalado
    const fadeInAnimation = this.createScaleAnimation(tabButton as HTMLElement);
    fadeInAnimation.play();
  }

  private createScaleAnimation(baseEl: HTMLElement) {
    return this.animationCtrl.create()
      .addElement(baseEl)
      .duration(300)
      .easing('ease-in-out')
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.2)' },
        { offset: 1, transform: 'scale(1)' }
      ]);
  }
}

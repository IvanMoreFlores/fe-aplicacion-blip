import { Component, OnInit } from '@angular/core';
import { AnimationController, IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-tap-home',
  templateUrl: './tap-home.page.html',
  styleUrls: ['./tap-home.page.scss'],
})
export class TapHomePage implements OnInit {
  selectedTab: any;

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  setCurrentTab(event: any) {
    this.selectedTab = event.tab;
    const tabButton = document.querySelector(`ion-tab-button[tab="${this.selectedTab}"]`);
    const fadeInAnimation = this.createFadeInAnimation(tabButton as HTMLElement);
    fadeInAnimation.keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.2)' },
      { offset: 1, transform: 'scale(1)' }
    ]);
    fadeInAnimation.play();
  }

  private createFadeInAnimation(baseEl: HTMLElement) {
    return this.animationCtrl.create()
      .addElement(baseEl)
      .duration(300)
      .easing('ease-in-out');
      // .fromTo('opacity', '0', '1');
  }

}

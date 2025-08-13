import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import Swiper from 'swiper';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { NavController } from '@ionic/angular';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})
export class WalkthroughPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    loop: false,
  };

  isButtonEnabled: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService,
    private router: Router,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {
    this.iniciarSwiper();
  }

  iniciarSwiper() {
    const miSwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        slideChange: () => {
          // Habilitar el botón cuando esté en el tercer slide (índice 2)
          if (miSwiper.activeIndex === 2) {
            this.isButtonEnabled = true;
          } else {
            this.isButtonEnabled = false;
          }
        },
      },
    });
  }

  async confirmWelcome() {
    await this.storageService.removeItem('token');
    await this.storageService.removeItem('refreshToken');
    await this.storageService.removeItem('user');
    await this.storageService.setItem('welcome', true);
    this.navCtrl.navigateRoot('/login');
  }
  
}

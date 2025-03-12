
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-blip-home',
  templateUrl: './blip-home.page.html',
  styleUrls: ['./blip-home.page.scss'],
})
export class BlipHomePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    loop: false,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
    });
  }
}

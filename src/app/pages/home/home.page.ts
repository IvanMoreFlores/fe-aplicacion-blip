import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initSwiper('.swiper-container');
    this.initSwiper('.slider');
  }

  initSwiper(selector: string) {
    const mySwiper = new Swiper(selector, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: `${selector} .swiper-pagination`,
      },
    });
  }
}

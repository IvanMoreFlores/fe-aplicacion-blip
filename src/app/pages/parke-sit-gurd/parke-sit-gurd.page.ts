import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-parke-sit-gurd',
  templateUrl: './parke-sit-gurd.page.html',
  styleUrls: ['./parke-sit-gurd.page.scss'],
})
export class ParkeSitGurdPage implements OnInit {
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

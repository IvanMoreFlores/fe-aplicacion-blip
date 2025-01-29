import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-vista-mapa',
  templateUrl: './vista-mapa.page.html',
  styleUrls: ['./vista-mapa.page.scss'],
})
export class VistaMapaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initSwiper('.swiper-container');
  }

  initSwiper(selector: string) {
    new Swiper(selector, {
      slidesPerView: 'auto',
      spaceBetween: 10,
      centeredSlides: true,
      grabCursor: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
  }

}

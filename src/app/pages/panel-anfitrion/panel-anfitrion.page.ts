import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-panel-anfitrion',
  templateUrl: './panel-anfitrion.page.html',
  styleUrls: ['./panel-anfitrion.page.scss'],
})
export class PanelAnfitrionPage implements OnInit {
  
  selectedContent: string = 'Analisis';
  
  constructor() { }

  

  ngOnInit() {
    this.initSwiper();
  }
    isButtonActive(content: string): boolean {
      return this.selectedContent === content;
    }
    initSwiper() {
      const mySwiper = new Swiper('.swiper-container', {
        // Configuración de Swiper
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: false, // Deshabilita la centralización de las diapositivas
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }

    changeContent(content: string) {
      this.selectedContent = content;
    }
  

}

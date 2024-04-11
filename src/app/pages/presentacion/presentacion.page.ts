import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage implements OnInit {
  dniFront: string = '';
  dniBack: string = '';

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,
    loop: true,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);

      this.dniFront = params['dnifront'];
      this.dniBack = params['dniback'];

      console.log('DNI FRONT:', this.dniFront);
      console.log('DNI BACK:', this.dniBack);
      this.initSwiper();
    });
  }

  initSwiper() {
    const mySwiper = new Swiper('.swiper-container', {
      // Configuración de Swiper
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
      },
    });

    mySwiper.on('slideChange', () => {
      const tercerSlide = mySwiper.activeIndex === 2; // Comprueba si estamos en el tercer slide
      const button = document.querySelector('.next-btn') as HTMLElement; // Selecciona el botón "Comenzar"

      if (tercerSlide) {
        button.style.backgroundColor = '#212121'; // Cambia el color del botón a rojo si estamos en el tercer slide
        button.style.color = 'white';
      } else {
        button.style.backgroundColor = ''; // Restablece el color del botón si no estamos en el tercer slide
      }
    });
  }
}

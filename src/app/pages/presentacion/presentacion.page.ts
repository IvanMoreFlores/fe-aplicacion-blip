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
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    loop: false,
  };

  isButtonEnabled: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.iniciarSwiper();
  }

  iniciarSwiper() {
    // Inicializar el slider de texto (superior) con interacción deshabilitada
    const swiperText = new Swiper('.swiper-text', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      allowTouchMove: false, // Deshabilitar la interacción del usuario
    });

    // Inicializar el slider principal (inferior)
    const swiperMain = new Swiper('.swiper-main', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      resistance: false, // Deshabilitar la resistencia para evitar el rebote
      resistanceRatio: 0, // Asegura que no haya ningún rebote
    });

    // Conectar el slider inferior (swiperMain) con el superior (swiperText)
    swiperMain.controller.control = swiperText;

    // Habilitar el botón en el tercer slide del slider inferior
    swiperMain.on('slideChange', () => {
      this.isButtonEnabled = swiperMain.activeIndex === 2;
    });
  }
}

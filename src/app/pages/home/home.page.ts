import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Swiper from 'swiper';///sliders

import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  selectedContent: string = 'Todos'; // Inicializa la variable con el valor por defecto
  isNavbarOpen = false; // Variable para rastrear si el navbar-collapse está abierto

  constructor(private modalController: ModalController) {} // Inyecta el ModalController

  ngOnInit() {
    this.initSwiper('.swiper-container');
    this.initSwiper('.slider');
  }
  async exit() {
    
    await this.modalController.dismiss();
  }
  initSwiper(selector: string) {
    const mySwiper = new Swiper(selector, {
      slidesPerView: 'auto',
      spaceBetween: 10,
      pagination: {
        el: `${selector} .swiper-pagination`,
      },
    });
  }
  
  changeContent(content: string) {
    this.selectedContent = content; // Cambiamos el contenido seleccionado al hacer clic en un botón
  }

  isButtonActive(content: string): boolean {
    return this.selectedContent === content;
  }
  
  
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    }
}

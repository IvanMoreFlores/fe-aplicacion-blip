import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-anuncio-caracteristicas',
  templateUrl: './anuncio-caracteristicas.page.html',
  styleUrls: ['./anuncio-caracteristicas.page.scss'],
})
export class AnuncioCaracteristicasPage implements OnInit {
  selectedContent: string = 'Características'; // Inicializa la variable con el valor por defecto
  text = ''; // Texto del primer textarea
  textareas: string[] = []; // Array para almacenar los textareas adicionales
//
//
showContent1: boolean = false;
showContent2: boolean = false;
showContentEdit: boolean = false;
showContentLugares: boolean = false;
showContentDimension: boolean = false;
showContentDirec: boolean = false;

toggleContent1() {
  this.showContent1 = !this.showContent1;
}
 cerrarContent() {
  this.showContent1 = false;
}
toggleContent2() {
  this.showContent2 = !this.showContent2;
}
toggleContentEdit() {
  this.showContentEdit = !this.showContentEdit;
}
toggleContentLugares() {
  this.showContentLugares = !this.showContentLugares;
}
toggleContentDimension() {
  this.showContentDimension = !this.showContentDimension;
}
toggleContentDirec() {
  this.showContentDirec = !this.showContentDirec;
}
//
//



  constructor() {}

  getPlaceholderHeight(): string {
    const placeholderText = "Ej. Ser puntal con las horas de reserva y salir al momento pactado"; // Cambia esto al texto real de tu placeholder
    const placeholderHeight = placeholderText.length * 1; // Ajusta el factor según tus necesidades
    return `${placeholderHeight}px`;
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
  
  agregarTextarea() {
    if (this.textareas.length < 3) {
      this.textareas.push(''); // Agrega un nuevo textarea vacío al array
    }
  }


  ngOnInit() {
    this.initSwiper();
  }
  

}

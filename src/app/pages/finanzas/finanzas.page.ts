import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.page.html',
  styleUrls: ['./finanzas.page.scss'],
})
export class FinanzasPage implements OnInit {
  selectedContent: string = 'Ingresos'; // Inicializa la variable con el valor por defecto
  text = ''; // Texto del primer textarea
  textareas: string[] = []; // Array para almacenar los textareas adicionales



  constructor() {}

  getPlaceholderHeight(): string {
    const placeholderText = "Ej. Ser puntal con las horas de reserva y salir al momento pactado"; // Cambia esto al texto real de tu placeholder
    const placeholderHeight = placeholderText.length * 1; // Ajusta el factor según tus necesidades
    return `${placeholderHeight}px`;
  }

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
  
  agregarTextarea() {
    if (this.textareas.length < 3) {
      this.textareas.push(''); // Agrega un nuevo textarea vacío al array
    }
  }


  
  

}

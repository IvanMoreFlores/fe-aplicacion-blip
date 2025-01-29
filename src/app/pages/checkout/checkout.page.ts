import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  tipoReserva: string = 'Por Hora'; // Valor inicial: "Por Hora"
  selectedContent: string = 'Todos'; // Inicializa la variable con el valor por defecto
  isNavbarOpen = false; // Variable para rastrear si el navbar-collapse está abierto
  vehicles = [
    { name: 'BMW 328i', plate: 'AF4759JU' },
    { name: 'Audi A3', plate: 'BF1287PO' }
  ];

  selectedVehicle: any = null;

  selectVehicle(vehicle: any) {
    this.selectedVehicle = vehicle;
  }

  addVehicle() {
    console.log('Agregar nuevo vehículo');
  }
  constructor() { }

  ngOnInit() {
    this.initSwiper('.swiper-container');
    this.initSwiper('.slider');
  }
  // Cambiar el tipo de reserva (Por Hora o Por Día)
  cambiarTipoReserva(tipo: string) {
    this.tipoReserva = tipo;
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

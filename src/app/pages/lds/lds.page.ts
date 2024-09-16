import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper, { Controller } from 'swiper';
import { StorageService } from '../../services/storage.service';
import { ApiService } from 'src/app/services/api.service';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller]);

@Component({
  selector: 'app-lds',
  templateUrl: './lds.page.html',
  styleUrls: ['./lds.page.scss'],
})
export class LdsPage implements OnInit {
  data: any;
  nombre: string = '';

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    loop: false,
  };

  isButtonEnabled: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private storage: StorageService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.iniciarSwiper();
    this.getUserData();
  }

  async getUserData(): Promise<number> {
    const token = await this.storage.getItem('token');
    return new Promise((resolve, reject) => {
      this.api.getInformation(token).subscribe(
        (response: any) => {
          this.data = response.data;
          this.storage.removeItem('user');
          this.storage.setItem('user', this.data);
          this.nombre = this.data.usu_nombre;
          const id: number = Number(this.data.usu_id); // Convertir a número
          resolve(id); // Devolver el id convertido como una promesa
        },
        (error: any) => {
          console.error('Error al consumir el servicio:', error);
          reject(error.message); // Rechazar en caso de error
        }
      );
    });
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

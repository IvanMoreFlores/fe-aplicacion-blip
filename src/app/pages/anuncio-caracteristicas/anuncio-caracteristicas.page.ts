import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swiper from 'swiper';
import { } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from '../../services/storage.service';

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
  advertisements: any[] = [];
  mainAd: any;
  //
  //
  showContent1: boolean = false;
  showContent2: boolean = false;
  showContentEdit: boolean = false;
  showContentLugares: boolean = false;
  showContentDimension: boolean = false;
  showContentDirec: boolean = false;
  modalController: any;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: StorageService
  ) {
    console.log('antes load');
    if (this.advertisements.length === 0) {
      this.loadContent();
    }

  }

  async loadContent() {
    const token = await this.storage.getItem('token');
    this.api.getAds(token).subscribe(
      (response: any) => {
        this.advertisements = response.data;
        this.mainAd = this.advertisements[0];
        console.log(this.advertisements); // Verifica los datos recibidos
        console.log(this.mainAd);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

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

  dismissModal() {
    this.modalController.dismiss(null, 'open-modal-tash');
  }

  async deleteAd(id: string) {
    const token = await this.storage.getItem('token');
    this.api.deleteAd(token, id).subscribe(
      async (response: any) => {
        console.log(response);
        alert('Anuncio eliminado!');
        window.location.reload();
      },
      (error) => {
        console.error('Error al eliminar', error);
      }
    )

    this.modalController.dismiss(null, 'open-modal-tash');
  }

  ngOnInit() {
    this.initSwiper();
  }


}

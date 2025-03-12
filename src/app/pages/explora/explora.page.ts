import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonModal } from '@ionic/angular';
import Swiper, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Activa los módulos necesarios de Swiper
Swiper.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-explora',
  templateUrl: './explora.page.html',
  styleUrls: ['./explora.page.scss'],
})
export class ExploraPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  isFooterVisible = false; // Controla la visibilidad del footer
  isModalOpen = true; // Controla la visibilidad del modal
  isSettingsActive = false; // Controla el estado del botón flotante
  swiperInstanceModal: Swiper | null = null; // Instancia del Swiper en el modal
  swiperInstanceFooter: Swiper | null = null; // Instancia del Swiper en el footer

  constructor() {}

  ionViewWillEnter() {
    // Mostrar el modal al entrar en el tab "Explorar"
    this.isModalOpen = true;
    this.modal?.present();
  }

  ionViewWillLeave() {
    // Cerrar el modal al salir del tab "Explorar"
    this.isModalOpen = false;
    this.isFooterVisible = false;
    this.isSettingsActive = false;
    this.modal?.dismiss();
  }

  toggleView() {
    this.isSettingsActive = !this.isSettingsActive;

    if (this.isSettingsActive) {
      // Cerrar modal y mostrar footer
      this.isModalOpen = false;
      this.isFooterVisible = true;
      this.modal?.dismiss();

      // Inicializa el Swiper del footer
      setTimeout(() => {
        this.iniciarSwiperFooter();
      }, 100);
    } else {
      // Ocultar footer y reabrir modal
      this.isFooterVisible = false;
      this.isModalOpen = true;
      this.modal?.present();

      // Inicializa el Swiper del modal
      setTimeout(() => {
        this.iniciarSwiperModal();
      }, 100);
    }
  }

  ngOnInit() {}

  ionViewDidEnter() {
    // Inicializar Swiper después de que el modal esté completamente cargado
    setTimeout(() => {
      this.iniciarSwiperModal();
    }, 100);
  }

  iniciarSwiperModal() {
    // Evita inicializar múltiples veces
    if (this.swiperInstanceModal) {
      this.swiperInstanceModal.destroy(true, true);
    }

    // Inicializa Swiper en el modal
    this.swiperInstanceModal = new Swiper('.custom-modal .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  iniciarSwiperFooter() {
    // Evita inicializar múltiples veces
    if (this.swiperInstanceFooter) {
      this.swiperInstanceFooter.destroy(true, true);
    }

    // Inicializa Swiper en el footer
    this.swiperInstanceFooter = new Swiper('.footer-container .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swiper from 'swiper';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  switchValue: boolean = false; // Valor inicial del toggle
  isMenuModalOpen: boolean = false; // Control de apertura del modal del menú
  isToggleModalOpen: boolean = false; // Control de apertura del modal del toggle
  initialSwitchValue: boolean = false; // Guardar el estado inicial del toggle
  hasCardContent: boolean = false; // Cambia esto dependiendo si hay contenido o no
  selectedContent: string = 'Todos';
  data: any;
  url_new: string = '/nuevo-anu-pone-alq';
  userData: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    loop: false,
  };
  constructor(
    private router: Router,
    private modalController: ModalController,
    private storage: StorageService,
    private api: ApiService,
    private cdr: ChangeDetectorRef
  ) {

  } // Inyecta el ModalController
  changeContent(content: string) {
    this.selectedContent = content; // Cambia el contenido seleccionado
    if (this.selectedContent === 'Comienza Pronto') {
      // Usa un timeout para asegurarte de que el DOM esté actualizado
      setTimeout(() => {
        this.iniciarSwiper();
      }, 0);
    }
  }
  iniciarSwiper() {
    const miSwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Asegura que las bullets sean clicables
        type: 'bullets', // Define el tipo como bullets
      },
    });
  }
  ngOnInit() {
    this.getUserData();
    this.getReservas();
    this.getDni();

  }

  async getUserData() {
    this.userData = await this.storage.getItem('user');
  }

  async getDni(){
    const userDni = await this.storage.getItem('userDni');
    if (userDni) {
      this.url_new = '/descripcion-del-espacio';
    }

    if (this.userData.esu_id.esu_descri !== 'REGISTRADO') {
      this.url_new = '/descripcion-del-espacio';
    }
  }

  // Abre el modal del menú
  async openMenuModal() {
    this.isMenuModalOpen = true;
  }

  // Cierra el modal del menú
  async dismissMenuModal() {
    this.isMenuModalOpen = false;
  }

  // Abre el modal del toggle después de cerrar el modal del menú
  async onToggleChange(event: any) {
    if (event.detail.checked) {
      // Guarda el estado actual del toggle antes de abrir el modal
      this.initialSwitchValue = this.switchValue;
      await this.dismissMenuModal(); // Cierra el modal del menú
      this.isToggleModalOpen = true; // Abre el modal del toggle
    } else {
      // Si el toggle se desactiva sin abrir el modal, revertir el valor si el modal estaba abierto
      if (!this.isToggleModalOpen) {
        this.switchValue = false;
      }
    }
  }

  // Confirma la acción del apagón general
  confirmAction() {
    console.log("Apagón general confirmado");
    // Aquí no cambies el estado del toggle, así se mantendrá activado
    this.dismissToggleModal(); // Cierra el modal del toggle
  }

  // Maneja la cancelación de la acción
  cancelAction() {
    // Restaurar el estado del toggle al valor antes de abrir el modal
    this.switchValue = false; // Cambia el valor del toggle a false al cancelar
    this.dismissToggleModal(); // Cierra el modal del toggle
  }

  // Cierra sesión
  async sesion_close() {
    await this.storage.removeItem('token');
    await this.modalController.dismiss();
    this.router.navigate(['/login']);
  }
  async dismissToggleModal(fromBackdrop: boolean = false) {
    this.isToggleModalOpen = false; // Cierra el modal del toggle

    if (fromBackdrop) {
      // Si el modal se cierra desde el backdrop, desactiva el toggle
      this.switchValue = false;
    }

    this.cdr.detectChanges(); // Asegura que los cambios se reflejen correctamente
  }
  // Salir de cualquier página/modal
  exit() {
    this.modalController.dismiss(null, 'isMenuModalOpen');
  }

  async getReservas() {
    const token = await this.storage.getItem('token');
    this.api.getReservations(token).subscribe(
      async (response: any) => {
        this.data = response.data;
        console.log(this.data);
      },
      (error: any) => {
        console.error('Error al enviar el mensaje:', error);
      }
    );
  }

}

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
  n_data: number = 0;
  data_pendientes: any[] = [];
  n_data_pendientes: number = 0;
  data_comienza_pronto: any[] = [];
  n_data_comienza: number = 0;
  data_encurso: any[] = [];
  n_data_encurso: number = 0;
  data_finalizado: any[] = [];
  n_data_finalizado: number = 0;
  data_canceladas: any[] = [];
  n_data_canceladas: number = 0;
  horasFormateadas: { [key: string]: string } = {};

  url_new: string = '/nuevo-anu-pone-alq';
  userData: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    loop: false,
  };
  constructor(
    private readonly router: Router,
    private readonly modalController: ModalController,
    private readonly storage: StorageService,
    private readonly api: ApiService,
    private readonly cdr: ChangeDetectorRef
  ) {

  }
  // Inyecta el ModalController
  changeContent(content: string) {
    this.selectedContent = content; // Cambia el contenido seleccionado
    setTimeout(() => {
      this.iniciarSwiper();
    }, 0);
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

  async getConfirm(id: string) {
    const token = await this.storage.getItem('token');
    this.api.updateReserve(token, id, '2').subscribe(
      async (response: any) => {
        console.log(response);
        this.getReservas();
      },
      (error: any) => {
        console.error('Error al enviar el mensaje:', error);
      }
    );
  }

  async getCancel(id: string) {
    const token = await this.storage.getItem('token');
    this.api.updateReserve(token, id, '3').subscribe(
      async (response: any) => {
        console.log(response);
        this.getReservas();
      },
      (error: any) => {
        console.error('Error al enviar el mensaje:', error);
      }
    );
  }

  async getFinalizar(id: string) {
    const token = await this.storage.getItem('token');
    this.api.updateReserve(token, id, '4').subscribe(
      async (response: any) => {
        console.log(response);
        this.getReservas();
      },
      (error: any) => {
        console.error('Error al enviar el mensaje:', error);
      }
    );
  }

  ngOnInit() {
    setTimeout(() => {
      this.iniciarSwiper();
    }, 0);
    this.getUserData();
    this.getReservas();
    this.getDni();
  }

  async getUserData() {
    this.userData = await this.storage.getItem('user');
  }

  async getDni() {
    const userDni = await this.storage.getItem('userDni');
    if (userDni) {
      this.url_new = '/descripcion-del-espacio';
    } else {
      this.getUserData();
      if (this.userData.esu_id.esu_descri !== 'REGISTRADO') {
        this.url_new = '/descripcion-del-espacio';
      }
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

  getHoraFormat(hora: string) {
    const fecha = new Date(hora);

    return fecha.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }

  async getReservas() {
    const token = await this.storage.getItem('token');
    this.api.getReservations(token).subscribe(
      async (response: any) => {
        this.data = response.data;
        console.log(this.data);
        this.n_data = Object.keys(this.data).length;
        this.getPendientes(this.data);
        this.getFinalizadas(this.data);
        this.getCanceladas(this.data);
        this.getComienzaPronto(this.data);
        this.getEnCurso(this.data);
      },
      (error: any) => {
        console.error('Error al enviar el mensaje:', error);
      }
    );
  }

  async getPendientes(datos: any) {
    datos.map((reserva: any) => {
      if (reserva.rst_id === 1) {
        this.data_pendientes.push(reserva);
      }
    });
    //console.log(this.data_pendientes);
    this.n_data_pendientes = Object.keys(this.data_pendientes).length;
  }

  getComienzaPronto(datos: any) {
    datos.map((reserva: any) => {
      const fechaEspecifica = reserva.res_fecini;
      const ahora = new Date();
      const ahoraMas30Minutos = new Date(ahora.getTime() + 30 * 60000);
      if (ahoraMas30Minutos <= fechaEspecifica && reserva.rst_id == !3 && reserva.rst_id == !4) {
        this.data_comienza_pronto.push(reserva);
      }
    });
    this.n_data_comienza = Object.keys(this.data_comienza_pronto).length;
  }

  getEnCurso(datos: any) {
    const fechaActual = new Date();
    datos.map((reserva: any) => {

      const fechaHoraInicio = new Date(reserva.res_fecini);
      const fechaHoraFin = new Date(reserva.res_fecfin);

      if (fechaActual >= fechaHoraInicio && fechaActual <= fechaHoraFin && reserva.rst_id == !3 && reserva.rst_id == !4) {
        this.data_encurso.push(reserva);
      }
    });
    this.n_data_encurso = Object.keys(this.data_encurso).length;
  }

  getFinalizadas(datos: any) {
    datos.map((reserva: any) => {
      if (reserva.rst_id === 4) {
        this.data_finalizado.push(reserva);
      }
    });
    //console.log(this.data_finalizado);
    this.n_data_finalizado = Object.keys(this.data_finalizado).length;
  }

  getCanceladas(datos: any) {
    datos.map((reserva: any) => {
      if (reserva.rst_id === 3) {
        this.data_canceladas.push(reserva);
      }
    });
    console.log(this.data_canceladas);
    this.n_data_canceladas = Object.keys(this.data_canceladas).length;
  }
}

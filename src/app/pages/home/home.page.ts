import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swiper from 'swiper';
import { interval, Subscription } from 'rxjs';
import { Geolocation, PositionOptions } from '@capacitor/geolocation';
import { Camera } from '@capacitor/camera';
import { HttpClient } from '@angular/common/http';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  switchValue: boolean = false; // Valor inicial del toggle
  isMenuModalOpen: boolean = false; // Control de apertura del modal del menú
  isValidModalOpen: boolean = false; // Modal de validacion DNI
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
  data_apagon: any;
  apagon_val: boolean = false;
  saludo: string = '';
  userData: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    loop: false,
  };
  countdownTimers: {
    [key: number]: { hours: number; minutes: number; seconds: number };
  } = {};
  timerSubscription: Subscription = new Subscription();
  isLoading = false;
  data_ads: any[] = [];
  ads_active: number = 0;
  apiKey: string = 'AIzaSyBZkfs324ThxziQZNBudoIPv8JT8Vp7V2s';

  constructor(
    private readonly router: Router,
    private readonly modalController: ModalController,
    private readonly storage: StorageService,
    private readonly api: ApiService,
    private readonly cdr: ChangeDetectorRef,
    private readonly platform: Platform,
    private readonly http: HttpClient,
    private navCtrl: NavController
  ) {}

  ngOnDestroy() {
    // Limpiar la suscripción al destruir el componente
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  // Función para solicitar permisos de ubicación y obtener la ubicación actual
  async requestLocationPermission() {
    try {
      // Verificar si ya tenemos la ubicación guardada
      const savedLocation = await this.storage.getItem('userLocation');
      if (savedLocation) {
        console.log('Ubicación ya guardada:', savedLocation);
        return;
      }

      // Verificar permisos
      const permissionStatus = await Geolocation.checkPermissions();

      if (permissionStatus.location !== 'granted') {
        // Solicitar permisos usando el sistema nativo
        const requestResult = await Geolocation.requestPermissions();

        if (requestResult.location !== 'granted') {
          console.log('Permisos de ubicación denegados');
          return;
        }
      }

      // Obtener ubicación actual
      const options: PositionOptions = {
        enableHighAccuracy: true,
        timeout: 10000,
      };

      const position = await Geolocation.getCurrentPosition(options);

      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        timestamp: new Date().toISOString(),
      };

      // Obtener dirección usando Google Geocoding API
      await this.getAddressFromCoordinates(userLocation);
    } catch (error) {
      console.error('Error al obtener ubicación:', error);
    }
  }

  // Función para solicitar permisos de cámara y galería
  async requestCameraAndGalleryPermissions() {
    try {
      // Verificar permisos de cámara
      const cameraPermissionStatus = await Camera.checkPermissions();
      let cameraGranted = cameraPermissionStatus.camera === 'granted';
      let photosGranted = cameraPermissionStatus.photos === 'granted';

      if (cameraPermissionStatus.camera !== 'granted') {
        const cameraRequestResult = await Camera.requestPermissions();
        if (cameraRequestResult.camera !== 'granted') {
          console.log('Permisos de cámara denegados');
        } else {
          console.log('Permisos de cámara concedidos');
          cameraGranted = true;
        }
      }

      // Verificar permisos de galería (photos)
      if (cameraPermissionStatus.photos !== 'granted') {
        const photosRequestResult = await Camera.requestPermissions();
        if (photosRequestResult.photos !== 'granted') {
          console.log('Permisos de galería denegados');
        } else {
          console.log('Permisos de galería concedidos');
          photosGranted = true;
        }
      }

      // Guardar el estado de los permisos en storage
      await this.storage.setItem('cameraPermissions', {
        camera: cameraGranted,
        photos: photosGranted,
      });
    } catch (error) {
      console.error('Error al solicitar permisos de cámara y galería:', error);
    }
  }

  // Función para obtener la dirección a partir de coordenadas
  async getAddressFromCoordinates(location: { lat: number; lng: number }) {
    try {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${this.apiKey}`;

      this.http.get(url).subscribe(
        async (response: any) => {
          if (
            response.status === 'OK' &&
            response.results &&
            response.results.length > 0
          ) {
            const address = response.results[0].formatted_address;

            const userLocationWithAddress = {
              ...location,
              address: address,
            };

            // Guardar en storage
            await this.storage.setItem('userLocation', userLocationWithAddress);
            console.log('Ubicación guardada:', userLocationWithAddress);
          }
        },
        async (error) => {
          console.error('Error al obtener dirección:', error);
          // Guardar solo las coordenadas si no se puede obtener la dirección
          await this.storage.setItem('userLocation', location);
        }
      );
    } catch (error) {
      console.error('Error en getAddressFromCoordinates:', error);
    }
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
      spaceBetween: 10,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Asegura que las bullets sean clicables
        type: 'bullets', // Define el tipo como bullets
      },
    });
  }

  async getConfirm(id: string) {
    console.log('inside confirm');
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
        this.dismissAnyModal();
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

  async setEnCurso(id: string) {
    const token = await this.storage.getItem('token');
    this.api.updateReserve(token, id, '5').subscribe(
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
    this.getUserData();
    this.getReservas();
    this.getDni();
    this.getBlackout();
    this.requestLocationPermission(); // Solicitar permisos de ubicación
    this.requestCameraAndGalleryPermissions(); // Solicitar permisos de cámara y galería
    setTimeout(() => {
      this.iniciarSwiper();
    }, 0);

    // Actualizar los temporizadores cada segundo
    this.timerSubscription = interval(1000).subscribe(() => {
      this.updateTimers();
    });
  }

  // Removed duplicate implementation of ionViewWillEnter
  async getBlackout() {
    let apagon = await this.storage.getItem('apagon');
    if (apagon !== null) {
      this.apagon_val = apagon;
    }
  }

  async getUserData() {
    this.userData = await this.storage.getItem('user');
    this.setSaludo();
  }

  async getDni() {
    const userDni = await this.storage.getItem('userDni');
    console.log('user DNI', userDni);
    this.getUserData();
  }

  // Abre el modal del menú
  openMenuModal() {
    this.isMenuModalOpen = true;
  }

  // Cierra el modal del menú
  dismissMenuModal() {
    this.isMenuModalOpen = false;
  }

  // Cierra el modal de validacion
  dismissValidModal() {
    this.isValidModalOpen = false;
  }

  // Abre el modal del toggle después de cerrar el modal del menú
  async onToggleChange(event: any) {
    if (event.detail.checked) {
      // Guarda el estado actual del toggle antes de abrir el modal
      this.initialSwitchValue = this.switchValue;
      await this.dismissMenuModal(); // Cierra el modal del menú
      this.isToggleModalOpen = true; // Abre el modal del toggle
    } else {
      this.activateBlackout(false);
      // Si el toggle se desactiva sin abrir el modal, revertir el valor si el modal estaba abierto
      if (!this.isToggleModalOpen) {
        this.switchValue = false;
      }
    }
  }

  async activateBlackout(value: boolean) {
    const token = await this.storage.getItem('token');
    let mensaje = '';
    if (value === true) {
      this.data_apagon = {
        turnOff: true,
      };
      mensaje = '¡Apagon activo!';
      this.storage.setItem('apagon', true);
      this.apagon_val = true;
    } else {
      this.data_apagon = {
        turnOff: false,
      };
      mensaje = '¡Apagon inactivo!';
      this.storage.setItem('apagon', false);
      this.apagon_val = false;
    }

    this.api.turnBlackout(token, this.data_apagon).subscribe({
      next: (response) => {
        alert(mensaje);
        console.log('Respuesta:', response);
      },
      error: (error) => {
        alert('Ocurrio un error');
        console.error('Error:', error);
      },
    });
  }

  // Confirma la acción del apagón general
  confirmAction() {
    console.log('Apagón general confirmado');
    this.activateBlackout(true);
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
    await this.storage.clear();
    await this.modalController.dismiss();
    this.navCtrl.navigateRoot('/login');
  }
  async dismissToggleModal(fromBackdrop: boolean = false) {
    this.isToggleModalOpen = false; // Cierra el modal del toggle

    if (fromBackdrop) {
      // Si el modal se cierra desde el backdrop, desactiva el toggle
      this.switchValue = false;
    }

    this.cdr.detectChanges(); // Asegura que los cambios se reflejen correctamente
  }
  openWhatsApp() {
    const url = 'https://wa.me/message/YCTKTTHJPG6DE1';
    window.open(url, '_system'); // _system abre fuera de la webview
  }

  exit(page: number) {
    let urlNav = '';

    switch (page) {
      case 1:
        urlNav = '/descripcion-del-estacionamiento';
        break;
      case 2:
        urlNav = '/anuncio-caracteristicas';
        break;
      case 3:
        urlNav = '/terminos-y-condiciones';
        break;
    }

    console.log(this.userData);

    const validate_arr = this.userData.esu_id;

    if (validate_arr.esu_id === 1 && page === 1) {
      this.modalController.dismiss(null, 'isMenuModalOpen');
      this.isValidModalOpen = true;
    } else {
      this.modalController.dismiss(null, 'isMenuModalOpen');
      this.router.navigate([urlNav]);
    }
  }

  getHoraFormat(hora: string) {
    const fecha = new Date(hora);

    return fecha.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }
  async getReservas() {
    this.isLoading = true;
    const token = await this.storage.getItem('token');
    this.api.getReservations(token).subscribe(
      async (response: any) => {
        const ahora = new Date();

        response.data.forEach((element: any) => {
          // Ajustar fechas con +5 horas
          element.res_fecini = this.addFiveHours(element.res_fecini);
          element.res_fecfin = this.addFiveHours(element.res_fecfin);

          const inicio = new Date(element.res_fecini);
          const fin = new Date(element.res_fecfin);

          // Caso 1: Servicio EN CURSO (rst_id === 5) pero ya pasó la hora fin
          if (element.rst_id === 5 && ahora > fin) {
            this.countdownTimers[element.res_id] = {
              hours: 0,
              minutes: 0,
              seconds: 0,
            };
            element.allowFinalize = true; // botón FINALIZAR activo
          }

          // Caso 2: Servicio CONFIRMADO (rst_id === 2), ya empezó pero no se inició (no dio INICIAR)
          if (element.rst_id === 2 && ahora >= inicio && ahora <= fin) {
            element.rst_id = 5; // cambiar a EN CURSO
            element.rst_descri = 'EN CURSO';
            element.allowFinalize = true; // botón FINALIZAR activo

            const tiempoTranscurridoSegundos = Math.floor(
              (ahora.getTime() - inicio.getTime()) / 1000
            );
            const tiempoTotalSegundos = element.res_tiempo * 3600;
            const tiempoRestanteSegundos =
              tiempoTotalSegundos - tiempoTranscurridoSegundos;

            if (tiempoRestanteSegundos <= 0) {
              this.countdownTimers[element.res_id] = {
                hours: 0,
                minutes: 0,
                seconds: 0,
              };
            } else {
              this.countdownTimers[element.res_id] = {
                hours: Math.floor(tiempoRestanteSegundos / 3600),
                minutes: Math.floor((tiempoRestanteSegundos % 3600) / 60),
                seconds: tiempoRestanteSegundos % 60,
              };
              element.allowFinalize = true; // botón FINALIZAR activo
            }
          }

          // Para otros estados, desactivar allowFinalize
          if (element.rst_id !== 5) {
            element.allowFinalize = false;
          }
        });

        this.data = response.data;
        this.n_data = Object.keys(this.data).length;

        // Filtrar por estados
        this.getPendientes(this.data);
        this.getFinalizadas(this.data);
        this.getCanceladas(this.data);
        this.getComienzaPronto(this.data);
        this.getEnCurso(this.data);

        this.initializeTimers();
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error al enviar el mensaje:', error);
        this.isLoading = false;
      }
    );
  }

  async getPendientes(datos: any) {
    this.data_pendientes = [];
    datos.map((reserva: any) => {
      if (reserva.rst_id === 1) {
        this.data_pendientes.push(reserva);
      }
    });
    //console.log(this.data_pendientes);
    this.n_data_pendientes = Object.keys(this.data_pendientes).length;
  }

  getComienzaPronto(datos: any) {
    this.data_comienza_pronto = [];
    datos.map((reserva: any) => {
      const fechaEspecifica = reserva.res_fecini;
      const ahora = new Date();
      const ahoraMas30Minutos = new Date(ahora.getTime() + 30 * 60000);
      if (
        ahoraMas30Minutos <= fechaEspecifica &&
        reserva.rst_id !== 3 &&
        reserva.rst_id !== 4
      ) {
        this.data_comienza_pronto.push(reserva);
      }
    });
    this.n_data_comienza = Object.keys(this.data_comienza_pronto).length;
  }

  getEnCurso(datos: any) {
    this.data_encurso = [];
    datos.map((reserva: any) => {
      if (reserva.rst_id === 5) {
        this.data_encurso.push(reserva);
      }
    });
    this.n_data_encurso = Object.keys(this.data_encurso).length;
  }

  getFinalizadas(datos: any) {
    this.data_finalizado = [];
    datos.map((reserva: any) => {
      if (reserva.rst_id === 4) {
        this.data_finalizado.push(reserva);
      }
    });
    //console.log(this.data_finalizado);
    this.n_data_finalizado = Object.keys(this.data_finalizado).length;
  }

  getCanceladas(datos: any) {
    this.data_canceladas = [];
    datos.map((reserva: any) => {
      if (reserva.rst_id === 3) {
        this.data_canceladas.push(reserva);
      }
    });
    this.n_data_canceladas = Object.keys(this.data_canceladas).length;
  }

  setSaludo() {
    if (this.userData && this.userData.tge_id) {
      this.saludo =
        this.userData.tge_id.tge_id === 1 ? 'Bienvenido' : 'Bienvenida';
    }
  }

  transformTipDescri(item: any): string {
    let tipDescri = item.tip_descri.toLowerCase();
    if (item.res_tiempo > 1) {
      tipDescri += 's';
    }
    return tipDescri;
  }

  formatTime(date: string): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    let timeString = new Date(date)
      .toLocaleTimeString('es-US', options)
      .replace(/\./g, '');
    timeString = timeString.replace('a m', 'am').replace('p m', 'pm');
    return timeString;
  }

  toCamelCase(text: string, capitalizeAfterSpace: boolean = false): string {
    if (!text) return '';

    // Convierte todo el texto a minúsculas primero
    let result = text.toLowerCase();

    // Convierte la primera letra a mayúscula
    result = result.charAt(0).toUpperCase() + result.slice(1);

    // Si se debe capitalizar después de espacios
    if (capitalizeAfterSpace) {
      result = result.replace(/ ([a-z])/g, function (match, group1) {
        return ' ' + group1.toUpperCase();
      });
    }

    return result;
  }

  toLowerCase(text: string): string {
    switch (text) {
      case 'DIA':
        return 'DÍA'.toLowerCase();
      case 'dia':
        return 'día';
      default:
        return text.toLowerCase();
    }
  }

  initializeTimers() {
    // Para los datos principales
    if (this.data) {
      this.data.forEach((item: any) => {
        this.initializeTimer(item);
      });
    }

    // Para los datos pendientes
    if (this.data_pendientes) {
      this.data_pendientes.forEach((item) => {
        this.initializeTimer(item);
      });
    }

    if (this.data_encurso) {
      this.data_encurso.forEach((item) => {
        this.initializeTimer(item);
      });
    }

    if (this.data_canceladas) {
      this.data_canceladas.forEach((item) => {
        this.initializeTimer(item);
      });
    }

    if (this.data_comienza_pronto) {
      this.data_comienza_pronto.forEach((item) => {
        this.initializeTimer(item);
      });
    }

    if (this.data_finalizado) {
      this.data_finalizado.forEach((item) => {
        this.initializeTimer(item);
      });
    }
  }

  initializeTimer(item: any) {
    if (this.countdownTimers[item.res_id]) {
      return;
    }

    if (item.rst_id === 5) {
      const fechaInicio = new Date(item.res_fecini);
      const fechaActual = new Date();
      const tiempoTranscurridoMs =
        fechaActual.getTime() - fechaInicio.getTime();

      const tiempoTranscurridoSegundos = Math.floor(
        tiempoTranscurridoMs / 1000
      );

      const tiempoTotalSegundos = item.res_tiempo * 3600;

      const tiempoRestanteSegundos =
        tiempoTotalSegundos - tiempoTranscurridoSegundos;

      if (tiempoRestanteSegundos <= 0) {
        this.countdownTimers[item.res_id] = {
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      } else {
        const horasRestantes = Math.floor(tiempoRestanteSegundos / 3600);
        const minutosRestantes = Math.floor(
          (tiempoRestanteSegundos % 3600) / 60
        );
        const segundosRestantes = tiempoRestanteSegundos % 60;

        this.countdownTimers[item.res_id] = {
          hours: horasRestantes,
          minutes: minutosRestantes,
          seconds: segundosRestantes,
        };
      }
    } else {
      this.countdownTimers[item.res_id] = {
        hours: Math.floor(item.res_tiempo),
        minutes: 0,
        seconds: 0,
      };
    }
  }

  updateTimers() {
    Object.keys(this.countdownTimers).forEach((resId) => {
      // Busca el elemento por su res_id
      const item = this.findItemById(Number(resId));
      if (!item) return;

      const timer = this.countdownTimers[Number(resId)];

      // Solo disminuir el tiempo si el estado es "EN CURSO" (rst_id = 5)
      if (item.rst_id === 5) {
        // Reducir un segundo
        if (timer.seconds > 0) {
          timer.seconds--;
        } else {
          if (timer.minutes > 0) {
            timer.minutes--;
            timer.seconds = 59;
          } else {
            if (timer.hours > 0) {
              timer.hours--;
              timer.minutes = 59;
              timer.seconds = 59;
            }
          }
        }
      }
    });
  }

  formatCountdown(resId: number): string {
    // Busca el elemento por su res_id
    const item = this.findItemById(resId);
    if (!item) return '00:00:00';

    // Si el estado es cancelado o finalizado, mostrar 00:00:00
    if (item.rst_id === 3 || item.rst_id === 4) {
      return '00:00:00';
    }

    // Obtiene el timer para este resId
    const timer = this.countdownTimers[resId];
    if (!timer) return '00:00:00';

    const hours = timer.hours.toString().padStart(2, '0');
    const minutes = timer.minutes.toString().padStart(2, '0');
    const seconds = timer.seconds.toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  }
  findItemById(resId: number): any {
    // Buscar en todas las colecciones de datos
    if (this.data) {
      const found = this.data.find((item: any) => item.res_id === resId);
      if (found) return found;
    }

    if (this.data_pendientes) {
      const found = this.data_pendientes.find(
        (item: any) => item.res_id === resId
      );
      if (found) return found;
    }

    if (this.data_encurso) {
      const found = this.data_encurso.find(
        (item: any) => item.res_id === resId
      );
      if (found) return found;
    }

    if (this.data_comienza_pronto) {
      const found = this.data_comienza_pronto.find(
        (item: any) => item.res_id === resId
      );
      if (found) return found;
    }

    if (this.data_finalizado) {
      const found = this.data_finalizado.find(
        (item: any) => item.res_id === resId
      );
      if (found) return found;
    }

    if (this.data_canceladas) {
      const found = this.data_canceladas.find(
        (item: any) => item.res_id === resId
      );
      if (found) return found;
    }

    return null;
  }
  addStateInCurse(list: [any]): any[] {
    const fechaActual = new Date();
    return list.map((item: any) => {
      if (item.rst_id === 2) {
        const fechaHoraInicio = new Date(item.res_fecini);
        const fechaHoraFin = new Date(item.res_fecfin);

        if (fechaActual >= fechaHoraInicio && fechaActual <= fechaHoraFin) {
          return { ...item, rst_id: 5, rst_descri: 'EN CURSO' };
        } else {
          return item;
        }
      } else {
        return item;
      }
    });
  }

  addFiveHours(date: string): string {
    const fecha = new Date(date);
    fecha.setHours(fecha.getHours() + 5);
    return fecha.toISOString();
  }

  formatTimeToDisplay(item: any) {
    if (item.tip_id === 1) {
      return `${item.res_tiempo}h`;
    } else {
      return `${item.res_tiempo / 24}d`;
    }
  }

  formatDateToDayMonth(date: string): string {
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];

    const fecha = new Date(date);
    const day = fecha.getDate();
    const month = months[fecha.getMonth()];

    return `${day} de ${month}`;
  }

  dismissAnyModal() {
    const modals = document.querySelectorAll('ion-modal');
    modals.forEach((modal) => {
      if (modal) {
        (modal as any).dismiss();
      }
    });
  }

  async getAds() {
    const token = await this.storage.getItem('token');
    this.api.getAds(token).subscribe(
      (response: any) => {
        this.data_ads = response.data;
        if (this.data_ads.length <= 0) {
          this.ads_active = 0;
        } else {
          this.ads_active = 1;
        }
      },
      (error: any) => {
        console.error('Error al cargar los anuncios:', error);
        this.cdr.detectChanges();
      }
    );
  }

  ionViewWillEnter() {
    this.isLoading = true;
    // Reset data arrays to prevent duplicate entries when returning to the page
    this.data = null;
    this.data_pendientes = [];
    this.data_comienza_pronto = [];
    this.data_encurso = [];
    this.data_finalizado = [];
    this.data_canceladas = [];

    // Reset counters
    this.n_data = 0;
    this.n_data_pendientes = 0;
    this.n_data_comienza = 0;
    this.n_data_encurso = 0;
    this.n_data_finalizado = 0;
    this.n_data_canceladas = 0;

    // Get fresh data
    this.getUserData();
    this.getReservas();
    this.getDni();
    this.getBlackout();
    this.getAds();
    this.requestCameraAndGalleryPermissions(); // Solicitar permisos de cámara y galería

    const validate_arr = this.userData.esu_id;

    if (validate_arr.esu_id === 1) {
      this.isValidModalOpen = true;
    }

    // Initialize UI components
    setTimeout(() => {
      this.iniciarSwiper();
    }, 0);

    // Clear any existing subscription to avoid duplicates
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    // Restart the timer subscription
    this.timerSubscription = interval(1000).subscribe(() => {
      this.updateTimers();
    });

    // Force change detection to update the UI
    this.cdr.detectChanges();
  }

  // Añadir esta nueva función
  isReservationWithinOneHour(item: any): boolean {
    // Verificar si el estado es "confirmado" (rst_id === 2)
    if (item.rst_id !== 2) {
      return false;
    }

    const now = new Date();
    const startTime = new Date(item.res_fecini);
    const endTime = new Date(item.res_fecfin);

    // Caso 1: La hora actual es después de la hora de inicio pero antes de la hora de finalización
    // (la reserva debería estar activa)
    if (now >= startTime && now <= endTime) {
      return true;
    }

    // Caso 2: La hora actual es antes de la hora de inicio pero falta menos de una hora
    if (now < startTime) {
      // Calcular la diferencia en milisegundos
      const timeDifference = startTime.getTime() - now.getTime();
      // Convertir a horas
      const hoursDifference = timeDifference / (1000 * 60 * 60);
      // Habilitar si falta menos de 1 hora para el inicio
      return hoursDifference <= 1;
    }

    // En cualquier otro caso (ya pasó la hora de finalización), no habilitar
    return false;
  }

  async goToValidate() {
    this.isValidModalOpen = false;
    this.dismissAnyModal();
    await this.router.navigate(['/adj-dt-dni']);
  }
  doRefresh(event: any) {
    this.isLoading = true;

    // Reiniciar datos
    this.data = null;
    this.data_pendientes = [];
    this.data_comienza_pronto = [];
    this.data_encurso = [];
    this.data_finalizado = [];
    this.data_canceladas = [];

    this.n_data = 0;
    this.n_data_pendientes = 0;
    this.n_data_comienza = 0;
    this.n_data_encurso = 0;
    this.n_data_finalizado = 0;
    this.n_data_canceladas = 0;

    Promise.all([
      this.getUserData(),
      this.getReservas(),
      this.getDni(),
      this.getBlackout(),
      this.getAds(),
    ])
      .then(() => {
        setTimeout(() => {
          this.iniciarSwiper();
        }, 0);

        if (this.timerSubscription) {
          this.timerSubscription.unsubscribe();
        }
        this.timerSubscription = interval(1000).subscribe(() => {
          this.updateTimers();
        });

        event.target.complete();
        this.cdr.detectChanges();
      })
      .catch((error) => {
        console.error('Error en la actualización:', error);
        event.target.complete();
      });
  }
}

import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import Swiper from 'swiper';
import {} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from '../../services/storage.service';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import { ModalController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs'; // Importar Subscription
import { filter } from 'rxjs/operators'; // Importar filter

@Component({
  selector: 'app-anuncio-caracteristicas',
  templateUrl: './anuncio-caracteristicas.page.html',
  styleUrls: ['./anuncio-caracteristicas.page.scss'],
})
export class AnuncioCaracteristicasPage implements OnInit, OnDestroy {
  selectedContent: string = 'Características'; // Inicializa la variable con el valor por defecto
  text = ''; // Texto del primer textarea
  textareas: string[] = []; // Array para almacenar los textareas adicionales
  advertisements: any[] = [];
  selectedIndex: number | null = null;
  mainAd: any;
  gar_nombre: any;
  gar_nombre_mod: any;
  files: File[] = [];
  gar_descri: any;
  gar_ancho: any;
  gar_largo: any;
  gar_alto: any;
  uga_direcc: any;
  chck_serv1: boolean = false;
  chck_serv2: boolean = false;
  chck_serv3: boolean = false;
  chck_serv4: boolean = false;
  chck_serv5: boolean = false;
  chck_pref1: boolean = false;
  chck_pref2: boolean = false;
  chck_pref3: boolean = false;
  selectedGarId: number | null = null;
  precio_hora: any;
  precio_dia: any;
  chck_dom: boolean = false;
  chck_lun: boolean = false;
  chck_mar: boolean = false;
  chck_mie: boolean = false;
  chck_jue: boolean = false;
  chck_vie: boolean = false;
  chck_sab: boolean = false;
  hora_init: any;
  hora_end: any;
  chck_hora: boolean = false;
  isLoading: boolean = true; // Siempre comienza en true
  private routerSubscription!: Subscription;
  private swiperInstance: any;
  showContent1: boolean = false;
  showContent2: boolean = false;
  showContentEdit: boolean = false;
  showContentLugares: boolean = false;
  showContentDimension: boolean = false;
  showContentDirec: boolean = false;
  @ViewChild('trashModal') trashModal!: IonModal;
  @ViewChild('selectModal') selectModal!: IonModal;

  constructor(
    private router: Router,
    private api: ApiService,
    private storage: StorageService,
    private modalController: ModalController,
    private cdr: ChangeDetectorRef
  ) {}

  // Método para reiniciar el estado de la página
  resetPageState() {
    this.isLoading = true;
    // Destruir la instancia anterior de Swiper si existe
    if (this.swiperInstance) {
      this.swiperInstance.destroy();
      this.swiperInstance = null;
    }
    // Cargar el contenido
    this.loadContent();
  }

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigateByUrl(route, { replaceUrl: true });
    }
  }

  handleOpenModal(modalId: string) {
    console.log(`Modal ${modalId} abierto`);
    if (modalId === 'open-modal2') {
      this.selectModal.present();
    }
  }

  handleOpenTrashModal(modalId: string) {
    console.log(`Modal de papelera ${modalId} abierto`);
    this.trashModal.present();
  }

  async loadContent() {
    this.isLoading = true; // Asegurar que loading está activado
    const token = await this.storage.getItem('token');

    this.api.getAds(token).subscribe(
      (response: any) => {
        this.advertisements = response.data;

        if (this.advertisements.length <= 0) {
          alert('Debes crear un Anuncio antes!');
          this.router.navigate(['/tab-home/home']);
          return; // Salir del método para evitar errores
        }

        this.mainAd = this.advertisements[0];
        this.selectedGarId = this.mainAd.gar_id;
        this.gar_nombre = this.mainAd.gar_nombre;
        this.gar_nombre_mod = this.mainAd.gar_nombre;
        this.gar_descri = this.mainAd.gar_descri;
        this.gar_ancho = this.mainAd.gar_ancho;
        this.gar_largo = this.mainAd.gar_largo;
        this.gar_alto = this.mainAd.gar_alto;
        this.uga_direcc = this.mainAd.uga_direcc;
        this.precio_hora = this.mainAd.tipos_pagos[0].pag_monto;
        this.precio_dia = this.mainAd.tipos_pagos[1].pag_monto;
        this.checkServPref();

        // Esperar que el DOM se actualice
        this.cdr.detectChanges();

        // Inicializar Swiper después de que los datos estén cargados
        this.initSwiper();
      },
      (error: any) => {
        console.error('Error al cargar los anuncios:', error);
        this.isLoading = false; // Finalizar loading incluso en caso de error
        this.cdr.detectChanges();
      }
    );
  }
  async updateContent() {
    this.isLoading = true;
    const token = await this.storage.getItem('token');
    const id_select = this.mainAd.gar_id;

    this.api.getAds(token).subscribe(
      (response: any) => {
        this.advertisements = response.data;

        for (let i = 0; i < this.advertisements.length; i++) {
          if (this.advertisements[i].gar_id === id_select) {
            this.mainAd = this.advertisements[i];
            this.gar_nombre = this.mainAd.gar_nombre;
            this.gar_nombre_mod = this.mainAd.gar_nombre;
            this.gar_descri = this.mainAd.gar_descri;
            this.gar_ancho = this.mainAd.gar_ancho;
            this.gar_largo = this.mainAd.gar_largo;
            this.gar_alto = this.mainAd.gar_alto;
            this.uga_direcc = this.mainAd.uga_direcc;
            this.precio_hora = this.mainAd.tipos_pagos[0].pag_monto;
            this.precio_dia = this.mainAd.tipos_pagos[1].pag_monto;
            this.checkServPref();
          }
        }

        this.isLoading = false;

        // 👇 Forzar actualización visual
        this.cdr.detectChanges();
      },
      (error: any) => {
        console.error(error);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    );
  }

  async onTimeChange(event: any, type: number) {
    const selectedTime = event.detail.value;
    const fecha_date = new Date(selectedTime);
    const hours = fecha_date.getHours().toString().padStart(2, '0');
    const minutes = fecha_date.getMinutes().toString().padStart(2, '0');
    const result = `${hours}:${minutes}`;
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    formData.append(type === 1 ? 'rga_hora_inicio' : 'rga_hora_fin', result);
    formData.append('gar_id', this.mainAd.gar_id);

    this.api.updateAd(token, formData).subscribe(
      (response: any) => {
        console.log('Horario actualizado:', response);
        this.updateContent(); // recargar todo
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
  }

  async onNumberInputChange() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    let pag_monto = '';
    pag_monto = `[{"tip_id":1,"pag_monto":${this.precio_hora}},{"tip_id":2,"pag_monto":${this.precio_dia}}]`;
    formData.append('pag_monto', pag_monto);
    formData.append('gar_id', this.mainAd.gar_id);
    this.api.updateAd(token, formData).subscribe(
      (response: any) => {
        this.updateContent();
        this.modalController.dismiss();
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
  }

  async checkServPref() {
    const savedToggle = await this.storage.getItem('chck_hora');
    if (savedToggle !== null) {
      this.chck_hora = savedToggle === 'true';
    }

    // Reiniciar estados
    this.chck_serv1 = false;
    this.chck_serv2 = false;
    this.chck_serv3 = false;
    this.chck_serv4 = false;
    this.chck_serv5 = false;
    this.chck_pref1 = false;
    this.chck_pref2 = false;
    this.chck_pref3 = false;
    this.chck_lun = false;
    this.chck_mar = false;
    this.chck_mie = false;
    this.chck_jue = false;
    this.chck_vie = false;
    this.chck_sab = false;
    this.chck_dom = false;

    // Servicios
    this.mainAd.tipos_servicios.map((servicio: any) => {
      if (servicio.sga_id === 1) this.chck_serv1 = true;
      if (servicio.sga_id === 2) this.chck_serv2 = true;
      if (servicio.sga_id === 3) this.chck_serv3 = true;
      if (servicio.sga_id === 4) this.chck_serv4 = true;
      if (servicio.sga_id === 5) this.chck_serv5 = true;
    });

    // Preferencias de garage
    this.mainAd.tipos_garages.map((garage: any) => {
      if (garage.tve_id === 1) this.chck_pref1 = true;
      if (garage.tve_id === 2) this.chck_pref2 = true;
      if (garage.tve_id === 3) this.chck_pref3 = true;
    });

    // Restricciones
    this.mainAd.tipos_restricciones.map((restrict: any) => {
      if (restrict.rga_tipo === 1) {
        // Días bloqueados
        switch (restrict.rga_dia) {
          case 1:
            this.chck_lun = true;
            break;
          case 2:
            this.chck_mar = true;
            break;
          case 3:
            this.chck_mie = true;
            break;
          case 4:
            this.chck_jue = true;
            break;
          case 5:
            this.chck_vie = true;
            break;
          case 6:
            this.chck_sab = true;
            break;
          case 7:
            this.chck_dom = true;
            break;
        }
      }

      if (restrict.rga_tipo === 2) {
        this.hora_init = restrict.rga_horainicio;
        this.hora_end = restrict.rga_horafin;

        this.chck_hora = !(
          this.hora_init === '10:00:00' && this.hora_end === '17:00:00'
        );
      }
    });
  }

  convertToISO(time: string): string {
    const currentDate = new Date(); // Obtiene la fecha actual
    const [hours, minutes] = time.split(':'); // Divide la cadena de tiempo en horas y minutos
    // Establece la hora y los minutos en la fecha actual
    currentDate.setUTCHours(parseInt(hours));
    currentDate.setUTCMinutes(parseInt(minutes));
    currentDate.setUTCSeconds(0); // Opcionalmente puedes establecer los segundos en 0
    // Convierte la fecha a formato ISO con los segundos (YYYY-MM-DDTHH:mm:00)
    return currentDate.toISOString().split('.')[0]; // Retorna en formato YYYY-MM-DDTHH:mm:ss
  }
  async checkDia(event: Event, num: number) {
    const checkbox = event.target as HTMLInputElement;
    const isChecked = checkbox.checked;
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    if (isChecked) {
      formData.append('rga_dia_a', num.toString());
    } else {
      formData.append('rga_dia_d', num.toString());
    }
    formData.append('gar_id', this.mainAd.gar_id);

    this.api.updateAd(token, formData).subscribe(
      (response: any) => {
        console.log('Día actualizado:', response);
        // NO uses response.data aquí. Siempre recarga los datos:
        this.updateContent();
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
  }

  async sendUpdateDias() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    await this.storage.setItem('chck_hora', String(this.chck_hora));
    if (this.chck_lun) formData.append('rga_dia_a', '1');
    if (this.chck_mar) formData.append('rga_dia_a', '2');
    if (this.chck_mie) formData.append('rga_dia_a', '3');
    if (this.chck_jue) formData.append('rga_dia_a', '4');
    if (this.chck_vie) formData.append('rga_dia_a', '5');
    if (this.chck_sab) formData.append('rga_dia_a', '6');
    if (this.chck_dom) formData.append('rga_dia_a', '7');

    if (this.chck_hora) {
      formData.append('rga_hora_inicio', this.hora_init || '10:00');
      formData.append('rga_hora_fin', this.hora_end || '17:00');
    } else {
      formData.append('rga_hora_inicio', '10:00');
      formData.append('rga_hora_fin', '17:00');
    }

    formData.append('gar_id', this.mainAd.gar_id);

    this.api.updateAd(token, formData).subscribe(
      (response: any) => {
        console.log('Días y horario actualizados', response);
        this.updateContent();
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
  }

  checkService(event: Event, num: number) {
    const checkbox = event.target as HTMLInputElement;
    const isChecked = checkbox.checked;
    if (isChecked) {
      switch (num) {
        case 1:
          this.chck_serv1 = true;
          break;
        case 2:
          this.chck_serv2 = true;
          break;
        case 3:
          this.chck_serv3 = true;
          break;
        case 4:
          this.chck_serv4 = true;
          break;
        case 5:
          this.chck_serv5 = true;
          break;
      }
    } else {
      switch (num) {
        case 1:
          this.chck_serv1 = false;
          break;
        case 2:
          this.chck_serv2 = false;
          break;
        case 3:
          this.chck_serv3 = false;
          break;
        case 4:
          this.chck_serv4 = false;
          break;
        case 5:
          this.chck_serv5 = false;
          break;
      }
    }
  }

  checkPref(event: Event, num: number) {
    const checkbox = event.target as HTMLInputElement;
    const isChecked = checkbox.checked;
    if (isChecked) {
      switch (num) {
        case 1:
          this.chck_pref1 = true;
          break;
        case 2:
          this.chck_pref2 = true;
          break;
        case 3:
          this.chck_pref3 = true;
          break;
      }
    } else {
      switch (num) {
        case 1:
          this.chck_pref1 = false;
          break;
        case 2:
          this.chck_pref2 = false;
          break;
        case 3:
          this.chck_pref3 = false;
          break;
      }
    }
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
    const placeholderText =
      'Ej. Ser puntal con las horas de reserva y salir al momento pactado';
    const placeholderHeight = placeholderText.length * 1;
    return `${placeholderHeight}px`;
  }

  isButtonActive(content: string): boolean {
    return this.selectedContent === content;
  }

  initSwiper() {
    // Crear nueva instancia de Swiper
    setTimeout(() => {
      this.swiperInstance = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: false,
        pagination: {
          el: '.swiper-pagination',
        },
      });
      this.isLoading = false; // Finalizar loading después de inicializar Swiper
      this.cdr.detectChanges(); // Forzar detección de cambios
    }, 200); // Tiempo suficiente para asegurar que el DOM esté listo
  }

  changeContent(content: string) {
    this.gar_nombre = this.mainAd.gar_nombre;
    this.gar_nombre_mod = this.mainAd.gar_nombre;
    this.gar_descri = this.mainAd.gar_descri;
    this.gar_ancho = this.mainAd.gar_ancho;
    this.gar_largo = this.mainAd.gar_largo;
    this.gar_alto = this.mainAd.gar_alto;
    this.uga_direcc = this.mainAd.uga_direcc;
    this.precio_hora = this.mainAd.tipos_pagos[0].pag_monto;
    this.precio_dia = this.mainAd.tipos_pagos[1].pag_monto;
    this.checkServPref();
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
    );

    this.modalController.dismiss(null, 'open-modal-tash');
  }

  ngOnInit() {
    this.resetPageState();
  }

  ionViewWillEnter() {
    // Restablecer el estado de la página
    this.resetPageState();
  }
  ngOnDestroy() {
    // Limpieza al destruir el componente
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
  onRadioChange(index: number) {
    this.selectedIndex = index;
  }
  async sendUpdateName() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    console.log(this.gar_nombre_mod);
    formData.append('gar_nombre', this.gar_nombre_mod);
    formData.append('gar_id', this.mainAd.gar_id);
    this.api.updateAd(token, formData).subscribe(
      (response: any) => {
        console.log(response);
        this.updateContent();
        this.modalController.dismiss();
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
  }

  async onSelect(event: { addedFiles: File[] }) {
    if (event.addedFiles.length) {
      this.files = [event.addedFiles[0]];
      await this.sendUpdatePic(this.files[0]);
    }
  }

  async onCheckboxChange(garId: number) {
    this.selectedGarId = garId;
    console.log('Seleccionado:', garId);
    this.advertisements.map((advice: any) => {
      if (garId == advice.gar_id) {
        this.mainAd = advice;
        this.gar_nombre = this.mainAd.gar_nombre;
        this.gar_descri = this.mainAd.gar_descri;
        this.gar_ancho = this.mainAd.gar_ancho;
        this.gar_largo = this.mainAd.gar_largo;
        this.gar_alto = this.mainAd.gar_alto;
        this.uga_direcc = this.mainAd.uga_direcc;
        this.precio_hora = this.mainAd.tipos_pagos[0].pag_monto;
        this.precio_dia = this.mainAd.tipos_pagos[1].pag_monto;
        this.checkServPref();
        this.modalController.dismiss();
        console.log(this.mainAd);
      }
    });
  }

  async sendUpdatePic(file: File) {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    formData.append('files', file);
    formData.append('gar_id', this.mainAd.gar_id);
    this.api.updateAd(token, formData).subscribe(
      (response: any) => {
        console.log(response);
        this.updateContent();
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
  }

  async sendUpdateDesc() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    formData.append('gar_descri', this.gar_descri);
    formData.append('gar_id', this.mainAd.gar_id);
    this.api.updateAd(token, formData).subscribe(
      (response: any) => {
        this.updateContent();
        this.modalController.dismiss();
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
  }
  async sendUpdateDim() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();

    let dimensionValue = '';
    if (this.selectedIndex === 0) {
      dimensionValue = '1';
    } else if (this.selectedIndex === 1) {
      dimensionValue = '2';
    } else if (this.selectedIndex === 2) {
      dimensionValue = '3';
    }
    formData.append('gar_largo', this.gar_largo);
    formData.append('gar_ancho', this.gar_ancho);
    formData.append('gar_alto', this.gar_alto);

    formData.append('gar_id', this.mainAd.gar_id);

    this.api.updateAd(token, formData).subscribe(
      (response: any) => {
        console.log(response);
        this.updateContent();
        this.modalController.dismiss();
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
  }

  async sendUpdateServ() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    if (this.chck_serv1 == true) {
      formData.append('services[]', '1');
    }
    if (this.chck_serv2 == true) {
      formData.append('services[]', '2');
    }
    if (this.chck_serv3 == true) {
      formData.append('services[]', '3');
    }
    if (this.chck_serv4 == true) {
      formData.append('services[]', '4');
    }
    if (this.chck_serv5 == true) {
      formData.append('services[]', '5');
    }
    console.log();
    formData.append('gar_id', this.mainAd.gar_id);
    this.api.updateAd(token, formData).subscribe(
      (response: any) => {
        console.log(response);
        this.updateContent();
        this.modalController.dismiss();
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
  }

  async sendUpdateVe() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    if (this.chck_pref1 == true) {
      formData.append('tve_id[]', '1');
    }
    if (this.chck_pref2 == true) {
      formData.append('tve_id[]', '2');
    }
    if (this.chck_pref3 == true) {
      formData.append('tve_id[]', '3');
    }
    formData.append('gar_id', this.mainAd.gar_id);
    this.api.updateAd(token, formData).subscribe(
      (response: any) => {
        console.log(response);
        this.updateContent();
        this.modalController.dismiss();
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
  }

  async sendUpdateUb() {
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    formData.append('uga_direcc', this.uga_direcc);
    formData.append('gar_id', this.mainAd.gar_id);
    this.api.updateAd(token, formData).subscribe(
      (response: any) => {
        console.log(response);
        this.updateContent();
        this.modalController.dismiss();
      },
      (error: any) => {
        alert('Hubo un error: ' + error.message);
      }
    );
  }

  toCamelCase(str: string): string {
    if (!str) return '';

    // Dividir el string en palabras
    const words = str.toLowerCase().split(' ');

    // Primera palabra en minúsculas, resto con primera letra mayúscula
    return words
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
  }
  onModalWillPresent() {
    this.selectedIndex = (this.mainAd?.tga_id ?? 1) - 1;
  }

  async sendUpdateLocation() {
    if (this.selectedIndex === undefined || this.selectedIndex === null) {
      this.selectedIndex = (this.mainAd?.tga_id ?? 1) - 1;
    }
    const token = await this.storage.getItem('token');
    const formData = new FormData();
    const newTgaId = (this.selectedIndex ?? 0) + 1;
    formData.append('tga_id', newTgaId.toString());
    formData.append('gar_id', this.mainAd.gar_id);
    this.api.updateAd(token, formData).subscribe(
      (response: any) => {
        console.log('Ubicación actualizada en backend:', response);
        this.updateContent();
        this.modalController.dismiss();
      },
      (error: any) => {
        console.error('Error al actualizar ubicación:', error);
        alert('Hubo un error al actualizar la ubicación.');
      }
    );
  }

  onToggleHorario() {
    console.log('Toggle horario cambiado:', this.chck_hora);
  }
}

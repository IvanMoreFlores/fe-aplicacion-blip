import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
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
  cci: string = '';
  cta: string = '';
  banco: string = '';
  banks: any;
  nom_ape: string = '';
  data_payment: any;
  data_ads: any;
  data_reserve: any;
  data_deposit: any;
  arr_payment: any[] = [];
  total_payment: any;
  total_final: number = 0;
  fecha_format_hoy: string = '';
  isToggleModalOpen = false;
  tipoCuenta: string = '';
  savedPaymentMethodo: any = null;

  constructor(
    private readonly api: ApiService,
    private readonly storage: StorageService
  ) {}

  getPlaceholderHeight(): string {
    const placeholderText =
      'Ej. Ser puntal con las horas de reserva y salir al momento pactado'; // Cambia esto al texto real de tu placeholder
    const placeholderHeight = placeholderText.length * 1; // Ajusta el factor según tus necesidades
    return `${placeholderHeight}px`;
  }

  ngOnInit() {
    const metodoGuardado = localStorage.getItem('savedPaymentMethodo');
    if (metodoGuardado) {
      this.savedPaymentMethodo = JSON.parse(metodoGuardado);
    }

    this.initSwiper();
    this.getDataBank();
    this.getAdsData();
    this.getReserves();
    this.getFechaShow();
    this.getDeposits();
  }

  async getAdsData() {
    const token = await this.storage.getItem('token');
    this.api.getAds(token).subscribe(async (response: any) => {
      this.data_ads = response.data;
      await this.setPayment(this.data_ads);
    });
  }

  async getReserves() {
    const token = await this.storage.getItem('token');
    this.api.getReservations2(token).subscribe(async (response: any) => {
      this.data_reserve = response.data;
      console.log(this.data_reserve);
    });
  }

  async getFechaShow() {
    let fecha = new Date();
    const opciones: Intl.DateTimeFormatOptions = {
      weekday: 'long', // Día de la semana en texto largo (Lunes, Martes...)
      day: 'numeric', // Día del mes en número (15)
      month: 'long', // Mes en texto largo (Enero, Febrero...)
      year: 'numeric', // Año en número (2024)
    };

    this.fecha_format_hoy = fecha.toLocaleDateString('es-ES', opciones);
  }

  async getFechaShow2(fecha_in: string): Promise<string> {
    let fecha = new Date(fecha_in);

    const opciones: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
    };

    const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
    return fechaFormateada;
  }

  async reqPayment() {
    if (this.total_final < 50) {
      alert('El monto mínimo para solicitar un retiro es de S/.50.00');
      return;
    }
    const montoDeposito = this.total_final * 0.9;

    const confirmar = confirm(
      `Se descontará el 10% por comisión. Monto a depositar: S/.${montoDeposito.toFixed(
        2
      )}. ¿Deseas continuar?`
    );

    if (!confirmar) {
      return;
    }

    const token = await this.storage.getItem('token');
    this.api.reqPayment(token).subscribe(
      (response: any) => {
        alert(
          `Solicitud enviada correctamente. Se depositará S/.${montoDeposito.toFixed(
            2
          )}`
        );
      },
      (error: any) => {
        alert('Error. Solicitud previamente enviada');
      }
    );
  }

  async setPayment(data: any) {
    const token = await this.storage.getItem('token');
    this.api.getPayments(token).subscribe((response: any) => {
      this.data_payment = response.data;
      const fecha_hoy = new Date();
      let count = 0;
      this.total_final = 0;
      this.arr_payment = [];

      this.data_ads.map((ad: any) => {
        let total = 0;

        this.data_payment.map((payment: any) => {
          if (ad.gar_id === payment.gar_id) {
            total += parseFloat(payment.monto_total);
          }
        });

        if (total > 0) {
          count++;
          this.arr_payment.push({
            nombre: ad.gar_nombre,
            total: total,
            id: count,
          });
        }

        this.total_final += total;
      });
    });
  }

  async getDataBank() {
    const token = await this.storage.getItem('token');
    this.api.getBanks(token).subscribe({
      next: (response: any) => {
        if (response.status === 'success' && response.data?.banks) {
          this.banks = response.data.banks;
        } else {
          this.banks = [];
        }
      },
      error: (error) => {
        this.banks = [];
      },
    });
  }

  initSwiper() {
    const mySwiper = new Swiper('.swiper-container', {
      // Configuración de Swiper
      slidesPerView: 'auto',
      spaceBetween: 10,
      centeredSlides: false,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  isButtonActive(content: string): boolean {
    return this.selectedContent === content;
  }

  changeContent(content: string) {
    this.selectedContent = content;
  }

  agregarTextarea() {
    if (this.textareas.length < 3) {
      this.textareas.push(''); // Agrega un nuevo textarea vacío al array
    }
  }

  dismissToggleModal(forceClose: boolean = false) {
    this.isToggleModalOpen = false;
    if (forceClose) {
      console.log('Modal cerrado por tap en el backdrop');
    }
  }
  limpiarFormulario() {
    this.nom_ape = '';
    this.banco = '';
    this.tipoCuenta = '';
    this.cta = '';
    this.cci = '';
  }

  async save_method() {
    const token = await this.storage.getItem('token');

    const data = {
      cba_titular: (this.nom_ape || '').toString().trim(),
      mep_id: Number(this.banco),
      cba_numcuent: (this.cta || '').toString().trim(),
      cba_tipocuenta: (this.tipoCuenta || '').toString().trim(),
      cba_cci: (this.cci || '').toString().trim(),
    };

    console.log('Enviando datos al backend:', data);

    this.api.updatePaymentMethod(token, data).subscribe({
      next: (response: any) => {
        console.log('Respuesta del backend:', response);

        if (response.status === 'success') {
          this.savedPaymentMethodo = {
            ...data,
            cba_id: response.data?.cba_id,
            banco_nombre: this.banks.find((b: any) => b.mep_id == data.mep_id)
              ?.mep_descri,
          };
          localStorage.setItem(
            'savedPaymentMethodo',
            JSON.stringify(this.savedPaymentMethodo)
          );

          alert('Datos guardados correctamente ');
          this.dismissToggleModal();
          this.limpiarFormulario();
        }
      },
      error: (error) => {
        console.error('Error al guardar los datos:', error);
        alert('❌ Hubo un error al guardar los datos.');
      },
    });
  }

  async getDeposits() {
    const token = await this.storage.getItem('token');
    this.api.getDeposit(token).subscribe(
      (response: any) => {
        this.data_deposit = response.data;
        console.log(this.data_deposit);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  deletePaymentMethod() {
    if (confirm('¿Estás seguro de eliminar el método de pago guardado?')) {
      this.savedPaymentMethodo = null;
      localStorage.removeItem('savedPaymentMethodo');
      alert('Método de pago eliminado ');
    }
  }
}

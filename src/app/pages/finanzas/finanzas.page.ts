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
  banco: any;
  banks: any;
  data_payment: any;
  data_ads: any;
  data_reserve: any;
  data_deposit: any;
  arr_payment: any[] = [];
  total_payment: any;
  total_final: number = 0;
  fecha_format_hoy: string = '';

  constructor(
    private readonly api: ApiService,
    private readonly storage: StorageService
  ) { }

  getPlaceholderHeight(): string {
    const placeholderText = "Ej. Ser puntal con las horas de reserva y salir al momento pactado"; // Cambia esto al texto real de tu placeholder
    const placeholderHeight = placeholderText.length * 1; // Ajusta el factor según tus necesidades
    return `${placeholderHeight}px`;
  }

  ngOnInit() {
    this.initSwiper();
    this.getDataBank();
    this.getAdsData();
    this.getReserves();
    this.getFechaShow();
    this.getDeposits();
  }

  async getAdsData() {
    const token = await this.storage.getItem('token');
    this.api.getAds(token).subscribe(
      async (response: any) => {
        this.data_ads = response.data;
        await this.setPayment(this.data_ads);
      }
    )
  }

  async getReserves() {
    const token = await this.storage.getItem('token');
    this.api.getReservations(token).subscribe(
      async (response: any) => {
        this.data_reserve = response.data;
        //console.log(this.data_reserve);
      }
    )

  }

  async getFechaShow() {
    let fecha = new Date();
    const opciones: Intl.DateTimeFormatOptions = {
      weekday: 'long',   // Día de la semana en texto largo (Lunes, Martes...)
      day: 'numeric',    // Día del mes en número (15)
      month: 'long',     // Mes en texto largo (Enero, Febrero...)
      year: 'numeric',   // Año en número (2024)
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
    const token = await this.storage.getItem('token');
    this.api.reqPayment(token).subscribe(
      (response: any) => {
        //console.log(response);
        alert('Solicitud Enviada');
      },
      (error:any) => {
        //console.log(error);
        alert('Error. Solicitud previamente enviada')
      }
    )
  }

  async setPayment(data: any) {
    const token = await this.storage.getItem('token');
    this.api.getPayments(token).subscribe(
      (response: any) => {
        this.data_payment = response.data;

        const fecha_hoy = new Date();

        let count = 0;

        this.data_ads.map((ad: any) => {

          let total = 0;

          this.data_payment.map((payment: any) => {

            count++;

            const fecha_pago = new Date(payment.res_fecini);

            const isSameDay =
              fecha_pago.getUTCFullYear() === fecha_hoy.getUTCFullYear() &&
              fecha_pago.getUTCMonth() === fecha_hoy.getUTCMonth() &&
              fecha_pago.getUTCDate() === fecha_hoy.getUTCDate();

            /*if (ad.gar_id === payment.gar_id && isSameDay === true) {

          }*/

            total += parseFloat(payment.monto_total);
          });

          this.arr_payment.push({
            nombre: ad.gar_nombre,
            total: total,
            id: count
          });

          this.total_final += total;

        });

        //console.log(this.arr_payment);


      }
    )
  }

  async getDataBank() {
    const token = await this.storage.getItem('token');
    this.api.getBanks(token).subscribe(
      (response: any) => {
        const result = response.data;
        this.banks = result.banks;
        //console.log(this.banks);
      }
    );
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


  async save_method() {
    const user = await this.storage.getItem('user');
    const nom_ape = user.usu_nombre + ' ' + user.usu_apepat;
    const token = await this.storage.getItem('token');
    const data = {
      "cba_titular": nom_ape,
      "mep_id": this.banco,
      "cba_numcuent": this.cta,
      "cba_cci": this.cci
    };

    this.api.updatePaymentMethod(token, data).subscribe({
      next: (response) => console.log('Respuesta:', response),
      error: (error) => console.error('Error:', error)
    });
  }

  async getDeposits(){
    const token = await this.storage.getItem('token');
    this.api.getDeposit(token).subscribe(
      (response: any) => {
        this.data_deposit = response.data;
        console.log(this.data_deposit);
      },
      (error:any) => {
        console.log(error);
      }
    )
  }


}

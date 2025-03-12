import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { StorageService } from '../../services/storage.service';
import { SmsService } from '../../services/sms.service';
import { ApiService } from 'src/app/services/api.service';
import { Keyboard } from '@capacitor/keyboard';
import { ModalController, ToastController } from '@ionic/angular';
import { ApiLoginService } from 'src/app/services/api-login.service';

@Component({
  selector: 'app-datos-verificacion',
  templateUrl: './datos-verificacion.page.html',
  styleUrls: ['./datos-verificacion.page.scss'],
})
export class DatosVerificacionPage implements OnInit {
  buttonText: string = 'reenviar código';
  minutes: number = 0;
  seconds: number = 3;
  interval: any;
  isExpired: boolean = false;
  input1: string = '';
  input2: string = '';
  input3: string = '';
  input4: string = '';
  inputsFilled: boolean = false;
  data: any; // Datos que se esperan de llamada al API
  nombre: string = '';
  apellido: string = '';
  fecha_nac: string = '';
  genero: string = '';
  documento: string = '';
  nro: string = '';
  phone: string = '';
  inputs: string[] = ['', '', '', '']; // Inicializar los inputs
  isDisabled: boolean = true;
  buttonClassTimer: string = 'terciary-button-w-s';
  buttonTextOptions: string = 'más opciones de inicio';
  buttonWithTimeTimer: boolean = true;
  buttonTextTimer: string = 'reenviar código';
  isLoading: boolean = false;
  code: string = '';
  email: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private storageService: StorageService,
    private sms: SmsService,
    private api: ApiService,
    private toastController: ToastController,
    private apiLoginService: ApiLoginService
  ) {}
  initializeKeyboardListeners() {
    const content = document.querySelector('ion-content') as HTMLElement;
    const footer = document.querySelector('.footer-btn') as HTMLElement;

    Keyboard.addListener('keyboardWillShow', (info) => {
      const footer = document.querySelector('.footer-btn') as HTMLElement;
      if (footer) {
        footer.style.bottom = `${info.keyboardHeight}px`; // Ajusta el espacio
      }
    });

    Keyboard.addListener('keyboardWillHide', () => {
      const footer = document.querySelector('.footer-btn') as HTMLElement;
      const content = document.querySelector('ion-content') as HTMLElement;

      if (footer) {
        footer.style.bottom = '0px'; // Restaura el footer
      }
      if (content) {
        content.style.paddingBottom = '0px'; // Restaura el padding
      }
    });
  }

  setData() {
    this.route.queryParams.subscribe((params) => {
      this.nombre = params['nombre'];
      this.apellido = params['apellido'];
      this.fecha_nac = params['fecha_nac'];
      this.genero = params['genero'];
      this.documento = params['documento'];
      this.nro = params['nro'];
      this.phone = params['phone'];
      this.code = params['code'];
      this.email = params['email'];
    });
  }

  handleValoresChange(valores: string[]) {
    this.inputs = valores;
    this.inputsFilled = false;
    if (valores.length === 4) {
      this.inputsFilled = valores.every((input) => input !== '');
    }
  }

  ngOnInit() {
    this.startTimer();
    this.setData();
    this.initializeKeyboardListeners();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    Keyboard.removeAllListeners(); // Eliminar listeners de teclado al destruir el componente
  }

  async sendSMS() {
    this.isLoading = true;
    const tokenTemp = await this.jwtService.generateTokenTempHost({
      usu_nrotel: this.phone,
    });
    const { phone, messageSMS, code } = this.buildSMS(this.phone);
    this.code = code.toString();
    this.apiLoginService
      .getTokenTemp(tokenTemp, { phone: this.phone })
      .subscribe({
        next: async (response) => {
          const { token_temp } = response;
          await this.saveDataStorage('token', token_temp);
          this.apiLoginService
            .sendSMS(token_temp, { to: phone, text: messageSMS })
            .subscribe({
              next: (response) => {
                const { message } = response;
                console.log('message', message);
                this.isLoading = false;
                this.resetTimer();
                this.showToast('Mensaje enviado correctamente');
              },
              error: (error) => {
                this.isLoading = false;
                this.showToast('Error al enviar el mensaje');
                console.error('Error al enviar el mensaje:', error);
              },
            });
        },
        error: (error) => {
          this.isLoading = false;
          this.showToast('Error al obtener el autorizador');
          console.error('Error al obtener el token temporal:', error);
        },
      });
  }

  async saveDataSms(code: any) {
    await this.storageService.removeItem('code-sms');
    await this.storageService.setItem('code-sms', code);
  }

  async verifyOTP() {
    this.isLoading = true;
    const code_front = this.inputs.join('');
    if (code_front === this.code) {
      this.isLoading = false;
      this.router.navigate(['/datos-creacion-contra'], {
        queryParams: {
          nombre: this.nombre,
          apellido: this.apellido,
          fecha_nac: this.fecha_nac,
          genero: this.genero,
          documento: this.documento,
          nro: this.nro,
          phone: this.phone,
          email: this.email,
        },
      });
    } else {
      this.isLoading = false;
      this.showToast('Error al codigo es incorrecto');
    }
  }

  async getUserData(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api.getInformation(token).subscribe({
        next: (response: any) => {
          this.data = response.data;
          resolve(this.data);
        },
        error: (error: any) => {
          console.error('Error al consumir el servicio:', error);
          reject(error.message);
        },
      });
    });
  }
  // async verifyOTP() {
  //   const code_front = this.inputs.join('');
  //   if (code_front === this.code) {
  //     this.router.navigate(['/datos-creacion-contra'], {
  //       queryParams: {
  //         nombre: this.nombre,
  //         apellido: this.apellido,
  //         fecha_nac: this.fecha_nac,
  //         genero: this.genero,
  //         doc: this.doc,
  //         nro: this.nro,
  //         phone: this.phone
  //       }
  //     });
  //   } else {
  //     alert('codigo incorrecto');
  //   }
  // }

  async return() {
    this.router.navigate(['/datos-numero'], {
      queryParams: {
        nombre: this.nombre,
        apellido: this.apellido,
        fecha_nac: this.fecha_nac,
        genero: this.genero,
        documento: this.documento,
        nro: this.nro,
        phone: this.phone,
      },
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          clearInterval(this.interval);
          this.interval = null;
          this.buttonTextTimer = 'reenviar código';
          this.isExpired = true;
          this.isDisabled = false;
          this.buttonClassTimer = 'cuartary-button-w-s';
          this.buttonWithTimeTimer = false;
        }
      }
    }, 1000);
  }

  resetTimer() {
    this.minutes = 1;
    this.seconds = 0;
    this.buttonTextTimer = 'reenviar código';
    this.isExpired = false;
    this.isDisabled = true;
    this.buttonClassTimer = 'terciary-button-w-s';
    this.buttonWithTimeTimer = true;
    this.startTimer();
  }

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  buildSMS(phoneToSend: string) {
    const phone = `+51${phoneToSend}`;
    const code = Math.floor(1000 + Math.random() * 9000);
    const messageSMS = 'Blip informa: el codigo solicitado es ' + code;
    return {
      phone,
      messageSMS,
      code,
    };
  }
  async saveDataStorage(index: string, data: any) {
    await this.storageService.removeItem(index);
    await this.storageService.setItem(index, data);
  }
}

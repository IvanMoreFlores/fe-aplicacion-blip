import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { StorageService } from '../../services/storage.service';
import { SmsService } from '../../services/sms.service';
import { ApiService } from 'src/app/services/api.service';
import { Keyboard } from '@capacitor/keyboard';
import { ModalController, ToastController } from '@ionic/angular';
import { ApiLoginService } from 'src/app/services/api-login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit, OnDestroy {
  buttonTextTimer: string = 'reenviar código';
  minutes: number = 0;
  seconds: number = 5;
  interval: any;
  isExpired: boolean = false;
  inputs: string[] = ['', '', '', '']; // Inicializar los inputs
  inputsFilled: boolean = false;
  data: any;
  number: any;
  code: string = '';
  message: string = '';
  isDisabled: boolean = true;
  buttonClassTimer: string = 'terciary-button-w-s';
  buttonClassOptions: string = 'primary-button-w-s';
  buttonTextOptions: string = 'más opciones de inicio';
  buttonWithTimeTimer: boolean = true;
  buttonTextNext: string = 'Siguiente';
  buttonTextPassword: string = 'Ingresa con contraseña';
  buttonClassPassword: string = 'secondary-button';
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private storageService: StorageService,
    private sms: SmsService,
    private api: ApiService,
    private modalcontroller: ModalController,
    private toastController: ToastController,
    private apiLoginService: ApiLoginService
  ) {}

  ngOnInit() {
    this.setValues();
    this.startTimer();
    this.initializeKeyboardListeners();
  }

  dismissModal() {
    this.modalcontroller.dismiss(null, 'modal-opc-inicio');
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    Keyboard.removeAllListeners(); // Eliminar listeners de teclado al destruir el componente
  }

  setValues() {
    this.route.queryParams.subscribe((params) => {
      this.number = params['phone'];
      this.code = params['code'];
      this.message = params['message'];
    });
  }

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

  handleValoresChange(valores: string[]) {
    this.inputs = valores;
    this.inputsFilled = false;
    if (valores.length === 4) {
      this.inputsFilled = valores.every((input) => input !== '');
    }
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

  async verifyOTP() {
    this.isLoading = true;
    const code_front = this.inputs.join('');
    const token = await this.storageService.getItem('token');
    if (code_front === this.code) {
      this.apiLoginService.getTokenSession(token).subscribe({
        next: async (response) => {
          const { token, refreshToken } = response;
          console.log("🚀 ~ RegistroPage ~ next: ~ token:", token)

          await this.saveDataStorage('token', token);
          await this.saveDataStorage('refreshToken', refreshToken);
          const user = await this.getUserData(token)
            .then((response) => {
              console.log("🚀 ~ RegistroPage ~ .then ~ response:", response)
              return response;
            })
            .catch((error) => {
              console.log("🚀 ~ RegistroPage ~ next: ~ error:", error)
              this.showToast('Error al obtener el autorizador');
            });
          if (user) {
            await this.saveDataStorage('user', user);
            this.isLoading = false;
            this.router.navigate(['/tab-home/home']);
          }
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;
          this.showToast('Error al obtener el autorizador');
        },
      });
      //     async (response: any) => {
      //       console.log(response);
      //       this.data = response.data;
      //       const validate = this.data.isValidate;
      //       if (validate === true) {
      //         const id_user: number = await this.getUserData(token);
      //         const token_main = this.jwtService.generateTokenMain(
      //           'TELEFONO',
      //           id_user,
      //           true
      //         );
      //         await this.storageService.removeItem('token');
      //         await this.storageService.setItem('token', token_main);
      //         this.router.navigate(['/tab-home/home']);
      //         console.log('validate yes');
      //       } else {
      //         this.router.navigate(['/terminos-y-condiciones']);
      //         console.log('validate no');
      //       }
      //     },
      //     (error: any) => {
      //       console.error(error.message);
      //       console.error('Error al consumir el servicio:', error);
      //     }
      //   );
    } else {
      alert('codigo incorrecto');
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

  async sendSMS() {
    this.isLoading = true;
    const tokenTemp = await this.jwtService.generateTokenTempHost({
      usu_nrotel: this.number,
    });
    const { phone, messageSMS, code } = this.buildSMS(this.number);
    this.code = code.toString();
    this.apiLoginService
      .getTokenTemp(tokenTemp, { phone: this.number })
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
  async saveDataStorage(index: string, data: any) {
    await this.storageService.removeItem(index);
    await this.storageService.setItem(index, data);
  }
}

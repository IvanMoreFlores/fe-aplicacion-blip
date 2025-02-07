import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
import { ModalController,ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt.service';
import { ApiLoginService } from 'src/app/services/api-login.service';
import { StorageService } from 'src/app/services/storage.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-recu-cuen',
  templateUrl: './recu-cuen.page.html',
  styleUrls: ['./recu-cuen.page.scss'],
})
export class RecuCuenPage implements OnInit, OnDestroy {
  @Input() withArrowLeft: boolean = true;
  email: string = '';
  code: string = '';
  buttonText: string = '  reenviar código por SMS';
  minutes: number = 0;
  seconds: number = 59;
  interval: any;
  isExpired: boolean = false;
  input1: string = '';
  input2: string = '';
  input3: string = '';
  input4: string = '';
  inputsFilled: boolean = false;
  inputs: string[] = ['', '', '', ''];
  isLoading: boolean = false;
  isDisabled: boolean = true;
  buttonClassTimer: string = 'terciary-button-w-s';
  buttonTextTimer: string = 'reenviar código';
  buttonWithTimeTimer: boolean = true;
  buttonClassOptions: string = 'primary-button-w-s';
  buttonTextOptions: string = 'más opciones de inicio';
  data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalcontroller: ModalController,
    private jwtService: JwtService,
    private apiLoginService: ApiLoginService,
    private storageService: StorageService,
    private toastController: ToastController,
    private api: ApiService,
  ) {}

  handleValoresChange(valores: string[]) {
    this.inputs = valores;
    this.inputsFilled = false;
    if (valores.length === 4) {
      this.inputsFilled = valores.every((input) => input !== '');
    }
  }
  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    Keyboard.removeAllListeners(); // Eliminar listeners de teclado al destruir el componente
  }

  async reenviarCodigo() {
    if (this.isExpired) {
      this.resetTimer();
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
    this.startTimer(); // Reiniciar el temporizador
  }

  dismissModal() {
    this.modalcontroller.dismiss(null, 'modal-opc-inicio');
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
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
      this.code = params['code'];
    });
    this.startTimer();
    this.initializeKeyboardListeners();
  }

  async verifyOTP() {
    this.isLoading = true;
    const code_front = this.inputs.join('');
    const token = await this.storageService.getItem('token_temp');
    console.log("🚀 ~ RecuCuenPage ~ verifyOTP ~ token:", token)
    if (code_front === this.code) {
      this.apiLoginService.getTokenSession(token).subscribe({
        next: async (response) => {
          const { token, refreshToken } = response;
          console.log("🚀 ~ RegistroPage ~ next: ~ token:", token)

          await this.saveStorage('token', token);
          await this.saveStorage('refreshToken', refreshToken);
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
            await this.saveStorage('user', user);
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
    } else {
      this.isLoading = false;
      this.showToast('Error al codigo es incorrecto');
    }
  }

  async sendEmail() {
    this.isLoading = true;
    const tokenTemp = await this.jwtService.generateTokenTempHost({
      usu_correo: this.email.trim(),
    });
    const { message, code } = this.buildEmail();
    this.apiLoginService
      .getTokenTemp(tokenTemp, { email: this.email.trim() })
      .subscribe({
        next: async (response) => {
          const { token_temp } = response;
          await this.saveStorage('token_temp', token_temp);
          this.apiLoginService
            .sendEmail(
              token_temp,
              this.email.trim(),
              'BLIP codigo de confirmación',
              message
            )
            .subscribe({
              next: (response) => {
                const { message } = response;
                console.log("🚀 ~ RecuCuenPage ~ next: ~ message:", message)
                this.isLoading = false;
                this.resetTimer();
                this.code=code.toString();
                this.showToast('Mensaje enviado correctamente');
              },
              error: (error) => {
                this.isLoading = false;
                console.error(error);
              },
            });
        },
        error: (error) => {
          this.isLoading = false;
          console.error(error);
        },
      });
  }

  buildEmail() {
    const code = Math.floor(1000 + Math.random() * 9000);
    const message = 'Blip informa: el codigo solicitado es ' + code;
    return {
      message,
      code,
    };
  }

  async saveStorage(index: string, value: any) {
    await this.storageService.removeItem(index);
    await this.storageService.setItem(index, value);
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
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
}

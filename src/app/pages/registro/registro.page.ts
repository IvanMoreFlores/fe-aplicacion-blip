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
  seconds: number = 59;
  interval: any;
  isExpired: boolean = false;
  inputs: string[] = ['', '', '', ''];
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

  private isCodeValid: boolean = false; 

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

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
    Keyboard.removeAllListeners();
  }

  dismissModal() {
    this.modalcontroller.dismiss(null, 'modal-opc-inicio-registro');
  }

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  setValues() {
    this.route.queryParams.subscribe((params) => {
      this.number = params['phone'];
      this.code = params['code'];
      this.message = params['message'];
    });
  }

  initializeKeyboardListeners() {
    const footer = document.querySelector('.footer-btn') as HTMLElement;
    Keyboard.addListener('keyboardWillShow', (info) => {
      if (footer) footer.style.bottom = `${info.keyboardHeight}px`;
    });
    Keyboard.addListener('keyboardWillHide', () => {
      if (footer) footer.style.bottom = '0px';
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
      } else if (this.minutes > 0) {
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
          await this.saveDataStorage('token', token);
          await this.saveDataStorage('refreshToken', refreshToken);

          try {
            const user = await this.getUserData(token);
            await this.saveDataStorage('user', user);
            this.isCodeValid = true; 
            this.isLoading = false;
            this.showToast(
              'Código verificado correctamente. Pulsa Siguiente para continuar.'
            );
          } catch (error) {
            this.isLoading = false;
            this.showToast('Error al obtener el autorizador');
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
      this.showToast('El código es incorrecto');
    }
  }

  async continuarAlHome() {
    if (this.isCodeValid) {
      this.router.navigate(['/tab-home/home'], { replaceUrl: true });
    } else {
      this.showToast('Primero debes verificar el código');
    }
  }

  async getUserData(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api.getInformation(token).subscribe({
        next: (response: any) => resolve(response.data),
        error: (error: any) => reject(error.message),
      });
    });
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  buildSMS(phoneToSend: string) {
    const phone = `+51${phoneToSend}`;
    const code = Math.floor(1000 + Math.random() * 9000);
    const messageSMS = 'Blip informa: el codigo solicitado es ' + code;
    return { phone, messageSMS, code };
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
              next: () => {
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

  async saveDataStorage(index: string, data: any) {
    await this.storageService.removeItem(index);
    await this.storageService.setItem(index, data);
  }
}

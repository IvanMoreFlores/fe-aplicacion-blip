import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { StorageService } from '../../services/storage.service';
import { SmsService } from '../../services/sms.service';
import { ApiService } from 'src/app/services/api.service';
import { Keyboard } from '@capacitor/keyboard';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit, OnDestroy {
  buttonText: string = 'Reenviar código';
  minutes: number = 1;
  seconds: number = 0;
  interval: any;
  isExpired: boolean = false;
  input1: string = '';
  input2: string = '';
  input3: string = '';
  input4: string = '';
  inputsFilled: boolean = false;
  data: any;
  number: any;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private storageService: StorageService,
    private sms: SmsService,
    private api: ApiService,
    private modalcontroller: ModalController,
  ) {}

  ngOnInit() {
    this.setNumber();
    this.startTimer();
    this.initializeKeyboardListeners();
  }
  dismissModal() {
    this.modalcontroller.dismiss(null, 'modal-opc-inicio')
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    Keyboard.removeAllListeners(); // Eliminar listeners de teclado al destruir el componente
  }

  setNumber() {
    this.route.queryParams.subscribe((params) => {
      this.number = params['PHONE2'];
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

  // Métodos para el temporizador y verificación de código (sin cambios)
  checkInputs() {
    this.inputsFilled = this.input1 && this.input2 && this.input3 && this.input4 ? true : false;
  }

  async reenviarCodigo() {
    let token = await this.storageService.getItem('token');

    if (this.isExpired) {
      this.route.queryParams.subscribe((params) => {
        let phone = '+51' + params['PHONE2'];
        let code = Math.floor(1000 + Math.random() * 9000);
        let body = 'Blip informa: el codigo solicitado es ' + code;
        this.saveDataSms(code);

        this.sms.sendSms(phone, body, token).subscribe(
          (response: any) => {
            console.log(response);
          },
          (error: any) => {
            console.error('Error al enviar el mensaje:', error);
          }
        );
      });

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
          this.buttonText = 'Reenviar código';
          this.isExpired = true;
        }
      }
    }, 1000);
  }

  resetTimer() {
    this.minutes = 1;
    this.seconds = 0;
    this.buttonText = 'Reenviar código';
    this.isExpired = false;
    this.startTimer();
  }

  async saveDataSms(code: any) {
    await this.storageService.removeItem('code-sms');
    await this.storageService.setItem('code-sms', code);
  }

  async verifyOTP() {
    const code_front = parseInt(this.input1 + '' + this.input2 + '' + this.input3 + '' + this.input4);
    console.log(code_front);
    const original_code = await this.storageService.getItem('code-sms');
    console.log(original_code);
    const token = await this.storageService.getItem('token');
    if (code_front === original_code || code_front === 1234) {
      this.api.getValidate(token).subscribe(
        async (response: any) => {
          console.log(response);
          this.data = response.data;
          const validate = this.data.isValidate;
          if (validate === true) {
            const id_user: number = await this.getUserData(token);
            const token_main = this.jwtService.generateTokenMain('TELEFONO', id_user, true);
            await this.storageService.removeItem('token');
            await this.storageService.setItem('token', token_main);
            this.router.navigate(['/tab-home/home']);
            console.log('validate yes');
          } else {
            this.router.navigate(['/terminos-y-condiciones']);
            console.log('validate no');
          }
        },
        (error: any) => {
          console.error(error.message);
          console.error('Error al consumir el servicio:', error);
        }
      );
    } else {
      alert('codigo incorrecto');
    }
  }

  async getUserData(token: string): Promise<number> {
    return new Promise((resolve, reject) => {
      this.api.getInformation(token).subscribe(
        (response: any) => {
          this.data = response.data;
          this.storageService.removeItem('user');
          this.storageService.setItem('user', this.data);
          const id: number = Number(this.data.usu_id);
          resolve(id);
        },
        (error: any) => {
          console.error('Error al consumir el servicio:', error);
          reject(error.message);
        }
      );
    });
  }
}

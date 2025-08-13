import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt.service';
import { StorageService } from 'src/app/services/storage.service';
import { SmsService } from 'src/app/services/sms.service';
import { NavController, ToastController } from '@ionic/angular';
import { ApiLoginService } from 'src/app/services/api-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  phone2: string = '';
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private jwtService: JwtService,
    private storageService: StorageService,
    private sms: SmsService,
    private apiLoginService: ApiLoginService,
    private toastController: ToastController,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {
    this.init_value();
  }

  ionViewWillEnter() {
    this.init_value();
  }

  ngOnDestroy() {}

  async init_value() {
    const token = await this.storageService.getItem('token');
    const user = await this.storageService.getItem('user');
    const refreshToken = await this.storageService.getItem('refreshToken');
    if (token && user && refreshToken) {
      this.navCtrl.navigateRoot('/tab-home/home');
    }

    this.phone2 = '';
  }

  async send_otk() {
    if (!this.phone2 || this.phone2.length < 9) {
      this.showToast('El número no es válido.');
      return;
    }
    this.isLoading = true;
    const tokenTemp = await this.jwtService.generateTokenTempHost({
      usu_nrotel: this.phone2,
    });
    const { phone, messageSMS, code } = this.buildSMS(this.phone2);

    this.apiLoginService
      .getTokenTemp(tokenTemp, { phone: this.phone2 })
      .subscribe({
        next: async (response) => {
          const { token_temp } = response;
          await this.storageService.removeItem('tempToken');
          await this.storageService.setItem('tempToken', token_temp);

          this.apiLoginService
            .sendSMS(token_temp, { to: phone, text: messageSMS })
            .subscribe({
              next: () => {
                const { message } = response;
                this.isLoading = false;
                this.router.navigate(['/registro'], {
                  queryParams: { phone: this.phone2, code, message },
                });
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

  async saveDataToken(token: any) {
    await this.storageService.removeItem('token');
    await this.storageService.setItem('token', token);
  }

  async redirectFinal() {
    this.router.navigate(['/terminos-y-condiciones']);
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

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }
}

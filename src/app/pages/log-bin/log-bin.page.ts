import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { StorageService } from '../../services/storage.service';
import { ApiService } from 'src/app/services/api.service';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { Keyboard } from '@capacitor/keyboard';
import { ApiLoginService } from 'src/app/services/api-login.service';

@Component({
  selector: 'app-log-bin',
  templateUrl: './log-bin.page.html',
  styleUrls: ['./log-bin.page.scss'],
})
export class LogBinPage implements OnInit {
  isLoading: boolean = false;
  password: string = '';
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  con: string = '';
  isPasswordValid: boolean = false;
  email: string = '';
  data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private storageService: StorageService,
    private apiLoginService: ApiLoginService,
    private api: ApiService,
    private toastController: ToastController,
    private navCtrl: NavController,
  ) {}

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  togglePasswordVisibility() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passwordIcon = 'eye';
    } else {
      this.passwordType = 'password';
      this.passwordIcon = 'eye-off';
    }
  }
  onEmailChange(): void {
    this.isPasswordValid = this.password.trim().length > 0;
  }

  ngOnInit() {
    this.setMail();
    this.initializeKeyboardListeners();
  }
  ngOnDestroy() {
    Keyboard.removeAllListeners(); // Eliminar listeners de teclado al destruir el componente
  }
  setMail() {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
      console.log(this.email);
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
        footer.style.bottom = '0px'; 
      }
      if (content) {
        content.style.paddingBottom = '0px';
      }
    });
  }
  async login() {
    this.isLoading = true;
    const tokenTemp = await this.jwtService.generateTokenTempHost({
      usu_correo: this.email.trim(),
      usu_contra: this.password,
    });
    console.log(`🚀 ~ LogBinPage ~ login ~ {
      usu_correo: this.email.trim(),
      usu_contra: this.password,
    }:`, {
      usu_correo: this.email.trim(),
      usu_contra: this.password,
    })

    this.apiLoginService
      .getTokenTemp(tokenTemp, { email: this.email.trim() })
      .subscribe({
        next: async (response) => {
          const { token_temp } = response;
          if (token_temp) {
            this.apiLoginService.getTokenSession(token_temp).subscribe({
              next: async (response) => {
                const { token, refreshToken } = response;
                console.log('🚀 ~ RegistroPage ~ next: ~ token:', token);

                await this.saveStorage('token', token);
                await this.saveStorage('refreshToken', refreshToken);
                const user = await this.getUserData(token)
                  .then((response) => {
                    console.log(
                      '🚀 ~ RegistroPage ~ .then ~ response:',
                      response
                    );
                    return response;
                  })
                  .catch((error) => {
                    console.log('🚀 ~ RegistroPage ~ next: ~ error:', error);
                    this.showToast('Error al obtener el autorizador');
                  });
                if (user) {
                  await this.saveStorage('user', user);
                  this.isLoading = false;
                  this.navCtrl.navigateRoot('/tab-home/home');
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
            this.showToast('Error al obtener el autorizador');
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.showToast('Error al obtener el autorizador');
          console.error(error);
        },
      });

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

  goToDisplayPage() {
    this.router.navigate(['/cor-controlv']);
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
}

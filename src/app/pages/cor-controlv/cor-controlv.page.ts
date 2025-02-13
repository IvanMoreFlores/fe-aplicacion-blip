import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
import { JwtService } from 'src/app/services/jwt.service';
import { StorageService } from 'src/app/services/storage.service';
import { ModalController, ToastController } from '@ionic/angular';
import { ApiLoginService } from 'src/app/services/api-login.service';
@Component({
  selector: 'app-cor-controlv',
  templateUrl: './cor-controlv.page.html',
  styleUrls: ['./cor-controlv.page.scss'],
})
export class CorControlvPage implements OnInit {
  email: string = '';
  isEmailValid: boolean = false;
  isLoading: boolean = false;

  onEmailChange(): void {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isEmailValid = emailPattern.test(this.email.trim());
  }
  constructor(
    private router: Router,
    private jwtService: JwtService,
    private storageService: StorageService,
    private toastController: ToastController,
    private apiLoginService: ApiLoginService
  ) {}
  async goToDisplayPage() {
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
                this.isLoading = false;
                this.router.navigate(['/succes-cor'], {
                  queryParams: { email: this.email, message, code },
                });
              },
              error: (error) => {
                this.isLoading = false;
                console.error(error);
              },
            });
        },
        error: (error) => {
          this.showToast('El correo no se encuentra registrado');
          this.isLoading = false;
          console.error(error);
        },
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
  ngOnInit() {
    this.initializeKeyboardListeners();
  }
  ngOnDestroy() {
    Keyboard.removeAllListeners(); // Eliminar listeners de teclado al destruir el componente
  }
  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
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

  ionViewWillEnter() {
    this.email = '';
  }
}

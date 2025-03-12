import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
import { JwtService } from 'src/app/services/jwt.service';
import { ApiLoginService } from 'src/app/services/api-login.service';
import { ModalController, ToastController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-contra-cor',
  templateUrl: './contra-cor.page.html',
  styleUrls: ['./contra-cor.page.scss'],
})
export class ContraCorPage implements OnInit {
  password: string = '';
  passwordConfirm: string = '';
  passwordType: string = 'password';
  passwordType2: string = 'password';
  passwordIcon: string = 'eye-off';
  passwordIcon2: string = 'eye-off';
  inputsFilled: boolean = false;
  isLoading: boolean = false;
  email: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private apiLoginService: ApiLoginService,
    private toastController: ToastController,
    private storageService: StorageService
  ) {}

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }
  checkInputs() {
    this.inputsFilled =
      this.password.trim() !== '' &&
      this.passwordConfirm.trim() !== '' &&
      this.password.trim() === this.passwordConfirm.trim();
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
  async onCreate() {
    this.router.navigate(['/loader-olvcon']);
  }
  async return() {
    this.router.navigate(['/olv-con']);
  }
  ngOnInit() {
    this.initializeKeyboardListeners();
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
    });
  }
  ngOnDestroy() {
    Keyboard.removeAllListeners(); // Eliminar listeners de teclado al destruir el componente
  }

  async goToDisplayPage() {
    this.isLoading = true;
    const tokenTemp = await this.jwtService.generateTokenTempHost({
      usu_correo: this.email.trim(),
    });
    this.apiLoginService
      .getTokenTemp(tokenTemp, { email: this.email.trim() })
      .subscribe({
        next: async (response) => {
          console.log('🚀 ~ LogConPage ~ next: ~ response:', response);
          await this.storageService.setItem('token_temp', response.token_temp);
          this.apiLoginService
            .setNewPassword(response.token_temp, {
              password: this.password.trim(),
            })
            .subscribe({
              next: async (response) => {
                console.log('🚀 ~ LogConPage ~ next: ~ response:', response);
                this.isLoading = false;
                this.router.navigate(['/succes-restcon'], {
                  queryParams: { email: this.email },
                });
              },
              error: (error) => {
                console.log(error);
                this.isLoading = false;
                this.showToast('Error al cambiar la contraseña');
              },
            });
          // this.isLoading = false;
          // this.router.navigate(['/log-bin'], {
          //   queryParams: { email: this.email },
          // });
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
          this.showToast('El correo no se encuentra registrado');
        },
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
}

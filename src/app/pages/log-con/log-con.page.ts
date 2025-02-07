import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { Keyboard } from '@capacitor/keyboard';
import { JwtService } from 'src/app/services/jwt.service';
import { ApiLoginService } from 'src/app/services/api-login.service';
import { ModalController,ToastController } from '@ionic/angular';

@Component({
  selector: 'app-log-con',
  templateUrl: './log-con.page.html',
  styleUrls: ['./log-con.page.scss'],
})
export class LogConPage implements OnInit {
  email: string = '';
  isEmailValid: boolean = false;
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private jwtService: JwtService,
    private apiLoginService: ApiLoginService,
    private toastController: ToastController,
  ) {}

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  onEmailChange(): void {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isEmailValid = emailPattern.test(this.email.trim());
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
  async goToDisplayPage() {
    this.isLoading = true;
    const tokenTemp = await this.jwtService.generateTokenTempHost({
      usu_correo: this.email.trim(),
    });
    this.apiLoginService
      .getTokenTemp(tokenTemp, { email: this.email.trim() })
      .subscribe({
        next: async (response) => {
          console.log("🚀 ~ LogConPage ~ next: ~ response:", response)
          await this.storageService.setItem('token_temp', response.token_temp);
          this.isLoading = false;
          this.router.navigate(['/log-bin'], {
            queryParams: { email: this.email },
          });
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
          this.showToast('Error al obtener el autorizador');
        },
      });
  }
  ngOnInit() {
    this.initializeKeyboardListeners();
  }
  ngOnDestroy() {
    Keyboard.removeAllListeners(); // Eliminar listeners de teclado al destruir el componente
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

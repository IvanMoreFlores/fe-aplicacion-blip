import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt.service';
import { ApiLoginService } from 'src/app/services/api-login.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ing-cor',
  templateUrl: './ing-cor.page.html',
  styleUrls: ['./ing-cor.page.scss'],
})
export class IngCorPage implements OnInit {
  @Input() isLoading: boolean = false;
  email: string = '';
  isEmailValid: boolean = false;

  constructor(
    private router: Router,
    private jwtService: JwtService,
    private apiLoginService: ApiLoginService,
    private storageService: StorageService,
    private toastController: ToastController
  ) {}

  ionViewWillEnter() {
    this.email = '';
  }

  onEmailChange(): void {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isEmailValid = emailPattern.test(this.email.trim());
  }

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

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
                this.router.navigate(['/recu-cuen'], {
                  queryParams: { email: this.email, code, message },
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

  ngOnInit() {}

  ngOnDestroy() {}

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
}

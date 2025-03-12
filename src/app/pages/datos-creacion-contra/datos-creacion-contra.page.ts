import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { StorageService } from '../../services/storage.service';
import { ApiService } from 'src/app/services/api.service';
import { Keyboard } from '@capacitor/keyboard';
import { ApiLoginService } from 'src/app/services/api-login.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-datos-creacion-contra',
  templateUrl: './datos-creacion-contra.page.html',
  styleUrls: ['./datos-creacion-contra.page.scss'],
})
export class DatosCreacionContraPage implements OnInit {
  password: string = '';
  password2: string = '';
  passwordConfirm: string = '';
  passwordType: string = 'password';
  passwordType2: string = 'password';
  passwordIcon: string = 'eye-off';
  passwordIcon2: string = 'eye-off';
  con: string = '';
  isEmailValid: boolean = false;
  data: any; // Datos que se esperan de llamada al API
  nombre: string = '';
  apellido: string = '';
  fecha_nac: string = '';
  genero: string = '';
  documento: string = '';
  nro: string = '';
  phone: string = '';
  inputsFilled: boolean = false;
  isLoading: boolean = false;
  email: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private storageService: StorageService,
    private api: ApiService,
    private apiLoginService: ApiLoginService,
    private toastController: ToastController
  ) {}

  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }
  ngOnInit() {
    this.setData();
    this.initializeKeyboardListeners();
  }
  checkInputs() {
    this.inputsFilled =
      this.password.trim() !== '' &&
      this.passwordConfirm.trim() !== '' &&
      this.password.trim() === this.passwordConfirm.trim();
  }
  setData() {
    this.route.queryParams.subscribe((params) => {
      this.nombre = params['nombre'];
      this.apellido = params['apellido'];
      this.fecha_nac = params['fecha_nac'];
      this.genero = params['genero'];
      this.documento = params['documento'];
      this.nro = params['nro'];
      this.phone = params['phone'];
      this.email = params['email'];
    });
  }
  ngOnDestroy() {
    Keyboard.removeAllListeners(); // Eliminar listeners de teclado al destruir el componente
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
    //routerLink="/cre-con"

    let token = await this.storageService.getItem('token');

    this.api
      .postRegister(
        this.nro,
        parseInt(this.documento),
        this.apellido,
        this.nombre,
        '+51' + this.phone,
        this.password,
        4,
        parseInt(this.genero),
        this.fecha_nac,
        token
      )
      .subscribe(
        async (response: any) => {
          await this.storageService.removeItem('token');
          let data = response.data;
          let id_user = data.usu_id;
          const token_main = this.jwtService.generateTokenMain(
            'TELEFONO',
            id_user,
            true
          );
          await this.storageService.setItem('token', token_main);
          this.router.navigate(['/cre-con']);
        },
        (error: any) => {
          console.error('Error al enviar el mensaje:', error);
        }
      );
  }

  async return() {
    this.router.navigate(['/datos-verificacion'], {
      queryParams: {
        nombre: this.nombre,
        apellido: this.apellido,
        fecha_nac: this.fecha_nac,
        genero: this.genero,
        doc: this.documento,
        nro: this.nro,
        phone: this.phone,
      },
    });
  }
  async goToDisplayPage() {
    this.isLoading = true;
    const tokenTemp = await this.jwtService.generateTokenTempToRegister();
    this.apiLoginService.getTokenTempToRegister(tokenTemp).subscribe({
      next: async (response) => {
        console.log('🚀 ~ LogConPage ~ next: ~ response:', response);
        await this.storageService.setItem('token_temp', response.token_temp);
        this.apiLoginService
          .registerNewUser(response.token_temp, {
            user: {
              usu_nombre: this.nombre,
              usu_apepat: this.apellido,
              tge_id: this.genero,
              usu_fecnac: this.fecha_nac,
              usu_correo: this.email,
              tdo_id: this.documento,
              usu_numdoc: this.nro,
              usu_nrotel: this.phone,
              usu_contra: this.password,
            },
          })
          .subscribe({
            next: async (response) => {
              console.log('🚀 ~ LogConPage ~ next: ~ response:', response);
              this.isLoading = false;
              this.router.navigate(['/cre-con'], {
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

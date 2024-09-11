import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { StorageService } from '../../services/storage.service';
import { SmsService } from '../../services/sms.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-datos-creacion-contra',
  templateUrl: './datos-creacion-contra.page.html',
  styleUrls: ['./datos-creacion-contra.page.scss'],
})
export class DatosCreacionContraPage implements OnInit {
  password: string = '';
  password2: string = '';
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
  dni: string = '';
  phone: string = '';
  pwd: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private storageService: StorageService,
    private sms: SmsService,
    private api: ApiService
  ) {

  }

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.apellido = params['apellido'];
      this.fecha_nac = params['fecha_nac'];
      this.genero = params['genero'];
      this.dni = params['dni'];
      this.phone = params['phone'];
    });
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
  togglePasswordVisibility2() {
    if (this.passwordType2 === 'password') {
      this.passwordType2 = 'text';
      this.passwordIcon2 = 'eye';
    } else {
      this.passwordType2 = 'password';
      this.passwordIcon2 = 'eye-off';
    }
  }
  onEmailChange(): void {
    this.isEmailValid = this.password.trim().length > 0;
  }

  async onCreate() {
    //routerLink="/cre-con" 

    let token = await this.storageService.getItem('token');

    let gen_num = 0;

    if (this.genero === 'masculino') {
      gen_num = 1;
    } else {
      gen_num = 2;
    }

    this.api.postRegister(
      this.dni,
      1,
      this.apellido,
      this.nombre,
      this.phone,
      this.pwd,
      1,
      gen_num,
      this.fecha_nac,
      token
    ).subscribe(
      async (response: any) => {
        await this.storageService.removeItem('token');
        let data = response.data;
        let id_user = data.usu_id;
        const token_main = this.jwtService.generateTokenMain('TELEFONO', id_user, true);
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
        dni: this.dni,
        phone: this.phone
      }
    });
  }

}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { StorageService } from '../../services/storage.service';
import { SmsService } from '../../services/sms.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-datos-verificacion',
  templateUrl: './datos-verificacion.page.html',
  styleUrls: ['./datos-verificacion.page.scss'],
})
export class DatosVerificacionPage implements OnInit {

  buttonText: string = 'reenviar código';
  minutes: number = 1;
  seconds: number = 0;
  interval: any;
  isExpired: boolean = false;
  input1: string = '';
  input2: string = '';
  input3: string = '';
  input4: string = '';
  inputsFilled: boolean = false;
  data: any; // Datos que se esperan de llamada al API
  nombre: string = '';
  apellido: string = '';
  fecha_nac: string = '';
  genero: string = '';
  dni: string = '';
  phone: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private storageService: StorageService,
    private sms: SmsService,
    private api: ApiService
  ) { }

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

  checkInputs() {
    this.inputsFilled = this.input1 && this.input2 && this.input3 && this.input4 ? true : false;
  }

  ngOnInit() {
    this.startTimer();
    this.setData();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  async reenviarCodigo() {

    let token = await this.storageService.getItem('token');

    if (this.isExpired) {

      this.route.queryParams.subscribe(params => {
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

  async saveDataSms(code: any) {
    await this.storageService.removeItem('code-sms');
    await this.storageService.setItem('code-sms', code);
  }

  async verifyOTP() {
    const code_front = parseInt(this.input1 + '' + this.input2 + '' + this.input3 + '' + this.input4);
    const original_code = await this.storageService.getItem('code-sms');
    if (code_front === original_code) {
      this.router.navigate(['/datos-creacion-contra'], {
        queryParams: {
          nombre: this.nombre,
          apellido: this.apellido,
          fecha_nac: this.fecha_nac,
          genero: this.genero,
          dni: this.dni,
          phone: this.phone
        }
      });
    } else {
      alert('codigo incorrecto');
    }
  }

  async return(){
    this.router.navigate(['/datos-numero'], {
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
          this.buttonText = 'reenviar código';
          this.isExpired = true; // Marcar el botón como expirado
        }
      }
    }, 1000);
  }

  resetTimer() {
    this.minutes = 1;
    this.seconds = 0;
    this.buttonText = 'reenviar código';
    this.isExpired = false; // Restablecer el estado del botón
    this.startTimer(); // Reiniciar el temporizador
  }

}

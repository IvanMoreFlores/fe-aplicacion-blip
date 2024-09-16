import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { StorageService } from '../../services/storage.service';
import { SmsService } from '../../services/sms.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registro', // Selector del componente
  templateUrl: './registro.page.html', // Archivo HTML asociado al componente
  styleUrls: ['./registro.page.scss'], // Archivo CSS asociado al componente
})
export class RegistroPage implements OnInit, OnDestroy {
  // Declaración de variables de clase
  buttonText: string = 'Reenviar código'; // Texto del botón de reenvío
  minutes: number = 1; // Minutos restantes en el temporizador
  seconds: number = 0; // Segundos restantes en el temporizador
  interval: any; // Variable para almacenar el intervalo del temporizador
  isExpired: boolean = false; // Indicador de si el temporizador ha expirado
  input1: string = ''; // Primer dígito del código de verificación
  input2: string = ''; // Segundo dígito del código de verificación
  input3: string = ''; // Tercer dígito del código de verificación
  input4: string = ''; // Cuarto dígito del código de verificación
  inputsFilled: boolean = false; // Indicador de si todos los campos del código están llenos
  data: any; // Datos que se esperan de llamada al API

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private storageService: StorageService,
    private sms: SmsService,
    private api: ApiService
  ) { }

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    this.startTimer(); // Inicia el temporizador al cargar la página
  }

  // Método que se ejecuta al destruir el componente
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval); // Limpia el intervalo del temporizador si existe
    }
  }

  // Método para verificar si todos los campos del código están llenos
  checkInputs() {
    this.inputsFilled = this.input1 && this.input2 && this.input3 && this.input4 ? true : false;
  }

  // Método asincrónico para reenviar el código de verificación
  async reenviarCodigo() {
    let token = await this.storageService.getItem('token');

    if (this.isExpired) { // Si el temporizador ha expirado

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

      this.resetTimer(); // Reinicia el temporizador
    }
  }

  // Método para iniciar el temporizador
  startTimer() {
    this.interval = setInterval(() => { // Utiliza setInterval para ejecutar una función cada segundo
      if (this.seconds > 0) { // Si quedan segundos
        this.seconds--; // Decrementa los segundos
      } else {
        if (this.minutes > 0) { // Si quedan minutos y no segundos
          this.minutes--; // Decrementa los minutos
          this.seconds = 59; // Establece los segundos a 59
        } else {
          clearInterval(this.interval); // Limpia el intervalo del temporizador
          this.interval = null; // Establece el intervalo a null
          this.buttonText = 'Reenviar código'; // Restablece el texto del botón
          this.isExpired = true; // Marca el temporizador como expirado
        }
      }
    }, 1000); // Intervalo de 1000 milisegundos (1 segundo)
  }

  // Método para reiniciar el temporizador
  resetTimer() {
    this.minutes = 1; // Reinicia los minutos a 1
    this.seconds = 0; // Reinicia los segundos a 0
    this.buttonText = 'Reenviar código'; // Restablece el texto del botón
    this.isExpired = false; // Restablece el indicador de temporizador expirado
    this.startTimer(); // Reinicia el temporizador
  }

  async saveDataSms(code: any) {
    await this.storageService.removeItem('code-sms');
    await this.storageService.setItem('code-sms', code);
  }

  async verifyOTP() {
    const code_front = parseInt(this.input1 + '' + this.input2 + '' + this.input3 + '' + this.input4);
    console.log(code_front);
    const original_code = await this.storageService.getItem('code-sms');
    console.log(original_code)
    const token = await this.storageService.getItem('token');
    if (code_front === original_code) {
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
            this.router.navigate(['/home']);
          } /*else {
            this.router.navigate(['/terminos-y-condiciones']);
          }*/

        },
        (error: any) => {
          console.error('Error al consumir el servicio:', error);
        }
      )
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
          const id: number = Number(this.data.usu_id); // Convertir a número
          resolve(id); // Devolver el id convertido como una promesa
        },
        (error: any) => {
          console.error('Error al consumir el servicio:', error);
          reject(error.message); // Rechazar en caso de error
        }
      );
    });
  }

}

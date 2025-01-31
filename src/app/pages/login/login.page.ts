import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt.service';
import { StorageService } from 'src/app/services/storage.service';
import { SmsService } from 'src/app/services/sms.service';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  phone2: string = '';
  phone3: string = ''; // Otra variable para otro input

  constructor(
    private router: Router,
    private jwtService: JwtService,
    private storageService: StorageService,
    private sms: SmsService,
  ) {}

  ngOnInit() {
    this.init_value();
  }

  ngOnDestroy() {
    Keyboard.removeAllListeners(); // Eliminar listeners de teclado al destruir el componente
  }

  async init_value() {
    const code = await this.storageService.getItem('code-sms');
    if (code !== null) {
      console.log('code desde el Storage:', code);
    }

    const token = await this.storageService.getItem('token');
    if (token !== null) {
      console.log('token desde el Storage:', token);
      console.log('verificando del token');
      const result: any = await this.jwtService.verifyToken(token);
      console.log(result);
      const isLogged = result?.isLogged;
      if (isLogged === true) {
        console.log('esta logeado');
        this.router.navigate(['/lds']);
      }
    }
  }

  async send_otk() {
    console.log("🚀 ~ LoginPage ~ send_otk ~ this.phone2:", this.phone2)
    if (!this.phone2 || this.phone2.length < 9) {
      alert('El número no es valido.');
      return;
    }

    const phone = '+51' + this.phone2;
    const code = Math.floor(1000 + Math.random() * 9000);
    const body = 'Blip informa: el codigo solicitado es ' + code;
    const token = this.jwtService.generateTokenLogPhone('TELEFONO', phone, false);
    await this.saveDataSms(code);
    await this.saveDataToken(token);
    const token_enviar = await this.storageService.getItem('token');
    this.sms.sendSms(phone, body, token_enviar).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.error('Error al enviar el mensaje:', error);
      }
    );

    this.router.navigate(['/registro'], { queryParams: { PHONE2: this.phone2 } });
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
}

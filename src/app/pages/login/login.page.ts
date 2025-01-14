import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmsService } from '../../services/sms.service';
import { StorageService } from '../../services/storage.service';
import { JwtService } from '../../services/jwt.service';
import { Keyboard } from '@capacitor/keyboard';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  phone2: string = '';
  data: any;

  constructor(
    private router: Router,
    private jwtService: JwtService,
    private storageService: StorageService,
    private sms: SmsService,
  ) {
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
    console.log('dentro de log-phone');
    this.init_value();
    this.initializeKeyboardListeners();
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


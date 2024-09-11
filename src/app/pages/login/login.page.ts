import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmsService } from '../../services/sms.service';
import { StorageService } from '../../services/storage.service';
import { JwtService } from '../../services/jwt.service';

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
    private sms: SmsService) {
  }

  ngOnInit() {
    console.log('dentro de log-phone');
  }

  async send_otk() {
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

  async redirectFinal (){
    this.router.navigate(['/terminos-y-condiciones']);
  }

}


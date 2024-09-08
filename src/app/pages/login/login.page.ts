import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmsService } from '../../services/sms.service';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  phone2: string = '';
  
  constructor(
    private router: Router,
    private apiService: ApiService, 
    private sms:SmsService){
    
  }

  ngOnInit(){
    console.log('dentro de log-phone');
  }

  send_otk(){
    const phone = '+51' + this.phone2;
    const code = Math.floor(1000 + Math.random() * 9000); 
    const body = 'Blip informa: el codigo solicitado es ' + code;

    this.saveDataSms(code);

    this.sms.sendSms(phone, body).subscribe(
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
    await this.apiService.removeItem('code-sms');
    await this.apiService.setItem('code-sms', code);
    console.log('Datos guardados');
  }

}

 
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { StorageService } from '../../services/storage.service';
import { ApiService } from 'src/app/services/api.service';
import { SmsService } from '../../services/sms.service';


@Component({
  selector: 'app-datos-numero',
  templateUrl: './datos-numero.page.html',
  styleUrls: ['./datos-numero.page.scss'],
})
export class DatosNumeroPage implements OnInit {

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
    private api: ApiService,
    private sms: SmsService
  ) { }

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
    });
  }

  async setPhone() {
    const phone = '+51' + this.phone;
    const code = Math.floor(1000 + Math.random() * 9000);
    const body = 'Blip informa: el codigo solicitado es ' + code;
    
    const token = await this.jwtService.generateTokenLogPhone('TELEFONO', phone, false);
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

  async saveDataSms(code: any) {
    await this.storageService.removeItem('code-sms');
    await this.storageService.setItem('code-sms', code);
  }

  async saveDataToken(token: any) {
    await this.storageService.removeItem('token');
    await this.storageService.setItem('token', token);
  }

}

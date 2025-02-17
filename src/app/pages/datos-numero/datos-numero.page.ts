import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { StorageService } from '../../services/storage.service';
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
  doc: string = '';
  nro: string = '';
  phone: string = '';
// Función principal para formatear el número de teléfono
formatPhoneNumber() {
  // Remover todo lo que no sea un número
  let phone = this.phone.replace(/\D/g, '');

  // Limitar a 9 dígitos
  if (phone.length > 9) {
    phone = phone.slice(0, 9);
  }

  // Aplicar el formato 999 999 999
  phone = this.applyPhoneFormat(phone);

  // Asignar el número formateado
  this.phone = phone;
}
// Función para aplicar el formato de 3 dígitos
  applyPhoneFormat(phone: string): string {
    if (phone.length > 6) {
      return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    } else if (phone.length > 3) {
      return phone.replace(/(\d{3})(\d{3})/, '$1 $2');
    }
    return phone;
  }

  // Prevent typing anything that is not a number (Keydown)
  onKeyDown(event: KeyboardEvent) {
    // Solo permitir números y teclas de borrado
    if (!/[\d]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'Tab') {
      event.preventDefault();
    }
  }

  // Para cuando el usuario pega texto (Clipboard/Paste event)
  onPaste(event: ClipboardEvent) {
    const pastedText = event.clipboardData?.getData('text');
    if (pastedText && !/^\d+$/.test(pastedText)) {
      event.preventDefault(); // Impedir pegar texto no numérico
    }
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private storageService: StorageService,
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
      this.doc = params['doc'];
      this.nro = params['nro'];
    });
  }

  async verify() {
    const phone = '+51' + this.phone;
    const code = Math.floor(1000 + Math.random() * 9000);
    const body = 'Blip informa: el codigo solicitado es ' + code;
    console.log(phone);
    const token = await this.jwtService.generateTokenLogPhone('TELEFONO', phone, false);
    await this.saveDataSms(code);
    await this.saveDataToken(token);
    console.log(token);
    console.log(code);

    const token_enviar = await this.storageService.getItem('token');

    this.sms.sendSms(phone, body, token_enviar).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/datos-verificacion'], {
          queryParams: {
            nombre: this.nombre,
            apellido: this.apellido,
            fecha_nac: this.fecha_nac,
            genero: this.genero,
            doc: this.doc,
            nro: this.nro,
            phone: this.phone
          }
        });
      },
      (error: any) => {
        console.error('Error al enviar el mensaje:', error);
      }
    );

  }

  async return() {
    this.router.navigate(['/datos-ingresar'], {
      queryParams: {
        nombre: this.nombre,
        apellido: this.apellido,
        fecha_nac: this.fecha_nac,
        genero: this.genero,
        doc: this.doc,
        nro: this.nro,
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
  handleNavigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }
}

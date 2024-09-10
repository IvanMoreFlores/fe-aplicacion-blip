import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { StorageService } from '../../services/storage.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-log-bin',
  templateUrl: './log-bin.page.html',
  styleUrls: ['./log-bin.page.scss'],
})
export class LogBinPage implements OnInit {
  password: string = '';
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  con: string = '';
  isEmailValid: boolean = false;
  email: string = '';
  data: any;

  togglePasswordVisibility() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passwordIcon = 'eye';
    } else {
      this.passwordType = 'password';
      this.passwordIcon = 'eye-off';
    }
  }
  onEmailChange(): void {
    this.isEmailValid = this.password.trim().length > 0;
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private storageService: StorageService,
    private api: ApiService
  ) { }
  ngOnInit() {
    this.setMail();
  }

 setMail() {
    this.route.queryParams.subscribe(params => {
      this.email = params['EMAIL2'];
      console.log(this.email);
    });
  }

  async login() {
    const token = await this.jwtService.generateTokenLogEmail('CORREO', this.email, this.password, false);

    this.api.getValidate(token).subscribe(
      async (response: any) => {
        this.data = response.data;
        const validate = this.data.isValidate;
        if (validate === true) {
          const id_user: number = await this.getUserData(token);
          const token_main = this.jwtService.generateTokenMain('CORREO', id_user, true);
          await this.storageService.setItem('token', token_main);
          this.router.navigate(['/home']);
        } else {
          alert('usuario incorrecto!');
        }
      }
    )
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

  async saveDataToken(token: any) {
    await this.storageService.removeItem('token');
    await this.storageService.setItem('token', token);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { ApiService } from '../../services/api.service';

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
    private apiService: ApiService
  ) { }
  ngOnInit() {
    console.log('dentro de log-pwd');
  }

  login() {
    this.route.queryParams.subscribe(params => {
      const paramValue = params['EMAIL2'];
      const token = this.jwtService.generateToken_log_email('CORREO',paramValue,this.password, false );
      this.saveData(token);
      this.router.navigate(['/home']);
    });
  }

  async saveData(token: any) {
    await this.apiService.setItem('token', token);
    console.log('Datos guardados');
  }
}

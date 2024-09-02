import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtService } from '../../services/jwt.service';

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
    private jwtService: JwtService
  ) { }
  ngOnInit() {
  }

  login() {
    this.route.queryParams.subscribe(params => {
      const paramValue = params['EMAIL2'];
      if (paramValue == 'demo@gmail.com' && this.password == '123456') {
        alert('hello there ' + paramValue + ' password: ' + this.password);
        const payload = { userId: paramValue, pwd: this.password };
        const token = this.jwtService.generateToken(payload);
        console.log('Generated JWT:', token);
      }
    });

  }
}

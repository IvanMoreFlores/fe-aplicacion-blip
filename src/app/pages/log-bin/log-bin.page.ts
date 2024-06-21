import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}
  ngOnInit() {
  }
}

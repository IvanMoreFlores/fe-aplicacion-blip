import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-creacion-contra',
  templateUrl: './datos-creacion-contra.page.html',
  styleUrls: ['./datos-creacion-contra.page.scss'],
})
export class DatosCreacionContraPage implements OnInit {
  password: string = '';
  password2: string = '';
  passwordType: string = 'password';
  passwordType2: string = 'password';
  passwordIcon: string = 'eye-off';
  passwordIcon2: string = 'eye-off';
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
  togglePasswordVisibility2() {
    if (this.passwordType2 === 'password') {
      this.passwordType2 = 'text';
      this.passwordIcon2 = 'eye';
    } else {
      this.passwordType2 = 'password';
      this.passwordIcon2 = 'eye-off';
    }
  }
  onEmailChange(): void {
    this.isEmailValid = this.password.trim().length > 0;
  }
  constructor(private router: Router) {}
  ngOnInit() {
  }
}





















//   passwordType: string = 'password';
//   password: string = '';
//   confirmPassword: string = '';

//   constructor() {}

//   ngOnInit() {}

//   togglePasswordVisibility() {
//     this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
//   }
// }

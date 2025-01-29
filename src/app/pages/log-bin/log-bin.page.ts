import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-log-bin',
  templateUrl: './log-bin.page.html',
  styleUrls: ['./log-bin.page.scss'],
})
export class LogBinPage implements OnInit {
  keyboardOpen = false;
  password: string = '';
  showPassword: boolean = false;
  isPasswordValid: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  checkPassword() {
    this.isPasswordValid = this.password.length > 0;
  }

  onSubmit() {
    // Manejar el envío del formulario
    console.log('Contraseña enviada:', this.password);
  }
  constructor(private router: Router) {
    Keyboard.addListener('keyboardWillShow', () => {
      this.keyboardOpen = true;
    });

    // Detecta cuando se cierra el teclado
    Keyboard.addListener('keyboardWillHide', () => {
      this.keyboardOpen = false;
    });
  }
  ngOnInit() {
  }
}

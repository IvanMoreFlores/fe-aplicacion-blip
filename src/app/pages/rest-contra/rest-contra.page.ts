import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
@Component({
  selector: 'app-rest-contra',
  templateUrl: './rest-contra.page.html',
  styleUrls: ['./rest-contra.page.scss'],
})
export class RestContraPage implements OnInit {
  keyboardOpen = false;
  password: string = '';
  showPassword: boolean = false;
  password2: string = '';
  showPassword2: boolean = false;
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

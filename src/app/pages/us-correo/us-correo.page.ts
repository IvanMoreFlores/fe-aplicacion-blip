import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-us-correo',
  templateUrl: './us-correo.page.html',
  styleUrls: ['./us-correo.page.scss'],
})
export class UsCorreoPage implements OnInit {
  keyboardOpen = false;
  email: string = '';
  isEmailValid: boolean = false;
  displayedText: string = '';
  onEmailChange(): void {
    this.isEmailValid = this.email.trim().length > 0;
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
  goToDisplayPage() {
    this.router.navigate(['/recu-cuen'], { queryParams: { text: this.email } });
  }
  ngOnInit() {
  }

}

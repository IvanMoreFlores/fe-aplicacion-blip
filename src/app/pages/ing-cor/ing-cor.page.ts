import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
@Component({
  selector: 'app-ing-cor',
  templateUrl: './ing-cor.page.html',
  styleUrls: ['./ing-cor.page.scss'],
})
export class IngCorPage implements OnInit {
  keyboardOpen = false;
  email: string = '';
  isEmailValid: boolean = false;

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
    this.router.navigate(['/otp'], { queryParams: { text: this.email } });
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
@Component({
  selector: 'app-inf-corval',
  templateUrl: './inf-corval.page.html',
  styleUrls: ['./inf-corval.page.scss'],
})
export class InfCorvalPage implements OnInit {
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
    this.router.navigate(['/inf-corcod'], { queryParams: { text: this.email } });
  }
  ngOnInit() {
  }

}

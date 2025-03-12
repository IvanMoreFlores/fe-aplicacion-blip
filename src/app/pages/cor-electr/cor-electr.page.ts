import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
@Component({
  selector: 'app-cor-electr',
  templateUrl: './cor-electr.page.html',
  styleUrls: ['./cor-electr.page.scss'],
})
export class CorElectrPage implements OnInit {
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
    this.router.navigate(['/datos-ingresar'], { queryParams: { text: this.email } });
  }
  ngOnInit() {
  }

}

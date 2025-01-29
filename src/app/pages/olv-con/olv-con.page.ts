import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
@Component({
  selector: 'app-olv-con',
  templateUrl: './olv-con.page.html',
  styleUrls: ['./olv-con.page.scss'],
})
export class OlvConPage implements OnInit {
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
    this.router.navigate(['/succes-corr'], { queryParams: { text: this.email } });
  }
  ngOnInit() {
  }
}

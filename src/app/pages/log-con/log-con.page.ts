import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
@Component({
  selector: 'app-log-con',
  templateUrl: './log-con.page.html',
  styleUrls: ['./log-con.page.scss'],
})
export class LogConPage implements OnInit {
  keyboardOpen = false;
  email2: string = '';
  isEmailValid: boolean = false;

  onEmailChange(): void {
    this.isEmailValid = this.email2.trim().length > 0;
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
    this.router.navigate(['/log-bin'], { queryParams: { EMAIL2: this.email2 } });
    
  }
  ngOnInit() {
  }
}

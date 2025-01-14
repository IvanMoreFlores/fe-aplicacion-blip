import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
@Component({
  selector: 'app-cor-controlv',
  templateUrl: './cor-controlv.page.html',
  styleUrls: ['./cor-controlv.page.scss'],
})
export class CorControlvPage implements OnInit {
  email3: string = '';
  isEmailValid: boolean = false;

  onEmailChange(): void {
    this.isEmailValid = this.email3.trim().length > 0;
  }
  constructor(private router: Router) {}
  goToDisplayPage() {
    this.router.navigate(['/succes-cor'], { queryParams: { text: this.email3 } });
  }
  initializeKeyboardListeners() {
    const content = document.querySelector('ion-content') as HTMLElement;
    const footer = document.querySelector('.footer-btn') as HTMLElement;

    Keyboard.addListener('keyboardWillShow', (info) => {
      const footer = document.querySelector('.footer-btn') as HTMLElement;
      if (footer) {
        footer.style.bottom = `${info.keyboardHeight}px`; // Ajusta el espacio
      }
    });
    

    Keyboard.addListener('keyboardWillHide', () => {
      const footer = document.querySelector('.footer-btn') as HTMLElement;
      const content = document.querySelector('ion-content') as HTMLElement;
    
      if (footer) {
        footer.style.bottom = '0px'; // Restaura el footer
      }
      if (content) {
        content.style.paddingBottom = '0px'; // Restaura el padding
      }
    });
    
  }
  ngOnInit() {

    this.initializeKeyboardListeners();
  }
  ngOnDestroy() {
    Keyboard.removeAllListeners(); // Eliminar listeners de teclado al destruir el componente
  }

}
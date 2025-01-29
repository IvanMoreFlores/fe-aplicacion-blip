import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-log-con',
  templateUrl: './log-con.page.html',
  styleUrls: ['./log-con.page.scss'],
})
export class LogConPage implements OnInit {
  email2: string = '';
  isEmailValid: boolean = false;

  onEmailChange(): void {
    this.isEmailValid = this.email2.trim().length > 0;
  }
  constructor(
    private router: Router, 
    private storageService: StorageService
  ) { }
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
  goToDisplayPage() {
    this.router.navigate(['/log-bin'], { queryParams: { EMAIL2: this.email2 } });
  }
  ngOnInit() {
    this.init_value();
    this.initializeKeyboardListeners();
  }
  ngOnDestroy() {
    Keyboard.removeAllListeners(); // Eliminar listeners de teclado al destruir el componente
  }

  async init_value(){
    const valor = await this.storageService.getItem('token');
    if (valor) {
      console.log('token desde el Storage:', valor);
    } else {
      console.log('No hay datos almacenados con esa clave.');
    }
  }
}

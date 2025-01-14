import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { Keyboard, KeyboardResize } from '@capacitor/keyboard';

import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storageService: StorageService,) {

    Keyboard.setResizeMode({
      mode: KeyboardResize.Native, // Cambia a Ionic, Body o None según tu necesidad
    });
    
    // Escucha los eventos del teclado si necesitas manejar clases en el DOM
    Keyboard.addListener('keyboardWillShow', () => {
      document.body.classList.add('keyboard-open');
    });
    
    Keyboard.addListener('keyboardWillHide', () => {
      document.body.classList.remove('keyboard-open');
    });
  }


}

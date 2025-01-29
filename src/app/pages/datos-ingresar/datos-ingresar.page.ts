import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
@Component({
  selector: 'app-datos-ingresar',
  templateUrl: './datos-ingresar.page.html',
  styleUrls: ['./datos-ingresar.page.scss'],
})
export class DatosIngresarPage implements OnInit {
  keyboardOpen = false;
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

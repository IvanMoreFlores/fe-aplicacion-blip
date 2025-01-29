import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
import { MaskitoOptions, MaskitoElementPredicate, maskitoTransform } from '@maskito/core';
@Component({
  selector: 'app-datos-numero',
  templateUrl: './datos-numero.page.html',
  styleUrls: ['./datos-numero.page.scss'],
})
export class DatosNumeroPage implements OnInit {
  keyboardOpen = false;
  phoneNumber: string = '';

  // Función principal para formatear el número de teléfono
  formatPhoneNumber() {
    // Remover todo lo que no sea un número
    let phone = this.phoneNumber.replace(/\D/g, '');
    
    // Limitar a 9 dígitos
    if (phone.length > 9) {
      phone = phone.slice(0, 9);
    }

    // Aplicar el formato 999 999 999
    phone = this.applyPhoneFormat(phone);
    
    // Asignar el número formateado
    this.phoneNumber = phone;
  }

  // Función para aplicar el formato de 3 dígitos
  applyPhoneFormat(phone: string): string {
    if (phone.length > 6) {
      return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    } else if (phone.length > 3) {
      return phone.replace(/(\d{3})(\d{3})/, '$1 $2');
    }
    return phone;
  }

  // Prevent typing anything that is not a number (Keydown)
  onKeyDown(event: KeyboardEvent) {
    // Solo permitir números y teclas de borrado
    if (!/[\d]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'Tab') {
      event.preventDefault();
    }
  }

  // Para cuando el usuario pega texto (Clipboard/Paste event)
  onPaste(event: ClipboardEvent) {
    const pastedText = event.clipboardData?.getData('text');
    if (pastedText && !/^\d+$/.test(pastedText)) {
      event.preventDefault(); // Impedir pegar texto no numérico
    }
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

  ngOnInit() {
  }

}

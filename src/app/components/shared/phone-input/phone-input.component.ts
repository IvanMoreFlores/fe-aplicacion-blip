import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
})
export class PhoneInputComponent {
  @Input() phoneNumber: string = ''; // Valor recibido del padre
  @Output() phoneNumberChange = new EventEmitter<string>(); // Emisor de eventos

  onPhoneChange(event: any) {
    this.phoneNumberChange.emit(event.detail.value); // Emitir cambios
  }
}

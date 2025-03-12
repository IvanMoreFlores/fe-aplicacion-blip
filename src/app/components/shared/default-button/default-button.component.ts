import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'default-custom-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss'],
})
export class DefaultButtonComponent {
  @Output() clicked = new EventEmitter<void>(); // Nuevo Output para emitir eventos
  @Input() withImg: boolean = false;
  @Input() imageUrl: string | null = '/assets/images/login/email.png';
  @Input() text: string = 'Ingresar';
  @Input() disabled: boolean = false;
  @Input() class: string = 'primary-button';
  @Input() withTime: boolean = false;
  @Input() minutes: number = 0;
  @Input() seconds: number = 0;
  @Input() id: string = '';
  @Input() withImgPass: boolean = false;

  onClick() {
    this.clicked.emit(); // Emitimos el evento al padre
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'default-input',
  templateUrl: './default-input.component.html',
  styleUrls: ['./default-input.component.scss'],
})
export class DefaultInputComponent {
  @Input() placeholder: string = '';
  @Input() withCodeCountry: boolean = false;
  @Input() codeCountry: string = '';
  @Input() valueInput: string = '';
  @Input() class: string = 'default-input';
  @Input() pattern: string = '';
  @Input() type: string = 'text';
  @Input() imageUrlRigth: string = '';
  @Input() withImgRight: boolean = false;
  @Input() classImgRight: string = '';
  @Output() valueInputChange = new EventEmitter<string>();

  mode: string = 'md';
  isPasswordVisible: boolean = false;

  constructor(private platform: Platform) {}

  ngOnInit() {
    this.mode = this.platform.is('ios') ? 'ios' : 'md';
  }

  onValueChange(event: any) {
    this.valueInputChange.emit(event.detail.value);
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  get inputType() {
    return this.type === 'password' && this.isPasswordVisible ? 'text' : this.type;
  }
}

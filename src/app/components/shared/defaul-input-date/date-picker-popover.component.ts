import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  template: `
    <div class="popover-content">
      <ion-datetime
        [value]="valueInput"
        (ionChange)="onChange($event)"
        presentation="date"
        show-default-buttons="true"
        doneText="Aceptar"
        cancelText="Cancelar">
      </ion-datetime>
    </div>
  `,
  styles: [`
    .popover-content {
      font-family: 'Poppins';
      padding: 0px;
      background: white;
      border-radius: 10px;
      width: 100%;
    }
    .custom-datetime {
      --button-background: #f0f0f0;
      --button-color: #333;
      --button-hover-background: #e0e0e0;
      --button-hover-color: #000;
      --button-border-radius: 8px;
      --button-padding: 8px 16px;
      --button-margin: 8px;
    }
    .custom-datetime ion-button {
      font-family: 'Poppins', sans-serif;
    }
  `]
})
export class DatePickerPopoverComponent {
  @Input() valueInput: string = '';

  constructor(private popoverCtrl: PopoverController) {}

  async onChange(event: any) {
    const selectedDate = event.detail.value;

    if (selectedDate) {
      const formattedDate = selectedDate.split('T')[0]; // Extraer solo la fecha sin la hora
      console.log("Fecha seleccionada:", formattedDate);
      await this.popoverCtrl.dismiss(formattedDate); // Cierra el modal con la fecha
    }
  }
}

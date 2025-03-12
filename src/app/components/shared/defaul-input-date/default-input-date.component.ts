import {
  Component,
  Input,
  Output,
  EventEmitter,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PopoverController, Platform } from '@ionic/angular';
import { DatePickerPopoverComponent } from './date-picker-popover.component';

@Component({
  selector: 'default-input-date',
  templateUrl: './default-input-date.component.html',
  styleUrls: ['./default-input-date.component.scss'],
})
export class DefaultInputDateComponent {
  @Input() class: string = 'primary-input';
  @Input() valueInput: string = '';
  @Input() placeholder: string = 'Selecciona una fecha';
  @Input() classImgRight: string = '';
  @Output() valueInputChange = new EventEmitter<string>();

  formattedDate: string = '';
  mode: string = 'md';

  @ViewChild('popoverContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  constructor(
    private platform: Platform,
    private popoverCtrl: PopoverController,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  ngOnInit() {
    this.mode = this.platform.is('ios') ? 'ios' : 'md';
    this.formatDate(this.valueInput);
  }

  async openDatePicker(event: any) {
    const popover = await this.popoverCtrl.create({
      component: DatePickerPopoverComponent,
      event: event,
      translucent: true,
      componentProps: {
        valueInput: this.valueInput,
      },
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();
    if (data) {
      console.log('Fecha recibida en el input:', data);
      this.valueInput = data;
      this.formatDate(this.valueInput);
      this.valueInputChange.emit(this.valueInput);
    }
  }

  formatDate(date: string) {
    if (!date) {
      this.formattedDate = '';
      return;
    }

    const parsedDate = new Date(date);
    console.log('🚀 ~ DefaultInputDateComponent ~ formatDate ~ parsedDate:', parsedDate.toISOString());

    // Obtener el día, mes y año en UTC
    const day = parsedDate.getUTCDate().toString().padStart(2, '0');
    const month = (parsedDate.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = parsedDate.getUTCFullYear();

    this.formattedDate = `${day}/${month}/${year}`;
  }

}

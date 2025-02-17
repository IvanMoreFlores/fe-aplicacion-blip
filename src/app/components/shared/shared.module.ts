import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { PhoneInputComponent } from './phone-input/phone-input.component';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { LoaderComponent } from './loader/loader.component';
import { DynamicInputsNumericComponent } from './dynamic-inputs-numeric/dynamic-inputs-numeric.component';
import { DefaultInputComponent } from './default-input/default-input.component';
import { DefaultSelectComponent } from './default-select/default-select.component';
import { DefaultInputDateComponent } from './defaul-input-date/default-input-date.component';
import { DatePickerPopoverComponent } from './defaul-input-date/date-picker-popover.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PhoneInputComponent,
    DefaultButtonComponent,
    LoaderComponent,
    DynamicInputsNumericComponent,
    DefaultInputComponent,
    DefaultSelectComponent,
    DefaultInputDateComponent,
    DatePickerPopoverComponent,
  ],
  imports: [CommonModule, IonicModule], // Importa los módulos necesarios
  exports: [
    HeaderComponent,
    PhoneInputComponent,
    DefaultButtonComponent,
    LoaderComponent,
    DynamicInputsNumericComponent,
    DefaultInputComponent,
    DefaultSelectComponent,
    DefaultInputDateComponent,
    DatePickerPopoverComponent,
  ], // Exporta el componente para que pueda ser usado en otros módulos
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}

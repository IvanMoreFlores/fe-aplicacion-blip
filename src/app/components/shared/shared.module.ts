import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ToolbarLoginComponent } from './toolbar-login/toolbar-login.component';
import { PhoneInputComponent } from './phone-input/phone-input.component';
import { DefaultButtonComponent } from './default-button/default-button.component';

@NgModule({
  declarations: [
    ToolbarLoginComponent,
    PhoneInputComponent,
    DefaultButtonComponent,
  ],
  imports: [CommonModule, IonicModule], // Importa los módulos necesarios
  exports: [ToolbarLoginComponent, PhoneInputComponent, DefaultButtonComponent], // Exporta el componente para que pueda ser usado en otros módulos
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}

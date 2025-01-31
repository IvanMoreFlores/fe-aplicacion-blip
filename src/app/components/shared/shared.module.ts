import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ToolbarLoginComponent } from './toolbar-login/toolbar-login.component';
import {PhoneInputComponent} from './phone-input/phone-input.component';

@NgModule({
  declarations: [ToolbarLoginComponent,PhoneInputComponent],
  imports: [CommonModule, IonicModule], // Importa los módulos necesarios
  exports: [ToolbarLoginComponent,PhoneInputComponent], // Exporta el componente para que pueda ser usado en otros módulos
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule {}

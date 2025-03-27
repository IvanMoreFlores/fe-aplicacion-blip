import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfiguracionAlquilarPageRoutingModule } from './configuracion-alquilar-routing.module';
import { ConfiguracionAlquilarPage } from './configuracion-alquilar.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionAlquilarPageRoutingModule,
    SharedModule,
  ],
  declarations: [ConfiguracionAlquilarPage],
})
export class ConfiguracionAlquilarPageModule {}

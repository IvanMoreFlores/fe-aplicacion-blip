import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContraCorPageRoutingModule } from './contra-cor-routing.module';
import { ContraCorPage } from './contra-cor.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContraCorPageRoutingModule,
    SharedModule  ,
  ],
  declarations: [ContraCorPage],
})
export class ContraCorPageModule {}

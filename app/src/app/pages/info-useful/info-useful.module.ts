import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoUsefulPageRoutingModule } from './info-useful-routing.module';

import { InfoUsefulPage } from './info-useful.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoUsefulPageRoutingModule
  ],
  declarations: [InfoUsefulPage]
})
export class InfoUsefulPageModule {}

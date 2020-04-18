import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoUsefulPageRoutingModule } from './info-useful-routing.module';

import { InfoUsefulPage } from './info-useful.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InfoUsefulPageRoutingModule
  ],
  declarations: [InfoUsefulPage]
})
export class InfoUsefulPageModule {}

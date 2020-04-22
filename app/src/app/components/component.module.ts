import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  declarations: [
    ChatDialogComponent

  ],
  exports: [
    ChatDialogComponent
  ]
})

export class ComponentsModules { }

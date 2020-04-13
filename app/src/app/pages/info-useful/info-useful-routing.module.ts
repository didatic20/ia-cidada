import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoUsefulPage } from './info-useful.page';

const routes: Routes = [
  {
    path: '',
    component: InfoUsefulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoUsefulPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailypostPage } from './dailypost.page';

const routes: Routes = [
  {
    path: '',
    component: DailypostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailypostPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailypostPageRoutingModule } from './dailypost-routing.module';

import { DailypostPage } from './dailypost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailypostPageRoutingModule
  ],
  declarations: [DailypostPage]
})
export class DailypostPageModule {}

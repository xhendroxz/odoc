import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { DetailPage } from '../doctor/detail/detail.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slideSubCategory = {
    slidesPerView: 2.2,
  };

  slideCategory = {
    slidesPerView: 4,
  };
  constructor(
    private router: Router,
    private modalCtrl: ModalController,
  ) {}

  async goDetail() {
    const modal = await this.modalCtrl.create({
      component: DetailPage
    });
    return await modal.present();
  }
}

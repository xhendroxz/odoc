import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { NewsDetailPage } from '../news/news-detail/news-detail.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
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
      component: NewsDetailPage
    });
    return await modal.present();
  }
}

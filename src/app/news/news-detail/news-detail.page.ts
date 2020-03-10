import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {
  }

  closePage() {
    this.modalCtrl.dismiss();
  }
}

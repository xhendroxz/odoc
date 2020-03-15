import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  opt: any;
  textBtn = 'View List Of Schedule';

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  closePage() {
    this.modalCtrl.dismiss();
  }

  schedule() {
    if(this.opt == true){
      this.textBtn = 'View List Of Schedule';
      this.opt = false;
    }
    else{
      this.textBtn = 'Close List Of Schedule';
      this.opt = true;
    }
  }

}

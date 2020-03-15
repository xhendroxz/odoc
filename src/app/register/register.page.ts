import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    switch: true,
    pagination: '.swiper-pagination',
  };

  constructor() { }

  ngOnInit() {
  }

}

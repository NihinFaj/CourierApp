import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  registerUser() {
    console.log("I am about to go Link Device Page")
    this.navCtrl.setRoot("LinkdevicePage");
  }

}

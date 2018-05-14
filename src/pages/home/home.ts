import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { CourierproviderProvider } from '../../providers/courierprovider/courierprovider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public courierProvider: CourierproviderProvider) {

  }

  registerUser() {
    console.log("I am about to go Link Device Page")
    this.courierProvider.presentLoadingCustom();
    this.navCtrl.setRoot("LinkdevicePage");
  }

}

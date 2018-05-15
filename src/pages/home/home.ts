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

  getNames(){
    console.log("I am about to call names API");
  }

  registerUser() {
    console.log("I am about to go Link Device Page")
    this.courierProvider.presentLoadingCustom();
    console.log("Just called the loader")    
    this.navCtrl.setRoot("LinkdevicePage");
  }

}

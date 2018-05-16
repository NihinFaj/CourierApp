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

  // registerUser() {
  //   console.log("I am about to go Link Device Page")
  //   this.courierProvider.presentLoadingCustom();
  //   console.log("Just called the loader")    
  //   this.navCtrl.setRoot("LinkdevicePage");
  // }

  apiURL = 'http://gtmobile.gtbank.com/CourierAppAPI/api/Courier/get-all-names';

  registerUser() {
    this.courierProvider.callService(this.apiURL)
    .then((result) => {
      console.log("Call entered success");
      console.log(result)
    }, (err) => {
      console.log("Call entered exception");      
      console.log(err);
    }
  );
  }

}

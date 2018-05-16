import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { CourierproviderProvider } from '../../providers/courierprovider/courierprovider';
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public courierProvider: CourierproviderProvider) {
    this.getAllUser();
  }

  loading: any;  

  getAllUserURL = 'http://gtmobile.gtbank.com/CourierAppAPI/api/Courier/get-all-names';

  registerUserURL = 'http://gtmobile.gtbank.com/CourierAppAPI/api/Courier/register-user';


  getAllUser() {
    this.loading = this.loadingCtrl.create({ content: "" });
    this.loading.present();
    this.courierProvider.callService(this.getAllUserURL)
    .then((result) => {
    this.loading.dismissAll();      
      console.log("Call entered success");
      console.log(result)
    }, (err) => {
    this.loading.dismissAll();      
      console.log("Call entered exception");      
      console.log(err);
    }
  );
  }


  registerUser() {
    this.loading = this.loadingCtrl.create({ content: "Registering User, please wait..." });
    this.loading.present();
    this.courierProvider.callService(this.registerUserURL)
    .then((result) => {
    this.loading.dismissAll();      
      console.log("Call entered success");
      console.log(result)
    this.navCtrl.setRoot("LinkdevicePage");      
    }, (err) => {
    this.loading.dismissAll();      
      console.log("Call entered exception");      
      console.log(err);
    this.navCtrl.setRoot("LinkdevicePage");      
    }
  );
  }

}

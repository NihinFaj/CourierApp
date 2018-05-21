import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { CourierproviderProvider } from '../../providers/courierprovider/courierprovider';
import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {UserDetails, UserResponseModel} from '../home/AllUserResponseModel'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public courierProvider: CourierproviderProvider) {
    this.getAllUser();
  }

  loading: any;
  Users: any;
  
  data = {
    name: ""
  }

  getAllUserURL = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/get-all-names';
  getAllRequest = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/get-all-requests';
  registerUserURL = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/register-user';


  getAllUser() {
    this.loading = this.loadingCtrl.create({ content: "" });
    this.loading.present();
    this.courierProvider.callService(this.getAllUserURL)
    .then((result: any) => {
      console.log(result);

      if (result.StatusCode == 1000){
        this.loading.dismissAll();      
        this.Users = JSON.parse(result.Message);
        console.log(this.Users);        
      }
      else {
        this.loading.dismissAll();      
        this.courierProvider.presentAlert(result.Error);
      }

    }, (err) => {
    this.loading.dismissAll();      
      console.log("Call entered exception");      
      console.log(err);
    }
  );
  }

  registerUser() {

    if (!this.data.name){
      this.courierProvider.presentAlert("Please select a name");
      return false;
    }

    this.loading = this.loadingCtrl.create({ content: "Registering User..." });
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

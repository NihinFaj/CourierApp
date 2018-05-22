import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { CourierproviderProvider } from '../../providers/courierprovider/courierprovider';
import { SessionproviderProvider } from '../../providers/sessionprovider/sessionprovider';
import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { UserDetails, UserResponseModel} from '../home/AllUserResponseModel';
import { Device } from '@ionic-native/device';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public device: Device, public loadingCtrl: LoadingController, public navCtrl: NavController, public courierProvider: CourierproviderProvider, public sessionProvider: SessionproviderProvider) {
    this.getAllUser();
    this.getDeviceInfo();
  }

  loading: any;
  Users: any;
  
  data = {
    Email: "",
    Status:"",
    DeviceId:""
  }

  getAllUserURL = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/get-all-names';
  registerUserURL = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/register-user';

  getDeviceInfo(){
    console.log('Device UUID is: ' + this.device.uuid);
    console.log('Cordova is: ' + this.device.cordova);
    console.log('Device Model is: ' + this.device.model);
    console.log('Platform is: ' + this.device.platform);
    console.log('OS Version is: ' + this.device.version);
    console.log('Manufacturer is: ' + this.device.manufacturer);
    console.log('Serial Number is: ' + this.device.serial);
  }

  getAllUser() {
    this.loading = this.loadingCtrl.create({ content: "" });
    this.loading.present();
    this.courierProvider.callService(this.getAllUserURL)
    .then((result: any) => {

      if (result.StatusCode == 1000){
        this.loading.dismissAll();      
        this.Users = JSON.parse(result.Message);
        console.log(this.Users);        
      }
      else {
        this.loading.dismissAll();      
        this.courierProvider.presentAlert(result.Error);
      }

    }, (err: any) => {

    this.loading.dismissAll();      
      console.log("Call entered exception");      
      console.log(err);
      this.courierProvider.presentAlert("Service not available at the moment, please try again later");
    }
  );
  }

  registerUser() {

    if (!this.data.Email) {
      this.courierProvider.presentAlert("Please select a name");
      return false;
    }

    this.data.DeviceId = this.device.uuid || "123456";
    this.data.Status = "1";

    console.log(this.data);

    // var name = document.getElementById("userName");
    // var selectedBillerName = name.options[name.selectedIndex].text;

    this.loading = this.loadingCtrl.create({ content: "Registering User..." });
    this.loading.present();
    this.courierProvider.callServicePost(this.registerUserURL, this.data)
    .then((result: any) => {

    if (result.StatusCode == 1000) {
      this.loading.dismissAll();

      this.sessionProvider.setStorage('userName', this.data.Email).then(() => {
        this.navCtrl.setRoot("LinkdevicePage");      
        });
    }
    else {
      this.loading.dismissAll();      
      this.courierProvider.presentAlert(result.Error);
    }

    }, (err: any) => {

    this.loading.dismissAll();      
      console.log("Call entered exception");      
      console.log(err);
      this.courierProvider.presentAlert("Service not available at the moment, please try again later");      
    }
  );

  }

}

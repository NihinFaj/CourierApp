import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionproviderProvider } from '../../providers/sessionprovider/sessionprovider';
import { LoadingController } from 'ionic-angular';
import { CourierproviderProvider } from '../../providers/courierprovider/courierprovider';


/**
 * Generated class for the LinkdevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-linkdevice',
  templateUrl: 'linkdevice.html',
})
export class LinkdevicePage {

  constructor(public courierProvider: CourierproviderProvider, public sessionProvider: SessionproviderProvider, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  data = {
    name: ""
  };

  getAllRiderRequest = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/get-all-rider-requests';

  loading: any;

  ionViewDidLoad() {
    this.getRegisteredUser();    
  }

  async getRegisteredUser() {
    var derName = await this.sessionProvider.getStorage('userName');
    this.data.name = derName;
  }

  getAllRequests() {

    this.loading = this.loadingCtrl.create({ content: "" });
    this.loading.present();
    this.courierProvider.callServicePost(this.getAllRiderRequest, this.data)
    .then((result: any) => {

    if (result.StatusCode == 1000) {
      this.loading.dismissAll();

      this.sessionProvider.setStorage('userName', "Array of all requests gotten from DB").then(() => {
        this.navCtrl.setRoot("RiderdashboardPage");      
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

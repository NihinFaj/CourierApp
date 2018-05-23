import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourierproviderProvider } from '../../providers/courierprovider/courierprovider';
import { LoadingController } from 'ionic-angular';
import { SessionproviderProvider } from '../../providers/sessionprovider/sessionprovider';

/**
 * Generated class for the RiderdashboardPage page.
 *
 * See https://ionicframewoironk.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-riderdashboard',
  templateUrl: 'riderdashboard.html',
})
export class RiderdashboardPage {

  constructor(public sessionProvider: SessionproviderProvider, public loadingCtrl: LoadingController, public courierProvider: CourierproviderProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getAllRiderRequest();
  }

  loading: any;
  role = "Rider";
  allRequests: any;

  getRiderRequestURL = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/get-all-rider-requests';

  getAllRiderRequest() {

    this.loading = this.loadingCtrl.create({ content: "" });
    this.loading.present();
    this.courierProvider.callService(this.getRiderRequestURL)
    .then((result: any) => {

      if (result.StatusCode == 1000) {
        this.loading.dismissAll();      
        this.allRequests = JSON.parse(result.Message);
        console.log(this.allRequests);

        if(this.allRequests.length === 0) {
        this.courierProvider.presentAlert("There are no available request at the moment");   
        return false;            
        }

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

    acceptRequest(reqDets) {
      this.sessionProvider.setStorage('requestDetails', reqDets).then(() => {
          this.navCtrl.setRoot("ViewrequestPage");      
        });
  }
  
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourierproviderProvider } from '../../providers/courierprovider/courierprovider';
import { LoadingController } from 'ionic-angular';
import { SessionproviderProvider } from '../../providers/sessionprovider/sessionprovider';

/**
 * Generated class for the MailroomdashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mailroomdashboard',
  templateUrl: 'mailroomdashboard.html',
})
export class MailroomdashboardPage {

  constructor(public sessionProvider: SessionproviderProvider, public loadingCtrl: LoadingController, public courierProvider: CourierproviderProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.getAllMailroomRequest();
  }

  loading: any;
  role = "mailRoomOfficer";
  allRequests: any;

  getMailRoomRequestURL = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/get-all-mailroom-requests';

  getAllMailroomRequest() {

    this.loading = this.loadingCtrl.create({ content: "" });
    this.loading.present();
    this.courierProvider.callService(this.getMailRoomRequestURL)
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

  acceptRequest(reqDets: any) {
    this.sessionProvider.setStorage('requestDetails', JSON.stringify(reqDets)).then(() => {
        this.navCtrl.push("ViewrequestPage");      
      });
  } 

}

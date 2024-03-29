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
    this.getRiderDetailsAndRequest();    
  }

  loading: any;
  role = "Rider";
  allRequests: any;
  userDetails: any;
  data = {
    BranchCode: "",
    RiderEmail: ""
  }

  //URLs to call on the REST Api
  getRiderRequestURL = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/get-all-rider-requests';

  //Get Rider details and get all requests
  async getRiderDetailsAndRequest() {

    this.userDetails = await this.sessionProvider.getStorage('registeredUserDetails');

    this.data.BranchCode = JSON.parse(this.userDetails).Branch_Code;
    this.data.RiderEmail = JSON.parse(this.userDetails).Email_Address;   
    
    this.loading = this.loadingCtrl.create({ content: "" });
    this.loading.present();

    console.log("About to call the service");
    console.log(this.data);

    this.courierProvider.callServicePost(this.getRiderRequestURL,this.data)
    .then((result: any) => {

      if (result.StatusCode == 1000) {
        this.loading.dismissAll();      
        this.allRequests = JSON.parse(result.Message);
        console.log(this.allRequests);

        if(this.allRequests.length === 0) {
        this.courierProvider.presentAlert("There are no available request for you at the moment");   
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

    //Accept request 
    acceptRequest(reqDets: any) {
      this.sessionProvider.setStorage('requestDetails', JSON.stringify(reqDets)).then(() => {
          this.navCtrl.push("ViewrequestPage");      
        });
    } 
  
}

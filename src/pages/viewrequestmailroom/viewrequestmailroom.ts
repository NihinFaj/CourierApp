import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { SessionproviderProvider } from '../../providers/sessionprovider/sessionprovider';
import { CourierproviderProvider } from '../../providers/courierprovider/courierprovider';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the ViewrequestmailroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewrequestmailroom',
  templateUrl: 'viewrequestmailroom.html',
})
export class ViewrequestmailroomPage {

  constructor(public loadingCtrl: LoadingController, public courierProvider: CourierproviderProvider, public sessionProvider: SessionproviderProvider, public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner) {
  }

  ionViewDidLoad() {
    this.getUserName();
    // this.getRequestDetails();
  }

  submitMailroomPickupURL = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/submit-mailroom-pickup-request';

  loading: any;  
  // requestDetails: any;
  userDetails: any;
  data = {
    RiderEmail: ""
  }  
  value = {
    QrCode: "",
    MailRoomName: ""
  }

  async getUserName() {
    this.userDetails = await this.sessionProvider.getStorage('registeredUserDetails');
    this.data.RiderEmail = JSON.parse(this.userDetails).Email_Address;  
    console.log("Rider Email Gotten is " + this.data.RiderEmail); 
  }

  // async getRequestDetails() {
  //   var reqDet = await this.sessionProvider.getStorage('requestDetails');
  //   this.requestDetails = JSON.parse(reqDet);
  //   console.log(this.requestDetails);
  // }

  scanQR() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted


          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => 
        console.log('Error is', e));
    }

      submitRequestManually() {

        console.log("Entered QRCode");
        console.log(this.value.QrCode);

        if (!this.value.QrCode) {
          this.courierProvider.presentAlert("Please enter QRCode digits");
          return false;
        }
        
        if (!this.data.RiderEmail) {
          this.courierProvider.presentAlert("Please Register as a Rider");
          return false;
        }
    
        this.value.MailRoomName = this.data.RiderEmail;
    
        console.log(this.value);
    
        this.loading = this.loadingCtrl.create({ content: "Submitting Request" });
        this.loading.present();
        this.courierProvider.callServicePost(this.submitMailroomPickupURL, this.value)
        .then((result: any) => {
    
          console.log(result);
    
        if (result.StatusCode == 1000) {
          this.loading.dismissAll();
    
          console.log("Rider's update was submitted successfully");
    
          this.navCtrl.setRoot("MailroomsuccesspagePage");      
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

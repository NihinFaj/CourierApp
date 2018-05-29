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

  //Get registered user details
  async getUserName() {
    this.userDetails = await this.sessionProvider.getStorage('registeredUserDetails');
    this.data.RiderEmail = JSON.parse(this.userDetails).Email_Address;  
    console.log("Rider Email Gotten is " + this.data.RiderEmail); 
  }

  //Open up camera to scan QR Code
  scanQR() {
    console.log("Just entered scan QR Code function");
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          console.log("Camera permisison was granted");
                    
          var ionApp = <HTMLElement>document.getElementsByTagName("ion-app")[0];
          // camera permission was granted

          // start scanning
          console.log("About to start scanning");

          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned value is:', text);
            console.log(text);
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
            ionApp.style.display = "block";
            this.value.QrCode = text;
          });

          // show camera preview
          ionApp.style.display = "none";
          this.qrScanner.show();
          setTimeout(() => {
          ionApp.style.display = "block";
          scanSub.unsubscribe(); // stop scanning
          ionApp.style.display = "block";
          this.qrScanner.hide();
          }, 15000);
          // wait for user to scan something, then the observable callback will be called

        } else if (status.denied) {
          console.log("Camera permission was denied, please use OpenSettings to go grant access");
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          console.log("Camera permission was denied, don't know the reason");          
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => 
        console.log('Error is', e));
  }

      //Submit request manually
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
    
          this.navCtrl.push("MailroomsuccesspagePage");      
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

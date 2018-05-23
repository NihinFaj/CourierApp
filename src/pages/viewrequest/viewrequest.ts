import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { SessionproviderProvider } from '../../providers/sessionprovider/sessionprovider';

/**
 * Generated class for the ViewrequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewrequest',
  templateUrl: 'viewrequest.html',
})
export class ViewrequestPage {

  constructor(public sessionProvider: SessionproviderProvider, public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner) {
  }

  ionViewDidLoad() {
    this.getUserName();
    this.getRequestDetails();
  }

  userEmail: any;

  requestDetails = {};

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

      async getUserName() {
        var userName = await this.sessionProvider.getStorage('userName');
        this.userEmail = userName;
        console.log(this.userEmail);
        
      }

      async getRequestDetails() {
        var reqDet = await this.sessionProvider.getStorage('requestDetails');
        this.requestDetails = JSON.parse(reqDet);
        console.log(this.requestDetails);
      }
      

  viewRequest() {
    console.log('view request successful');
    this.navCtrl.setRoot("SuccesspagePage");
  }

}

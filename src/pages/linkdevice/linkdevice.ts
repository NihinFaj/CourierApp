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

  ionViewDidLoad() {
  }

  // async getUserRole() {
  //   var userRole = await this.sessionProvider.getStorage('role');
  //   this.role = userRole;
  // }

  // GoToRequests() {
    // this.sessionProvider.setStorage('roleValue', this.role).then(() => {
            // this.navCtrl.setRoot("RiderdashboardPage");      
            // });
  // }

  GoToRequests() {
    this.navCtrl.setRoot("RiderdashboardPage");      
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionproviderProvider } from '../../providers/sessionprovider/sessionprovider';

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

  constructor(public sessionProvider: SessionproviderProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getRegisteredUser();
  }

  registeredUser: any;

  ionViewDidLoad() {
  }

  getRegisteredUser(){
     this.registeredUser = this.sessionProvider.GetName();
  }

  linkDevice() {
    this.navCtrl.setRoot("RiderdashboardPage");
  }

}

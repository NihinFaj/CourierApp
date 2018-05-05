import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinkdevicePage');
  }

  linkDevice() {
    console.log("I am about to Link Device");
    this.navCtrl.setRoot("RiderdashboardPage");
  }

}

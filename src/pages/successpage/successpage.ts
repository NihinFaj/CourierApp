import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SuccesspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-successpage',
  templateUrl: 'successpage.html',
})
export class SuccesspagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccesspagePage');
  }

  goToDashboard(){
    console.log("I was succesful, going back to Dashboard");
    this.navCtrl.push("RiderdashboardPage");
  }

}

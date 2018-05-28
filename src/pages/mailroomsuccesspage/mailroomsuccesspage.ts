import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MailroomsuccesspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mailroomsuccesspage',
  templateUrl: 'mailroomsuccesspage.html',
})
export class MailroomsuccesspagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  //Go back to accept request page for mailroom officer
  goToDashboard(){
    console.log("Mailroom request was succesful, going back to Request Page");
    this.navCtrl.push("ViewrequestmailroomPage");
  }

}

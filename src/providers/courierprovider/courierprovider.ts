import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { LinkdevicePage } from '../../pages/linkdevice/linkdevice';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the CourierProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CourierproviderProvider {

  constructor(public http: HttpClient, public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  showLoader() {
    let loading = this.loadingCtrl.create({
      // spinner: 'hide',
      // content: `
      //   <div class="custom-spinner-container">
      //     <div class="custom-spinner-box"></div>
      //   </div>`,
      content: `
      <div class="custom-spinner-container">
           <div class="custom-spinner-box"></div>
          </div>`,
      duration: 5000
    });
  
    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
    loading.present();
  }

  callService(url) {
    return new Promise((resolve, reject) => {
      this.http.post(url, null)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  callServicePost(url, data) {
    return new Promise((resolve, reject) => {
      this.http.post(url, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: msg,
      buttons: ['Dismiss']
    });
    alert.present();
  }
  


}

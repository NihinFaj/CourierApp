import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { LinkdevicePage } from '../../pages/linkdevice/linkdevice';

/*
  Generated class for the CourierProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CourierproviderProvider {

  constructor(public http: HttpClient, public loadingCtrl: LoadingController) {
    console.log('Hello CourierProvider Provider');
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  presentLoadingCustom() {
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

  callService(url){
    return new Promise((resolve, reject) => {
      this.http.post(url, null)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}

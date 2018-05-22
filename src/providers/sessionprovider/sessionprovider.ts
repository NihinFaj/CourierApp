import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage, IonicStorageModule } from '@ionic/Storage';
import * as CryptoJS from 'crypto-js';

/*
  Generated class for the SessionproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionproviderProvider {

  constructor(public http: HttpClient) {
  }

  name: any;

  public setName(val){
    console.log("Name to be set is " + val);
    this.name = name;
  }
  
  public GetName(){
    console.log("Name to be gotten is " + this.name);    
    return this.name;
  }



}

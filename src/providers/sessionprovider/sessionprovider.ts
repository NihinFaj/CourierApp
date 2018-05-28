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

  constructor(public http: HttpClient, public storage: Storage) {
  }

  name: any;
  secretKey: any = "gtbankcourierApp";

  public setName(val){
    console.log("Name to be set is " + val);
    this.name = name;
  }
  
  public GetName(){
    return this.name;
  }

  //Set Storage
  public setStorage(key: string, val: string){
    val = this.doEncrypt(val);
    return this.storage.set(key, val);
  }

  //Get from storage
  public getStorage(key: string) {
    return this.storage.get(key).then((val) => {
      val = this.doDecrypt(val);
      return val;
    });
  }

  //Encrypt string
  public doEncrypt(value: string): string {
    // Encrypt
    return CryptoJS.AES.encrypt(value, this.secretKey).toString();
  }

  //Decrypt string
  private doDecrypt(value): string{
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(value, this.secretKey);
    value  = bytes.toString(CryptoJS.enc.Utf8);
    return value;
  }




}

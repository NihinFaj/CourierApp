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
    console.log("Name to be gotten is " + this.name);    
    return this.name;
  }

  public setStorage(key: string, val: string){
    val = this.doEncrypt(val);
    console.log("I just set the encrypted value" + val);
    return this.storage.set(key, val);
  }

  public getStorage(key: string) {
    return this.storage.get(key).then((val) => {
      val = this.doDecrypt(val);
      return val;
    });
  }

  public doEncrypt(value: string): string {
    // Encrypt
    console.log(value);
    console.log(CryptoJS.AES.encrypt(value, this.secretKey));
    return CryptoJS.AES.encrypt(value, this.secretKey).toString();
  }

  private doDecrypt(value): string{
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(value, this.secretKey);
    value  = bytes.toString(CryptoJS.enc.Utf8);
    return value;
  }




}

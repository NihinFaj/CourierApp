import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    this.name = name;
  }
  
  public GetName(){
    return this.name;
  }

}

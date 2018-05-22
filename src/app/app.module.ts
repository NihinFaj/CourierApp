import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { CourierproviderProvider } from '../providers/courierprovider/courierprovider';
import { HttpClientModule } from '@angular/common/http';
import { Device } from '@ionic-native/device';
import { Storage,IonicStorageModule } from '@ionic/storage';
import { SessionproviderProvider } from '../providers/sessionprovider/sessionprovider';
import { CryptoJS } from 'crypto-js';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QRScanner,
    CourierproviderProvider,
    Device,
    SessionproviderProvider
  ]
})
export class AppModule {}

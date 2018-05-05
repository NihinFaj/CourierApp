import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderdashboardPage } from './riderdashboard';

@NgModule({
  declarations: [
    RiderdashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderdashboardPage),
  ],
})
export class RiderdashboardPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailroomdashboardPage } from './mailroomdashboard';

@NgModule({
  declarations: [
    MailroomdashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(MailroomdashboardPage),
  ],
})
export class MailroomdashboardPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestModalPage } from './request-modal';

@NgModule({
  declarations: [
    RequestModalPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestModalPage),
  ],
  exports: [
    RequestModalPage
  ]
})
export class RequestModalPageModule {}

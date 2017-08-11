import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestsPage } from './requests';

@NgModule({
  declarations: [
    RequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestsPage),
  ],
  exports: [
    RequestsPage
  ]
})
export class RequestsPageModule {}

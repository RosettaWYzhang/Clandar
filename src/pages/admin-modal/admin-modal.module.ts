import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminModalPage } from './admin-modal';

@NgModule({
  declarations: [
    AdminModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminModalPage),
  ],
  exports: [
    AdminModalPage
  ]
})
export class AdminModalPageModule {}

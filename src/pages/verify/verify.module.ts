import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerifyPage } from './verify';

@NgModule({
  declarations: [
    VerifyPage,
  ],
  imports: [
    IonicPageModule.forChild(VerifyPage),
  ],
  exports: [
    VerifyPage
  ]
})
export class VerifyPageModule {}

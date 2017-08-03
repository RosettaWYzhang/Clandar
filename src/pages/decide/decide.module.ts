import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DecidePage } from './decide';

@NgModule({
  declarations: [
    DecidePage,
  ],
  imports: [
    IonicPageModule.forChild(DecidePage),
  ],
  exports: [
    DecidePage
  ]
})
export class DecidePageModule {}

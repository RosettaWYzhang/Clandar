import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TdlistPage } from './tdlist';

@NgModule({
  declarations: [
    TdlistPage,
  ],
  imports: [
    IonicPageModule.forChild(TdlistPage),
  ],
  exports: [
    TdlistPage
  ]
})
export class TdlistPageModule {}

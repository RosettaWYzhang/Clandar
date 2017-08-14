import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClubInfoPage } from './club-info';

@NgModule({
  declarations: [
    ClubInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ClubInfoPage),
  ],
  exports: [
    ClubInfoPage
  ]
})
export class ClubInfoPageModule {}

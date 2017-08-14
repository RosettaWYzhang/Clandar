import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClubsPage } from './clubs';

@NgModule({
  declarations: [
    ClubsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClubsPage),
  ],
  exports: [
    ClubsPage
  ]
})
export class ClubsPageModule {}

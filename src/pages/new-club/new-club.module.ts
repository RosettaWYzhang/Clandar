import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewClubPage } from './new-club';

@NgModule({
  declarations: [
    NewClubPage,
  ],
  imports: [
    IonicPageModule.forChild(NewClubPage),
  ],
  exports: [
    NewClubPage
  ]
})
export class NewClubPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMembersPage } from './add-members';

@NgModule({
  declarations: [
    AddMembersPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMembersPage),
  ],
  exports: [
    AddMembersPage
  ]
})
export class AddMemberPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewChatPage } from './new-chat';

@NgModule({
  declarations: [
    NewChatPage,
  ],
  imports: [
    IonicPageModule.forChild(NewChatPage),
  ],
  exports: [
    NewChatPage
  ]
})
export class NewChatPageModule {}

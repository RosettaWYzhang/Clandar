import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Testing } from './testing';

@NgModule({
  declarations: [
    Testing,
  ],
  imports: [
    IonicPageModule.forChild(Testing),
  ],
  exports: [
    Testing
  ]
})
export class TestingModule {}

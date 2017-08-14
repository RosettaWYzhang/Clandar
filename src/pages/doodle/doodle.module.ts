import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Doodle } from './doodle';

@NgModule({
  declarations: [
    Doodle,
  ],
  imports: [
    IonicPageModule.forChild(Doodle),
  ],
  exports: [
    Doodle
  ]
})
export class DoodleModule {}

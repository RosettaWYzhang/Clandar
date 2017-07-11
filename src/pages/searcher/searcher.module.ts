import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Searcher } from './searcher';

@NgModule({
  declarations: [
    Searcher,
  ],
  imports: [
    IonicPageModule.forChild(Searcher),
  ],
  exports: [
    Searcher
  ]
})
export class SearcherModule {}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Nav } from 'ionic-angular';
import { Tasks } from "../tasks/tasks";
import { Events } from "../events/events";
import { DecidePage } from "../decide/decide";

/**
 * Generated class for the TdlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tdlist',
  templateUrl: 'tdlist.html',
})
export class TdlistPage {
  @ViewChild(Nav) nav:Nav;
  length:any;
  decidePage:any;
  myDate: String = new Date().toISOString();
  pages: Array<{ title:string, component:any }>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public menuController: MenuController) {
    length = 2;        
    this.decidePage = DecidePage;           
  }

  openPage(page) {
      this.menuController.close();
      this.nav.push(page.component);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TdlistPage');
  }
}

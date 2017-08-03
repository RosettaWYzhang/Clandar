import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Tabs} from 'ionic-angular';
import { Calendar } from '../calendar/calendar';
import { SettingsPage } from '../settings/settings';
import { Searcher } from '../searcher/searcher';
import { TdlistPage } from '../tdlist/tdlist';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { Login } from '../login/login';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  template:`
    <ion-header>
    <ion-navbar>
      <ion-title>CLANDAR</ion-title>
      <ion-buttons end>
        <button ion-button (click)="doLogout()" style="font-size:16px">Log out</button>
      </ion-buttons>
    </ion-navbar>
  </ion-header>

    <ion-tabs selectedIndex="0">
      <ion-tab tabIcon="calendar" tabTitle="Calendar" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="settings" tabTitle="Settings" [root]="tab2"></ion-tab>
      <ion-tab tabIcon="list" tabTitle="To-do List" [root]="tab3"></ion-tab>
      <ion-tab tabIcon="aperture" tabTitle="Clan" [root]="tab4"></ion-tab>      
    </ion-tabs>
`})
export class TabsPage {
  tab1:any = Calendar;
  tab2:any = SettingsPage;
  tab3:any = TdlistPage;
  tab4:any = Searcher;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public auth: Auth,
              public user: User) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
  doLogout(){
    console.log("Logging out");
    this.auth.logout();
    this.navCtrl.push(Login);
  }
}

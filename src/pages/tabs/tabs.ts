import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Tabs} from 'ionic-angular';
import { Calendar } from '../calendar/calendar';
import { SettingsPage } from '../settings/settings';
import { Searcher } from '../searcher/searcher';
import { TdlistPage } from '../tdlist/tdlist';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { Login } from '../login/login';
import { ConversationPage } from '../conversation/conversation';
 
/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  template:`
    <ion-tabs #myTabs>
      <ion-tab tabIcon="calendar" tabTitle="Calendar" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="list" tabTitle="To-do List" [root]="tab2"></ion-tab>
      <ion-tab tabIcon="chatbubbles" tabTitle="Conversation" [root]="tab3"></ion-tab>
      <ion-tab tabIcon="aperture" tabTitle="Clan" [root]="tab4"></ion-tab>  
      <ion-tab tabIcon="settings" tabTitle="Settings" [root]="tab5"></ion-tab>          
    </ion-tabs>
`})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tab1:any = Calendar;
  tab2:any = TdlistPage;
  tab3:any = ConversationPage;
  tab4:any = Searcher;
  tab5:any = SettingsPage;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public auth: Auth,
              public user: User) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    this.tabRef.select(0);
  }
}

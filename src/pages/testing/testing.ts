import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import { Tasks } from '../tasks/tasks';
import { Searcher } from '../searcher/searcher';
import { CalendarPage } from '../calendar/calendar';
import { SettingsPage } from "../settings/settings";
import { TdlistPage } from '../tdlist/tdlist';
import { TabsPage } from '../tabs/tabs';
import { AlertProvider } from '../../providers/alert/alert';
import { Doodle } from '../doodle/doodle';

/**
 * Generated class for the Testing page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-testing',
  templateUrl: 'testing.html',
})
export class Testing {
  loginPage: any;
  calendarPage: any;
  taskManagerPage: any;
  eventSearchPage: any;
  settingsPage: any;
  tdListPage: any;
  todoListComponent: any;
  contactPage: any;
  tabsPage: any;
  doodle: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alert: AlertProvider) {
    this.loginPage = Login;
    this.calendarPage = CalendarPage;
    this.taskManagerPage = Tasks;
    this.eventSearchPage = Searcher;
    this.settingsPage = SettingsPage;
    this.tdListPage = TdlistPage;
    this.tabsPage = TabsPage;
    this.doodle = Doodle;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Testing');
    this.alert.hello();
  }

}

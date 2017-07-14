import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Login } from '../login/login';
import { Events } from '../events/events';
import { Tasks } from '../tasks/tasks';
import { Searcher } from '../searcher/searcher';
import { Calendar } from '../calendar/calendar';
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
  homePage: any;
  loginPage: any;
  calendarPage: any;
  eventManagerPage: any;
  taskManagerPage: any;
  eventSearchPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homePage = HomePage;
    this.loginPage = Login;
    this.calendarPage = Calendar;
    this.eventManagerPage = Events;
    this.taskManagerPage = Tasks;
    this.eventSearchPage = Searcher;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Testing');
  }

}

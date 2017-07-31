import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, App } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { Login } from '../login/login';

/**
 * Generated class for the Calendar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class Calendar{
  public date: Date = new Date(Date.now());
  name: string;

  constructor(public navCtrl: NavController,
              public app: App,
              public navParams: NavParams,
              public auth: Auth,
              public user: User,
              public menu: MenuController){
    this.name = this.user.details.name;
    menu.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Calendar');
  }

  eventSource;
  viewTitle;
  isToday: boolean;
  calendar = {
       mode: 'month',
       currentDate: new Date()
  }; // these are the variable used by the calendar.
   
  doLogout(){
    console.log("Logging out");
    this.auth.logout();
    this.navCtrl.push(Login);
  }

  loadEvents() {
    this.eventSource = this.createRandomEvents();
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }
  changeMode(mode) {
    this.calendar.mode = mode;
  }
  today() {
    this.calendar.currentDate = new Date();
  }
  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
    (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }
  onCurrentDateChanged(event:Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }
  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
        var date = new Date();
        var eventType = Math.floor(Math.random() * 2);
        var startDay = Math.floor(Math.random() * 90) - 45;
        var endDay = Math.floor(Math.random() * 2) + startDay;
        var startTime;
        var endTime;
        if (eventType === 0) {
            startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
            if (endDay === startDay) {
               endDay += 1;
            }
            endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
               events.push({
                   title: 'All Day - ' + i,
                   startTime: startTime,
                   endTime: endTime,
                   allDay: true,
               });
            } else {
               var startMinute = Math.floor(Math.random() * 24 * 60);
               var endMinute = Math.floor(Math.random() * 180) + startMinute;
               startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
               endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
               events.push({
                   title: 'Event - ' + i,
                   startTime: startTime,
                   endTime: endTime,
                   allDay: false
               });
            }
        }
        return events;
  }
  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }
  markDisabled = (date:Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
  };

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataProvider } from '../../providers/data/data';
import * as firebase from 'firebase';
import * as moment from 'moment';
import { TabsPage } from "../tabs/tabs";
 
@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {
  private uid:any;
  private title: any;
  private location: any;
  private members: any;
  private note: any;
  private startTime: any;
  private endTime: any;
  private urgency: any;
  private events: any;
  private event: any;
  minDate = new Date().toISOString();
 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public afDB: AngularFireDatabase,
              public dataProvider: DataProvider,
              public viewCtrl: ViewController) {
    this.uid = firebase.auth().currentUser.uid;
    this.events = afDB.list('/events');
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.startTime = preselectedDate;
    this.endTime = preselectedDate;
  }
 
  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
    this.events.push({
      organizer: this.uid,
      title: this.title,
      location: this.location,
      members: this.members,
      note: this.note,
      startTime: this.startTime,
      endTime: this.endTime,
      urgency: this.urgency,
      status: "In Progress"
    });
    this.event = { 
      organizer: this.uid,
      title: this.title,
      location: this.location, 
      members: this.members, 
      note: this.note, 
      startTime: this.startTime, 
      endTime: this.endTime, 
      allDay: false, 
      urgency: 2};
    this.viewCtrl.dismiss(this.event);
  }
 
  defValue: number = 2;

}
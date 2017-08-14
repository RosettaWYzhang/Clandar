import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import * as moment from 'moment';
import * as firebase from 'firebase';


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
export class CalendarPage{
    public date: Date = new Date(Date.now());

    private event1: any;
    private event2: any;
    private events: FirebaseListObservable<any>;
    private uid: any;
    constructor(public navCtrl: NavController, 
                private modalCtrl: ModalController, 
                private alertCtrl: AlertController,
                public afDB: AngularFireDatabase,
                private ionicCalendar: Calendar) { 
        this.uid = firebase.auth().currentUser.uid;
        this.events = afDB.list('/events',{
        query:{
            orderByChild: 'organizer',
            equalTo: this.uid
          }
        });
    }

    ionViewDidLoad() {
        console.log("calendarPage");
        console.log(this.events);
        this.events.subscribe((events)=>{
            events.forEach((event) => {
                let testEvent = {
                    "startTime": new Date(event.startTime),
                    "endTime": new Date(event.endTime),
                    "title": event.title,
                    "note": event.note,
                    "urgency": event.urgency,
                    "location": event.location,
                    "members": event.members,
                    "organizer": event.organizer
                }
                console.log(event);
                console.log("testEvent: "+ testEvent);
                let testEvents = this.eventSource;
                testEvents.push(testEvent);
                this.eventSource = [];
                setTimeout(() => {
                    this.eventSource = testEvents;
                });    
            });
        });
        

    }

   isToday: boolean;

   changeMode(mode){
       this.calendar.mode = mode;
   }

   today(){
       this.calendar.currentDate = new Date();
   }

   onCurrentDateChanged(event:Date){
       var today = new Date();
       today.setHours(0, 0, 0, 0);
       event.setHours(0, 0, 0, 0);
       this.isToday = today.getTime() === event.getTime();
   }

    eventSource = [];
    viewTitle: string;
    selectedDay = new Date();
    
    calendar = {
        mode: 'month',
        currentDate: new Date()
    };

    isSameDay(date1,date2){
        var d1 = date1;
        var d2 = date2;
        if (d1.getDate() == d2.getDate() 
            && d1.getMonth() == d2.getMonth()
            && d1.getFullYear() == d2.getFullYear()){
            return true;
        }
        else return false;
    }

    dateInRange(date,sdate,edate){
        var d = date;
        var sd = sdate;
        var ed = edate;
        if(d.getTime()>sd.getTime() 
           && d.getTime()<ed.getTime() 
           && (!this.isSameDay(d,sd)) 
           && (!this.isSameDay(d,ed))){
            return true;
        }
        else return false;
    }
    
    addEvent() {
        let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
        modal.present();
        /**modal.onDidDismiss(data => {
            console.log(data);
            if (data) {
                let events = this.eventSource;

                let eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
        
                events.push(eventData);
                this.eventSource = [];
                setTimeout(() => {
                this.eventSource = events;
                });
            }
            console.log(this.eventSource);
        });**/
    }
    
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    
    eventSelected(event) {
        let start = moment(event.startTime).format('llll');
        let end = moment(event.endTime).format('llll');
        
        let alert = this.alertCtrl.create({
        title: '' + event.title,
        subTitle:   '<br>From:<br>' + start + '<br><br>To:<br>' + end
                    + '<br><br>Location: ' + event.location
                    + '<br><br>Members: ' + event.members
                    + '<br><br>Note: ' + event.note
                    + '<br><br>Urgency: ' + event.urgency,
        buttons: ['OK']
        })
        alert.present();
    }
    
    onTimeSelected(ev) {
        this.selectedDay = ev.selectedTime;
    }

}

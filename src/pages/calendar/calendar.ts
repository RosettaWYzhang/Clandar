import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

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

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Calendar');
  }

//   eventSource;
//    viewTitle;
   isToday: boolean;
//    calendar = {
//        mode: 'month',
//        currentDate: new Date()
//    }; // these are the variable used by the calendar.
//    loadEvents() {
//        this.eventSource = this.createRandomEvents();
//    }
   changeMode(mode) {
       this.calendar.mode = mode;
   }
   today() {
       this.calendar.currentDate = new Date();
   }
   onCurrentDateChanged(event:Date) {
       var today = new Date();
       today.setHours(0, 0, 0, 0);
       event.setHours(0, 0, 0, 0);
       this.isToday = today.getTime() === event.getTime();
   }
//    createRandomEvents() {
//        var events = [];
//        for (var i = 0; i < 50; i += 1) {
//            var date = new Date();
//            var eventType = Math.floor(Math.random() * 2);
//            var startDay = Math.floor(Math.random() * 90) - 45;
//            var endDay = Math.floor(Math.random() * 2) + startDay;
//            var startTime;
//            var endTime;
//            if (eventType === 0) {
//                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
//                if (endDay === startDay) {
//                    endDay += 1;
//                }
//                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
//                events.push({
//                    title: 'All Day - ' + i,
//                    startTime: startTime,
//                    endTime: endTime,
//                    allDay: true,
//                });
//            } else {
//                var startMinute = Math.floor(Math.random() * 24 * 60);
//                var endMinute = Math.floor(Math.random() * 180) + startMinute;
//                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
//                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
//                events.push({
//                    title: 'Event - ' + i,
//                    startTime: startTime,
//                    endTime: endTime,
//                    allDay: false
//                });
//            }
//        }
//        return events;
//    }
//    onRangeChanged(ev) {
//        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
//    }
//    markDisabled = (date:Date) => {
//        var current = new Date();
//        current.setHours(0, 0, 0);
//        return date < current;
//    };
    eventSource = [];
    viewTitle: string;
    selectedDay = new Date();
    
    calendar = {
        mode: 'month',
        currentDate: new Date()
    };
    
    constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) { }
    
    addEvent() {
        let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
        modal.present();
        modal.onDidDismiss(data => {
        if (data) {
            let eventData = data;
    
            eventData.startTime = new Date(data.startTime);
            eventData.endTime = new Date(data.endTime);
    
            let events = this.eventSource;
            events.push(eventData);
            this.eventSource = [];
            setTimeout(() => {
            this.eventSource = events;
            });
        }
        });
    }
    
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    
    onEventSelected(event) {
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

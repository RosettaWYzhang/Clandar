import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { App, IonicPage, NavController, ModalController, AlertController, ActionSheetController, PopoverController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { DataProvider } from '../../providers/data/data';
import { RequestModalPage } from '../../pages/request-modal/request-modal';
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
    private eventsToShow;
    private events: FirebaseListObservable<any>;
    private joinedEvents:any;
    private joinedEventIds: any;
    private tasks: FirebaseListObservable<any>;
    private email: any;
    private uid: any;
    isToday: boolean;
    eventSource = [];
    viewTitle: string;
    selectedDay = new Date();    
    dd = new Date();
    //t = this.dd.getTime()+1000*60*60*24;
    calendar = {
        mode: 'month',
        currentDate: new Date(this.dd)
    };

    constructor(public navCtrl: NavController, 
                private modalCtrl: ModalController, 
                private alertCtrl: AlertController,
                public popoverCtrl: PopoverController,
                public asCtrl: ActionSheetController,
                public afDB: AngularFireDatabase,
                public dataProvider: DataProvider,
                public app: App,
                private ionicCalendar: Calendar) { 
        this.uid = firebase.auth().currentUser.uid;
        this.email = firebase.auth().currentUser.email;

        this.events = afDB.list('/events',{
          query:{
            orderByChild: 'organizer',
            equalTo: this.uid
          }
        });
        this.tasks = afDB.list('/tasks',{
          query:{
            orderByChild: 'email',
            equalTo: this.email
          }
        });
    }
    ionViewDidLoad() {
        console.log(this.email);
        console.log("calendarPage");
        //console.log(new Date(this.t));
        this.loadEvents();

        setTimeout(()=>this.today(),100);
        setTimeout(()=>this.today(),200);
        setTimeout(()=>this.today(),300);
        setTimeout(()=>this.today(),400);

        //this.today();
        //console.log(this.events);
        /*[
            {
                "startTime": new Date("2017-08-27T23:49:31+08:00"),
                "endTime": new Date("2017-08-28T23:49:31+08:00"),
                "title": "test",
                "note": "test",
                "urgency": "test",
                "location": "test",
                "members": "test",
                "organizer": "test"
            },
            {
                "startTime": new Date("2017-10-27T23:49:31+08:00"),
                "endTime": new Date("2017-11-27T23:59:31+08:00"),
                "title": "due",
                "allDay": true,
                "note": "test",
                "urgency": "test",
                "userId": "test"
            }

        ];*/
    }

   changeMode(mode){
       this.calendar.mode = mode;
   }

   today(){
       this.calendar.currentDate = new Date();
       console.log("Today");
   }

   loadEvents(){
        this.eventsToShow = []; 
        this.eventSource = [];
        this.afDB.list('/accounts/'+this.uid+'/events').subscribe((eventIds) => {
            var eids = eventIds;
            if(eventIds){
                for (let eventId of eventIds){
                    console.log(eventId);
                    this.dataProvider.getEventByEID(eventId.$value).subscribe((event)=>{
                        this.eventsToShow.push({
                            "startTime": new Date(event.startTime),
                            "endTime": new Date(event.endTime),
                            "title": event.title,
                            "note": event.note,
                            "urgency": event.urgency,
                            "location": event.location,
                            "members": event.members,
                            "organizer": event.organizer,
                            "eid": event.$key
                        });
                    });
                }
            }
        });
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
                    "organizer": event.organizer,
                    "eid": event.$key
                }
                var hasEvent = false;
                if (this.eventsToShow.length>0){
                    for (var i=0;i<this.eventsToShow.length;i++){
                        if (this.eventsToShow[i].eid===testEvent.eid){
                            hasEvent = true;
                            break;
                        }
                    }
                }
                if(hasEvent===false){
                    this.eventsToShow.push(testEvent);
                }
                console.log(testEvent);
                console.log(this.eventsToShow);
            });
        });
       
        this.tasks.subscribe((tasks)=>{
            tasks.forEach((task) => {
                let testTask = {
                    "startTime": new Date(task.due),
                    "endTime": new Date(task.due),
                    "title": task.name+ " due",
                    "allDay": true,
                    "note": task.note,
                    "urgency": task.urgency,
                    "userId": this.uid,
                    "tid": task.$key
                }
                var hasTask = false;
                if (this.eventsToShow.length>0){
                    for (var i=0;i<this.eventsToShow.length;i++){
                        if (this.eventsToShow[i].tid===testTask.tid){
                            hasTask = true;
                            break;
                        }
                    }
                }
                if(hasTask==false){
                    this.eventsToShow.push(testTask);
                }                
                
                console.log(testTask);
                console.log(this.eventsToShow);
            });
        });

        console.log(this.eventsToShow);
        this.eventSource = this.eventsToShow;
        console.log(this.eventSource);
   }

   onCurrentDateChanged(event:Date){
       var today = new Date();
       today.setHours(0, 0, 0, 0);
       event.setHours(0, 0, 0, 0);
       this.isToday = today.getTime() === event.getTime();
   }

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
    
    more(){
        var isAdmin = false;
        this.dataProvider.getUser(this.uid).subscribe((user)=>{
            if(user.adminedClubs){
                isAdmin = true;
            }
        });

        if(isAdmin){
            let actionSheet = this.asCtrl.create({
                title: 'Actions',
                buttons: [
                    /*{
                    text: 'Reload Events',
                    handler: () => {
                        this.loadEvents();
                        console.log('Events loaded');
                    }
                    },*/{
                    text: 'View My Event Requests',
                    handler: () => {
                        this.viewRequests();
                        console.log('View My Event Invitations');
                    }
                    },{
                    text: 'Add New Event',
                    handler: () => {
                        this.addEvent();
                        console.log('New Event Added');
                    }
                    }/*,{
                    text: 'View My Timeline',
                    handler: () =>{
                        console.log('Timeline displayed');
                    }
                    }*/,{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                    }
                ]            
            });
            actionSheet.present();
        }
        else {
            let actionSheet = this.asCtrl.create({
                title: 'Actions',
                buttons: [
                    {
                    text: 'Load Events',
                    handler: () => {
                        this.loadEvents();
                        console.log('Events loaded');
                    }
                    },{
                    text: 'View My Event Requests',
                    handler: () => {
                        this.viewRequests();
                        console.log('View My Event Invitations');
                    }
                    },{
                    text: 'View My Timeline',
                    handler: () =>{
                        console.log('Timeline displayed');
                    }
                    },{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                    }
                ]            
            });
            actionSheet.present();
        }
    }

    popover(myEvent){
        let pop = this.popoverCtrl.create(PopPage);
        pop.present({
            ev: myEvent
        });
    }    

    addEvent() {
        let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
        modal.present();
    }
    
    viewRequests(){
        this.app.getRootNav().push(RequestModalPage);
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

@Component({
    selector: 'popover',
    template: `
    <ion-content>
        <ion-list class="popover-page">
            <button ion-item detail-none>Load Events</button>

            <button ion-item detail-none>Add New Event</button>

            <button ion-item detail-none class="timeline">View My Timeline</button>
        </ion-list>
    </ion-content>
    `
})
export class PopPage{
    constructor(){

    }
}
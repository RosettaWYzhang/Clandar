import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataProvider } from '../../providers/data/data';
import { FirebaseProvider } from '../../providers/firebase/firebase';
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
  private membersToInvite: any;
  private note: any;
  private startTime: any;
  private endTime: any;
  private urgency: any;
  private events: any;
  private event: any;
  private hide: any;
  private club: any;
  private adminedClubs: any;
  private eventId: string;
  private eventRequestsSent: any;
  private eventRequests: any;
  minDate = new Date().toISOString();
 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public afDB: AngularFireDatabase,
              public dataProvider: DataProvider,
              public firebaseProvider: FirebaseProvider,
              public alertCtrl: AlertController,
              public viewCtrl: ViewController) {
    this.urgency = this.defValue;
    this.hide = false;
    this.uid = firebase.auth().currentUser.uid;
    this.events = afDB.list('/events');
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.startTime = preselectedDate;
    this.endTime = preselectedDate;
    this.dataProvider.getUser(this.uid).take(1).subscribe((user)=>{
      let clubs = user.adminedClubs;
      var clubIds=[];
      this.adminedClubs = [];
      if(clubs){
        for (var i=0;i<clubs.length;i++){
          console.log(clubs[i]);
          clubIds.push(clubs[i]);
        }
      }
      for (var j=0;j<clubIds.length;j++){
        console.log(clubIds[j]);
        this.dataProvider.getClub(clubIds[j]).subscribe((club)=>{
          console.log(club);
          this.adminedClubs.push(club);
        });
      }
    });
  }

  ionViewDidLoad(){

  }
 
  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
    this.events.push({
      club: this.club,
      organizer: this.uid,
      title: this.title,
      location: this.location,
      note: this.note,
      startTime: this.startTime,
      endTime: this.endTime,
      urgency: this.urgency,
    }).then((event)=>{
      console.log(event.key);
      this.eventId = event.key;  
      var evs;
      this.dataProvider.getClub(this.club).subscribe((club)=>{
        evs = club.events;
      });      
      var eidToPush = [];
      eidToPush.push(event.key);
      if (this.hasEvents(this.eventId)){
          evs.push(this.eventId);
          this.afDB.object('/clubs/'+this.club+'/events/').update(evs);
      }
      else {
        this.afDB.object('/clubs/'+this.club).update({
          events: [this.eventId]
        });
      }
      console.log(this.eventId);
    });
    this.dataProvider.getClub(this.club).subscribe((club)=>{
      var members = club.members;
      this.members = [];
      for (var i=0;i<members.length;i++){
        this.dataProvider.getUser(members[i]).subscribe((user)=>{
          this.members.push(user);
        });
      }
    });
    this.hide = true; 
    this.membersToInvite = [];
    console.log(this.members);
    console.log(this.eventId);
    //this.viewCtrl.dismiss(this.event);
  }

  goback(){
    const itemObservable = this.afDB.object('/events/'+this.eventId);
    itemObservable.remove();
    console.log(this.club);
    console.log(this.eventId);
    var eventsUpdated;
    this.dataProvider.getClub(this.club).subscribe((club)=>{
      eventsUpdated = club.events;
    });
    eventsUpdated.splice(eventsUpdated.indexOf(this.eventId),1);
    this.dataProvider.getClub(this.club).update({
      events: eventsUpdated
    });
    this.hide = false;
    this.club = '';
  }

  finish(){
    console.log(this.club);
    this.club = '';
    this.viewCtrl.dismiss();
  }

  getStatus(memberId, eventId){
    // 0 when user can be invited.
    // 1 when an invitation has already been sent to this user.
    this.dataProvider.getEventRequests(eventId).subscribe((requests)=>{
      this.eventRequestsSent = requests.eventRequestsSent;
    });
    if (this.eventRequestsSent) {
      for (var i = 0; i < this.eventRequestsSent.length; i++) {
        if (this.eventRequestsSent[i] == memberId) {
          return 1;
        }
      }
    }
    return 0;
  }

  hasEvents(club){
    var b = false;
    this.dataProvider.getClub(club).subscribe((club)=>{
      if(club.events){
        b = true;
      }
      else b = false;
    });
    return b;
  }

  // Send friend request.
  invite(member) {
    let alert = this.alertCtrl.create({
      title: 'Send Event Invitations',
      message: 'Do you want to send event invitations to selected club members?',
      buttons: [
        {
          text: 'Send',
          handler: () => {
            this.firebaseProvider.sendEventRequest(member.$key,this.eventId);
          }
        },
        {
          text: 'Cancel',
          handler: data => { }
        }
      ]
    }).present();
  }
 
  removeFromInvitation(member) {
    let alert = this.alertCtrl.create({
      title: 'Event Request Pending',
      message: 'Do you want to delete your event invitation to <b>' + member.name + '</b>?',
      buttons: [
        {
          text: 'Delete',
          handler: () => {
            this.firebaseProvider.cancelEventRequest(member.$key,this.eventId);
          }
        },
        {
          text: 'Cancel',
          handler: data => { }
        }
      ]
    }).present();
  }


  defValue: number = 1;

}
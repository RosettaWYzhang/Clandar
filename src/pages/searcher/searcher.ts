import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ModalController, AlertController, ActionSheetController, App, Platform } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ImageProvider } from '../../providers/image/image';
import { LoadingProvider } from '../../providers/loading/loading';
import { UserInfoPage } from '../user-info/user-info';
import { ImageModalPage } from '../image-modal/image-modal';
import { NewClubPage } from '../new-club/new-club';
import { ClubsPage } from '../clubs/clubs';
import { ClubPage } from '../club/club';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

import { Camera } from '@ionic-native/camera';
import { Contacts } from '@ionic-native/contacts';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';
import { EventInfoPage } from "../event-info/event-info";

/**
 * Generated class for the Searcher page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-searcher',
  templateUrl: 'searcher.html',
})
export class Searcher {
  clan: string = "club";
  isAndroid: boolean = false;
  private clubs:any;
  private updateDateTime: any;
  private searchClub: any;
  private searchEvent:any;
  private events: any;
  private organizedEvents: any;
  private allEvents: any;
  private uid:any;
  constructor(public navCtrl: NavController, 
              public platform: Platform,
              public navParams: NavParams,
              public dataProvider: DataProvider,
              public loadingProvider: LoadingProvider,
              public imageProvider: ImageProvider,
              public afDB: AngularFireDatabase,
              public app: App) {
    this.isAndroid = platform.is('android');
    this.uid = firebase.auth().currentUser.uid;
  }

  ionViewDidLoad() {
    this.searchClub = "";
    this.searchEvent = "";
    this.events = [];
    this.allEvents = [];
    this.organizedEvents = [];
    console.log('ionViewDidLoad Searcher');
    this.dataProvider.getClubs().subscribe((clubIds) => {
      console.log(clubIds);
      if (clubIds.length > 0){
        if(this.clubs && this.clubs.length > clubIds.length) {
          // User left/deleted a group, clear the list and add or update each group again.
          this.clubs = [];
        }
        clubIds.forEach((clubId) => {
          this.dataProvider.getClub(clubId.$key).subscribe((club) =>{
            if(club.$exists()) {
              // Get group's unreadMessagesCount
              club.unreadMessagesCount = club.messages.length - clubId.messagesRead;
              // Get group's last active date
              club.date = club.messages[club.messages.length - 1].date;
              this.addOrUpdateClub(club);
            }
          });
        });
        this.loadingProvider.dismiss();
      }
      else {
        this.clubs = [];
        this.loadingProvider.dismiss();
      }
    });
    var that = this;
    if (!that.updateDateTime) {
      that.updateDateTime = setInterval(function() {
        if (that.clubs) {
          that.clubs.forEach((club) => {
            let date = club.date;
            club.date = new Date(date);
          });
        }
      }, 60000);
    }    
    this.dataProvider.getUser(this.uid).subscribe((user)=>{
      if (user.events){
      var eids = user.events;
      for (var i=0;i<eids.length;i++){
        this.dataProvider.getEventByEID(eids[i]).subscribe((event) => {
          this.events.push(event);
        });
      }}
    });
    this.afDB.list('/events', {
      query: {
        orderByChild: 'organizer',
        equalTo: this.uid
      }
    }).subscribe((events) => {
      this.organizedEvents = events;
    });
    this.afDB.list('/events').subscribe((events) => {
      this.allEvents = events;
    });
  }

  getStatus(event){
    //0: organizer 1: participater 2: can join
    if (event.organizer === this.uid){
      return 0;
    }
    else if (this.joinedEvent(event)) {
      return 1;
    }
    else return 2;
  }

  joinedEvent(event){
    if(event.members){
      for (var i=0;i<event.members.length;i++){
        if (event.members[i] == this.uid){
          return true;
        }
      }
    }
    return false;
  }

  viewEvent(eventId){
    this.navCtrl.push(EventInfoPage, { eventId: eventId });
  }

  addOrUpdateClub(club){
    if(!this.clubs){
      this.clubs = [club];
    }
    else {
      var index = -1;
      for (var i=0; i<this.clubs.length; i++){
        if (this.clubs[i].$key == club.$key){
          index = i;
        }
      }
      if(index > -1){
        this.clubs[index] = club;
      }
      else this.clubs.push(club);
    }
  }

  newClub(){
    this.app.getRootNav().push(NewClubPage);
  }

  joinClub(){
    this.app.getRootNav().push(ClubsPage);
  }

  viewClub(clubId){
    this.app.getRootNav().push(ClubPage, {"clubId": clubId});
  }

  hasUnreadMessages(club) {
    if (club.unreadMessagesCount > 0) {
      return 'club bold';
    } else
      return 'club';
  }  

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { LoadingProvider } from '../../providers/loading/loading';
import { ImageProvider } from '../../providers/image/image';
import { AlertProvider } from '../../providers/alert/alert';
import { ImageModalPage } from '../image-modal/image-modal';
import { AddMembersPage } from '../add-members/add-members';
import { UserInfoPage } from '../user-info/user-info';
import { ClubInfoPage } from '../club-info/club-info';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the EventInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event-info',
  templateUrl: 'event-info.html',
})
export class EventInfoPage {
  private uid: any;
  private clubId: any;
  private club: any;
  private organizer: any;
  private members: any;
  private event: any;
  private eventId: any;
  private alert: any;
  private user: any;
  private clubMembers: any;
  private eventRequestsSent: any;
  private subscription: any;
  // ClubInfoPage
  // This is the page where the user can view club information, change club information, add members, and leave/delete club.
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public dataProvider: DataProvider,
              public loadingProvider: LoadingProvider, 
              public modalCtrl: ModalController, 
              public alertCtrl: AlertController,
              public alertProvider: AlertProvider, 
              public firebaseProvider: FirebaseProvider,
              public angularfire: AngularFireDatabase,
              public imageProvider: ImageProvider){ 
                this.event = '';
              }

  ionViewDidLoad() {
    this.eventId = this.navParams.get('eventId');
    this.uid = firebase.auth().currentUser.uid;
    this.subscription = this.dataProvider.getEventByEID(this.eventId).subscribe((event)=>{
      if (event.$exists()){
        this.loadingProvider.load();
        this.event = event;
        this.clubId = event.club;
        if(event.organizer){
          var organizerId = event.organizer;
          this.dataProvider.getUser(organizerId).subscribe((organizer) => {
            this.organizer = organizer;
          })
        }
        if(event.members) {
          event.members.forEach((memberId) => {
            this.dataProvider.getUser(memberId).subscribe((member) => {
              this.addUpdateOrRemoveMember(member);
            });
          });
        }
        this.loadingProvider.dismiss();
      } else {
        this.navCtrl.popToRoot();
      }
    });
    this.dataProvider.getCurrentUser().subscribe((user) => {
      this.user = user;
    });
    this.dataProvider.getClub(this.clubId).subscribe((club) => {
      this.club = club;
      this.clubMembers = [];
      var clubMembersIds = club.members;
      if(clubMembersIds){
        for (var i=0;i<clubMembersIds.length;i++){
          this.dataProvider.getUser(clubMembersIds[i]).subscribe((user)=>{
            this.clubMembers.push(user);
          });
        }
      }
    });
    this.dataProvider.getEventRequests(this.eventId).subscribe((request) => {
      this.eventRequestsSent = request.eventRequestsSent;
    });
    console.log('ionViewDidLoad EventInfoPage');
  }

  isOrganizer(){
    if (this.uid == this.organizer.$key){
      return true;
    }
    else return false;
  }

  back(){
    this.subscription.unsubscribe();
    this.navCtrl.pop();
  }

  setName(){
    this.alert = this.alertCtrl.create({
      title: 'Change Event Name',
      message: "Please enter a new club name.",
      inputs: [
        {
          name: 'name',
          placeholder: 'Event Name',
          value: this.event.title
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            let name = data["name"];
            if (this.event.title != name) {
              this.loadingProvider.load();
              // Update event on database.
              this.dataProvider.getEventByEID(this.eventId).update({
                title: name,
              }).then((success) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showEventUpdatedMessage();
              }).catch((error) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showErrorMessage('club/error-update-club');
              });
            }
          }
        },
        {
          text: 'Cancel',
          handler: data => { }
        }
      ]
    }).present();    
  }

  setTime(){
    this.alert = this.alertCtrl.create({
      title: 'Change Event Time',
      message: "Please enter a new start time and end time.",
      inputs: [
        {
          name: 'startTime',
          placeholder: 'New Start Time',
          type: 'date',
          value: this.event.startTime
        },
        {
          name: 'endTime',
          placeholder: 'New End Time',
          type: 'date',
          value: this.event.endTime
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            let startTime = data["startTime"];
            let endTime = data["endTime"];
            if (this.event.startTime != startTime || this.event.endTime != endTime) {
              this.loadingProvider.load();
              // Update event on database.
              this.dataProvider.getEventByEID(this.eventId).update({
                startTime: startTime,
                endTime: endTime
              }).then((success) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showEventUpdatedMessage();
              }).catch((error) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showErrorMessage('club/error-update-club');
              });
            }
          }
        },
        {
          text: 'Cancel',
          handler: data => { }
        }
      ]
    }).present();      
  }

  setLocation(){
    this.alert = this.alertCtrl.create({
      title: 'Change Event Location',
      message: "Please enter a new event location.",
      inputs: [
        {
          name: 'location',
          placeholder: 'Event Location',
          value: this.event.location
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            let location = data["location"];
            if (this.event.location != location) {
              this.loadingProvider.load();
              // Update event on database.
              this.dataProvider.getEventByEID(this.eventId).update({
                location: location,
              }).then((success) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showEventUpdatedMessage();
              }).catch((error) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showErrorMessage('club/error-update-club');
              });
            }
          }
        },
        {
          text: 'Cancel',
          handler: data => { }
        }
      ]
    }).present();  
  }

  setNote(){
    this.alert = this.alertCtrl.create({
      title: 'Change Event Note',
      message: "Please enter a new event note.",
      inputs: [
        {
          name: 'note',
          placeholder: 'Event Note',
          value: this.event.note
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            let note = data["note"];
            if (this.event.note != note) {
              this.loadingProvider.load();
              // Update event on database.
              this.dataProvider.getEventByEID(this.eventId).update({
                note: note,
              }).then((success) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showEventUpdatedMessage();
              }).catch((error) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showErrorMessage('club/error-update-club');
              });
            }
          }
        },
        {
          text: 'Cancel',
          handler: data => { }
        }
      ]
    }).present();  
  }

  setUrgency(){
    this.alert = this.alertCtrl.create({
      title: 'Change Event Urgenvy',
      message: "Please enter a new event urgency(From 1 to 4).",
      inputs: [
        {
          name: 'urgency',
          placeholder: 'Event Urgency',
          value: this.event.urgency
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            let urgency = data["urgency"];
            if (this.event.urgency != urgency && (this.event.urgency == 1 || this.event.urgency == 2 ||this.event.urgency == 3 || this.event.urgency == 4)) {
              this.loadingProvider.load();
              // Update event on database.
              this.dataProvider.getEventByEID(this.eventId).update({
                urgency: urgency,
              }).then((success) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showEventUpdatedMessage();
              }).catch((error) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showErrorMessage('club/error-update-club');
              });
            }
          }
        },
        {
          text: 'Cancel',
          handler: data => { }
        }
      ]
    }).present();  
  }

  // Check if user exists in the club then add/update user.
  // If the user has already left the club, remove user from the list.
  addUpdateOrRemoveMember(member) {
    if (this.event) {
      if (this.event.members.indexOf(member.$key) > -1) {
        // User exists in the club.
        if (!this.members) {
          this.members = [member];
        } else {
          var index = -1;
          for (var i = 0; i < this.members.length; i++) {
            if (this.members[i].$key == member.$key) {
              index = i;
            }
          }
          // Add/Update User.
          if (index > -1) {
            this.members[index] = member;
          } else {
            this.members.push(member);
          }
        }
      } else {
        // User already left the club, remove member from list.
        var ind = -1;
        for (var j = 0; j < this.members.length; j++) {
          if (this.members[j].$key == member.$key) {
            ind = j;
          }
        }
        if (ind > -1) {
          this.members.splice(ind, 1);
        }
      }
    }
  }

  viewUser(userId) {
    if (firebase.auth().currentUser.uid != userId)
      this.navCtrl.push(UserInfoPage, { userId: userId });
  }

  viewOrganizer(userId) {
    if (firebase.auth().currentUser.uid != userId){
      this.navCtrl.push(UserInfoPage, { userId: userId });
    }    
  }

  viewClub(){
    this.navCtrl.push(ClubInfoPage, { clubId: this.clubId });
  }

  inviteStatus(memberId, eventId){
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

  delete(){
    this.alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this event?',
      buttons: [
        
        {
          text: 'Delete',
          handler: data => {
            const itemObservable = this.angularfire.object('/events/'+this.eventId);
            itemObservable.remove();
            console.log(this.club);
            console.log(this.eventId);
            var eventsUpdated;
            this.dataProvider.getClub(this.clubId).subscribe((club)=>{
              eventsUpdated = club.events;
            });
            eventsUpdated.splice(eventsUpdated.indexOf(this.eventId),1);
            this.dataProvider.getClub(this.clubId).update({
              events: eventsUpdated
            });
            this.angularfire.object('/requests/'+this.eventId).remove();
          }
        },
        {
          text: 'Cancel'
        }
      ]
    }).present();
  }

  join(){
    this.alert = this.alertCtrl.create({
      title: 'Ask to Join the Event',
      message: 'Please contact the organizer for event invitation',
      buttons: [
        {
          text: 'OK'
        }
      ]
    }).present();
  }

  joinedEvent(){
    if(this.members){
      for (var i=0;i<this.members.length;i++){
        if (this.members[i].$key == this.uid){
          return true;
        }
      }
    }
    return false;
  }

  quit(){
    this.alert = this.alertCtrl.create({
      title: 'Confirm Quit',
      message: 'Are you sure you want to quit this event?',
      buttons: [
        {
          text: 'Quit',
          handler: data => {
            this.loadingProvider.load();
            // Remove member from club.
            this.members.splice(this.members.indexOf(this.user.$key), 1);
            // Update club on database.
            this.dataProvider.getEventByEID(this.eventId).update({
              members: this.members
            }).then((success) => {
              // Remove club from user's club list.
              var eventsUpdated;
              this.dataProvider.getUser(this.uid).subscribe((user)=>{
                eventsUpdated = user.events;
              });
              eventsUpdated.splice(eventsUpdated.indexOf(this.eventId),1);
              this.dataProvider.getUser(this.uid).update({
                events: eventsUpdated
              });
            }).catch((error) => {
              this.alertProvider.showErrorMessage('club/error-leave-club');
            });
          }
        },
        {
          text: 'Cancel'
        }
      ]
    }).present();
  }

}

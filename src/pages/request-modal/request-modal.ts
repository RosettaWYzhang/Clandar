import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertProvider } from '../../providers/alert/alert';
import { LoadingProvider } from '../../providers/loading/loading';
import { UserInfoPage } from '../user-info/user-info';
import { EventInfoPage } from "../event-info/event-info";
import * as firebase from 'firebase';

/**
 * Generated class for the RequestModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-request-modal',
  templateUrl: 'request-modal.html',
})
export class RequestModalPage {
  private eventRequests: any;
  private eventRequestsSent: any;
  private alert: any;
  private account: any;
  private uid: any;
  // RequestsPage
  // This is the page where the user can see their friend requests sent and received.
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public dataProvider: DataProvider, 
              public alertCtrl: AlertController, 
              public angularfire: AngularFireDatabase,
              public loadingProvider: LoadingProvider, 
              public alertProvider: AlertProvider, 
              public firebaseProvider: FirebaseProvider) { 
                this.uid = firebase.auth().currentUser.uid;
              }

  ionViewDidLoad() {
    this.loadingProvider.load();
    // Get user info
    this.dataProvider.getCurrentUser().subscribe((account) => {
      this.account = account;
      // Get eventRequests and eventRequestsSent of the user.
      this.dataProvider.getRequests(this.account.userId).subscribe((requests) => {
        // eventRequests.
        if (requests.eventRequests) {
          this.eventRequests = [];
          requests.eventRequests.forEach((eventId) => {
            this.dataProvider.getEventByEID(eventId).subscribe((event) => {
              this.addOrUpdateEventRequest(event);
            });
          });
        } else {
          this.eventRequests = [];
        }
        this.loadingProvider.dismiss();
      });
    });
  }

  // Add or update friend request only if not yet friends.
  addOrUpdateEventRequest(event) {
    if (!this.eventRequests) {
      this.eventRequests = [event];
    } else {
      var index = -1;
      for (var i = 0; i < this.eventRequests.length; i++) {
        if (this.eventRequests[i].$key == event.$key) {
          index = i;
        }
      }
      if (index > -1) {
        if (!this.invitationAccepted(event.$key))
          this.eventRequests[index] = event;
      } else {
        if (!this.invitationAccepted(event.$key))
          this.eventRequests.push(event);
      }
    }
  }

  // Back
  back() {
    this.navCtrl.pop();
  }

  // Accept Friend Request.
  acceptEventRequest(event) {
    this.alert = this.alertCtrl.create({
      title: 'Accept Invitation',
      message: 'Do you want to accept the invitation to join <b>' + event.title + '</b>?',
      buttons: [
        {
          text: 'Reject',
          handler: () => {
            this.firebaseProvider.deleteEventRequest(this.uid, event.$key);
          }
        },
        {
          text: 'Accept',
          handler: () => {
            this.firebaseProvider.acceptEventRequest(this.uid, event.$key);
          }
        },
        {
          text: 'Cancel',
          handler: data => { }
        }
      ]
    }).present();
  }

  // Checks if user is already friends with this user.
  invitationAccepted(eventId) {
    if (this.account.events) {
      if (this.account.events.indexOf(eventId) == -1) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  // View user.
  viewEvent(eventId) {
    this.navCtrl.push(EventInfoPage, { eventId: eventId });
  }

}

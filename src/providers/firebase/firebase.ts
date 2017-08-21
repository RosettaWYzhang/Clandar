import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoadingProvider } from '../loading/loading';
import { AlertProvider } from '../alert/alert';
import { DataProvider } from '../data/data';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/take';

@Injectable()
export class FirebaseProvider {
  // Firebase Provider
  // This is the provider class for most of the Firebase updates in the app.

  constructor(public angularfire: AngularFireDatabase, 
              public loadingProvider: LoadingProvider, 
              public alertProvider: AlertProvider, 
              public dataProvider: DataProvider) {
    console.log("Initializing Firebase Provider");
  }

  sendEventRequest(userId,eventId){
    this.loadingProvider.load();
    var eventRequestsSent;
    this.dataProvider.getEventRequests(eventId).take(1).subscribe((requests)=>{
      eventRequestsSent = requests.eventRequestsSent;
      if(!eventRequestsSent) {
        eventRequestsSent = [userId];
      } else {
        if(eventRequestsSent.indexOf(userId) == -1)
          eventRequestsSent.push(userId);        
      }
      this.angularfire.object('/requests/' + eventId).update({
        eventRequestsSent: eventRequestsSent
      }).then((success)=>{
        var eventRequests;
        this.dataProvider.getRequests(userId).take(1).subscribe((requests) => {
          eventRequests = requests.eventRequests;
          if (!eventRequests) {
            eventRequests = [eventId];
          } else {
            if(eventRequests.indexOf(eventId) == -1)
              eventRequests.push(eventId);
          }
          // Add Event Request information.
          this.angularfire.object('/requests/' + userId).update({
            eventRequests: eventRequests
          }).then((success) => {
            this.loadingProvider.dismiss();
            this.alertProvider.showEventRequestSent();
          }).catch((error) => {
            this.loadingProvider.dismiss();
          });
        });
      }).catch((error) => {
        this.loadingProvider.dismiss();
      });
    });
  }

// Cancel friend request sent to userId.
  cancelEventRequest(userId, eventId) {
    this.loadingProvider.load();

    var eventRequestsSent;
    this.dataProvider.getEventRequests(eventId).take(1).subscribe((requests) => {
      eventRequestsSent = requests.eventRequestsSent;
      eventRequestsSent.splice(eventRequestsSent.indexOf(eventId), 1);
      // Update requestSent information.
      this.angularfire.object('/requests/' + eventId).update({
        eventRequestsSent: eventRequestsSent
      }).then((success) => {
        var eventRequests;
        this.dataProvider.getRequests(userId).take(1).subscribe((requests) => {
          eventRequests = requests.eventRequests;
          eventRequests.splice(eventRequests.indexOf(eventId), 1);
          // Update friendRequests information.
          this.angularfire.object('/requests/' + userId).update({
            eventRequests: eventRequests
          }).then((success) => {
            this.loadingProvider.dismiss();
            this.alertProvider.showEventRequestRemoved();
          }).catch((error) => {
            this.loadingProvider.dismiss();
          });
        });
      }).catch((error) => {
        this.loadingProvider.dismiss();
      });
    });
  }

  // Delete friend request.(refuse invitation)
  deleteEventRequest(userId, eventId) {
    this.loadingProvider.load();

    var eventRequests;
    this.dataProvider.getRequests(userId).take(1).subscribe((requests) => {
      eventRequests = requests.eventRequests;
      eventRequests.splice(eventRequests.indexOf(userId), 1);
      // Update friendRequests information.
      this.angularfire.object('/requests/' + userId).update({
        eventRequests: eventRequests
      }).then((success) => {
        var eventRequestsSent;
        this.dataProvider.getEventRequests(eventId).take(1).subscribe((requests) => {
          eventRequestsSent = requests.eventRequestsSent;
          eventRequestsSent.splice(eventRequestsSent.indexOf(eventId), 1);
          // Update requestsSent information.
          this.angularfire.object('/requests/' + userId).update({
            eventRequestsSent: eventRequestsSent
          }).then((success) => {
            this.loadingProvider.dismiss();

          }).catch((error) => {
            this.loadingProvider.dismiss();
          });
        });
      }).catch((error) => {
        this.loadingProvider.dismiss();
        //TODO ERROR
      });
    });
  }

  // Accept friend request.
  acceptEventRequest(userId, eventId) {
    // Delete friend request.
    this.deleteEventRequest(userId,eventId);

    this.loadingProvider.load();
    this.dataProvider.getEventByEID(eventId).take(1).subscribe((event) => {
      var members = event.members;
      if (!members) {
        members = [userId];
      } else {
        members.push(userId);
      }
      // Add both users as friends.
      this.dataProvider.getEventByEID(eventId).update({
        members: members
      }).then((success) => {
        this.dataProvider.getUser(userId).take(1).subscribe((account) => {
          var events = account.events;
          if (!events) {
            events = [eventId];
          } else {
            events.push(eventId);
          }
          this.dataProvider.getUser(userId).update({
            events: events
          }).then((success) => {
            this.loadingProvider.dismiss();
          }).catch((error) => {
            this.loadingProvider.dismiss();
          });
        });
      }).catch((error) => {
        this.loadingProvider.dismiss();
      });
    });
  }

  // Send friend request to userId.
  sendFriendRequest(userId) {
    let loggedInUserId = firebase.auth().currentUser.uid;
    this.loadingProvider.load();

    var requestsSent;
    // Use take(1) so that subscription will only trigger once.
    this.dataProvider.getRequests(loggedInUserId).take(1).subscribe((requests) => {
      requestsSent = requests.requestsSent;
      if (!requestsSent) {
        requestsSent = [userId];
      } else {
        if(requestsSent.indexOf(userId) == -1)
          requestsSent.push(userId);
      }
      // Add requestsSent information.
      this.angularfire.object('/requests/' + loggedInUserId).update({
        requestsSent: requestsSent
      }).then((success) => {
        var friendRequests;
        this.dataProvider.getRequests(userId).take(1).subscribe((requests) => {
          friendRequests = requests.friendRequests;
          if (!friendRequests) {
            friendRequests = [loggedInUserId];
          } else {
            if(friendRequests.indexOf(userId) == -1)
              friendRequests.push(loggedInUserId);
          }
          // Add friendRequest information.
          this.angularfire.object('/requests/' + userId).update({
            friendRequests: friendRequests
          }).then((success) => {
            this.loadingProvider.dismiss();
            this.alertProvider.showFriendRequestSent();
          }).catch((error) => {
            this.loadingProvider.dismiss();
          });
        });
      }).catch((error) => {
        this.loadingProvider.dismiss();
      });
    });
  }

  // Cancel friend request sent to userId.
  cancelFriendRequest(userId) {
    let loggedInUserId = firebase.auth().currentUser.uid;
    this.loadingProvider.load();

    var requestsSent;
    this.dataProvider.getRequests(loggedInUserId).take(1).subscribe((requests) => {
      requestsSent = requests.requestsSent;
      requestsSent.splice(requestsSent.indexOf(userId), 1);
      // Update requestSent information.
      this.angularfire.object('/requests/' + loggedInUserId).update({
        requestsSent: requestsSent
      }).then((success) => {
        var friendRequests;
        this.dataProvider.getRequests(userId).take(1).subscribe((requests) => {
          friendRequests = requests.friendRequests;
          friendRequests.splice(friendRequests.indexOf(loggedInUserId), 1);
          // Update friendRequests information.
          this.angularfire.object('/requests/' + userId).update({
            friendRequests: friendRequests
          }).then((success) => {
            this.loadingProvider.dismiss();
            this.alertProvider.showFriendRequestRemoved();
          }).catch((error) => {
            this.loadingProvider.dismiss();
          });
        });
      }).catch((error) => {
        this.loadingProvider.dismiss();
      });
    });
  }

  // Delete friend request.
  deleteFriendRequest(userId) {
    let loggedInUserId = firebase.auth().currentUser.uid;
    this.loadingProvider.load();

    var friendRequests;
    this.dataProvider.getRequests(loggedInUserId).take(1).subscribe((requests) => {
      friendRequests = requests.friendRequests;
      friendRequests.splice(friendRequests.indexOf(userId), 1);
      // Update friendRequests information.
      this.angularfire.object('/requests/' + loggedInUserId).update({
        friendRequests: friendRequests
      }).then((success) => {
        var requestsSent;
        this.dataProvider.getRequests(userId).take(1).subscribe((requests) => {
          requestsSent = requests.requestsSent;
          requestsSent.splice(requestsSent.indexOf(loggedInUserId), 1);
          // Update requestsSent information.
          this.angularfire.object('/requests/' + userId).update({
            requestsSent: requestsSent
          }).then((success) => {
            this.loadingProvider.dismiss();

          }).catch((error) => {
            this.loadingProvider.dismiss();
          });
        });
      }).catch((error) => {
        this.loadingProvider.dismiss();
        //TODO ERROR
      });
    });
  }

  // Accept friend request.
  acceptFriendRequest(userId) {
    let loggedInUserId = firebase.auth().currentUser.uid;
    // Delete friend request.
    this.deleteFriendRequest(userId);

    this.loadingProvider.load();
    this.dataProvider.getUser(loggedInUserId).take(1).subscribe((account) => {
      var friends = account.friends;
      if (!friends) {
        friends = [userId];
      } else {
        friends.push(userId);
      }
      // Add both users as friends.
      this.dataProvider.getUser(loggedInUserId).update({
        friends: friends
      }).then((success) => {
        this.dataProvider.getUser(userId).take(1).subscribe((account) => {
          var friends = account.friends;
          if (!friends) {
            friends = [loggedInUserId];
          } else {
            friends.push(loggedInUserId);
          }
          this.dataProvider.getUser(userId).update({
            friends: friends
          }).then((success) => {
            this.loadingProvider.dismiss();
          }).catch((error) => {
            this.loadingProvider.dismiss();
          });
        });
      }).catch((error) => {
        this.loadingProvider.dismiss();
      });
    });
  }
}
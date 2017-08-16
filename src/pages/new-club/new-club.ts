import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, App } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImageProvider } from '../../providers/image/image';
import { LoadingProvider } from '../../providers/loading/loading';
import { DataProvider } from '../../providers/data/data';
import { AlertProvider } from '../../providers/alert/alert';
import { Validator } from '../../validation';
import { Camera } from '@ionic-native/camera';
import { AngularFireDatabase } from 'angularfire2/database';
import { ClubPage } from '../club/club';
import * as firebase from 'firebase';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-new-club',
  templateUrl: 'new-club.html'
})
export class NewClubPage {
  private club: any;
  private clubForm: FormGroup;
  private friends: any;
  private searchFriend: any;
  private clubMembers: any;
  private alert: any;
  // NewclubPage
  // This is the page where the user can start a new club chat with their friends.
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public imageProvider: ImageProvider, 
              public dataProvider: DataProvider, 
              public formBuilder: FormBuilder,
              public alertProvider: AlertProvider, 
              public alertCtrl: AlertController, 
              public angularfire: AngularFireDatabase, 
              public app: App, 
              public loadingProvider: LoadingProvider, 
              public camera: Camera) {
    // Create our clubForm based on Validator.ts
    this.clubForm = formBuilder.group({
      name: Validator.clubNameValidator,
      description: Validator.clubDescriptionValidator
    });
  }

  ionViewDidLoad() {
    // Initialize
    this.club = {
      img: 'assets/img/club.png'
    };
    this.searchFriend = '';

    // Get user's friends to add to the club.
    this.dataProvider.getCurrentUser().subscribe((account) => {
      if (!this.clubMembers) {
        this.clubMembers = [account];
      }
      if (account.friends) {
        for (var i = 0; i < account.friends.length; i++) {
          this.dataProvider.getUser(account.friends[i]).subscribe((friend) => {
            this.addOrUpdateFriend(friend);
          });
        }
      } else {
        this.friends = [];
      }
    });
  }

  // Add or update friend for real-time sync.
  addOrUpdateFriend(friend) {
    if (!this.friends) {
      this.friends = [friend];
    } else {
      var index = -1;
      for (var i = 0; i < this.friends.length; i++) {
        if (this.friends[i].$key == friend.$key) {
          index = i;
        }
      }
      if (index > -1) {
        this.friends[index] = friend;
      } else {
        this.friends.push(friend);
      }
    }
  }

  // Back
  back() {
    if (this.club)
      this.imageProvider.deleteImageFile(this.club.img);
    this.navCtrl.pop();
  }

  // Proceed with club creation.
  done() {
    this.loadingProvider.load();
    var messages = [];
    // Add system message that club is created.
    messages.push({
      date: new Date().toString(),
      sender: firebase.auth().currentUser.uid,
      type: 'system',
      message: 'Club created',
      icon: 'md-chatbubbles'
    });
    // Add members of the club.
    var members = [];
    for (var i = 0; i < this.clubMembers.length; i++) {
      members.push(this.clubMembers[i].$key);
    }
    var administrators = [];
    administrators.push(firebase.auth().currentUser.uid);
    // Add club info and date.
    this.club.creator = firebase.auth().currentUser.uid;
    this.club.administrators = administrators;
    this.club.dateCreated = new Date().toString();
    this.club.messages = messages;
    this.club.members = members;
    this.club.name = this.clubForm.value["name"];
    this.club.description = this.clubForm.value["description"];
    // Add club to database.
    this.angularfire.list('clubs').push(this.club).then((success) => {
      let clubId = success.key;
      // Add club reference to users.
      this.angularfire.object('/accounts/' + this.clubMembers[0].$key + '/clubs/' + clubId).update({
        messagesRead: 1
      });
      this.angularfire.list('/accounts/' + firebase.auth().currentUser.uid + '/createdClubs/').push(clubId);
      this.angularfire.list('/accounts/' + firebase.auth().currentUser.uid + '/adminedClubs/').push(clubId);      
      for (var i = 1; i < this.clubMembers.length; i++) {
        this.angularfire.object('/accounts/' + this.clubMembers[i].$key + '/clubs/' + clubId).update({
          messagesRead: 0
        });
      }
      // Open the club chat of the just created club.
      this.navCtrl.popToRoot().then(() => {
        this.loadingProvider.dismiss();
        this.app.getRootNav().push(ClubPage, { clubId: clubId });
      });
    });
  }

  // Add friend to members of club.
  addToClub(friend) {
    this.clubMembers.push(friend);
  }

  // Remove friend from members of group.
  removeFromClub(friend) {
    var index = -1;
    for (var i = 1; i < this.clubMembers.length; i++) {
      if (this.clubMembers[i].$key == friend.$key) {
        index = i;
      }
    }
    if (index > -1) {
      this.clubMembers.splice(index, 1);
    }
  }

  // Check if friend is already added to the club or not.
  inClub(friend) {
    for (var i = 0; i < this.clubMembers.length; i++) {
      if (this.clubMembers[i].$key == friend.$key) {
        return true;
      }
    }
    return false;
  }

  // Toggle to add/remove friend from the club.
  addOrRemoveFromClub(friend) {
    if (this.inClub(friend)) {
      this.removeFromClub(friend);
    } else {
      this.addToClub(friend);
    }
  }

  // Set Club photo.
  setClubPhoto() {
    this.alert = this.alertCtrl.create({
      title: 'Set Club Photo',
      message: 'Do you want to take a photo or choose from your photo gallery?',
      buttons: [
        
        {
          text: 'Choose from Gallery',
          handler: () => {
            this.imageProvider.setClubPhoto(this.club, this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Take Photo',
          handler: () => {
            this.imageProvider.setClubPhoto(this.club, this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          handler: data => { }
        }
      ]
    }).present();
  }

  // Search people to add as friend.
  searchPeople() {
    this.navCtrl.push(SearchPage);
  }
}

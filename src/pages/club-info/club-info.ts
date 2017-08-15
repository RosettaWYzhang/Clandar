import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { LoadingProvider } from '../../providers/loading/loading';
import { ImageProvider } from '../../providers/image/image';
import { AlertProvider } from '../../providers/alert/alert';
import { ImageModalPage } from '../image-modal/image-modal';
import { AddMembersPage } from '../add-members/add-members';
import { UserInfoPage } from '../user-info/user-info';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-club-info',
  templateUrl: 'club-info.html'
})
export class ClubInfoPage {
  private uid: any;
  private clubId: any;
  private club: any;
  private clubMembers: any;
  private alert: any;
  private user: any;
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
              public angularfire: AngularFireDatabase,
              public imageProvider: ImageProvider, 
              public camera: Camera) { }

  ionViewDidLoad() {
    // Initialize
    this.clubId = this.navParams.get('clubId');
    this.uid = firebase.auth().currentUser.uid;
    // Get club details.
    this.subscription = this.dataProvider.getClub(this.clubId).subscribe((club) => {
      if (club.$exists()) {
        this.loadingProvider.load();
        this.club = club;
        if (club.members) {
          club.members.forEach((memberId) => {
            this.dataProvider.getUser(memberId).subscribe((member) => {
              this.addUpdateOrRemoveMember(member);
            });
          });
        }
        this.loadingProvider.dismiss();
      } else {
        // Club is deleted, go back.
        this.navCtrl.popToRoot();
      }
    });

    // Get user details.
    this.dataProvider.getCurrentUser().subscribe((user) => {
      this.user = user;
    });
  }

  // Delete subscription.
  // ionViewDidLeave() {
  //   if(this.deleteSubscription)
  //
  // }

  // Check if user exists in the club then add/update user.
  // If the user has already left the club, remove user from the list.
  addUpdateOrRemoveMember(member) {
    if (this.club) {
      if (this.club.members.indexOf(member.$key) > -1) {
        // User exists in the club.
        if (!this.clubMembers) {
          this.clubMembers = [member];
        } else {
          var index = -1;
          for (var i = 0; i < this.clubMembers.length; i++) {
            if (this.clubMembers[i].$key == member.$key) {
              index = i;
            }
          }
          // Add/Update User.
          if (index > -1) {
            this.clubMembers[index] = member;
          } else {
            this.clubMembers.push(member);
          }
        }
      } else {
        // User already left the club, remove member from list.
        var index = -1;
        for (var i = 0; i < this.clubMembers.length; i++) {
          if (this.clubMembers[i].$key == member.$key) {
            index = i;
          }
        }
        if (index > -1) {
          this.clubMembers.splice(index, 1);
        }
      }
    }
  }

  // View user info.
  viewUser(userId) {
    if (firebase.auth().currentUser.uid != userId)
      this.navCtrl.push(UserInfoPage, { userId: userId });
  }

  // Back
  back() {
    this.subscription.unsubscribe();
    this.navCtrl.pop();
  }

  // Enlarge club image.
  enlargeImage(img) {
    let imageModal = this.modalCtrl.create(ImageModalPage, { img: img });
    imageModal.present();
  }

  // Change club name.
  setName() {
    this.alert = this.alertCtrl.create({
      title: 'Change Club Name',
      message: "Please enter a new club name.",
      inputs: [
        {
          name: 'name',
          placeholder: 'Club Name',
          value: this.club.name
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            let name = data["name"];
            if (this.club.name != name) {
              this.loadingProvider.load();
              // Add system message.
              this.club.messages.push({
                date: new Date().toString(),
                sender: this.user.$key,
                type: 'system',
                message: this.user.name + ' has changed the club name to: ' + name + '.',
                icon: 'md-create'
              });
              // Update club on database.
              this.dataProvider.getClub(this.clubId).update({
                name: name,
                messages: this.club.messages
              }).then((success) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showClubUpdatedMessage();
              }).catch((error) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showErrorMessage('club/error-update-club');
              });
            }
          }
        }
      ]
    }).present();
  }

  // Change club image, the user is asked if they want to take a photo or choose from gallery.
  setPhoto() {
    this.alert = this.alertCtrl.create({
      title: 'Set Club Photo',
      message: 'Do you want to take a photo or choose from your photo gallery?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Choose from Gallery',
          handler: () => {
            this.loadingProvider.load();
            // Upload photo and set to club photo, afterwards, return the club object as promise.
            this.imageProvider.setClubPhotoPromise(this.club, this.camera.PictureSourceType.PHOTOLIBRARY).then((club) => {
              // Add system message.
              this.club.messages.push({
                date: new Date().toString(),
                sender: this.user.$key,
                type: 'system',
                message: this.user.name + ' has changed the club photo.',
                icon: 'ios-camera'
              });
              // Update club image on database.
              this.dataProvider.getClub(this.clubId).update({
                img: club.img,
                messages: this.club.messages
              }).then((success) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showClubUpdatedMessage();
              }).catch((error) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showErrorMessage('club/error-update-club');
              });
            });
          }
        },
        {
          text: 'Take Photo',
          handler: () => {
            this.loadingProvider.load();
            // Upload photo and set to club photo, afterwwards, return the club object as promise.
            this.imageProvider.setClubPhotoPromise(this.club, this.camera.PictureSourceType.CAMERA).then((club) => {
              // Add system message.
              this.club.messages.push({
                date: new Date().toString(),
                sender: this.user.$key,
                type: 'system',
                message: this.user.name + ' has changed the club photo.',
                icon: 'ios-camera'
              });
              // Update club image on database.
              this.dataProvider.getClub(this.clubId).update({
                img: club.img,
                messages: this.club.messages
              }).then((success) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showClubUpdatedMessage();
              }).catch((error) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showErrorMessage('club/error-update-club');
              });
            });
          }
        }
      ]
    }).present();
  }

  // Change club description.
  setDescription() {
    this.alert = this.alertCtrl.create({
      title: 'Change Club Description',
      message: "Please enter a new club description.",
      inputs: [
        {
          name: 'description',
          placeholder: 'Club Description',
          value: this.club.description
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Save',
          handler: data => {
            let description = data["description"];
            if (this.club.description != description) {
              this.loadingProvider.load();
              // Add system message.
              this.club.messages.push({
                date: new Date().toString(),
                sender: this.user.$key,
                type: 'system',
                message: this.user.name + ' has changed the club description.',
                icon: 'md-clipboard'
              });
              // Update club on database.
              this.dataProvider.getClub(this.clubId).update({
                description: description,
                messages: this.club.messages
              }).then((success) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showClubUpdatedMessage();
              }).catch((error) => {
                this.loadingProvider.dismiss();
                this.alertProvider.showErrorMessage('club/error-update-club');
              });
            }
          }
        }
      ]
    }).present();
  }

  // Leave club.
  leaveClub() {
    this.alert = this.alertCtrl.create({
      title: 'Confirm Leave',
      message: 'Are you sure you want to leave this club?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Leave',
          handler: data => {
            this.loadingProvider.load();
            // Remove member from club.
            this.club.members.splice(this.club.members.indexOf(this.user.$key), 1);
            // Add system message.
            this.club.messages.push({
              date: new Date().toString(),
              sender: this.user.$key,
              type: 'system',
              message: this.user.name + ' has left this club.',
              icon: 'md-log-out'
            });
            // Update club on database.
            this.dataProvider.getClub(this.clubId).update({
              members: this.club.members,
              messages: this.club.messages
            }).then((success) => {
              // Remove club from user's club list.
              this.angularfire.object('/accounts/' + firebase.auth().currentUser.uid + '/clubs/' + this.clubId).remove().then(() => {
                // Pop this view because user already has left this club.
                this.club = null;
                setTimeout(() => {
                  this.loadingProvider.dismiss();
                  this.navCtrl.popToRoot();
                }, 300);
              });
            }).catch((error) => {
              this.alertProvider.showErrorMessage('club/error-leave-club');
            });
          }
        }
      ]
    }).present();
  }

  // Delete club.
  deleteClub() {
    this.alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this club?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Delete',
          handler: data => {
            let club = JSON.parse(JSON.stringify(this.club));
            // Delete all images of image messages.
            club.messages.forEach((message) => {
              if (message.type == 'image') {
                console.log("Delete: " + message.url + " of " + club.$key);
                this.imageProvider.deleteClubImageFile(club.$key, message.url);
              }
            });
            // Delete club image.
            console.log("Delete: " + club.img);
            this.imageProvider.deleteImageFile(club.img);
            this.angularfire.object('/accounts/' + firebase.auth().currentUser.uid + '/clubs/' + club.$key).remove().then(() => {
              this.dataProvider.getClub(club.$key).remove();
            });
          }
        }
      ]
    }).present();
  }

  // Add members.
  addMembers() {
    this.navCtrl.push(AddMembersPage, { clubId: this.clubId });
  }
}
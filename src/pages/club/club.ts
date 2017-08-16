import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, ModalController, AlertController, ActionSheetController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ImageProvider } from '../../providers/image/image';
import { LoadingProvider } from '../../providers/loading/loading';
import * as firebase from 'firebase';
import { UserInfoPage } from '../user-info/user-info';
import { ClubInfoPage } from '../club-info/club-info';
import { ImageModalPage } from '../image-modal/image-modal';
import { AngularFireDatabase } from 'angularfire2/database';

import { Camera } from '@ionic-native/camera';
import { Contacts } from '@ionic-native/contacts';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-club',
  templateUrl: 'club.html'
})
export class ClubPage {
  @ViewChild(Content) content: Content;
  private title: any;
  private clubId: any;
  private message: any;
  private messages: any;
  private updateDateTime: any;
  private subscription: any;
  private messagesToShow: any;
  private startIndex: any = -1;
  private scrollDirection: any = 'bottom';
  // Set number of messages to show.
  private numberOfMessages = 10;
  // GroupPage
  // This is the page where the user can chat with other group members and view group info.
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public dataProvider: DataProvider,
              public modalCtrl: ModalController, 
              public angularfire: AngularFireDatabase, 
              public alertCtrl: AlertController,
              public imageProvider: ImageProvider, 
              public loadingProvider: LoadingProvider, 
              public camera: Camera, 
              public keyboard: Keyboard, 
              public actionSheet: ActionSheetController,
              public contacts: Contacts, 
              public geolocation: Geolocation) { }

  ionViewDidLoad() {
    // Get group details
    this.clubId = this.navParams.get('clubId');
    this.subscription = this.dataProvider.getClub(this.clubId).subscribe((club) => {
      if (club.$exists()) {
        this.title = club.name;
        // Get group messages
        this.dataProvider.getClubMessages(club.$key).subscribe((messages) => {
          if (this.messages) {
            // Just append newly added messages to the bottom of the view.
            if (messages.length > this.messages.length) {
              let message = messages[messages.length - 1];
              this.dataProvider.getUser(message.sender).subscribe((user) => {
                message.avatar = user.img;
              });
              this.messages.push(message);
              // Also append to messagesToShow.
              this.messagesToShow.push(message);
              // Reset scrollDirection to bottom.
              this.scrollDirection = 'bottom';
            }
          } else {
            // Get all messages, this will be used as reference object for messagesToShow.
            this.messages = [];
            messages.forEach((message) => {
              this.dataProvider.getUser(message.sender).subscribe((user) => {
                message.avatar = user.img;
              });
              this.messages.push(message);
            });
            // Load messages in relation to numOfMessages.
            if (this.startIndex == -1) {
              // Get initial index for numberOfMessages to show.
              if ((this.messages.length - this.numberOfMessages) > 0) {
                this.startIndex = this.messages.length - this.numberOfMessages;
              } else {
                this.startIndex = 0;
              }
            }
            if (!this.messagesToShow) {
              this.messagesToShow = [];
            }
            // Set messagesToShow
            for (var i = this.startIndex; i < this.messages.length; i++) {
              this.messagesToShow.push(this.messages[i]);
            }
            this.loadingProvider.dismiss();
          }
        });
      }
    });

    // Update messages' date time elapsed every minute based on Moment.js.
    var that = this;
    if (!that.updateDateTime) {
      that.updateDateTime = setInterval(function() {
        if (that.messages) {
          that.messages.forEach((message) => {
            let date = message.date;
            message.date = new Date(date);
          });
        }
      }, 60000);
    }
  }

  // Load previous messages in relation to numberOfMessages.
  loadPreviousMessages() {
    var that = this;
    // Show loading.
    this.loadingProvider.load();
    setTimeout(function() {
      // Set startIndex to load more messages.
      if (that.startIndex - that.numberOfMessages > -1) {
        that.startIndex -= that.numberOfMessages;
      } else {
        that.startIndex = 0;
      }
      // Refresh our messages list.
      that.messages = null;
      that.messagesToShow = null;
      // Set scroll direction to top.
      that.scrollDirection = 'top';
      // Populate list again.
      that.ionViewDidLoad();
    }, 1000);
  }

  // Update messagesRead when user lefts this page.
  ionViewWillLeave() {
    if (this.messages)
      this.setMessagesRead(this.messages);
  }

  // Check if currentPage is active, then update user's messagesRead.
  setMessagesRead(messages) {
    if (this.navCtrl.getActive().instance instanceof ClubPage) {
      // Update user's messagesRead on database.
      this.angularfire.object('/accounts/' + firebase.auth().currentUser.uid + '/clubs/' + this.clubId).update({
        messagesRead: this.messages.length
      });
    }
  }

  // Check if 'return' button is pressed and send the message.
  onType(keyCode) {
    if (keyCode == 13) {
      // this.keyboard.close();
      // this.send();
    }
  }

  // Back
  back() {
    this.subscription.unsubscribe();
    this.navCtrl.pop();
  }

  // Scroll to bottom of page after a short delay.
  scrollBottom() {
    var that = this;
    setTimeout(function() {
      that.content.scrollToBottom();
    }, 300);
  }

  // Scroll to top of the page after a short delay.
  scrollTop() {
    var that = this;
    setTimeout(function() {
      that.content.scrollToTop();
    }, 300);
  }

  // Scroll depending on the direction.
  doScroll() {
    if (this.scrollDirection == 'bottom') {
      this.scrollBottom();
    } else if (this.scrollDirection == 'top') {
      this.scrollTop();
    }
  }

  // Check if the user is the sender of the message.
  isSender(message) {
    if (message.sender == firebase.auth().currentUser.uid) {
      return true;
    } else {
      return false;
    }
  }

  // Check if the message is a system message.
  isSystemMessage(message) {
    if (message.type == 'system') {
      return true;
    } else {
      return false;
    }
  }

  // View user info
  viewUser(userId) {
    this.navCtrl.push(UserInfoPage, { userId: userId });
  }

  // Send text message to the group.
  send() {
    // Clone an instance of messages object so it will not directly be updated.
    // The messages object should be updated by our observer declared on ionViewDidLoad.
    let messages = JSON.parse(JSON.stringify(this.messages));
    messages.push({
      date: new Date().toString(),
      sender: firebase.auth().currentUser.uid,
      type: 'text',
      message: this.message
    });
    // Update group messages.
    this.dataProvider.getClub(this.clubId).update({
      messages: messages
    });
    // Clear messagebox.
    this.message = '';
  }

  // Enlarge image messages.
  enlargeImage(img) {
    let imageModal = this.modalCtrl.create(ImageModalPage, { img: img });
    imageModal.present();
  }

  attach(){
    let action = this.actionSheet.create({
      title:'Choose attachments',
      buttons:[{
        text: 'Camera',
        handler: () =>{
          console.log("take photo");
          this.imageProvider.uploadClubPhotoMessage(this.clubId, this.camera.PictureSourceType.CAMERA).then((url) => {
            // Process image message.
            this.sendPhotoMessage(url);
          });
        }
      },{
        text: 'Photo Library',
        handler: ()=>{
          console.log("Access gallery");
          this.imageProvider.uploadClubPhotoMessage(this.clubId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
              // Process image message.
              this.sendPhotoMessage(url);
          });
        }
      },/*{
        text: 'Video',
        handler: () =>{
          console.log("Video");
          this.imageProvider.uploadGroupVideoMessage(this.groupId).then(url=>{
            this.sendVideoMessage(url);
          });
        }
      },*/{
        text: 'Location',
        handler:()=>{
          console.log("Location");
          this.geolocation.getCurrentPosition({
            timeout: 2000
          }).then(res => {
            let locationMessage = "current location: lat:"+res.coords.latitude+" lng:"+res.coords.longitude;
            let confirm = this.alertCtrl.create({
              title: 'Your Location',
              message: locationMessage,
              buttons:[{
                text: 'Share',
                handler: () =>{
                  console.log("share");
                  this.message = locationMessage;
                  this.send();
                }
              },
              {
                text:'cancel',
                handler: () =>{
                  console.log("canceled");
                }
              }]
            });
            confirm.present();
          }, locationErr => {
            console.log("Location Error"+ JSON.stringify(locationErr));
          });
        }
      },{
        text: 'Contact',
        handler: () =>{
          console.log("Share contact");
          this.contacts.pickContact().then( data =>{
            console.log(data.displayName);
            console.log(data.phoneNumbers[0].value);
            this.message = data.displayName+" ph: "+data.phoneNumbers[0].value;
            this.send();
          }, err=>{
            console.log(err);
          })
        }
      },{
        text: 'cancel',
        role: 'cancel',
        handler: ()=>{
          console.log("cancelled");
        }
      }]
    });
    action.present();
  }
  takePhoto(){
    this.imageProvider.uploadClubPhotoMessage(this.clubId, this.camera.PictureSourceType.CAMERA).then((url) => {
      // Process image message.
      this.sendPhotoMessage(url);
    });
  }

  // Process photoMessage on database.
  sendPhotoMessage(url) {
    let messages = JSON.parse(JSON.stringify(this.messages));
    messages.push({
      date: new Date().toString(),
      sender: firebase.auth().currentUser.uid,
      type: 'image',
      url: url
    });
    this.dataProvider.getClub(this.clubId).update({
      messages: messages
    });
    this.message = '';
  }

  sendVideoMessage(url) {
    let messages = JSON.parse(JSON.stringify(this.messages));
    messages.push({
      date: new Date().toString(),
      sender: firebase.auth().currentUser.uid,
      type: 'video',
      url: url
    });
    this.dataProvider.getClub(this.clubId).update({
      messages: messages
    });
    this.message = '';
  }

  // View group info.
  clubInfo() {
    this.navCtrl.push(ClubInfoPage, { clubId: this.clubId });
  }
}
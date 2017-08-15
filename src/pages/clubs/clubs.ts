import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ModalController, AlertController, ActionSheetController, App, Platform } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ImageProvider } from '../../providers/image/image';
import { LoadingProvider } from '../../providers/loading/loading';
import { AlertProvider } from '../../providers/alert/alert';
import { UserInfoPage } from '../user-info/user-info';
import { ImageModalPage } from '../image-modal/image-modal';
import { ClubPage } from '../club/club';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';

/**
 * Generated class for the ClubsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-clubs',
  templateUrl: 'clubs.html',
})
export class ClubsPage {
  private clubs:any;
  private search:any;
  private clubMembers:any;
  private user:any;
  constructor(public navCtrl: NavController, 
              public platform: Platform,
              public navParams: NavParams,
              public dataProvider: DataProvider,
              public loadingProvider: LoadingProvider,
              public alertProvider: AlertProvider,
              public imageProvider: ImageProvider,
              public alertCtrl: AlertController,
              public afDB: AngularFireDatabase,
              public app: App) {}

  ionViewDidLoad() {
    this.dataProvider.getCurrentUser().subscribe((user)=>{
      this.user = user;
    });
    this.search = "";
    console.log('ionViewDidLoad ClubsPage');
    this.clubs = [];
    this.dataProvider.getAllClubs().subscribe((clubs) => {
      if(clubs){
      clubs.forEach((club) => {
        this.clubs.push(club);
      });}
    });
  }

  getUsername(uid){
    var uname:any;
    this.dataProvider.getUser(uid).subscribe((user)=>{
      uname = user.name;
    });
    return uname;
  }

  isMember(club) {
    for (var i=0;i<club.members.length;i++){
      if (this.user.userId==club.members[i])
        return true;
    }
    return false;
  }

  details(club){
    var note:any;
    if (this.isMember(club)){
      note = 'Welcome to join our club';}
    else {
      note = 'You are already a member of the club';}
    let name = club.name;
    let description = club.description;
    
    let alert = this.alertCtrl.create({
    title: 'Details',
    subTitle: '<br><br>Name: ' + name
            + '<br><br>Number of Members: ' + club.members.length
            + '<br><br>Description: ' + club.description
            + '<br><br>Created By: ' + this.getUsername(club.creater)
            + '<br><br>' + note,
    buttons: ['OK']
    })
    alert.present();
  }

  addOrUpdateMember(member) {
    if (!this.clubMembers) {
      this.clubMembers = [member];
    } else {
      var index = -1;
      for (var i = 0; i < this.clubMembers.length; i++) {
        if (this.clubMembers[i].$key == member.$key) {
          index = i;
        }
      }
      if (index > -1) {
        this.clubMembers[index] = member;
      } else {
        this.clubMembers.push(member);
      }
    }
  }

  join(clubId){
    var thisclub:any;
    this.loadingProvider.load();
    // Get club information
    this.dataProvider.getClub(clubId).subscribe((club) => {
      thisclub = club;
      this.loadingProvider.dismiss();
    });
    this.loadingProvider.load();
    this.afDB.object('/accounts/'+firebase.auth().currentUser.uid+'/clubs/'+clubId).update({
      messagesRead: 0
    });
    thisclub.members.push(firebase.auth().currentUser.uid);
    thisclub.messages.push({
                date: new Date().toString(),
                sender: firebase.auth().currentUser.uid,
                type: 'system',
                message: this.user.name + ' has joined the club.',
                icon: 'md-contacts'
              });
    this.dataProvider.getClub(clubId).update({
      members: thisclub.members,
      messages: thisclub.messages
    }).then(()=>{
      this.loadingProvider.dismiss();
      this.alertProvider.showClubJoinedMessage();
    })    
  }

}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Tabs} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Calendar } from '../calendar/calendar';
import { SettingsPage } from '../settings/settings';
import { Searcher } from '../searcher/searcher';
import { TdlistPage } from '../tdlist/tdlist';
import { LoadingProvider } from '../../providers/loading/loading';
import { Login } from '../login/login';
import { ConversationPage } from '../conversation/conversation';
import * as firebase from 'firebase'; 

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  template:`
    <ion-tabs #myTabs>
      <ion-tab tabIcon="calendar" tabTitle="Calendar" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="list" tabTitle="To-do List" [root]="tab2"></ion-tab>
      <ion-tab tabIcon="chatbubbles" tabTitle="Conversation" [root]="tab3"></ion-tab>
      <ion-tab tabIcon="aperture" tabTitle="Clan" [root]="tab4"></ion-tab>  
      <ion-tab tabIcon="settings" tabTitle="Settings" [root]="tab5"></ion-tab>          
    </ion-tabs>
`})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tab1:any = Calendar;
  tab2:any = TdlistPage;
  tab3:any = ConversationPage;
  tab4:any = Searcher;
  tab5:any = SettingsPage;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public angularfire: AngularFireDatabase,
              public loadingProvider: LoadingProvider) {
  }

  ionViewDidLoad() {
    this.createUserData();
    console.log('ionViewDidLoad TabsPage');
    this.tabRef.select(0);
  }

    // Create userData on the database if it doesn't exist yet.
  createUserData() {
    firebase.database().ref('accounts/' + firebase.auth().currentUser.uid).once('value')
      .then((account) => {
        // No database data yet, create user data on database
        if (!account.val()) {
          this.loadingProvider.load();
          let user = firebase.auth().currentUser;
          var userId, name, provider, img, email;
          let providerData = user.providerData[0];

          userId = user.uid;

          // Get name from Firebase user.
          if (user.displayName || providerData.displayName) {
            name = user.displayName;
            name = providerData.displayName;
          } else {
            name = "newUser";
          }

          // Set default username based on name and userId.
          let username = name.replace(/ /g, '') + userId.substring(0, 8);

          // Get provider from Firebase user.
          if (providerData.providerId == 'password') {
            provider = "Firebase";
          } else if (providerData.providerId == 'facebook.com') {
            provider = "Facebook";
          } else if (providerData.providerId == 'google.com') {
            provider = "Google";
          }

          // Get photoURL from Firebase user.
          if (user.photoURL || providerData.photoURL) {
            img = user.photoURL;
            img = providerData.photoURL;
          } else {
            img = "https://firebasestorage.googleapis.com/v0/b/clandar-2e188.appspot.com/o/profile.png?alt=media&token=22fd850b-d8bd-4926-80a4-c87b9032a938";
          }

          // Get email from Firebase user.
          email = user.email;

          // Set default description.
          let description = "No description yet :(";

          // Insert data on our database using AngularFire.
          this.angularfire.object('/accounts/' + userId).set({
            userId: userId,
            name: name,
            username: username,
            provider: provider,
            img: img,
            email: email,
            description: description,
            dateCreated: new Date().toString()
          }).then(() => {
            this.loadingProvider.dismiss();
          });
        }
      });
  }
}

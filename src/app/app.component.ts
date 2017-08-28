import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Testing } from '../pages/testing/testing';
import { CalendarPage } from '../pages/calendar/calendar';
import { Login } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Tasks } from '../pages/tasks/tasks';
import { Searcher } from '../pages/searcher/searcher';
import { SettingsPage } from '../pages/settings/settings';
import { TdlistPage } from '../pages/tdlist/tdlist';
import { TabsPage } from '../pages/tabs/tabs';
import { TaskModalPage } from '../pages/tdlist/tdlist';
import { VerifyPage } from '../pages/verify/verify';
import { ConversationPage } from '../pages/conversation/conversation';
import { NewChatPage } from '../pages/new-chat/new-chat';
import { ChatPage } from '../pages/chat/chat';
import { InformationPage } from '../pages/information/information';
import { ContactsPage } from '../pages/contacts/contacts';
import { SearchPage } from '../pages/search/search';
import { RequestsPage } from '../pages/requests/requests';
import { UserInfoPage } from '../pages/user-info/user-info';
import { ImageModalPage } from '../pages/image-modal/image-modal';
import { NewClubPage } from '../pages/new-club/new-club';
import { ClubsPage } from '../pages/clubs/clubs';
import { ClubPage } from '../pages/club/club';
import { ClubInfoPage } from '../pages/club-info/club-info';
import { AddMembersPage } from '../pages/add-members/add-members';
import { AdminModalPage } from '../pages/admin-modal/admin-modal';
import { RequestModalPage } from '../pages/request-modal/request-modal';
import { EventInfoPage } from '../pages/event-info/event-info';
import { PopPage } from '../pages/calendar/calendar';
import { TimelinePage } from '../pages/timeline/timeline';
import { Doodle } from '../pages/doodle/doodle';
import { DataProvider } from '../providers/data/data';
import { Firebase } from '@ionic-native/firebase';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Login;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              public angularfire: AngularFireDatabase,
              public fb: Firebase,
              public data: DataProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.fb.getToken().then( token => {
        console.log(token);
        localStorage.setItem('pushToken',token);
        if(firebase.auth().currentUser!=null || firebase.auth().currentUser!=undefined ){
          // update token
          this.angularfire.object('/accounts/' + firebase.auth().currentUser.uid).update({
            pushToken: token
          });
        }
      }).catch( err=> {
        console.log(err);
      });
      this.fb.onTokenRefresh().subscribe(token =>{
        console.log(token);
        localStorage.setItem('pushToken',token);
        if(firebase.auth().currentUser!=null || firebase.auth().currentUser!=undefined ){
          // update token
          this.angularfire.object('/accounts/' + firebase.auth().currentUser.uid).update({
            pushToken: token
          });
        }
      });
      this.fb.hasPermission().then( data => {
        if(data.isEnabled != true){
          this.fb.grantPermission().then( data => {
            console.log(data);
          });
        }
      });
      this.fb.onNotificationOpen().subscribe( data => {
        console.log(data);
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Auth,User } from '@ionic/cloud-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Testing } from '../pages/testing/testing';
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
import { InformationPage } from '../pages/information/information';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Testing;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              public auth:Auth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


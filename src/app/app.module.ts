import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { NgCalendarModule } from 'ionic2-calendar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Testing } from '../pages/testing/testing';
import { Login } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Events } from '../pages/events/events';
import { Tasks } from '../pages/tasks/tasks';
import { Searcher } from '../pages/searcher/searcher';
import { Calendar } from '../pages/calendar/calendar';
import { SettingsPage } from '../pages/settings/settings';
import { TdlistPage } from '../pages/tdlist/tdlist';
import { TabsPage } from "../pages/tabs/tabs";
import { DecidePage } from "../pages/decide/decide";
import { TaskModalPage } from "../pages/tdlist/tdlist";

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'a9078208'
  }
};

export const firebaseConfig = {
  apiKey: "AIzaSyAbihXWCa40DwPvVcy8rL0SYEDY4bOMOsE",
  authDomain: "clandar-2e188.firebaseapp.com",
  databaseURL: "https://clandar-2e188.firebaseio.com",
  projectId: "clandar-2e188",
  storageBucket: "clandar-2e188.appspot.com",
  messagingSenderId: "1038439505893"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Testing,
    Login,
    RegisterPage,
    Events,
    Tasks,
    Searcher,
    Calendar,
    SettingsPage,
    TdlistPage,
    TabsPage,
    DecidePage,
    TaskModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    NgCalendarModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Testing,
    Login,
    RegisterPage,
    Events,
    Tasks,
    Searcher,
    Calendar,
    SettingsPage,
    TdlistPage,
    TabsPage,
    DecidePage,
    TaskModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { StatusBar } from '@ionic-native/status-bar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { NgCalendarModule } from 'ionic2-calendar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, FirebaseListObservable } from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { Testing } from '../pages/testing/testing';
import { Login } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Tasks } from '../pages/tasks/tasks';
import { Searcher } from '../pages/searcher/searcher';
import { Calendar } from '../pages/calendar/calendar';
import { SettingsPage } from '../pages/settings/settings';
import { TdlistPage } from '../pages/tdlist/tdlist';
import { TabsPage } from '../pages/tabs/tabs';
import { TaskModalPage } from '../pages/tdlist/tdlist';
import { VerifyPage } from '../pages/verify/verify';
import { ConversationPage } from '../pages/conversation/conversation';
import { InformationPage } from '../pages/information/information';

import { AlertProvider } from "../providers/alert/alert";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";
import { LoadingProvider } from "../providers/loading/loading";
import { LogoutProvider } from "../providers/auth-service/logout";

import * as firebase from 'firebase';
import { DataProvider } from '../providers/data/data';
import { ImageProvider } from '../providers/image/image';

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

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    Testing,
    Login,
    RegisterPage,
    Tasks,
    Searcher,
    Calendar,
    SettingsPage,
    TdlistPage,
    TabsPage,
    TaskModalPage,
    VerifyPage,
    ConversationPage,
    InformationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    NgCalendarModule,
    AngularFireModule.initializeApp(firebaseConfig, 'Clandar'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Testing,
    Login,
    RegisterPage,
    Tasks,
    Searcher,
    Calendar,
    SettingsPage,
    TdlistPage,
    TabsPage,
    TaskModalPage,
    VerifyPage,
    ConversationPage,
    InformationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlertProvider,
    AuthServiceProvider,
    LoadingProvider,
    LogoutProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    Camera,
    File,
    MediaCapture,
    ImageProvider
  ]
})
export class AppModule {}

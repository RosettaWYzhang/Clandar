import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';
import { Contacts } from '@ionic-native/contacts';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { Calendar } from '@ionic-native/calendar';
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
import { CalendarPage } from '../pages/calendar/calendar';
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
import { AddMemberPage } from '../pages/add-member/add-member';

import { FriendPipe } from '../pipes/friend';
import { SearchPipe } from '../pipes/search';
import { ConversationPipe } from '../pipes/conversation';
import { DateFormatPipe } from '../pipes/date';
import { ClubPipe } from '../pipes/club';

import { AlertProvider } from "../providers/alert/alert";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";
import { LoadingProvider } from "../providers/loading/loading";
import { LogoutProvider } from "../providers/auth-service/logout";

import * as firebase from 'firebase';
import { Firebase } from '@ionic-native/firebase';
import { DataProvider } from '../providers/data/data';
import { ImageProvider } from '../providers/image/image';
import { FirebaseProvider } from '../providers/firebase/firebase';

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
    CalendarPage,
    SettingsPage,
    TdlistPage,
    TabsPage,
    TaskModalPage,
    VerifyPage,
    ConversationPage,
    ChatPage,
    NewChatPage,
    InformationPage,
    ContactsPage,
    SearchPage,
    RequestsPage,
    UserInfoPage,
    ImageModalPage,
    NewClubPage,
    ClubPage,
    ClubsPage,
    ClubInfoPage,
    AddMemberPage,
    FriendPipe,
    ConversationPipe,
    SearchPipe,
    DateFormatPipe,
    ClubPipe
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
    CalendarPage,
    SettingsPage,
    TdlistPage,
    TabsPage,
    TaskModalPage,
    VerifyPage,
    ConversationPage,
    NewChatPage,
    ChatPage,
    InformationPage,
    ContactsPage,
    SearchPage,
    RequestsPage,
    UserInfoPage,
    ImageModalPage,
    NewClubPage,
    ClubPage,
    ClubsPage,
    ClubInfoPage,
    AddMemberPage
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
    Calendar,
    Contacts,
    Geolocation,
    Keyboard,
    File,
    MediaCapture,
    ImageProvider,
    Firebase,
    FirebaseProvider
  ]
})
export class AppModule {}

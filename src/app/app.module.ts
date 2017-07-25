import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { NgCalendarModule } from 'ionic2-calendar';

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
import { TodoModule } from '../pages/todo/todo.module';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'a9078208'
  }
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
    TdlistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    NgCalendarModule,
    TodoModule
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
    TdlistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

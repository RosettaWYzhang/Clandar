import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Testing } from '../pages/testing/testing';
import { Login } from '../pages/login/login';
import { Events } from '../pages/events/events';
import { Tasks } from '../pages/tasks/tasks';
import { Searcher } from '../pages/searcher/searcher';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Testing,
    Login,
    Events,
    Tasks,
    Searcher
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Testing,
    Login,
    Events,
    Tasks,
    Searcher
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

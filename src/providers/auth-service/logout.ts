import { Injectable } from '@angular/core';
import { App } from 'ionic-angular';
import { LoadingProvider } from '../loading/loading';
import * as firebase from 'firebase';

@Injectable()
export class LogoutProvider{

  constructor(public app: App, 
              public loading: LoadingProvider) {
    console.log("Initializing Logout Provider");
  }

  setApp(app){
    this.app = app;
  }

  doLogout(){
    this.loading.load();
    firebase.auth().signOut().then((success) => {
      this.app.getRootNav().popToRoot().then(() => {
        this.loading.dismiss();
        document.location.href = 'index.html';
      });
    });
  }

}
import { Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import { LoadingProvider } from '../loading/loading';
import { AlertProvider } from '../alert/alert';
import { Info } from '../../info';
import * as firebase from 'firebase';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  private loginUser:any;
  private navCtrl: NavController;
  constructor(public http: Http,
              public loading: LoadingProvider,
              public alert: AlertProvider,
              public zone: NgZone){
    console.log('Hello AuthServiceProvider Provider');

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        if(user["isAnonymous"]) {} 
        else {
          if (Info.emailVerification) {
            if (user["emailVerified"]) {
              //Goto Home Page.
              this.zone.run(() => {
                this.navCtrl.setRoot(Info.tabsPage, { animate: false });
              });
              //Since we're using a TabsPage an NgZone is required.
            } else {
              //Goto Verification Page.
              this.navCtrl.setRoot(Info.verifyPage, { animate: false });
            }
          } else {
            //Goto Home Page.
            this.zone.run(() => {
              this.navCtrl.setRoot(Info.tabsPage, { animate: false });
            });
            //Since we're using a TabsPage an NgZone is required.
          }
        }
      }
    })
  }

  setNavCtrl(navCtrl){
    this.navCtrl = navCtrl;
  }

  emailLogin(email,password){
    this.loading.load();
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then((success) => {
        this.loading.dismiss();
      })
      .catch((error) => {
        this.loading.dismiss();
        let code = error["code"];
        this.alert.showErrorMessage(code);
      });
  }

  emailRegister(email,password){
    this.loading.load();
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((success) => {
        //save user info to database
        this.loginUser = firebase.auth().currentUser;
        console.log("User: ",this.loginUser);
        firebase.database().ref('accounts/' + this.loginUser.uid).set({
          email: this.loginUser.email,
          userId: this.loginUser.uid,
          name: 'newUser',
          img: 'https://firebasestorage.googleapis.com/v0/b/clandar-2e188.appspot.com/o/profile.png?alt=media&token=22fd850b-d8bd-4926-80a4-c87b9032a938',
          description: 'No description yet :('          
        })
        .catch((error) => {
      	  console.error("User error",error);
        });
        this.loading.dismiss();
      })
      .catch((error) => {
        this.loading.dismiss();
        let code = error["code"];
        this.alert.showErrorMessage(code);
      });
  }

  sendPasswordReset(email) {
    this.loading.load();
    firebase.auth().sendPasswordResetEmail(email)
    .then((success) => {
      this.loading.dismiss();
      this.alert.showPasswordResetMessage(email);
    })
    .catch((error) => {
      this.loading.dismiss();
      let code = error["code"];
      this.alert.showErrorMessage(code);
    });
  }

}

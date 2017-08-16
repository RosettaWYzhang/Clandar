import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, App } from 'ionic-angular';
import { LogoutProvider } from '../../providers/auth-service/logout';
import { LoadingProvider } from '../../providers/loading/loading';
import { AlertProvider } from '../../providers/alert/alert';
import { AngularFireDatabase } from 'angularfire2/database';
import { Validator } from '../../validation';
import { Info } from "../../info";
import * as firebase from 'firebase';

/**
 * Generated class for the VerifyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html',
})
export class VerifyPage {
  private user: any;
  private alert;
  private emailVerified;
  private checkVerified;
  private isLoggingOut;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public app: App,
              public logoutProvider: LogoutProvider,
              public alertProvider: AlertProvider,
              public loadingProvider: LoadingProvider,
              public alertCtrl: AlertController,
              public angularfire: AngularFireDatabase) {
    this.logoutProvider.setApp(app);
  }

  ionViewDidLoad() {
    // Set our routeGuard variables to false, to not allow rereouting.
    this.emailVerified = false;
    this.isLoggingOut = false;
    // Get user data and send an email verification automatically.
    this.getUserData();
    this.sendEmailVerification();
    // Create the emailVerification checker.
    var that = this;
    that.checkVerified = setInterval(function() {
      firebase.auth().currentUser.reload();
      if (firebase.auth().currentUser.emailVerified) {
          clearInterval(that.checkVerified);
          that.emailVerified = true;
          that.alert = that.alertCtrl.create({
          title: 'Email Confirmed!', 
          subTitle: 'Congratulations! Your email has been verified!',
          buttons: [{
            text: 'OK',
            handler: () => {
              that.navCtrl.setRoot(Info.tabsPage);
            }
          }]
        }).present();
      }
    }, 1000);
  }

  ionViewCanLeave(): boolean {
    // routeGuard to prevent from leaving this view unless email is verified, or user is logging out.
    if (this.emailVerified || this.isLoggingOut) {
      return true;
    } else {
      return false;
    }
  }

  // Get user data from the logged in Firebase user to show on html markup.
  getUserData() {
    let user = firebase.auth().currentUser;
    var userId, name, provider, img, email;
    let providerData = user.providerData[0];

    userId = user.uid;

    // Retrieve name from Firebase user
    if (user.displayName || providerData.displayName) {
      name = user.displayName;
      name = providerData.displayName;
    } else {
      name = "newUser";
    }

    // Retrieve provider from Firebase user
    if (providerData.providerId == 'password') {
      provider = "Firebase";
    } else if (providerData.providerId == 'facebook.com') {
      provider = "Facebook";
    } else if (providerData.providerId == 'google.com') {
      provider = "Google";
    }

    // Retrieve photoURL from Firebase user
    if (user.photoURL || providerData.photoURL) {
      img = user.photoURL;
      img = providerData.photoURL;
    } else {
      img = "assets/images/profile.png";
    }

    // Retrieve email from Firebase user
    email = user.email;

    // Set to user variable for our markup html
    this.user = {
      userId: userId,
      name: name,
      provider: provider,
      img: img,
      email: email,
      pushToken: localStorage.getItem('pushToken')
    };
  }

  // Send an email verification to the user's email.
  sendEmailVerification(){
    this.loadingProvider.load();
    firebase.auth().currentUser.sendEmailVerification()
      .then((success) => {
        this.alertProvider.showEmailVerificationSentMessage(firebase.auth().currentUser.email);
        this.loadingProvider.dismiss();
      });
  }

  // Set the user email
  setEmail() {
    this.alert = this.alertCtrl.create({
      title: 'Change Email Address',
      message: "Please enter a new email address.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Your Email Address',
          value: firebase.auth().currentUser.email
        }
      ],
      buttons: [
        
        {
          text: 'Save',
          handler: data => {
            let email = data["email"];
            // Check if entered email is different from the current email
            if (firebase.auth().currentUser.email != email) {
              // Check if email is valid.
              if (Validator.profileEmailValidator.pattern.test(email)) {
                this.loadingProvider.load();
                // Update email on Firebase
                firebase.auth().currentUser.updateEmail(email)
                  .then((success) => {
                    Validator.profileEmailValidator.pattern.test(email);
                    this.loadingProvider.dismiss();
                    // Clear the existing interval because when we call ionViewDidLoad, another interval will be created.
                    clearInterval(this.checkVerified);
                    // Call ionViewDidLoad again to update user on the markup and automatically send verification mail.
                    this.ionViewDidLoad();
                    // Update the user data on the database if it exists.
                    firebase.database().ref('accounts/' + firebase.auth().currentUser.uid).once('value')
                      .then((account) => {
                        if (account.val()) {
                          this.angularfire.object('/accounts/' + firebase.auth().currentUser.uid).update({
                            email: email
                          });
                        }
                      });
                  })
                  .catch((error) => {
                    //Show error
                    this.loadingProvider.dismiss();
                    let code = error["code"];
                    this.alertProvider.showErrorMessage(code);
                    if (code == 'auth/requires-recent-login') {
                      this.logoutProvider.doLogout();
                    }
                  });
              } else {
                this.alertProvider.showErrorMessage('profile/invalid-email');
              }
            }
          }
        },
        {
          text: 'Cancel',
          handler: data => { }
        }
      ]
    }).present();
  }

  // Clear the interval, and log the user out.
  logout() {
    this.alert = this.alertCtrl.create({
      title: 'Confirm Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        
        {
          text: 'Logout',
          handler: data => {
            // Clear the verification check interval.
            clearInterval(this.checkVerified);
            // Set our routeGuard to true, to enable changing views.
            this.isLoggingOut = true;
            // Log the user out.
            this.logoutProvider.doLogout();
          }
        },
        {
          text: 'Cancel'
        }
      ]
    }).present();
  }
}

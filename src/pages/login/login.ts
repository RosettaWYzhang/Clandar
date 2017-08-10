import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, Platform, AlertController, LoadingController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from "angularfire2/auth";
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Validator } from '../../validation';
import * as firebase from 'firebase';

declare var window: any;

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  private loginForm: FormGroup;
  private alert:any;
  private email: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public authService: AuthServiceProvider,
              public alertCtrl: AlertController){
                authService.setNavCtrl(navCtrl);
                this.loginForm = formBuilder.group({
                  email: Validator.emailValidator,
                  password: Validator.passwordValidator
                });
              } 

  login(){
    console.log('process login');
    /*let loader = this.loadingCtrl.create({
      content: "Logging in..."
    });
    loader.present();*/
    this.authService.emailLogin(this.loginForm.value["email"],this.loginForm.value["password"]);
  }

  register() {
    console.log("go to register page");
    this.navCtrl.push(RegisterPage);
  }

  forgetPassword(){
    console.log(this.loginForm.value["email"]);
    this.alert = this.alertCtrl.create({
      title: 'Reset Password',
      message: 'Please Enter Your Email Address',
      inputs: [
        {
          name: 'Email',
          placeholder: ''
        }
      ],
      buttons: [
        {
          text: 'Confirm',
          handler: data => {
            let email = data["Email"];
            this.authService.sendPasswordReset(email);
            this.loginForm.reset();    
          }
        },
        {
          text: 'Cancel',
          handler: data => {}
        }
      ]
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}

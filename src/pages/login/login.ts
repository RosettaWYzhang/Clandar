import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, Platform, AlertController, LoadingController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home'; 

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
  email: string;
  password: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private platform: Platform,
              public auth: Auth,
              public alertCtrl: AlertController){} 

  login(){
    console.log('process login');
    /*let loader = this.loadingCtrl.create({
      content: "Logging in..."
    });
    loader.present();*/
    
    this.auth.login('basic', {'email':this.email, 'password':this.password}).then(() => {
      //loader.dismissAll();
      this.navCtrl.push(HomePage);        
    }, (err) => {
      //loader.dismissAll();
      console.log(err.message);

      let errors = '';
      if(err.message === 'UNPROCESSABLE ENTITY') errors += 'Email isn\'t valid.<br/>';
      if(err.message === 'UNAUTHORIZED') errors += 'Password is required.<br/>';

      let alert = this.alertCtrl.create({
        title:'Login Error', 
        subTitle:errors,
        buttons:['OK']
      });
      alert.present();
    });
  }

  register() {
    console.log("go to register page");
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}

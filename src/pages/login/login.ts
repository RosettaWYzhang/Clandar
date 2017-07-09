import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { RegisterPage } from '../register/register';

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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private platform: Platform) { 
  } 

  public login() {

  }

  public register() {
    this.navCtrl.push(RegisterPage);
  }
 
  public facebookLogin(): Promise<any> {
    return;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { Login } from '../login/login';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  
  name: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public auth: Auth,
              public user: User) {
    this.name = this.user.details.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
}

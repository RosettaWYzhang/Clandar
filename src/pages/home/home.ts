import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { Login } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: string;
  constructor(public navCtrl: NavController,
              public auth: Auth,
              public user: User) {
    this.name = this.user.details.name;
  }
  
  doLogout(){
    console.log("Logging out");
    this.auth.logout();
    this.navCtrl.push(Login);
  }

}

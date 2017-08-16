import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App} from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { LogoutProvider } from '../../providers/auth-service/logout';
import { DataProvider } from '../../providers/data/data';
import { LoadingProvider } from '../../providers/loading/loading';
import { Login } from '../login/login';
import { InformationPage } from '../information/information';
import { ContactsPage } from '../contacts/contacts';

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
  private alert: any;
  private user: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App,
              public logoutProvider: LogoutProvider,
              public dataProvider: DataProvider,
              public loadingProvider: LoadingProvider,
              public alertCtrl: AlertController) {
    this.logoutProvider.setApp(app);
  }

  ionViewDidLoad() {
    this.loadingProvider.load();
    this.dataProvider.getCurrentUser().subscribe((user) => {
      this.loadingProvider.dismiss();
      this.user = user;
      console.log(this.user);
      //console.log(this.user["userId"]);
      console.log(this.user["userId"]);
    });
    
    console.log('ionViewDidLoad SettingsPage');
  }

  gotoInfo(){
    this.app.getRootNav().push(InformationPage);
  }

  gotoContacts(){
    this.app.getRootNav().push(ContactsPage);
  }

  doLogout(){
    this.alert = this.alertCtrl.create({
      title: 'Confirm Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        
        {
          text: 'Logout',
          handler: data => {
            // Log the user out.
            this.logoutProvider.doLogout();
            this.navCtrl.push(Login);
          }
        },
        {
          text: 'Cancel'
        }
      ]
    }).present();
  }
}

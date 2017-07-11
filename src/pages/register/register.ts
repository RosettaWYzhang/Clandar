import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
<<<<<<< HEAD
import { HomePage } from '../home/home';
import { Login } from '../login/login';
=======
import { HomePage } from '../home/home'
>>>>>>> 6d5bc54c44395de4627585f8c0e5bede08dbb7b2

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  name: string;
  email: string;
  password: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public auth: Auth,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {}

  doRegister(){
    console.log('process register');

    //register information
    let details: UserDetails = {'email': this.email, 'password':this.password, 'name':this.name};
    console.log(details);

    /*let loader = this.loadingCtrl.create({
      content: "Registering your account..."
    });
    loader.present();*/
    
    //Log in if register successfully
    this.auth.signup(details).then(() => {
      console.log('ok signup');
<<<<<<< HEAD
      this.navCtrl.push(Login);
=======
>>>>>>> 6d5bc54c44395de4627585f8c0e5bede08dbb7b2
    //Handle error
    }, (err:IDetailedError<string[]>) => {
      //loader.dismissAll();
      let errors = '';
      for(let e of err.details) {
        console.log(e);
        if(e === 'required_email') errors += 'Email is required.<br/>';
        if(e === 'required_password') errors += 'Password is required.<br/>';
        if(e === 'conflict_email') errors += 'A user with this email already exists.<br/>';
        //don't need to worry about conflict_username
        if(e === 'invalid_email') errors += 'Your email address isn\'t valid.';
      }
      let alert = this.alertCtrl.create({
        title:'Register Error', 
        subTitle:errors,
        buttons:['OK']
      });
      alert.present();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}

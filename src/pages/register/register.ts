import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { Login } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Validator } from '../../validation';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  email: any;
  password: any;
  private registerForm: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public authService: AuthServiceProvider,
              public formBuilder: FormBuilder){
                this.authService.setNavCtrl(this.navCtrl);
                this.registerForm = formBuilder.group({
                  email: Validator.emailValidator,
                  password: Validator.passwordValidator
                });
  }

  doRegister(){
    this.authService.emailRegister(this.registerForm.value["email"],this.registerForm.value["password"]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}

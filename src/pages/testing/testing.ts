import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'; 
import { Login } from '../login/login';
import { Events } from '../events/events';
import { Tasks } from '../tasks/tasks';
import { Searcher } from '../searcher/searcher';
/**
 * Generated class for the Testing page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-testing',
  templateUrl: 'testing.html',
})
export class Testing {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Testing');
  }

  gotoHomePage() {
    this.navCtrl.push(HomePage);
  }

  gotoLIPage() {
    this.navCtrl.push(Login);
  }

  gotoEMPage(){
    this.navCtrl.push(Events);
  }

  gotoTMPage(){
    this.navCtrl.push(Tasks);   
  }

  gotoESPage(){
    this.navCtrl.push(Searcher);
  }
}

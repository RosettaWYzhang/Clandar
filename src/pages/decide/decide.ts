import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tasks } from "../tasks/tasks";
import { Events } from "../events/events";

/**
 * Generated class for the DecidePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-decide',
  templateUrl: 'decide.html',
})
export class DecidePage {
  tasks:any;
  events:any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
    this.tasks = Tasks;
    this.events = Events;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DecidePage');
  }

}

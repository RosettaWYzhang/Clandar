import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import * as moment from 'moment';
/**
 * Generated class for the Tasks page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class Tasks {
  minDate = new Date().toISOString();
  email:string;
  name:string;
  due:any;
  note:any;
  reminder:boolean;
  urgency:any;
  tasks:FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public auth: Auth,
              public user: User,
              public afDB: AngularFireDatabase) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.due = preselectedDate;
    this.email = this.user.details.email;    
    this.reminder = false;     
    this.urgency = 2;       
    this.tasks = afDB.list('/tasks',{
      query:{
        orderByChild: 'email',
        equalTo: this.email
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tasks');
  }

  save(){
    this.tasks.push({
      due: this.due,
      dueIn: moment(this.due).fromNow(),
      email: this.email,
      hide: true,
      name: this.name,
      note: this.note,
      reminder: this.reminder,
      urgency:this.urgency
    });
    this.navCtrl.push(TabsPage);
  }

  cancel(){
    this.navCtrl.push(TabsPage);
  }

  

}

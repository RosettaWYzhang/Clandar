import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DataProvider } from '../../providers/data/data';
import * as firebase from 'firebase';

/**
 * Generated class for the Tasks page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-doodle',
  templateUrl: 'doodle.html',
})
export class Doodle {
  //minDate = new Date().toISOString();
  email:string;
  name:string;
  due:any;
  note:any;
  reminder:boolean;
  urgency:any;
  doodleUrl:string;
  //tasks:FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,) {
    // let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    // this.due = preselectedDate;
    //this.email = firebase.auth().currentUser.email;  
    this.reminder = false;     
    this.urgency = 2;       
    // this.tasks = afDB.list('/tasks',{
    //   query:{
    //     orderByChild: 'email',
    //     equalTo: this.email
    //   }
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tasks');
  }

  url(){
    this.doodleUrl = "http://doodle.com/create?type=date&locale=en&title="+this.name+"&name="+"nimabi"+"&20170902=815||1015||1115&20170904=morning"+"&eMailAddress="+"ybcleo "+"%40"+"foxmail.com"+"&description="+this.note;
    let alert = this.alertCtrl.create({
        title: this.doodleUrl,
        subTitle: 'nimabi',
        buttons: ['Dismiss']
      });
      alert.present();
      console.log(this.doodleUrl);
  }
  // save(){
  //   if (this.note==undefined){
  //     let alert = this.alertCtrl.create({
  //       title: 'Note is empty',
  //       subTitle: 'Please fill in the note',
  //       buttons: ['Dismiss']
  //     });
  //     alert.present();
  //   }
  //   else if (this.name==undefined){
  //     let alert = this.alertCtrl.create({
  //       title: 'Name is empty',
  //       subTitle: 'Please fill in the name',
  //       buttons: ['Dismiss']
  //     });
  //     alert.present();
  //   }
  //   else {
  //     this.tasks.push({
  //       due: this.due,
  //       email: this.email,
  //       hide: true,
  //       name: this.name,
  //       note: this.note,
  //       reminder: this.reminder,
  //       urgency: this.urgency,
  //       finished: false,
  //       overdue: false
  //     });
  //   this.navCtrl.parent.select(1);
  //   }
  // }

  cancel(){
    //this.navCtrl.push(TabsPage);
    this.navCtrl.parent.select(1);
  }

  

}

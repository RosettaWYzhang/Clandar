import { Component, ViewChild } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams, MenuController, Nav, ModalController, ViewController, ActionSheetController} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Tasks } from "../tasks/tasks";
import * as moment from 'moment';
import * as firebase from 'firebase';
import { Observable } from "rxjs";

/**
 * Generated class for the TdlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tdlist',
  templateUrl: 'tdlist.html',
})
export class TdlistPage {

  @ViewChild(Nav) nav: Nav;
  length:any;
  taskPage:any;
  email:any;
  myDate: String = new Date().toISOString();
  tasks: FirebaseListObservable<any>;
  events: FirebaseListObservable<any>;
  actionSheet: any;
  private date = moment();

  constructor(public navCtrl: NavController, 
              public menuController: MenuController,
              public modalCtrl: ModalController,
              public ASCtrl: ActionSheetController,
              public platform: Platform,
              public afDB: AngularFireDatabase) {
    length = 2;        
    this.taskPage = Tasks;     
    this.email = firebase.auth().currentUser.email;      
    this.tasks = afDB.list('/tasks',{
      query:{
        orderByChild: 'email',
        equalTo: this.email
      }
    });

    let source = Observable.interval(150);
    source.subscribe((x) => {
      this.date = moment();
    });
  }

  collapse(taskID,hide){
    this.tasks.update(taskID,{
      hide:false
    });
  }

  hiding(taskID,hide){
    this.tasks.update(taskID,{
      hide:true
    });   
  }

  edit(task){
    console.log("edit");
    let modal = this.modalCtrl.create(TaskModalPage,{
      tid: task.$key,
      tdue: task.due,
      tdueIn: task.dueIn,
      temail: task.email,
      tname: task.name,
      tnote: task.note,
      treminder: task.reminder,
      turgency: task.urgency
    });
    console.log("tid: " + task.$key +
      ",tdue: " + task.due +
      ",temail: " + task.email +
      ",tname: " + task.name +
      ",tnote: " + task.note +
      ",treminder: " + task.reminder +
      ",turgency: " + task.urgency      
    );
    modal.present();
  }

  isBefore(time){
    if(moment(time,"YYYY-MM-DD HH:mm").isBefore(this.date))
      return true;
    else return false;
  }

  more(task){
    if (task.finished == false){
      this.actionSheet = this.ASCtrl.create({
        title: 'Actions',
        buttons:[
          {
            text: 'Delete',
            role: 'destructive',
            icon: !this.platform.is('ios') ? 'trash' : null,
            handler: () => {
              console.log('Delete clicked');
              this.tasks.remove(task.$key);
              console.log('Task deleted');
            }
          },
          {
            text: 'Mark as finished',
            icon: !this.platform.is('ios') ? 'checkmark' : null,
            handler: () => {
              console.log('Marked');
              this.tasks.update(task.$key,{
                finished: true
              })
            }
          },
          {
            text: 'Cancel',
            role: 'cancel', // will always sort to be on the bottom
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });}
    else {
      this.actionSheet = this.ASCtrl.create({
        title: 'Actions',
        buttons:[
          {
            text: 'Delete',
            role: 'destructive',
            icon: !this.platform.is('ios') ? 'trash' : null,
            handler: () => {
              console.log('Delete clicked');
              this.tasks.remove(task.$key);
              console.log('Task deleted');
            }
          },
          {
            text: 'Mark as in progress',
            icon: !this.platform.is('ios') ? 'checkmark' : null,
            handler: () => {
              console.log('Marked');
              this.tasks.update(task.$key,{
                finished: false
              })
            }
          },
          {
            text: 'Cancel',
            role: 'cancel', // will always sort to be on the bottom
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
    }
    this.actionSheet.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TdlistPage');
  }
}

@Component({
  template:`
  <ion-header>
    <ion-toolbar>
      <ion-title>
        Edit
      </ion-title>
      <ion-buttons start>
        <button ion-button (click)="dismiss()">
          <span ion-text color="primary" showWhen="ios">Cancel</span>
          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
        </button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content class="content">
    <ion-list no-lines style="margin-top:4px"> 
      <ion-item>
        <ion-label>
          <h2 style="margin-left:-1px" style="font-weight:bold;color:rgb(40,40,40)">Name</h2>
        </ion-label>
        <ion-input [(ngModel)]="tname" type="text" placeholder="{{tname}}"></ion-input>
      </ion-item>      

      <ion-item>
        <ion-label>
          <h2 style="margin-left:-1px" style="font-weight:bold;color:rgb(40,40,40)">Due</h2>
        </ion-label>
        <ion-datetime [(ngModel)]="tdue" placeholder="{{tdue}}" displayFormat="YYYY-MM-DD HH:mm" pickerFormat="DDD DD MMMM YYYY HH:mm"></ion-datetime>
      </ion-item>

      <ion-item>
        <ion-icon name="calendar" item-start style="color:rgb(83,184,229)"></ion-icon>
        <h2 class="titles" style="background-color:rgb(83,184,229)">Add Note</h2>
        <ion-input [(ngModel)]="tnote" placeholder="{{tnote}}" type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-toggle [(ngModel)]="treminder" color="secondary" checked="{{treminder}}" style="margin-left:-10px"></ion-toggle>
        <ion-label>
          <h2 class="titles" style="background-color:MediumSeaGreen;border-radius: 8px;padding: 4px 8px">Reminder</h2>
        </ion-label>
        <ion-icon name="alarm" item-start style="color:MediumSeaGreen"></ion-icon>
      </ion-item>

      <ion-item>
        <ion-icon name="alert" item-start style="color:red;"></ion-icon>
        <ion-label>
          <h2 class="titles" style="background-color:red;padding: 5px;border-radius: 8px">Urgency</h2>
        </ion-label>
        <ion-range [(ngModel)]="turgency" color="danger" min="1" max="4" step="1" snaps="true" style="margin-top:-20px"></ion-range>
      </ion-item>
    </ion-list>

    <div class="text-center">
      <button ion-button round end color="light" (click)="save()">Save</button>
    </div>
  </ion-content>`
})

export class TaskModalPage{
  tdueIn: String;
  tid: any;
  email: any;
  tname: string;
  tdue:any;
  tnote:any;
  treminder:boolean;
  turgency:any;
  tasks:any;
  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public afDB: AngularFireDatabase){
    this.email = firebase.auth().currentUser.email;
    this.tname = this.navParams.get('tname');
    this.tdue = this.navParams.get('tdue');
    this.tnote = this.navParams.get('tnote');
    this.treminder = this.navParams.get('treminder');
    this.turgency = this.navParams.get('turgency');
    this.tid = this.navParams.get('tid');
    this.tasks = afDB.list('/tasks',{
      query:{
        orderByChild: 'email',
        equalTo: this.email
      }
    });
  }

  save(){
    this.tasks.update(this.tid,{
      name: this.tname,
      due: this.tdue,
      note: this.tnote,
      reminder: this.treminder,
      urgency: this.turgency
    });
    console.log("tid: " + this.tid +
      ",tdue: " + this.tdue +
      ",temail: " + this.email +
      ",tname: " + this.tname +
      ",tnote: " + this.tnote +
      ",treminder: " + this.treminder +
      ",turgency: " + this.turgency);
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
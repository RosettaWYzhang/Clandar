import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoadingProvider } from '../../providers/loading/loading';
import { DataProvider } from '../../providers/data/data';
import * as firebase from 'firebase';

/**
 * Generated class for the AdminModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-modal',
  templateUrl: 'admin-modal.html',
})
export class AdminModalPage {
  private admins:any;
  private members:any;
  private searchMember:any;
  private clubId:any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afDB: AngularFireDatabase,
              public dataProvider: DataProvider,
              public loadProvider: LoadingProvider){
    this.searchMember = '';
    this.admins = this.navParams.get("admins");
    this.members = this.navParams.get("members");
    this.clubId = this.navParams.get("clubId");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminModalPage');
    console.log('Admins: '+this.admins);
    console.log('Admins Length: '+this.admins.length);
    for (var i=0;i<this.admins.length;i++){
      console.log('admin '+i+': '+this.admins[i]+' admin $key '+i+': '+this.admins[i].$key);
    }
    for (var i=0;i<this.admins.length;i++){
      console.log('admin info '+i+': '+this.adminInfo(this.admins[i]).name);
    }
    for (var i=0;i<this.members.length;i++){
      console.log('member info '+i+': '+this.memberInfo(this.members[i]));
    }    
    for (var i=0;i<this.members.length;i++){
      console.log('member '+i+': '+this.members[i]+' member $key '+i+': '+this.members[i].$key);
    }
    console.log('members: '+this.members);
  }

  inAdmins(member){
    for (var i=0;i<this.admins.length;i++){
      if (this.admins[i]===member){
        return true;
      }
    }
    return false;
  }

  adminInfo(adminId){
    var adminInfo;
    this.dataProvider.getUser(adminId).subscribe((admin)=>{
      adminInfo = admin;
    });
    return adminInfo;
  }

  isCreator(uid){
    return (firebase.auth().currentUser.uid===uid);
  }

  memberInfo(memberId){
    var memberInfo;
    this.dataProvider.getUser(memberId).subscribe((member)=>{
      memberInfo = member;
    });
    return memberInfo;
  }

  addToAdmins(member){
    this.admins.push(member);
  }

  removeFromAdmins(member){
    var index = -1;
    for (var i = 1; i < this.admins.length; i++) {
      if (this.admins[i] == member) {
        index = i;
      }
    }
    if (index > -1) {
      this.admins.splice(index, 1);
    }
  }



  done(){
    this.loadProvider.load();
    this.afDB.object('/clubs/'+this.clubId).update({
      administrators: this.admins
    });
    for (var i=0;i<this.admins.length;i++){
      var newAdminedClub = true;
      var hasAdminedClub = false;
      var addClub;
      this.dataProvider.getUser(this.admins[i]).subscribe((user)=>{
        
        if(user.adminedClubs){
          addClub = user.adminedClubs;
          hasAdminedClub = true;
          for (var j=0;j<user.adminedClubs.length;j++){
            if (user.adminedClubs[j]===this.clubId){
              newAdminedClub = false;
              break;
            }
          }
        }
      });
      if (hasAdminedClub){
        if (newAdminedClub===true){
          addClub.push(this.clubId);
          this.afDB.object('/accounts/'+this.admins[i]+'/adminedClubs/').update(addClub);
        }
      }
      else {
        this.afDB.object('/accounts/'+this.admins[i]).update({
          adminedClubs: [this.clubId]
        });
      }
    }

    if(this.members){
      for (var j=0;j<this.members.length;j++){
        if (!this.inAdmins(this.members[j])){
          var index = -1;
          var toAddAdminedClubs:any;
          this.dataProvider.getUser(this.members[j]).subscribe((member)=>{
            if(member.adminedClubs){
              toAddAdminedClubs = member.adminedClubs;
              for (var k=0;k<member.adminedClubs.length;k++){
                if (member.adminedClubs[k]===this.clubId){
                  console.log(member);
                  console.log(toAddAdminedClubs);
                  toAddAdminedClubs.splice(k,1);
                  console.log(toAddAdminedClubs);
                }
              }
            }
          });
          if (toAddAdminedClubs){
            this.afDB.object('/accounts/'+this.members[j]+'/adminedClubs/').set(toAddAdminedClubs);
          }
        }
      }
    }
    this.loadProvider.dismiss();
    this.navCtrl.pop();
  }

  cancel(){
    this.navCtrl.pop();
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { RequestsPage } from '../requests/requests';
import { SearchPage } from '../search/search';
import { UserInfoPage } from '../user-info/user-info';
import { DataProvider } from '../../providers/data/data';
import { LoadingProvider } from '../../providers/loading/loading';
import * as firebase from 'firebase';

/**
 * Generated class for the ContactsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  private friends: any;
  private friendRequests: any;
  private friendSearch: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public app: App,
              public loadingProvider: LoadingProvider,
              public dataProvider: DataProvider){
  }

  ionViewDidLoad() {
    this.friendSearch = '';
    this.loadingProvider.load();
    this.dataProvider.getRequests(firebase.auth().currentUser.uid).subscribe((requests) => {
      this.friendRequests = requests.friendRequests;
    });
    this.dataProvider.getCurrentUser().subscribe((user) => {
      if(user.friends) {
        for (let i=0; i<user.friends.length; i++) {
          this.dataProvider.getUser(user.friends[i]).subscribe((friend) => {
            this.updateFriends(friend);
          });
        }
      } 
      else {
        this.friends = [];
      }
      this.loadingProvider.dismiss();
    });
    console.log('ionViewDidLoad ContactsPage');
  }

  //use stack to store friends
  updateFriends(friend){
    if(this.friends){
      let index = -1;
      for (let i=0;i<this.friends.length;i++){
        if (this.friends[i].$key == friend.$key){
          index = i;
        }
      }
      //friend exists in friends 
      if (index > -1) {
        this.friends[index] = friend;
      }
      //friend doesn't exist in friends
      else {
        this.friends.push(friend);
      }
    }
    else {
      this.friends = [friend];
    }
  }

  manageRequests(){
    this.navCtrl.push(RequestsPage);
  }

  searchPeople(){
    this.navCtrl.push(SearchPage);
  }

  viewUser(userId) {
    this.app.getRootNav().push(UserInfoPage, { userId: userId });
  }

  message(userId) {
    this.app.getRootNav().push(ChatPage, { userId: userId });
  }

  // Back
  back() {
    this.navCtrl.pop();
  }

}

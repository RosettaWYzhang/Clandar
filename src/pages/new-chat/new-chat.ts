import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { ChatPage } from '../chat/chat';
import { DataProvider } from '../../providers/data/data';
import { LoadingProvider } from '../../providers/loading/loading';

@Component({
  selector: 'page-new-chat',
  templateUrl: 'new-chat.html'
})
export class NewChatPage {
  private friends: any;
  private searchFriend: any;
  // NewMessagePage
  // This is the page where the user are asked to select a friend whom they want to start a conversation with.
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public dataProvider: DataProvider,
    public loadingProvider: LoadingProvider) { }

  ionViewDidLoad() {
    // Initialize
    this.searchFriend = '';
    this.loadingProvider.load();

    // Get user's friends.
    this.dataProvider.getCurrentUser().subscribe((account) => {
      if (account.friends) {
        for (var i = 0; i < account.friends.length; i++) {
          this.dataProvider.getUser(account.friends[i]).subscribe((friend) => {
            this.addOrUpdateFriend(friend);
          });
        }
      } else {
        this.friends = [];
      }
      this.loadingProvider.dismiss();
    });
  }

  // Back
  back() {
    this.navCtrl.pop();
  }

  // Add or update friend for real-time sync.
  addOrUpdateFriend(friend) {
    if (!this.friends) {
      this.friends = [friend];
    } else {
      var index = -1;
      for (var i = 0; i < this.friends.length; i++) {
        if (this.friends[i].$key == friend.$key) {
          index = i;
        }
      }
      if (index > -1) {
        this.friends[index] = friend;
      } else {
        this.friends.push(friend);
      }
    }
  }

  // Search people.
  searchPeople() {
    this.navCtrl.push(SearchPage);
  }

  // Open chat with this user.
  message(userId) {
    this.navCtrl.push(ChatPage, { userId: userId });
  }
}
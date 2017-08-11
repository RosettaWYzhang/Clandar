import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoadingProvider } from '../../providers/loading/loading';
import { DataProvider } from '../../providers/data/data';
import { NewChatPage } from '../new-chat/new-chat';
import { ChatPage } from '../chat/chat';
import * as firebase from 'firebase';

/**
 * Generated class for the ConversationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {
  private conversations: any;
  private updateDateTime: any;
  private searchFriend: any;
  // MessagesPage
  // This is the page where the user can see their current conversations with their friends.
  // The user can also start a new conversation.
  constructor(public navCtrl: NavController, public navParams: NavParams, public angularfire: AngularFireDatabase, public loadingProvider: LoadingProvider, public app: App, public dataProvider: DataProvider) { }

  ionViewDidLoad() {
    this.searchFriend = '';
    this.loadingProvider.load();
    if(firebase.auth().currentUser!=null || firebase.auth().currentUser!=undefined ){
      // update token
      this.angularfire.object('/accounts/' + firebase.auth().currentUser.uid).update({
        pushToken: localStorage.getItem('pushToken')
      });
    }
    // Get info of conversations of current logged in user.
    this.dataProvider.getConversations().subscribe((conversations) => {
      if (conversations.length > 0) {
        conversations.forEach((conversation) => {
          if (conversation.$exists()) {
            // Get conversation partner info.
            this.dataProvider.getUser(conversation.$key).subscribe((user) => {
              conversation.friend = user;
              // Get conversation info.
              this.dataProvider.getConversation(conversation.conversationId).subscribe((obj) => {
                // Get last message of conversation.
                let lastMessage = obj.messages[obj.messages.length - 1];
                conversation.date = lastMessage.date;
                conversation.sender = lastMessage.sender;
                // Set unreadMessagesCount
                conversation.unreadMessagesCount = obj.messages.length - conversation.messagesRead;
                // Process last message depending on messageType.
                if (lastMessage.type == 'text') {
                  if (lastMessage.sender == firebase.auth().currentUser.uid) {
                    conversation.message = 'You: ' + lastMessage.message;
                  } else {
                    conversation.message = lastMessage.message;
                  }
                } else {
                  if (lastMessage.sender == firebase.auth().currentUser.uid) {
                    conversation.message = 'You sent a photo message.';
                  } else {
                    conversation.message = 'has sent you a photo message.';
                  }
                }
                // Add or update conversation.
                this.addOrUpdateConversation(conversation);
              });
            });
          }
        });
        this.loadingProvider.dismiss();
      } else {
        this.conversations = [];
        this.loadingProvider.dismiss();
      }
    });

    // Update conversations' last active date time elapsed every minute based on Moment.js.
    var that = this;
    if (!that.updateDateTime) {
      that.updateDateTime = setInterval(function() {
        if (that.conversations) {
          that.conversations.forEach((conversation) => {
            let date = conversation.date;
            conversation.date = new Date(date);
          });
        }
      }, 60000);
    }
  }

  // Add or update conversation for real-time sync based on our observer, sort by active date.
  addOrUpdateConversation(conversation) {
    if (!this.conversations) {
      this.conversations = [conversation];
    } else {
      var index = -1;
      for (var i = 0; i < this.conversations.length; i++) {
        if (this.conversations[i].$key == conversation.$key) {
          index = i;
        }
      }
      if (index > -1) {
        this.conversations[index] = conversation;
      } else {
        this.conversations.push(conversation);
      }
      // Sort by last active date.
      this.conversations.sort((a: any, b: any) => {
        let date1 = new Date(a.date);
        let date2 = new Date(b.date);
        if (date1 > date2) {
          return -1;
        } else if (date1 < date2) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }

  // New conversation.
  newMessage() {
    this.app.getRootNav().push(NewChatPage);
  }

  // Open chat with friend.
  message(userId) {
    this.app.getRootNav().push(ChatPage, { userId: userId });
  }

  // Return class based if conversation has unreadMessages or not.
  hasUnreadMessages(conversation) {
    if (conversation.unreadMessagesCount > 0) {
      return 'bold';
    } else
      return '';
  }
}
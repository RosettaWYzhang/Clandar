import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { LoadingProvider } from '../../providers/loading/loading';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertProvider } from '../../providers/alert/alert';

@Component({
  selector: 'page-add-members',
  templateUrl: 'add-members.html'
})
export class AddMembersPage {
  private clubId: any;
  private club: any;
  private clubMembers: any;
  private friends: any;
  private searchFriend: any;
  private toAdd: any;
  private alert: any;
  private user: any;
  // AddMemberPage
  // This is the page where the user can add their friends to an existing club.
  // The user can only add their friends to the club.
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public dataProvider: DataProvider,
              public loadingProvider: LoadingProvider, 
              public angularfire: AngularFireDatabase, 
              public alertCtrl: AlertController,
              public alertProvider: AlertProvider) { }

  ionViewDidLoad() {
    // Initialize
    this.clubId = this.navParams.get('clubId');
    this.searchFriend = '';
    this.toAdd = [];
    this.loadingProvider.load();

    // Get user information for system message sent to the club when a member was added.
    this.dataProvider.getCurrentUser().subscribe((user) => {
      this.user = user;
    });

    // Get club information
    this.dataProvider.getClub(this.clubId).subscribe((club) => {
      this.club = club;
      this.clubMembers = null;
      // Get club members
      if (club.members) {
        club.members.forEach((memberId) => {
          this.dataProvider.getUser(memberId).subscribe((member) => {
            this.addOrUpdateMember(member);
          });
        });
        // Get user's friends to add
        this.dataProvider.getCurrentUser().subscribe((account) => {
          if (account.friends) {
            for (var i = 0; i < account.friends.length; i++) {
              this.dataProvider.getUser(account.friends[i]).subscribe((friend) => {
                // Only friends that are not yet a member of this club can be added.
                if (!this.isMember(friend))
                  this.addOrUpdateFriend(friend);
              });
            }
            if (!this.friends) {
              this.friends = [];
            }
          } else {
            this.friends = [];
          }
        });
      }
      this.loadingProvider.dismiss();
    });
  }

  // Check if friend is a member of the club or not.
  isMember(friend) {
    if (this.clubMembers) {
      for (var i = 0; i < this.clubMembers.length; i++) {
        if (this.clubMembers[i].$key == friend.$key) {
          return true;
        }
      }
    }
    return false;
  }

  // Check if friend is already on the list of members to be added.
  isAdded(friend) {
    if (this.toAdd) {
      for (var i = 0; i < this.toAdd.length; i++) {
        if (this.toAdd[i].$key == friend.$key) {
          return true;
        }
      }
    }
    return false;
  }

  // Toggle for adding/removing friend on the list of members to be added.
  addOrRemove(friend) {
    if (this.isAdded(friend)) {
      this.remove(friend);
    } else {
      this.add(friend);
    }
  }

  // Add or update friend information for real-time sync.
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

  // Add or update member information for real-time sync.
  addOrUpdateMember(member) {
    if (!this.clubMembers) {
      this.clubMembers = [member];
    } else {
      var index = -1;
      for (var i = 0; i < this.clubMembers.length; i++) {
        if (this.clubMembers[i].$key == member.$key) {
          index = i;
        }
      }
      if (index > -1) {
        this.clubMembers[index] = member;
      } else {
        this.clubMembers.push(member);
      }
    }
  }

  // Add friend to the list of to be added.
  add(friend) {
    this.toAdd.push(friend);
  }

  // Remove friend from the list of to be added.
  remove(friend) {
    this.toAdd.splice(this.toAdd.indexOf(friend), 1);
  }

  // Back
  back() {
    this.navCtrl.pop();
  }

  // Get names of the members to be added to the club.
  getNames() {
    var names = '';
    this.toAdd.forEach((friend) => {
      names += friend.name + ', ';
    });
    return names.substring(0, names.length - 2);
  }

  // Confirm adding of new members, afterwards add the members.
  done() {
    this.alert = this.alertCtrl.create({
      title: 'Add Members',
      message: 'Are you sure you want to add <b>' + this.getNames() + '</b> to the club?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            // Proceed
            this.loadingProvider.load();
            this.toAdd.forEach((friend) => {
              // Add clubInfo to each friend added to the club.
              this.angularfire.object('/accounts/' + friend.$key + '/clubs/' + this.clubId).update({
                messagesRead: 0
              });
              // Add friend as members of the club.
              this.club.members.push(friend.$key);
              // Add system message that the members are added to the club.
              this.club.messages.push({
                date: new Date().toString(),
                sender: this.user.$key,
                type: 'system',
                message: this.user.name + ' added ' + this.getNames() + ' to the club',
                icon: 'md-contacts'
              });
            });
            // Update club data on the database.
            this.dataProvider.getClub(this.clubId).update({
              members: this.club.members,
              messages: this.club.messages
            }).then(() => {
              // Back.
              this.loadingProvider.dismiss();
              this.navCtrl.pop();
            });
          }
        }
      ]
    }).present();
  }

}
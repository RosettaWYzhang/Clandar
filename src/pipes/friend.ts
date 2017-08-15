import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendFilter'
})
@Injectable()
export class FriendPipe implements PipeTransform {
  // FriendPipe
  // Filter friend by name or username.
  transform(friends: any[], search: string): any {
    if (!friends) {
      return;
    } else if (!search) {
      return friends;
    } else {
      let term = search.toLowerCase();
      return friends.filter(friend => friend.name.toLowerCase().indexOf(term) > -1 || friend.email.toLowerCase().indexOf(term) > -1);
    }
  }
}

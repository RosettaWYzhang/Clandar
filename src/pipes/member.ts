import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MemberPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'memberFilter',
})
export class MemberPipe implements PipeTransform {
  // FriendPipe
  // Filter member by name or username.
  transform(members: any[], search: string): any {
    if (!members) {
      return;
    } else if (!search) {
      return members;
    } else {
      let term = search.toLowerCase();
      return members.filter(member => member.name.toLowerCase().indexOf(term) > -1 || member.email.toLowerCase().indexOf(term) > -1);
    }
  }
}

import { Injectable, Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the EventPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'eventFilter',
})
@Injectable()
export class EventPipe implements PipeTransform {
  transform(events: any[], search: string): any {
    if (!events) {
      return;
    } else if (!search) {
      return events;
    } else {
      let term = search.toLowerCase();
      return events.filter(event => event.title.toLowerCase().indexOf(term) > -1 || event.club.toLowerCase().indexOf(term) > -1);
    }
  }
}

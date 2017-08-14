import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clubFilter'
})
@Injectable()
export class ClubPipe implements PipeTransform {
  // GroupPipe
  // Filter group by name
  transform(clubs: any[], search: string): any {
    if (!clubs) {
      return;
    } else if (!search) {
      return clubs;
    } else {
      let term = search.toLowerCase();
      return clubs.filter(club => club.name.toLowerCase().indexOf(term) > -1);
    }
  }
}

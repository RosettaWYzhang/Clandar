import { NgModule } from '@angular/core';
import { MemberPipe } from './../pipes/member';
import { EventPipe } from './../pipes/event';
@NgModule({
	declarations: [MemberPipe,
    EventPipe],
	imports: [],
	exports: [MemberPipe,
    EventPipe]
})
export class PipesModule {}

import { NgModule } from '@angular/core';
import { MemberPipe } from './../pipes/member';
@NgModule({
	declarations: [MemberPipe],
	imports: [],
	exports: [MemberPipe]
})
export class PipesModule {}

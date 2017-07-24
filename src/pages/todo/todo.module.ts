import { NgModule }       from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { MyApp } from '../../app/app.component';
import { TodoListComponent }    from './list/list.component';
import { TodoDetailComponent }  from './detail/detail.component';
import { TodoItemComponent }  from './item/item.component';
import { TodoService } from './todo.service';

@NgModule({
  imports:      [IonicModule.forRoot(MyApp)],
  declarations: [TodoListComponent, TodoDetailComponent, TodoItemComponent],
  entryComponents:[TodoListComponent, TodoDetailComponent],
  providers:    [TodoService],
  exports:      [IonicModule]
})
export class TodoModule {}

import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'todo-detail',
    templateUrl: './detail.component.html'
})
export class TodoDetailComponent implements OnInit {
    selectedTodo: Todo;
    constructor(public navCtrl: NavController, public navParams: NavParams, private todoService: TodoService) {}

    ngOnInit() {
      let todoId = this.navParams.get('todoId')
      this.selectedTodo = this.todoService.getTodoById(todoId);
    }

}


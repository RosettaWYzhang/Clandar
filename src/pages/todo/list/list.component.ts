import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'todo-list',
    templateUrl: 'list.component.html'
})
export class TodoListComponent {
    myDate: String = new Date().toISOString();
    newTodo: Todo = new Todo();
    constructor(public navCtrl: NavController, private todoService: TodoService) { }

    addTodo() {
        if (!this.newTodo.title.trim()) {
            return;
        }
        this.todoService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }
    get todos() {
        return this.todoService.getAllTodos();
    }
}

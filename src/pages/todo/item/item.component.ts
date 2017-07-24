import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { TodoDetailComponent } from "../detail/detail.component";

@Component({
    selector: 'todo-item',
    templateUrl: './item.component.html'
})
export class TodoItemComponent {
    @Input() todo: Todo;
    detail: TodoDetailComponent

    constructor(public navCtrl: NavController, private todoService: TodoService) {
    }

    gotoDetail(todo) {
        this.navCtrl.push(TodoDetailComponent, {todoId: todo.id})
    }

    toggleTodoComplete(todo) {
        this.todoService.toggleTodoComplete(todo)
    }
    removeTodo(todo) {
        this.todoService.deleteTodoById(todo.id)
    }
}


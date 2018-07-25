import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public todos: Todo[];
    public todo: string;
    public title: string;

    constructor(private todoService: TodoService) {
        this.title = 'TODO example';
        this.todos = [];
    }

    ngOnInit(): void {
        this.getTodos();
    }

    public addTodo(todo: string): void {
        this.todos.push({
            name: todo
        });
        this.todo = '';
    }

    public removeTodo(todo: Todo): void {
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
    }

    public getTodos(): void {
        this.todoService
            .getTodos()
            .subscribe((response: Todo[]) => {
                this.todos = response;
            });
    }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Todo } from './todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    
    constructor() { }
    
    public getTodos(): Observable<Todo[]> {
        return of(mockTodos);
    }
}

const mockTodos: Todo[] = [
    { name: 'Todo 1' },
    { name: 'Todo 2' },
    { name: 'Todo 3' }
];

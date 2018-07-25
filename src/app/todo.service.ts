import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { Todo } from './todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(private http: HttpClient) { }

    public getTodos(): Observable<Todo[]> {
        return this.http
            .get('http://demo4526300.mockable.io/api/todos')
            .pipe(map<any, Todo[]>((response) => {
                return response;
            }));
    }
}


import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { TodoService } from './todo.service';

class HttpClientDummy {
    public get(): Observable<any> {
        return of([]);
    }
}

describe('TodoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                TodoService,
                { provide: HttpClient, useClass: HttpClientDummy }
            ]
        });
    });

    it('should be created', inject([TodoService], (service: TodoService) => {
        expect(service).toBeTruthy();
    }));

    it('should be return an array of todos', inject([TodoService, HttpClient], (service: TodoService, http: HttpClient) => {
        const mockTodos = [
            { name: 'Todo One' },
            { name: 'Todo Two' },
        ];
        spyOn(http, 'get').and.returnValue(of(mockTodos));
        service.getTodos()
            .subscribe((response) => {
                expect(response).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
            });
    }));
});

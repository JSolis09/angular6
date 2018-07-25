import { TestBed, inject } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TodoService]
        });
    });
    
    it('should be created', inject([TodoService], (service: TodoService) => {
        expect(service).toBeTruthy();
    }));

    it('should be return an array of todos', inject([TodoService], (service: TodoService) => {
        service.getTodos()
            .subscribe((response) => {
                expect(response).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
            });
    }));
});

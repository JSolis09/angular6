import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { Observable, of } from 'rxjs';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { TodoService } from './todo.service';

class TodoServiceDummy {
    public getTodos(): Observable<any[]> {
        return of([]);
    }
}

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                FormsModule
            ],
            providers: [
                { provide: TodoService, useClass: TodoServiceDummy }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    }));

    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));
    
    it(`should have as title 'TODO example'`, async(() => {
        expect(app.title).toEqual('TODO example');
    }));
    
    it('should render title in a h1 tag', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to TODO example!');
    }));

    describe('#addTodo', () => {    
        it('should add todo', () => {
            const todo: string = 'Todo example';
            app.todos = [];
            app.addTodo(todo);
            expect(app.todos[0].name).toBe(todo);
        });
    });
});

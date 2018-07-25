import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [
		TodoService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }

    fillInput(todo: string) {
        element(by.css('.app .search input')).sendKeys(todo);
    }

    clickAddButton() {
        element(by.css('.app .search button')).click();
    }

    getLastToDo() {
        const todos = element.all(by.css('.app .todo-list .todo-item'));
        return todos.last().getText();
    }
}

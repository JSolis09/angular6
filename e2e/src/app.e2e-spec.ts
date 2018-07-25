import { AppPage } from './app.po';
import { browser } from '../../node_modules/protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to TODO example!');
  });

  it('should add "TODO EXAMPLE" in todo list', () => {
    page.navigateTo();
    page.fillInput('TODO EXAMPLE');
    page.clickAddButton();
    expect(page.getLastToDo()).toContain('TODO EXAMPLE');
    browser.sleep(3000);
  });
});

import { RecipeAppAngularPage } from './app.po';

describe('recipe-app-angular App', () => {
  let page: RecipeAppAngularPage;

  beforeEach(() => {
    page = new RecipeAppAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

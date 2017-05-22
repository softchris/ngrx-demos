import { NgrxTestPage } from './app.po';

describe('ngrx-test App', () => {
  let page: NgrxTestPage;

  beforeEach(() => {
    page = new NgrxTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { BulbPage } from './app.po';

describe('bulb App', () => {
  let page: BulbPage;

  beforeEach(() => {
    page = new BulbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { NgchartsPage } from './app.po';

describe('ngcharts App', () => {
  let page: NgchartsPage;

  beforeEach(() => {
    page = new NgchartsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

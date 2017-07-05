import { Bind3Page } from './app.po';

describe('bind3 App', () => {
  let page: Bind3Page;

  beforeEach(() => {
    page = new Bind3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { AppPOBPPage } from './app.po';

describe('app-pobp App', function() {
  let page: AppPOBPPage;

  beforeEach(() => {
    page = new AppPOBPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

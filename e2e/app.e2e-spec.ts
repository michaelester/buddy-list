import { BuddylistPage } from './app.po';

describe('buddylist App', function() {
  let page: BuddylistPage;

  beforeEach(() => {
    page = new BuddylistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

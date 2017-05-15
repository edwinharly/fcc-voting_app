import { FccVoteAppPage } from './app.po';

describe('fcc-vote-app App', () => {
  let page: FccVoteAppPage;

  beforeEach(() => {
    page = new FccVoteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { SteamStatsV2Page } from './app.po';

describe('steam-stats-v2 App', () => {
  let page: SteamStatsV2Page;

  beforeEach(() => {
    page = new SteamStatsV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

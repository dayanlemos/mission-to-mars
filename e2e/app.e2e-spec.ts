import { MissionToMarsPage } from './app.po';

describe('mission-to-mars App', () => {
  let page: MissionToMarsPage;

  beforeEach(() => {
    page = new MissionToMarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { FenixPage } from './app.po';

describe('fenix App', () => {
  let page: FenixPage;

  beforeEach(() => {
    page = new FenixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

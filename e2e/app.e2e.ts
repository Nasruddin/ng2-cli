import { Ng2OnePage } from './app.po';

describe('ng2-one App', function() {
  let page: Ng2OnePage;

  beforeEach(() => {
    page = new Ng2OnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-one works!');
  });
});

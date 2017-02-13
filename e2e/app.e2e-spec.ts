import { IgniteTestingAngularPage } from './app.po';

describe('ignite-testing-angular App', function() {
  let page: IgniteTestingAngularPage;

  beforeEach(() => {
    page = new IgniteTestingAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

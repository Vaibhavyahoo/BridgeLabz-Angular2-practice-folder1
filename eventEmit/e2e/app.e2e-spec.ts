import { EventEmitPage } from './app.po';

describe('event-emit App', function() {
  let page: EventEmitPage;

  beforeEach(() => {
    page = new EventEmitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

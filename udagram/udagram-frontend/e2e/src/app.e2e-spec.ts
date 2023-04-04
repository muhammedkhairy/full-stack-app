import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/home');
    });
    it('should have a title saying Udagram', async () => {
      // Wait for the page title to contain 'Udagram'
      await browser.wait(
        async () => {
          const title = await page.getTitle();
          return title.includes('Udagram');
        },
        5000,
        'Page title did not update in time'
      );

      // Check that the page title is 'Udagram'
      page.getPageOneTitleText().then((title) => {
        expect(title).toEqual('Udagram');
      });
    });
  });
});

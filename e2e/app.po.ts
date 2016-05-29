export class Ng2OnePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-one-app h1')).getText();
  }
}

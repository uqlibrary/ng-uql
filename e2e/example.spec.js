'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./example.po');
  });

  it('should include an awesome greeting', function() {
    expect(page.mdContentEl.getText()).toBe('Yo! Whatup?');
  });

});

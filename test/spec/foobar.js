'use strict';

var Foobar = require('../../scripts/foobar');

describe('Foobar', function () {

  var foobar;
  beforeEach(function () {
    foobar = new Foobar();
  });

  it('should get', function () {
    return foobar.get().then(function (data) {
      data.should.equal('foobar 3');
    });
  });

});

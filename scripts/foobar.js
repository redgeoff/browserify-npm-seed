'use strict';

var Q = require('q'), Bar = require('./bar'), bar = new Bar();

function Foobar() {

  this.get = function () {
    var defer = Q.defer();
    setTimeout(function () {
      defer.resolve('foo' + bar.get());
    }, 100);
    return defer.promise;
  };

};

module.exports = Foobar;
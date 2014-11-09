'use strict';

var Foobar = require('../../'), foobar = new Foobar();

function hello() { };

hello.foo = function () {
  foobar.get().then(function (data) {
    document.getElementById('mytext').innerHTML = data;
  });
};

module.exports = hello;
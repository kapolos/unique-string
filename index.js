'use strict';

var cryptoRandomString = require('crypto-random-string');

module.exports = function () {
  return cryptoRandomString(32);
};

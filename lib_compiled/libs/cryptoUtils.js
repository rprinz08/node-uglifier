// Generated by CoffeeScript 2.2.1
(function() {
    ///*!
  // * node-uglifier
  // * Copyright (c) 2014 Zsolt Szabo Istvan
  // * MIT Licensed
  // *
  // */

  var _, crypto, cryptoUtils, seedrandom, sugar;

  _ = require('underscore');

  sugar = require('sugar');

  crypto = require("crypto");

  seedrandom = require("seedrandom");

  cryptoUtils = module.exports;

  cryptoUtils.generateSalt = function(saltLength) {
    return crypto.randomBytes(Math.ceil(saltLength / 2)).toString('hex').substring(0, saltLength);
  };

  cryptoUtils.getSaltedHash = function(message, hashAlgorithm, salt) {
    return crypto.createHmac(hashAlgorithm, salt).update(message).digest('hex');
  };

  cryptoUtils.shuffleArray = function(array, seed = null) {
    var i, j, k, randFnc, ref, temp;
    randFnc = Math.random;
    if (seed) {
      randFnc = seedrandom(seed);
    }
    for (i = k = ref = array.length - 1; undefined !== 0 && (ref <= 0 ? ref <= k && k <= 0 : ref >= k && k >= 0); i = ref <= 0 ? ++k : --k) {
      j = Math.floor(randFnc() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

}).call(this);

//# sourceMappingURL=cryptoUtils.js.map

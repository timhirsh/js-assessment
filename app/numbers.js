if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      // shift bit to the right-most position. logical AND with 1 will yield the value of bit
      return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      var binary = '';

      for (var i = 8; i > 0; i--) {
        binary += this.valueAtBit(num, i);
      }

      return binary;
    },

    multiply: function(a, b) {
      return ((a * 10) * (b * 10)) / 100;
    }
  };
});

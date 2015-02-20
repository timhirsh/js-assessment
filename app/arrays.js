if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      var sum = 0;

      for (var i = 0, len = arr.length; i < len; i++) {
        sum += arr[i];
      }

      return sum;
    },

    remove : function(arr, item) {
      var myArr = [];

      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] !== item) {
          myArr.push(arr[i]);
        }
      }

      return myArr;
    },

    removeWithoutCopy : function(arr, item) {
      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1);
          i--;
        }
      }

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var count = 0;

      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) {
          count++;
        }
      }

      return count;
    },

    duplicates : function(arr) {
      var dups = [];

      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr.indexOf(arr[i]) < i && dups.indexOf(arr[i]) === -1) {
          dups.push(arr[i]);
        }
      }

      return dups;
    },

    square : function(arr) {
      var myArr = [];

      for (var i = 0, len = arr.length; i < len; i++) {
        myArr.push(arr[i] * arr[i]);
      }

      return myArr;
    },

    findAllOccurrences : function(arr, target) {
      var myArr = [];

      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === target) {
          myArr.push(i);
        }
      }

      return myArr;
    }
  };
});

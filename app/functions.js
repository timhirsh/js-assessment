if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function(str2) {
        return str + ', ' + str2;
      };
    },

    makeClosures : function(arr, fn) {
      var myArr = [];

      function getClosure(value) {
        return function() {
          return fn(value);
        };
      }

      for (var i = 0, len = arr.length; i < len; i++) {
        myArr.push(getClosure(arr[i]));
      }

      return myArr;
    },

    partial : function(fn, str1, str2) {
      return function(str3) {
        return fn.call(null, str1, str2, str3);
      };
    },

    useArguments : function() {
      var sum = 0;

      for (var i = 0, len = arguments.length; i < len; i++) {
        sum += arguments[i];
      }

      return sum;
    },

    callIt : function(fn) {
      var myArgs = Array.prototype.slice.call(arguments, 1);
      return fn.apply(null, myArgs);
    },

    partialUsingArguments : function(fn) {
      var args1 = Array.prototype.slice.call(arguments, 1);

      return function() {
        var args2 = Array.prototype.slice.call(arguments);
        return fn.apply(null, args1.concat(args2));
      };
    },

    curryIt : function(fn) {
      var args = [];
      var totalLength = fn.length;

      function nextFunction() {
        return function(arg) {
          args.push(arg);

          if (args.length === totalLength) {
            return fn.apply(null, args);
          } else {
            return nextFunction();
          }
        };
      }

      return nextFunction();
    }
  };
});

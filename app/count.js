if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var timeout;

      function delayedLog(num) {
        var delay = (num - start + 1) * 100;
        timeout = setTimeout(function() {
          console.log(num);
        }, delay);
      }

      for (var i = start; i <= end; i++) {
        delayedLog(i);
      }

      return {
        cancel: function() {
          clearTimeout(timeout);
        }
      };
    }
  };
});

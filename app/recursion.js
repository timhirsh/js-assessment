if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var dirs = [];

      function findFiles(data) {
        var results = [];
        var files = data.files;

        // maintain state of directory hierarchy by pushing/popping current dir
        dirs.push(data.dir);

        for (var i = 0, len = files.length; i < len; i++) {
          if (typeof(files[i]) === 'string') {
            if (!dirName || dirs.indexOf(dirName) !== -1) {
              results.push(files[i]);
            }
          } else {
            results = results.concat(findFiles(files[i]));
          }
        }

        dirs.pop();
        return results;
      }

      return findFiles(data);
    },

    permute: function(arr) {
      var results = [];

      if (arr.length === 0) {
        return results;
      } else if (arr.length === 1) {
        return [arr];
      }

      for (var i = 0, len = arr.length; i < len; i++) {
        // clone array, then remove the ith element
        var tempArr = arr.slice(0);
        var removed = tempArr.splice(i, 1);

        // solve the permutations for the temp array
        var subPermutations = this.permute(tempArr);

        // reassemble the array, placing the removed element first before each
        // of the subPermutations
        for (var j = 0; j < subPermutations.length; j++) {
          results.push(removed.concat(subPermutations[j]));
        }
      }

      return results;
    },

    fibonacci: function(n) {
      if (n === 0 || n === 1) {
        return n;
      }

      return this.fibonacci(n-2) + this.fibonacci(n-1);
    },

    validParentheses: function(n) {
      var results = [];

      function addResult(result) {
        // filter out duplicate results
        if (results.indexOf(result) === -1) {
          results.push(result);
        }
      }

      if (n === 1) {
        addResult('()');
      } else {
        var innerParens = this.validParentheses(n-1);
        for(var i = 0, len = innerParens.length; i < len; i++) {
          addResult('(' + innerParens[i] + ')');
          addResult('()' + innerParens[i]);
          addResult(innerParens[i] + '()');
        }
      }

      return results;
    }
  };
});

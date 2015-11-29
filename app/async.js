/*globals Promise:true*/
if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return new Promise(function(resolve, reject) {

        setTimeout(function() {
          resolve(value);
        }, 1);

      });
    },

    manipulateRemoteData : function(url) {
      return new Promise(function(resolve, reject) {
        $.getJSON(url)
          .then(function(data) {
            var people = $.map(data.people, function(person) {
              return person.name;
            });

            resolve(people.sort());
          })
          .fail(reject);
      });
    }
  };
});

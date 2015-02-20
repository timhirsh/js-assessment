/*globals Promise:true*/
if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var deferred = $.Deferred();

      setTimeout(function() {
        deferred.resolve(value);
      }, 1);

      return deferred.promise();
    },

    manipulateRemoteData : function(url) {
      var deferred = $.Deferred();

      $.getJSON(url).then(function(data) {
        var people = $.map(data.people, function(person) {
          return person.name;
        });

        deferred.resolve(people.sort());
      });

      return deferred.promise();
    }
  };
});

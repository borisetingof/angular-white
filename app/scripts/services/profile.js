'use strict';

/**
 * @ngdoc service
 * @name angularWhiteApp.Profile
 * @description
 * # Profile
 * Factory in the angularWhiteApp.
 */
angular.module('angularWhiteApp')
  .factory('Profile', function ($resource, $filter) {

    var r,
        get = function (success) {
          r = $resource('/api-mock/data.json').get(success);
          return r;
        };

    return {
      get: get,
      save: function (success) {
        //fusing 'get' instead of save or testing
        return $resource('/api-mock/save.json', {
          'firstName': r.firstName,
          'lastName': r.lastName,
          'emailAddress': r.emailAddress,
          'subscribed': r.subscribed,
          'dob': $filter('date')(r.dob, 'yyyy-MM-dd')
        }).get(success);
      }
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name angularWhiteApp.controller:Form
 * @description
 * # Form
 * Controller of the angularWhiteApp
 */
angular.module('angularWhiteApp')
  .controller('Form', function ($scope, $location, Profile) {
    $scope.profile = Profile.get(function(data){
      $scope.profile.dob = new Date(data.dob);
    });

    $scope.submit = function(){
      Profile.save(function(){
        $location.path('/success');
      });
    };
  });

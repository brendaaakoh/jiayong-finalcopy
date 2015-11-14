'use strict';

angular.module('jiayongApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent' : {
                templateUrl: 'app/profile/profile.html',
                controller: 'ProfileCtrl'
            }
        }
    })
  });
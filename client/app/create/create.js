'use strict';

angular.module('jiayongApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.create', {
        url: '/create',
        views: {
            'menuContent' : {
                templateUrl: 'app/create/create.html',
                controller: 'CreateCtrl'
            }
        }
    })
  });
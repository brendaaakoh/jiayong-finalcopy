'use strict';

angular.module('jiayongApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.edit', {
        url: '/edit:id',
        views: {
          'menuContent': {
            templateUrl: 'app/edit/main.edit.html',
            controller: 'MainEditCtrl',
            resolve: {
              task: function($stateParams, Tasks) {
                return Tasks.getTask($stateParams.id);
                console.log($stateParams.id);
              }
            }
          }
        } 
    })
  });
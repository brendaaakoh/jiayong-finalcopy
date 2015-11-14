'use strict';

angular.module('jiayongApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.main', {
        url: '/childhome',
        views: {
            'menuContent' : {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                resolve: {
                  tasks: function($stateParams, Tasks) {
                    return Tasks.getAll();
                  }
                }
        }
    }})
      .state('app.pending', {
        url: '/pending',
        views:{
          'menuContent':{
            templateUrl: 'app/main/main.pending.html',
          controller: 'MainCtrl'
          }
          
        }
    }).state('app.progress', {
        url: '/progress',
        views:{
          'menuContent':{
            templateUrl: 'app/main/main.progress.html',
          controller: 'MainCtrl'
          }
          
        }
    })
      .state('app.completed', {
        url: '/completed',
        views:{
          'menuContent':{
            templateUrl: 'app/main/main.completed.html',
          controller: 'MainCtrl'
          }
          
        }
    }).state('app.rejected', {
        url: '/rejected',
        views:{
          'menuContent':{
            templateUrl: 'app/main/main.rejected.html',
          controller: 'MainCtrl'
          }
          
        }
    })
      .state('app.find', {
        url: '/findTasks',
        views:{
          'menuContent':{
            templateUrl: 'app/main/main.list.html',
          controller: 'MainCtrl'
          }
          
        }
    }).state('app.details', {
        url: '/:id',
        views: {
          'menuContent': {
            templateUrl: 'app/main/main.single.html',
            controller: 'MainSingleCtrl',
            resolve: {
              task: function($stateParams, Tasks) {
                return Tasks.getTask($stateParams.id);
                console.log($stateParams.id);
              }
            }
          }
        } 
    })
    // .state('edit', {
    //     url: '/edit/:id',
    //     views: {
    //       'menuContent': {
    //         templateUrl: 'app/main/main.edit.html',
    //         controller: 'MainEditCtrl',
    //         resolve: {
    //           task: function($stateParams, Tasks) {
    //             return Tasks.getTask($stateParams.id);
    //             console.log($stateParams.id);
    //           }
    //         }
    //       }
    //     } 
    // })
  });
'use strict';

angular.module('jiayongApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.parent', {
        url: '/home',
        views: {
            'menuContent' : {
                templateUrl: 'app/parent/parent.html',
                controller: 'ParentCtrl',
                resolve: {
                  tasks: function($stateParams, Tasks) {
                    return Tasks.getAll();
                  }
                }
        }
    }})
      .state('app.parentpending', {
        url: '/parent/pending',
        views:{
          'menuContent':{
            templateUrl: 'app/parent/parent.pending.html',
          controller: 'ParentCtrl'
          }
          
        }
    })
      .state('app.parentcompleted', {
        url: '/parent/completed',
        views:{
          'menuContent':{
            templateUrl: 'app/parent/parent.completed.html',
          controller: 'ParentCtrl'
          }
          
        }
    }).state('app.parentrejected', {
        url: '/parent/rejected',
        views:{
          'menuContent':{
            templateUrl: 'app/parent/parent.rejected.html',
          controller: 'ParentCtrl'
          }
          
        }
    })
      .state('app.parentfind', {
        url: '/parent/findTasks',
        views:{
          'menuContent':{
            templateUrl: 'app/parent/parent.list.html',
          controller: 'ParentCtrl'
          }
          
        }
    }).state('app.parentdetails', {
        url: 'parent/:id',
        views: {
          'menuContent': {
            templateUrl: 'app/parent/parent.single.html',
            controller: 'ParentSingleCtrl',
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
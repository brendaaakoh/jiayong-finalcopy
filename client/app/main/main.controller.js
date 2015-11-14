'use strict';

angular.module('jiayongApp')
  .controller('MainCtrl', function ($scope, $http, socket, Tasks, $ionicPopup, User) {
    User.get(function(user) {
        $scope.user = user;
        console.log(user);
    });
    $scope.tasks = Tasks.getAll();
    $scope.tasksPending = Tasks.getPending();
    $scope.tasksProgress = Tasks.getProgress();
    $scope.tasksAvailable = Tasks.getAvailable();
    $scope.tasksRejected = Tasks.getRejected();

    // remove task
    $scope.remove = function(id) {
        var confirmPopup = $ionicPopup.confirm({
     		   title: 'Remove Task',
     		   template: 'Are you sure you want to remove this incomplete task?'
        });

   		 confirmPopup.then(function(res) {
     	  if(res) {
       		 Tasks.removeTask(id);
     	  } 
  	   });
    };

        
  });

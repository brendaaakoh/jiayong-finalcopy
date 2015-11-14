'use strict';

angular.module('jiayongApp')
  .controller('MainEditCtrl', function ($scope, $http, socket, task, Tasks, $ionicPopup) {
    $scope.task = task;
    console.log($scope.task);

    $scope.edit ={
      name: task.title,
      description: task.desc,
      exp: task.exp,
      min: task.min,
      max: task.max
    };

    $scope.editTask = function(name, desc, exp, min, max){
            Tasks.editTask(name, desc, exp, min, max);
            $ionicPopup.alert({
                    title: 'Success!',
                    template: 'You successfully re-proposed your task!'
                });
        };

  });

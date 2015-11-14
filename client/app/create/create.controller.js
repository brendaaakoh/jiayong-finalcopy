'use strict';

angular.module('jiayongApp')
  .controller('CreateCtrl', function ($scope, Tasks, $ionicPopup, User) {
  		User.get(function(user) {
	        $scope.user = user;
	        console.log(user);
    	});

  		$scope.tasksAvailable = Tasks.getAvailable();
        
        $scope.create = function(name, desc, exp, min, max){
            Tasks.createTask(name, desc, exp, min, max);
            $ionicPopup.alert({
                    title: 'Success!',
                    template: 'You successfully created your task!'
                });
        };

  });

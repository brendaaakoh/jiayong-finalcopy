'use strict';

angular.module('jiayongApp')
  .controller('ParentCtrl', function ($scope, Tasks, $state, $ionicPopup, User) {
    	
    	User.get(function(user) {
        $scope.user = user;
        console.log(user);
    });
    $scope.tasks = Tasks.getAll();
    $scope.tasksPending = Tasks.getPending();
    $scope.tasksProgress = Tasks.getProgress();
    $scope.tasksAvailable = Tasks.getAvailable();
    $scope.tasksRejected = Tasks.getRejected();

    	$scope.viewTask = function(id){
    		$ionicPopup.show({
			    //template: '<input type="password" ng-model="data.wifi">',
			    title: 'You have a new Task Pending approval!',
			    //subTitle: 'Please use normal things',
			    scope: $scope,
			    buttons: [
			      { text: 'View Later!' },
			      {
			        text: '<b>View Now!</b>',
			        type: 'button-positive',
			        onTap: function(e) {
			          $state.go('app.details'+id)
			        }
			      }
			    ]
			  });
		}
  });
'use strict';

angular.module('jiayongApp')
  .controller('MainSingleCtrl', function ($scope, $http, socket, task, Tasks, $ionicPopup) {
    $scope.task = task;
    console.log($scope.task);

    //takeup task ; added prereq task in
    $scope.takeup = function(id) {
        var task = Tasks.getTask(id);
        if(task.prereq != ''){
            var prereq = Tasks.getByTitle(task.prereq);
          if(prereq.status != 'Completed'){
            $ionicPopup.alert({
                title: 'Error!',
                template: '<center> The task <b>' + task.prereq + '</b> has to be done first! </center>'
            });
          } else{
            Tasks.takeupTask(id);
            $ionicPopup.alert({
                title: 'Success!',
                template: 'You have taken up the task!'
            });
          }
        } else {
          Tasks.takeupTask(id);
            $ionicPopup.alert({
                title: 'Success!',
                template: 'You have taken up the task!'
            });
          }         
    };

    //remove task
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

    // complete and send task for approval
    $scope.sendApproval = function(id) {
        Tasks.completeTask(id);
        $ionicPopup.alert({
              title: 'Success!',
              template: 'Your task has been sent for approval!'
          });
    };

  });

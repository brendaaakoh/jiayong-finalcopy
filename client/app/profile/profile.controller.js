'use strict';

angular.module('jiayongApp')
  .controller('ProfileCtrl', 
    function ($ionicHistory, $scope, $http, $rootScope, $ionicTabsDelegate, $state, $location, $window, User, Auth, $templateCache) {
    User.get(function(user) {
        $scope.user = user;
        console.log(user);
    });

    $scope.logout = function() {
        Auth.logout();
        
        $state.go('landing');
        $ionicHistory.clearCache();
        $templateCache.removeAll();
        console.log(User);
    };
  });

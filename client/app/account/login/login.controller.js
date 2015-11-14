'use strict';

angular.module('jiayongApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $state, $ionicHistory, User, $ionicLoading) {
    $scope.user = {};
    $scope.errors = {};

    

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {         
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
            $ionicLoading.show({
              content: 'Loading',
              animation: 'fade-in',
              template: 'Logging You In...'
            });
          
            User.get(function(user) {
              
          // Logged in, redirect to home

                if(user.children.length==0) {
                    console.log('Child');
                    $state.go('app.main',{},{reload: true});
                    $ionicHistory.clearCache();
                    $ionicLoading.hide();
                    $ionicHistory.nextViewOptions({
                        historyRoot: true,
                        disableAnimate: true,
                        disableBack: true
                    });
                } else {
                    console.log('Parent');
                    $state.go('app.parent',{},{reload: true});
                    $ionicHistory.clearCache();
                    $ionicLoading.hide();
                    $ionicHistory.nextViewOptions({
                        historyRoot: true,
                        disableAnimate: true,
                        disableBack: true
                    });
                }
            }, function(err) {
                $state.go('landing',{},{reload: false});
            })
          
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });

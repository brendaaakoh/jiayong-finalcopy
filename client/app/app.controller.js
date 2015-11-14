'use strict';

angular.module('jiayongApp')
.controller('AppCtrl', function($scope, $rootScope, User, socket, resolvedUser, $templateCache) {
    $scope.user = resolvedUser;
    console.log($scope.user);

    $templateCache.removeAll();
});
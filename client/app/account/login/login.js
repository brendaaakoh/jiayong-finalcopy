'use strict';
angular.module('jiayongApp').config(function($stateProvider) {
    $stateProvider
    .state('landing', {
        url: '/landing',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
    })
});
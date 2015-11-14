'use strict';

angular.module('jiayongApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'ionic'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $ionicConfigProvider) {
    $stateProvider.state('app',{
      abstract: true,
      templateUrl: 'app/app.html',
      controller: 'AppCtrl',
      resolve: {
          resolvedUser: function(User) {
              return User.get();
          }
      }
    })

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/landing');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth, $ionicHistory, $state, $stateParams, $ionicViewSwitcher) {

    $rootScope.goback = function() {
        $ionicHistory.goBack();
    };

    $rootScope.goto = function(state) {
        $ionicHistory.nextViewOptions({
          historyRoot: true,
          disableAnimate: true,
          disableBack: true
      });
      $ionicHistory.clearCache();
      $state.go(state);
    };

    $rootScope.clearHistoryAndGo = function(state){
      $ionicHistory.nextViewOptions({
        historyRoot: true,
        disableAnimate: true,
        disableBack: true
      });
      $ionicHistory.clearCache();
      $state.go(state);
    }
    
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });
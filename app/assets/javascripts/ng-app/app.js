/*jshint strict:false */

angular.module('myApp', [
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'templates'
  ]).
  config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    /**
     * Routes and States
     */
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
    }).
      state('dashboard', {
        abstract: true,
        url: '/dashboard',
        templateUrl: 'dashboard/layout.html'
      })
        // the default route when someone hits dashboard
        .state('dashboard.one', {
            url: '',
            templateUrl: 'dashboard/one.html'
        })
        // this is /dashboard/two
        .state('dashboard.two', {
            url: '/two',
            templateUrl: 'dashboard/two.html'
        })
        // this is /dashboard/three
        .state('dashboard.three', {
            url: '/three',
            templateUrl: 'dashboard/three.html'
        });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
  });

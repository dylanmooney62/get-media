var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: '../../pages/search.html',
  });
});

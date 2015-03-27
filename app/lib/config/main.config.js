import angular from 'angular';
import 'angular-ui-router';

export var mainConfigModule = angular.module('mainConfigModule', [
    'ui.router'
]).config([
    '$locationProvider', '$urlRouterProvider',
    function ($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        
        $urlRouterProvider.rule(function($injector, $location){
            var path = $location.path();
            if (path !== '/' && path.slice(-1) === '/') {
                $location.replace().path(path.slice(0,-1));
            }
        });
        
        $urlRouterProvider.otherwise('/404');
    }
]);
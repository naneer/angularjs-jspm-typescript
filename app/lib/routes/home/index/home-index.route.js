import angular from 'angular';
import 'angular-ui-router';

import template from './home-index.template.html!text';

export var homeIndexRouteModule = angular.module('homeIndexRouteModule', [
    'ui.router'
]).config([
    '$stateProvider',
    function homeRoute($stateProvider) {
        $stateProvider.state('home.index', {
            url: '/',
            template: template
        });
    }
]);
import angular from 'angular';
import 'angular-ui-router';

import {homeIndexRouteModule} from './index/home-index.route';

export var homeRouteModule = angular.module('homeRouteModule', [
    'ui.router',
    homeIndexRouteModule.name
]).config([
    '$stateProvider',
    function homeRoute($stateProvider) {
        $stateProvider.state('home', {
            abstract: true,
            template: '<ui-view></ui-view>'
        });
    }
]);
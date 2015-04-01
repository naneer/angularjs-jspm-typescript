///<reference path="../typings/tsd.d.ts" />
///<amd-dependency path="angular-ui-router" />
///<amd-dependency path="angular-aria" />
///<amd-dependency path="angular-animate" />
///<amd-dependency path="angular-material" />

import angular = require('angular');

import testController = require('./testcontroller');


var mainModule = angular.module('mainModule', [
  'ui.router', 
  'ngMaterial',  
  'ngAnimate',
  'ngAria']);
 
mainModule.controller(testController);

export = mainModule;

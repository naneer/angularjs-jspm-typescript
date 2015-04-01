///<reference path="../typings/tsd.d.ts" />
///<amd-dependency path="angular-ui-router" />
import angular = require('angular');

import testController = require('./testcontroller');
var mainModule = angular.module('mainModule', ['ui.router']);
  mainModule.controller(testController);


export = mainModule;

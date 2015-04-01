///<reference path="../typings/tsd.d.ts" />
import angular = require('angular');

import testController = require('./testcontroller');
var mainModule = angular.module('mainModule', []);
mainModule.controller(testController);
export = mainModule;
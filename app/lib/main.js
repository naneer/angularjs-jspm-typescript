import angular from 'angular';

import {mainConfigModule} from 'lib/config/main.config';
import {homeRouteModule} from 'lib/routes/home/home.route';

export var mainModule = angular.module('mainModule', [
    mainConfigModule.name,
    homeRouteModule.name
    ]).run();
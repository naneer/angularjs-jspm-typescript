///<reference path="../typings/tsd.d.ts" />
import angular = require('angular');
import Animal = require('./main');
import module = require('./mainmodule');
console.log(Animal);
console.log(module);

angular.element(document).ready(function() {
    angular.bootstrap(document.querySelector('[data-main-app]'), [
        module.name
    ], {
        strictDi: true //strict dependency injection
    });
});
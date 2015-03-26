import angular from 'angular';
import {mainModule} from './main';

//look for data-main-app in document and bootstrap angular app
angular.element(document).ready(function(){
    angular.bootstrap(document.querySelector('[data-main-app]'), [
        mainModule.name
    ], {
        strictDi: true //strict dependency injection
    });
});
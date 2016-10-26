import angular from 'angular';
import angularResource from 'angular-resource';

import screenshotsService from './screenshots.service';
import screenshotsListComponent from './screenshots-list.component';

const ScreenshotsModule = angular.module('screenshots', [
    angularResource,
])
    .factory('screenshotsService', screenshotsService)
    .component('screenshotsList', screenshotsListComponent);

export default ScreenshotsModule;

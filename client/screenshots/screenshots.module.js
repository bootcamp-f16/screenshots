import angular from 'angular';
import angularResource from 'angular-resource';

import screenshotsService from './screenshots.service';
import screenshotsListComponent from './screenshots-list.component';
import screenshotsDetailComponent from './screenshots-detail.component';

const ScreenshotsModule = angular.module('screenshots', [
    angularResource,
])
    .factory('screenshotsService', screenshotsService)
    .component('screenshotsList', screenshotsListComponent)
    .component('screenshotsDetail', screenshotsDetailComponent);

export default ScreenshotsModule;

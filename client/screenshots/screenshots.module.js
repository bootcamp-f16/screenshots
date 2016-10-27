import angular from 'angular';
import angularResource from 'angular-resource';
import ngFileUpload from 'ng-file-upload';

import screenshotsService from './screenshots.service';
import screenshotsListComponent from './screenshots-list.component';
import screenshotsDetailComponent from './screenshots-detail.component';
import screenshotsAddComponent from './screenshots-add.component';

const ScreenshotsModule = angular.module('screenshots', [
    angularResource,
    ngFileUpload,
])
    .factory('screenshotsService', screenshotsService)
    .component('screenshotsList', screenshotsListComponent)
    .component('screenshotsDetail', screenshotsDetailComponent)
    .component('screenshotsAdd', screenshotsAddComponent);

export default ScreenshotsModule;

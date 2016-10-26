import angular from 'angular';

import screenshotsListComponent from './screenshots-list.component';

const ScreenshotsModule = angular.module('screenshots', [])
    .component('screenshotsList', screenshotsListComponent);

export default ScreenshotsModule;

import angular from 'angular';

import ScreenshotsModule from '../screenshots/screenshots.module';

import appComponent from './app.component';

const AppModule = angular.module('app', [
    ScreenshotsModule.name,
])
    .component('app', appComponent);

export default AppModule;

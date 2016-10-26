import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ScreenshotsModule from '../screenshots/screenshots.module';

import appComponent from './app.component';

const AppModule = angular.module('app', [
    uiRouter,
    ScreenshotsModule.name,
])
    .component('app', appComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('index', {
            url: '/',
            resolve: {
                screenshots(screenshotsService) {
                    return screenshotsService.getAllScreenshots();
                },
            },
            component: 'screenshotsList',
        }).state('screenshot', {
            url: '/screenshot/{screenshotId}',
            template: '<h1>Hi There</h1>',
        });
    });

export default AppModule;

import angular from 'angular';

import appComponent from './app.component';

const AppModule = angular.module('app', [
])
    .component('app', appComponent);

export default AppModule;

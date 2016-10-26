import template from './screenshots-list.html';
import ScreenshotsListController from './screenshots-list.controller';

const screenshotsListComponent = {
    template,
    bindings: {
        screenshots: '<',
    },
    controller: ScreenshotsListController,
};

export default screenshotsListComponent;

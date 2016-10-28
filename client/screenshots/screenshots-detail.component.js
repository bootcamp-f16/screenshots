import template from './screenshots-detail.html';

import ScreenshotsDetailController from './screenshots-detail.controller';

const screenshotsDetailComponent = {
    template,
    bindings: {
        screenshot: '<',
    },
    controller: ScreenshotsDetailController,
};

export default screenshotsDetailComponent;


function ScreenshotsDetailController(screenshotsService) {
    const ctrl = this;

    screenshotsService.getMe().then((me) => {
        ctrl.me = me;
    });

    ctrl.showActions = function showActions() {
        return ctrl.me && (ctrl.screenshot.owner === ctrl.me.id);
    };
}

export default ScreenshotsDetailController;

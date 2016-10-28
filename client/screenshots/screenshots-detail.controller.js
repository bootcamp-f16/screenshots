
function ScreenshotsDetailController(screenshotsService, $state) {
    const ctrl = this;

    screenshotsService.getMe().then((me) => {
        ctrl.me = me;
    });

    ctrl.showActions = function showActions() {
        return ctrl.me && (ctrl.screenshot.owner === ctrl.me.id);
    };

    ctrl.removeScreenshot = function removeScreenshot() {
        screenshotsService.removeScreenshot(ctrl.screenshot.id)
            .then(() => {
                $state.reload();
            });
    };
}

export default ScreenshotsDetailController;

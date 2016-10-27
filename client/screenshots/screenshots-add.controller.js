
function ScreenshotsAddController(screenshotsService, $state) {
    const ctrl = this;

    ctrl.cancelUpload = function cancelUpload() {
        ctrl.file = null;
    };

    ctrl.uploadFile = function uploadFile() {
        screenshotsService.uploadScreenshot(ctrl.file)
            .then(() => {
                $state.reload();
            });
    };
}

export default ScreenshotsAddController;


function ScreenshotsAddController(screenshotsService) {
    const ctrl = this;

    ctrl.cancelUpload = function cancelUpload() {
        ctrl.file = null;
    };

    ctrl.uploadFile = function uploadFile() {
        screenshotsService.uploadScreenshot(ctrl.file)
            .then(() => {
                alert('file uploaded');
            });
    };
}

export default ScreenshotsAddController;

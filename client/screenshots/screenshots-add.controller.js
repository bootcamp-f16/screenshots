
function ScreenshotsAddController() {
    const ctrl = this;

    ctrl.cancelUpload = function cancelUpload() {
        ctrl.file = null;
    };
}

export default ScreenshotsAddController;

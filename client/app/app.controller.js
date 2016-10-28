
function AppController(screenshotsService) {
    const ctrl = this;

    screenshotsService.getMe().then((me) => {
        ctrl.username = me.username;
    });
}

export default AppController;


function screenshotsService($resource, Upload, $http, $q) {
    const screenshotsResource = $resource('/api/screenshots/:id/', { id: '@id' });
    let me = null;

    return {
        getMe() {
            if (me) {
                return $q.when(me);
            }

            return $http.get('/api/me/').then((response) => {
                me = response.data;
                return me;
            });
        },
        getAllScreenshots() {
            return screenshotsResource.get({}).$promise.then((data) => {
                return data.results;
            });
        },
        getScreenshot(id) {
            return screenshotsResource.get({ id }).$promise.then((data) => {
                return data;
            });
        },
        uploadScreenshot(file) {
            const upload = Upload.upload({
                url: '/api/screenshots/upload/',
                data: {
                    screenshot: file,
                },
            });

            return upload;
        },
    };
}

export default screenshotsService;

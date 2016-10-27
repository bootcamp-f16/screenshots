
function screenshotsService($resource, Upload) {
    const screenshotsResource = $resource('/api/screenshots/:id/', { id: '@id' });
    return {
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

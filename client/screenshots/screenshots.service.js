
function screenshotsService($resource, Upload, $http) {
    const screenshotsResource = $resource('/api/screenshots/:id/', { id: '@id' });
    return {
        getMe() {
            return $http.get('/api/me/').then(response => response.data);
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

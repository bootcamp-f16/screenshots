
function screenshotsService($resource) {
    const screenshotsResource = $resource('/api/screenshots/:id/', { id: '@id' });
    return {
        getAllScreenshots() {
            return screenshotsResource.get({}).$promise.then((data) => {
                return data.results;
            });
        },
    };
}

export default screenshotsService;

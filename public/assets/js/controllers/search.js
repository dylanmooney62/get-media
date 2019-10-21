export default function($scope, $http) {
  $scope.results = [];
  $scope.loading = false;
  $scope.searchTerm = '';
  $scope.message = '';

  $scope.search = function() {
    $scope.results = [];
    $scope.loading = true;

    // TODO: ADD LOADING SCREEN
    // TODO: PLACEHOLDER WHEN RESULTS ARE FIRST EMPTY
    // TODO: NO RESULTS FOUND MESSAGE IF RESULTS ARE EMPTY
    // TODO: DISPLAY MESSAGES ON SCREEN
    // TODO: PAGINATION

    $http
      .get(`https://itunes.apple.com/search?term=${$scope.searchTerm}`)
      .then(({ data }) => {
        if (data.resultCount > 0) $scope.results = data.results;
        console.log(data.results);
        $scope.loading = false;
      })
      .catch((error) => {
        $scope.setMessage('Something went wrong... Please try again.');
        $scope.loading = false;
      });
  };

  $scope.setMessage = function(message) {
    $scope.message = message;
  };
}

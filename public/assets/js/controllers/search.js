export default function($scope, $http) {
  $scope.results = [];
  $scope.error = '';
  $scope.loading = false;
  $scope.searchTerm = '';

  $scope.search = function() {
    $scope.results = [];
    $scope.loading = true;

    $http
      .get(`https://itunes.apple.com/search?term=${$scope.searchTerm}`)
      .then(({ data }) => {
        if (data.resultCount > 0) $scope.results = data.results;
        console.log(data.results);
        $scope.loading = false;
      })
      .catch((error) => {
        $scope.setError('Something went wrong... Please try again.');
        $scope.loading = false;
      });
  };

  $scope.setError = function(message) {
    $scope.error = message;
    setTimeout(() => {
      $scope.error = '';
    }, 3000);
  };
}

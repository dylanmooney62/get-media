export default function($scope, $http) {
  $scope.results = [];
  $scope.loading = false;
  $scope.searchTerm = '';
  $scope.message = 'Start searching for media.';

  // TODO: APPLY SCROLLING TO TOP FOR PAGINATION ON MOBILE

  $scope.search = function() {
    $scope.results = [];

    // check if search isn't empty
    if ($scope.searchTerm) {
      // request data from api
      $scope.loading = true;
      $http
        .get(`https://itunes.apple.com/search?term='${$scope.searchTerm}'`)
        .then(({ data }) => {
          // if there is results assign them to scope
          if (data.resultCount > 0) {
            $scope.results = data.results;
          } else {
            $scope.setMessage('No results found.');
          }
          console.log(data.results);
          $scope.loading = false;
        })
        .catch((error) => {
          $scope.setMessage('Something went wrong, Please try again.');
          $scope.loading = false;
        });
    } else {
      $scope.setMessage('Start searching for media.');
    }
  };

  $scope.setMessage = function(message) {
    $scope.message = message;
  };
}

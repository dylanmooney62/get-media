export default function($scope) {
  $scope.name = '';
  $scope.email = '';
  $scope.message = '';

  $scope.onSubmit = function(e) {
    e.preventDefault();

    // check all inputs have been filled in
    if ($scope.name && $scope.email && $scope.message) {
      $scope.reset();
      M.toast({ html: 'Message sent!' });
      return;
    }

    // display message form inputs that have not been filled in

    if (!$scope.name) {
      M.toast({ html: 'Please enter your name.' });
    }

    if (!$scope.email) {
      M.toast({ html: 'Please enter your email.' });
    }

    if (!$scope.message) {
      M.toast({ html: 'Please enter your message.' });
    }
  };

  $scope.reset = function() {
    $scope.name = null;
    $scope.email = null;
    $scope.message = null;
    $scope.form.$setPristine();
  };
}

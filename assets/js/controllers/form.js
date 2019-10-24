export default function($scope) {
  $scope.name = '';
  $scope.email = '';
  $scope.message = '';

  $scope.onSubmit = function(e) {
    e.preventDefault();

    // check all inputs have been filled in
    if ($scope.name && $scope.email && $scope.message) {
      $scope.reset();
      M.toast({ html: 'Message Sent!' });
      return;
    }

    // display message form inputs that have not been filled in

    if (!$scope.name) {
      M.toast({ html: 'Please Enter Your Name!' });
    }

    if (!$scope.email) {
      M.toast({ html: 'Please Enter Your Email!' });
    }

    if (!$scope.message) {
      M.toast({ html: 'Please Enter Your Message!' });
    }
  };

  $scope.reset = function() {
    $scope.name = null;
    $scope.email = null;
    $scope.message = null;
    $scope.form.$setPristine();
  };
}

export default function($scope, $rootScope) {
  $scope.showBasket = false;
  $rootScope.$on('addedToBasket', function() {
    $scope.showBasket = true;
  });
}

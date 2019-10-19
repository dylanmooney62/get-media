export default function($scope, $rootScope) {
  $scope.basket = ['Jolly boy john'];

  $scope.addItem = function(item) {
    $scope.basket.push(item);
    console.log($scope.basket);
  };

  $rootScope.$on('addedToBasket', function(event, item) {
    $scope.addItem(item);
  });
}

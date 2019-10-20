export default function($scope, $rootScope) {
  $scope.basket = [];

  $rootScope.$on('addedToBasket', function(event, item) {
    $scope.addItem(item);
  });

  $scope.addItem = function(itemToAdd) {
    // check if item exists in basket
    const existingItem = $scope.basket.find(({ id }) => id === itemToAdd.id);

    if (existingItem) {
      // creates copy of array and adds + 1 to quantity of existing item
      $scope.basket = $scope.basket.map((basketItem) =>
        basketItem.id === existingItem.id
          ? { ...basketItem, quantity: basketItem.quantity + 1 }
          : basketItem,
      );
    } else {
      // if item doesn't exist create copy of array and add itemToAdd with quanity 1
      $scope.basket = [...$scope.basket, { ...itemToAdd, quantity: 1 }];
    }
  };
}

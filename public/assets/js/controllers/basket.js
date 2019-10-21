export default function($scope, $rootScope) {
  $scope.basket = [
    { id: 2, title: 'Apple Store Credit', credit: 30, price: 30, quantity: 2 },
  ];

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

  $scope.removeItem = function(id) {
    $scope.basket = $scope.basket.filter((item) => item.id !== id);
  };

  $scope.getTotal = function() {
    return $scope.basket.reduce((total, { quantity, price }) => {
      return total + quantity * price;
    }, 0);
  };
}

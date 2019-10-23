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

    // save new basket to local storage
    $scope.saveBasket();
  };

  $scope.removeItem = function(id) {
    // if id of item clicked is found it is removed from the array
    $scope.basket = $scope.basket.filter((item) => item.id !== id);

    // save new basket to local storage
    $scope.saveBasket();
  };

  $scope.getTotal = function() {
    // loops through array and accumulates the quantity * price of each item
    return $scope.basket.reduce((total, { quantity, price }) => {
      return total + quantity * price;
    }, 0);
  };

  $scope.saveBasket = function() {
    // removes items with quantity equal to 0 or less than 0
    const filteredBasket = $scope.basket.filter((item) => item.quantity > 0);

    // if local storage exists set basket in storage to filteredBasket
    if (window.localStorage) {
      localStorage.setItem('basket', JSON.stringify(filteredBasket));
    }
  };

  $scope.loadBasket = function() {
    // if basket exists in local store get basket and assign it to scope
    if (window.localStorage && localStorage.getItem('basket')) {
      $scope.basket = JSON.parse(localStorage.getItem('basket'));
    }
  };

  $scope.loadBasket();
}

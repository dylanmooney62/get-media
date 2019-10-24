export default function($scope, $rootScope) {
  $scope.vouchers = [
    { id: 0, title: 'Apple Store Credit', credit: 10, price: 10 },
    { id: 1, title: 'Apple Store Credit', credit: 25, price: 25 },
    { id: 2, title: 'Apple Store Credit', credit: 30, price: 30 },
    { id: 3, title: 'Apple Store Credit', credit: 50, price: 50 },
    { id: 4, title: 'Apple Store Credit', credit: 75, price: 75 },
    { id: 5, title: 'Apple Store Credit', credit: 100, price: 100 },
  ];

  // emits event which is recieved by basket.js
  $scope.addToBasket = function(item) {
    $rootScope.$emit('addedToBasket', item);
  };
}

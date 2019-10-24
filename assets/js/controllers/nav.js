export default function($scope, $rootScope) {
  $scope.showBasket = false;

  $rootScope.$on('$includeContentLoaded', function(event, templateName) {
    console.log(templateName);
    if (templateName == '/includes/sidenav.html') {
      $scope.sidenavEl = document.querySelector('.sidenav');
      $scope.sidenav = M.Sidenav.init($scope.sidenavEl, {
        edge: 'left',
      });
    }
  });

  $rootScope.$on('addedToBasket', function() {
    $scope.showBasket = true;
  });

  $scope.openSidenav = function() {
    $scope.sidenav.open();
  };
}

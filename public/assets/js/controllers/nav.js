export default function($scope) {
  $scope.$on('$includeContentLoaded', function(event, templateName) {
    const nav = document.querySelector('.sidenav');
    const navigation = M.Sidenav.init(nav, {
      edge: 'left',
    });

    document.querySelector('.js-menu').addEventListener('click', () => {
      navigation.open();
    });
  });
}

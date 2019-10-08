const nav = document.querySelector('.sidenav');
const navigation = M.Sidenav.init(nav, {
  edge: 'right',
});

document.querySelector('.js-menu').addEventListener('click', () => {
  navigation.open();
});

const nav = document.querySelector('.sidenav');
const navigation = M.Sidenav.init(nav, {
  edge: 'left',
});

document.querySelector('.js-menu').addEventListener('click', () => {
  navigation.open();
});

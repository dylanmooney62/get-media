import navCtrl from './controllers/nav.js';
import sidenavCtrl from './controllers/sidenav.js';
import shopCtrl from './controllers/shop.js';
import basketCtrl from './controllers/basket.js';
import searchCtrl from './controllers/search.js';

var app = angular.module('app', []);

app.controller('navCtrl', navCtrl);
app.controller('sidenavCtrl', sidenavCtrl);
app.controller('shopCtrl', shopCtrl);
app.controller('basketCtrl', basketCtrl);
app.controller('searchCtrl', searchCtrl);

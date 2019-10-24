import './directives/dirPagination.js';

import navCtrl from './controllers/nav.js';
import sidenavCtrl from './controllers/sidenav.js';
import shopCtrl from './controllers/shop.js';
import basketCtrl from './controllers/basket.js';
import searchCtrl from './controllers/search.js';
import formCtrl from './controllers/form.js';

var app = angular.module('app', ['angularUtils.directives.dirPagination']);

app.controller('navCtrl', navCtrl);
app.controller('sidenavCtrl', sidenavCtrl);
app.controller('shopCtrl', shopCtrl);
app.controller('basketCtrl', basketCtrl);
app.controller('searchCtrl', searchCtrl);
app.controller('formCtrl', formCtrl);

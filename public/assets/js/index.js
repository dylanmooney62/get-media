import navCtrl from './controllers/nav.js';
import voucherCtrl from './controllers/voucher.js';
import basketCtrl from './controllers/basket.js';

var app = angular.module('app', []);

app.controller('navCtrl', navCtrl);
app.controller('voucherCtrl', voucherCtrl);
app.controller('basketCtrl', basketCtrl);

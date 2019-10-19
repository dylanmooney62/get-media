import navCtrl from './controllers/nav.js';
import voucherCtrl from './controllers/voucher.js';

var app = angular.module('app', []);

app.controller('navCtrl', navCtrl);
app.controller('voucherCtrl', voucherCtrl);

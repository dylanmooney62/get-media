"use strict";function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(b,!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}(function(){'use strict';/**
   * dirPagination - AngularJS module for paginating (almost) anything.
   *
   *
   * Credits
   * =======
   *
   * Daniel Tabuenca: https://groups.google.com/d/msg/angular/an9QpzqIYiM/r8v-3W1X5vcJ
   * for the idea on how to dynamically invoke the ng-repeat directive.
   *
   * I borrowed a couple of lines and a few attribute names from the AngularUI Bootstrap project:
   * https://github.com/angular-ui/bootstrap/blob/master/src/pagination/pagination.js
   *
   * Copyright 2014 Michael Bromley <michael@michaelbromley.co.uk>
   */function a(a,b){a.showBasket=!1,a.sidenavEl=document.querySelector(".sidenav"),a.sidenav=M.Sidenav.init(a.sidenavEl,{edge:"left"}),b.$on("addedToBasket",function(){a.showBasket=!0}),a.openSidenav=function(){a.sidenav.open()}}function b(a,b){// emits event which is recieved by basket.js
a.vouchers=[{id:0,title:"Apple Store Credit",credit:10,price:10},{id:1,title:"Apple Store Credit",credit:25,price:25},{id:2,title:"Apple Store Credit",credit:30,price:30},{id:3,title:"Apple Store Credit",credit:50,price:50},{id:4,title:"Apple Store Credit",credit:75,price:75},{id:5,title:"Apple Store Credit",credit:100,price:100}],a.addToBasket=function(a){b.$emit("addedToBasket",a)}}function c(a,b){a.basket=[],b.$on("addedToBasket",function(b,c){a.addItem(c)}),a.addItem=function(b){// check if item exists in basket
var c=a.basket.find(function(a){var c=a.id;return c===b.id});// save new basket to local storage
a.basket=c?a.basket.map(function(a){return a.id===c.id?_objectSpread({},a,{quantity:a.quantity+1}):a}):[].concat(_toConsumableArray(a.basket),[_objectSpread({},b,{quantity:1})]),a.saveBasket()},a.removeItem=function(b){// if id of item clicked is found it is removed from the array
// save new basket to local storage
a.basket=a.basket.filter(function(a){return a.id!==b}),a.saveBasket()},a.getTotal=function(){// loops through array and accumulates the quantity * price of each item
var b=a.basket.reduce(function(a,b){var c=b.quantity,d=b.price;return a+c*d},0);return b||0},a.saveBasket=function(){// removes items with quantity equal to 0 or less than 0
var b=a.basket.filter(function(a){return 0<a.quantity});// if local storage exists set basket in storage to filteredBasket
window.localStorage&&localStorage.setItem("basket",JSON.stringify(b))},a.loadBasket=function(){window.localStorage&&localStorage.getItem("basket")&&(a.basket=JSON.parse(localStorage.getItem("basket")))},a.loadBasket()}function d(a,b){a.results=[],a.loading=!1,a.searchTerm="",a.message="Start searching for media.",a.search=function(){a.results=[],a.searchTerm?(a.loading=!0,b.get("https://itunes.apple.com/search?term=\"".concat(a.searchTerm,"\"")).then(function(b){var c=b.data;0<c.resultCount?a.results=c.results:a.setMessage("No results found."),a.loading=!1})["catch"](function(){a.setMessage("Something went wrong. Please try again."),a.loading=!1})):a.setMessage("Start searching for media.")},a.setMessage=function(b){a.message=b}}function e(a){a.name="",a.email="",a.message="",a.onSubmit=function(b){// check all inputs have been filled in
return b.preventDefault(),a.name&&a.email&&a.message?(a.reset(),void M.toast({html:"Message sent!"})):void(!a.name&&M.toast({html:"Please enter your name."}),!a.email&&M.toast({html:"Please enter your email."}),!a.message&&M.toast({html:"Please enter your message."}));// display message form inputs that have not been filled in
},a.reset=function(){a.name=null,a.email=null,a.message=null,a.form.$setPristine()}}e.$inject=["$scope"],d.$inject=["$scope","$http"],c.$inject=["$scope","$rootScope"],b.$inject=["$scope","$rootScope"],a.$inject=["$scope","$rootScope"],function(){/**
     * This is a helper directive that allows correct compilation when in multi-element mode (ie dir-paginate-start, dir-paginate-end).
     * It is dynamically added to all elements in the dir-paginate compile function, and it prevents further compilation of
     * any inner directives. It is then removed in the link function, and all inner directives are then manually compiled.
     */ /**
     * This filter slices the collection into pages based on the current page number and number of items per page.
     * @param paginationService
     * @returns {Function}
     */ /**
     * Shim for the Object.keys() method which does not exist in IE < 9
     * @param obj
     * @returns {Array}
     */function a(a){if(!Object.keys){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b}return Object.keys(a)}/**
     * This service allows the various parts of the module to communicate and stay in sync.
     */ /**
     * Module
     */angular.module("angularUtils.directives.dirPagination",[]).directive("dirPaginate",["$compile","$parse","paginationService",function(a,b,c){/**
       * If a pagination id has been specified, we need to check that it is present as the second argument passed to
       * the itemsPerPage filter. If it is not there, we add it and return the modified expression.
       *
       * @param expression
       * @param paginationId
       * @returns {*}
       */function d(a,b){var c,d=!!a.match(/(\|\s*itemsPerPage\s*:[^|]*:[^|]*)/);return c="__default"===b||d?a:a.replace(/(\|\s*itemsPerPage\s*:\s*[^|\s]*)/,"$1 : '"+b+"'"),c}/**
       * Adds the ng-repeat directive to the element. In the case of multi-element (-start, -end) it adds the
       * appropriate multi-element ng-repeat to the first and last element in the range.
       * @param element
       * @param attrs
       * @param repeatExpression
       */function e(a,b,c){a[0].hasAttribute("dir-paginate-start")||a[0].hasAttribute("data-dir-paginate-start")?(b.$set("ngRepeatStart",c),a.eq(a.length-1).attr("ng-repeat-end",!0)):b.$set("ngRepeat",c)}/**
       * Adds the dir-paginate-no-compile directive to each element in the tElement range.
       * @param tElement
       */function f(a){angular.forEach(a,function(a){1===a.nodeType&&angular.element(a).attr("dir-paginate-no-compile",!0)})}/**
       * Removes the variations on dir-paginate (data-, -start, -end) and the dir-paginate-no-compile directives.
       * @param element
       */function g(a){angular.forEach(a,function(a){1===a.nodeType&&angular.element(a).removeAttr("dir-paginate-no-compile")}),a.eq(0).removeAttr("dir-paginate-start").removeAttr("dir-paginate").removeAttr("data-dir-paginate-start").removeAttr("data-dir-paginate"),a.eq(a.length-1).removeAttr("dir-paginate-end").removeAttr("data-dir-paginate-end")}/**
       * Creates a getter function for the current-page attribute, using the expression provided or a default value if
       * no current-page expression was specified.
       *
       * @param scope
       * @param attrs
       * @param paginationId
       * @returns {*}
       */function h(a,c,d){var e;if(c.currentPage)e=b(c.currentPage);else{// If the current-page attribute was not set, we'll make our own.
// Replace any non-alphanumeric characters which might confuse
// the $parse service and give unexpected results.
// See https://github.com/michaelbromley/angularUtils/issues/233
// Adding the '_' as a prefix resolves an issue where paginationId might be have a digit as its first char
// See https://github.com/michaelbromley/angularUtils/issues/400
var f="_"+(d+"__currentPage").replace(/\W/g,"_");a[f]=1,e=b(f)}return e}return{terminal:!0,multiElement:!0,priority:100,compile:function(i,j){var k=j.dirPaginate,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),m=/\|\s*itemsPerPage\s*:\s*(.*\(\s*\w*\)|([^\)]*?(?=\s+as\s+))|[^\)]*)/;// regex taken directly from https://github.com/angular/angular.js/blob/v1.4.x/src/ng/directive/ngRepeat.js#L339
if(null===l[2].match(m))throw"pagination directive: the 'itemsPerPage' filter must be set.";var n=l[2].replace(m,""),o=b(n);f(i);// If any value is specified for paginationId, we register the un-evaluated expression at this stage for the benefit of any
// dir-pagination-controls directives that may be looking for this ID.
var p=j.paginationId||"__default";return c.registerInstance(p),function(f,i,j){// Now that we have access to the `scope` we can interpolate any expression given in the paginationId attribute and
// potentially register a new ID if it evaluates to a different value than the rawId.
var l=b(j.paginationId)(f)||j.paginationId||"__default";// (TODO: this seems sound, but I'm reverting as many bug reports followed it's introduction in 0.11.0.
// Needs more investigation.)
// In case rawId != paginationId we deregister using rawId for the sake of general cleanliness
// before registering using paginationId
// paginationService.deregisterInstance(rawId);
c.registerInstance(l);var m=d(k,l);e(i,j,m),g(i);var n=a(i),p=h(f,j,l);c.setCurrentPageParser(l,p,f),"undefined"==typeof j.totalItems?(c.setAsyncModeFalse(l),f.$watchCollection(function(){return o(f)},function(a){if(a){var b=a instanceof Array?a.length:Object.keys(a).length;c.setCollectionLength(l,b)}})):(c.setAsyncModeTrue(l),f.$watch(function(){return b(j.totalItems)(f)},function(a){0<=a&&c.setCollectionLength(l,a)})),n(f)}}}}]).directive("dirPaginateNoCompile",function(){return{priority:5e3,terminal:!0}}).directive("dirPaginationControls",["paginationService","paginationTemplate",function(a,b){var e=Math.ceil;/**
       * Generate an array of page numbers (or the '...' string) which is used in an ng-repeat to generate the
       * links used in pagination
       *
       * @param currentPage
       * @param rowsPerPage
       * @param paginationRange
       * @param collectionLength
       * @returns {Array}
       */function c(a,b,c,f){var g,h=[],j=e(b/c),k=e(f/2);g=a<=k?"start":j-k<a?"end":"middle";for(var l=1;l<=j&&l<=f;){var m=d(l,a,f,j),n=2===l&&("middle"===g||"end"===g),o=l===f-1&&("middle"===g||"start"===g);f<j&&(n||o)?h.push("..."):h.push(m),l++}return h}/**
       * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that position.
       *
       * @param i
       * @param currentPage
       * @param paginationRange
       * @param totalPages
       * @returns {*}
       */function d(a,b,c,d){var f=e(c/2);return a===c?d:1===a?a:c<d?d-f<b?d-c+a:f<b?b-f+a:a:a}var f=/^\d+$/,g={restrict:"AE",scope:{maxSize:"=?",onPageChange:"&?",paginationId:"=?",autoHide:"=?"},link:function(b,d,e){var k=Math.max;function g(d){if(a.isRegistered(m)&&j(d)){var e=b.pagination.current;b.pages=c(d,a.getCollectionLength(m),a.getItemsPerPage(m),o),b.pagination.current=d,i(),b.onPageChange&&b.onPageChange({newPageNumber:d,oldPageNumber:e})}}function h(){if(a.isRegistered(m)){var d=parseInt(a.getCurrentPage(m))||1;b.pages=c(d,a.getCollectionLength(m),a.getItemsPerPage(m),o),b.pagination.current=d,b.pagination.last=b.pages[b.pages.length-1],b.pagination.last<b.pagination.current?b.setCurrent(b.pagination.last):i()}}/**
         * This function updates the values (lower, upper, total) of the `scope.range` object, which can be used in the pagination
         * template to display the current page range, e.g. "showing 21 - 40 of 144 results";
         */function i(){var c=Math.min;if(a.isRegistered(m)){var d=a.getCurrentPage(m),e=a.getItemsPerPage(m),f=a.getCollectionLength(m);b.range.lower=(d-1)*e+1,b.range.upper=c(d*e,f),b.range.total=f}}function j(a){return f.test(a)&&0<a&&a<=b.pagination.last}// rawId is the un-interpolated value of the pagination-id attribute. This is only important when the corresponding dir-paginate directive has
// not yet been linked (e.g. if it is inside an ng-if block), and in that case it prevents this controls directive from assuming that there is
// no corresponding dir-paginate directive and wrongly throwing an exception.
var l=e.paginationId||"__default",m=b.paginationId||e.paginationId||"__default";if(!a.isRegistered(m)&&!a.isRegistered(l)){var n="__default"===m?" ":" (id: "+m+") ";window.console&&console.warn("Pagination directive: the pagination controls"+n+"cannot be used without the corresponding pagination directive, which was not found at link time.")}b.maxSize||(b.maxSize=9),b.autoHide=void 0===b.autoHide||b.autoHide,b.directionLinks=!angular.isDefined(e.directionLinks)||b.$parent.$eval(e.directionLinks),b.boundaryLinks=!!angular.isDefined(e.boundaryLinks)&&b.$parent.$eval(e.boundaryLinks);var o=k(b.maxSize,5);b.pages=[],b.pagination={last:1,current:1},b.range={lower:1,upper:1,total:1},b.$watch("maxSize",function(a){a&&(o=k(b.maxSize,5),h())}),b.$watch(function(){if(a.isRegistered(m))return(a.getCollectionLength(m)+1)*a.getItemsPerPage(m)},function(a){0<a&&h()}),b.$watch(function(){if(a.isRegistered(m))return a.getItemsPerPage(m)},function(a,c){a!=c&&"undefined"!=typeof c&&g(b.pagination.current)}),b.$watch(function(){if(a.isRegistered(m))return a.getCurrentPage(m)},function(a,b){a!=b&&g(a)}),b.setCurrent=function(b){a.isRegistered(m)&&j(b)&&(b=parseInt(b,10),a.setCurrentPage(m,b))},b.tracker=function(a,b){return a+"_"+b}}},h=b.getString();return void 0===h?g.templateUrl=function(a,c){return c.templateUrl||b.getPath()}:g.template=h,g}]).filter("itemsPerPage",["paginationService",function(b){return function(c,d,e){if("undefined"==typeof e&&(e="__default"),!b.isRegistered(e))throw"pagination directive: the itemsPerPage id argument (id: "+e+") does not match a registered pagination-id.";var f,g;if(angular.isObject(c)){if(d=parseInt(d)||9999999999,g=b.isAsyncMode(e)?0:(b.getCurrentPage(e)-1)*d,f=g+d,b.setItemsPerPage(e,d),c instanceof Array)// the array just needs to be sliced
return c.slice(g,f);// in the case of an object, we need to get an array of keys, slice that, then map back to
// the original object.
var h={};return angular.forEach(a(c).slice(g,f),function(a){h[a]=c[a]}),h}return c}}]).service("paginationService",function(){var a,b={};this.registerInstance=function(c){"undefined"==typeof b[c]&&(b[c]={asyncMode:!1},a=c)},this.deregisterInstance=function(a){delete b[a]},this.isRegistered=function(a){return"undefined"!=typeof b[a]},this.getLastInstanceId=function(){return a},this.setCurrentPageParser=function(a,c,d){b[a].currentPageParser=c,b[a].context=d},this.setCurrentPage=function(a,c){b[a].currentPageParser.assign(b[a].context,c)},this.getCurrentPage=function(a){var c=b[a].currentPageParser;return c?c(b[a].context):1},this.setItemsPerPage=function(a,c){b[a].itemsPerPage=c},this.getItemsPerPage=function(a){return b[a].itemsPerPage},this.setCollectionLength=function(a,c){b[a].collectionLength=c},this.getCollectionLength=function(a){return b[a].collectionLength},this.setAsyncModeTrue=function(a){b[a].asyncMode=!0},this.setAsyncModeFalse=function(a){b[a].asyncMode=!1},this.isAsyncMode=function(a){return b[a].asyncMode}}/**
     * This provider allows global configuration of the template path used by the dir-pagination-controls directive.
     */).provider("paginationTemplate",function(){var a,b="angularUtils.directives.dirPagination.template";/**
       * Set a templateUrl to be used by all instances of <dir-pagination-controls>
       * @param {String} path
       */ /**
       * Set a string of HTML to be used as a template by all instances
       * of <dir-pagination-controls>. If both a path *and* a string have been set,
       * the string takes precedence.
       * @param {String} str
       */this.setPath=function(a){b=a},this.setString=function(b){a=b},this.$get=function(){return{getPath:function getPath(){return b},getString:function getString(){return a}}}}).run(["$templateCache",function(a){a.put("angularUtils.directives.dirPagination.template","<ul class=\"pagination\" ng-if=\"1 < pages.length || !autoHide\"><li ng-if=\"boundaryLinks\" ng-class=\"{ disabled : pagination.current == 1 }\"><a href=\"\" ng-click=\"setCurrent(1)\">&laquo;</a></li><li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == 1 }\"><a href=\"\" ng-click=\"setCurrent(pagination.current - 1)\">&lsaquo;</a></li><li ng-repeat=\"pageNumber in pages track by tracker(pageNumber, $index)\" ng-class=\"{ active : pagination.current == pageNumber, disabled : pageNumber == '...' || ( ! autoHide && pages.length === 1 ) }\"><a href=\"\" ng-click=\"setCurrent(pageNumber)\">{{ pageNumber }}</a></li><li ng-if=\"directionLinks\" ng-class=\"{ disabled : pagination.current == pagination.last }\"><a href=\"\" ng-click=\"setCurrent(pagination.current + 1)\">&rsaquo;</a></li><li ng-if=\"boundaryLinks\"  ng-class=\"{ disabled : pagination.current == pagination.last }\"><a href=\"\" ng-click=\"setCurrent(pagination.last)\">&raquo;</a></li></ul>")}])}();var f=angular.module("app",["angularUtils.directives.dirPagination"]);f.controller("navCtrl",a),f.controller("shopCtrl",b),f.controller("basketCtrl",c),f.controller("searchCtrl",d),f.controller("formCtrl",e)})();

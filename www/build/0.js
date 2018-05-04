webpackJsonp([0],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewrequestPageModule", function() { return ViewrequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewrequest__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewrequestPageModule = /** @class */ (function () {
    function ViewrequestPageModule() {
    }
    ViewrequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__viewrequest__["a" /* ViewrequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viewrequest__["a" /* ViewrequestPage */]),
            ],
        })
    ], ViewrequestPageModule);
    return ViewrequestPageModule;
}());

//# sourceMappingURL=viewrequest.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewrequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ViewrequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewrequestPage = /** @class */ (function () {
    function ViewrequestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewrequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewrequestPage');
    };
    ViewrequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewrequest',template:/*ion-inline-start:"/Users/appdevmacbook2/Documents/courier-app/app/src/pages/viewrequest/viewrequest.html"*/'<!--\n  Generated template for the ViewrequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Accept Request</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="app-wrapper">\n\n    <div class="forms-wrapper mt-30">\n        <div class="delivery-address">\n            <div class="map-wrapper">\n                    <i class="fas fa-map-marker"></i>\n            </div>\n            <div class="address-details">\n                <p class="thickText">Deliver pouch to:</p>\n                <p class="smText">Plot 714, Processing center, Adetokunbo Ademola, VI, Lagos</p>\n            </div>\n        </div>\n\n        <div class="mt-20">\n            <button class="btn btn-primary">Scan QR Code <i class="fas fa-qrcode"></i></button>\n\n            <p class="smText mt-30">OR</p>\n\n            <div class="form-group mt-30">\n                <label>Input barcode number</label>\n                <input class="form-control input-code" placeholder="e.g. awsedrfgtyhuj12sd4">\n            </div>\n        </div>\n    </div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/appdevmacbook2/Documents/courier-app/app/src/pages/viewrequest/viewrequest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ViewrequestPage);
    return ViewrequestPage;
}());

//# sourceMappingURL=viewrequest.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
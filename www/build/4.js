webpackJsonp([4],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkdevicePageModule", function() { return LinkdevicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linkdevice__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LinkdevicePageModule = /** @class */ (function () {
    function LinkdevicePageModule() {
    }
    LinkdevicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__linkdevice__["a" /* LinkdevicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__linkdevice__["a" /* LinkdevicePage */]),
            ],
        })
    ], LinkdevicePageModule);
    return LinkdevicePageModule;
}());

//# sourceMappingURL=linkdevice.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkdevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sessionprovider_sessionprovider__ = __webpack_require__(199);
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
 * Generated class for the LinkdevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LinkdevicePage = /** @class */ (function () {
    function LinkdevicePage(sessionProvider, navCtrl, navParams) {
        this.sessionProvider = sessionProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getRegisteredUser();
    }
    LinkdevicePage.prototype.ionViewDidLoad = function () {
    };
    LinkdevicePage.prototype.getRegisteredUser = function () {
        this.registeredUser = this.sessionProvider.GetName();
    };
    LinkdevicePage.prototype.linkDevice = function () {
        this.navCtrl.setRoot("RiderdashboardPage");
    };
    LinkdevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-linkdevice',template:/*ion-inline-start:"/Users/appdevmac1/ionic-projects/CourierApp/src/pages/linkdevice/linkdevice.html"*/'<!--\n  Generated template for the LinkdevicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <div class="backBtn-wrapper">\n            <span class="icon icon-back"></span>\n        </div>\n        <ion-title class="ion-title">Welcome</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="app-wrapper">\n    <header class="header">\n        <!-- <div class="backBtn-wrapper">\n                <i class="fas fa-arrow-left"></i>\n        </div> -->\n        <div class="title-wrapper">\n            <h1 class="sm-title">Welcome, {{ registeredUser }}</h1>\n        </div>\n    </header>\n\n    <div class="forms-wrapper mt-20">\n        <p class="msg-prompt">This mobile device has now been linked to your email address.</p>\n        <div class="mt-30">\n            <button class="btn btn-primary" (click)="linkDevice()">Continue to Requests</button>\n        </div>\n    </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/appdevmac1/ionic-projects/CourierApp/src/pages/linkdevice/linkdevice.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_sessionprovider_sessionprovider__["a" /* SessionproviderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_sessionprovider_sessionprovider__["a" /* SessionproviderProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object])
    ], LinkdevicePage);
    return LinkdevicePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=linkdevice.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
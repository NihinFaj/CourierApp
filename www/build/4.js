webpackJsonp([4],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkdevicePageModule", function() { return LinkdevicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linkdevice__ = __webpack_require__(322);
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

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkdevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sessionprovider_sessionprovider__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_courierprovider_courierprovider__ = __webpack_require__(111);
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
    function LinkdevicePage(courierProvider, sessionProvider, navCtrl, navParams, loadingCtrl) {
        this.courierProvider = courierProvider;
        this.sessionProvider = sessionProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    LinkdevicePage.prototype.ionViewDidLoad = function () {
    };
    // async getUserRole() {
    //   var userRole = await this.sessionProvider.getStorage('role');
    //   this.role = userRole;
    // }
    // GoToRequests() {
    // this.sessionProvider.setStorage('roleValue', this.role).then(() => {
    // this.navCtrl.setRoot("RiderdashboardPage");      
    // });
    // }
    LinkdevicePage.prototype.GoToRequests = function () {
        this.navCtrl.setRoot("RiderdashboardPage");
    };
    LinkdevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-linkdevice',template:/*ion-inline-start:"/Users/appdevmac1/ionic-projects/CourierApp/src/pages/linkdevice/linkdevice.html"*/'<!--\n  Generated template for the LinkdevicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <div class="backBtn-wrapper">\n            <span class="icon icon-back"></span>\n        </div>\n        <ion-title class="ion-title">Welcome</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="app-wrapper">\n    <header class="header">\n        <!-- <div class="backBtn-wrapper">\n                <i class="fas fa-arrow-left"></i>\n        </div> -->\n        <div class="title-wrapper">\n            <br>\n            <h1 class="sm-title">Welcome, {{ data.name }}</h1>\n        </div>\n    </header>\n\n    <div class="forms-wrapper mt-20">\n        <p class="msg-prompt">Your mobile device has now been linked to your email address. Click below to view all requests.</p>\n        <div class="mt-30">\n            <button class="btn btn-primary" (click)="GoToRequests()">Continue to Requests</button>\n        </div>\n    </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/appdevmac1/ionic-projects/CourierApp/src/pages/linkdevice/linkdevice.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_courierprovider_courierprovider__["a" /* CourierproviderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_courierprovider_courierprovider__["a" /* CourierproviderProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_sessionprovider_sessionprovider__["a" /* SessionproviderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_sessionprovider_sessionprovider__["a" /* SessionproviderProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
    ], LinkdevicePage);
    return LinkdevicePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=linkdevice.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
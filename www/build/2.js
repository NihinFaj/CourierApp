webpackJsonp([2],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderdashboardPageModule", function() { return RiderdashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__riderdashboard__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RiderdashboardPageModule = /** @class */ (function () {
    function RiderdashboardPageModule() {
    }
    RiderdashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__riderdashboard__["a" /* RiderdashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__riderdashboard__["a" /* RiderdashboardPage */]),
            ],
        })
    ], RiderdashboardPageModule);
    return RiderdashboardPageModule;
}());

//# sourceMappingURL=riderdashboard.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderdashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_courierprovider_courierprovider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sessionprovider_sessionprovider__ = __webpack_require__(110);
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
 * Generated class for the RiderdashboardPage page.
 *
 * See https://ionicframewoironk.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RiderdashboardPage = /** @class */ (function () {
    function RiderdashboardPage(sessionProvider, loadingCtrl, courierProvider, navCtrl, navParams) {
        this.sessionProvider = sessionProvider;
        this.loadingCtrl = loadingCtrl;
        this.courierProvider = courierProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.role = "Rider";
        this.getRiderRequestURL = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/get-all-rider-requests';
    }
    RiderdashboardPage.prototype.ionViewDidLoad = function () {
        this.getAllRiderRequest();
    };
    RiderdashboardPage.prototype.getAllRiderRequest = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({ content: "" });
        this.loading.present();
        this.courierProvider.callService(this.getRiderRequestURL)
            .then(function (result) {
            if (result.StatusCode == 1000) {
                _this.loading.dismissAll();
                _this.allRequests = JSON.parse(result.Message);
                console.log(_this.allRequests);
                if (_this.allRequests.length === 0) {
                    _this.courierProvider.presentAlert("There are no available request at the moment");
                    return false;
                }
            }
            else {
                _this.loading.dismissAll();
                _this.courierProvider.presentAlert(result.Error);
            }
        }, function (err) {
            _this.loading.dismissAll();
            console.log("Call entered exception");
            console.log(err);
            _this.courierProvider.presentAlert("Service not available at the moment, please try again later");
        });
    };
    RiderdashboardPage.prototype.acceptRequest = function (reqDets) {
        var _this = this;
        this.sessionProvider.setStorage('requestDetails', reqDets).then(function () {
            _this.navCtrl.setRoot("ViewrequestPage");
        });
    };
    RiderdashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-riderdashboard',template:/*ion-inline-start:"/Users/appdevmac1/ionic-projects/CourierApp/src/pages/riderdashboard/riderdashboard.html"*/'<!--\n  Generated template for the RiderdashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <div class="backBtn-wrapper">\n        <span class="icon icon-back"></span>\n    </div>\n    <ion-title class="ion-title">Today\'s Request</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="app-wrapper">\n    <!-- <header class="header">\n        <div class="title-wrapper">\n            <h1 class="sm-title">Today\'s Request</h1>\n        </div>\n    </header> -->\n\n    <div class="cards-wrapper mt-10" >\n\n       <div class="card requestCard" *ngFor="let request of this.allRequests">\n           <div class="cardContent">\n               <div class="listGroup">\n                    <div class="cardContent-list">\n                        <p class="list-title">Delivery type:</p>\n                        <p class="list-content">{{ request.Delivery_Type }}</p>\n                    </div>\n                    <div class="cardContent-list">\n                        <p class="list-title">Date Initiated:</p>\n                        <p class="list-content">{{ request.Initiating_Date }}</p>\n                    </div>\n               </div>\n               <div class="listGroup">\n                    <div class="cardContent-list">\n                        <p class="list-title">Initiating Officer:</p>\n                        <p class="list-content">{{ request.Initiating_Officer }}</p>\n                    </div>\n                    <div class="cardContent-list">\n                        <p class="list-title">Pick-up Branch:</p>\n                        <p class="list-content">{{ request.PickUp_Branch }}</p>\n                    </div>\n               </div>\n               <div class="listGroup">\n                    <div class="cardContent-list">\n                        <p class="list-title">Item Type:</p>\n                        <p class="list-content">{{ request.Item_Type }}</p>\n                    </div>\n                    <div class="cardContent-list">\n                        <p class="list-title">Drop-off Branch:</p>\n                        <p class="list-content">{{ request.Delivery_Branch }}</p>\n                    </div>\n               </div>\n           </div>\n           <div class="accept-wrapper" (click)="acceptRequest(request)">\n               <a class="acceptRequest">accept request</a>\n           </div>\n       </div>\n    </div>\n\n\n    <footer>\n        <div class="btn-group">\n            <button class="btn btn-footer btn-primary">Scan QR Code</button>\n            <button class="btn btn-footer btn-accent">Input Barcode</button>\n        </div>\n    </footer>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/appdevmac1/ionic-projects/CourierApp/src/pages/riderdashboard/riderdashboard.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_sessionprovider_sessionprovider__["a" /* SessionproviderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_sessionprovider_sessionprovider__["a" /* SessionproviderProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_courierprovider_courierprovider__["a" /* CourierproviderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_courierprovider_courierprovider__["a" /* CourierproviderProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _e || Object])
    ], RiderdashboardPage);
    return RiderdashboardPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=riderdashboard.js.map

/***/ })

});
//# sourceMappingURL=2.js.map
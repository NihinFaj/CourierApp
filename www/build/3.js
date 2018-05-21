webpackJsonp([3],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailroomdashboardPageModule", function() { return MailroomdashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mailroomdashboard__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MailroomdashboardPageModule = /** @class */ (function () {
    function MailroomdashboardPageModule() {
    }
    MailroomdashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mailroomdashboard__["a" /* MailroomdashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mailroomdashboard__["a" /* MailroomdashboardPage */]),
            ],
        })
    ], MailroomdashboardPageModule);
    return MailroomdashboardPageModule;
}());

//# sourceMappingURL=mailroomdashboard.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailroomdashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
 * Generated class for the MailroomdashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MailroomdashboardPage = /** @class */ (function () {
    function MailroomdashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MailroomdashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MailroomdashboardPage');
    };
    MailroomdashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mailroomdashboard',template:/*ion-inline-start:"/Users/appdevmac1/ionic-projects/CourierApp/src/pages/mailroomdashboard/mailroomdashboard.html"*/'<!--\n  Generated template for the MailroomdashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Today\'s Request</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="app-wrapper">\n    <!-- <header class="header">\n        <div class="title-wrapper">\n            <h1 class="sm-title">Today\'s Request</h1>\n        </div>\n    </header> -->\n\n    <div class="cards-wrapper mt-30">\n\n       <div class="card requestCard">\n           <div class="cardContent">\n               <div class="listGroup">\n                    <div class="cardContent-list">\n                        <p class="list-title">Delivery type:</p>\n                        <p class="list-content">Within Lagos</p>\n                    </div>\n                    <div class="cardContent-list">\n                        <p class="list-title">Rider’s Date Initiated:</p>\n                        <p class="list-content">3:00pm 12/05/2018</p>\n                    </div>\n               </div>\n               <div class="listGroup">\n                    <div class="cardContent-list">\n                        <p class="list-title">Initiating Officer:</p>\n                        <p class="list-content">Motolani Oyinloye</p>\n                    </div>\n                    <div class="cardContent-list">\n                        <p class="list-title">Pick-up Branch:</p>\n                        <p class="list-content">635, Akin Adesola street, VI, Lagos</p>\n                    </div>\n               </div>\n               <div class="listGroup">\n                    <div class="cardContent-list">\n                        <p class="list-title">Item Type:</p>\n                        <p class="list-content">Parcel</p>\n                    </div>\n                    <div class="cardContent-list">\n                        <p class="list-title">Drop-off Branch:</p>\n                        <p class="list-content">Zone 2, wuse, Gwadalaga, Abuja</p>\n                    </div>\n               </div>\n           </div>\n           <div class="accept-wrapper" (click)="acceptRequest()">\n               <a class="acceptRequest">accept request</a>\n           </div>\n       </div>\n\n\n       <div class="card requestCard">\n          <div class="cardContent">\n              <div class="listGroup">\n                   <div class="cardContent-list">\n                       <p class="list-title">Delivery type:</p>\n                       <p class="list-content">Within Lagos</p>\n                   </div>\n                   <div class="cardContent-list">\n                       <p class="list-title">Rider’s Date Initiated:</p>\n                       <p class="list-content">3:00pm 12/05/2018</p>\n                   </div>\n              </div>\n              <div class="listGroup">\n                   <div class="cardContent-list">\n                       <p class="list-title">Initiating Officer:</p>\n                       <p class="list-content">Motolani Oyinloye</p>\n                   </div>\n                   <div class="cardContent-list">\n                       <p class="list-title">Pick-up Branch:</p>\n                       <p class="list-content">635, Akin Adesola street, VI, Lagos</p>\n                   </div>\n              </div>\n              <div class="listGroup">\n                   <div class="cardContent-list">\n                       <p class="list-title">Item Type:</p>\n                       <p class="list-content">Parcel</p>\n                   </div>\n                   <div class="cardContent-list">\n                       <p class="list-title">Drop-off Branch:</p>\n                       <p class="list-content">Zone 2, wuse, Gwadalaga, Abuja</p>\n                   </div>\n              </div>\n          </div>\n          <div class="accept-wrapper">\n              <a class="acceptRequest">accept request</a>\n          </div>\n      </div>\n      \n\n       <div class="card requestCard">\n            <div class="cardContent">\n                <div class="listGroup">\n                    <div class="cardContent-list">\n                        <p class="list-title">Delivery type:</p>\n                        <p class="list-content">Outside Lagos</p>\n                    </div>\n                    <div class="cardContent-list">\n                        <p class="list-title">Rider’s Date Initiated:</p>\n                        <p class="list-content">3:00pm 12/05/2018</p>\n                    </div>\n                </div>\n                <div class="listGroup">\n                    <div class="cardContent-list">\n                        <p class="list-title">Initiating Officer:</p>\n                        <p class="list-content">Faith Afolabi-Jumbo</p>\n                    </div>\n                    <div class="cardContent-list">\n                        <p class="list-title">Pick-up Branch:</p>\n                        <p class="list-content">635, Akin Adesola street, VI, Lagos</p>\n                    </div>\n                </div>\n                <div class="listGroup">\n                    <div class="cardContent-list">\n                        <p class="list-title">Item Type:</p>\n                        <p class="list-content">Parcel</p>\n                    </div>\n                    <div class="cardContent-list">\n                        <p class="list-title">Drop-off Branch:</p>\n                        <p class="list-content">Zone 2, wuse, Gwadalaga, Abuja</p>\n                    </div>\n                </div>\n            </div>\n            <div class="accept-wrapper">\n                <a class="acceptRequest">accept request</a>\n            </div>\n        </div>\n    </div>\n\n    <footer>\n        <div class="btn-group">\n            <button class="btn btn-footer btn-primary">Scan QR Code</button>\n            <button class="btn btn-footer btn-accent">Input Barcode</button>\n        </div>\n    </footer>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/appdevmac1/ionic-projects/CourierApp/src/pages/mailroomdashboard/mailroomdashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MailroomdashboardPage);
    return MailroomdashboardPage;
}());

//# sourceMappingURL=mailroomdashboard.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
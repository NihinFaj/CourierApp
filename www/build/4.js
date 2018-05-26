webpackJsonp([4],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailroomsuccesspagePageModule", function() { return MailroomsuccesspagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mailroomsuccesspage__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MailroomsuccesspagePageModule = /** @class */ (function () {
    function MailroomsuccesspagePageModule() {
    }
    MailroomsuccesspagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mailroomsuccesspage__["a" /* MailroomsuccesspagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mailroomsuccesspage__["a" /* MailroomsuccesspagePage */]),
            ],
        })
    ], MailroomsuccesspagePageModule);
    return MailroomsuccesspagePageModule;
}());

//# sourceMappingURL=mailroomsuccesspage.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailroomsuccesspagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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
 * Generated class for the MailroomsuccesspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MailroomsuccesspagePage = /** @class */ (function () {
    function MailroomsuccesspagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MailroomsuccesspagePage.prototype.ionViewDidLoad = function () {
    };
    MailroomsuccesspagePage.prototype.goToDashboard = function () {
        console.log("Mailroom request was succesful, going back to Request Page");
        this.navCtrl.setRoot("ViewrequestmailroomPage");
    };
    MailroomsuccesspagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mailroomsuccesspage',template:/*ion-inline-start:"/Users/appdevmacbook2/Documents/courier-app/app/src/pages/mailroomsuccesspage/mailroomsuccesspage.html"*/'<!--\n  Generated template for the SuccesspagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <div class="backBtn-wrapper">\n          <span class="icon icon-close"></span>\n      </div>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div class="app-wrapper">\n    <div class="confirmation-msg">\n      <h1 class="bigText">Package collected successfully!</h1>\n    </div>\n    <div class="confirmation-icon mt-30">\n        <!-- <img src="../../assets/imgs/raise-hand.png" class="roundIcon-bg"> -->\n        <img src="../assets/imgs/raise-hand.png" class="roundIcon-bg">\n    </div>\n    <div class="confirmBtn-wrapper">\n      <button class="btn btn-half btn-secondary" (click)="goToDashboard()">Close</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/appdevmacbook2/Documents/courier-app/app/src/pages/mailroomsuccesspage/mailroomsuccesspage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MailroomsuccesspagePage);
    return MailroomsuccesspagePage;
}());

//# sourceMappingURL=mailroomsuccesspage.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
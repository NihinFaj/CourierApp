webpackJsonp([1],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewrequestPageModule", function() { return ViewrequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewrequest__ = __webpack_require__(328);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viewrequest__["a" /* ViewrequestPage */]),
            ],
        })
    ], ViewrequestPageModule);
    return ViewrequestPageModule;
}());

//# sourceMappingURL=viewrequest.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewrequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sessionprovider_sessionprovider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_courierprovider_courierprovider__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the ViewrequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewrequestPage = /** @class */ (function () {
    function ViewrequestPage(loadingCtrl, courierProvider, sessionProvider, navCtrl, navParams, qrScanner) {
        this.loadingCtrl = loadingCtrl;
        this.courierProvider = courierProvider;
        this.sessionProvider = sessionProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.submitRiderPickupURL = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/submit-rider-pickup-request';
        this.data = {
            RiderEmail: ""
        };
        this.value = {
            QrCode: "",
            RiderName: ""
        };
    }
    ViewrequestPage.prototype.ionViewDidLoad = function () {
        this.getUserName();
        this.getRequestDetails();
    };
    ViewrequestPage.prototype.getUserName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.sessionProvider.getStorage('registeredUserDetails')];
                    case 1:
                        _a.userDetails = _b.sent();
                        this.data.RiderEmail = JSON.parse(this.userDetails).Email_Address;
                        console.log("Rider Email Gotten is " + this.data.RiderEmail);
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewrequestPage.prototype.getRequestDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reqDet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sessionProvider.getStorage('requestDetails')];
                    case 1:
                        reqDet = _a.sent();
                        this.requestDetails = JSON.parse(reqDet);
                        console.log("Request details are");
                        console.log(this.requestDetails);
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewrequestPage.prototype.goBack = function () {
        console.log("Go back to previous page");
        this.navCtrl.pop();
    };
    ViewrequestPage.prototype.scanQR = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                // start scanning
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                });
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) {
            return console.log('Error is', e);
        });
    };
    ViewrequestPage.prototype.submitRequestManually = function () {
        var _this = this;
        console.log("Gotten QRCode");
        console.log(this.requestDetails.QR_Code);
        console.log("Entered QRCode");
        console.log(this.value.QrCode);
        if (!this.value.QrCode) {
            this.courierProvider.presentAlert("Please enter QRCode digits");
            return false;
        }
        if (!this.data.RiderEmail) {
            this.courierProvider.presentAlert("Please Register as a Rider");
            return false;
        }
        if (this.requestDetails.QR_Code != this.value.QrCode) {
            this.courierProvider.presentAlert("QR Code entered doesn't match the request picked.");
            console.log("QR Codes don't match");
            return false;
        }
        this.value.RiderName = this.data.RiderEmail;
        console.log(this.value);
        this.loading = this.loadingCtrl.create({ content: "Submitting Request" });
        this.loading.present();
        this.courierProvider.callServicePost(this.submitRiderPickupURL, this.value)
            .then(function (result) {
            console.log(result);
            if (result.StatusCode == 1000) {
                _this.loading.dismissAll();
                console.log("Rider's update was submitted successfully");
                _this.navCtrl.push("SuccesspagePage");
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
    ViewrequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewrequest',template:/*ion-inline-start:"/Users/appdevmac1/ionic-projects/CourierApp/src/pages/viewrequest/viewrequest.html"*/'<!--\n  Generated template for the ViewrequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n  <ion-navbar hideBackButton="true">\n        <div class="backBtn-wrapper">\n            <span class="icon icon-back" (click)="goBack()"></span>\n        </div>\n    <ion-title class="ion-title">Accept Request</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="app-wrapper">\n\n    <div class="forms-wrapper mt-30">\n        <div class="delivery-address">\n            <div class="map-wrapper">\n                    <i class="fas fa-map-marker"></i>\n            </div>\n            <div class="address-details">\n                <p class="thickText">Deliver pouch to:</p>\n                <p class="smText">Branch 214</p>\n            </div>\n        </div>\n\n        <div class="mt-20">\n            <button class="btn btn-primary" (click)="scanQR()">Scan QR Code <i class="fas fa-qrcode"></i></button>\n\n            <p class="smText mt-30">OR</p>\n\n            <div class="form-group mt-30">\n                <label class="smText">Input QRCode digits</label>\n                <div class="input-group">\n                    <input [(ngModel)]="value.QrCode" class="form-control input-code" placeholder="e.g. awsedrfgtyhuj12sd4">\n                    <button class="btn btn-sm" (click)="submitRequestManually()">Confirm</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/appdevmac1/ionic-projects/CourierApp/src/pages/viewrequest/viewrequest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_courierprovider_courierprovider__["a" /* CourierproviderProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_sessionprovider_sessionprovider__["a" /* SessionproviderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */]])
    ], ViewrequestPage);
    return ViewrequestPage;
}());

//# sourceMappingURL=viewrequest.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
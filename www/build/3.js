webpackJsonp([3],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderdashboardPageModule", function() { return RiderdashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__riderdashboard__ = __webpack_require__(325);
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

/***/ 325:
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
        this.data = {
            BranchCode: "",
            RiderEmail: ""
        };
        this.getRiderRequestURL = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/get-all-rider-requests';
    }
    RiderdashboardPage.prototype.ionViewDidLoad = function () {
        this.getRiderDetailsAndRequest();
    };
    RiderdashboardPage.prototype.getRiderDetailsAndRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.sessionProvider.getStorage('registeredUserDetails')];
                    case 1:
                        _a.userDetails = _b.sent();
                        this.data.BranchCode = JSON.parse(this.userDetails).Branch_Code;
                        this.data.RiderEmail = JSON.parse(this.userDetails).Email_Address;
                        this.loading = this.loadingCtrl.create({ content: "" });
                        this.loading.present();
                        console.log("About to call the service");
                        console.log(this.data);
                        this.courierProvider.callServicePost(this.getRiderRequestURL, this.data)
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
                        return [2 /*return*/];
                }
            });
        });
    };
    RiderdashboardPage.prototype.acceptRequest = function (reqDets) {
        var _this = this;
        this.sessionProvider.setStorage('requestDetails', JSON.stringify(reqDets)).then(function () {
            _this.navCtrl.setRoot("ViewrequestPage");
        });
    };
    RiderdashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-riderdashboard',template:/*ion-inline-start:"/Users/appdevmac1/ionic-projects/CourierApp/src/pages/riderdashboard/riderdashboard.html"*/'<!--\n  Generated template for the RiderdashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <div class="backBtn-wrapper">\n        <span class="icon icon-back"></span>\n    </div>\n    <ion-title class="ion-title">Pending Request</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="app-wrapper">\n    <!-- <header class="header">\n        <div class="title-wrapper">\n            <h1 class="sm-title">Today\'s Request</h1>\n        </div>\n    </header> -->\n\n    <div class="cards-wrapper mt-10" >\n\n       <div class="card requestCard" *ngFor="let request of this.allRequests">\n           <div class="cardContent">\n               <div class="listGroup">\n                    <div class="cardContent-list">\n                        <p class="list-title">Delivery type:</p>\n                        <p class="list-content">{{ request.Delivery_Type }}</p>\n                    </div>\n                    <div class="cardContent-list">\n                        <p class="list-title">Date Initiated:</p>\n                        <p class="list-content">{{ request.Initiating_Date }}</p>\n                    </div>\n               </div>\n               <div class="listGroup">\n                    <div class="cardContent-list">\n                        <p class="list-title">Initiating Officer:</p>\n                        <p class="list-content">{{ request.Initiating_Officer }}</p>\n                    </div>\n                    <div class="cardContent-list">\n                        <p class="list-title">Pick-up Branch:</p>\n                        <p class="list-content">{{ request.PickUp_Branch }}</p>\n                    </div>\n               </div>\n               <div class="listGroup">\n                    <div class="cardContent-list">\n                        <p class="list-title">Item Type:</p>\n                        <p class="list-content">{{ request.Item_Type }}</p>\n                    </div>\n                    <div class="cardContent-list">\n                        <p class="list-title">Drop-off Branch:</p>\n                        <p class="list-content">{{ request.Delivery_Branch }}</p>\n                    </div>\n               </div>\n           </div>\n           <div class="accept-wrapper" (click)="acceptRequest(request)">\n               <a class="acceptRequest">accept request</a>\n           </div>\n       </div>\n    </div>\n\n\n    <footer>\n        <div class="btn-group">\n            <button class="btn btn-footer btn-primary">Scan QR Code</button>\n            <button class="btn btn-footer btn-accent">Input Barcode</button>\n        </div>\n    </footer>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/appdevmac1/ionic-projects/CourierApp/src/pages/riderdashboard/riderdashboard.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_sessionprovider_sessionprovider__["a" /* SessionproviderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_sessionprovider_sessionprovider__["a" /* SessionproviderProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_courierprovider_courierprovider__["a" /* CourierproviderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_courierprovider_courierprovider__["a" /* CourierproviderProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _e || Object])
    ], RiderdashboardPage);
    return RiderdashboardPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=riderdashboard.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
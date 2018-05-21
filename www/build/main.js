webpackJsonp([5],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/linkdevice/linkdevice.module": [
		277,
		4
	],
	"../pages/mailroomdashboard/mailroomdashboard.module": [
		278,
		3
	],
	"../pages/riderdashboard/riderdashboard.module": [
		279,
		2
	],
	"../pages/successpage/successpage.module": [
		280,
		1
	],
	"../pages/viewrequest/viewrequest.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_courierprovider_courierprovider__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(loadingCtrl, navCtrl, courierProvider) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.courierProvider = courierProvider;
        this.data = {
            name: ""
        };
        this.getAllUserURL = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/get-all-names';
        this.getAllRequest = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/get-all-requests';
        this.registerUserURL = 'http://gtmobile.gtbank.com/CourierAPI/api/Courier/register-user';
        this.getAllUser();
    }
    HomePage.prototype.getAllUser = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({ content: "" });
        this.loading.present();
        this.courierProvider.callService(this.getAllUserURL)
            .then(function (result) {
            console.log(result);
            if (result.StatusCode == 1000) {
                _this.loading.dismissAll();
                _this.Users = JSON.parse(result.Message);
                console.log(_this.Users);
            }
            else {
                _this.loading.dismissAll();
                _this.courierProvider.presentAlert(result.Error);
            }
        }, function (err) {
            _this.loading.dismissAll();
            console.log("Call entered exception");
            console.log(err);
        });
    };
    HomePage.prototype.registerUser = function () {
        var _this = this;
        if (!this.data.name) {
            this.courierProvider.presentAlert("Please select a name");
            return false;
        }
        this.loading = this.loadingCtrl.create({ content: "Registering User..." });
        this.loading.present();
        this.courierProvider.callService(this.registerUserURL)
            .then(function (result) {
            _this.loading.dismissAll();
            console.log("Call entered success");
            console.log(result);
            _this.navCtrl.setRoot("LinkdevicePage");
        }, function (err) {
            _this.loading.dismissAll();
            console.log("Call entered exception");
            console.log(err);
            _this.navCtrl.setRoot("LinkdevicePage");
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/appdevmac1/ionic-projects/CourierApp/src/pages/home/home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>\n      Courier App\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content  style="background-color:white">\n\n  <div class="app-wrapper">\n    <header class="header">\n        <div class="title-wrapper">\n            <h1 class="title">Courier Delivery</h1>\n        </div>\n    </header>\n\n    <div class="forms-wrapper mt-100">\n        <h4 class="signinPrompt">Register here</h4>\n\n        <form class="mt-30">\n\n            <div class="form-group">\n                <ion-select [(ngModel)]="data.name" class="form-control select-control" name="userName" placeholder="Select a name">\n                    <ion-option *ngFor="let x of this.Users"> {{ x.Courier_Name }}       \n                    </ion-option>\n                </ion-select>\n\n            </div>\n\n            <!-- <div class="form-group">\n                <select id="" name="name">\n                    <option value="" ng-selected="true">Please select a Name</option>\n                    <option value="1">Femi Oke</option>\n                    <option value="2">Tunde Chuks</option>\n                    <option value="3">Dapo Oyebade</option>\n                    <option value="4">Chukwudi Eze</option>\n                </select>\n            </div> -->\n\n            <button class="btn btn-primary" (click)="registerUser()">Sign in</button>\n        </form>\n    </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/appdevmac1/ionic-projects/CourierApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_courierprovider_courierprovider__["a" /* CourierproviderProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourierproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the CourierProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CourierproviderProvider = /** @class */ (function () {
    function CourierproviderProvider(http, loadingCtrl, alertCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    CourierproviderProvider.prototype.showLoader = function () {
        var loading = this.loadingCtrl.create({
            // spinner: 'hide',
            // content: `
            //   <div class="custom-spinner-container">
            //     <div class="custom-spinner-box"></div>
            //   </div>`,
            content: "\n      <div class=\"custom-spinner-container\">\n           <div class=\"custom-spinner-box\"></div>\n          </div>",
            duration: 5000
        });
        loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        loading.present();
    };
    CourierproviderProvider.prototype.callService = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(url, null)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    CourierproviderProvider.prototype.presentAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: msg,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    CourierproviderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], CourierproviderProvider);
    return CourierproviderProvider;
}());

//# sourceMappingURL=courierprovider.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_qr_scanner__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_courierprovider_courierprovider__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/linkdevice/linkdevice.module#LinkdevicePageModule', name: 'LinkdevicePage', segment: 'linkdevice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mailroomdashboard/mailroomdashboard.module#MailroomdashboardPageModule', name: 'MailroomdashboardPage', segment: 'mailroomdashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/riderdashboard/riderdashboard.module#RiderdashboardPageModule', name: 'RiderdashboardPage', segment: 'riderdashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/successpage/successpage.module#SuccesspagePageModule', name: 'SuccesspagePage', segment: 'successpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewrequest/viewrequest.module#ViewrequestPageModule', name: 'ViewrequestPage', segment: 'viewrequest', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_8__providers_courierprovider_courierprovider__["a" /* CourierproviderProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/appdevmac1/ionic-projects/CourierApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/appdevmac1/ionic-projects/CourierApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map
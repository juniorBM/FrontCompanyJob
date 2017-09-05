webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_job_job__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the JobDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var JobDetailPage = (function () {
    function JobDetailPage(jobService, navCtrl, navParams) {
        this.jobService = jobService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jobs = [];
        this.getJobs();
    }
    JobDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobDetailPage');
    };
    JobDetailPage.prototype.getJobs = function () {
        var _this = this;
        this.jobService.getJobs()
            .then(function (jobs) {
            _this.jobs = jobs;
        }, function (error) {
            console.log(error);
        });
    };
    return JobDetailPage;
}());
JobDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-job-detail',template:/*ion-inline-start:"/home/juniormendonca/Área de Trabalho/job/job/src/pages/job-detail/job-detail.html"*/'<!--\n  Generated template for the JobDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>job-detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let j of jobs">\n    <ion-card-header>\n        {{j.title}}\n    </ion-card-header>\n    <ion-card-content>\n      <p>ID: {{j.id}}</p>\n      <p>Descrição: {{j.description}}</p>\n      <p>Local: {{j.local}}</p>\n      <p>Remoto: {{j.remote}}</p>\n      <p>Company ID: {{j.company_id}}</p>\n      <p>Company Name: {{j.name}}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/juniormendonca/Área de Trabalho/job/job/src/pages/job-detail/job-detail.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__providers_job_job__["a" /* JobProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_job_job__["a" /* JobProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object])
], JobDetailPage);

var _a, _b, _c;
//# sourceMappingURL=job-detail.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_company_company__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyDetailPage = (function () {
    function CompanyDetailPage(companyService, navCtrl, navParams) {
        this.companyService = companyService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.companies = [];
        this.getCompanies();
    }
    CompanyDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanyDetailPage');
    };
    CompanyDetailPage.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies()
            .then(function (companies) {
            _this.companies = companies;
            console.log(_this.companies);
        }, function (error) {
            console.log(error);
        });
    };
    return CompanyDetailPage;
}());
CompanyDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-company-detail',template:/*ion-inline-start:"/home/juniormendonca/Área de Trabalho/job/job/src/pages/company-detail/company-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Company Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let c of companies">\n      <ion-card-header>\n        {{c.name}}\n      </ion-card-header>\n\n      <ion-card-content>\n        <p>ID: {{c.id}}</p>\n        <p>E-mail: {{c.email}}</p>\n        <p>Website: {{c.website}}</p>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/juniormendonca/Área de Trabalho/job/job/src/pages/company-detail/company-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_company_company__["a" /* CompanyProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
], CompanyDetailPage);

//# sourceMappingURL=company-detail.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_job_job__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_company_company__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_job_model__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobPage = (function () {
    function JobPage(navCtrl, companyService, jobService, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.companyService = companyService;
        this.jobService = jobService;
        this.navParams = navParams;
        this.companies = [];
        this.job = new __WEBPACK_IMPORTED_MODULE_2__model_job_model__["a" /* Job */](0, '', 0, '', '');
        this.companyService.getCompanies()
            .then(function (companies) {
            _this.companies = companies;
            console.log(_this.companies);
        }, function (error) {
            console.log('Erro ao listar: ', error);
        });
    }
    JobPage.prototype.ionViewDidLoad = function () {
    };
    JobPage.prototype.onSubmit = function (y) {
        if (y.checked) {
            this.job.remote = 'Sim';
        }
        else {
            this.job.remote = 'Não';
        }
        this.addJob(this.job);
        console.log(this.job);
    };
    JobPage.prototype.setValue = function (value) {
        this.job.remote = value;
        console.log('entrou' + value);
    };
    JobPage.prototype.addJob = function (job) {
        var _this = this;
        this.jobService.addJob(job)
            .then(function (job) {
            _this.job = job;
        }, function (error) {
            console.log('Erro a inserir companhia: ' + error);
        });
    };
    return JobPage;
}());
JobPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-job',template:/*ion-inline-start:"/home/juniormendonca/Área de Trabalho/job/job/src/pages/job/job.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>job</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="onSubmit(y)" #jobForm="ngForm">\n    <ion-list >\n      <ion-item>\n        <ion-label floating>Titulo</ion-label>\n        <ion-input #title="ngModel" name="title" [(ngModel)]="job.title" type="text" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Descrição</ion-label>\n        <ion-textarea #description="ngModel" name="description" [(ngModel)]="job.description" type="text" required></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Local</ion-label>\n        <ion-input #local="ngModel" name="local" [(ngModel)]="job.local" type="text" required></ion-input>\n      </ion-item>\n        <ion-list radio-group>\n          <ion-list-header>\n            Remoto\n          </ion-list-header>\n\n          <ion-item>\n            <ion-label>Sim</ion-label>\n            <ion-radio #y checked="true" value="sim"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Não</ion-label>\n            <ion-radio value="nao"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Empresas</ion-label>\n            <ion-select name="company_id" [(ngModel)]="job.company_id">\n              <ion-option *ngFor="let c of companies" [value]="c.id">{{c.name}}</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n      <button ion-button type="submit" block>Salvar</button>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/juniormendonca/Área de Trabalho/job/job/src/pages/job/job.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_company_company__["a" /* CompanyProvider */],
        __WEBPACK_IMPORTED_MODULE_0__providers_job_job__["a" /* JobProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]])
], JobPage);

//# sourceMappingURL=job.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_company_company__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_company_model__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyPage = (function () {
    function CompanyPage(navCtrl, navParams, companyProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.companyProvider = companyProvider;
        this.company = new __WEBPACK_IMPORTED_MODULE_1__model_company_model__["a" /* Company */](0, '', '', '');
    }
    CompanyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanyPage');
    };
    CompanyPage.prototype.onSubmit = function () {
        this.addCompany(this.company);
        console.log(this.company);
    };
    CompanyPage.prototype.addCompany = function (company) {
        var _this = this;
        this.companyProvider.addCompany(company)
            .then(function (company) {
            _this.company = company;
        }, function (error) {
            console.log('Erro a inserir companhia: ' + error);
        });
    };
    return CompanyPage;
}());
CompanyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-company',template:/*ion-inline-start:"/home/juniormendonca/Área de Trabalho/job/job/src/pages/company/company.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Company</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="onSubmit()" #companyForm="ngForm">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Nome</ion-label>\n        <ion-input #name="ngModel" name="name" required [(ngModel)]="company.name" type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>E-mail</ion-label>\n        <ion-input #email="ngModel" name="email" required [(ngModel)]="company.email" type="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Website</ion-label>\n        <ion-input #website="ngModel" name="website" [(ngModel)]="company.website" type="text"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block>Salvar</button>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/juniormendonca/Área de Trabalho/job/job/src/pages/company/company.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_company_company__["a" /* CompanyProvider */]])
], CompanyPage);

//# sourceMappingURL=company.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/company-detail/company-detail.module": [
		275,
		3
	],
	"../pages/company/company.module": [
		277,
		2
	],
	"../pages/job-detail/job-detail.module": [
		274,
		1
	],
	"../pages/job/job.module": [
		276,
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/juniormendonca/Área de Trabalho/job/job/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/juniormendonca/Área de Trabalho/job/job/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_job_detail_job_detail__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_company_detail_company_detail__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_job_job__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_company_company__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_list__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_company_company__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_job_job__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_company_company__["a" /* CompanyPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_job_job__["a" /* JobPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_company_detail_company_detail__["a" /* CompanyDetailPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_job_detail_job_detail__["a" /* JobDetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/job-detail/job-detail.module#JobDetailPageModule', name: 'JobDetailPage', segment: 'job-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/company-detail/company-detail.module#CompanyDetailPageModule', name: 'CompanyDetailPage', segment: 'company-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/job/job.module#JobPageModule', name: 'JobPage', segment: 'job', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/company/company.module#CompanyPageModule', name: 'CompanyPage', segment: 'company', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_company_company__["a" /* CompanyPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_job_job__["a" /* JobPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_company_detail_company_detail__["a" /* CompanyDetailPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_job_detail_job_detail__["a" /* JobDetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__providers_company_company__["a" /* CompanyProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_job_job__["a" /* JobProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Job; });
var Job = (function () {
    function Job(id, title, company_id, local, remote) {
        this.id = id;
        this.title = title;
        this.company_id = company_id;
        this.local = local;
        this.remote = remote;
    }
    return Job;
}());

//# sourceMappingURL=job-model.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company(id, name, email, website) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.website = website;
    }
    return Company;
}());

//# sourceMappingURL=company-model.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_job_detail_job_detail__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_company_detail_company_detail__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_job_job__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_company_company__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Company', component: __WEBPACK_IMPORTED_MODULE_3__pages_company_company__["a" /* CompanyPage */] },
            { title: 'Job', component: __WEBPACK_IMPORTED_MODULE_2__pages_job_job__["a" /* JobPage */] },
            { title: 'Company List', component: __WEBPACK_IMPORTED_MODULE_1__pages_company_detail_company_detail__["a" /* CompanyDetailPage */] },
            { title: 'Job List', component: __WEBPACK_IMPORTED_MODULE_0__pages_job_detail_job_detail__["a" /* JobDetailPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/juniormendonca/Área de Trabalho/job/job/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/juniormendonca/Área de Trabalho/job/job/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/juniormendonca/Área de Trabalho/job/job/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/juniormendonca/Área de Trabalho/job/job/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
  Generated class for the CompanyProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var CompanyProvider = (function () {
    function CompanyProvider(http) {
        this.http = http;
        this.url = 'http://localhost:4000/companies/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        console.log('Hello CompanyProvider Provider');
    }
    CompanyProvider.prototype.addCompany = function (company) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'add', JSON.stringify(company), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log('valor de daa' + data);
                resolve(data);
            }, function (error) {
                console.log('erro: ' + error);
                reject(error);
            });
        });
    };
    CompanyProvider.prototype.getCompanies = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    return CompanyProvider;
}());
CompanyProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CompanyProvider);

//# sourceMappingURL=company.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Generated class for the JobProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var JobProvider = (function () {
    function JobProvider(http) {
        this.http = http;
        this.url = 'http://localhost:4000/jobs/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        console.log('Hello JobProvider Provider');
    }
    JobProvider.prototype.addJob = function (job) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + 'add', JSON.stringify(job), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log('valor de data: ', data);
                resolve(data);
            }, function (error) {
                console.log('erro: ' + error);
                reject(error);
            });
        });
    };
    JobProvider.prototype.getJobs = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log('Erro ao lista: ' + error);
            });
        });
    };
    return JobProvider;
}());
JobProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], JobProvider);

//# sourceMappingURL=job.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map
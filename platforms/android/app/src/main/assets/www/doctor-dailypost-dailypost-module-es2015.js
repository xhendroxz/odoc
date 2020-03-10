(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-dailypost-dailypost-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/dailypost/dailypost.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/dailypost/dailypost.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>dailypost</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/doctor/dailypost/dailypost-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/doctor/dailypost/dailypost-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DailypostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailypostPageRoutingModule", function() { return DailypostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dailypost_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dailypost.page */ "./src/app/doctor/dailypost/dailypost.page.ts");




const routes = [
    {
        path: '',
        component: _dailypost_page__WEBPACK_IMPORTED_MODULE_3__["DailypostPage"]
    }
];
let DailypostPageRoutingModule = class DailypostPageRoutingModule {
};
DailypostPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DailypostPageRoutingModule);



/***/ }),

/***/ "./src/app/doctor/dailypost/dailypost.module.ts":
/*!******************************************************!*\
  !*** ./src/app/doctor/dailypost/dailypost.module.ts ***!
  \******************************************************/
/*! exports provided: DailypostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailypostPageModule", function() { return DailypostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _dailypost_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dailypost-routing.module */ "./src/app/doctor/dailypost/dailypost-routing.module.ts");
/* harmony import */ var _dailypost_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dailypost.page */ "./src/app/doctor/dailypost/dailypost.page.ts");







let DailypostPageModule = class DailypostPageModule {
};
DailypostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dailypost_routing_module__WEBPACK_IMPORTED_MODULE_5__["DailypostPageRoutingModule"]
        ],
        declarations: [_dailypost_page__WEBPACK_IMPORTED_MODULE_6__["DailypostPage"]]
    })
], DailypostPageModule);



/***/ }),

/***/ "./src/app/doctor/dailypost/dailypost.page.scss":
/*!******************************************************!*\
  !*** ./src/app/doctor/dailypost/dailypost.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci9kYWlseXBvc3QvZGFpbHlwb3N0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/doctor/dailypost/dailypost.page.ts":
/*!****************************************************!*\
  !*** ./src/app/doctor/dailypost/dailypost.page.ts ***!
  \****************************************************/
/*! exports provided: DailypostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailypostPage", function() { return DailypostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DailypostPage = class DailypostPage {
    constructor() { }
    ngOnInit() {
    }
};
DailypostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dailypost',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dailypost.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/dailypost/dailypost.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dailypost.page.scss */ "./src/app/doctor/dailypost/dailypost.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DailypostPage);



/***/ })

}]);
//# sourceMappingURL=doctor-dailypost-dailypost-module-es2015.js.map
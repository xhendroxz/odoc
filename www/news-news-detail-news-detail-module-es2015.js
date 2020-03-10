(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-detail-news-detail-module"],{

/***/ "./src/app/news/news-detail/news-detail-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/news/news-detail/news-detail-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: NewsDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailPageRoutingModule", function() { return NewsDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _news_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-detail.page */ "./src/app/news/news-detail/news-detail.page.ts");




const routes = [
    {
        path: '',
        component: _news_detail_page__WEBPACK_IMPORTED_MODULE_3__["NewsDetailPage"]
    }
];
let NewsDetailPageRoutingModule = class NewsDetailPageRoutingModule {
};
NewsDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewsDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/news/news-detail/news-detail.module.ts":
/*!********************************************************!*\
  !*** ./src/app/news/news-detail/news-detail.module.ts ***!
  \********************************************************/
/*! exports provided: NewsDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailPageModule", function() { return NewsDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _news_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-detail-routing.module */ "./src/app/news/news-detail/news-detail-routing.module.ts");
/* harmony import */ var _news_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-detail.page */ "./src/app/news/news-detail/news-detail.page.ts");







let NewsDetailPageModule = class NewsDetailPageModule {
};
NewsDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _news_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsDetailPageRoutingModule"]
        ],
        declarations: [_news_detail_page__WEBPACK_IMPORTED_MODULE_6__["NewsDetailPage"]]
    })
], NewsDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=news-news-detail-news-detail-module-es2015.js.map
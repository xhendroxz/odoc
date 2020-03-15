(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header > \n  <ion-toolbar color=\"white\" class=\"headersss\">\n      <img src=\"/assets/logo.png\" alt=\"\" class=\"logo-image\">       \n      <ion-buttons slot=\"end\">\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"container\">\n   <h1>Find Your <br>Consultation</h1>\n\n    <div class=\"seach-bar\">\n      <ion-searchbar class=\"search-input\"></ion-searchbar>\n    </div>\n\n   <h5>Categories</h5>\n      <ion-slides [options]=\"slideCategory\" class=\"slides-category\">\n\n        <ion-slide>\n          <ion-chip color=\"first\" class=\"cat-active\">\n            <ion-label>Adult</ion-label>\n          </ion-chip>\n        </ion-slide>\n\n        <ion-slide>\n          <ion-chip color=\"first\" class=\"category\">\n            <ion-label>Childerns</ion-label>\n          </ion-chip>\n        </ion-slide>\n\n        <ion-slide>\n          <ion-chip color=\"first\" class=\"category\">\n            <ion-label>Womens</ion-label>\n          </ion-chip>\n        </ion-slide>\n\n        <ion-slide>\n          <ion-chip color=\"first\" class=\"category\">\n            <ion-label>Mens</ion-label>\n          </ion-chip>\n        </ion-slide>\n        \n      </ion-slides>\n      \n      <br>\n    <ion-slides [options]=\"slideSubCategory\" class=\"slides-subcategory\">\n      \n      <ion-slide>\n        <ion-card class=\"card-category\" color=\"first\">\n          <ion-card-header>\n            <ion-card-subtitle class=\"title-category\" >Chogh & <br>Cold</ion-card-subtitle>\n            <ion-card-subtitle class=\"doctor-category\">11 Doctors</ion-card-subtitle>\n            <img src=\"/assets/category/batuk.png\" alt=\"\" class=\"image-category\">\n          </ion-card-header>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card class=\"card-category\" color=\"second\">\n          <ion-card-header>\n            <ion-card-subtitle class=\"title-category\">Heart Specialist</ion-card-subtitle>\n            <ion-card-subtitle class=\"doctor-category\">54 Doctors</ion-card-subtitle>\n            <img src=\"/assets/category/heart.png\" alt=\"\" class=\"image-category\">\n          </ion-card-header>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card class=\"card-category\" color=\"third\">\n          <ion-card-header>\n            <ion-card-subtitle class=\"title-category\">Nutrition Specialist</ion-card-subtitle>\n            <ion-card-subtitle class=\"doctor-category\">41 Doctors</ion-card-subtitle>\n            <img src=\"/assets/category/nutrion.png\" alt=\"\" class=\"image-category\">\n          </ion-card-header>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n    <br>\n   <h5>Doctors</h5>\n\n    <ion-item lines=\"none\" color=\"first-light\" class=\"item-doctor\">\n      <img src=\"/assets/doctors/1.png\" class=\"picture-doctor\" alt=\"\" >\n      <div class=\"det-doctor\">\n        <p><span class=\"l-orange\">Doctor name</span><br><span class=\"specialist\">Doctor specialist</span> </p>\n      </div>\n      <ion-button color=\"first\" slot=\"end\" class=\"btn-call\" (click)=\"goDetail()\"> <span class=\"l-white\">Call</span> </ion-button>\n    </ion-item>\n\n    <ion-item lines=\"none\" color=\"first-light\" class=\"item-doctor\">\n      <img src=\"/assets/doctors/1.png\" class=\"picture-doctor\" alt=\"\" >\n      <div class=\"det-doctor\">\n        <p><span class=\"l-orange\">Doctor name</span><br><span class=\"specialist\">Doctor specialist</span> </p>\n      </div>\n      <ion-button color=\"first\" slot=\"end\" class=\"btn-call\" (click)=\"goDetail()\"> <span class=\"l-white\">Call</span> </ion-button>\n    </ion-item>\n\n  </div>\n  <br>\n</ion-content>");

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.seach-bar, .slides-subcategory, .slides-category {\n  padding: 0px 10px;\n}\n\n.card-category {\n  box-shadow: none !important;\n  border-radius: 30px;\n  margin: 0px !important;\n  height: 250px;\n  color: white !important;\n  margin-left: 10px !important;\n  width: 400px !important;\n}\n\n.title-category {\n  text-transform: initial !important;\n  font-size: 20px !important;\n  max-width: 100%;\n  width: 200px !important;\n  word-break: break-word !important;\n  text-align: left !important;\n}\n\n.doctor-category {\n  font-weight: normal !important;\n  font-size: 12px !important;\n  text-transform: initial !important;\n  padding-bottom: 20px !important;\n  text-align: left !important;\n}\n\n.image-category {\n  width: 100px !important;\n  height: auto !important;\n}\n\n.card-doc-item {\n  box-shadow: none !important;\n  border-radius: 15px;\n  height: 70px !important;\n  margin-top: 0px !important;\n  margin-bottom: 10px !important;\n}\n\n.card-doctor {\n  box-shadow: none !important;\n  border-radius: 15px;\n  height: 70px !important;\n  margin-top: 0px !important;\n  margin-bottom: 10px !important;\n}\n\n.picture-doctor {\n  width: 40px;\n  height: auto;\n  background: #F6BB7E;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.name-doctor {\n  font-size: 14px !important;\n}\n\n.det-doctor {\n  padding-left: 10px;\n}\n\n.det-doctor p {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.det-doctor .specialist {\n  font-weight: normal;\n  font-size: 12px;\n  color: #424140;\n}\n\n.item-doctor {\n  margin: 0px 20px !important;\n  border-radius: 20px !important;\n  margin-bottom: 10px !important;\n}\n\n.category {\n  background: none;\n  color: #424140;\n}\n\n.btn-call {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXGZlcnJ5XFxEb2N1bWVudHNcXElvbmljIFByb2plY3RcXE9kb2Mvc3JjXFxhcHBcXHRhYjFcXHRhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQUE7RUFDRSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQ0dGOztBRERBO0VBQ0UsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtBQ0lGOztBREZBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtBQ0tGOztBREhBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQ01GOztBREpBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQ09GOztBREpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ09GOztBRExBO0VBQ0UsMEJBQUE7QUNRRjs7QUROQTtFQUNFLGtCQUFBO0FDU0Y7O0FEUEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNVRjs7QURSQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNXRjs7QURUQTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQ1lGOztBRFRBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDWUY7O0FEVEE7RUFDRSwyQkFBQTtBQ1lGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLnNlYWNoLWJhciwgLnNsaWRlcy1zdWJjYXRlZ29yeSwgLnNsaWRlcy1jYXRlZ29yeXtcbiAgcGFkZGluZzogMHB4IDEwcHggO1xufVxuLmNhcmQtY2F0ZWdvcnl7XG4gIGJveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDI1MHB4IDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xufVxuLnRpdGxlLWNhdGVnb3J5e1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG4uZG9jdG9yLWNhdGVnb3J5e1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG4uaW1hZ2UtY2F0ZWdvcnl7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5jYXJkLWRvYy1pdGVte1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuLmNhcmQtZG9jdG9ye1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ucGljdHVyZS1kb2N0b3J7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IGF1dG8gOyBcbiAgYmFja2dyb3VuZDogI0Y2QkI3RTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLm5hbWUtZG9jdG9ye1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cbi5kZXQtZG9jdG9ye1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggO1xufVxuLmRldC1kb2N0b3IgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uZGV0LWRvY3RvciAuc3BlY2lhbGlzdHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzQyNDE0MDtcbn1cbi5pdGVtLWRvY3RvcntcbiAgbWFyZ2luOiAwcHggMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmNhdGVnb3J5e1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzQyNDE0MDtcbn1cblxuLmJ0bi1jYWxse1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuXG5cbiIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLnNlYWNoLWJhciwgLnNsaWRlcy1zdWJjYXRlZ29yeSwgLnNsaWRlcy1jYXRlZ29yeSB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG4uY2FyZC1jYXRlZ29yeSB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUtY2F0ZWdvcnkge1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5kb2N0b3ItY2F0ZWdvcnkge1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pbWFnZS1jYXRlZ29yeSB7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmNhcmQtZG9jLWl0ZW0ge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1kb2N0b3Ige1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ucGljdHVyZS1kb2N0b3Ige1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjRjZCQjdFO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5uYW1lLWRvY3RvciB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4uZGV0LWRvY3RvciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmRldC1kb2N0b3IgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5kZXQtZG9jdG9yIC5zcGVjaWFsaXN0IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzQyNDE0MDtcbn1cblxuLml0ZW0tZG9jdG9yIHtcbiAgbWFyZ2luOiAwcHggMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmNhdGVnb3J5IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM0MjQxNDA7XG59XG5cbi5idG4tY2FsbCB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _doctor_detail_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../doctor/detail/detail.page */ "./src/app/doctor/detail/detail.page.ts");





let Tab1Page = class Tab1Page {
    constructor(router, modalCtrl) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.slideSubCategory = {
            slidesPerView: 2.2,
        };
        this.slideCategory = {
            slidesPerView: 4,
        };
    }
    goDetail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _doctor_detail_detail_page__WEBPACK_IMPORTED_MODULE_4__["DetailPage"]
            });
            return yield modal.present();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map
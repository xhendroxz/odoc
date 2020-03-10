(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header > \n  <ion-toolbar color=\"first\">\n      <img src=\"/assets/logo.png\" alt=\"\" class=\"logo-image\">       \n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" color=\"light\" md=\"ellipsis-vertical\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"container\">\n   <h1>Find Your <br>Consultation</h1>\n\n    <div class=\"seach-bar\">\n      <ion-searchbar class=\"search-input\"></ion-searchbar>\n    </div>\n\n   <h5>Categories</h5>\n      <ion-slides [options]=\"slideCategory\" class=\"slides-category\">\n\n        <ion-slide>\n          <ion-chip color=\"first\" class=\"cat-active\">\n            <ion-label>Adult</ion-label>\n          </ion-chip>\n        </ion-slide>\n\n        <ion-slide>\n          <ion-chip color=\"first\" class=\"category\">\n            <ion-label>Childerns</ion-label>\n          </ion-chip>\n        </ion-slide>\n\n        <ion-slide>\n          <ion-chip color=\"first\" class=\"category\">\n            <ion-label>Womens</ion-label>\n          </ion-chip>\n        </ion-slide>\n\n        <ion-slide>\n          <ion-chip color=\"first\" class=\"category\">\n            <ion-label>Mens</ion-label>\n          </ion-chip>\n        </ion-slide>\n        \n      </ion-slides>\n      \n      <br>\n    <ion-slides [options]=\"slideSubCategory\" class=\"slides-subcategory\">\n      \n      <ion-slide>\n        <ion-card class=\"card-category\" color=\"first\">\n          <ion-card-header>\n            <ion-card-subtitle class=\"title-category\" >Chogh & <br>Cold</ion-card-subtitle>\n            <ion-card-subtitle class=\"doctor-category\">11 Doctors</ion-card-subtitle>\n            <img src=\"/assets/category/batuk.png\" alt=\"\" class=\"image-category\">\n          </ion-card-header>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card class=\"card-category\" color=\"second\">\n          <ion-card-header>\n            <ion-card-subtitle class=\"title-category\">Heart Specialist</ion-card-subtitle>\n            <ion-card-subtitle class=\"doctor-category\">54 Doctors</ion-card-subtitle>\n            <img src=\"/assets/category/heart.png\" alt=\"\" class=\"image-category\">\n          </ion-card-header>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card class=\"card-category\" color=\"third\">\n          <ion-card-header>\n            <ion-card-subtitle class=\"title-category\">Nutrition Specialist</ion-card-subtitle>\n            <ion-card-subtitle class=\"doctor-category\">41 Doctors</ion-card-subtitle>\n            <img src=\"/assets/category/nutrion.png\" alt=\"\" class=\"image-category\">\n          </ion-card-header>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n    <br>\n   <h5>Doctors</h5>\n\n    <ion-item lines=\"none\" color=\"first-light\" class=\"item-doctor\">\n      <img src=\"/assets/doctors/1.png\" class=\"picture-doctor\" alt=\"\" >\n      <div class=\"det-doctor\">\n        <p><span class=\"l-orange\">Doctor name</span><br><span class=\"specialist\">Doctor specialist</span> </p>\n      </div>\n      <ion-button color=\"first\" slot=\"end\" class=\"btn-call\" (click)=\"goDetail()\"> <span class=\"l-white\">Call</span> </ion-button>\n    </ion-item>\n\n    <ion-item lines=\"none\" color=\"first-light\" class=\"item-doctor\">\n      <img src=\"/assets/doctors/1.png\" class=\"picture-doctor\" alt=\"\" >\n      <div class=\"det-doctor\">\n        <p><span class=\"l-orange\">Doctor name</span><br><span class=\"specialist\">Doctor specialist</span> </p>\n      </div>\n      <ion-button color=\"first\" slot=\"end\" class=\"btn-call\" (click)=\"goDetail()\"> <span class=\"l-white\">Call</span> </ion-button>\n    </ion-item>\n\n  </div>\n  <br>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent; }\n\n.seach-bar, .slides-subcategory, .slides-category {\n  padding: 0px 10px; }\n\n.card-category {\n  box-shadow: none !important;\n  border-radius: 30px;\n  margin: 0px !important;\n  height: 250px;\n  color: white !important;\n  margin-left: 10px !important;\n  width: 400px !important; }\n\n.title-category {\n  text-transform: initial !important;\n  font-size: 20px !important;\n  max-width: 100%;\n  width: 200px !important;\n  word-break: break-word !important;\n  text-align: left !important; }\n\n.doctor-category {\n  font-weight: normal !important;\n  font-size: 12px !important;\n  text-transform: initial !important;\n  padding-bottom: 20px !important;\n  text-align: left !important; }\n\n.image-category {\n  width: 100px !important;\n  height: auto !important; }\n\n.card-doc-item {\n  box-shadow: none !important;\n  border-radius: 15px;\n  height: 70px !important;\n  margin-top: 0px !important;\n  margin-bottom: 10px !important; }\n\n.card-doctor {\n  box-shadow: none !important;\n  border-radius: 15px;\n  height: 70px !important;\n  margin-top: 0px !important;\n  margin-bottom: 10px !important; }\n\n.picture-doctor {\n  width: 40px;\n  height: auto;\n  background: #F6BB7E;\n  padding: 5px;\n  border-radius: 10px; }\n\n.name-doctor {\n  font-size: 14px !important; }\n\n.det-doctor {\n  padding-left: 10px; }\n\n.det-doctor p {\n  font-weight: bold;\n  font-size: 15px; }\n\n.det-doctor .specialist {\n  font-weight: normal;\n  font-size: 12px;\n  color: #424140; }\n\n.item-doctor {\n  margin: 0px 20px !important;\n  border-radius: 20px !important;\n  margin-bottom: 10px !important; }\n\n.category {\n  background: none;\n  color: #424140; }\n\n.btn-call {\n  box-shadow: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYWI2MDEvRG9jdW1lbnRzL1VUU18wOV8zNF8zNi9PZG9jL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFhLEVBQUE7O0FBR2Y7RUFDRSxpQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSwyQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1Qix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLCtCQUErQjtFQUMvQiwyQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxXQUFXO0VBQ1gsWUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsMEJBQTBCLEVBQUE7O0FBRTVCO0VBQ0Usa0JBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uc2VhY2gtYmFyLCAuc2xpZGVzLXN1YmNhdGVnb3J5LCAuc2xpZGVzLWNhdGVnb3J5e1xuICBwYWRkaW5nOiAwcHggMTBweCA7XG59XG4uY2FyZC1jYXRlZ29yeXtcbiAgYm94LXNoYWRvdzpub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjUwcHggO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG59XG4udGl0bGUtY2F0ZWdvcnl7XG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cbi5kb2N0b3ItY2F0ZWdvcnl7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cbi5pbWFnZS1jYXRlZ29yeXtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuLmNhcmQtZG9jLWl0ZW17XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1kb2N0b3J7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5waWN0dXJlLWRvY3RvcntcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogYXV0byA7IFxuICBiYWNrZ3JvdW5kOiAjRjZCQjdFO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ubmFtZS1kb2N0b3J7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuLmRldC1kb2N0b3J7XG4gIHBhZGRpbmctbGVmdDogMTBweCA7XG59XG4uZGV0LWRvY3RvciBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5kZXQtZG9jdG9yIC5zcGVjaWFsaXN0e1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNDI0MTQwO1xufVxuLml0ZW0tZG9jdG9ye1xuICBtYXJnaW46IDBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uY2F0ZWdvcnl7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjNDI0MTQwO1xufVxuXG4uYnRuLWNhbGx7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG5cblxuIl19 */");

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
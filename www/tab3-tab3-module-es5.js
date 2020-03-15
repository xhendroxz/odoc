(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header > \n  <ion-toolbar color=\"white\" class=\"headersss\">\n      <img src=\"/assets/logo.png\" alt=\"\" class=\"logo-image\">       \n      <ion-buttons slot=\"end\">\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"container\">\n\n\n    <ion-card class=\"card-profile\">\n      <div>\n        <img class=\"img-profile\" src=\"/assets/user.png\">\n      </div>\n      <ion-card-content class=\"card-cprofile\">\n       <div class=\"fullname\">\n      <h1><ion-icon color=\"first\" name=\"male-outline\"></ion-icon> Fullname</h1>\n       </div>\n       <br>\n       <div>\n        <ion-item>\n          <ion-icon color=\"first\" name=\"call-outline\">\n          </ion-icon>\n          <p>+62 8123 1223 123</p>\n        </ion-item>\n        <br>\n         <ion-item>\n           <ion-icon color=\"first\" name=\"calendar-outline\">\n           </ion-icon>\n           <p>21 years</p>\n         </ion-item>\n         <br>\n         <ion-item>\n           <ion-icon color=\"first\" name=\"mail-outline\">\n           </ion-icon>\n           <p>kolongijo@gmail.com</p>\n         </ion-item>\n       </div>     \n      </ion-card-content>\n    </ion-card>\n  </div>\n  <br>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    let Tab3PageModule = class Tab3PageModule {};
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }])],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\npage-home #rounded {\n  width: 100%;\n  height: 100px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\npage-home #container {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card-profile {\n  box-shadow: none !important;\n  padding: 0px !important;\n}\n\n.card-cprofile {\n  padding: 0px !important;\n}\n\n.img-profile {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 120px;\n  height: auto;\n}\n\n.fullname {\n  margin-left: auto;\n  margin-right: auto;\n  width: 8em;\n}\n\n.fullname h1 {\n  padding: 0px !important;\n  text-align: center;\n}\n\np {\n  padding-left: 10px;\n  color: #696969;\n}\n\n.btn-profile {\n  padding-top: 10px;\n  float: right;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxcVXNlcnNcXGZlcnJ5XFxEb2N1bWVudHNcXElvbmljIFByb2plY3RcXE9kb2Mvc3JjXFxhcHBcXHRhYjNcXHRhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURJRTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBR0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0ROOztBRElFO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNGTjs7QURLQTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURLQTtFQUNFLHVCQUFBO0FDRkY7O0FES0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDRSxpQkFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBREtBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDREY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxucGFnZS1ob21lIHtcbiAgICBcbiAgI3JvdW5kZWQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7ICBcbn1cblxuICAjY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAzMDBweDsgXG4gICAgICBtYXJnaW4tbGVmdDphdXRvOyBcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gIH1cbn1cbi5jYXJkLXByb2ZpbGV7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWNwcm9maWxle1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmltZy1wcm9maWxle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uZnVsbG5hbWV7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogOGVtXG59XG5cbi5mdWxsbmFtZSBoMXtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6ICM2OTY5Njk7XG59XG4uYnRuLXByb2ZpbGV7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxucGFnZS1ob21lICNyb3VuZGVkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxucGFnZS1ob21lICNjb250YWluZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jYXJkLXByb2ZpbGUge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1jcHJvZmlsZSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaW1nLXByb2ZpbGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5mdWxsbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA4ZW07XG59XG5cbi5mdWxsbmFtZSBoMSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjNjk2OTY5O1xufVxuXG4uYnRuLXByb2ZpbGUge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let Tab3Page = class Tab3Page {
      constructor() {}

    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map
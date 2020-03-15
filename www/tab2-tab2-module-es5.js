(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header > \n  <ion-toolbar color=\"white\" class=\"headersss\">\n      <img src=\"/assets/logo.png\" alt=\"\" class=\"logo-image\">       \n      <ion-buttons slot=\"end\">\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"container\">\n   <h5>Are you know?</h5>\n      <ion-slides [options]=\"slideCategory\">\n\n        <ion-slide>\n          <ion-chip color=\"first\" class=\"cat-active\">\n            <ion-label>All</ion-label>\n          </ion-chip>\n        </ion-slide>\n\n        <ion-slide>\n          <ion-chip color=\"first\" class=\"category\">\n            <ion-label>Healthy Food</ion-label>\n          </ion-chip>\n        </ion-slide>\n\n        <ion-slide>\n          <ion-chip color=\"first\" class=\"category\">\n            <ion-label>Diet & Nutrition</ion-label>\n          </ion-chip>\n        </ion-slide>\n\n        <ion-slide>\n          <ion-chip color=\"first\" class=\"category\">\n            <ion-label>Beauty</ion-label>\n          </ion-chip>\n        </ion-slide>\n\n        <ion-slide>\n          <ion-chip color=\"first\" class=\"category\">\n            <ion-label>Pregnant</ion-label>\n          </ion-chip>\n        </ion-slide>\n\n        <ion-slide>\n          <ion-chip color=\"first\" class=\"category\">\n            <ion-label>Growth</ion-label>\n          </ion-chip>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-chip color=\"first\" class=\"category\">\n              <ion-label>Virus</ion-label>\n            </ion-chip>\n          </ion-slide>\n        \n      </ion-slides>\n      \n\n    <ion-item class=\"item-news\" (click)=\"goDetail()\">\n      <img src=\"/assets/news/news1.jpg\" class=\"picture-news\" alt=\"\" >\n      <div class=\"det-doctor\">\n        <p><span color=\"first-light\" class=\"specialist\">Virus</span><br/></p>\n        <p>\n          <span class=\"l-dark\">6 WNI Positif Virus Corona di Indonesia</span>\n           </p>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"item-news\">\n      <img src=\"/assets/news/news2.jpg\" class=\"picture-news\" alt=\"\" >\n      \n      <div class=\"det-doctor\">\n          <p><span class=\"specialist\">Diet & Nutrition</span><br/></p>\n        <p><span class=\"l-dark\">Ketahui Ciri Psikopat pada Anak Sejak dini</span> </p>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"item-news\">\n        <img src=\"/assets/news/news3.jpg\" class=\"picture-news\" alt=\"\" >\n        \n        <div class=\"det-doctor\">\n            <p><span class=\"specialist\">Growth</span><br/></p>\n          <p><span class=\"l-dark\">Musim Hujan, Ini Cara Jaga Daya Tahan Tubuh Anak</span> </p>\n        </div>\n      </ion-item>\n      <ion-item class=\"item-news\">\n          <img src=\"/assets/news/news4.jpg\" class=\"picture-news\" alt=\"\" >\n          \n          <div class=\"det-doctor\">\n              <p><span class=\"specialist\">Virus</span><br/></p>\n            <p><span class=\"l-dark\">Kasus Corona dan Berbagai Efek Paranoid yang Muncul</span> </p>\n          </div>\n        </ion-item>\n        <ion-item class=\"item-news\">\n            <img src=\"/assets/news/news5.jpg\" class=\"picture-news\" alt=\"\" >\n            \n            <div class=\"det-doctor\">\n                <p><span class=\"specialist\">Virus</span><br/></p>\n              <p><span class=\"l-dark\">Update Kasus Virus Corona dan Imbauan Penting Kemenkes</span> </p>\n            </div>\n          </ion-item>\n          <ion-item class=\"item-news\">\n              <img src=\"/assets/news/news6.jpg\" class=\"picture-news\" alt=\"\" >\n              \n              <div class=\"det-doctor\">\n                  <p><span class=\"specialist\">Virus</span><br/></p>\n                <p><span class=\"l-dark\">Virus Corona: Ini Persentase Kesembuhannya</span> </p>\n              </div>\n            </ion-item>\n  \n\n  </div>\n  <br>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
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


    var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    let Tab2PageModule = class Tab2PageModule {};
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
      }])],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.seach-bar, .slides-subcategory, .slides-category {\n  padding: 0px 10px;\n}\n\n.card-category {\n  box-shadow: none !important;\n  border-radius: 30px;\n  margin: 0px !important;\n  height: 250px;\n  color: white !important;\n  margin-left: 10px !important;\n  width: 400px !important;\n}\n\n.title-category {\n  text-transform: initial !important;\n  font-size: 20px !important;\n  max-width: 100%;\n  width: 200px !important;\n  word-break: break-word !important;\n  text-align: left !important;\n}\n\n.doctor-category {\n  font-weight: normal !important;\n  font-size: 12px !important;\n  text-transform: initial !important;\n  padding-bottom: 20px !important;\n  text-align: left !important;\n}\n\n.image-category {\n  width: 100px !important;\n  height: auto !important;\n}\n\n.card-doc-item {\n  box-shadow: none !important;\n  border-radius: 15px;\n  height: 70px !important;\n  margin-top: 0px !important;\n  margin-bottom: 10px !important;\n}\n\n.card-doctor {\n  box-shadow: none !important;\n  border-radius: 15px;\n  height: 70px !important;\n  margin-top: 0px !important;\n  margin-bottom: 10px !important;\n}\n\n.picture-news {\n  width: 150px;\n  height: 80px;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.name-doctor {\n  font-size: 14px !important;\n}\n\n.det-doctor {\n  padding-left: 10px;\n}\n\n.det-doctor p {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.det-doctor .specialist {\n  font-weight: normal;\n  font-size: 12px;\n  color: #424140;\n}\n\n.item-news {\n  margin-right: 15px !important;\n}\n\n.category {\n  background: none;\n  color: #424140;\n}\n\n.btn-call {\n  box-shadow: none !important;\n}\n\n.specialist {\n  background-color: #FDEFE0;\n  padding: 2px 10px;\n  border-radius: 4px;\n  margin-bottom: 0px;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXGZlcnJ5XFxEb2N1bWVudHNcXElvbmljIFByb2plY3RcXE9kb2Mvc3JjXFxhcHBcXHRhYjJcXHRhYjIucGFnZS5zY3NzIiwic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQUE7RUFDRSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQ0dGOztBRERBO0VBQ0UsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtBQ0lGOztBREZBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtBQ0tGOztBREhBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQ01GOztBREpBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQ09GOztBREpBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7QUNNRjs7QURKQTtFQUNFLDBCQUFBO0FDT0Y7O0FETEE7RUFDRSxrQkFBQTtBQ1FGOztBRE5BO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDU0Y7O0FEUEE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDVUY7O0FEUkE7RUFLRSw2QkFBQTtBQ09GOztBREpBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDT0Y7O0FESkE7RUFDRSwyQkFBQTtBQ09GOztBREpBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLnNlYWNoLWJhciwgLnNsaWRlcy1zdWJjYXRlZ29yeSwgLnNsaWRlcy1jYXRlZ29yeXtcbiAgcGFkZGluZzogMHB4IDEwcHggO1xufVxuLmNhcmQtY2F0ZWdvcnl7XG4gIGJveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDI1MHB4IDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xufVxuLnRpdGxlLWNhdGVnb3J5e1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG4uZG9jdG9yLWNhdGVnb3J5e1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG4uaW1hZ2UtY2F0ZWdvcnl7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5jYXJkLWRvYy1pdGVte1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuLmNhcmQtZG9jdG9ye1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ucGljdHVyZS1uZXdze1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogODBweCA7IFxuICAvL2JhY2tncm91bmQ6ICNGNkJCN0U7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5uYW1lLWRvY3RvcntcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG4uZGV0LWRvY3RvcntcbiAgcGFkZGluZy1sZWZ0OiAxMHB4IDtcbn1cbi5kZXQtZG9jdG9yIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmRldC1kb2N0b3IgLnNwZWNpYWxpc3R7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM0MjQxNDA7XG59XG4uaXRlbS1uZXdze1xuICAvLyBtYXJnaW46IDBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgLy9tYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC8vcGFkZGluZzogNXB4IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXRlZ29yeXtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM0MjQxNDA7XG59XG5cbi5idG4tY2FsbHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc3BlY2lhbGlzdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZERUZFMDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cblxuXG4iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5zZWFjaC1iYXIsIC5zbGlkZXMtc3ViY2F0ZWdvcnksIC5zbGlkZXMtY2F0ZWdvcnkge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuLmNhcmQtY2F0ZWdvcnkge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjUwcHg7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNDAwcHggIWltcG9ydGFudDtcbn1cblxuLnRpdGxlLWNhdGVnb3J5IHtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWwgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uZG9jdG9yLWNhdGVnb3J5IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWwgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2UtY2F0ZWdvcnkge1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWRvYy1pdGVtIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtZG9jdG9yIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnBpY3R1cmUtbmV3cyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5uYW1lLWRvY3RvciB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4uZGV0LWRvY3RvciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmRldC1kb2N0b3IgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5kZXQtZG9jdG9yIC5zcGVjaWFsaXN0IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzQyNDE0MDtcbn1cblxuLml0ZW0tbmV3cyB7XG4gIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uY2F0ZWdvcnkge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzQyNDE0MDtcbn1cblxuLmJ0bi1jYWxsIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc3BlY2lhbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGREVGRTA7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _news_news_detail_news_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../news/news-detail/news-detail.page */
    "./src/app/news/news-detail/news-detail.page.ts");

    let Tab2Page = class Tab2Page {
      constructor(router, modalCtrl) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.slideSubCategory = {
          slidesPerView: 2.2
        };
        this.slideCategory = {
          slidesPerView: 4
        };
      }

      goDetail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalCtrl.create({
            component: _news_news_detail_news_detail_page__WEBPACK_IMPORTED_MODULE_4__["NewsDetailPage"]
          });
          return yield modal.present();
        });
      }

    };

    Tab2Page.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }];

    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map
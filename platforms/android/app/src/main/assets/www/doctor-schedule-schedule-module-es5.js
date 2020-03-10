function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-schedule-schedule-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/schedule/schedule.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/schedule/schedule.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDoctorScheduleSchedulePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>schedule</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/doctor/schedule/schedule-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/doctor/schedule/schedule-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: SchedulePageRoutingModule */

  /***/
  function srcAppDoctorScheduleScheduleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulePageRoutingModule", function () {
      return SchedulePageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _schedule_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./schedule.page */
    "./src/app/doctor/schedule/schedule.page.ts");

    var routes = [{
      path: '',
      component: _schedule_page__WEBPACK_IMPORTED_MODULE_3__["SchedulePage"]
    }];

    var SchedulePageRoutingModule = function SchedulePageRoutingModule() {
      _classCallCheck(this, SchedulePageRoutingModule);
    };

    SchedulePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SchedulePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/doctor/schedule/schedule.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/doctor/schedule/schedule.module.ts ***!
    \****************************************************/

  /*! exports provided: SchedulePageModule */

  /***/
  function srcAppDoctorScheduleScheduleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function () {
      return SchedulePageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./schedule-routing.module */
    "./src/app/doctor/schedule/schedule-routing.module.ts");
    /* harmony import */


    var _schedule_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./schedule.page */
    "./src/app/doctor/schedule/schedule.page.ts");

    var SchedulePageModule = function SchedulePageModule() {
      _classCallCheck(this, SchedulePageModule);
    };

    SchedulePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _schedule_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchedulePageRoutingModule"]],
      declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_6__["SchedulePage"]]
    })], SchedulePageModule);
    /***/
  },

  /***/
  "./src/app/doctor/schedule/schedule.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/doctor/schedule/schedule.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDoctorScheduleSchedulePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci9zY2hlZHVsZS9zY2hlZHVsZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/doctor/schedule/schedule.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/doctor/schedule/schedule.page.ts ***!
    \**************************************************/

  /*! exports provided: SchedulePage */

  /***/
  function srcAppDoctorScheduleSchedulePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulePage", function () {
      return SchedulePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SchedulePage = /*#__PURE__*/function () {
      function SchedulePage() {
        _classCallCheck(this, SchedulePage);
      }

      _createClass(SchedulePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SchedulePage;
    }();

    SchedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-schedule',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/schedule/schedule.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule.page.scss */
      "./src/app/doctor/schedule/schedule.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SchedulePage);
    /***/
  }
}]);
//# sourceMappingURL=doctor-schedule-schedule-module-es5.js.map
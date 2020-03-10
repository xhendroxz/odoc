function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/detail/detail.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/detail/detail.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDoctorDetailDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header > \n  <ion-toolbar color=\"first\">\n      <img src=\"/assets/logo.png\" alt=\"\" class=\"logo-image\">       \n      <ion-buttons slot=\"end\">\n        <ion-button color=\"light\" (click)=\"closePage()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"container\">\n    <table class=\"table-info\">\n      <tr class=\"pic\">\n        <td rowspan=\"3\" width=\"150px\">\n          <img src=\"/assets/doctors/1.png\" class=\"image-doctor\" alt=\"\" >\n        </td>\n      </tr>\n      <tr>\n        <td width=\"215px\" valign=\"top\">\n          <div style=\"max-width: 200px;\">\n            <h3>dr. Amelia Rifai, Sp.PD-KGEH</h3>\n            <span class=\"specialist\">Gastroenterologi-Hepatologi </span>\n          </div>\n          \n        </td>\n      </tr>\n      <tr>\n        <td>\n          <ion-chip color=\"success\">\n            <ion-icon class=\"contact\" name=\"mail-outline\"></ion-icon>\n          </ion-chip>\n          <ion-chip color=\"warning\">\n            <ion-icon class=\"contact\" name=\"call-outline\"></ion-icon>\n          </ion-chip>\n          <ion-chip color=\"secondary\">\n            <ion-icon class=\"contact\" name=\"videocam-outline\"></ion-icon>\n          </ion-chip>\n        </td>\n      </tr>\n    </table>\n    <div>\n      <h5>About</h5>\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n    </div>\n    <div class=\"info-doctor\">\n      <div class=\"address-doctor\">\n        <h6>Address</h6>\n        <p class=\"info\">Batam Centre, Jl. Ahmad Yani, Tlk. Tering, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29461</p>\n        <h6>Practice</h6>\n        <p class=\"info\">Moday - Friday Open till 7 PM</p>\n\n      </div>\n      <div class=\"google-maps\">\n        <iframe src=\"https://www.google.com/maps/d/embed?mid=1Iu_VVcenQGxJH0qJL_sqmbbxE8Q\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" class=\"image-maps\"></iframe>\n    </div>\n  </div>\n  <div class=\"schedule\">\n    <ion-button color=\"first\" slot=\"end\" class=\"btn-schedule\" > \n      <span class=\"l-white\">View List Of Schedule</span> \n    </ion-button>\n\n    <div style=\"display: none;\">\n      \n      <ion-item>\n        <p>asdasd</p>\n      </ion-item>\n\n      <ion-item>\n        <p>asdasd</p>\n      </ion-item>\n\n      <ion-item>\n        <p>asdasd</p>\n      </ion-item>\n\n    </div>\n  </div>\n\n  </div>\n  <br>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news-detail/news-detail.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news-detail/news-detail.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsNewsDetailNewsDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header > \n    <ion-toolbar color=\"first\">\n        <img src=\"/assets/logo.png\" alt=\"\" class=\"logo-image\">       \n        <ion-buttons slot=\"end\">\n          <ion-button color=\"light\" (click)=\"closePage()\">\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content >\n    <div class=\"container\">\n      <!-- <table class=\"table-info\">\n        <tr class=\"pic\">\n          <td rowspan=\"3\" width=\"150px\">\n            <img src=\"/assets/doctors/1.png\" class=\"image-doctor\" alt=\"\" >\n          </td>\n        </tr>\n        <tr>\n          <td width=\"215px\" valign=\"top\">\n            <div style=\"max-width: 200px;\">\n              <h3>dr. Amelia Rifai, Sp.PD-KGEH</h3>\n              <span class=\"specialist\">Gastroenterologi-Hepatologi </span>\n            </div>\n            \n          </td>\n        </tr>\n        <tr>\n          <td>\n            <ion-chip color=\"success\">\n              <ion-icon class=\"contact\" name=\"mail-outline\"></ion-icon>\n            </ion-chip>\n            <ion-chip color=\"warning\">\n              <ion-icon class=\"contact\" name=\"call-outline\"></ion-icon>\n            </ion-chip>\n            <ion-chip color=\"secondary\">\n              <ion-icon class=\"contact\" name=\"videocam-outline\"></ion-icon>\n            </ion-chip>\n          </td>\n        </tr>\n      </table> -->\n      <div class=\"content-news\">\n        <h5>Kasusnya Bertambah, 6 WNI Positif Virus Corona di Indonesia</h5>\n        <p>Ditinjau oleh <span>dr. Rizal Fadli </span></p>\n        <p>09 Maret 2020</p>\n        <img src=\"/assets/news/news1.jpg\" class=\"picture-news\" alt=\"\" >\n        <p>Jakarta - Virus corona (korona) Wuhan yang memasuki wilayah Indonesia sejak Senin (2/3), kini perlahan terus bertambah. Awalnya kasus ini menjangkiti WNI yang berdomisili di Depok, Jawa Barat. Keduanya kini masih dalam perawatan isolasi di Rumah Sakit Penyakit Infeksi Sulianti Saroso, Jakarta. </p>\n        <p>Kedua kasus ini disebut sebagai kasus 1 dan 2. Namun, menurut keterangan dari Kementerian Kesehatan RI dalam rilis Sehat Negeriku!, pada Jumat (6/3) dan Minggu (8/3) jumlah kasus virus corona di Indonesia bertambah. </p>\n        <p>Dengan kata lain, saat ini terdapat 6 WNI di Indonesia yang positif mengidap virus corona penyebab COVID-19. Nah, berikut ulasan lengkapnya. </p>\n        \n        <h6>Cluster Jakarta, Hasil Tracking 80 Orang</h6>\n        <p>Achmad Yurianto selaku Juru Bicara Pemerintah Indonesia untuk COVID-19 mengonfirmasi, terdapat 2 pasien positif mengidap COVID-19. kedua kasus baru (kasus 3 dan 4) disampaikannya pada Jumat (6/3) di Istana Kepresidenan. </p>\n        <p>Penemuan kasus 3 dan 4 ini merupakan hasil tracking terhadap kasus 1. Dinas Kesehatan Provinsi DKI Jakarta bersama Kepolisian RI dan Badan Intelijen Negara (BIN), telah mengidentifikasi 80 orang yang berada dalam sebuah acara bersama pasien (kasus) 1 di Jakarta. Dalam acara ini, pasien 1 terjangkit virus corona dari warga negara Jepang yang tinggi di Malaysia. </p>\n        <p> 80 orang orang tersebut jumlahnya mengerucut jadi 20 orang. Dari situ pemerintah terus mendalami kasusnya, hingga membawa 7 orang ke RSPI Sulianti Saroso. Pemerintah melakukan serangkaian pemeriksaan dan isolasi pada ke 7 orang tersebut. Sebab mereka mengalami gejala-gejala infeksi virus corona, seperti influenza meski dalam kategori sedang.  </p>\n        <p>“Dari 7 orang ini kita dapatkan dua orang confirm positif yang kami sebut sebagai kasus no 3 dan kasus no 4, Saya dapat laporan terakhir siang ini kasus 3 dan kasus 4 suhu badannya 37,6 dan 37,7 derajat Celsius. Pasien hanya mengeluhkan batuk, flu, tapi tidak ada keluhan sesak napas,” ujar Achmad Yurianto dalam Sehat Negeriku!</p>\n        <p> balik ke belakang, kasus 1 dan kasus 2 dimulai pada 14 Februari. Keduanya pasien COVID-19 tersebut merupakan seorang ibu (kasus 2) dan putrinya (kasus 1). Kasus atau pasien 1 mengeluh batuk, demam, dan lemas pada tanggal 16 Februari. Selanjutnya, ibunya juga jatuh sakit dan mereka memutuskan untuk dirawat di rumah sakit pada tanggal 26 Februari.</p>\n        \n        <h6>Kasus 6 Bukan Cluster Jakarta </h6>\n        <p>Pada Minggu (8/3) WNI yang positif mengidap virus corona penyebab COVID-19 bertambah 2 orang. Sampai saat ini total WNI yang positif terjangkit virus korona menjadi 6 orang. Lalu, bagaimana dengan kasus 5 dan 6 pasien baru virus corona di Indonesia? </p>\n        <p>Kasus 5 berantai dengan kasus 1 sampai 4. Pasien pada kasus 5 ini (55) merupakan hasil tracking dari cluster Jakarta. Sementara ini kasus 6 lain lagi ceritanya. Pasien pada kasus 6 merupakan pria berusia 36 tahun anak buah kapal Diamond Princess. Sebelumnya terdapat sekitar 78 WNI yang menjadi ABK di kapal tersebut.</p>\n        <p>Achmad Yurianto mengatakan, kasus 6 merupakan imported case yang pasien dapat dari Jepang, ketika bekerja sebagai awak kapal Diamond Princess. </p>\n        <p>“Dua orang warga Indonesia terdeteksi positif virus corona berdasarkan pemeriksaan dan hasil data laboratorium (Balitbangkes Kementerian Kesehatan),” tegasnya  Yurianto pada Minggu (8/3) di komplek Istana Kepresidenan. </p>\n        <p>Saat ini pasien di kasus 1-5 dirawat di RSPI Sulianti Saroso. Sementara itu, kasus 6 dirawat di RS Persahabatan. </p>\n        \n        <h6>Kasus Baru di Singapura, WNI Positif Corona Bertambah</h6>\n        <p>Selain di Wilayah Indonesia, jumlah WNI di Singapura yang terjangkit virus corona juga bertambah. Menurut keterangan Ministry of Health (MOH) Singapura, pada Minggu malam (8/3), seorang WNI (64) dinyatakan positif terjangkit virus corona. Temuan ini menjadi kasus ke-147 di negara tersebut. </p>\n        <p>Bagaimana kronologinya? MOH mengatakan, WNI yang tiba di Singapura pada Sabtu (7/3) tersebut, merupakan kasus impor. Sayangnya, belum diinformasikan lebih jauh dari negara mana WNI tersebut terjangkit COVID-19. </p>\n        <p>Sementara itu, pada Sabtu (7/3), seorang WNI (62) juga dinyatakan positif terinfeksi virus corona. Kasus ke-133 di Singapura ini diduga berasal dari acara makanan malam yang diadakan Restoran Joy Garden, SAFRA Jurong Singapura, pada 15 Februari 2020. </p>\n        <p>Menurut pemerintah Singapura, SAFRA Jurong menjadi salah satu cluster penularan pasien dengan jumlah yang cukup besar. Menurut MOH, sekitar 30 orang dinyatakan positif mengidap COVID-19 dalam cluster tersebut. </p>\n        <p>Sedangkan kasus pertama merupakan WNI yang berprofesi sebagai asisten rumah tangga (ART). Perempuan berusia 44 tahun tersebut telah dinyatakan sembuh pada pertengan bulan lalu. </p>\n        <p>Yuk, pastikan sakitmu bukan karena virus corona! Andaikan dirimu mencurigai diri atau anggota keluarga mengidap infeksi virus corona, atau sulit membedakan gejala COVID-19 dengan flu, segeralah tanyakan pada dokter. </p>\n        \n      </div>\n  \n    </div>\n    <br>\n  </ion-content>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'detail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | doctor-detail-detail-module */
        "doctor-detail-detail-module").then(__webpack_require__.bind(null,
        /*! ./doctor/detail/detail.module */
        "./src/app/doctor/detail/detail.module.ts")).then(function (m) {
          return m.DetailPageModule;
        });
      }
    }, {
      path: 'schedule',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | doctor-schedule-schedule-module */
        "doctor-schedule-schedule-module").then(__webpack_require__.bind(null,
        /*! ./doctor/schedule/schedule.module */
        "./src/app/doctor/schedule/schedule.module.ts")).then(function (m) {
          return m.SchedulePageModule;
        });
      }
    }, {
      path: 'dailypost',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | doctor-dailypost-dailypost-module */
        "doctor-dailypost-dailypost-module").then(__webpack_require__.bind(null,
        /*! ./doctor/dailypost/dailypost.module */
        "./src/app/doctor/dailypost/dailypost.module.ts")).then(function (m) {
          return m.DailypostPageModule;
        });
      }
    }, {
      path: 'news-detail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | news-news-detail-news-detail-module */
        "news-news-detail-news-detail-module").then(__webpack_require__.bind(null,
        /*! ./news/news-detail/news-detail.module */
        "./src/app/news/news-detail/news-detail.module.ts")).then(function (m) {
          return m.NewsDetailPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.statusBar.backgroundColorByHexString("#E09D55");
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _doctor_detail_detail_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./doctor/detail/detail.page */
    "./src/app/doctor/detail/detail.page.ts");
    /* harmony import */


    var _news_news_detail_news_detail_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./news/news-detail/news-detail.page */
    "./src/app/news/news-detail/news-detail.page.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _doctor_detail_detail_page__WEBPACK_IMPORTED_MODULE_9__["DetailPage"], _news_news_detail_news_detail_page__WEBPACK_IMPORTED_MODULE_10__["NewsDetailPage"]],
      entryComponents: [_doctor_detail_detail_page__WEBPACK_IMPORTED_MODULE_9__["DetailPage"], _news_news_detail_news_detail_page__WEBPACK_IMPORTED_MODULE_10__["NewsDetailPage"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/doctor/detail/detail.page.scss":
  /*!************************************************!*\
    !*** ./src/app/doctor/detail/detail.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDoctorDetailDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".detail {\n  padding: 20px !important; }\n\n.info-doctor {\n  padding: 15px;\n  height: 150px; }\n\nion-title {\n  position: static !important;\n  color: #332C2B; }\n\n.specialist {\n  font-size: 13px !important;\n  color: #696969; }\n\n.contact {\n  margin: 0px !important; }\n\n.image-doctor {\n  background-color: #F6BB7E;\n  border-radius: 20px !important;\n  padding: 10px;\n  width: 150px !important;\n  height: auto;\n  float: left;\n  vertical-align: middle; }\n\n.image-maps {\n  border-radius: 20px !important;\n  width: 120px !important;\n  height: 180px;\n  margin-right: 10px;\n  float: right;\n  vertical-align: middle; }\n\np {\n  padding: 0px 20px !important;\n  margin: 0px !important;\n  font-size: 13px;\n  color: #696969; }\n\n.info {\n  padding: 0px 5px !important;\n  margin: 0px !important;\n  font-size: 13px;\n  color: #696969; }\n\n.info-doctor h6 {\n  padding-left: 5px !important; }\n\n.address-doctor {\n  float: left;\n  max-width: 60%; }\n\n.table-info {\n  padding: 20px !important;\n  width: 100%;\n  border-collapse: unset; }\n\n.table-info tr > td {\n  padding-left: 10px; }\n\n.table-info tr.pic td {\n  padding: 0px; }\n\n.table-info h3 {\n  color: #332C2B;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.schedule {\n  margin-top: 50px;\n  padding: 20px;\n  padding-left: 35px !important;\n  padding-left: 15px !important; }\n\n.btn-schedule {\n  font-size: 12px;\n  width: 100%;\n  max-width: 100%;\n  text-transform: initial;\n  color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYWI2MDEvRG9jdW1lbnRzL1VUU18wOV8zNF8zNi9PZG9jL3NyYy9hcHAvZG9jdG9yL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFHZjtFQUNFLDJCQUEyQjtFQUMzQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWMsRUFBQTs7QUFFaEI7RUFDQyxzQkFBc0IsRUFBQTs7QUFFdkI7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBcUIsRUFBQTs7QUFHdkI7RUFFRSw4QkFBOEI7RUFFOUIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNCQUFxQixFQUFBOztBQUd2QjtFQUNFLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsNkJBQTZCLEVBQUE7O0FBSS9CO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZG9jdG9yL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHtcclxuICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xyXG4gICAvLyBoZWlnaHQ6IDIwMHB4O1xyXG4gfVxyXG4gLmluZm8tZG9jdG9ye1xyXG4gICBwYWRkaW5nOiAxNXB4O1xyXG4gICBoZWlnaHQ6IDE1MHB4O1xyXG4gfVxyXG4gXHJcbiBpb24tdGl0bGUge1xyXG4gICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbiAgIGNvbG9yOiAjMzMyQzJCO1xyXG4gfVxyXG4gLnNwZWNpYWxpc3R7XHJcbiAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICBjb2xvcjogIzY5Njk2OTtcclxuIH1cclxuIC5jb250YWN0e1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuaW1hZ2UtZG9jdG9ye1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZCQjdFO1xyXG4gICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7O1xyXG4gICBwYWRkaW5nOiAxMHB4O1xyXG4gICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgaGVpZ2h0OiBhdXRvO1xyXG4gICBmbG9hdDogbGVmdDtcclxuICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gfVxyXG4gXHJcbiAuaW1hZ2UtbWFwc3tcclxuICAvLyAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50OztcclxuICAvLyAgcGFkZGluZzogMTBweDtcclxuICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGhlaWdodDogMTgwcHg7XHJcbiAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiB9XHJcbiBcclxuIHB7XHJcbiAgIHBhZGRpbmc6IDBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgY29sb3I6ICM2OTY5Njk7XHJcbiB9XHJcbiAuaW5mb3tcclxuICAgcGFkZGluZzogMHB4IDVweCAhaW1wb3J0YW50O1xyXG4gICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICBmb250LXNpemU6IDEzcHg7XHJcbiAgIGNvbG9yOiAjNjk2OTY5O1xyXG4gfVxyXG4gLmluZm8tZG9jdG9yIGg2e1xyXG4gICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmFkZHJlc3MtZG9jdG9ye1xyXG4gICBmbG9hdDogbGVmdDtcclxuICAgbWF4LXdpZHRoOiA2MCU7XHJcbiBcclxuIH1cclxuIFxyXG4gLnRhYmxlLWluZm97XHJcbiAgIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGJvcmRlci1jb2xsYXBzZTogdW5zZXQ7XHJcbiB9XHJcbiAudGFibGUtaW5mbyB0ciA+IHRke1xyXG4gICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiB9XHJcbiBcclxuIC50YWJsZS1pbmZvIHRyLnBpYyB0ZHtcclxuICAgcGFkZGluZzogMHB4O1xyXG4gfVxyXG4gXHJcbiAudGFibGUtaW5mbyBoM3tcclxuICAgY29sb3I6ICMzMzJDMkI7XHJcbiAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gXHJcbiB9XHJcbiBcclxuIC5zY2hlZHVsZXtcclxuICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgcGFkZGluZzogMjBweDtcclxuICAgcGFkZGluZy1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG5cclxuIH1cclxuIFxyXG4gLmJ0bi1zY2hlZHVsZXtcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiB9Il19 */";
    /***/
  },

  /***/
  "./src/app/doctor/detail/detail.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/doctor/detail/detail.page.ts ***!
    \**********************************************/

  /*! exports provided: DetailPage */

  /***/
  function srcAppDoctorDetailDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPage", function () {
      return DetailPage;
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

    var DetailPage = /*#__PURE__*/function () {
      function DetailPage(modalCtrl) {
        _classCallCheck(this, DetailPage);

        this.modalCtrl = modalCtrl;
      }

      _createClass(DetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closePage",
        value: function closePage() {
          this.modalCtrl.dismiss();
        }
      }]);

      return DetailPage;
    }();

    DetailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/detail/detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detail.page.scss */
      "./src/app/doctor/detail/detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], DetailPage);
    /***/
  },

  /***/
  "./src/app/news/news-detail/news-detail.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/news/news-detail/news-detail.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsNewsDetailNewsDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".detail {\n  padding: 20px !important; }\n\n.info-doctor {\n  padding: 15px;\n  height: 150px; }\n\nion-title {\n  position: static !important;\n  color: #332C2B; }\n\n.specialist {\n  font-size: 13px !important;\n  color: #696969; }\n\n.contact {\n  margin: 0px !important; }\n\n.image-doctor {\n  background-color: #F6BB7E;\n  border-radius: 20px !important;\n  padding: 10px;\n  width: 150px !important;\n  height: auto;\n  float: left;\n  vertical-align: middle; }\n\n.image-maps {\n  background-color: #ddd;\n  border-radius: 20px !important;\n  padding: 10px;\n  width: 120px !important;\n  height: 180px;\n  margin-right: 10px;\n  float: right;\n  vertical-align: middle; }\n\np {\n  padding: 0px 20px !important;\n  margin: 0px !important;\n  font-size: 13px;\n  color: #696969;\n  text-align: justify;\n  text-justify: inter-word;\n  padding-bottom: 10px !important; }\n\n.info {\n  padding: 0px 5px !important;\n  margin: 0px !important;\n  font-size: 13px;\n  color: #696969; }\n\n.info-doctor h6 {\n  padding-left: 5px !important; }\n\n.address-doctor {\n  float: left;\n  max-width: 60%; }\n\n.table-info {\n  padding: 20px !important;\n  width: 100%;\n  border-collapse: unset; }\n\n.table-info tr > td {\n  padding-left: 10px; }\n\n.table-info tr.pic td {\n  padding: 0px; }\n\n.table-info h3 {\n  color: #332C2B;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.schedule {\n  margin-top: 50px;\n  padding: 20px;\n  padding-left: 35px !important; }\n\n.btn-schedule {\n  font-size: 12px;\n  width: 45%;\n  max-width: 100%;\n  text-transform: initial;\n  color: white !important; }\n\n.picture-news {\n  width: 100%;\n  height: 70%;\n  padding: 10px;\n  border-radius: 10px; }\n\nh6 {\n  padding-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYWI2MDEvRG9jdW1lbnRzL1VUU18wOV8zNF8zNi9PZG9jL3NyYy9hcHAvbmV3cy9uZXdzLWRldGFpbC9uZXdzLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxhQUFhO0VBQ2IsYUFBYSxFQUFBOztBQUdmO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYyxFQUFBOztBQUVoQjtFQUNDLHNCQUFzQixFQUFBOztBQUV2QjtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFxQixFQUFBOztBQUd2QjtFQUNFLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QiwrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsV0FBVztFQUNYLFdBQVk7RUFFWixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MtZGV0YWlsL25ld3MtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWx7XG4gICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuICAgIC8vIGhlaWdodDogMjAwcHg7XG4gIH1cbiAgLmluZm8tZG9jdG9ye1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuICBcbiAgaW9uLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMzMzJDMkI7XG4gIH1cbiAgLnNwZWNpYWxpc3R7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM2OTY5Njk7XG4gIH1cbiAgLmNvbnRhY3R7XG4gICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5pbWFnZS1kb2N0b3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2QkI3RTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgfVxuICBcbiAgLmltYWdlLW1hcHN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgfVxuICBcbiAgcHtcbiAgICBwYWRkaW5nOiAwcHggMjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjNjk2OTY5O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmluZm97XG4gICAgcGFkZGluZzogMHB4IDVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjNjk2OTY5O1xuICB9XG4gIC5pbmZvLWRvY3RvciBoNntcbiAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5hZGRyZXNzLWRvY3RvcntcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbiAgXG4gIH1cbiAgXG4gIC50YWJsZS1pbmZve1xuICAgIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IHVuc2V0O1xuICB9XG4gIC50YWJsZS1pbmZvIHRyID4gdGR7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIFxuICAudGFibGUtaW5mbyB0ci5waWMgdGR7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG4gIFxuICAudGFibGUtaW5mbyBoM3tcbiAgICBjb2xvcjogIzMzMkMyQjtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBcbiAgfVxuICBcbiAgLnNjaGVkdWxle1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmJ0bi1zY2hlZHVsZXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGljdHVyZS1uZXdze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAlIDsgXG4gICAgLy9iYWNrZ3JvdW5kOiAjRjZCQjdFO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICBoNntcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/news/news-detail/news-detail.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/news/news-detail/news-detail.page.ts ***!
    \******************************************************/

  /*! exports provided: NewsDetailPage */

  /***/
  function srcAppNewsNewsDetailNewsDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsDetailPage", function () {
      return NewsDetailPage;
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

    var NewsDetailPage = /*#__PURE__*/function () {
      function NewsDetailPage(modalCtrl) {
        _classCallCheck(this, NewsDetailPage);

        this.modalCtrl = modalCtrl;
      }

      _createClass(NewsDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closePage",
        value: function closePage() {
          this.modalCtrl.dismiss();
        }
      }]);

      return NewsDetailPage;
    }();

    NewsDetailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    NewsDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-news-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./news-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news-detail/news-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./news-detail.page.scss */
      "./src/app/news/news-detail/news-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], NewsDetailPage);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/lab601/Documents/UTS_09_34_36/Odoc/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
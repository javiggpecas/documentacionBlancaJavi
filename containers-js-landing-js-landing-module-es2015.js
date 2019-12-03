(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-js-landing-js-landing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/js-landing/js-landing.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/js-landing/js-landing.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n    Js Woks!!!\r\n</p>");

/***/ }),

/***/ "./src/app/containers/js-landing/js-landing-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/containers/js-landing/js-landing-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: JsLandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsLandingRoutingModule", function() { return JsLandingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _js_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js-landing.component */ "./src/app/containers/js-landing/js-landing.component.ts");




const routes = [
    {
        path: '',
        component: _js_landing_component__WEBPACK_IMPORTED_MODULE_3__["JsLandingComponent"]
    }
];
let JsLandingRoutingModule = class JsLandingRoutingModule {
};
JsLandingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], JsLandingRoutingModule);



/***/ }),

/***/ "./src/app/containers/js-landing/js-landing.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/containers/js-landing/js-landing.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvanMtbGFuZGluZy9qcy1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/containers/js-landing/js-landing.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/containers/js-landing/js-landing.component.ts ***!
  \***************************************************************/
/*! exports provided: JsLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsLandingComponent", function() { return JsLandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * JavaScript Landing contains JavaScript® documentation
 * <example-url>https://javiggpecas.github.io/documentacionBlancaJavi/#/js-landing</example-url>
 */
let JsLandingComponent = class JsLandingComponent {
    /**
     * The "constructor"
     */
    constructor() { }
};
JsLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-js-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./js-landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/js-landing/js-landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./js-landing.component.scss */ "./src/app/containers/js-landing/js-landing.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], JsLandingComponent);



/***/ }),

/***/ "./src/app/containers/js-landing/js-landing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/containers/js-landing/js-landing.module.ts ***!
  \************************************************************/
/*! exports provided: JsLandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsLandingModule", function() { return JsLandingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _js_landing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js-landing-routing.module */ "./src/app/containers/js-landing/js-landing-routing.module.ts");
/* harmony import */ var _js_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js-landing.component */ "./src/app/containers/js-landing/js-landing.component.ts");





let JsLandingModule = class JsLandingModule {
};
JsLandingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _js_landing_component__WEBPACK_IMPORTED_MODULE_4__["JsLandingComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _js_landing_routing_module__WEBPACK_IMPORTED_MODULE_3__["JsLandingRoutingModule"]
        ]
    })
], JsLandingModule);



/***/ })

}]);
//# sourceMappingURL=containers-js-landing-js-landing-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-html-landing-html-landing-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/html-landing/html-landing.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/html-landing/html-landing.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n    Html5 Woks!!!\r\n</p>");
            /***/ 
        }),
        /***/ "./src/app/containers/html-landing/html-landing-routing.module.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/containers/html-landing/html-landing-routing.module.ts ***!
          \************************************************************************/
        /*! exports provided: HtmlLandingRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlLandingRoutingModule", function () { return HtmlLandingRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _html_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-landing.component */ "./src/app/containers/html-landing/html-landing.component.ts");
            var routes = [
                {
                    path: '',
                    component: _html_landing_component__WEBPACK_IMPORTED_MODULE_3__["HtmlLandingComponent"]
                }
            ];
            var HtmlLandingRoutingModule = /** @class */ (function () {
                function HtmlLandingRoutingModule() {
                }
                return HtmlLandingRoutingModule;
            }());
            HtmlLandingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], HtmlLandingRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/containers/html-landing/html-landing.component.scss": 
        /*!*********************************************************************!*\
          !*** ./src/app/containers/html-landing/html-landing.component.scss ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvaHRtbC1sYW5kaW5nL2h0bWwtbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/containers/html-landing/html-landing.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/containers/html-landing/html-landing.component.ts ***!
          \*******************************************************************/
        /*! exports provided: HtmlLandingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlLandingComponent", function () { return HtmlLandingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /**
             * HTML Landing contains HTML5® documentation
             * <example-url>https://javiggpecas.github.io/documentacionBlancaJavi/#/html</example-url>
             */
            var HtmlLandingComponent = /** @class */ (function () {
                /**
                 * The "constructor"
                 */
                function HtmlLandingComponent() {
                }
                return HtmlLandingComponent;
            }());
            HtmlLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-html-landing',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./html-landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/html-landing/html-landing.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./html-landing.component.scss */ "./src/app/containers/html-landing/html-landing.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], HtmlLandingComponent);
            /***/ 
        }),
        /***/ "./src/app/containers/html-landing/html-landing.module.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/containers/html-landing/html-landing.module.ts ***!
          \****************************************************************/
        /*! exports provided: HtmlLandingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlLandingModule", function () { return HtmlLandingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _html_landing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-landing-routing.module */ "./src/app/containers/html-landing/html-landing-routing.module.ts");
            /* harmony import */ var _html_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html-landing.component */ "./src/app/containers/html-landing/html-landing.component.ts");
            var HtmlLandingModule = /** @class */ (function () {
                function HtmlLandingModule() {
                }
                return HtmlLandingModule;
            }());
            HtmlLandingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _html_landing_component__WEBPACK_IMPORTED_MODULE_4__["HtmlLandingComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _html_landing_routing_module__WEBPACK_IMPORTED_MODULE_3__["HtmlLandingRoutingModule"]
                    ]
                })
            ], HtmlLandingModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=containers-html-landing-html-landing-module-es2015.js.map
//# sourceMappingURL=containers-html-landing-html-landing-module-es5.js.map
//# sourceMappingURL=containers-html-landing-html-landing-module-es5.js.map
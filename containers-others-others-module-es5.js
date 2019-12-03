(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-others-others-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/angular-landing/containers/others/others.component.html": 
        /*!**************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/angular-landing/containers/others/others.component.html ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>Others works!</p>");
            /***/ 
        }),
        /***/ "./src/app/containers/angular-landing/containers/others/others-routing.module.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/containers/angular-landing/containers/others/others-routing.module.ts ***!
          \***************************************************************************************/
        /*! exports provided: OthersRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersRoutingModule", function () { return OthersRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _others_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./others.component */ "./src/app/containers/angular-landing/containers/others/others.component.ts");
            var routes = [
                {
                    path: '',
                    component: _others_component__WEBPACK_IMPORTED_MODULE_3__["OthersComponent"]
                }
            ];
            var OthersRoutingModule = /** @class */ (function () {
                function OthersRoutingModule() {
                }
                return OthersRoutingModule;
            }());
            OthersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], OthersRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/containers/angular-landing/containers/others/others.component.scss": 
        /*!************************************************************************************!*\
          !*** ./src/app/containers/angular-landing/containers/others/others.component.scss ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvYW5ndWxhci1sYW5kaW5nL2NvbnRhaW5lcnMvb3RoZXJzL290aGVycy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/containers/angular-landing/containers/others/others.component.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/app/containers/angular-landing/containers/others/others.component.ts ***!
          \**********************************************************************************/
        /*! exports provided: OthersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersComponent", function () { return OthersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /**
             * Others TODO
             * <example-url>https://javiggpecas.github.io/documentacionBlancaJavi/#/angular-landing/others</example-url>
             */
            var OthersComponent = /** @class */ (function () {
                /**
                 * The "constructor"
                 *
                 */
                function OthersComponent() {
                }
                return OthersComponent;
            }());
            OthersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-others',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./others.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/angular-landing/containers/others/others.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./others.component.scss */ "./src/app/containers/angular-landing/containers/others/others.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], OthersComponent);
            /***/ 
        }),
        /***/ "./src/app/containers/angular-landing/containers/others/others.module.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/containers/angular-landing/containers/others/others.module.ts ***!
          \*******************************************************************************/
        /*! exports provided: OthersModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersModule", function () { return OthersModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _others_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./others.component */ "./src/app/containers/angular-landing/containers/others/others.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _others_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./others-routing.module */ "./src/app/containers/angular-landing/containers/others/others-routing.module.ts");
            var OthersModule = /** @class */ (function () {
                function OthersModule() {
                }
                return OthersModule;
            }());
            OthersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_others_component__WEBPACK_IMPORTED_MODULE_3__["OthersComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _others_routing_module__WEBPACK_IMPORTED_MODULE_6__["OthersRoutingModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                    ]
                })
            ], OthersModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=containers-others-others-module-es2015.js.map
//# sourceMappingURL=containers-others-others-module-es5.js.map
//# sourceMappingURL=containers-others-others-module-es5.js.map
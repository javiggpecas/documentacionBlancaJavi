(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-home-home-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <div class=\"front-logo\">\r\n        <figure>\r\n            <img src=\"./assets/images/logo-front.png\" alt=\"Front Logo\">\r\n        </figure>   \r\n    </div>\r\n    \r\n    <nav>\r\n        <ul>\r\n            <li>\r\n                <a [routerLink]=\"['/angular-landing']\" title=\"Angular\">\r\n                    <figure>\r\n                        <img class=\"img-home\" src=\"./assets/images/angular.svg\" alt=\"Angular\">\r\n                    </figure>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/html-landing']\" title=\"HTML5\">\r\n                    <figure>\r\n                        <img class=\"img-home\" src=\"./assets/images/HTML5_logo_black.svg\" alt=\"HTML5\">\r\n                    </figure>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/js-landing']\" title=\"JavaScript\">\r\n                    <figure>\r\n                        <img class=\"img-home\" src=\"./assets/images/javascript-1.svg\" alt=\"JavaScript\">\r\n                    </figure>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/css-landing']\" title=\"CSS3\">\r\n                    <figure>\r\n                        <img class=\"img-home\" src=\"./assets/images/CSS3_logo.svg\" alt=\"CSS3\">\r\n                    </figure>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n</main>\r\n");
            /***/ 
        }),
        /***/ "./src/app/containers/home/home-routing.module.ts": 
        /*!********************************************************!*\
          !*** ./src/app/containers/home/home-routing.module.ts ***!
          \********************************************************/
        /*! exports provided: HomeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () { return HomeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/containers/home/home.component.ts");
            var routes = [
                {
                    path: '',
                    component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
                }
            ];
            var HomeRoutingModule = /** @class */ (function () {
                function HomeRoutingModule() {
                }
                return HomeRoutingModule;
            }());
            HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], HomeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/containers/home/home.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/containers/home/home.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".img-home {\n  height: 150px;\n}\n\n.front-logo {\n  width: 100%;\n  text-align: center;\n}\n\nnav {\n  text-align: center;\n  width: 100%;\n}\n\nnav ul {\n  margin: 0px;\n  border-radius: 2px;\n  padding: 0px;\n}\n\nnav ul li {\n  width: auto;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9ob21lL0M6XFxkZXZcXGRvY3VtZW50YWNpb25CbGFuY2FqYXZpL3NyY1xcYXBwXFxjb250YWluZXJzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDRUo7O0FEREk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDR1I7O0FERlE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNJUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1ob21lIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuLmZyb250LWxvZ28ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5pbWctaG9tZSB7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5mcm9udC1sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubmF2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbm5hdiB1bCB7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbm5hdiB1bCBsaSB7XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/containers/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/containers/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /**
             * Home Landing contains a navigation to the diferent  web sites
             * <example-url>https://javiggpecas.github.io/documentacionBlancaJavi/#/home</example-url>
             */
            var HomeComponent = /** @class */ (function () {
                /**
                 * The "constructor"
                 */
                function HomeComponent() {
                }
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/containers/home/home.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/containers/home/home.module.ts": 
        /*!************************************************!*\
          !*** ./src/app/containers/home/home.module.ts ***!
          \************************************************/
        /*! exports provided: HomeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function () { return HomeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/containers/home/home-routing.module.ts");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/containers/home/home.component.ts");
            var HomeModule = /** @class */ (function () {
                function HomeModule() {
                }
                return HomeModule;
            }());
            HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
                    ]
                })
            ], HomeModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=containers-home-home-module-es2015.js.map
//# sourceMappingURL=containers-home-home-module-es5.js.map
//# sourceMappingURL=containers-home-home-module-es5.js.map
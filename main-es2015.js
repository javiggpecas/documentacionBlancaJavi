(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<header>\r\n  <app-nav-bar [navData]=\"navBarData\"></app-nav-bar>\r\n</header>\r\n\r\n<router-outlet *ngIf=\"!isShowingRouteLoadIndicator\"></router-outlet>\r\n<div class=\"loader-background\" *ngIf=\"isShowingRouteLoadIndicator\">\r\n  <mat-progress-spinner color=\"acent\" mode=\"indeterminate\">\r\n  </mat-progress-spinner>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/accordion/accordion.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/accordion/accordion.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n        <mat-panel-title *ngIf=\"title\">{{title}}</mat-panel-title>\r\n        <mat-panel-description *ngIf=\"description\">{{description}}</mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <ng-content select=\".accordion-body\"></ng-content>\r\n</mat-expansion-panel>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/nav-bar/nav-bar.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/nav-bar/nav-bar.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\r\n    <ul>\r\n        <li *ngFor=\"let item of navData\">\r\n            <a routerLink=\"{{item.link}}\" class=\"{{item.class}}\" routerLinkActive=\"{{item.activateClass}}\" title=\"{{item.title}}\">\r\n                <fa-icon *ngIf=\"item.icon\" [icon]=\"icons[item.icon]\"></fa-icon>\r\n                <span *ngIf=\"item.text\">{{item.text}}</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        // por defecto, va a formularios
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de home
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | containers-home-home-module */ "containers-home-home-module").then(__webpack_require__.bind(null, /*! ./containers/home/home.module */ "./src/app/containers/home/home.module.ts")).then(m => m.HomeModule)
    },
    {
        // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de angular
        path: 'angular-landing',
        loadChildren: () => __webpack_require__.e(/*! import() | containers-angular-landing-angular-landing-module */ "containers-angular-landing-angular-landing-module").then(__webpack_require__.bind(null, /*! ./containers/angular-landing/angular-landing.module */ "./src/app/containers/angular-landing/angular-landing.module.ts")).then(m => m.AngularLandingModule)
    },
    {
        // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de html
        path: 'html-landing',
        loadChildren: () => __webpack_require__.e(/*! import() | containers-html-landing-html-landing-module */ "containers-html-landing-html-landing-module").then(__webpack_require__.bind(null, /*! ./containers/html-landing/html-landing.module */ "./src/app/containers/html-landing/html-landing.module.ts")).then(m => m.HtmlLandingModule)
    },
    {
        // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de css
        path: 'css-landing',
        loadChildren: () => __webpack_require__.e(/*! import() | containers-css-landing-css-landing-module */ "containers-css-landing-css-landing-module").then(__webpack_require__.bind(null, /*! ./containers/css-landing/css-landing.module */ "./src/app/containers/css-landing/css-landing.module.ts")).then(m => m.CssLandingModule)
    },
    {
        // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de js
        path: 'js-landing',
        loadChildren: () => __webpack_require__.e(/*! import() | containers-js-landing-js-landing-module */ "containers-js-landing-js-landing-module").then(__webpack_require__.bind(null, /*! ./containers/js-landing/js-landing.module */ "./src/app/containers/js-landing/js-landing.module.ts")).then(m => m.JsLandingModule)
    },
    { path: '**', redirectTo: 'home' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font: 15px/1.3 \"Open Sans\", sans-serif;\n  color: #c5c0c1;\n  text-align: center;\n}\n\n.loader-background {\n  width: 100%;\n  height: 100%;\n  background-color: #eaeaea4a;\n  z-index: 9999;\n}\n\nmat-progress-spinner {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  top: 0;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGRldlxcZG9jdW1lbnRhY2lvbkJsYW5jYWphdmkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQ6IDE1cHgvMS4zICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjYzVjMGMxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvYWRlci1iYWNrZ3JvdW5kIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTRhO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxubWF0LXByb2dyZXNzLXNwaW5uZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDsgXHJcbiAgcmlnaHQ6IDA7IFxyXG4gIHRvcDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQ6IDE1cHgvMS4zIFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjYzVjMGMxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2FkZXItYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE0YTtcbiAgei1pbmRleDogOTk5OTtcbn1cblxubWF0LXByb2dyZXNzLXNwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");





/**
 * Base and init app component
 */
let AppComponent = class AppComponent {
    /**
     * The "constructor"
     *
     * @param router Init angular routes
     */
    constructor(router) {
        this.router = router;
        /** Home icon */
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHome"];
        /** HTML5 icon */
        this.faHTML = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHtml5"];
        /** CSS3 icon */
        this.faCSS = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCss3Alt"];
        /** Angular icon */
        this.faAngular = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngular"];
        /** JavaScript icon */
        this.faJs = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faJsSquare"];
        /** Title of the webpage */
        this.title = 'Documentación Blanca Javi';
        /** Object to make the navigation bar */
        this.navBarData = [
            {
                link: '/home',
                class: 'nav-enlace',
                activateClass: 'activated-tab',
                icon: 'faHomeLanding',
                title: 'Home'
            },
            {
                link: '/angular-landing',
                class: 'nav-enlace angColor',
                activateClass: 'activated-tab angColorActive',
                icon: 'faAngularLanding',
                title: 'Angular'
            },
            {
                link: '/html-landing',
                class: 'nav-enlace htmlColor',
                activateClass: 'activated-tab htmlColorActive',
                icon: 'faHTMLLanding',
                title: 'HTML'
            },
            {
                link: '/css-landing',
                class: 'nav-enlace cssColor',
                activateClass: 'activated-tab cssColorActive',
                icon: 'faCSSLanding',
                title: 'CSS'
            },
            {
                link: '/js-landing',
                class: 'nav-enlace jsColor',
                activateClass: 'activated-tab jsColorActive',
                icon: 'faJsLanding',
                title: 'JavaScript'
            }
        ];
        this.isPageLoading();
    }
    /**
     * Subscribe and detect when is loading on change route
     */
    isPageLoading() {
        this.isShowingRouteLoadIndicator = false;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteConfigLoadStart"]) { // Modifica la variable del spinner a true cuando inicia la carga de la pagina
                this.isShowingRouteLoadIndicator = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteConfigLoadEnd"]) { // Lo modifica a false cuando finaliza la carga de la pagina
                this.isShowingRouteLoadIndicator = false;
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production })
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/components/accordion/accordion.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/accordion/accordion.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/accordion/accordion.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/accordion/accordion.component.ts ***!
  \********************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * Accordion container to insert components in a accordion
 * @example
 *
 * <app-accordion [title]="'Datepicker'" [description]="'Funcionamiento datepicker'">
 *  <ng-container class="accordion-body">
 *  </ng-container>
 * </app-accordion>
 */
let AccordionComponent = class AccordionComponent {
    /**
     * The "constructor"
     */
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AccordionComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AccordionComponent.prototype, "description", void 0);
AccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accordion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accordion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/accordion/accordion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accordion.component.scss */ "./src/app/shared/components/accordion/accordion.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AccordionComponent);



/***/ }),

/***/ "./src/app/shared/components/nav-bar/nav-bar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/nav-bar/nav-bar.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\n  width: 100%;\n}\nnav ul {\n  margin: 0px;\n  background-color: #686868;\n  border-radius: 2px;\n  text-align: center;\n  padding: 0px;\n}\nnav ul li {\n  width: auto;\n  display: inline-block;\n}\nnav ul li fa-icon {\n  font-size: 20pt;\n}\n.nav-enlace {\n  display: inline-block;\n  padding: 9px 19px;\n  color: white;\n  font-weight: bold;\n  font-size: 12px;\n  text-decoration: none !important;\n  text-transform: uppercase;\n  background-color: transparent;\n}\n.nav-enlace.htmlColor:hover {\n  color: #E44D26;\n}\n.nav-enlace.angColor:hover {\n  color: #b52e31;\n}\n.nav-enlace.jsColor:hover {\n  color: #F0DB4F;\n}\n.nav-enlace.cssColor:hover {\n  color: #2965f1;\n}\n.nav-enlace.activated-tab {\n  background-color: #0a1612;\n}\n.nav-enlace.activated-tab.htmlColorActive {\n  color: #E44D26;\n}\n.nav-enlace.activated-tab.angColorActive {\n  color: #b52e31;\n}\n.nav-enlace.activated-tab.jsColorActive {\n  color: #F0DB4F;\n}\n.nav-enlace.activated-tab.cssColorActive {\n  color: #2965f1;\n}\n.red-color {\n  color: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2LWJhci9DOlxcZGV2XFxkb2N1bWVudGFjaW9uQmxhbmNhamF2aS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxuYXYtYmFyXFxuYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0FDQUo7QURDSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ047QURBTTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQ0VSO0FERFE7RUFDRSxlQUFBO0FDR1Y7QURHRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FDQUo7QURFTTtFQUNFLGNBQUE7QUNBUjtBRElNO0VBQ0UsY0FBQTtBQ0ZSO0FETU07RUFDRSxjQUFBO0FDSlI7QURRTTtFQUNFLGNBQUE7QUNOUjtBRFNJO0VBQ0UseUJBQUE7QUNQTjtBRFFNO0VBQ0UsY0FBQTtBQ05SO0FEUU07RUFDRSxjQUFBO0FDTlI7QURRTTtFQUNFLGNBQUE7QUNOUjtBRFFNO0VBQ0UsY0FBQTtBQ05SO0FEV0U7RUFDRSxxQkFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgbmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdWwge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY4Njg2ODtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmYS1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm5hdi1lbmxhY2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogOXB4IDE5cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgJi5odG1sQ29sb3Ige1xyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjRTQ0RDI2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmFuZ0NvbG9yIHtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2I1MmUzMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5qc0NvbG9yIHtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBjb2xvcjogI0YwREI0RjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5jc3NDb2xvciB7XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICMyOTY1ZjE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYuYWN0aXZhdGVkLXRhYiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTE2MTI7XHJcbiAgICAgICYuaHRtbENvbG9yQWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogI0U0NEQyNjtcclxuICAgICAgfVxyXG4gICAgICAmLmFuZ0NvbG9yQWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogI2I1MmUzMTtcclxuICAgICAgfVxyXG4gICAgICAmLmpzQ29sb3JBY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjRjBEQjRGO1xyXG4gICAgICB9XHJcbiAgICAgICYuY3NzQ29sb3JBY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjMjk2NWYxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yZWQtY29sb3Ige1xyXG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAiLCJuYXYge1xuICB3aWR0aDogMTAwJTtcbn1cbm5hdiB1bCB7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg2ODY4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4O1xufVxubmF2IHVsIGxpIHtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbm5hdiB1bCBsaSBmYS1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB0O1xufVxuXG4ubmF2LWVubGFjZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogOXB4IDE5cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm5hdi1lbmxhY2UuaHRtbENvbG9yOmhvdmVyIHtcbiAgY29sb3I6ICNFNDREMjY7XG59XG4ubmF2LWVubGFjZS5hbmdDb2xvcjpob3ZlciB7XG4gIGNvbG9yOiAjYjUyZTMxO1xufVxuLm5hdi1lbmxhY2UuanNDb2xvcjpob3ZlciB7XG4gIGNvbG9yOiAjRjBEQjRGO1xufVxuLm5hdi1lbmxhY2UuY3NzQ29sb3I6aG92ZXIge1xuICBjb2xvcjogIzI5NjVmMTtcbn1cbi5uYXYtZW5sYWNlLmFjdGl2YXRlZC10YWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGExNjEyO1xufVxuLm5hdi1lbmxhY2UuYWN0aXZhdGVkLXRhYi5odG1sQ29sb3JBY3RpdmUge1xuICBjb2xvcjogI0U0NEQyNjtcbn1cbi5uYXYtZW5sYWNlLmFjdGl2YXRlZC10YWIuYW5nQ29sb3JBY3RpdmUge1xuICBjb2xvcjogI2I1MmUzMTtcbn1cbi5uYXYtZW5sYWNlLmFjdGl2YXRlZC10YWIuanNDb2xvckFjdGl2ZSB7XG4gIGNvbG9yOiAjRjBEQjRGO1xufVxuLm5hdi1lbmxhY2UuYWN0aXZhdGVkLXRhYi5jc3NDb2xvckFjdGl2ZSB7XG4gIGNvbG9yOiAjMjk2NWYxO1xufVxuXG4ucmVkLWNvbG9yIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/nav-bar/nav-bar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/nav-bar/nav-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");




/**
 * Nav Bar component contains the navigation bar of the web page
 * @example <app-nav-bar [navData]="navBarData"></app-nav-bar>
 */
let NavBarComponent = class NavBarComponent {
    /**
     * The "constructor"
     */
    constructor() {
        /** cons from FontAwesome */
        this.icons = {
            faHomeLanding: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHome"],
            faHTMLLanding: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHtml5"],
            faCSSLanding: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCss3Alt"],
            faAngularLanding: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAngular"],
            faJsLanding: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faJsSquare"]
        };
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], NavBarComponent.prototype, "navData", void 0);
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/shared/components/nav-bar/nav-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavBarComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/shared/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/accordion/accordion.component */ "./src/app/shared/components/accordion/accordion.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var SharedModule_1;









let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule_1,
            providers: []
        };
    }
};
SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ],
        declarations: [
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
            _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_7__["AccordionComponent"] // importa el componente principal
        ],
        providers: [],
        bootstrap: [],
        exports: [
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
            _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_7__["AccordionComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/** This file can be replaced during build by using the `fileReplacements` array.
 * `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
 * The list of file replacements can be found in `angular.json`.
 */
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\documentacionBlancajavi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
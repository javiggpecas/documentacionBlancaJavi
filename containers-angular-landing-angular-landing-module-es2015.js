(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-angular-landing-angular-landing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/angular-landing/angular-landing.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/angular-landing/angular-landing.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <app-nav-bar [navData]=\"navBarData\"></app-nav-bar>\r\n</header>\r\n<main>\r\n    <router-outlet></router-outlet>\r\n</main>\r\n");

/***/ }),

/***/ "./src/app/containers/angular-landing/angular-landing-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/containers/angular-landing/angular-landing-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AngularLandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularLandingRoutingModule", function() { return AngularLandingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angular-landing.component */ "./src/app/containers/angular-landing/angular-landing.component.ts");




const routes = [
    {
        path: '',
        component: _angular_landing_component__WEBPACK_IMPORTED_MODULE_3__["AngularLandingComponent"],
        children: [
            {
                path: 'form-components',
                loadChildren: () => __webpack_require__.e(/*! import() | containers-form-components-form-components-module */ "containers-form-components-form-components-module").then(__webpack_require__.bind(null, /*! ./containers/form-components/form-components.module */ "./src/app/containers/angular-landing/containers/form-components/form-components.module.ts")).then(m => m.FormComponentsModule)
            },
            {
                path: 'form',
                loadChildren: () => __webpack_require__.e(/*! import() | containers-form-form-module */ "containers-form-form-module").then(__webpack_require__.bind(null, /*! ./containers/form/form.module */ "./src/app/containers/angular-landing/containers/form/form.module.ts")).then(m => m.FormModule)
            },
            {
                path: 'others',
                loadChildren: () => __webpack_require__.e(/*! import() | containers-others-others-module */ "containers-others-others-module").then(__webpack_require__.bind(null, /*! ./containers/others/others.module */ "./src/app/containers/angular-landing/containers/others/others.module.ts")).then(m => m.OthersModule)
            }
        ]
    }
];
let AngularLandingRoutingModule = class AngularLandingRoutingModule {
};
AngularLandingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AngularLandingRoutingModule);



/***/ }),

/***/ "./src/app/containers/angular-landing/angular-landing.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/containers/angular-landing/angular-landing.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\n  width: 100%;\n}\nnav ul {\n  margin: 0px;\n  background-color: #c5c0c1;\n  border-radius: 2px;\n}\nnav ul li {\n  width: auto;\n  display: inline-block;\n}\nnav ul li a {\n  display: inline-block;\n  padding: 18px 30px;\n  color: white;\n  font-weight: bold;\n  font-size: 12px;\n  text-decoration: none !important;\n  text-transform: uppercase;\n  background-color: transparent;\n}\n.red-color {\n  color: red !important;\n}\n.activated-tab {\n  background-color: #0a1612;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9hbmd1bGFyLWxhbmRpbmcvQzpcXGRldlxcZG9jdW1lbnRhY2lvbkJsYW5jYWphdmkvc3JjXFxhcHBcXGNvbnRhaW5lcnNcXGFuZ3VsYXItbGFuZGluZ1xcYW5ndWxhci1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL2FuZ3VsYXItbGFuZGluZy9hbmd1bGFyLWxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0FDQUo7QURDSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ047QURDTTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQ0NSO0FEQ1E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQ0NWO0FETUU7RUFDRSxxQkFBQTtBQ0hKO0FETUU7RUFDRSx5QkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9hbmd1bGFyLWxhbmRpbmcvYW5ndWxhci1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgIC8vIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdWwge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzBjMTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIFxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogMThweCAzMHB4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnJlZC1jb2xvciB7XHJcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmF0ZWQtdGFiIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTE2MTI7XHJcbiAgfVxyXG4gICIsIm5hdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxubmF2IHVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWMwYzE7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbm5hdiB1bCBsaSB7XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5uYXYgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMThweCAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnJlZC1jb2xvciB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2YXRlZC10YWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGExNjEyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/containers/angular-landing/angular-landing.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/containers/angular-landing/angular-landing.component.ts ***!
  \*************************************************************************/
/*! exports provided: AngularLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularLandingComponent", function() { return AngularLandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



/**
 * Angular Landing contains Angular® documentation
 * <example-url>https://javiggpecas.github.io/documentacionBlancaJavi/#/angular-landing</example-url>
 */
let AngularLandingComponent = class AngularLandingComponent {
    /**
     * The "constructor"
     */
    constructor() {
        /** Object to make the navigation bar */
        this.navBarData = [
            {
                link: '/angular-landing/form-components',
                class: 'nav-enlace',
                activateClass: 'activated-tab',
                text: 'Form Components',
                title: 'Componentes de formularios'
            },
            {
                link: '/angular-landing/form',
                class: 'nav-enlace',
                activateClass: 'activated-tab',
                text: 'Formulario',
                title: 'Formulario'
            },
            {
                link: '/angular-landing/others',
                class: 'nav-enlace',
                activateClass: 'activated-tab',
                text: 'Otros',
                title: 'Otros'
            }
        ];
    }
};
AngularLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-angular-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./angular-landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/angular-landing/angular-landing.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('flyInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(-100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(100)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%)' }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./angular-landing.component.scss */ "./src/app/containers/angular-landing/angular-landing.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AngularLandingComponent);



/***/ }),

/***/ "./src/app/containers/angular-landing/angular-landing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/containers/angular-landing/angular-landing.module.ts ***!
  \**********************************************************************/
/*! exports provided: AngularLandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularLandingModule", function() { return AngularLandingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_landing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angular-landing-routing.module */ "./src/app/containers/angular-landing/angular-landing-routing.module.ts");
/* harmony import */ var _angular_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./angular-landing.component */ "./src/app/containers/angular-landing/angular-landing.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let AngularLandingModule = class AngularLandingModule {
};
AngularLandingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _angular_landing_component__WEBPACK_IMPORTED_MODULE_4__["AngularLandingComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_landing_routing_module__WEBPACK_IMPORTED_MODULE_3__["AngularLandingRoutingModule"]
        ]
    })
], AngularLandingModule);



/***/ })

}]);
//# sourceMappingURL=containers-angular-landing-angular-landing-module-es2015.js.map
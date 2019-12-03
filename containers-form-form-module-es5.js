(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-form-form-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/angular-landing/containers/form/form.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/angular-landing/containers/form/form.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form grace-form [formGroup]=\"formExample\">\r\n    <h2>Rellena tus datos</h2>\r\n    <div>\r\n        <label for=\"registeredOn\">Fecha nacimiento </label>\r\n        <input name=\"registeredOn\" formControlName=\"registeredOn\" type=\"date\" />\r\n    </div>\r\n    <div>\r\n        <label for=\"name\">Nombre </label>\r\n        <input name=\"name\" formControlName=\"name\" type=\"text\" placeholder=\"Introduzca su nombre\" />\r\n    </div>\r\n    <div>\r\n        <label for=\"lastName\">Apellidos </label>\r\n        <input name=\"lastName\" formControlName=\"lastName\" type=\"text\" placeholder=\"Introduzca sus apellidos\" />\r\n    </div>\r\n    <div>\r\n        <label for=\"email\">E-mail </label>\r\n        <input name=\"email\" formControlName=\"email\" type=\"email\" placeholder=\"Introduzca su email\" />\r\n    </div>\r\n    <div>\r\n        <label for=\"dni\">DNI </label>\r\n        <input name=\"dni\" formControlName=\"dni\" type=\"text\" placeholder=\"Introduzca su DNI\" />\r\n    </div>\r\n    <div>\r\n        <label for=\"password\">Contraseña </label>\r\n        <input id=\"password\" name=\"password\" formControlName=\"password\" type=\"password\" />\r\n        <span class=\"error-msg\" *ngIf=\"showError(formExample.get('password'))\">{{ getError(formExample.get('password'))}}</span>\r\n    </div>\r\n\r\n    <div>\r\n        <span>Sexo </span>\r\n        <input id=\"mujer\" type=\"radio\" formControlName=\"sexo\" value=\"mujer\" /><label for=\"sexoMujer\">Mujer</label>\r\n        <input id=\"hombre\" type=\"radio\" formControlName=\"sexo\" value=\"hombre\"><label for=\"sexoHombre\">Hombre</label>\r\n    </div>\r\n\r\n    <div>\r\n        <span>Indique su situación actual </span>\r\n        <select name=\"genero\" formControlName=\"state\">\r\n            <option>Soltero</option>\r\n            <option>Casado</option>\r\n        </select>\r\n    </div>\r\n    <div>\r\n        <span>Incluir foto </span>\r\n        <input type=\"file\" name=\"photo\" formControlName=\"photo\" />\r\n    </div>\r\n\r\n    <div>\r\n        <button (click)=\"register()\" [disabled]=\"formExample.invalid\">Validar</button>\r\n    </div>\r\n</form>\r\n\r\n<div *ngIf=\"isClicked\">\r\n    <h3>Datos usuario:</h3>\r\n    <p>{{user.name}} {{user.lastName}}</p>\r\n    <p>{{user.email}}</p>\r\n    <p>{{user.dni}}</p>\r\n    <p>{{user.password}}</p>\r\n    <p>{{user.registeredOn}}</p>\r\n    <p>{{user.sexo}}</p>\r\n    <!-- <img src=\"{{user.photo}}\"> -->\r\n    <p>{{user.state}}</p>\r\n</div>");
            /***/ 
        }),
        /***/ "./src/app/containers/angular-landing/containers/form/form-routing.module.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/containers/angular-landing/containers/form/form-routing.module.ts ***!
          \***********************************************************************************/
        /*! exports provided: FormRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRoutingModule", function () { return FormRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.component */ "./src/app/containers/angular-landing/containers/form/form.component.ts");
            var routes = [
                {
                    path: '',
                    component: _form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]
                }
            ];
            var FormRoutingModule = /** @class */ (function () {
                function FormRoutingModule() {
                }
                return FormRoutingModule;
            }());
            FormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], FormRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/containers/angular-landing/containers/form/form.component.scss": 
        /*!********************************************************************************!*\
          !*** ./src/app/containers/angular-landing/containers/form/form.component.scss ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div, h2 {\n  margin: 15px;\n}\n\nlabel {\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.error-msg {\n  font-style: italic;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9hbmd1bGFyLWxhbmRpbmcvY29udGFpbmVycy9mb3JtL0M6XFxkZXZcXGRvY3VtZW50YWNpb25CbGFuY2FqYXZpL3NyY1xcYXBwXFxjb250YWluZXJzXFxhbmd1bGFyLWxhbmRpbmdcXGNvbnRhaW5lcnNcXGZvcm1cXGZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lcnMvYW5ndWxhci1sYW5kaW5nL2NvbnRhaW5lcnMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csWUFBQTtBQ0NIOztBREVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2FuZ3VsYXItbGFuZGluZy9jb250YWluZXJzL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiwgaDIge1xyXG4gICBtYXJnaW46IDE1cHg7IFxyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5lcnJvci1tc2cge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9IiwiZGl2LCBoMiB7XG4gIG1hcmdpbjogMTVweDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmVycm9yLW1zZyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IHJlZDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/containers/angular-landing/containers/form/form.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/containers/angular-landing/containers/form/form.component.ts ***!
          \******************************************************************************/
        /*! exports provided: FormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function () { return FormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /**
             * Angular Form example
             * <example-url>https://javiggpecas.github.io/documentacionBlancaJavi/#/angular-landing/form</example-url>
             */
            var FormComponent = /** @class */ (function () {
                /**
                 * The "constructor"
                 *
                 * @param formBuilder Need to build Angular® Forms
                 */
                function FormComponent(formBuilder) {
                    this.formBuilder = formBuilder;
                    /** Boolean contains if the form was clicked */
                    this.isClicked = false;
                }
                /**
                 * On app inicialized and init
                 */
                FormComponent.prototype.ngOnInit = function () {
                    this.buildForm();
                };
                /**
                 * Init the form
                 */
                FormComponent.prototype.buildForm = function () {
                    var dateLength = 10;
                    var today = new Date().toISOString().substring(0, dateLength);
                    this.formExample = this.formBuilder.group({
                        registeredOn: today,
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        email: ['', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                            ]],
                        dni: ['', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            ]],
                        password: ['', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$'),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
                            ]],
                        sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        photo: '',
                        state: ''
                    });
                };
                /**
                 * Register the form on clicked in the sumbit
                 */
                FormComponent.prototype.register = function () {
                    this.isClicked = true;
                    this.user = this.formExample.value;
                    console.log(this.user);
                };
                /**
                 * If the are an error in the form
                 * @param formControl Contains the form data
                 */
                FormComponent.prototype.showError = function (formControl) {
                    return formControl.invalid && formControl.dirty;
                };
                /**
                 * Obtains the error text
                 * @param formControl Contains the form data
                 * @returns The error text to show
                 */
                FormComponent.prototype.getError = function (formControl) {
                    var formError = Object.keys(formControl.errors)[0];
                    switch (formError) {
                        case 'minlength':
                            return 'Campo con menos caracteres de los necesarios';
                        case 'pattern':
                            return 'Campo con caracteres inválidos';
                        case 'required':
                            return 'Campo requerido';
                        default:
                            return 'Lo sentimos, se ha producido un error inesperado. Por favor, reintente más tarde.';
                    }
                };
                return FormComponent;
            }());
            FormComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/angular-landing/containers/form/form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.component.scss */ "./src/app/containers/angular-landing/containers/form/form.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
            ], FormComponent);
            /***/ 
        }),
        /***/ "./src/app/containers/angular-landing/containers/form/form.module.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/containers/angular-landing/containers/form/form.module.ts ***!
          \***************************************************************************/
        /*! exports provided: FormModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function () { return FormModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.component */ "./src/app/containers/angular-landing/containers/form/form.component.ts");
            /* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-routing.module */ "./src/app/containers/angular-landing/containers/form/form-routing.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var FormModule = /** @class */ (function () {
                function FormModule() {
                }
                return FormModule;
            }());
            FormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _form_routing_module__WEBPACK_IMPORTED_MODULE_4__["FormRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                    ]
                })
            ], FormModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=containers-form-form-module-es2015.js.map
//# sourceMappingURL=containers-form-form-module-es5.js.map
//# sourceMappingURL=containers-form-form-module-es5.js.map
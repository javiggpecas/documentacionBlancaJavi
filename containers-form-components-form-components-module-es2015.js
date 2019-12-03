(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-form-components-form-components-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/angular-landing/containers/form-components/form-components.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/angular-landing/containers/form-components/form-components.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-accordion>\r\n    <app-accordion [title]=\"'Datepicker'\" [description]=\"'Funcionamiento datepicker'\">\r\n        <ng-container class=\"accordion-body\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Seleccione una fecha\" [matDatepickerFilter]=\"myFilter\"\r\n                    [matDatepicker]=\"picker\" [min]=\"minDate\" [max]=\"maxDate\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n        </ng-container>\r\n    </app-accordion>\r\n    <app-accordion [title]=\"'Radio Button'\" [description]=\"'Suscripción al radio button'\">\r\n        <ng-container class=\"accordion-body\">\r\n            <form class=\"accordion\" [formGroup]=\"cancelAnRequestForm\">\r\n                <fieldset>\r\n                    <span class=\"step-content__title\">Indique la razón de la pérdida de la tarjeta</span>\r\n                    <div class=\"step-content__radio\">\r\n                        <input id=\"indAnulacionPerdida\" type=\"radio\" formControlName=\"indAnulacion\"\r\n                            value=\"perdida\" /><label for=\"indAnulacionPerdida\">Pérdida</label>\r\n                        <input id=\"indAnulacionRobo\" type=\"radio\" formControlName=\"indAnulacion\" value=\"robo\"><label\r\n                            for=\"indAnulacionRobo\">Robo</label>\r\n                    </div>\r\n                    <span class=\"step-content__title\">¿Desea una nueva tarjeta?</span>\r\n                    <div class=\"step-content__radio\">\r\n                        <input id=\"indNewCardYes\" type=\"radio\" formControlName=\"indRenovacion\" value=\"1\"><label\r\n                            for=\"indNewCardYes\">Si</label>\r\n                        <input id=\"indNewCardLater\" type=\"radio\" formControlName=\"indRenovacion\" value=\"0\"><label\r\n                            for=\"indNewCardLater\">Más tarde</label>\r\n                    </div>\r\n                    <div *ngIf=\"cancelAnRequestForm.value.indRenovacion === '1'\">\r\n                        <p class=\"step-content__subtitle\">Dirección: Calle Félix Candela 81</p>\r\n                    </div>\r\n                </fieldset>\r\n            </form>\r\n        </ng-container>\r\n    </app-accordion>\r\n\r\n    <app-accordion [title]=\"'Campo numérico'\" [description]=\"'Validaciones campo numérico'\">\r\n        <ng-container class=\"accordion-body\">\r\n            <div class=\"modal-body\">\r\n                <form action=\"\" [formGroup]=\"confirmForm\" autocomplete=\"off\">\r\n                    <fieldset>\r\n                        <span class=\"modal-body--confirm-text\">Introduzca la clave enviada al móvil</span>\r\n                        <span class=\"modal-body--phone\">*** *** *54</span>\r\n                        <div class=\"modal-body__input input-wrapper\">\r\n                            <input id=\"confirm-code\" type=\"password\" name=\"codesms\" #codesms maxlength=\"4\"\r\n                                formControlName=\"code\" autocomplete=\"off\" [value]=\"\"\r\n                                class=\"modal-edit-transfer__input\" />\r\n                        </div>\r\n                        <span class=\"notification__text\" *ngIf=\"confirmForm.invalid\">La clave tiene que ser numérica y\r\n                            de 4 números</span>\r\n                    </fieldset>\r\n                </form>\r\n            </div>\r\n        </ng-container>\r\n    </app-accordion>\r\n    <app-accordion [title]=\"'Validaciones'\" [description]=\"'Comprobación datos introducidos'\">\r\n        <ng-container class=\"accordion-body\">\r\n            <form grace-form [formGroup]=\"aliasForm\" novalidate>\r\n                <div>\r\n                    <label for=\"aliasForm-alias\">Nombre de usuario (debe contener al menos una letra): </label>\r\n                    <input id=\"aliasForm-alias\" type=\"text\" maxlength=\"40\" formControlName=\"alias\">\r\n                    <span *ngIf=\"showError(aliasForm.get('alias'))\"\r\n                        class=\"error-msg\">{{getError(aliasForm.get('alias'))}}</span>\r\n                </div>\r\n                <div>\r\n                    <br>\r\n                    <button type=\"button\"\r\n                        (click)=\"sendForm(aliasForm.get('neverAgain').value ? 'neverAgain' : 'setAlias')\"\r\n                        [disabled]=\"aliasForm.invalid && !aliasForm.get('neverAgain').value\">\r\n                        {{(aliasForm.get('neverAgain').value ? 'Omitir' : 'Crear')}}\r\n                    </button>\r\n                    <button type=\"button\" *ngIf=\"!aliasForm.get('neverAgain').value\" (click)=\"goToIndex()\">Ahora no\r\n                    </button>\r\n                </div>\r\n                <div>\r\n                    <input type=\"checkbox\" name=\"aliasForm-never_again\" id=\"aliasForm-never_again\"\r\n                        formControlName=\"neverAgain\">\r\n                    <label for=\"aliasForm-never_again\">No volver a mostrar este mensaje</label>\r\n                </div>\r\n            </form>\r\n        </ng-container>\r\n    </app-accordion>\r\n</mat-accordion>");

/***/ }),

/***/ "./src/app/containers/angular-landing/containers/form-components/form-components-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/containers/angular-landing/containers/form-components/form-components-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: FormComponentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponentsRoutingModule", function() { return FormComponentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _form_components_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-components.component */ "./src/app/containers/angular-landing/containers/form-components/form-components.component.ts");




const routes = [
    {
        path: '',
        component: _form_components_component__WEBPACK_IMPORTED_MODULE_3__["FormComponentsComponent"]
    }
];
let FormComponentsRoutingModule = class FormComponentsRoutingModule {
};
FormComponentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FormComponentsRoutingModule);



/***/ }),

/***/ "./src/app/containers/angular-landing/containers/form-components/form-components.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/containers/angular-landing/containers/form-components/form-components.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".step-content {\n  padding: 30px 30px 35px 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.step-content form {\n  width: 100%;\n}\n.step-content form input[type=radio] {\n  width: 16px;\n  height: 16px;\n}\n.step-content form input[type=radio]:checked::before {\n  transform: scale(0.7);\n}\n.step-content__title {\n  color: #4D4C4C;\n  font-weight: 600px;\n  padding-bottom: 10px;\n}\n.step-content__subtitle {\n  color: #A39E98;\n  padding-bottom: 20px;\n  font-weight: 600px;\n}\n.step-content__radio {\n  color: #4D4C4C;\n  font-weight: 600px;\n  padding: 15px 0 30px 0;\n  display: flex;\n  align-items: center;\n}\n.step-content__radio span {\n  margin-right: 20px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.step-content__radio input {\n  margin-right: 7px;\n}\n.modal-body {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n}\n.modal-body form {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n}\n.modal-body--confirm-text {\n  color: #4D4C4C;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.modal-body--phone {\n  color: #4D4C4C;\n  padding-bottom: 30px;\n}\n.modal-body__input {\n  padding-bottom: 30px;\n  margin-bottom: 0px !important;\n}\n.modal-body .error-msg {\n  display: block;\n  color: red;\n}\n.modal-body .input-inline-wrapper {\n  padding-top: 1em;\n}\n.modal-body .input-inline-wrapper label {\n  color: #A39E98;\n}\n.error-msg {\n  display: block;\n  color: red;\n}\n.input-inline-wrapper {\n  padding-top: 1em;\n}\n.input-inline-wrapper label {\n  color: #A39E98;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9hbmd1bGFyLWxhbmRpbmcvY29udGFpbmVycy9mb3JtLWNvbXBvbmVudHMvQzpcXGRldlxcZG9jdW1lbnRhY2lvbkJsYW5jYWphdmkvc3JjXFxhcHBcXGNvbnRhaW5lcnNcXGFuZ3VsYXItbGFuZGluZ1xcY29udGFpbmVyc1xcZm9ybS1jb21wb25lbnRzXFxmb3JtLWNvbXBvbmVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lcnMvYW5ndWxhci1sYW5kaW5nL2NvbnRhaW5lcnMvZm9ybS1jb21wb25lbnRzL2Zvcm0tY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtBQ0NKO0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NOO0FEQ007RUFDRSxxQkFBQTtBQ0NSO0FES0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0hKO0FETUU7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0pKO0FET0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0xKO0FET0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNMTjtBRFFJO0VBQ0UsaUJBQUE7QUNOTjtBRFdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ1JGO0FEVUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ1JKO0FEV0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ1RKO0FEWUU7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUNWSjtBRGFFO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtBQ1hKO0FEY0U7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ1pKO0FEZUU7RUFDRSxnQkFBQTtBQ2JKO0FEZUk7RUFDRSxjQUFBO0FDYk47QURrQkE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ2ZGO0FEa0JBO0VBQ0UsZ0JBQUE7QUNmRjtBRGlCRTtFQUNFLGNBQUE7QUNmSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvYW5ndWxhci1sYW5kaW5nL2NvbnRhaW5lcnMvZm9ybS1jb21wb25lbnRzL2Zvcm0tY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDMwcHggMzBweCAzNXB4IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICBmb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcblxyXG4gICAgICAmOmNoZWNrZWQ6OmJlZm9yZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgY29sb3I6ICM0RDRDNEM7XHJcbiAgICBmb250LXdlaWdodDogNjAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gICZfX3N1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjQTM5RTk4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwcHg7XHJcbiAgfVxyXG5cclxuICAmX19yYWRpbyB7XHJcbiAgICBjb2xvcjogIzRENEM0QztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMCAzMHB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICYtLWNvbmZpcm0tdGV4dCB7XHJcbiAgICBjb2xvcjogIzRENEM0QztcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAmLS1waG9uZSB7XHJcbiAgICBjb2xvcjogIzRENEM0QztcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9faW5wdXQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5lcnJvci1tc2cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWlubGluZS13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBjb2xvcjogI0EzOUU5ODtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5lcnJvci1tc2cge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5pbnB1dC1pbmxpbmUtd3JhcHBlciB7XHJcbiAgcGFkZGluZy10b3A6IDFlbTtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgY29sb3I6ICNBMzlFOTg7XHJcbiAgfVxyXG59XHJcbiIsIi5zdGVwLWNvbnRlbnQge1xuICBwYWRkaW5nOiAzMHB4IDMwcHggMzVweCAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5zdGVwLWNvbnRlbnQgZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0ZXAtY29udGVudCBmb3JtIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cbi5zdGVwLWNvbnRlbnQgZm9ybSBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG59XG4uc3RlcC1jb250ZW50X190aXRsZSB7XG4gIGNvbG9yOiAjNEQ0QzRDO1xuICBmb250LXdlaWdodDogNjAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnN0ZXAtY29udGVudF9fc3VidGl0bGUge1xuICBjb2xvcjogI0EzOUU5ODtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDBweDtcbn1cbi5zdGVwLWNvbnRlbnRfX3JhZGlvIHtcbiAgY29sb3I6ICM0RDRDNEM7XG4gIGZvbnQtd2VpZ2h0OiA2MDBweDtcbiAgcGFkZGluZzogMTVweCAwIDMwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zdGVwLWNvbnRlbnRfX3JhZGlvIHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zdGVwLWNvbnRlbnRfX3JhZGlvIGlucHV0IHtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG4ubW9kYWwtYm9keSBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuLm1vZGFsLWJvZHktLWNvbmZpcm0tdGV4dCB7XG4gIGNvbG9yOiAjNEQ0QzRDO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4ubW9kYWwtYm9keS0tcGhvbmUge1xuICBjb2xvcjogIzRENEM0QztcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4ubW9kYWwtYm9keV9faW5wdXQge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtYm9keSAuZXJyb3ItbXNnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiByZWQ7XG59XG4ubW9kYWwtYm9keSAuaW5wdXQtaW5saW5lLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogMWVtO1xufVxuLm1vZGFsLWJvZHkgLmlucHV0LWlubGluZS13cmFwcGVyIGxhYmVsIHtcbiAgY29sb3I6ICNBMzlFOTg7XG59XG5cbi5lcnJvci1tc2cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHJlZDtcbn1cblxuLmlucHV0LWlubGluZS13cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IDFlbTtcbn1cbi5pbnB1dC1pbmxpbmUtd3JhcHBlciBsYWJlbCB7XG4gIGNvbG9yOiAjQTM5RTk4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/containers/angular-landing/containers/form-components/form-components.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/containers/angular-landing/containers/form-components/form-components.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: FormComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponentsComponent", function() { return FormComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



/**
 * Angular Form Compete and single example
 * <example-url>https://javiggpecas.github.io/documentacionBlancaJavi/#/angular-landing/form-components</example-url>
 */
let FormComponentsComponent = class FormComponentsComponent {
    // @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();
    /**
     * The "constructor" init the forms obtejct and the subscriptions
     * @param formBuilder Need to build Angular® Forms
     */
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        /** Min date can be selected */
        this.minDate = Date.now();
        // public minDate = '1568980850000';
        /** Max date can be selected */
        this.maxDate = '1569672050000';
        /** Boolean  error sms if there are an error will be true */
        this.errorSms = false;
        /**
         * Filter the day selected
         */
        this.myFilter = (d) => {
            const day = d.getDay();
            return day !== 0 && day !== 6;
        };
        this.confirmForm = this.formBuilder.group({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])
        });
        this.subscriptions = [];
        this.aliasForm = this.formBuilder.group({
            alias: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
                ]
            ],
            neverAgain: [false]
        });
        this.subscriptions.push(this.aliasForm.controls.neverAgain.valueChanges.subscribe(() => {
            if (this.aliasForm.controls.neverAgain.value) {
                this.aliasForm.controls.alias.disable();
            }
            else {
                this.aliasForm.controls.alias.enable();
            }
        }));
    }
    /**
     * Init the proyect
     */
    ngOnInit() {
        // RADIO BUTTON
        this.cancelAnRequestForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            indAnulacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            indRenovacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        // tslint:disable-next-line:no-string-literal
        this.cancelAnRequestForm.controls['indAnulacion'].valueChanges.subscribe(value => {
            alert(value);
        });
    }
    /**
     * Check the type of the completed form TODO
     * @param type Type of the form recibed
     */
    sendForm(type) {
        // if (type === 'setAlias') {
        //   this.submitForm.emit({
        //     form: this.aliasForm,
        //     formName: 'alias'
        //   });
        // }
        // if (type === 'neverAgain') {
        //   this.submitForm.emit({
        //     form: this.aliasForm,
        //     formName: 'neverShowAliasAgain'
        //   });
        // }
        if (type === 'setAlias') {
            alert('setAlias');
        }
        if (type === 'neverAgain') {
            alert('neverAgain');
        }
    }
    /**
     * Redirect to index TODO
     */
    goToIndex() {
        alert('Ir al index');
        // this.submitForm.emit({
        //   form: this.aliasForm,
        //   formName: null
        // });
    }
    /**
     * Check if you have to show error
     * @param formControl Object of the angular form
     * @returns boolean if it's a valid form
     */
    showError(formControl) {
        return formControl.invalid && formControl.dirty;
    }
    /**
     * Return the estring with the error
     * @param formControl Object of the angular form
     * @returns string of the error to show
     */
    getError(formControl) {
        const formError = Object.keys(formControl.errors)[0];
        switch (formError) {
            case 'minlength':
                return 'Campo con menos caracteres de los necesarios';
            case 'maxlength':
                return 'Campo con más caracteres de los necesarios';
            case 'pattern':
                return 'Campo con caracteres inválidos';
            case 'required':
                return 'Campo requerido';
            default:
                return 'Lo sentimos, se ha producido un error inesperado. Por favor, reintente más tarde.';
        }
    }
};
FormComponentsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
FormComponentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-components',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-components.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/angular-landing/containers/form-components/form-components.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-components.component.scss */ "./src/app/containers/angular-landing/containers/form-components/form-components.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], FormComponentsComponent);



/***/ }),

/***/ "./src/app/containers/angular-landing/containers/form-components/form-components.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/containers/angular-landing/containers/form-components/form-components.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: FormComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponentsModule", function() { return FormComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _form_components_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-components-routing.module */ "./src/app/containers/angular-landing/containers/form-components/form-components-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _form_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-components.component */ "./src/app/containers/angular-landing/containers/form-components/form-components.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");









let FormComponentsModule = class FormComponentsModule {
};
FormComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_form_components_component__WEBPACK_IMPORTED_MODULE_5__["FormComponentsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _form_components_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormComponentsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]
    })
], FormComponentsModule);



/***/ })

}]);
//# sourceMappingURL=containers-form-components-form-components-module-es2015.js.map
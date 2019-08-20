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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar fixed-top navbar-dark bg-dark\"-->\n     <!--style=\"color: white;\">-->\n\n  <!--<a class=\"navbar-brand\">Angular Form</a>-->\n\n<!--</nav>-->\n<app-tool-bar></app-tool-bar>\n\n<div style=\"margin-top: 30px;\">\n\n  <router-outlet></router-outlet>\n  <div id=\"loaderModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"loader-dialog modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\" style=\"background-color: unset; border: unset;\">\n        <div class=\"modal-body\">\n          <app-loading-spinner></app-loading-spinner>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n\n\n\n<!--<app-loading-spinner *ngIf=\"commonService.isSpinnerVisible\"></app-loading-spinner>-->\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form-field/dropdown/dropdown.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/ex-form/form-field/dropdown/dropdown.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"formGroup\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n    <mat-select formControlName={{property.name}} multiple={{property.array}}>\n      <mat-option *ngIf=\"!property.array\">Select</mat-option>\n      <mat-option *ngFor=\"let opt of property.values\" [value]=\"opt\">\n        {{opt}}\n      </mat-option>\n    </mat-select>\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form-field/email/email-field.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/ex-form/form-field/email/email-field.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"formGroup\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n    <input matInput #input\n           formControlName={{property.name}}\n           placeholder={{property.alias}}\n           type=\"email\">\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form-field/measure/measure.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/ex-form/form-field/measure/measure.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-sm-12\" style=\"padding: 0;\">\n  <div class=\"col-sm-6\" [formGroup]=\"formGroup\" style=\"padding-right: 0;\">\n    <app-number-field\n      [property]=\"newProperty.measure\"\n      (addControl)= \"addMeasureControl($event)\" >\n    </app-number-field>\n  </div>\n\n  <div class=\"col-sm-6\" [formGroup]=\"formGroup\" style=\"padding-right: 0;\">\n\n    <app-dropdown\n      [property]=\"newProperty.unit\"\n      (addControl)=\"addMeasureControl($event)\" >\n    </app-dropdown>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form-field/number/number-field.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/ex-form/form-field/number/number-field.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"formGroup\">\n\n  <mat-form-field appearance=\"outline\">\n    <mat-label>\n      {{property.alias}}\n      <span *ngIf=\"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n      <input  matInput\n              formControlName={{property.name}}\n              type=\"number\"\n              [attr.min] = \"property.min ? null : property.min\"\n              [attr.max] = \"property.max ? null : property.max\"\n              placeholder={{property.alias}}>\n    <!--(change)=\"fieldValueChanged()\">-->\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">\n      {{getError()}}\n    </mat-error>\n\n  </mat-form-field>\n</div>\n\n<!--formControlName={{property.name}}-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form-field/password/password-field.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/ex-form/form-field/password/password-field.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"formGroup\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n    <input matInput #input\n           formControlName={{property.name}}\n           placeholder={{property.alias}}\n           type=\"password\"\n           [attr.maxlength] = \"property.maxLength ? null : property.maxLength\"\n           [attr.minlength] = \"property.minLength ? null : property.minLength\" >\n\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form-field/radio/radio.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/ex-form/form-field/radio/radio.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"formGroup\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n    <!--<mat-select formControlName={{property.name}} multiple={{property.array}}>-->\n      <!--<mat-option *ngIf=\"!property.array\">Select</mat-option>-->\n      <!--<mat-option *ngFor=\"let opt of property.values\" [value]=\"opt\">-->\n        <!--{{opt}}-->\n      <!--</mat-option>-->\n    <!--</mat-select>-->\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form-field/text/text-field.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/ex-form/form-field/text/text-field.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"formGroup\">\n   <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n  <input matInput #input\n         formControlName={{property.name}}\n         placeholder={{property.alias}}\n         type=\"text\"\n         [attr.maxlength] = \"property.maxLength ? null : property.maxLength\"\n         [attr.minlength] = \"property.minLength ? null : property.minLength\">\n\n    <mat-hint align=\"end\" *ngIf = \"property.maxLength != null\">{{input.value.length}}/{{property.maxLength}}</mat-hint>\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/ex-form/form.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-simple *ngIf=\"modifiedUiSchema.type == 'Normal' \"\n            [uiSchema]=\"modifiedUiSchema\">\n</app-simple>\n\n\n\n<!--<app-accordian *ngIf=\"modifiedUiSchema.type =='Group'\"-->\n               <!--[uiSchema]=\"modifiedUiSchema\">-->\n<!--</app-accordian>-->\n\n\n\n<!--<app-step-form *ngIf=\"modifiedUiSchema.type =='Group'\"-->\n               <!--[uiSchema]=\"modifiedUiSchema\">-->\n<!--</app-step-form>-->\n\n<app-tab *ngIf=\"modifiedUiSchema.type =='Group'\"\n         [uiSchema]=\"modifiedUiSchema\">\n</app-tab>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/viewer/basic/simple/simple.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/ex-form/viewer/basic/simple/simple.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form [formGroup]=\"formGroup\" class=\"ex-form\">\n    <h5>{{uiSchema.name}}</h5>\n    <div class=\"row\">\n      <ng-container *ngFor=\"let property of uiSchema.fields; let i=index;\">\n        <!--Form field for text input  -->\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='String'\">\n          <app-text-field [property]=\"property\"\n                          (addControl)= \"addControl($event)\" >\n          </app-text-field>\n        </div>\n\n\n        <!--Form field for password input  -->\n\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Password'\">\n\n          <app-password-field  [property]=\"property\"\n                               (addControl)= \"addControl($event)\" >\n          </app-password-field>\n        </div>\n\n        <!--Form field for email input  -->\n\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Email'\">\n\n          <app-email-field  [property]=\"property\"\n                            (addControl)= \"addControl($event)\" >\n          </app-email-field>\n        </div>\n\n        <!--Form field for number input  -->\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n          <app-number-field [property]=\"property\"\n                            (addControl)= \"addControl($event)\" >\n          </app-number-field>\n\n        </div>\n        <!--Form field for enumeration-->\n\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Enumeration'\"\n             style=\"margin-bottom:0px;\">\n          <app-dropdown [property]=\"property\"\n                        (addControl)= \"addControl($event)\" >\n          </app-dropdown>\n\n        </div>\n\n\n\n        <div class=\"form-group col-sm-6\"\n             *ngIf=\"property && property.dataType=='Measure'\"\n             style=\"margin-bottom:0;\n                    padding-right:0;\">\n\n\n          <app-measure\n            [property]=\"property\"\n            (addControl)= \"addControl($event)\" >\n          </app-measure>\n\n        </div>\n\n      </ng-container>\n    </div>\n\n    <div>\n      <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n    </div>\n    <div class=\"btn btn-toolbar\">\n\n      <button type=\"button\" class=\"btn btn-primary\" (click)= \"getFormValue()\" [disabled]=\"!formGroup.valid\">Submit</button>\n      &nbsp; &nbsp;\n\n      <button type=\"button\" (click)=\"reset()\" class=\"btn btn-primary\">Reset</button>\n    </div>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/viewer/group/accordian/accordian.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/ex-form/viewer/group/accordian/accordian.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ex-form\">\n\n  <h5>{{uiSchema.name}}</h5>\n\n  <div style=\"margin: 3% 0;\">\n\n\n    <mat-accordion class=\"example-headers-align\">\n\n      <ng-container *ngFor=\"let stepControl of formGroup.controls | keyvalue;let i = index;\">\n\n        <mat-expansion-panel [expanded]=\"step === uiSchema.steps[i].sequence-1 \" (opened)=\"setStep(uiSchema.steps[i].sequence-1)\" hideToggle>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n             <b> {{uiSchema.steps[i].label}}</b>\n            </mat-panel-title>\n            <mat-panel-description>\n              {{uiSchema.steps[i].description}}\n              <!--<mat-icon>account_circle</mat-icon>-->\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n\n\n          <form [formGroup]=\"stepControl.value\" style=\"margin-top: 20px\" >\n            <div class=\"row\">\n              <ng-container *ngFor=\"let property of uiSchema.steps[i].fields;\">\n                <ng-template matStepLabel  matStepperIcon=\"number\">{{uiSchema.steps[i].label}}</ng-template>\n\n                <!--Form field for text input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='String'\">\n                  <app-text-field [property]=\"property\"\n                                  (addControl)= \"addControl($event)\" >\n                  </app-text-field>\n                </div>\n\n                <!--Form field for email input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Email'\">\n\n                  <app-email-field  [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-email-field>\n                </div>\n\n                <!--Form field for password input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Password'\">\n\n                  <app-password-field  [property]=\"property\"\n                                       (addControl)= \"addControl($event)\" >\n                  </app-password-field>\n                </div>\n                <!--Form field for number input  -->\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n                  <app-number-field [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-number-field>\n\n                </div>\n\n                <!--Form field for enumeration-->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Enumeration'\"\n                     style=\"margin-bottom:0px;\">\n                  <app-dropdown [property]=\"property\"\n                                (addControl)= \"addControl($event)\" >\n                  </app-dropdown>\n\n                </div>\n\n                <!--Form field for Measure Datatype-->\n\n                <div class=\"form-group col-sm-6\"\n                     *ngIf=\"property && property.dataType=='Measure'\"\n                     style=\"margin-bottom:0;padding-right: 0;\">\n\n\n\n                  <app-measure\n                    [property]=\"property\"\n                    (addControl)= \"addControl($event)\" >\n                  </app-measure>\n\n                </div>\n              </ng-container>\n\n            </div>\n\n            <div>\n              <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n            </div>\n            <div class=\"btn btn-toolbar\">\n              <button mat-button\n                      *ngIf=\"i > 0\"\n                      (click)=\"prevStep()\">\n                Back\n              </button>\n              <button\n                mat-button\n                [disabled]=\"!stepControl.value.valid\"\n                (click)=\"nextStep()\"\n                *ngIf=\"i < uiSchema.totalSteps-1\">\n                Next\n              </button>\n\n              <button\n                mat-raised-button\n                type=\"button\"\n                color=\"primary\"\n                *ngIf= \"i === uiSchema.totalSteps-1\"\n                (click)=\"formValue()\"\n                [disabled]=\"!formGroup.valid\">\n                Submit\n              </button>\n            </div>\n\n          </form>\n\n        </mat-expansion-panel>\n\n      </ng-container>\n\n    </mat-accordion>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/viewer/group/step-wizard/step-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/ex-form/viewer/group/step-wizard/step-form.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"ex-form\">\n\n    <h5>{{uiSchema.name}}</h5>\n\n  <mat-horizontal-stepper [linear]=\"true\" labelPosition=\"bottom\" #stepper>\n\n\n    <ng-container *ngFor=\"let stepControl of formGroup.controls | keyvalue;let i = index;\">\n\n        <mat-step [stepControl]=\"stepControl.value\" [completed]=\"false\">\n          <form [formGroup]=\"stepControl.value\" >\n            <div class=\"row\">\n              <ng-container *ngFor=\"let property of uiSchema.steps[i].fields;\">\n                <ng-template matStepLabel  matStepperIcon=\"number\">{{uiSchema.steps[i].label}}</ng-template>\n\n                <!--Form field for text input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='String'\">\n                  <app-text-field [property]=\"property\"\n                                  (addControl)= \"addControl($event)\" >\n                  </app-text-field>\n                </div>\n\n                <!--Form field for email input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Email'\">\n\n                  <app-email-field  [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-email-field>\n                </div>\n\n                <!--Form field for password input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Password'\">\n\n                  <app-password-field  [property]=\"property\"\n                                       (addControl)= \"addControl($event)\" >\n                  </app-password-field>\n                </div>\n                <!--Form field for number input  -->\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n                  <app-number-field [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-number-field>\n\n                </div>\n\n                <!--Form field for enumeration-->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Enumeration'\"\n                     style=\"margin-bottom:0px;\">\n                  <app-dropdown [property]=\"property\"\n                                (addControl)= \"addControl($event)\" >\n                  </app-dropdown>\n\n                </div>\n\n                <!--Form field for Measure Datatype-->\n\n                <div class=\"form-group col-sm-6\"\n                     *ngIf=\"property && property.dataType=='Measure'\"\n                     style=\"margin-bottom:0;padding-right: 0;\">\n\n\n\n                  <app-measure\n                    [property]=\"property\"\n                    (addControl)= \"addControl($event)\" >\n                  </app-measure>\n\n                </div>\n              </ng-container>\n\n            </div>\n\n            <div>\n              <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n            </div>\n            <div class=\"btn btn-toolbar\">\n              <button mat-button matStepperPrevious *ngIf=\"i > 0\">Back</button>\n              <button\n                mat-button\n                matStepperNext\n                *ngIf=\"i < uiSchema.totalSteps-1\">\n                Next\n              </button>\n\n              <button\n                mat-raised-button\n                type=\"button\"\n                color=\"primary\"\n                *ngIf= \"i === uiSchema.totalSteps-1\"\n                (click)=\"formValue()\"\n                [disabled]=\"!formGroup.valid\">\n                Submit\n              </button>\n            </div>\n\n          </form>\n\n        </mat-step>\n\n\n    </ng-container>\n  </mat-horizontal-stepper>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/viewer/group/tabs/tab/tab.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/ex-form/viewer/group/tabs/tab/tab.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div class=\"ex-form\">\n\n  <h5>{{uiSchema.name}}</h5>\n\n  <mat-tab-group animationDuration=\"0ms\" #tabGroup>\n\n\n    <ng-container *ngFor=\"let stepControl of formGroup.controls | keyvalue;let i = index;\">\n\n      <!--<mat-step [stepControl]=\"stepControl.value\" [completed]=\"false\">-->\n        <mat-tab [label] = \"uiSchema.steps[i].label\">\n          <form [formGroup]=\"stepControl.value\" >\n            <div class=\"row\">\n              <ng-container *ngFor=\"let property of uiSchema.steps[i].fields;\">\n                <ng-template matStepLabel  matStepperIcon=\"number\">{{uiSchema.steps[i].label}}</ng-template>\n\n                <!--Form field for text input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='String'\">\n                  <app-text-field [property]=\"property\"\n                                  (addControl)= \"addControl($event)\" >\n                  </app-text-field>\n                </div>\n\n                <!--Form field for email input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Email'\">\n\n                  <app-email-field  [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-email-field>\n                </div>\n\n                <!--Form field for password input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Password'\">\n\n                  <app-password-field  [property]=\"property\"\n                                       (addControl)= \"addControl($event)\" >\n                  </app-password-field>\n                </div>\n\n                <!--Form field for number input  -->\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n                  <app-number-field [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-number-field>\n\n                </div>\n\n                <!--Form field for enumeration-->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Enumeration'\"\n                     style=\"margin-bottom:0px;\">\n                  <app-dropdown [property]=\"property\"\n                                (addControl)= \"addControl($event)\" >\n                  </app-dropdown>\n\n                </div>\n\n                <!--Form field for Measure Datatype-->\n\n                <div class=\"form-group col-sm-6\"\n                     *ngIf=\"property && property.dataType=='Measure'\"\n                     style=\"margin-bottom:0;padding-right: 0;\">\n\n\n\n                  <app-measure\n                    [property]=\"property\"\n                    (addControl)= \"addControl($event)\" >\n                  </app-measure>\n\n                </div>\n              </ng-container>\n\n            </div>\n\n            <div>\n              <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n            </div>\n            <div class=\"btn btn-toolbar\">\n              <button mat-button *ngIf=\"i > 0\"\n                      (click)=\"tabGroup.selectedIndex = i-1\">Back</button>\n              <button\n                mat-button\n                *ngIf=\"i < uiSchema.totalSteps-1\"\n                [disabled]=\"!stepControl.value.valid\"\n                (click)=\"tabGroup.selectedIndex = i+1\">\n                Next\n              </button>\n\n              <button\n                mat-raised-button\n                type=\"button\"\n                color=\"primary\"\n                *ngIf= \"i === uiSchema.totalSteps-1\"\n                (click)=\"formValue()\"\n                [disabled]=\"!formGroup.valid\">\n                Submit\n              </button>\n            </div>\n\n          </form>\n        </mat-tab>\n\n\n\n      <!--</mat-step>-->\n\n\n    </ng-container>\n  </mat-tab-group>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/json-form/json-form.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/json-form/json-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n\n      <form [formGroup]=\"formGroup\" (ngSubmit)=\"login()\" class=\"form\">\n\n\n              <h5>Create Protocol</h5>\n\n              <ng-container *ngFor=\"let property of schema;let i=index;\">\n\n                    <!--Form field for text input  -->\n                     <div class=\"form-group\" *ngIf=\"property.dataType=='String'\">\n\n                         <mat-form-field hintLabel=\"Max {{property.maxLength}} character\"\n                                         appearance=\"outline\">\n\n                                <mat-label>{{property.alias}}\n                                  <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                </mat-label>\n\n                                <input matInput #input\n                                       formControlName={{property.name}}\n                                       maxLength={{property.maxLength}}\n                                       minLength=\"{{property.minLength}}\"\n                                       placeholder={{property.alias}} type=\"text\">\n\n                                <mat-hint align=\"end\">{{input.value.length}}/{{property.maxLength}}</mat-hint>\n\n                                <!-- <mat-error *ngIf=\"property.name + '.invalid'\">{{getError(property)}}</mat-error> -->\n                                <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                         </mat-form-field>\n\n                     </div>\n\n                    <!--Form field for number input  -->\n\n                    <div class=\"form-group\" *ngIf=\"property.dataType=='Number'\" style=\"margin-bottom:0px;\">\n\n                          <mat-form-field appearance=\"outline\">\n\n                                <mat-label>{{property.alias}}\n                                    <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                </mat-label>\n\n                                <input matInput min={{property.min}}\n                                       max={{property.max}}\n                                       formControlName={{property.name}}\n                                       type={{property.dataType|lowercase}}\n                                       placeholder={{property.alias}}>\n\n                                <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                          </mat-form-field>\n\n                    </div>\n\n                    <!--Form field for enumeration with multiselect -->\n\n                    <div class=\"form-group\" *ngIf=\"property.dataType=='Enumeration'&& property.array==true\" style=\"margin-bottom:0px;\">\n\n                          <mat-form-field appearance=\"outline\">\n\n                                 <mat-label>{{property.alias}}\n                                        <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                 </mat-label>\n\n                                 <mat-select formControlName={{property.name}} multiple>\n                                        <mat-option *ngFor=\"let opt of property.values\"\n                                                    [value]=\"opt\">{{opt}}\n                                        </mat-option>\n                                 </mat-select>\n\n                                 <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                          </mat-form-field>\n\n                    </div>\n\n                    <!--Form field for text enumeration with single selection  -->\n\n                    <div class=\"form-group\" *ngIf=\"property.dataType=='Enumeration'&& property.array==false\" style=\"margin-bottom:0px;\">\n\n                                 <mat-form-field appearance=\"outline\">\n\n                                        <mat-label>{{property.alias}}\n                                                  <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                        </mat-label>\n\n                                        <mat-select formControlName={{property.name}}>\n                                                  <mat-option>Select</mat-option>\n                                                  <mat-option *ngFor=\"let opt of property.values\"\n                                                              [value]=\"opt\">{{opt}}\n                                                  </mat-option>\n                                        </mat-select>\n\n                                        <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                                 </mat-form-field>\n\n                    </div>\n\n                    <!--Form field for Measure Datatype  -->\n\n                    <div class=\"row form-group\" *ngIf=\"property.dataType=='Measure'\" [formGroupName]=\"property.name\" style=\"margin-bottom:0px;\">\n\n                          <div class=\"col-md-6\">\n\n                                   <mat-form-field appearance=\"outline\">\n\n                                           <mat-label>{{property.alias}}\n                                                      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                           </mat-label>\n\n                                           <input matInput formControlName=\"in\"\n                                                  placeholder={{property.alias}}\n                                                  type=\"number\"\n                                                  (keyup)=\"enable(property)\"\n                                                  (focus)=\"enable(property)\" >\n\n                                   <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                                   </mat-form-field>\n                          </div>\n\n                           <div class=\"col-md-6\">\n\n                                    <mat-form-field appearance=\"outline\">\n\n                                            <mat-label>Unit\n                                                   <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                            </mat-label>\n\n                                            <mat-select formControlName=\"unit\">\n                                                   <mat-option>Select</mat-option>\n                                                   <mat-option *ngFor=\"let opt of property.units\" [value]=\"opt\">\n                                                   {{opt}}\n                                                   </mat-option>\n                                            </mat-select>\n\n                                            <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getEror(property)}}</mat-error>\n\n                                    </mat-form-field>\n                           </div>\n                      </div>\n\n\n              </ng-container>\n\n\n              <div>\n\n                     <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n\n              </div>\n\n              <div class=\"btn btn-toolbar\">\n\n                     <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!this.formGroup.valid\">Submit</button>\n                &nbsp; &nbsp;\n                     <button type=\"reset\" class=\"btn btn-primary\">Reset</button>\n\n              </div>\n\n       </form>\n\n</div>\n\n<!--\n    <pre>\n    formGroupForm?.value|json}}\n    </pre> -->\n\n\n\n\n<!--.mat-form-field-flex > .mat-form-field-infix {-->\n<!--padding: 0.35em 0px !important;-->\n<!--}-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin:0;\">\n  &nbsp;&nbsp;&nbsp;&nbsp;<h4>angular-jsonschema-form</h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  <ul class=\"nav nav-pills mb-3\" role=\"tablist\">\n    <li class=\"nav-item\"\n        *ngFor=\"let type of formType\"\n        (click)=\"setUiSchema(type)\">\n      <a class=\"nav-link active\"\n         data-toggle=\"pill\"\n         [class.active]=\"type === selectedType\"\n         href=\"\">{{type}}</a>\n    </li>\n  </ul>\n\n</div>\n\n<div class=\"row\" style=\"margin:0;\">\n  <div class=\"col-sm-6\">\n    <app-ui-schema\n      [uiSchemaData]=\"editorUISchema\"\n      (uiSchemaChange)=\"uiSchemaChange($event)\">\n    </app-ui-schema>\n\n    <app-model-schema\n      [modelSchemaData]=\"editorModelSchema\"\n      (modelSchemaChange)=\"modelSchemaChange($event)\">\n    </app-model-schema>\n\n\n  </div>\n  <div class=\"col-sm-6\">\n\n\n\n      <!--<mat-form-field appearance=\"outline\">-->\n        <!--<mat-label>Entity</mat-label>-->\n        <!--<mat-select [(value)]=\"selected\" (selectionChange)=\"reinitialize()\">-->\n          <!--<mat-option *ngFor=\"let opt of entity\" [value]=\"opt.name\">-->\n            <!--{{opt.name}}-->\n          <!--</mat-option>-->\n        <!--</mat-select>-->\n      <!--</mat-form-field>-->\n\n      <app-form\n        [modelSchema]=\"formModelSchema\"\n        [uiSchema]=\"formUISchema\">\n      </app-form>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/entryComponent/login/login.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/entryComponent/login/login.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h2 mat-dialog-title>Login</h2>\n\n  <mat-dialog-content>\n    <form class=\"example-form\" [formGroup]=\"formGroup\">\n\n      <div class=\"col-sm-12\" style=\"padding: 0;margin-top:7px\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n          <mat-error *ngIf=\"formGroup.controls['email'].invalid\">{{getError(\"email\")}}</mat-error>\n\n        </mat-form-field>\n\n      </div>\n      <div class=\"col-sm-12\" style=\"padding: 0;margin-top:7px\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input matInput  type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n          <mat-error *ngIf=\"formGroup.controls['password'].invalid\">{{getError(\"password\")}}</mat-error>\n\n        </mat-form-field>\n      </div>\n\n\n\n\n    </form>\n\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n\n      <div class=\"googleLogin\" style=\"width:100%\">\n        <button mat-raised-button color=\"warn\" (click)=\"login('google')\" style=\"width:100%\">\n          <span><i class=\"fab fa-google-plus-g\"></i>&nbsp;&nbsp;Log in with Google</span>\n        </button>\n\n\n\n      </div>\n\n    <div class=\"login-actions col-sm-12 row\">\n      <div class=\"col-sm-6\">\n        <button mat-raised-button color=\"primary\" (click)=\"login('email')\" [disabled]=\"this.formGroup.invalid\">Login</button>\n\n      </div>\n      <div class=\"col-sm-6\">\n        <button mat-raised-button (click)=\"cancel()\">Cancel</button>\n\n      </div>\n\n    </div>\n\n    <!--<button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">-->\n      <!--<i class=\"fab fa-google-plus-g\"></i>-->\n      <!--Log in with Google-->\n    <!--</button>-->\n  </mat-dialog-actions>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/entryComponent/signup/signup.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/entryComponent/signup/signup.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h2 mat-dialog-title>Sign Up</h2>\n  <mat-dialog-content>\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"login()\" (ngReset)=\"reset()\" class=\"ex-form\">\n      <div>\n        <ng-container *ngFor=\"let property of schema.properties;let i=index;\">\n          <!--Form field for text input  -->\n          <div class=\"form-group\" *ngIf=\"property.dataType=='String'\">\n            <app-text-field [property]=\"property\"\n                            (addControl)= \"addControl($event)\" >\n            </app-text-field>\n          </div>\n\n          <!--Form field for number input  -->\n          <div class=\"form-group\" *ngIf=\"property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n            <app-number-field [property]=\"property\"\n                              (addControl)= \"addControl($event)\" >\n            </app-number-field>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"property.dataType=='Email'\" style=\"margin-bottom:0;\">\n\n            <app-email-field  [property]=\"property\"\n                              (addControl)= \"addControl($event)\" >\n            </app-email-field>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"property.dataType=='Password'\" style=\"margin-bottom:0;\">\n\n            <app-password-field  [property]=\"property\"\n                                 (addControl)= \"addControl($event)\" >\n            </app-password-field>\n          </div>\n\n        </ng-container>\n      </div>\n\n    </form>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-button (click)=\"signup()\" [disabled]=\"!formGroup.valid\" color=\"primary\">Sign Up</button>\n    <button mat-button (click)=\"cancel()\" color=\"primary\">Cancel</button>\n\n  </mat-dialog-actions>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/tool-bar/tool-bar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/tool-bar/tool-bar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Dynamic Form</span>\n\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"example-fill-remaining-space\"></span>\n\n  <!-- login Button -->\n  <button mat-button (click)=\"openLoginDialog()\" *ngIf=\"!authService.isLoggedIn\">Login</button>\n  <button mat-button (click)=\"openSignupDialog()\" *ngIf=\"!authService.isLoggedIn\">Sign Up</button>\n  <button mat-button (click)=\"authService.SignOut()\" *ngIf=\"authService.isLoggedIn\">Logout</button>\n\n\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/json-editor/model-schema/model-schema.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/json-editor/model-schema/model-schema.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Model Schema</mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <json-editor [options]=\"modelSchemaEditorOptions\" [data]=\"modelSchemaData\" (keyup)=\"getData($event)\"></json-editor>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/json-editor/ui-schema/ui-schema.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/json-editor/ui-schema/ui-schema.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-bottom: 10px;\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>UI Schema</mat-card-title>\n    </mat-card-header>\n\n    <mat-card-content>\n      <json-editor [options]=\"uiSchemaEditorOptions\" [data]=\"uiSchemaData\" (keyup)=\"getData($event)\"></json-editor>\n    </mat-card-content>\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loading-spinner/loading-spinner.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loading-spinner/loading-spinner.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-wrapper\">\n  <div class=\"spinner\">\n    <div class=\"rect1\"></div>\n    <div class=\"rect2\"></div>\n    <div class=\"rect3\"></div>\n    <div class=\"rect4\"></div>\n    <div class=\"rect5\"></div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/Modules/angular-material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/Modules/angular-material.module.ts ***!
  \****************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"]
            ],
            exports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"]
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _guard_authentication_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guard/authentication.guard */ "./src/app/guard/authentication.guard.ts");





var routes = [
    { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_guard_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/common.service */ "./src/app/service/common.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(commonService) {
        this.commonService = commonService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Modules_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/angular-material.module */ "./src/app/Modules/angular-material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _component_json_form_json_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/json-form/json-form.component */ "./src/app/component/json-form/json-form.component.ts");
/* harmony import */ var _component_json_form_validation_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/json-form/validation-service.service */ "./src/app/component/json-form/validation-service.service.ts");
/* harmony import */ var _component_ex_form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/ex-form/form.component */ "./src/app/component/ex-form/form.component.ts");
/* harmony import */ var _component_ex_form_form_field_text_text_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/ex-form/form-field/text/text-field.component */ "./src/app/component/ex-form/form-field/text/text-field.component.ts");
/* harmony import */ var _component_ex_form_form_field_number_number_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/ex-form/form-field/number/number-field.component */ "./src/app/component/ex-form/form-field/number/number-field.component.ts");
/* harmony import */ var _component_ex_form_form_field_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/ex-form/form-field/dropdown/dropdown.component */ "./src/app/component/ex-form/form-field/dropdown/dropdown.component.ts");
/* harmony import */ var _component_ex_form_form_field_measure_measure_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/ex-form/form-field/measure/measure.component */ "./src/app/component/ex-form/form-field/measure/measure.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _entryComponent_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./entryComponent/login/login.component */ "./src/app/entryComponent/login/login.component.ts");
/* harmony import */ var _header_tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/tool-bar/tool-bar.component */ "./src/app/header/tool-bar/tool-bar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _entryComponent_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./entryComponent/signup/signup.component */ "./src/app/entryComponent/signup/signup.component.ts");
/* harmony import */ var _component_ex_form_form_field_email_email_field_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/ex-form/form-field/email/email-field.component */ "./src/app/component/ex-form/form-field/email/email-field.component.ts");
/* harmony import */ var _component_ex_form_form_field_password_password_field_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/ex-form/form-field/password/password-field.component */ "./src/app/component/ex-form/form-field/password/password-field.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ang_jsoneditor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ang-jsoneditor */ "./node_modules/ang-jsoneditor/fesm5/ang-jsoneditor.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _entryComponent_services_auth_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./entryComponent/services/auth.service */ "./src/app/entryComponent/services/auth.service.ts");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "./src/app/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _component_ex_form_viewer_group_step_wizard_step_form_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./component/ex-form/viewer/group/step-wizard/step-form.component */ "./src/app/component/ex-form/viewer/group/step-wizard/step-form.component.ts");
/* harmony import */ var _component_ex_form_viewer_basic_simple_simple_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./component/ex-form/viewer/basic/simple/simple.component */ "./src/app/component/ex-form/viewer/basic/simple/simple.component.ts");
/* harmony import */ var _component_ex_form_viewer_group_accordian_accordian_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./component/ex-form/viewer/group/accordian/accordian.component */ "./src/app/component/ex-form/viewer/group/accordian/accordian.component.ts");
/* harmony import */ var _component_ex_form_viewer_group_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./component/ex-form/viewer/group/tabs/tab/tab.component */ "./src/app/component/ex-form/viewer/group/tabs/tab/tab.component.ts");
/* harmony import */ var _json_editor_ui_schema_ui_schema_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./json-editor/ui-schema/ui-schema.component */ "./src/app/json-editor/ui-schema/ui-schema.component.ts");
/* harmony import */ var _json_editor_model_schema_model_schema_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./json-editor/model-schema/model-schema.component */ "./src/app/json-editor/model-schema/model-schema.component.ts");
/* harmony import */ var _component_ex_form_form_field_radio_radio_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./component/ex-form/form-field/radio/radio.component */ "./src/app/component/ex-form/form-field/radio/radio.component.ts");




























// firebase















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _component_json_form_json_form_component__WEBPACK_IMPORTED_MODULE_6__["JsonFormComponent"],
                _component_ex_form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                _component_ex_form_form_field_text_text_field_component__WEBPACK_IMPORTED_MODULE_9__["TextFieldComponent"],
                _component_ex_form_form_field_number_number_field_component__WEBPACK_IMPORTED_MODULE_10__["NumberFieldComponent"],
                _component_ex_form_form_field_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_11__["DropdownComponent"],
                _component_ex_form_form_field_measure_measure_component__WEBPACK_IMPORTED_MODULE_12__["MeasureComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _entryComponent_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _header_tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_16__["ToolBarComponent"],
                _entryComponent_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
                _component_ex_form_form_field_email_email_field_component__WEBPACK_IMPORTED_MODULE_19__["EmailFieldComponent"],
                _component_ex_form_form_field_password_password_field_component__WEBPACK_IMPORTED_MODULE_20__["PasswordFieldComponent"],
                _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_34__["LoadingSpinnerComponent"],
                _component_ex_form_viewer_group_step_wizard_step_form_component__WEBPACK_IMPORTED_MODULE_36__["StepFormComponent"],
                _component_ex_form_viewer_basic_simple_simple_component__WEBPACK_IMPORTED_MODULE_37__["SimpleComponent"],
                _component_ex_form_viewer_group_accordian_accordian_component__WEBPACK_IMPORTED_MODULE_38__["AccordianComponent"],
                _component_ex_form_viewer_group_tabs_tab_tab_component__WEBPACK_IMPORTED_MODULE_39__["TabComponent"],
                _json_editor_ui_schema_ui_schema_component__WEBPACK_IMPORTED_MODULE_40__["UiSchemaComponent"],
                _json_editor_model_schema_model_schema_component__WEBPACK_IMPORTED_MODULE_41__["ModelSchemaComponent"],
                _component_ex_form_form_field_radio_radio_component__WEBPACK_IMPORTED_MODULE_42__["RadioComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _Modules_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_28__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_29__["environment"].firebaseConfig),
                _angular_fire__WEBPACK_IMPORTED_MODULE_28__["AngularFireModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_31__["AngularFirestoreModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_32__["AngularFireDatabaseModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_30__["AngularFireAuthModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_25__["SocialLoginModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
                ang_jsoneditor__WEBPACK_IMPORTED_MODULE_27__["NgJsonEditorModule"]
            ],
            entryComponents: [
                _entryComponent_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _entryComponent_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"]
            ],
            providers: [_component_json_form_validation_service_service__WEBPACK_IMPORTED_MODULE_7__["ValidationServiceService"],
                _entryComponent_services_auth_service__WEBPACK_IMPORTED_MODULE_33__["AuthService"],
                _service_common_service__WEBPACK_IMPORTED_MODULE_35__["CommonService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/ex-form/form-building.service.ts":
/*!************************************************************!*\
  !*** ./src/app/component/ex-form/form-building.service.ts ***!
  \************************************************************/
/*! exports provided: FormBuildingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuildingService", function() { return FormBuildingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormBuildingService = /** @class */ (function () {
    function FormBuildingService() {
    }
    FormBuildingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormBuildingService);
    return FormBuildingService;
}());

//
// getSchema = (name) => {
//
//   const formSchema = [...SchemaJson];
//     // const formSchema = await Promise.resolve(SchemaJson);
//   // const properties = "properties";
//   const  entitySchema = _.find(formSchema, (formSchema) => {
//     if (formSchema.name === name) {
//       return formSchema;
//     }
//   });
//   if ( entitySchema.steps && entitySchema.steps !== null) {
//          entitySchema.steps.forEach((step) => {
//            step.refs = [...entitySchema.refs];
//            step = this.mapsUnitToValue(step);
//          });
//   } else {
//     entitySchema.properties =  this.mapsUnitToValue(entitySchema);
//   }
//   this.formSchema = {...entitySchema};
//   return this.formSchema;
//
// }
//
// mapsUnitToValue = (refEntitySchema) => {
//
//   refEntitySchema.properties = refEntitySchema.properties.map((property: any) => {
//     if (property.dataType === "Ref") {
//       refEntitySchema.refs.forEach(ref => {
//         if (property.ref === ref.name) {
//           Object.keys(ref).forEach((key) => (ref[key] == null) && delete ref[key]);
//           delete ref.name;
//           Object.assign(property, ref);
//         }
//       });
//     //  property.values = [...property.units];
//
//     }
//     if (property.dataType === "Measure" && property.units) {
//       property.values = [...property.units];
//       delete property.units;
//     }
//     return property;
//   });
//   return refEntitySchema.properties;
// }
// buildForm = (formSchema) => {
//    if (formSchema.steps && formSchema.steps !== null) {
//      const allSteps = [];
//      formSchema.steps.forEach((step, index) => {
//        allSteps[index] = this.buildControl(step);
//      });
//      return this.formBuilder.group(allSteps);
//    } else {
//      return this.buildControl(formSchema);
//    }
// }
//
// buildControl = (formSchema) => {
//   const allControl = {};
//   formSchema.properties.forEach((property) => {
//
//     if (property.dataType === "Measure") {
//       const measureGroup = {};
//       let initialUnitValue = "";
//       if (property.values.length === 1) {
//         initialUnitValue = property.values[0];
//       }
//       measureGroup[`${property.name}Measure`] = [{value: ""}, []];
//       measureGroup[`${property.name}Unit`] = [{value: initialUnitValue, disabled: true},[]];
//       allControl[property.name] = this.formBuilder.group(measureGroup);
//     } else {
//       allControl[property.name] = ["", []];
//
//     }
//
//   });
//
//   return this.formBuilder.group(allControl);
// }
//


/***/ }),

/***/ "./src/app/component/ex-form/form-field/dropdown/dropdown.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/component/ex-form/form-field/dropdown/dropdown.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mat-form-field{\r\n  width: 100%;\r\n}\r\n\r\n\r\n/* red color for asterik in required field*/\r\n\r\n\r\n.asterik{\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7O0FBR0EsMkNBQTJDOzs7QUFDM0M7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZXgtZm9ybS9mb3JtLWZpZWxkL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hdC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLyogcmVkIGNvbG9yIGZvciBhc3RlcmlrIGluIHJlcXVpcmVkIGZpZWxkKi9cclxuLmFzdGVyaWt7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/component/ex-form/form-field/dropdown/dropdown.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/ex-form/form-field/dropdown/dropdown.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_validation_message_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validators/validation-message-generator */ "./src/app/component/ex-form/validators/validation-message-generator.ts");
/* harmony import */ var _validators_required_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators/required-validator */ "./src/app/component/ex-form/validators/required-validator.ts");





var DropdownComponent = /** @class */ (function () {
    function DropdownComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.addControl = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getError = function () {
            return _validators_validation_message_generator__WEBPACK_IMPORTED_MODULE_3__["ValidationMessageGenerator"].errorMessage(_this.formGroup, _this.property);
        };
    }
    DropdownComponent.prototype.ngOnInit = function () {
        this.addValidator();
    };
    DropdownComponent.prototype.addValidator = function () {
        var _a;
        var validators = [];
        var dropDowninitialValue = "";
        var dropwDownDisable = false;
        if (this.property.required) {
            validators.push(new _validators_required_validator__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]().get());
        }
        if (this.property.values && this.property.values.length === 1) {
            // setUnitValue.setValue(this.property.values[0]);
            dropDowninitialValue = this.property.values[0];
            dropwDownDisable = true;
        }
        else {
            dropwDownDisable = !this.property.enable;
        }
        this.formGroup = this.formBuilder.group((_a = {}, _a[this.property.name] = [{ value: dropDowninitialValue, disabled: dropwDownDisable }, validators], _a));
        this.formGroup.updateValueAndValidity();
        this.addControl.emit({ key: this.property.name, value: this.formGroup });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "property", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "addControl", void 0);
    DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dropdown",
            template: __webpack_require__(/*! raw-loader!./dropdown.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form-field/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.css */ "./src/app/component/ex-form/form-field/dropdown/dropdown.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/component/ex-form/form-field/email/email-field.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/component/ex-form/form-field/email/email-field.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field{\r\n  width: 100%;\r\n}\r\n/* red color for asterik in required field*/\r\n.asterik{\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9lbWFpbC9lbWFpbC1maWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0EsMkNBQTJDO0FBQzNDO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9lbWFpbC9lbWFpbC1maWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi8qIHJlZCBjb2xvciBmb3IgYXN0ZXJpayBpbiByZXF1aXJlZCBmaWVsZCovXHJcbi5hc3Rlcmlre1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/component/ex-form/form-field/email/email-field.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/ex-form/form-field/email/email-field.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EmailFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailFieldComponent", function() { return EmailFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _validators_required_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators/required-validator */ "./src/app/component/ex-form/validators/required-validator.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_validation_message_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators/validation-message-generator */ "./src/app/component/ex-form/validators/validation-message-generator.ts");





var EmailFieldComponent = /** @class */ (function () {
    function EmailFieldComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.addControl = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addValidator = function () {
            var _a;
            var validators = [];
            if (_this.property.required) {
                validators.push(new _validators_required_validator__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]().get());
            }
            validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email);
            _this.formGroup = _this.formBuilder.group((_a = {}, _a[_this.property.name] = [{ value: "", disabled: !_this.property.enable }, validators], _a));
            _this.formGroup.updateValueAndValidity();
            _this.addControl.emit({ key: _this.property.name, value: _this.formGroup });
        };
        this.getError = function () {
            return _validators_validation_message_generator__WEBPACK_IMPORTED_MODULE_4__["ValidationMessageGenerator"].errorMessage(_this.formGroup, _this.property);
        };
    }
    EmailFieldComponent.prototype.ngOnInit = function () {
        this.addValidator();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmailFieldComponent.prototype, "property", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmailFieldComponent.prototype, "addControl", void 0);
    EmailFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-email-field",
            template: __webpack_require__(/*! raw-loader!./email-field.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form-field/email/email-field.component.html"),
            styles: [__webpack_require__(/*! ./email-field.component.css */ "./src/app/component/ex-form/form-field/email/email-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EmailFieldComponent);
    return EmailFieldComponent;
}());



/***/ }),

/***/ "./src/app/component/ex-form/form-field/measure/measure.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/component/ex-form/form-field/measure/measure.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0tZmllbGQvbWVhc3VyZS9tZWFzdXJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/ex-form/form-field/measure/measure.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/component/ex-form/form-field/measure/measure.component.ts ***!
  \***************************************************************************/
/*! exports provided: MeasureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasureComponent", function() { return MeasureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var MeasureComponent = /** @class */ (function () {
    function MeasureComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({});
        this.addControl = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newProperty = {
            measure: {}, unit: {}
        };
        this.onMeasureChange = function (measureValue) {
            var control = _this.formGroup.controls[_this.newProperty.unit.name];
            var values = "values";
            if (measureValue && _this.property[values].length > 1) {
                control.enable();
            }
            else {
                if (_this.property[values].length > 1) {
                    control.reset();
                }
                control.disable();
            }
        };
        this.addMeasureControl = function (data) {
            _this.formGroup.addControl(data.key, data.value);
            _this.formGroup.updateValueAndValidity();
            _this.addControl.emit({ key: _this.property.name, value: _this.formGroup });
        };
    }
    MeasureComponent.prototype.ngOnInit = function () {
        this.newProperty.measure = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.property);
        this.newProperty.measure.name += "Measure";
        this.newProperty.unit = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.property);
        this.newProperty.unit.name += "Unit";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MeasureComponent.prototype, "property", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MeasureComponent.prototype, "addControl", void 0);
    MeasureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-measure",
            template: __webpack_require__(/*! raw-loader!./measure.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form-field/measure/measure.component.html"),
            styles: [__webpack_require__(/*! ./measure.component.css */ "./src/app/component/ex-form/form-field/measure/measure.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], MeasureComponent);
    return MeasureComponent;
}());



/***/ }),

/***/ "./src/app/component/ex-form/form-field/number/number-field.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/component/ex-form/form-field/number/number-field.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mat-form-field{\r\n  width: 100%;\r\n}\r\n\r\n\r\n/* red color for asterik in required field*/\r\n\r\n\r\n.asterik{\r\n  color: red;\r\n}\r\n\r\n\r\n/* remove spinner from number field*/\r\n\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n\r\ninput[type=number] {\r\n  -moz-appearance:textfield;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9udW1iZXIvbnVtYmVyLWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztBQUNiOzs7QUFHQSwyQ0FBMkM7OztBQUMzQztFQUNFLFVBQVU7QUFDWjs7O0FBRUEsb0NBQW9DOzs7QUFDcEM7O0VBRUUsd0JBQXdCO0VBQ3hCLFNBQVM7QUFDWDs7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZXgtZm9ybS9mb3JtLWZpZWxkL251bWJlci9udW1iZXItZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4vKiByZWQgY29sb3IgZm9yIGFzdGVyaWsgaW4gcmVxdWlyZWQgZmllbGQqL1xyXG4uYXN0ZXJpa3tcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4vKiByZW1vdmUgc3Bpbm5lciBmcm9tIG51bWJlciBmaWVsZCovXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/component/ex-form/form-field/number/number-field.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/component/ex-form/form-field/number/number-field.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NumberFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFieldComponent", function() { return NumberFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_building_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form-building.service */ "./src/app/component/ex-form/form-building.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_validation_message_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators/validation-message-generator */ "./src/app/component/ex-form/validators/validation-message-generator.ts");
/* harmony import */ var _validators_required_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../validators/required-validator */ "./src/app/component/ex-form/validators/required-validator.ts");
/* harmony import */ var _validators_max_value_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validators/max-value-validator */ "./src/app/component/ex-form/validators/max-value-validator.ts");
/* harmony import */ var _validators_min_value_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../validators/min-value-validator */ "./src/app/component/ex-form/validators/min-value-validator.ts");
/* harmony import */ var _validators_pattern_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../validators/pattern-validator */ "./src/app/component/ex-form/validators/pattern-validator.ts");









var NumberFieldComponent = /** @class */ (function () {
    function NumberFieldComponent(formService, formBuilder) {
        var _this = this;
        this.formService = formService;
        this.formBuilder = formBuilder;
        this.addControl = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addValidator = function () {
            var _a;
            var validators = [];
            if (_this.property.required) {
                validators.push(new _validators_required_validator__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]().get());
            }
            if (_this.property.max && _this.property.max != null) {
                validators.push(new _validators_max_value_validator__WEBPACK_IMPORTED_MODULE_6__["MaxValueValidator"]().get(_this.property.max));
            }
            if (_this.property.max && _this.property.min != null) {
                validators.push(new _validators_min_value_validator__WEBPACK_IMPORTED_MODULE_7__["MinValueValidator"]().get(_this.property.min));
            }
            if (_this.property.pattern && _this.property.pattern != null) {
                validators.push(new _validators_pattern_validator__WEBPACK_IMPORTED_MODULE_8__["PatternValidator"]().get(_this.property.pattern));
            }
            _this.formGroup = _this.formBuilder.group((_a = {}, _a[_this.property.name] = [{ value: "", disabled: !_this.property.enable }, validators], _a));
            _this.formGroup.updateValueAndValidity();
            _this.addControl.emit({ key: _this.property.name, value: _this.formGroup });
        };
        this.getError = function () {
            return _validators_validation_message_generator__WEBPACK_IMPORTED_MODULE_4__["ValidationMessageGenerator"].errorMessage(_this.formGroup, _this.property);
        };
    }
    NumberFieldComponent.prototype.ngOnInit = function () {
        this.addValidator();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NumberFieldComponent.prototype, "property", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NumberFieldComponent.prototype, "addControl", void 0);
    NumberFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-number-field",
            template: __webpack_require__(/*! raw-loader!./number-field.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form-field/number/number-field.component.html"),
            styles: [__webpack_require__(/*! ./number-field.component.css */ "./src/app/component/ex-form/form-field/number/number-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_form_building_service__WEBPACK_IMPORTED_MODULE_2__["FormBuildingService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], NumberFieldComponent);
    return NumberFieldComponent;
}());



/***/ }),

/***/ "./src/app/component/ex-form/form-field/password/password-field.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/component/ex-form/form-field/password/password-field.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field{\r\n  width: 100%;\r\n}\r\n/* red color for asterik in required field*/\r\n.asterik{\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9wYXNzd29yZC9wYXNzd29yZC1maWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0EsMkNBQTJDO0FBQzNDO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9wYXNzd29yZC9wYXNzd29yZC1maWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi8qIHJlZCBjb2xvciBmb3IgYXN0ZXJpayBpbiByZXF1aXJlZCBmaWVsZCovXHJcbi5hc3Rlcmlre1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/component/ex-form/form-field/password/password-field.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/component/ex-form/form-field/password/password-field.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PasswordFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordFieldComponent", function() { return PasswordFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _validators_required_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators/required-validator */ "./src/app/component/ex-form/validators/required-validator.ts");
/* harmony import */ var _validators_max_length_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validators/max-length-validator */ "./src/app/component/ex-form/validators/max-length-validator.ts");
/* harmony import */ var _validators_pattern_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators/pattern-validator */ "./src/app/component/ex-form/validators/pattern-validator.ts");
/* harmony import */ var _validators_min_length_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../validators/min-length-validators */ "./src/app/component/ex-form/validators/min-length-validators.ts");
/* harmony import */ var _validators_validation_message_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validators/validation-message-generator */ "./src/app/component/ex-form/validators/validation-message-generator.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var PasswordFieldComponent = /** @class */ (function () {
    function PasswordFieldComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.addControl = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addValidator = function () {
            // validators.push(new RequiredValidator());
            var _a;
            var validators = [];
            if (_this.property.required) {
                validators.push(new _validators_required_validator__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]().get());
            }
            if (_this.property.minLength && _this.property.minLength != null) {
                validators.push(new _validators_min_length_validators__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"]().get(_this.property.minLength));
            }
            if (_this.property.maxLength && _this.property.maxLength != null) {
                validators.push(new _validators_max_length_validator__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]().get(_this.property.maxLength));
            }
            if (_this.property.pattern && _this.property.pattern != null) {
                validators.push(new _validators_pattern_validator__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"]().get(_this.property.pattern));
            }
            _this.formGroup = _this.formBuilder.group((_a = {}, _a[_this.property.name] = [{ value: "", disabled: !_this.property.enable }, validators], _a));
            _this.formGroup.updateValueAndValidity();
            _this.addControl.emit({ key: _this.property.name, value: _this.formGroup });
        };
        this.getError = function () {
            return _validators_validation_message_generator__WEBPACK_IMPORTED_MODULE_6__["ValidationMessageGenerator"].errorMessage(_this.formGroup, _this.property);
        };
    }
    PasswordFieldComponent.prototype.ngOnInit = function () {
        this.addValidator();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PasswordFieldComponent.prototype, "property", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PasswordFieldComponent.prototype, "addControl", void 0);
    PasswordFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-password-field",
            template: __webpack_require__(/*! raw-loader!./password-field.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form-field/password/password-field.component.html"),
            styles: [__webpack_require__(/*! ./password-field.component.css */ "./src/app/component/ex-form/form-field/password/password-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], PasswordFieldComponent);
    return PasswordFieldComponent;
}());



/***/ }),

/***/ "./src/app/component/ex-form/form-field/radio/radio.component.css":
/*!************************************************************************!*\
  !*** ./src/app/component/ex-form/form-field/radio/radio.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0tZmllbGQvcmFkaW8vcmFkaW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/ex-form/form-field/radio/radio.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/ex-form/form-field/radio/radio.component.ts ***!
  \***********************************************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
    }
    RadioComponent.prototype.ngOnInit = function () {
    };
    RadioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-radio",
            template: __webpack_require__(/*! raw-loader!./radio.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form-field/radio/radio.component.html"),
            styles: [__webpack_require__(/*! ./radio.component.css */ "./src/app/component/ex-form/form-field/radio/radio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadioComponent);
    return RadioComponent;
}());



/***/ }),

/***/ "./src/app/component/ex-form/form-field/text/text-field.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/component/ex-form/form-field/text/text-field.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field{\r\n  width: 100%;\r\n}\r\n/* red color for asterik in required field*/\r\n.asterik{\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC90ZXh0L3RleHQtZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBLDJDQUEyQztBQUMzQztFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0tZmllbGQvdGV4dC90ZXh0LWZpZWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLyogcmVkIGNvbG9yIGZvciBhc3RlcmlrIGluIHJlcXVpcmVkIGZpZWxkKi9cclxuLmFzdGVyaWt7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/component/ex-form/form-field/text/text-field.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/component/ex-form/form-field/text/text-field.component.ts ***!
  \***************************************************************************/
/*! exports provided: TextFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldComponent", function() { return TextFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _validators_validation_message_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators/validation-message-generator */ "./src/app/component/ex-form/validators/validation-message-generator.ts");
/* harmony import */ var _validators_required_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validators/required-validator */ "./src/app/component/ex-form/validators/required-validator.ts");
/* harmony import */ var _validators_min_length_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators/min-length-validators */ "./src/app/component/ex-form/validators/min-length-validators.ts");
/* harmony import */ var _validators_max_length_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../validators/max-length-validator */ "./src/app/component/ex-form/validators/max-length-validator.ts");
/* harmony import */ var _validators_pattern_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validators/pattern-validator */ "./src/app/component/ex-form/validators/pattern-validator.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var TextFieldComponent = /** @class */ (function () {
    function TextFieldComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.addControl = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addValidator = function () {
            var _a;
            var validators = [];
            if (_this.property.required) {
                validators.push(new _validators_required_validator__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"]().get());
            }
            if (_this.property.minLength && _this.property.minLength != null) {
                validators.push(new _validators_min_length_validators__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]().get(_this.property.minLength));
            }
            if (_this.property.maxLength && _this.property.maxLength != null) {
                validators.push(new _validators_max_length_validator__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"]().get(_this.property.maxLength));
            }
            if (_this.property.pattern && _this.property.pattern != null) {
                validators.push(new _validators_pattern_validator__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"]().get(_this.property.pattern));
            }
            _this.formGroup = _this.formBuilder.group((_a = {}, _a[_this.property.name] = [{ value: "", disabled: !_this.property.enable }, validators], _a));
            _this.formGroup.updateValueAndValidity();
            _this.addControl.emit({ key: _this.property.name, value: _this.formGroup });
        };
        this.getError = function () {
            return _validators_validation_message_generator__WEBPACK_IMPORTED_MODULE_2__["ValidationMessageGenerator"].errorMessage(_this.formGroup, _this.property);
        };
    }
    TextFieldComponent.prototype.ngOnInit = function () {
        this.addValidator();
    };
    TextFieldComponent.prototype.ngOnChanges = function () {
        // if (this.formGroup) {
        //   this.formGroup.updateValueAndValidity();
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextFieldComponent.prototype, "property", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextFieldComponent.prototype, "addControl", void 0);
    TextFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-text-field",
            template: __webpack_require__(/*! raw-loader!./text-field.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form-field/text/text-field.component.html"),
            styles: [__webpack_require__(/*! ./text-field.component.css */ "./src/app/component/ex-form/form-field/text/text-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], TextFieldComponent);
    return TextFieldComponent;
}());



/***/ }),

/***/ "./src/app/component/ex-form/form.component.css":
/*!******************************************************!*\
  !*** ./src/app/component/ex-form/form.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n  background-color: #f8f9fa;\r\n  padding: 15px;\r\n  margin-top: 56px;\r\n\r\n}\r\n\r\n/*.mat-form-field{*/\r\n\r\n/*width: 100%;*/\r\n\r\n/*}*/\r\n\r\n/* Minimize the height of mat-field */\r\n\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.35em 0px  !important;}\r\n\r\n::ng-deep .mat-form-field-label-wrapper { top: -1.5em; }\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n  -webkit-transform: translateY(-1.1em) scale(.75);\r\n          transform: translateY(-1.1em) scale(.75);\r\n  width: 133.33333%;\r\n}\r\n\r\n.mat-form-field-wrapper{\r\n  padding: 0px;\r\n}\r\n\r\n/* Minimize the bottom margin of mat-field */\r\n\r\n.row{\r\n  margin-bottom:0px;\r\n}\r\n\r\n/* red color for asterik in required field*/\r\n\r\n.asterik{\r\n  color: red;\r\n}\r\n\r\n.ex-form{\r\n  background:#fff;\r\n  box-shadow: 0 2px 6px 4px rgba(0,0,0,.14);\r\n  border-radius: 15px;\r\n  padding: 20px;\r\n}\r\n\r\n.padding-right-zero{\r\n  padding-right:0;\r\n}\r\n\r\n.padding-zero{\r\n  padding: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2V4LWZvcm0vZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixnQkFBZ0I7O0FBRWxCOztBQUVBLG1CQUFtQjs7QUFDakIsZUFBZTs7QUFDakIsSUFBSTs7QUFFSixxQ0FBcUM7O0FBRXJDLHlEQUF5RCwrQkFBK0IsQ0FBQzs7QUFDekYsMENBQTBDLFdBQVcsRUFBRTs7QUFFdkQ7RUFDRSxnREFBd0M7VUFBeEMsd0NBQXdDO0VBQ3hDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSw0Q0FBNEM7O0FBQzVDO0VBQ0UsaUJBQWlCO0FBQ25COztBQUdBLDJDQUEyQzs7QUFDM0M7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBR0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2V4LWZvcm0vZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogNTZweDtcclxuXHJcbn1cclxuXHJcbi8qLm1hdC1mb3JtLWZpZWxkeyovXHJcbiAgLyp3aWR0aDogMTAwJTsqL1xyXG4vKn0qL1xyXG5cclxuLyogTWluaW1pemUgdGhlIGhlaWdodCBvZiBtYXQtZmllbGQgKi9cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuMzVlbSAwcHggICFpbXBvcnRhbnQ7fVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjVlbTsgfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbiAgd2lkdGg6IDEzMy4zMzMzMyU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLyogTWluaW1pemUgdGhlIGJvdHRvbSBtYXJnaW4gb2YgbWF0LWZpZWxkICovXHJcbi5yb3d7XHJcbiAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbn1cclxuXHJcblxyXG4vKiByZWQgY29sb3IgZm9yIGFzdGVyaWsgaW4gcmVxdWlyZWQgZmllbGQqL1xyXG4uYXN0ZXJpa3tcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZXgtZm9ybXtcclxuICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IDRweCByZ2JhKDAsMCwwLC4xNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLnBhZGRpbmctcmlnaHQtemVyb3tcclxuICBwYWRkaW5nLXJpZ2h0OjA7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXplcm97XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/component/ex-form/form.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/component/ex-form/form.component.ts ***!
  \*****************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var FormComponent = /** @class */ (function () {
    function FormComponent() {
        var _this = this;
        this.initialize = function () {
            var uiSchema = Object.assign({}, _this.uiSchema);
            if (uiSchema.type === "Normal") {
                uiSchema.fields = _this.formatFields(uiSchema);
            }
            else {
                lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(uiSchema.steps, function (step) {
                    step.fields = _this.formatFields(step);
                });
            }
            _this.modifiedUiSchema = uiSchema;
            _this.modifiedUiSchema.name = _this.modelSchema.name;
        };
        this.formatFields = function (schema) {
            return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(schema.fields, function (field) {
                var matchedField = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.find(_this.modelSchema.properties, { name: field.name });
                if (matchedField) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, field, matchedField);
                }
            });
        };
    }
    FormComponent.prototype.ngOnInit = function () {
        this.initialize();
        // console.log(this.formGroup);
    };
    FormComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var chng = changes[propName];
            var cur = JSON.stringify(chng.currentValue);
            var prev = JSON.stringify(chng.previousValue);
            if (cur !== prev) {
                this.initialize();
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormComponent.prototype, "modelSchema", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormComponent.prototype, "uiSchema", void 0);
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form",
            template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/component/ex-form/form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/component/ex-form/validators/max-length-validator.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/ex-form/validators/max-length-validator.ts ***!
  \**********************************************************************/
/*! exports provided: MaxLengthValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var MaxLengthValidator = /** @class */ (function () {
    function MaxLengthValidator() {
        this.get = function (maxLength) {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(maxLength);
        };
    }
    return MaxLengthValidator;
}());



/***/ }),

/***/ "./src/app/component/ex-form/validators/max-value-validator.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/ex-form/validators/max-value-validator.ts ***!
  \*********************************************************************/
/*! exports provided: MaxValueValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxValueValidator", function() { return MaxValueValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/**
 * Created by rgarg on 08-07-2019.
 */

var MaxValueValidator = /** @class */ (function () {
    function MaxValueValidator() {
        this.get = function (maxValue) {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(maxValue);
        };
    }
    return MaxValueValidator;
}());



/***/ }),

/***/ "./src/app/component/ex-form/validators/min-length-validators.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/ex-form/validators/min-length-validators.ts ***!
  \***********************************************************************/
/*! exports provided: MinLengthValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var MinLengthValidator = /** @class */ (function () {
    function MinLengthValidator() {
        this.get = function (minLength) {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(minLength);
        };
    }
    return MinLengthValidator;
}());



/***/ }),

/***/ "./src/app/component/ex-form/validators/min-value-validator.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/ex-form/validators/min-value-validator.ts ***!
  \*********************************************************************/
/*! exports provided: MinValueValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinValueValidator", function() { return MinValueValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/**
 * Created by rgarg on 08-07-2019.
 */

var MinValueValidator = /** @class */ (function () {
    function MinValueValidator() {
        this.get = function (minValue) {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(minValue);
        };
    }
    return MinValueValidator;
}());



/***/ }),

/***/ "./src/app/component/ex-form/validators/pattern-validator.ts":
/*!*******************************************************************!*\
  !*** ./src/app/component/ex-form/validators/pattern-validator.ts ***!
  \*******************************************************************/
/*! exports provided: PatternValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/**
 * Created by rgarg on 08-07-2019.
 */

var PatternValidator = /** @class */ (function () {
    function PatternValidator() {
        this.get = function (pattern) {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(pattern);
        };
    }
    return PatternValidator;
}());



/***/ }),

/***/ "./src/app/component/ex-form/validators/required-validator.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/ex-form/validators/required-validator.ts ***!
  \********************************************************************/
/*! exports provided: RequiredValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var RequiredValidator = /** @class */ (function () {
    function RequiredValidator() {
        this.get = function () {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required;
        };
    }
    return RequiredValidator;
}());



/***/ }),

/***/ "./src/app/component/ex-form/validators/validation-message-generator.ts":
/*!******************************************************************************!*\
  !*** ./src/app/component/ex-form/validators/validation-message-generator.ts ***!
  \******************************************************************************/
/*! exports provided: ValidationMessageGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationMessageGenerator", function() { return ValidationMessageGenerator; });
/* harmony import */ var _validation_message_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-message.json */ "./src/app/component/ex-form/validators/validation-message.json");
var _validation_message_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./validation-message.json */ "./src/app/component/ex-form/validators/validation-message.json", 1);

var ValidationMessageGenerator = /** @class */ (function () {
    function ValidationMessageGenerator() {
    }
    ValidationMessageGenerator.errorMessage = function (formGroup, property) {
        var msg = "Field is Invalid";
        var control = formGroup.get(property.name);
        var fieldError = _validation_message_json__WEBPACK_IMPORTED_MODULE_0__.fields[property.name] ? _validation_message_json__WEBPACK_IMPORTED_MODULE_0__.fields[property.name] : "";
        if (control.hasError("required")) {
            if (fieldError.required) {
                msg = fieldError.required;
            }
            else {
                msg = _validation_message_json__WEBPACK_IMPORTED_MODULE_0__.common.required;
            }
        }
        else if (control.hasError("pattern") && property.name === "mobileNo") {
            if (fieldError.mobile) {
                msg = fieldError.mobile;
            }
            else {
                msg = _validation_message_json__WEBPACK_IMPORTED_MODULE_0__.common.mobile;
            }
        }
        else if (control.hasError("pattern")) {
            if (fieldError.pattern) {
                msg = fieldError.pattern;
            }
            else {
                msg = _validation_message_json__WEBPACK_IMPORTED_MODULE_0__.common.pattern;
            }
        }
        else if (control.hasError("minlength")) {
            if (fieldError.minLength) {
                msg = fieldError.minLength;
            }
            else {
                msg = _validation_message_json__WEBPACK_IMPORTED_MODULE_0__.common.minLength;
            }
        }
        else if (control.hasError("maxlength")) {
            if (fieldError.maxLength) {
                msg = fieldError.maxLength;
            }
            else {
                msg = _validation_message_json__WEBPACK_IMPORTED_MODULE_0__.common.maxLength;
            }
        }
        else if (control.hasError("min")) {
            if (fieldError.min) {
                msg = fieldError.min;
            }
            else {
                msg = _validation_message_json__WEBPACK_IMPORTED_MODULE_0__.common.min;
            }
        }
        else if (control.hasError("max")) {
            if (fieldError.max) {
                msg = fieldError.max;
            }
            else {
                msg = _validation_message_json__WEBPACK_IMPORTED_MODULE_0__.common.max;
            }
        }
        else if (control.hasError("email")) {
            if (fieldError.email) {
                msg = fieldError.email;
            }
            else {
                msg = _validation_message_json__WEBPACK_IMPORTED_MODULE_0__.common.email;
            }
        }
        var alias = property.alias, min = property.min, max = property.max, minLength = property.minLength, maxLength = property.maxLength, pattern = property.pattern;
        return Mustache.render(msg, { fieldName: alias, min: min, max: max, minLength: minLength, maxLength: maxLength, pattern: pattern });
    };
    return ValidationMessageGenerator;
}());



/***/ }),

/***/ "./src/app/component/ex-form/validators/validation-message.json":
/*!**********************************************************************!*\
  !*** ./src/app/component/ex-form/validators/validation-message.json ***!
  \**********************************************************************/
/*! exports provided: common, fields, default */
/***/ (function(module) {

module.exports = {"common":{"required":"{{fieldName}} is required.","minLength":"{{fieldName}} has minimum {{minLength}} characters.","maxLength":"{{fieldName}} has maximum {{maxLength}} characters.","min":"{{fieldName}} has minimum value {{min}}","max":"{{fieldName}} has maximum value {{max}}","email":"{{fieldName}} is invalid.","mobile":"{{fieldName}} is invalid.","pattern":"{{fieldName}} has pattern {{pattern}}."},"fields":{"protocolName":{"minLength":"{{fieldName}} has minimum {{minLength}} characters.","maxLength":"{{fieldName}} has maximum {{maxLength}} characters."},"amountOnColumn":{"required":"{{fieldName}} is required."},"columnLength":{"required":"{{fieldName}} is required."},"columnInnerDiameter":{"required":"{{fieldName}} is required."},"sampleSubmitterId":{"required":"{{fieldName}} is required."},"mobile":{"required":"{{fieldName}} is required."}}};

/***/ }),

/***/ "./src/app/component/ex-form/viewer/basic/simple/simple.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/component/ex-form/viewer/basic/simple/simple.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n  background-color: #f8f9fa;\r\n  padding: 15px;\r\n  margin-top: 56px;\r\n\r\n}\r\n\r\n/* Minimize the height of mat-field */\r\n\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.35em 0px  !important;}\r\n\r\n::ng-deep .mat-form-field-label-wrapper { top: -1.5em; }\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n  -webkit-transform: translateY(-1.1em) scale(.75);\r\n          transform: translateY(-1.1em) scale(.75);\r\n  width: 133.33333%;\r\n}\r\n\r\n.mat-form-field-wrapper{\r\n  padding: 0px;\r\n}\r\n\r\n/* Minimize the bottom margin of mat-field */\r\n\r\n.row{\r\n  margin-bottom:0px;\r\n}\r\n\r\n/* red color for asterik in required field*/\r\n\r\n.asterik{\r\n  color: red;\r\n}\r\n\r\n.ex-form{\r\n  background:#fff;\r\n  box-shadow: 0 2px 6px 4px rgba(0,0,0,.14);\r\n  border-radius: 15px;\r\n  /*margin: 15px 20%;*/\r\n  padding: 20px;\r\n}\r\n\r\n.padding-right-zero{\r\n  padding-right:0;\r\n}\r\n\r\n.padding-zero{\r\n  padding: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2V4LWZvcm0vdmlld2VyL2Jhc2ljL3NpbXBsZS9zaW1wbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZ0JBQWdCOztBQUVsQjs7QUFFQSxxQ0FBcUM7O0FBRXJDLHlEQUF5RCwrQkFBK0IsQ0FBQzs7QUFDekYsMENBQTBDLFdBQVcsRUFBRTs7QUFFdkQ7RUFDRSxnREFBd0M7VUFBeEMsd0NBQXdDO0VBQ3hDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSw0Q0FBNEM7O0FBQzVDO0VBQ0UsaUJBQWlCO0FBQ25COztBQUdBLDJDQUEyQzs7QUFDM0M7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsYUFBYTtBQUNmOztBQUdBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9leC1mb3JtL3ZpZXdlci9iYXNpYy9zaW1wbGUvc2ltcGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW4tdG9wOiA1NnB4O1xyXG5cclxufVxyXG5cclxuLyogTWluaW1pemUgdGhlIGhlaWdodCBvZiBtYXQtZmllbGQgKi9cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuMzVlbSAwcHggICFpbXBvcnRhbnQ7fVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjVlbTsgfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbiAgd2lkdGg6IDEzMy4zMzMzMyU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLyogTWluaW1pemUgdGhlIGJvdHRvbSBtYXJnaW4gb2YgbWF0LWZpZWxkICovXHJcbi5yb3d7XHJcbiAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbn1cclxuXHJcblxyXG4vKiByZWQgY29sb3IgZm9yIGFzdGVyaWsgaW4gcmVxdWlyZWQgZmllbGQqL1xyXG4uYXN0ZXJpa3tcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZXgtZm9ybXtcclxuICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IDRweCByZ2JhKDAsMCwwLC4xNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAvKm1hcmdpbjogMTVweCAyMCU7Ki9cclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLnBhZGRpbmctcmlnaHQtemVyb3tcclxuICBwYWRkaW5nLXJpZ2h0OjA7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXplcm97XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/component/ex-form/viewer/basic/simple/simple.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/component/ex-form/viewer/basic/simple/simple.component.ts ***!
  \***************************************************************************/
/*! exports provided: SimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleComponent", function() { return SimpleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SimpleComponent = /** @class */ (function () {
    function SimpleComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({});
        this.addControl = function (data) {
            _this.formGroup.addControl(data.key, data.value);
            _this.formGroup.updateValueAndValidity();
        };
        this.getFormValue = function () {
            console.log(_this.formGroup.getRawValue());
        };
        this.reset = function () {
            console.log(_this.formGroup);
            _this.formGroup.reset();
        };
    }
    SimpleComponent.prototype.ngOnInit = function () {
    };
    SimpleComponent.prototype.ngOnChanges = function () {
        this.formGroup = this.formBuilder.group({}); // when ui or model formSchema changes re initialize form group
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SimpleComponent.prototype, "uiSchema", void 0);
    SimpleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-simple",
            template: __webpack_require__(/*! raw-loader!./simple.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/viewer/basic/simple/simple.component.html"),
            styles: [__webpack_require__(/*! ./simple.component.css */ "./src/app/component/ex-form/viewer/basic/simple/simple.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SimpleComponent);
    return SimpleComponent;
}());



/***/ }),

/***/ "./src/app/component/ex-form/viewer/group/accordian/accordian.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/component/ex-form/viewer/group/accordian/accordian.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.mat-form-field{*/\r\n/*width: 100%;*/\r\n/*}*/\r\n/* Minimize the height of mat-field */\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.35em 0px  !important;}\r\n::ng-deep .mat-form-field-label-wrapper { top: -1.5em; }\r\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n  -webkit-transform: translateY(-1.1em) scale(.75);\r\n          transform: translateY(-1.1em) scale(.75);\r\n  width: 133.33333%;\r\n}\r\n.mat-form-field-wrapper{\r\n  padding: 0px;\r\n}\r\n/* Minimize the bottom margin of mat-field */\r\n.row{\r\n  margin-bottom:0px;\r\n}\r\n/* red color for asterik in required field*/\r\n.asterik{\r\n  color: red;\r\n}\r\n.ex-form{\r\n  background:#fff;\r\n  box-shadow: 0px 1px 2px 2px rgba(0,0,0,.14);\r\n  padding: 30px;\r\n}\r\n.padding-right-zero{\r\n  padding-right:0;\r\n}\r\n.padding-zero{\r\n  padding: 0;\r\n}\r\nmat-expansion-panel {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2V4LWZvcm0vdmlld2VyL2dyb3VwL2FjY29yZGlhbi9hY2NvcmRpYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLElBQUk7QUFFSixxQ0FBcUM7QUFFckMseURBQXlELCtCQUErQixDQUFDO0FBQ3pGLDBDQUEwQyxXQUFXLEVBQUU7QUFFdkQ7RUFDRSxnREFBd0M7VUFBeEMsd0NBQXdDO0VBQ3hDLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUEsNENBQTRDO0FBQzVDO0VBQ0UsaUJBQWlCO0FBQ25CO0FBR0EsMkNBQTJDO0FBQzNDO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxlQUFlO0VBQ2YsMkNBQTJDO0VBQzNDLGFBQWE7QUFDZjtBQUlBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBR0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZXgtZm9ybS92aWV3ZXIvZ3JvdXAvYWNjb3JkaWFuL2FjY29yZGlhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoubWF0LWZvcm0tZmllbGR7Ki9cclxuLyp3aWR0aDogMTAwJTsqL1xyXG4vKn0qL1xyXG5cclxuLyogTWluaW1pemUgdGhlIGhlaWdodCBvZiBtYXQtZmllbGQgKi9cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuMzVlbSAwcHggICFpbXBvcnRhbnQ7fVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjVlbTsgfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbiAgd2lkdGg6IDEzMy4zMzMzMyU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLyogTWluaW1pemUgdGhlIGJvdHRvbSBtYXJnaW4gb2YgbWF0LWZpZWxkICovXHJcbi5yb3d7XHJcbiAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbn1cclxuXHJcblxyXG4vKiByZWQgY29sb3IgZm9yIGFzdGVyaWsgaW4gcmVxdWlyZWQgZmllbGQqL1xyXG4uYXN0ZXJpa3tcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZXgtZm9ybXtcclxuICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5wYWRkaW5nLXJpZ2h0LXplcm97XHJcbiAgcGFkZGluZy1yaWdodDowO1xyXG59XHJcblxyXG4ucGFkZGluZy16ZXJve1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/ex-form/viewer/group/accordian/accordian.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/component/ex-form/viewer/group/accordian/accordian.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AccordianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordianComponent", function() { return AccordianComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var AccordianComponent = /** @class */ (function () {
    function AccordianComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({});
        this.step = 0;
        this.addControl = function (data) {
            lodash__WEBPACK_IMPORTED_MODULE_3___default.a.each(_this.uiSchema.steps, function (step) {
                var matchedField = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(step.fields, function (field) {
                    return field.name === data.key;
                });
                if (matchedField) {
                    var fc = _this.formGroup.controls[step.sequence - 1];
                    fc.addControl(data.key, data.value);
                    _this.formGroup.updateValueAndValidity();
                }
            });
        };
        this.formValue = function () {
            console.log(_this.formGroup.getRawValue());
        };
        this.reset = function () {
            _this.formGroup.reset();
        };
    }
    AccordianComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("UI Schema", this.uiSchema);
        var allSteps = [];
        var steps = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.range(this.uiSchema.totalSteps);
        steps.forEach(function (step) {
            allSteps[step] = _this.formBuilder.group({});
        });
        this.formGroup = this.formBuilder.group(allSteps);
    };
    AccordianComponent.prototype.ngOnChanges = function () {
        this.formGroup = this.formBuilder.group({}); // when ui or model formSchema changes re initialize form group
    };
    AccordianComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    AccordianComponent.prototype.nextStep = function () {
        this.step++;
    };
    AccordianComponent.prototype.prevStep = function () {
        this.step--;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccordianComponent.prototype, "uiSchema", void 0);
    AccordianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-accordian",
            template: __webpack_require__(/*! raw-loader!./accordian.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/viewer/group/accordian/accordian.component.html"),
            styles: [__webpack_require__(/*! ./accordian.component.css */ "./src/app/component/ex-form/viewer/group/accordian/accordian.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AccordianComponent);
    return AccordianComponent;
}());



/***/ }),

/***/ "./src/app/component/ex-form/viewer/group/step-wizard/step-form.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/component/ex-form/viewer/group/step-wizard/step-form.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n  background-color: #f8f9fa;\r\n  padding: 15px;\r\n  margin-top: 56px;\r\n\r\n}\r\n\r\n/*.mat-form-field{*/\r\n\r\n/*width: 100%;*/\r\n\r\n/*}*/\r\n\r\n/* Minimize the height of mat-field */\r\n\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.35em 0px  !important;}\r\n\r\n::ng-deep .mat-form-field-label-wrapper { top: -1.5em; }\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n  -webkit-transform: translateY(-1.1em) scale(.75);\r\n          transform: translateY(-1.1em) scale(.75);\r\n  width: 133.33333%;\r\n}\r\n\r\n.mat-form-field-wrapper{\r\n  padding: 0px;\r\n}\r\n\r\n/* Minimize the bottom margin of mat-field */\r\n\r\n.row{\r\n  margin-bottom:0px;\r\n}\r\n\r\n/* red color for asterik in required field*/\r\n\r\n.asterik{\r\n  color: red;\r\n}\r\n\r\n.ex-form{\r\n  background:#fff;\r\n  box-shadow: 0 2px 6px 4px rgba(0,0,0,.14);\r\n  border-radius: 15px;\r\n  padding: 20px;\r\n}\r\n\r\n.padding-right-zero{\r\n  padding-right:0;\r\n}\r\n\r\n.padding-zero{\r\n  padding: 0;\r\n}\r\n\r\n::ng-deep .mat-horizontal-stepper-header{\r\n  pointer-events: none !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2V4LWZvcm0vdmlld2VyL2dyb3VwL3N0ZXAtd2l6YXJkL3N0ZXAtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixnQkFBZ0I7O0FBRWxCOztBQUVBLG1CQUFtQjs7QUFDbkIsZUFBZTs7QUFDZixJQUFJOztBQUVKLHFDQUFxQzs7QUFFckMseURBQXlELCtCQUErQixDQUFDOztBQUN6RiwwQ0FBMEMsV0FBVyxFQUFFOztBQUV2RDtFQUNFLGdEQUF3QztVQUF4Qyx3Q0FBd0M7RUFDeEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLDRDQUE0Qzs7QUFDNUM7RUFDRSxpQkFBaUI7QUFDbkI7O0FBR0EsMkNBQTJDOztBQUMzQztFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFHQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSwrQkFBK0I7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZXgtZm9ybS92aWV3ZXIvZ3JvdXAvc3RlcC13aXphcmQvc3RlcC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW4tdG9wOiA1NnB4O1xyXG5cclxufVxyXG5cclxuLyoubWF0LWZvcm0tZmllbGR7Ki9cclxuLyp3aWR0aDogMTAwJTsqL1xyXG4vKn0qL1xyXG5cclxuLyogTWluaW1pemUgdGhlIGhlaWdodCBvZiBtYXQtZmllbGQgKi9cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuMzVlbSAwcHggICFpbXBvcnRhbnQ7fVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjVlbTsgfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbiAgd2lkdGg6IDEzMy4zMzMzMyU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLyogTWluaW1pemUgdGhlIGJvdHRvbSBtYXJnaW4gb2YgbWF0LWZpZWxkICovXHJcbi5yb3d7XHJcbiAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbn1cclxuXHJcblxyXG4vKiByZWQgY29sb3IgZm9yIGFzdGVyaWsgaW4gcmVxdWlyZWQgZmllbGQqL1xyXG4uYXN0ZXJpa3tcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZXgtZm9ybXtcclxuICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IDRweCByZ2JhKDAsMCwwLC4xNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLnBhZGRpbmctcmlnaHQtemVyb3tcclxuICBwYWRkaW5nLXJpZ2h0OjA7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXplcm97XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVye1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/component/ex-form/viewer/group/step-wizard/step-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/component/ex-form/viewer/group/step-wizard/step-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StepFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepFormComponent", function() { return StepFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var StepFormComponent = /** @class */ (function () {
    function StepFormComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({});
        this.addControl = function (data) {
            lodash__WEBPACK_IMPORTED_MODULE_3___default.a.each(_this.uiSchema.steps, function (step) {
                var matchedField = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(step.fields, function (field) {
                    return field.name === data.key;
                });
                if (matchedField) {
                    var fc = _this.formGroup.controls[step.sequence - 1];
                    fc.addControl(data.key, data.value);
                    _this.formGroup.updateValueAndValidity();
                }
            });
        };
        this.formValue = function () {
            console.log(_this.formGroup.getRawValue());
        };
        this.reset = function () {
            _this.formGroup.reset();
        };
    }
    StepFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var allSteps = [];
        var steps = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.range(this.uiSchema.totalSteps);
        steps.forEach(function (step) {
            allSteps[step] = _this.formBuilder.group({});
        });
        this.formGroup = this.formBuilder.group(allSteps);
    };
    StepFormComponent.prototype.ngOnChanges = function () {
        this.formGroup = this.formBuilder.group({}); // when ui or model formSchema changes re initialize form group
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StepFormComponent.prototype, "uiSchema", void 0);
    StepFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-step-form",
            template: __webpack_require__(/*! raw-loader!./step-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/viewer/group/step-wizard/step-form.component.html"),
            styles: [__webpack_require__(/*! ./step-form.component.css */ "./src/app/component/ex-form/viewer/group/step-wizard/step-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], StepFormComponent);
    return StepFormComponent;
}());



/***/ }),

/***/ "./src/app/component/ex-form/viewer/group/tabs/tab/tab.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/ex-form/viewer/group/tabs/tab/tab.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.mat-form-field{*/\r\n/*width: 100%;*/\r\n/*}*/\r\n/* Minimize the height of mat-field */\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.35em 0px  !important;}\r\n::ng-deep .mat-form-field-label-wrapper { top: -1.5em; }\r\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n  -webkit-transform: translateY(-1.1em) scale(.75);\r\n          transform: translateY(-1.1em) scale(.75);\r\n  width: 133.33333%;\r\n}\r\n.mat-form-field-wrapper{\r\n  padding: 0px;\r\n}\r\n/* Minimize the bottom margin of mat-field */\r\n.row{\r\n  margin-bottom:0px;\r\n}\r\n/* red color for asterik in required field*/\r\n.asterik{\r\n  color: red;\r\n}\r\n.ex-form{\r\n  background:#fff;\r\n  box-shadow: 0 2px 6px 4px rgba(0,0,0,.14);\r\n  border-radius: 15px;\r\n  padding: 20px;\r\n}\r\n/*margin: 15px 20%;*/\r\n.padding-right-zero{\r\n  padding-right:0;\r\n}\r\n.padding-zero{\r\n  padding: 0;\r\n}\r\n::ng-deep .mat-tab-header {\r\n  display: flex;\r\n  overflow: hidden;\r\n  position: relative;\r\n  flex-shrink: 0;\r\n  pointer-events: none;\r\n}\r\n::ng-deep .mat-tab-body-wrapper {\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: flex;\r\n  transition: height .5s cubic-bezier(.35,0,.25,1);\r\n  margin: 25px 0 0 0;\r\n}\r\n::ng-deep .mat-tab-body-content {\r\n  overflow: visible !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2V4LWZvcm0vdmlld2VyL2dyb3VwL3RhYnMvdGFiL3RhYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2YsSUFBSTtBQUVKLHFDQUFxQztBQUVyQyx5REFBeUQsK0JBQStCLENBQUM7QUFDekYsMENBQTBDLFdBQVcsRUFBRTtBQUV2RDtFQUNFLGdEQUF3QztVQUF4Qyx3Q0FBd0M7RUFDeEMsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQSw0Q0FBNEM7QUFDNUM7RUFDRSxpQkFBaUI7QUFDbkI7QUFHQSwyQ0FBMkM7QUFDM0M7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBLG9CQUFvQjtBQUdwQjtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2V4LWZvcm0vdmlld2VyL2dyb3VwL3RhYnMvdGFiL3RhYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoubWF0LWZvcm0tZmllbGR7Ki9cclxuLyp3aWR0aDogMTAwJTsqL1xyXG4vKn0qL1xyXG5cclxuLyogTWluaW1pemUgdGhlIGhlaWdodCBvZiBtYXQtZmllbGQgKi9cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuMzVlbSAwcHggICFpbXBvcnRhbnQ7fVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjVlbTsgfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbiAgd2lkdGg6IDEzMy4zMzMzMyU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLyogTWluaW1pemUgdGhlIGJvdHRvbSBtYXJnaW4gb2YgbWF0LWZpZWxkICovXHJcbi5yb3d7XHJcbiAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbn1cclxuXHJcblxyXG4vKiByZWQgY29sb3IgZm9yIGFzdGVyaWsgaW4gcmVxdWlyZWQgZmllbGQqL1xyXG4uYXN0ZXJpa3tcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZXgtZm9ybXtcclxuICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IDRweCByZ2JhKDAsMCwwLC4xNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi8qbWFyZ2luOiAxNXB4IDIwJTsqL1xyXG5cclxuXHJcbi5wYWRkaW5nLXJpZ2h0LXplcm97XHJcbiAgcGFkZGluZy1yaWdodDowO1xyXG59XHJcblxyXG4ucGFkZGluZy16ZXJve1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO1xyXG4gIG1hcmdpbjogMjVweCAwIDAgMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWJvZHktY29udGVudCB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/component/ex-form/viewer/group/tabs/tab/tab.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/ex-form/viewer/group/tabs/tab/tab.component.ts ***!
  \**************************************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var TabComponent = /** @class */ (function () {
    function TabComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({});
        this.buildStepFormGroup = function () {
            var allSteps = [];
            var steps = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.range(_this.uiSchema.totalSteps);
            steps.forEach(function (step) {
                allSteps[step] = _this.formBuilder.group({});
            });
            _this.formGroup = _this.formBuilder.group(allSteps);
        };
        this.addControl = function (data) {
            lodash__WEBPACK_IMPORTED_MODULE_3___default.a.each(_this.uiSchema.steps, function (step) {
                var matchedField = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(step.fields, function (field) {
                    return field.name === data.key;
                });
                if (matchedField) {
                    var fc = _this.formGroup.controls[step.sequence - 1];
                    fc.addControl(data.key, data.value);
                    _this.formGroup.updateValueAndValidity();
                }
            });
        };
        this.formValue = function () {
            console.log(_this.formGroup.getRawValue());
        };
        this.reset = function () {
            _this.formGroup.reset();
        };
    }
    TabComponent.prototype.ngOnInit = function () {
        this.buildStepFormGroup();
    };
    TabComponent.prototype.ngOnChanges = function () {
        this.buildStepFormGroup();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabComponent.prototype, "uiSchema", void 0);
    TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tab",
            template: __webpack_require__(/*! raw-loader!./tab.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/ex-form/viewer/group/tabs/tab/tab.component.html"),
            styles: [__webpack_require__(/*! ./tab.component.css */ "./src/app/component/ex-form/viewer/group/tabs/tab/tab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/component/json-form/json-form.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/json-form/json-form.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n    background-color: #f8f9fa;\r\n    padding: 15px;\r\n    margin-top: 56px;\r\n\r\n}\r\n\r\n.mat-form-field{\r\n      width: 100%;\r\n  }\r\n\r\n/* Minimize the height of mat-field */\r\n\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.35em 0px  !important;}\r\n\r\n::ng-deep .mat-form-field-label-wrapper { top: -1.5em; }\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n    -webkit-transform: translateY(-1.1em) scale(.75);\r\n            transform: translateY(-1.1em) scale(.75);\r\n    width: 133.33333%;\r\n}\r\n\r\n.mat-form-field-wrapper{\r\n    padding: 0px;\r\n}\r\n\r\n/* Minimize the bottom margin of mat-field */\r\n\r\n.row{\r\n    margin-bottom:0px;\r\n}\r\n\r\n/* remove spinner from number field*/\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=number] {\r\n    -moz-appearance:textfield;\r\n}\r\n\r\n/* red color for asterik in required field*/\r\n\r\n.asterik{\r\n    color: red;\r\n}\r\n\r\n.form{\r\n    background:#fff;\r\n    box-shadow: 0px 2px 6px 4px rgba(0,0,0,.14);\r\n    margin-top: 15px;\r\n    border-radius: 15px;\r\n    margin: 0% 30%;\r\n    padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2pzb24tZm9ybS9qc29uLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZ0JBQWdCOztBQUVwQjs7QUFFQTtNQUNNLFdBQVc7RUFDZjs7QUFFRixxQ0FBcUM7O0FBQ3JDLHlEQUF5RCwrQkFBK0IsQ0FBQzs7QUFDekYsMENBQTBDLFdBQVcsRUFBRTs7QUFFdkQ7SUFDSSxnREFBd0M7WUFBeEMsd0NBQXdDO0lBQ3hDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsNENBQTRDOztBQUM1QztJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQSxvQ0FBb0M7O0FBQ3BDOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBR0EsMkNBQTJDOztBQUMzQztJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZiwyQ0FBMkM7SUFDM0MsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9qc29uLWZvcm0vanNvbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xyXG5cclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4vKiBNaW5pbWl6ZSB0aGUgaGVpZ2h0IG9mIG1hdC1maWVsZCAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjM1ZW0gMHB4ICAhaW1wb3J0YW50O31cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbiAgICB3aWR0aDogMTMzLjMzMzMzJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi8qIE1pbmltaXplIHRoZSBib3R0b20gbWFyZ2luIG9mIG1hdC1maWVsZCAqL1xyXG4ucm93e1xyXG4gICAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbn1cclxuXHJcbi8qIHJlbW92ZSBzcGlubmVyIGZyb20gbnVtYmVyIGZpZWxkKi9cclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcblxyXG4vKiByZWQgY29sb3IgZm9yIGFzdGVyaWsgaW4gcmVxdWlyZWQgZmllbGQqL1xyXG4uYXN0ZXJpa3tcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5mb3Jte1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggNHB4IHJnYmEoMCwwLDAsLjE0KTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwJSAzMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/json-form/json-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/json-form/json-form.component.ts ***!
  \************************************************************/
/*! exports provided: JsonFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormComponent", function() { return JsonFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation-service.service */ "./src/app/component/json-form/validation-service.service.ts");
/* harmony import */ var _assets_schema_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/schema.json */ "./src/assets/schema.json");
var _assets_schema_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/schema.json */ "./src/assets/schema.json", 1);





var JsonFormComponent = /** @class */ (function () {
    function JsonFormComponent(validationService) {
        var _this = this;
        this.validationService = validationService;
        this.title = "JsonForm";
        this.schema = _assets_schema_json__WEBPACK_IMPORTED_MODULE_4__;
        this.login = function () {
            console.log(_this.formGroup.value);
        };
        // To Reset all Form Control
        this.reset = function () { return _this.formGroup.reset(); };
        // To enable/disable measure unit field
        this.enable = function (field) {
            _this.validationService.enableUnit(field, _this.formGroup);
        };
    }
    JsonFormComponent.prototype.ngOnInit = function () {
        this.formGroup = this.validationService.buildForm();
    };
    JsonFormComponent.prototype.getEror = function (control) {
        var controls = "controls";
        if (!this.formGroup.get(control.name)[controls].unit.disabled) {
            return this.validationService.getErrorMessage(this.formGroup.get(control.name)[controls].unit);
        }
    };
    JsonFormComponent.prototype.getError = function (control) {
        if (this.formGroup.get(control.name) instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
            var controls = "controls";
            return this.validationService.getErrorMessage(this.formGroup.get(control.name)[controls].in);
        }
        return this.validationService.getErrorMessage(this.formGroup.get(control.name));
    };
    JsonFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-json-form",
            template: __webpack_require__(/*! raw-loader!./json-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/json-form/json-form.component.html"),
            styles: [__webpack_require__(/*! ./json-form.component.css */ "./src/app/component/json-form/json-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_validation_service_service__WEBPACK_IMPORTED_MODULE_3__["ValidationServiceService"]])
    ], JsonFormComponent);
    return JsonFormComponent;
}());



/***/ }),

/***/ "./src/app/component/json-form/validation-service.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/component/json-form/validation-service.service.ts ***!
  \*******************************************************************/
/*! exports provided: ValidationServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationServiceService", function() { return ValidationServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_schema_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/schema.json */ "./src/assets/schema.json");
var _assets_schema_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/schema.json */ "./src/assets/schema.json", 1);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ValidationServiceService = /** @class */ (function () {
    function ValidationServiceService(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.schema = _assets_schema_json__WEBPACK_IMPORTED_MODULE_2__;
        this.buildForm = function () {
            var allControl = {};
            var validators = [];
            _this.schema.forEach(function (element) {
                //  Assign Validator to all form Control
                validators = [];
                if (element.required) {
                    validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
                }
                if (element.dataType === "String") {
                    validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(element.minLength));
                    validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(element.maxLength));
                    validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(element.pattern));
                }
                if ((element.dataType === "Number" || element.dataType === "Measure")) {
                    validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(element.max));
                    validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(element.min));
                }
                if (element.dataType === "Measure") {
                    validators = [];
                    var unitvalue = "";
                    if (element.units.length === 1) {
                        unitvalue = element.units[0];
                    }
                    if (element.required) {
                        validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(element.min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(element.max)];
                    }
                    allControl[element.name] = _this.formBuilder.group({
                        in: ["", validators],
                        unit: [{ value: unitvalue, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                }
                else {
                    allControl[element.name] = ["", validators];
                }
            });
            return _this.formBuilder.group(allControl);
        };
    }
    ValidationServiceService.prototype.getErrorMessage = function (control) {
        var msg = "";
        if (control.hasError("required")) {
            msg = "This Field is required";
        }
        else if (control.hasError("pattern")) {
            msg = "This field contain only character value.";
        }
        else if (control.hasError("minlength")) {
            msg = "This field require minimum " + control.errors.minlength.requiredLength + " characters";
        }
        else if (control.hasError("maxlength")) {
            msg = "This field has maximum " + control.errors.maxlength.requiredLength + " characters";
        }
        else if (control.hasError("min")) {
            msg = "This field required minimum value " + control.errors.min.min;
        }
        else if (control.hasError("max")) {
            msg = "This field has maximum value " + control.errors.max.max;
        }
        return msg;
    };
    ValidationServiceService.prototype.enableUnit = function (field, myForm) {
        if (myForm.get(field.name).value.in && (field.units.length > 1)) {
            myForm.get(field.name).controls.unit.enable();
        }
        else {
            if (field.units.length > 1) {
                myForm.get(field.name).controls.unit.reset();
            }
            myForm.get(field.name).controls.unit.disable();
        }
    };
    ValidationServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ValidationServiceService);
    return ValidationServiceService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep div.jsoneditor-menu {\r\n  width: 100%;\r\n  height: 35px;\r\n  padding: 2px;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  background-color: #3883fa;\r\n  border-bottom: 1px solid #3883fa;\r\n  display: none;\r\n}\r\n\r\nmat-card {\r\n  background: whitesmoke;\r\n  padding: 0;\r\n  border: 1px solid black;\r\n}\r\n\r\n::ng-deep div.jsoneditor {\r\n  border: none;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUztFQUNULHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBkaXYuanNvbmVkaXRvci1tZW51IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODgzZmE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzODgzZmE7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCBkaXYuanNvbmVkaXRvciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var ang_jsoneditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ang-jsoneditor */ "./node_modules/ang-jsoneditor/fesm5/ang-jsoneditor.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardService) {
        var _this = this;
        this.dashboardService = dashboardService;
        this.entity = [
            { name: "Aliquot" }, { name: "Case" }, { name: "Demographic" },
            { name: "Diagnosis" }, { name: "Experiment" }, { name: "Instrument" },
            { name: "InstrumentModel" }, { name: "Lab" }, { name: "Project" },
            { name: "Protocol" }, { name: "Sample" }
        ];
        this.formType = ["Normal", "Group"];
        this.selected = "Protocol";
        this.selectedType = "Normal";
        this.initialize = function () {
            _this.editorModelSchema = _this.dashboardService.enitityModelSchema(_this.selected);
            _this.formModelSchema = _this.dashboardService.schema.model.form;
            _this.editorUISchema = _this.dashboardService.uiSchema(_this.selectedType);
            _this.formUISchema = _this.dashboardService.schema.ui.form;
        };
        this.reinitialize = function () {
            _this.initialize();
        };
        this.uiSchemaChange = function (data) {
            _this.formUISchema = data;
        };
        this.modelSchemaChange = function (data) {
            _this.formModelSchema = data;
        };
        this.setUiSchema = function (id) {
            _this.editorUISchema = _this.dashboardService.uiSchema(id);
            _this.formUISchema = _this.dashboardService.schema.ui.form;
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.initialize();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ang_jsoneditor__WEBPACK_IMPORTED_MODULE_3__["JsonEditorComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ang_jsoneditor__WEBPACK_IMPORTED_MODULE_3__["JsonEditorComponent"])
    ], DashboardComponent.prototype, "editor", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_ui_schema_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/ui-schema.json */ "./src/assets/ui-schema.json");
var _assets_ui_schema_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/ui-schema.json */ "./src/assets/ui-schema.json", 1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        var _this = this;
        this.http = http;
        // formSchema: any;
        this.schemaUrl = "assets/schema.json";
        this.schema = {
            model: {
                form: {},
                editor: {}
            },
            ui: {
                form: {},
                editor: {}
            }
        };
        // getSchemaByHttp() {
        //   return this.http.get(this.configUrl);
        // }
        //   formModelSchema = (name) => {
        //
        //   const schema = {...this.modelSchema};
        //   const  entitySchema =  _.find(schema, (formSchema) => {
        //     if (formSchema.name === name) {
        //       return formSchema;
        //     }
        //   });
        //   if ( entitySchema.steps && entitySchema.steps !== null) {
        //     entitySchema.steps.forEach((step) => {
        //       step.refs = [...entitySchema.refs];
        //       step = this.mapsUnitToValue(step);
        //     });
        //   } else {
        //     entitySchema.properties =  this.mapsUnitToValue(entitySchema);
        //   }
        //   this.schema.model.form = {...entitySchema};
        //   return this.schema.model.form;
        // }
        this.enitityModelSchema = function (name) {
            var schema = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.modelSchema);
            var entitySchema = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(schema, function (formSchema) {
                if (formSchema.name === name) {
                    return formSchema;
                }
            });
            if (entitySchema.steps && entitySchema.steps !== null) {
                entitySchema.steps.forEach(function (step) {
                    step.refs = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](entitySchema.refs);
                    step = _this.mapsUnitToValue(step);
                });
            }
            else {
                entitySchema.properties = _this.mapsUnitToValue(entitySchema);
            }
            var modelEditor = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, entitySchema);
            _this.schema.model.form = modelEditor;
            _this.schema.model.editor = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.clone(modelEditor);
            return _this.schema.model.editor;
        };
        this.mapsUnitToValue = function (refEntitySchema) {
            refEntitySchema.properties = refEntitySchema.properties.map(function (property) {
                if (property.dataType === "Ref") {
                    refEntitySchema.refs.forEach(function (ref) {
                        if (property.ref === ref.name) {
                            Object.keys(ref).forEach(function (key) { return (ref[key] == null) && delete ref[key]; });
                            delete ref.name;
                            Object.assign(property, ref);
                        }
                    });
                    //  property.values = [...property.units];
                }
                if (property.dataType === "Measure" && property.units) {
                    property.values = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](property.units);
                    delete property.units;
                }
                return property;
            });
            return refEntitySchema.properties;
        };
        this.uiSchema = function (type) {
            var uiEditor = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(_assets_ui_schema_json__WEBPACK_IMPORTED_MODULE_2__, { type: type });
            _this.schema.ui.form = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.cloneDeep(uiEditor);
            _this.schema.ui.editor = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.cloneDeep(uiEditor);
            return _this.schema.ui.editor;
        };
        // formUISchema = (type) => {
        //   this.schema.model.form =  _.find(UISchema, {type});
        //   return {...this.schema.model.form};
        // }
        this.init = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.http.get(this.schemaUrl).toPromise()];
            });
        }); };
    }
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/entryComponent/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/entryComponent/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\r\n\r\n  width: 300px;\r\n  height: 280px;\r\n\r\n}\r\n\r\n.mat-form-field{\r\n  display: block;\r\n}\r\n\r\n.googleLogin {\r\n  color: white;\r\n  margin-left: 0;\r\n  /*text-align: center;*/\r\n}\r\n\r\n.login-actions{\r\n  margin: 0;\r\n  margin-top: 6px;\r\n  text-align: center;\r\n  padding: 0;\r\n  /*color: white;*/\r\n  /*display: flex;*/\r\n}\r\n\r\n.login-actions button{\r\n  width:100%;\r\n}\r\n\r\n.login-actions div{\r\n  padding: 0;\r\n}\r\n\r\n.login-actions div:first-child{\r\n  padding-right: 5px;\r\n}\r\n\r\n/*Minimize The Height of Mat field*/\r\n\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.35em 0px  !important;}\r\n\r\n::ng-deep .mat-form-field-label-wrapper { top: -1.5em; }\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n  -webkit-transform: translateY(-1.1em) scale(.75);\r\n          transform: translateY(-1.1em) scale(.75);\r\n  width: 133.33333%;\r\n}\r\n\r\n.mat-form-field-wrapper{\r\n  padding: 0px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnlDb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTs7QUFFZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFHQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUlBLG1DQUFtQzs7QUFFbkMseURBQXlELCtCQUErQixDQUFDOztBQUN6RiwwQ0FBMEMsV0FBVyxFQUFFOztBQUV2RDtFQUNFLGdEQUF3QztVQUF4Qyx3Q0FBd0M7RUFDeEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZW50cnlDb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG5cclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuXHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbi5nb29nbGVMb2dpbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIC8qdGV4dC1hbGlnbjogY2VudGVyOyovXHJcbn1cclxuXHJcblxyXG4ubG9naW4tYWN0aW9uc3tcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIC8qY29sb3I6IHdoaXRlOyovXHJcbiAgLypkaXNwbGF5OiBmbGV4OyovXHJcbn1cclxuXHJcbi5sb2dpbi1hY3Rpb25zIGJ1dHRvbntcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4ubG9naW4tYWN0aW9ucyBkaXZ7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmxvZ2luLWFjdGlvbnMgZGl2OmZpcnN0LWNoaWxke1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuXHJcblxyXG4vKk1pbmltaXplIFRoZSBIZWlnaHQgb2YgTWF0IGZpZWxkKi9cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuMzVlbSAwcHggICFpbXBvcnRhbnQ7fVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjVlbTsgfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbiAgd2lkdGg6IDEzMy4zMzMzMyU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/entryComponent/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/entryComponent/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/entryComponent/services/auth.service.ts");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _service_snack_bar_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/snack-bar-message.service */ "./src/app/service/snack-bar-message.service.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/entryComponent/signup/signup.component.ts");









var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, dialogRef, data, formBuilder, authService, commonService, snackBarMessageService, dialog) {
        var _this = this;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.commonService = commonService;
        this.snackBarMessageService = snackBarMessageService;
        this.dialog = dialog;
        this.login = function (mode) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.commonService.showHideSpinner(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!(mode === "google")) return [3 /*break*/, 3];
                        this.commonService.showHideSpinner(false);
                        return [4 /*yield*/, this.authService.GoogleAuth()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.authService.SignIn(this.formGroup.controls["email"].value, this.formGroup.controls["password"].value)];
                    case 4:
                        _a.sent();
                        this.commonService.showHideSpinner(false);
                        _a.label = 5;
                    case 5:
                        this.snackBarMessageService.show("LogIn Successfull");
                        this.router.navigate(["dashboard"]);
                        this.dialogRef.close();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        if (error_1) {
                            if (error_1.code === "auth/user-not-found") {
                                this.openSignupDialog();
                            }
                            else {
                                this.snackBarMessageService.show(error_1.message);
                            }
                        }
                        this.commonService.showHideSpinner(false);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.getError = function (fieldName) {
            if (_this.formGroup.controls[fieldName].hasError("required")) {
                return fieldName + " is required. ";
            }
            if (_this.formGroup.controls[fieldName].hasError("email")) {
                return "Invalid Email !";
            }
            return "error";
        };
        this.openSignupDialog = function () {
            _this.dialog.closeAll();
            var dialogRef = _this.dialog.open(_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"]);
            dialogRef.afterClosed().subscribe(function (result) {
            });
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formBuilder.group({
            email: ["r@gmail.com", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ["rishi1997", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        this.authService.getUsers();
    };
    LoginComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/entryComponent/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/entryComponent/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _service_snack_bar_message_service__WEBPACK_IMPORTED_MODULE_7__["SnackBarMessageService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/entryComponent/services/auth.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/entryComponent/services/auth.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AuthService = /** @class */ (function () {
    function AuthService(afd, afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router) {
        var _this = this;
        this.afd = afd;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        // Sign up with email/password
        this.SignUp = function (email, password) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(email, password)];
                    case 1:
                        result = _a.sent();
                        this.SetUserData(result.user);
                        return [2 /*return*/, result];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, error_1];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        // && user.emailVerified !== false
        // Sign in with Google
        this.GoogleAuth = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var result, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider())];
                    case 1:
                        result = _a.sent();
                        this.SetUserData(result.user);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        window.alert(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        // read Data from Firebase database
        this.getUsers = function () {
            var userRef = _this.afd.database.ref("users/NoWPNhcWEXX5npSgSk3GdGxIdVw2");
            userRef.once("value").then(function (snapshot) {
                var username = snapshot.val() || "Anonymous";
                // console.log(username);
            });
        };
        /* Saving user uiSchemaData in localstorage when
         logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.userData = user;
                localStorage.setItem("user", JSON.stringify(_this.userData));
            }
            else {
                localStorage.setItem("user", null);
                JSON.parse(localStorage.getItem("user"));
            }
        });
    }
    // Sign in with email/password
    AuthService.prototype.SignIn = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    // Send email verfificaiton when new user sign up
    AuthService.prototype.sendVerificationMail = function () {
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(function () {
            //  this.router.navigate(["verify-email-address"]);
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        // // Reset Forggot password
        // ForgotPassword(passwordResetEmail) {
        //   return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
        //     .then(() => {
        //       window.alert("Password reset email sent, check your inbox.");
        //     }).catch((error) => {
        //       window.alert(error)
        //     })
        // }
        // Returns true when user is looged in and email is verified
        get: function () {
            var user = JSON.parse(localStorage.getItem("user"));
            return (user !== null) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    // Auth logic to run auth providers
    AuthService.prototype.AuthLogin = function (provider) {
        return this.afAuth.auth.signInWithPopup(provider);
    };
    // /* Setting up user uiSchemaData when sign in with username/password,
    //  sign up with username/password and sign in with social auth
    //  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    AuthService.prototype.SetUserData = function (user) {
        var userRef = this.afd.database.ref("users/" + user.uid);
        var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName === null ? "" : user.displayName,
            photoURL: user.photoURL === null ? "" : user.photoURL,
            emailVerified: user.emailVerified
        };
        var response = userRef.set(userData);
        // console.log(response);
        return response;
    };
    // const signUpRef  = this.afd.database.ref("signUp");
    // signUpRef.push(userInfo);
    //
    // console.log(db.ref("users/" + user.uid).set({
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     email: user.email,
    //
    // }));
    // Sign out
    AuthService.prototype.SignOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            localStorage.removeItem("user");
            _this.router.navigate([""]);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/entryComponent/signup/signup.component.css":
/*!************************************************************!*\
  !*** ./src/app/entryComponent/signup/signup.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".asterik{\r\n  color: red;\r\n}\r\n\r\n.main {\r\n\r\nwidth: 450px;\r\n  height:;\r\n}\r\n\r\n.form-group {\r\npadding: 0;\r\nmargin-bottom:3px;\r\n}\r\n\r\n.mat-form-field {\r\n  -webkit-appearance:none;\r\n     -moz-appearance:none;\r\n          appearance:none;\r\n}\r\n\r\n/*Minimize The Height of Mat field*/\r\n\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.35em 0px  !important;}\r\n\r\n::ng-deep .mat-form-field-label-wrapper { top: -1.5em; }\r\n\r\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n  -webkit-transform: translateY(-1.1em) scale(.75);\r\n          transform: translateY(-1.1em) scale(.75);\r\n  width: 133.33333%;\r\n}\r\n\r\n.mat-form-field-wrapper{\r\n  padding: 0px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnlDb21wb25lbnQvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOztBQUVBLFlBQVk7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsaUJBQWlCO0FBQ2pCOztBQUNBO0VBQ0UsdUJBQWU7S0FBZixvQkFBZTtVQUFmLGVBQWU7QUFDakI7O0FBRUEsbUNBQW1DOztBQUVuQyx5REFBeUQsK0JBQStCLENBQUM7O0FBQ3pGLDBDQUEwQyxXQUFXLEVBQUU7O0FBRXZEO0VBQ0UsZ0RBQXdDO1VBQXhDLHdDQUF3QztFQUN4QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9lbnRyeUNvbXBvbmVudC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXN0ZXJpa3tcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcblxyXG53aWR0aDogNDUwcHg7XHJcbiAgaGVpZ2h0OjtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG5wYWRkaW5nOiAwO1xyXG5tYXJnaW4tYm90dG9tOjNweDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGFwcGVhcmFuY2U6bm9uZTtcclxufVxyXG5cclxuLypNaW5pbWl6ZSBUaGUgSGVpZ2h0IG9mIE1hdCBmaWVsZCovXHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjM1ZW0gMHB4ICAhaW1wb3J0YW50O31cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xyXG4gIHdpZHRoOiAxMzMuMzMzMzMlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/entryComponent/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/entryComponent/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _component_ex_form_form_building_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/ex-form/form-building.service */ "./src/app/component/ex-form/form-building.service.ts");
/* harmony import */ var _assets_signup_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/signup.json */ "./src/assets/signup.json");
var _assets_signup_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/signup.json */ "./src/assets/signup.json", 1);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/entryComponent/services/auth.service.ts");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _service_snack_bar_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/snack-bar-message.service */ "./src/app/service/snack-bar-message.service.ts");










var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, dialogRef, data, formBuilder, formBuildingService, authService, commonService, snackBarMessageService) {
        var _this = this;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.formBuildingService = formBuildingService;
        this.authService = authService;
        this.commonService = commonService;
        this.snackBarMessageService = snackBarMessageService;
        this.formGroup = this.formBuilder.group({});
        this.schema = _assets_signup_json__WEBPACK_IMPORTED_MODULE_6__;
        this.signup = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.commonService.showHideSpinner(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.authService.SignUp(this.formGroup.controls["email"].value["email"], this.formGroup.controls["password"].value["password"])];
                    case 2:
                        _a.sent();
                        // this.authService.sendVerificationMail();
                        this.commonService.showHideSpinner(false);
                        this.router.navigate(["dashboard"]);
                        this.snackBarMessageService.show("User Registered Successfully");
                        this.dialogRef.close();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1) {
                            console.log(error_1);
                            this.snackBarMessageService.show(error_1.message);
                        }
                        this.commonService.showHideSpinner(false);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getError = function (fieldName) {
            if (_this.formGroup.controls[fieldName].hasError("required")) {
                return "You must enter a value";
            }
            if (_this.formGroup.controls[fieldName].hasError("pattern") && fieldName === ("password" || false)) {
                return "This field contain only character value.";
            }
            if (_this.formGroup.controls[fieldName].hasError("pattern")) {
                return "This field contain only character value.";
            }
            if (_this.formGroup.controls[fieldName].hasError("email")) {
                return "Invalid Email !";
            }
            return "error";
        };
        this.addControl = function (data) {
            _this.formGroup.addControl(data.key, data.value);
            _this.formGroup.updateValueAndValidity();
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-signup",
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/entryComponent/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/entryComponent/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _component_ex_form_form_building_service__WEBPACK_IMPORTED_MODULE_5__["FormBuildingService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], _service_snack_bar_message_service__WEBPACK_IMPORTED_MODULE_9__["SnackBarMessageService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/guard/authentication.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/guard/authentication.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entryComponent_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entryComponent/services/auth.service */ "./src/app/entryComponent/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _entryComponent_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entryComponent/login/login.component */ "./src/app/entryComponent/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/dashboard.service */ "./src/app/dashboard/dashboard.service.ts");







var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(authService, router, dialog, dashboardService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.dashboardService = dashboardService;
        this.init = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.dashboardService;
                        return [4 /*yield*/, this.dashboardService.init()];
                    case 1:
                        _a.modelSchema = _b.sent();
                        return [2 /*return*/, true];
                }
            });
        }); };
    }
    AuthenticationGuard.prototype.canActivate = function (next, state) {
        if (!this.authService.isLoggedIn) {
            var dialogRef = this.dialog.open(_entryComponent_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]);
            dialogRef.afterClosed().subscribe(function (result) {
            });
            return false;
        }
        return this.init();
    };
    AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_entryComponent_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/header/tool-bar/tool-bar.component.css":
/*!********************************************************!*\
  !*** ./src/app/header/tool-bar/tool-bar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox.\r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL3Rvb2wtYmFyL3Rvb2wtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTttREFDaUQ7RUFDakQsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci90b29sLWJhci90b29sLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cclxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/tool-bar/tool-bar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/header/tool-bar/tool-bar.component.ts ***!
  \*******************************************************/
/*! exports provided: ToolBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarComponent", function() { return ToolBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _entryComponent_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entryComponent/login/login.component */ "./src/app/entryComponent/login/login.component.ts");
/* harmony import */ var _entryComponent_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../entryComponent/signup/signup.component */ "./src/app/entryComponent/signup/signup.component.ts");
/* harmony import */ var _entryComponent_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../entryComponent/services/auth.service */ "./src/app/entryComponent/services/auth.service.ts");






var ToolBarComponent = /** @class */ (function () {
    function ToolBarComponent(dialog, authService) {
        var _this = this;
        this.dialog = dialog;
        this.authService = authService;
        this.openLoginDialog = function () {
            var dialogRef = _this.dialog.open(_entryComponent_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]);
            dialogRef.afterClosed().subscribe(function (result) {
            });
        };
        this.openSignupDialog = function () {
            var dialogRef = _this.dialog.open(_entryComponent_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]);
            dialogRef.afterClosed().subscribe(function (result) {
            });
        };
    }
    ToolBarComponent.prototype.ngOnInit = function () {
    };
    ToolBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tool-bar",
            template: __webpack_require__(/*! raw-loader!./tool-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/tool-bar/tool-bar.component.html"),
            styles: [__webpack_require__(/*! ./tool-bar.component.css */ "./src/app/header/tool-bar/tool-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _entryComponent_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ToolBarComponent);
    return ToolBarComponent;
}());



/***/ }),

/***/ "./src/app/json-editor/model-schema/model-schema.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/json-editor/model-schema/model-schema.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep div.jsoneditor-menu {\r\n  width: 100%;\r\n  height: 35px;\r\n  padding: 2px;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  background-color: #3883fa;\r\n  border-bottom: 1px solid #3883fa;\r\n  display: none;\r\n}\r\n\r\nmat-card {\r\n  background: whitesmoke;\r\n  padding: 0;\r\n  border: 1px solid black;\r\n}\r\n\r\n::ng-deep div.jsoneditor {\r\n  border: none;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanNvbi1lZGl0b3IvbW9kZWwtc2NoZW1hL21vZGVsLXNjaGVtYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUztFQUNULHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2pzb24tZWRpdG9yL21vZGVsLXNjaGVtYS9tb2RlbC1zY2hlbWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBkaXYuanNvbmVkaXRvci1tZW51IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODgzZmE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzODgzZmE7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCBkaXYuanNvbmVkaXRvciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/json-editor/model-schema/model-schema.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/json-editor/model-schema/model-schema.component.ts ***!
  \********************************************************************/
/*! exports provided: ModelSchemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelSchemaComponent", function() { return ModelSchemaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ang_jsoneditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ang-jsoneditor */ "./node_modules/ang-jsoneditor/fesm5/ang-jsoneditor.js");



var ModelSchemaComponent = /** @class */ (function () {
    function ModelSchemaComponent() {
        this.modelSchemaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modelSchemaEditorOptions = new ang_jsoneditor__WEBPACK_IMPORTED_MODULE_2__["JsonEditorOptions"]();
        this.modelSchemaEditorOptions.mode = "code";
    }
    ModelSchemaComponent.prototype.ngOnInit = function () {
        console.log("Old model Schema", this.modelSchemaData);
    };
    ModelSchemaComponent.prototype.getData = function (event) {
        if (this.editor.isValidJson()) {
            this.modelSchemaChange.emit(this.editor.get());
            console.log("correct");
        }
        else {
            // console.log("UI Schema is incorrect");
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ang_jsoneditor__WEBPACK_IMPORTED_MODULE_2__["JsonEditorComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ang_jsoneditor__WEBPACK_IMPORTED_MODULE_2__["JsonEditorComponent"])
    ], ModelSchemaComponent.prototype, "editor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModelSchemaComponent.prototype, "modelSchemaData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModelSchemaComponent.prototype, "modelSchemaChange", void 0);
    ModelSchemaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-model-schema",
            template: __webpack_require__(/*! raw-loader!./model-schema.component.html */ "./node_modules/raw-loader/index.js!./src/app/json-editor/model-schema/model-schema.component.html"),
            styles: [__webpack_require__(/*! ./model-schema.component.css */ "./src/app/json-editor/model-schema/model-schema.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModelSchemaComponent);
    return ModelSchemaComponent;
}());



/***/ }),

/***/ "./src/app/json-editor/ui-schema/ui-schema.component.css":
/*!***************************************************************!*\
  !*** ./src/app/json-editor/ui-schema/ui-schema.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep div.jsoneditor-menu {\r\n  width: 100%;\r\n  height: 35px;\r\n  padding: 2px;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  background-color: #3883fa;\r\n  border-bottom: 1px solid #3883fa;\r\n  display: none;\r\n}\r\n\r\nmat-card {\r\n  background: whitesmoke;\r\n  padding: 0;\r\n  border: 1px solid black;\r\n}\r\n\r\n::ng-deep div.jsoneditor {\r\n  border: none;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanNvbi1lZGl0b3IvdWktc2NoZW1hL3VpLXNjaGVtYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUztFQUNULHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2pzb24tZWRpdG9yL3VpLXNjaGVtYS91aS1zY2hlbWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBkaXYuanNvbmVkaXRvci1tZW51IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODgzZmE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzODgzZmE7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCBkaXYuanNvbmVkaXRvciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/json-editor/ui-schema/ui-schema.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/json-editor/ui-schema/ui-schema.component.ts ***!
  \**************************************************************/
/*! exports provided: UiSchemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSchemaComponent", function() { return UiSchemaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ang_jsoneditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ang-jsoneditor */ "./node_modules/ang-jsoneditor/fesm5/ang-jsoneditor.js");



var UiSchemaComponent = /** @class */ (function () {
    function UiSchemaComponent() {
        this.uiSchemaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.uiSchemaEditorOptions = new ang_jsoneditor__WEBPACK_IMPORTED_MODULE_2__["JsonEditorOptions"]();
        this.uiSchemaEditorOptions.mode = "code";
    }
    UiSchemaComponent.prototype.ngOnInit = function () {
        console.log("Old UI Schema", this.uiSchemaData);
    };
    UiSchemaComponent.prototype.getData = function (event) {
        if (this.editor.isValidJson()) {
            this.uiSchemaChange.emit(this.editor.get());
        }
        else {
            console.log("UI Schema is incorrect");
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ang_jsoneditor__WEBPACK_IMPORTED_MODULE_2__["JsonEditorComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ang_jsoneditor__WEBPACK_IMPORTED_MODULE_2__["JsonEditorComponent"])
    ], UiSchemaComponent.prototype, "editor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiSchemaComponent.prototype, "uiSchemaData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiSchemaComponent.prototype, "uiSchemaChange", void 0);
    UiSchemaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-ui-schema",
            template: __webpack_require__(/*! raw-loader!./ui-schema.component.html */ "./node_modules/raw-loader/index.js!./src/app/json-editor/ui-schema/ui-schema.component.html"),
            styles: [__webpack_require__(/*! ./ui-schema.component.css */ "./src/app/json-editor/ui-schema/ui-schema.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UiSchemaComponent);
    return UiSchemaComponent;
}());



/***/ }),

/***/ "./src/app/loading-spinner/loading-spinner.component.css":
/*!***************************************************************!*\
  !*** ./src/app/loading-spinner/loading-spinner.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-wrapper {\r\n  display: flex;\r\n  /*height: 80vh;*/\r\n  /*background-color:whitesmoke;*/\r\n  z-index: 9998;\r\n  opacity: 0.5;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.spinner {\r\n  width: 50px;\r\n  height: 40px;\r\n  text-align: center;\r\n  font-size: 10px;\r\n  margin: auto;\r\n  z-index: 9999;\r\n}\r\n\r\n.spinner > div {\r\n  background-color: #003cff;\r\n  height: 100%;\r\n  width: 6px;\r\n  display: inline-block;\r\n\r\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\r\n  animation: sk-stretchdelay 1.2s infinite ease-in-out;\r\n}\r\n\r\n.spinner .rect2 {\r\n  -webkit-animation-delay: -1.1s;\r\n  animation-delay: -1.1s;\r\n}\r\n\r\n.spinner .rect3 {\r\n  -webkit-animation-delay: -1.0s;\r\n  animation-delay: -1.0s;\r\n}\r\n\r\n.spinner .rect4 {\r\n  -webkit-animation-delay: -0.9s;\r\n  animation-delay: -0.9s;\r\n}\r\n\r\n.spinner .rect5 {\r\n  -webkit-animation-delay: -0.8s;\r\n  animation-delay: -0.8s;\r\n}\r\n\r\n@-webkit-keyframes sk-stretchdelay {\r\n  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\r\n  20% { -webkit-transform: scaleY(1.0) }\r\n}\r\n\r\n@keyframes sk-stretchdelay {\r\n  0%, 40%, 100% {\r\n    transform: scaleY(0.4);\r\n    -webkit-transform: scaleY(0.4);\r\n  }  20% {\r\n       transform: scaleY(1.0);\r\n       -webkit-transform: scaleY(1.0);\r\n     }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCOztFQUVyQiw0REFBNEQ7RUFDNUQsb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQiwrQkFBK0I7RUFDL0MsTUFBTSwrQkFBK0I7QUFDdkM7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0Qiw4QkFBOEI7RUFDaEMsR0FBRztPQUNFLHNCQUFzQjtPQUN0Qiw4QkFBOEI7S0FDaEM7QUFDTCIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLypoZWlnaHQ6IDgwdmg7Ki9cclxuICAvKmJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTsqL1xyXG4gIHotaW5kZXg6IDk5OTg7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuLnNwaW5uZXIgPiBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDNjZmY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbjogc2stc3RyZXRjaGRlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBzay1zdHJldGNoZGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNwaW5uZXIgLnJlY3QyIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcclxufVxyXG5cclxuLnNwaW5uZXIgLnJlY3QzIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxufVxyXG5cclxuLnNwaW5uZXIgLnJlY3Q0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxufVxyXG5cclxuLnNwaW5uZXIgLnJlY3Q1IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXN0cmV0Y2hkZWxheSB7XHJcbiAgMCUsIDQwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KSB9XHJcbiAgMjAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxLjApIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1zdHJldGNoZGVsYXkge1xyXG4gIDAlLCA0MCUsIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICB9ICAyMCUge1xyXG4gICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMS4wKTtcclxuICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMS4wKTtcclxuICAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/loading-spinner/loading-spinner.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/loading-spinner/loading-spinner.component.ts ***!
  \**************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadingSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-loading-spinner",
            template: __webpack_require__(/*! raw-loader!./loading-spinner.component.html */ "./node_modules/raw-loader/index.js!./src/app/loading-spinner/loading-spinner.component.html"),
            styles: [__webpack_require__(/*! ./loading-spinner.component.css */ "./src/app/loading-spinner/loading-spinner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/service/common.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/common.service.ts ***!
  \*******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonService = /** @class */ (function () {
    function CommonService() {
        this.isSpinnerVisible = true;
        this.showHideSpinner = function (show) {
            // this.isSpinnerVisible = show;
            if (show) {
                jQuery("#loaderModal")
                    .modal({ backdrop: "static", keyboard: false })
                    .modal("show");
            }
            else {
                setTimeout(function () {
                    jQuery("#loaderModal").modal("hide");
                }, 1000);
            }
        };
    }
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/service/snack-bar-message.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/snack-bar-message.service.ts ***!
  \******************************************************/
/*! exports provided: SnackBarMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarMessageService", function() { return SnackBarMessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var SnackBarMessageService = /** @class */ (function () {
    function SnackBarMessageService(snackBar) {
        var _this = this;
        this.snackBar = snackBar;
        this.config = { duration: 2000 };
        this.show = function (message, action) {
            _this.snackBar.open(message, action, _this.config);
        };
    }
    SnackBarMessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], SnackBarMessageService);
    return SnackBarMessageService;
}());



/***/ }),

/***/ "./src/assets/schema.json":
/*!********************************!*\
  !*** ./src/assets/schema.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, default */
/***/ (function(module) {

module.exports = [{"name":"Instrument","properties":[{"dataType":"String","name":"name","alias":"Name","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"lab","alias":"Program","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"hplc","alias":"HPLC","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"serialNumber","alias":"Serial number","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":true,"sequence":null,"isArray":false},{"dataType":"String","name":"peripherals","alias":"Peripherals","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"instrumentModel","alias":"Instrument model","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"vendor","alias":"Vendor","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"technologyType","alias":"Technology type","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false}],"refs":null,"primaryKey":null,"foreignKeys":[{"sourceField":"lab","targetField":"name","targetEntity":"Lab"}]},{"name":"Project","properties":[{"dataType":"String","name":"name","alias":"Project name","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":true,"sequence":null,"isArray":false},{"dataType":"String","name":"description","alias":"Description","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":65000,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"areaOfResearch","alias":"Area of research","required":true,"array":false,"delimiter":null,"values":["Proteomics"],"unique":null,"dynamic":false,"sequence":null,"isArray":false},{"dataType":"Boolean","name":"blogEnabled","alias":"Blog enabled","required":false,"array":false,"delimiter":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Boolean","name":"withEmailNotification","alias":"With email notification","required":false,"array":false,"delimiter":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"lab","alias":"Program","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false}],"refs":null,"primaryKey":"name","foreignKeys":[{"sourceField":"lab","targetField":"name","targetEntity":"Lab"}]},{"name":"Case","properties":[{"dataType":"String","name":"caseSubmitterID","alias":"Case submitter ID","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":1,"isArray":false},{"dataType":"String","name":"projectSubmitterID","alias":"Project submitter ID","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":2,"isArray":false},{"dataType":"String","name":"taxon","alias":"Taxon","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":3,"isArray":false},{"dataType":"String","name":"pool","alias":"Pool","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":5,"pattern":null,"unique":null,"sequence":4,"isArray":false},{"dataType":"String","name":"status","alias":"Status","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":20,"pattern":null,"unique":null,"sequence":5,"isArray":false},{"dataType":"String","name":"gdcCaseId","alias":"GDC case ID","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":6,"isArray":false},{"dataType":"String","name":"uuid","alias":"UUID","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"projectCode","alias":"Project code","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":7,"isArray":false},{"dataType":"String","name":"tissueSourceSiteCode","alias":"Tissue source site code","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":8,"isArray":false},{"dataType":"Number","name":"daysToLostToFollowup","alias":"Days to lost to follow up","required":false,"array":false,"delimiter":null,"numberType":"Integer","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":9,"isArray":false},{"dataType":"String","name":"diseaseType","alias":"Disease type","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":10,"isArray":false},{"dataType":"Enumeration","name":"indexDate","alias":"Index date","required":false,"array":false,"delimiter":null,"values":["Diagnosis","First Patient Visit","Study Enrollment"],"unique":null,"dynamic":false,"sequence":11,"isArray":false},{"dataType":"String","name":"lostToFollowup","alias":"Lost to follow up","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":12,"isArray":false},{"dataType":"String","name":"primarySite","alias":"Primary site","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":13,"isArray":false}],"refs":null,"primaryKey":"caseSubmitterID","foreignKeys":[{"sourceField":"projectSubmitterID","targetField":"name","targetEntity":"Project"}]},{"name":"Sample","properties":[{"dataType":"String","name":"sampleSubmitterID","alias":"Sample submitter ID","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":1,"isArray":false},{"dataType":"String","name":"caseSubmitterID","alias":"Case submitter ID","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":2,"isArray":false},{"dataType":"String","name":"projectSubmitterID","alias":"Project submitter ID","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":3,"isArray":false},{"dataType":"String","name":"uuid","alias":"UUID","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":36,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"sampleType","alias":"Sample type","required":true,"array":false,"delimiter":null,"values":["Diagnosis","First Patient Visit","Study Enrollment","Additional Metastatic","Additional - NEW PRIMARY","Blood Derived Cancer - Bone Marrow, Post-treatment","Blood Derived Cancer - Peripheral Blood, Post-treatment","Blood Derived Normal","Bone Marrow Normal","Buccal Cell Normal","Cell Line Derived Xenograft Tissue","Cell LINES","Control Analyte","DNA","EBV Immortalized Normal","FFPE Recurrent","FFPE Scrolls","Fibroblasts FROM Bone Marrow Normal","GenomePlex (Rubicon) Amplified DNA","Granulocytes","Human Tumor Original Cells","Lymphoid Normal","Metastatic","Mononuclear Cells FROM Bone Marrow Normal","PRIMARY Blood Derived Cancer - Peripheral Blood","Recurrent Blood Derived Cancer - Peripheral Blood","Pleural Effusion","PRIMARY Blood Derived Cancer - Bone Marrow","PRIMARY Tumor","PRIMARY Xenograft Tissue","Post neo-adjuvant therapy","Recurrent Blood Derived Cancer - Bone Marrow","Recurrent Tumor","Repli-G (Qiagen) DNA","Repli-G X (Qiagen) DNA","RNA","Slides","Solid Tissue Normal","Total RNA","Tumor Adjacen","Normal"],"unique":null,"dynamic":false,"sequence":4,"isArray":false},{"dataType":"String","name":"pool","alias":"Pool","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":5,"pattern":null,"unique":null,"sequence":5,"isArray":false},{"dataType":"String","name":"status","alias":"Status","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":20,"pattern":null,"unique":null,"sequence":6,"isArray":false},{"dataType":"Enumeration","name":"sampleTypeID","alias":"Sample type ID","required":false,"array":false,"delimiter":null,"values":["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","20","40","41","42","50","60","61","99"],"unique":null,"dynamic":false,"sequence":7,"isArray":false},{"dataType":"String","name":"gdcSampleID","alias":"GDC sample ID","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":8,"isArray":false},{"dataType":"String","name":"gdcProjectID","alias":"GDC project ID","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":9,"isArray":false},{"dataType":"Enumeration","name":"biospecimenAnatomicSite","alias":"Biospecimen anatomic site","required":false,"array":false,"delimiter":null,"values":["Abdomen","Abdominal Wall","Acetabulum","Adenoid","Adipose","Adrenal","Alveolar Ridge","Amniotic Fluid","Ampulla Of Vater","Anal Sphincter","Ankle","Anorectum","Antecubital Fossa","Antrum","Anus","Aorta","Aortic Body","Appendix","Aqueous Fluid","Arm","Artery","Ascending Colon","Ascending Colon Hepatic Flexure","Auditory Canal","Autonomic Nervous System","Axilla","Back","Bile Duct","Bladder","Blood","Blood Vessel","Bone","Bone Marrow","Bowel","Brain","Brain Stem","Breast","Broad Ligament","Bronchiole","Bronchus","Brow","Buccal Cavity","Buccal Mucosa","Buttock","Calf","Capillary","Cardia","Carina","Carotid Artery","Carotid Body","Cartilage","Cecum","Cell-Line","Central Nervous System","Cerebellum","Cerebral Cortex","Cerebrospinal Fluid","Cerebrum","Cervical Spine","Cervix","Chest","Chest Wall","Chin","Clavicle","Clitoris","Colon","Colon - Mucosa Only","Common Duct","Conjunctiva","Connective Tissue","Dermal","Descending Colon","Diaphragm","Duodenum","Ear","Ear Canal","Ear, Pinna"],"unique":null,"dynamic":false,"sequence":10,"isArray":false},{"dataType":"Enumeration","name":"composition","alias":"Composition","required":false,"array":false,"delimiter":null,"values":["Buccal Cells","Buffy Coat","Bone Marrow Components","Control Analyte","Cell","Derived Cell Line","EBV Immortalized","Fibroblasts FROM Bone Marrow Normal","Granulocytes","Human Original Cells","Lymphocytes","Mononuclear Cells FROM Bone Marrow Normal","Peripheral Blood Components NOS","Pleural Effusion","Plasma","Peripheral Whole Blood","Serum","Sputum","Solid Tissue","Whole Bone Marrow","UNKNOWN","NOT Reported","NOT Allowed TO Collect"],"unique":null,"dynamic":false,"sequence":11,"isArray":false},{"dataType":"Number","name":"currentWeight","alias":"Current weight","required":false,"array":false,"delimiter":null,"numberType":"Double","min":122,"max":null,"multipleOf":null,"unique":null,"sequence":12,"isArray":false},{"dataType":"Number","name":"daysToCollection","alias":"Days to collection","required":false,"array":false,"delimiter":null,"numberType":"Integer","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":13,"isArray":false},{"dataType":"Number","name":"daysToSampleProcurement","alias":"Days to sample procurement","required":false,"array":false,"delimiter":null,"numberType":"Integer","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":14,"isArray":false},{"dataType":"Enumeration","name":"diagnosisPathologicallyConfirmed","alias":"Diagnosis pathologically confirmed","required":false,"array":false,"delimiter":null,"values":["Yes","No","UNKNONW","NOT Reported","NOT Allowed TO Collect"],"unique":null,"dynamic":false,"sequence":15,"isArray":false},{"dataType":"String","name":"freezingMethod","alias":"Freezing method","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":16,"isArray":false},{"dataType":"Number","name":"initialWeight","alias":"Initial weight","required":false,"array":false,"delimiter":null,"numberType":"Double","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":17,"isArray":false},{"dataType":"String","name":"intermediateDimension","alias":"Intermediate dimension","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":18,"isArray":false},{"dataType":"Number","name":"isFFPE","alias":"Is FFPE","required":false,"array":false,"delimiter":null,"numberType":"Integer","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":19,"isArray":false},{"dataType":"String","name":"longestDimension","alias":"Longest dimension","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":20,"isArray":false},{"dataType":"Enumeration","name":"methodOfSampleProcurement","alias":"Method of sample procurement","required":false,"array":false,"delimiter":null,"values":["Abdomino-perineal Resection of Rectum","Anterior Resection of Rectum","Aspirate","Biopsy","Blood Draw","Bone Marrow Aspirate","Core Biopsy","Cystectomy","Endo Rectal Tumor Resection","Endoscopic Biopsy","Endoscopic Mucosal Resection (EMR)","Enucleation","Excisional Biopsy","Fine Needle Aspiration","FULL Hysterectomy","Gross Total Resection","Hand Assisted Laparoscopic Radical Nephrectomy","Hysterectomy NOS","Incisional Biopsy","Indeterminant","Laparoscopic Biopsy","Laparoscopic PARTIAL Nephrectomy","Laparoscopic Radical Nephrectomy","Laparoscopic Radical Prostatectomy WITH Robotics","Laparoscopic Radical Prostatectomy without Robotics","LEFT Hemicolectomy","Lobectomy","LOCAL Resection (Exoresection; wall resection)","Lumpectomy","Modified Radical Mastectomy","Needle Biopsy","OPEN Craniotomy","OPEN PARTIAL Nephrectomy","OPEN Radical Nephrectomy","OPEN Radical Prostatectomy","Orchiectomy","Other","Other Surgical Resection"],"unique":null,"dynamic":false,"sequence":21,"isArray":false},{"dataType":"String","name":"octEmbedded","alias":"OCT embedded","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":22,"isArray":false},{"dataType":"String","name":"pathologyReportUUID","alias":"Pathology report UUID","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":23,"isArray":false},{"dataType":"Enumeration","name":"preservationMethod","alias":"Preservation method","required":false,"array":false,"delimiter":null,"values":["Cryopreserved","FFPE","Fresh","OCT","Snap Frozen","Frozen","UNKNOWN","NOT Reported","NOT Allowed TO Collect"],"unique":null,"dynamic":false,"sequence":24,"isArray":false},{"dataType":"String","name":"shortestDimension","alias":"Shortest dimension","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":25,"isArray":false},{"dataType":"String","name":"timeBetweenBlampingAndFreezing","alias":"Time between clamping and freezing","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":26,"isArray":false},{"dataType":"String","name":"timeBetweenExcisionAndFreezing","alias":"Time between excision and freezing","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":27,"isArray":false},{"dataType":"Enumeration","name":"tissueType","alias":"Tissue type","required":false,"array":false,"delimiter":null,"values":["Tumor","Normal","Abnormal","Peritumoral","UNKNOWN","NOT Reported","NOT Allowed TO Collect"],"unique":null,"dynamic":false,"sequence":28,"isArray":false},{"dataType":"Enumeration","name":"tumorCode","alias":"Tumor code","required":false,"array":false,"delimiter":null,"values":["Non cancerous tissue","Diffuse Large B-Cell Lymphoma (DLBCL)","Lung Cancer (ALL TYPES)","Cervical Cancer (ALL TYPES)","Anal Cancer (ALL TYPES)","Acute Leukemia of Ambiguous Lineage (ALAL)","Acute lymphoblastic leukemia (ALL)","Acute myeloid leukemia (AML)","Induction Failure AML (AML-IF)","Neuroblastoma (NBL)","Osteosarcoma (OS)","Ewing sarcoma","Wilms tumor (WT)","Clear cell sarcoma of the kidney (CCSK)","Rhabdoid tumor (kidney) (RT)","CNS, ependymoma","CNS, glioblastoma (GBM)","CNS, rhabdoid tumor","CNS, low grade glioma (LGG)","CNS, medulloblastoma","CNS, other","NHL, anaplastic large cell lymphoma","NHL, Burkitt lymphoma (BL)","Rhabdomyosarcoma","Soft tissue sarcoma, non-rhabdomyosarcoma"],"unique":null,"dynamic":false,"sequence":29,"isArray":false},{"dataType":"String","name":"tumorCodeId","alias":"Tumor code ID","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":10,"pattern":null,"unique":null,"sequence":30,"isArray":false},{"dataType":"Enumeration","name":"tumorDescriptor","alias":"Tumor descriptor","required":false,"array":false,"delimiter":null,"values":["Metastatic","NOT Applicable","PRIMARY","Recurrence","Xenograft","NOS","UNKNOWN","NOT Reported","NOT Allowed TO Collect"],"unique":null,"dynamic":false,"sequence":31,"isArray":false}],"refs":null,"primaryKey":"sampleSubmitterID","foreignKeys":[{"sourceField":"caseSubmitterID","targetField":"caseSubmitterID","targetEntity":"Case"},{"sourceField":"projectSubmitterID","targetField":"name","targetEntity":"Project"}]},{"name":"Aliquot","properties":[{"dataType":"String","name":"aliquotSubmitterID","alias":"Aliquot submitter ID","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":1,"isArray":false},{"dataType":"String","name":"sampleSubmitterID","alias":"Sample submitter ID","required":true,"array":false,"delimiter":null,"minLength":12,"maxLength":50,"pattern":null,"unique":null,"sequence":2,"isArray":false},{"dataType":"String","name":"projectSubmitterID","alias":"Project Submitter ID","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":3,"isArray":false},{"dataType":"Enumeration","name":"analyteType","alias":"Analyte type","required":false,"array":false,"delimiter":null,"values":["DNA","EBV Immortalized Normal","FFPE DNA","FFPE RNA","GenomePlex (Rubicon) Amplified DNA","Repli-G (Qiagen) DNA","Repli-G Pooled (Qiagen) DNA","Repli-G X (Qiagen) DNA","RNA","Protein"],"unique":null,"dynamic":false,"sequence":4,"isArray":false},{"dataType":"String","name":"status","alias":"Status","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":20,"pattern":null,"unique":null,"sequence":5,"isArray":false},{"dataType":"Number","name":"aliquotQuantity","alias":"Aliquot quantity","required":false,"array":false,"delimiter":null,"numberType":"Double","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":6,"isArray":false},{"dataType":"Number","name":"aliquotVolume","alias":"Aliquot volume","required":false,"array":false,"delimiter":null,"numberType":"Double","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":7,"isArray":false},{"dataType":"Number","name":"amount","alias":"Amount","required":false,"array":false,"delimiter":null,"numberType":"Double","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":8,"isArray":false},{"dataType":"Enumeration","name":"analyteTypeID","alias":"Analyte type ID","required":false,"array":false,"delimiter":null,"values":["D","E","G","H","R","S","T","W","X"],"unique":null,"dynamic":false,"sequence":9,"isArray":false},{"dataType":"Number","name":"concentration","alias":"Concentration","required":false,"array":false,"delimiter":null,"numberType":"Double","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":10,"isArray":false},{"dataType":"String","name":"pool","alias":"Pool","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":5,"pattern":null,"unique":null,"sequence":11,"isArray":false},{"dataType":"String","name":"uuid","alias":"UUID","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":36,"pattern":null,"unique":null,"sequence":null,"isArray":false}],"refs":null,"primaryKey":"aliquotSubmitterID","foreignKeys":[{"sourceField":"sampleSubmitterID","targetField":"sampleSubmitterID","targetEntity":"Sample"},{"sourceField":"projectSubmitterID","targetField":"name","targetEntity":"Project"}]},{"name":"Diagnosis","properties":[{"dataType":"String","name":"diagnosisSubmitterID","alias":"Diagnosis submitter ID","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":1,"isArray":false},{"dataType":"String","name":"caseSubmitterID","alias":"Case submitter ID","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":2,"isArray":false},{"dataType":"String","name":"projectSubmitterID","alias":"Project submitter ID","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":3,"isArray":false},{"dataType":"String","name":"ageAtDiagnosis","alias":"Age at diagnosis","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":10,"pattern":null,"unique":null,"sequence":4,"isArray":false},{"dataType":"String","name":"classificationOfTumor","alias":"Classification of tumor","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":5,"isArray":false},{"dataType":"String","name":"daysToLastFollowUp","alias":"Days to last follow up","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":10,"pattern":null,"unique":null,"sequence":7,"isArray":false},{"dataType":"String","name":"daysToLastKnownDiseaseStatus","alias":"Days to last known disease status","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":10,"pattern":null,"unique":null,"sequence":8,"isArray":false},{"dataType":"String","name":"daysToRecurrence","alias":"Days to recurrence","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":10,"pattern":null,"unique":null,"sequence":9,"isArray":false},{"dataType":"Enumeration","name":"lastKnownDiseaseStatus","alias":"Last known disease status","required":false,"array":false,"delimiter":null,"values":["Distant met recurrence/progression","Loco-regional recurrence/progression","Biochemical evidence of disease without structural correlate","Tumor free","UNKNOWN tumor STATUS","WITH tumor","NOT reported","NOT Allowed TO Collect","N/A"],"unique":null,"dynamic":false,"sequence":10,"isArray":false},{"dataType":"String","name":"morphology","alias":"Morphology","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":11,"isArray":false},{"dataType":"String","name":"primaryDiagnosis","alias":"Primary diagnosis","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":200,"pattern":null,"unique":null,"sequence":12,"isArray":false},{"dataType":"String","name":"progressionOrRecurrence","alias":"Progression or recurrence","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":13,"isArray":false},{"dataType":"String","name":"siteOfResectionOrBiopsy","alias":"Site of resection or biopsy","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":14,"isArray":false},{"dataType":"String","name":"tissueOrOrganOfOrigin","alias":"Tissue or organ of origin","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":15,"isArray":false},{"dataType":"String","name":"tumorGrade","alias":"Tumor grade","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":16,"isArray":false},{"dataType":"String","name":"tumorStage","alias":"Tumor stage","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":17,"isArray":false},{"dataType":"String","name":"vitalStatus","alias":"Vital status","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":18,"isArray":false},{"dataType":"String","name":"tumorCellContent","alias":"Tumor cell content","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":10,"pattern":null,"unique":null,"sequence":19,"isArray":false},{"dataType":"String","name":"daysToBirth","alias":"Days to birth","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":20,"isArray":false},{"dataType":"String","name":"daysToDeath","alias":"Days to death","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":21,"isArray":false},{"dataType":"String","name":"priorMalignancy","alias":"Prior malignancy","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":22,"isArray":false},{"dataType":"String","name":"ajccClinicalM","alias":"AJCC clinical M","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":23,"isArray":false},{"dataType":"String","name":"ajccClinicalN","alias":"AJCC clinical N","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":24,"isArray":false},{"dataType":"String","name":"ajccClinicalStage","alias":"AJCC clinical stage","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":25,"isArray":false},{"dataType":"String","name":"ajccClinicalT","alias":"AJCC clinical T","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":26,"isArray":false},{"dataType":"String","name":"ajccPathologicM","alias":"AJCC pathologic M","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":27,"isArray":false},{"dataType":"String","name":"ajccPathologicN","alias":"AJCC pathologic N","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":28,"isArray":false},{"dataType":"String","name":"ajccPathologicStage","alias":"AJCC pathologic stage","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":29,"isArray":false},{"dataType":"String","name":"ajccPathologicT","alias":"AJCC pathologic T","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":30,"isArray":false},{"dataType":"String","name":"annArborBSymptoms","alias":"Ann arbor B symptoms","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":31,"isArray":false},{"dataType":"String","name":"annArborClinicalStage","alias":"Ann arbor clinical stage","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":32,"isArray":false},{"dataType":"String","name":"annArborExtranodalInvolvement","alias":"Ann arbor extranodal involvement","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":33,"isArray":false},{"dataType":"String","name":"annArborPathologicStage","alias":"Ann arbor pathologic stage","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":34,"isArray":false},{"dataType":"String","name":"bestOverallResponse","alias":"Best overall response","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":35,"isArray":false},{"dataType":"String","name":"BurkittLymphomaClinicalVariant","alias":"Burkitt lymphoma clinical variant","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":36,"isArray":false},{"dataType":"String","name":"causeOfDeath","alias":"Cause of death","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":37,"isArray":false},{"dataType":"String","name":"circumferentialResectionMargin","alias":"Circumferential resection margin","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":38,"isArray":false},{"dataType":"String","name":"colonPolypsHistory","alias":"Colon polyps history","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":39,"isArray":false},{"dataType":"String","name":"daysToBestOverallResponse","alias":"Days to best overall response","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":40,"isArray":false},{"dataType":"String","name":"daysToDiagnosis","alias":"Days to diagnosis","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":41,"isArray":false},{"dataType":"String","name":"daysToHivDiagnosis","alias":"Days to HIV diagnosis","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":42,"isArray":false},{"dataType":"String","name":"daysToNewEvent","alias":"Days to new event","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":43,"isArray":false},{"dataType":"String","name":"figoStage","alias":"Figo stage","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":44,"isArray":false},{"dataType":"String","name":"hivPositive","alias":"HIV positive","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":45,"isArray":false},{"dataType":"String","name":"hpvPositiveType","alias":"HPV positive type","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":46,"isArray":false},{"dataType":"String","name":"hpvStatus","alias":"HPV status","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":47,"isArray":false},{"dataType":"String","name":"issStage","alias":"ISS stage","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":48,"isArray":false},{"dataType":"String","name":"laterality","alias":"Laterality","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":49,"isArray":false},{"dataType":"String","name":"ldhLevelAtDiagnosis","alias":"LDH level at diagnosis","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":50,"isArray":false},{"dataType":"String","name":"ldhNormalRangeUpper","alias":"LDH normal range upper","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":51,"isArray":false},{"dataType":"String","name":"lymphNodesPositive","alias":"Lymph nodes positive","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":52,"isArray":false},{"dataType":"String","name":"lymphaticInvasionPresent","alias":"Lymphatic invasion present","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":53,"isArray":false},{"dataType":"String","name":"methodOfDiagnosis","alias":"Method of diagnosis","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":54,"isArray":false},{"dataType":"String","name":"newEventAnatomicSite","alias":"New event anatomic site","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":55,"isArray":false},{"dataType":"String","name":"newEventType","alias":"New event type","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":56,"isArray":false},{"dataType":"String","name":"overallSurvival","alias":"Overall survival","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":57,"isArray":false},{"dataType":"String","name":"PerineuralInvasionPresent","alias":"Perineural invasion present","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":58,"isArray":false},{"dataType":"String","name":"priorTreatment","alias":"Prior treatment","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":59,"isArray":false},{"dataType":"String","name":"progressionFreeSurvival","alias":"Progression free survival","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":60,"isArray":false},{"dataType":"String","name":"progressionFreeSurvivalEvent","alias":"Progression free survival event","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":61,"isArray":false},{"dataType":"String","name":"residualDisease","alias":"Residual disease","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":62,"isArray":false},{"dataType":"String","name":"vascularInvasionPresent","alias":"Vascular invasion present","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":63,"isArray":false},{"dataType":"String","name":"yearOfDiagnosis","alias":"Year of diagnosis","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":64,"isArray":false},{"dataType":"String","name":"gdcCaseID","alias":"GDC case ID","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":null,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"uuid","alias":"UUID","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":36,"pattern":null,"unique":null,"sequence":null,"isArray":false}],"refs":null,"primaryKey":"diagnosisSubmitterID","foreignKeys":[{"sourceField":"caseSubmitterID","targetField":"caseSubmitterID","targetEntity":"Case"},{"sourceField":"projectSubmitterID","targetField":"name","targetEntity":"Project"}]},{"name":"Demographic","properties":[{"dataType":"String","name":"demographicSubmitterID","alias":"Demographic submitter ID","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":1,"isArray":false},{"dataType":"String","name":"caseSubmitterID","alias":"Case submitter ID","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":2,"isArray":false},{"dataType":"String","name":"projectSubmitterID","alias":"Project submitter ID","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":3,"isArray":false},{"dataType":"String","name":"uuid","alias":"UUID","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":36,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"ethnicity","alias":"Ethnicity","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":4,"isArray":false},{"dataType":"String","name":"gender","alias":"Gender","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":5,"isArray":false},{"dataType":"String","name":"race","alias":"Race","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":6,"isArray":false},{"dataType":"String","name":"causeOfDeath","alias":"Cause of death","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":null,"sequence":7,"isArray":false},{"dataType":"Number","name":"daysToBirth","alias":"Days to birth","required":false,"array":false,"delimiter":null,"numberType":"Integer","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":8,"isArray":false},{"dataType":"Number","name":"daysToDeath","alias":"Days to death","required":false,"array":false,"delimiter":null,"numberType":"Integer","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":9,"isArray":false},{"dataType":"String","name":"vitalStatus","alias":"Vital status","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":50,"pattern":null,"unique":null,"sequence":10,"isArray":false},{"dataType":"Number","name":"yearOfBirth","alias":"Year of birth","required":false,"array":false,"delimiter":null,"numberType":"Integer","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":11,"isArray":false},{"dataType":"Number","name":"yearOfDeath","alias":"Year of death","required":false,"array":false,"delimiter":null,"numberType":"Integer","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":12,"isArray":false}],"refs":null,"primaryKey":"demographicSubmitterID","foreignKeys":[{"sourceField":"caseSubmitterID","targetField":"caseSubmitterID","targetEntity":"Case"},{"sourceField":"projectSubmitterID","targetField":"name","targetEntity":"Project"}]},{"name":"Lab","properties":[{"dataType":"String","name":"name","alias":"Program Name","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":true,"sequence":null,"isArray":false},{"dataType":"String","name":"headEmail","alias":"Email","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$","unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"institutionUrl","alias":"Program URL","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"headFirstName","alias":"First Name","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"headLastName","alias":"Last Name","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false}],"refs":null,"primaryKey":"name","foreignKeys":[]},{"name":"InstrumentModel","properties":[{"dataType":"String","name":"name","alias":"Name","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"technologyType","alias":"Technology type","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"instrumentType","alias":"Instrument type","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"vendor","alias":"Vendor","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"extensions","alias":"Extensions","required":true,"array":true,"delimiter":",","minLength":null,"maxLength":null,"pattern":null,"unique":null,"sequence":null,"isArray":true},{"dataType":"Boolean","name":"additionalFiles","alias":"Additional files","required":false,"array":false,"delimiter":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Boolean","name":"folderArchiveSupport","alias":"Folder archive support","required":false,"array":false,"delimiter":null,"unique":null,"sequence":null,"isArray":false}],"refs":null,"primaryKey":null,"foreignKeys":[]},{"name":"Protocol","properties":[{"dataType":"Email","name":"email","alias":"Email","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Password","name":"password","alias":"Password","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Ref","name":"protocolName","alias":"Protocol name","required":null,"ref":"string","unique":null,"sequence":null,"isArray":false,"delimiter":null,"array":false},{"dataType":"Ref","name":"protocolDate","alias":"Protocol date","required":null,"ref":"date","unique":null,"sequence":null,"isArray":false,"delimiter":null,"array":false},{"dataType":"String","name":"documentName","alias":"Document name","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Measure","name":"startingAmount","alias":"Starting amount","required":false,"array":false,"delimiter":null,"units":["mg","µm","µg"],"min":null,"max":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"enrichmentStrategy","alias":"Enrichment strategy","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"labelFreeQuantitation","alias":"Label free quantitation","required":true,"array":false,"delimiter":null,"values":null,"unique":null,"dynamic":true,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"labeledQuantitation","alias":"Labeled quantitation","required":true,"array":false,"delimiter":null,"values":["AminoxyTMT","DiART","DiLeu","Glyco-TMT","Hydrazide TMT","IodoTMT","IPTL","iTRAQ","iTRAQH","TMT","N/A"],"unique":null,"dynamic":false,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"isobaricLabelingReagent","alias":"Isobaric labeling reagent","required":true,"array":false,"delimiter":null,"values":["iTRAQ4","TMT10","TMT11","N/A"],"unique":null,"dynamic":false,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"digestionReagent","alias":"Digestion reagent","required":true,"array":true,"delimiter":",","values":null,"unique":null,"dynamic":true,"sequence":null,"isArray":true},{"dataType":"Enumeration","name":"alkylationReagent","alias":"Alkylation reagent","required":true,"array":true,"delimiter":",","values":["Iodoacetamide (IAA)","2-chloroacetamide (TCEP)","tris(2-carboxyethyl)phosphine"],"unique":null,"dynamic":false,"sequence":null,"isArray":true},{"dataType":"Enumeration","name":"chromatographyDimensionsCount","alias":"Chromatography dimensions count","required":true,"array":false,"delimiter":null,"values":["1","2"],"unique":null,"dynamic":false,"sequence":null,"isArray":false},{"dataType":"Number","name":"fractionsAnalyzedCount","alias":"Fractions Analyzed count","required":false,"array":false,"delimiter":null,"numberType":"Integer","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"columnType","alias":"Column type","required":false,"array":true,"delimiter":",","values":null,"unique":null,"dynamic":true,"sequence":null,"isArray":true},{"dataType":"Measure","name":"amountOnColumn","alias":"Amount on column","required":false,"array":false,"delimiter":null,"units":["µg"],"min":null,"max":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Measure","name":"columnLength","alias":"Column length","required":false,"array":false,"delimiter":null,"units":["cm"],"min":null,"max":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Ref","name":"columnInnerDiameter","alias":"Column inner diameter","required":null,"ref":"measure","unique":null,"sequence":null,"isArray":false,"delimiter":null,"array":false},{"dataType":"Measure","name":"particleSize","alias":"Particle size","required":false,"array":false,"delimiter":null,"units":["µm"],"min":null,"max":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"particleType","alias":"Particle type","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Measure","name":"gradientLength","alias":"Gradient length","required":false,"array":false,"delimiter":null,"units":["min"],"min":null,"max":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"acquisitionType","alias":"Acquisition type","required":true,"array":false,"delimiter":null,"values":["DDA","DIA"],"unique":null,"dynamic":false,"sequence":null,"isArray":false},{"dataType":"String","name":"instrumentMake","alias":"Instrument make","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"instrumentModel","alias":"Instrument model","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"dissociationType","alias":"Dissociation type","required":true,"array":false,"delimiter":null,"values":["HCD","CID","ETD","ECD"],"unique":null,"dynamic":false,"sequence":null,"isArray":false},{"dataType":"Number","name":"ms1Resolution","alias":"MS1 resolution","required":false,"array":false,"delimiter":null,"numberType":"Integer","min":10000,"max":200000,"multipleOf":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Number","name":"ms2Resolution","alias":"MS2 resolution","required":false,"array":false,"delimiter":null,"numberType":"Integer","min":10000,"max":200000,"multipleOf":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"ddaTopN","alias":"DDA topN","required":false,"array":false,"delimiter":null,"minLength":1,"maxLength":100,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"diaMultiplexing","alias":"Dia multiplexing","required":true,"array":false,"delimiter":null,"values":["Yes","No","N/A"],"unique":null,"dynamic":false,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"diaIms","alias":"Dia IMS","required":false,"array":false,"delimiter":null,"values":["Yes","No","N/A"],"unique":null,"dynamic":false,"sequence":null,"isArray":false},{"dataType":"Number","name":"normalizedCollisionEnergy","alias":"Normalized collision energy","required":false,"array":false,"delimiter":null,"numberType":"Integer","min":15,"max":35,"multipleOf":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"lab","alias":"Program","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"reporterIonMSLevel","alias":"Reporter ion MS level","required":true,"array":false,"delimiter":null,"values":["MS2","MS3","N/A"],"unique":null,"dynamic":false,"sequence":null,"isArray":false},{"dataType":"String","name":"protocolSubmitterID","alias":"Protocol submitter ID","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":100,"pattern":null,"unique":true,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"quantitationStrategy","alias":"Quantitation strategy","required":true,"array":false,"delimiter":null,"values":["Isobaric label quantitation analysis","LC-MS label-free quantitation analysis","Spectral counting analysis","MS2-based label-free quantitation"],"unique":null,"dynamic":false,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"experimentType","alias":"Experiment type","required":false,"array":false,"delimiter":null,"values":["Label Free","iTRAQ4","TMT10","TMT11"],"unique":null,"dynamic":false,"sequence":null,"isArray":false},{"dataType":"String","name":"enrichment","alias":"Enrichment","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"chromatographyType1D","alias":"1D Chromatography type","required":true,"array":false,"delimiter":null,"values":null,"unique":null,"dynamic":true,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"chromatographyType2D","alias":"2D Chromatography type","required":true,"array":false,"delimiter":null,"values":null,"unique":null,"dynamic":true,"sequence":null,"isArray":false}],"refs":[{"dataType":"String","name":"string","alias":null,"required":true,"array":false,"delimiter":null,"minLength":12,"maxLength":255,"pattern":null,"unique":true,"sequence":null,"isArray":false},{"dataType":"Number","name":"number","alias":null,"required":false,"array":false,"delimiter":null,"numberType":"Integer","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Date","name":"date","alias":null,"required":false,"array":false,"delimiter":null,"future":false,"past":false,"unique":null,"sequence":null,"isArray":false,"format":"MM/dd/yyyy"},{"dataType":"Measure","name":"measure","alias":null,"required":false,"array":false,"delimiter":null,"units":["µm"],"min":null,"max":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Enumeration","name":"enumeration","alias":null,"required":true,"array":false,"delimiter":null,"values":["Yes","No"],"unique":null,"dynamic":false,"sequence":null,"isArray":false},{"dataType":"Boolean","name":"boolean","alias":null,"required":false,"array":false,"delimiter":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Currency","name":"currency","alias":null,"required":true,"array":false,"delimiter":null,"locale":"en_US","min":null,"max":1000,"unique":null,"sequence":null,"isArray":false}],"primaryKey":"protocolName","foreignKeys":[{"sourceField":"lab","targetField":"name","targetEntity":"Lab"}]},{"name":"Experiment","properties":[{"dataType":"String","name":"info$name","alias":"Name","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":true,"sequence":null,"isArray":false},{"dataType":"String","name":"protocol","alias":"Protocol","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":null,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"info$description","alias":"Description","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":null,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Boolean","name":"is2dLc","alias":"2D/LC","required":true,"array":false,"delimiter":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"labelType","alias":"Label type","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"String","name":"groupSpecificParametersType","alias":"Group specific parameters type","required":false,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Boolean","name":"filterByPIFEnabled","alias":"Filter by PIF enabled","required":false,"array":false,"delimiter":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Number","name":"minReporterPIF","alias":"Min reporter PIF","required":true,"array":false,"delimiter":null,"numberType":"Double","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Number","name":"minBasePeakRatio","alias":"Min base peak ratio","required":true,"array":false,"delimiter":null,"numberType":"Double","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Number","name":"minReporterFraction","alias":"Min reporter fraction","required":true,"array":false,"delimiter":null,"numberType":"Double","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Number","name":"mixedSamplesCount","alias":"Mixed samples count","required":true,"array":false,"delimiter":null,"numberType":"Integer","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Number","name":"reporterMassTol","alias":"Reporter mass to l","required":true,"array":false,"delimiter":null,"numberType":"Double","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Number","name":"channelsCount","alias":"Channels count","required":false,"array":false,"delimiter":null,"numberType":"Integer","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Number","name":"analysisBounds$maxMz","alias":"Max MZ","required":false,"array":false,"delimiter":null,"numberType":"Double","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Number","name":"analysisBounds$maxRt","alias":"Max RT","required":false,"array":false,"delimiter":null,"numberType":"Double","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Number","name":"analysisBounds$minMz","alias":"Min MZ","required":false,"array":false,"delimiter":null,"numberType":"Double","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Number","name":"analysisBounds$minRt","alias":"Min RT","required":false,"array":false,"delimiter":null,"numberType":"Double","min":null,"max":null,"multipleOf":null,"unique":null,"sequence":null,"isArray":false},{"dataType":"Boolean","name":"ngsRelatedInfo$multiplexing","alias":"Multiplexing","required":true,"array":false,"delimiter":null,"unique":null,"sequence":null,"isArray":false}],"refs":null,"primaryKey":"info$name","foreignKeys":[{"sourceField":"protocol","targetField":"protocolName","targetEntity":"Protocol"}]}];

/***/ }),

/***/ "./src/assets/signup.json":
/*!********************************!*\
  !*** ./src/assets/signup.json ***!
  \********************************/
/*! exports provided: name, properties, refs, primaryKey, foreignKeys, default */
/***/ (function(module) {

module.exports = {"name":"Sign Up","properties":[{"enable":true,"dataType":"String","name":"firstName","alias":"First Name","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":null,"pattern":"^[a-zA-Z]+$","unique":null,"sequence":null,"isArray":false},{"enable":true,"dataType":"String","name":"lastName","alias":"Last Name","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":null,"pattern":"^[a-zA-Z]+$","unique":null,"sequence":null,"isArray":false},{"enable":true,"dataType":"Number","name":"mobileNo","alias":"Mobile No","required":true,"array":false,"delimiter":null,"minLength":10,"maxLength":10,"pattern":"[1-9]{1}[0-9]{9}","unique":null,"sequence":null,"isArray":false},{"enable":true,"dataType":"Email","name":"email","alias":"Email","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false},{"enable":true,"dataType":"Password","name":"password","alias":"Password","required":true,"array":false,"delimiter":null,"minLength":null,"maxLength":255,"pattern":null,"unique":null,"sequence":null,"isArray":false}],"refs":null,"primaryKey":null,"foreignKeys":[{"sourceField":"","targetField":"","targetEntity":""}]};

/***/ }),

/***/ "./src/assets/ui-schema.json":
/*!***********************************!*\
  !*** ./src/assets/ui-schema.json ***!
  \***********************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = [{"type":"Normal","fields":[{"name":"email","enable":true},{"name":"password","enable":true},{"name":"protocolName","enable":true},{"name":"documentName","enable":false},{"name":"startingAmount","enable":false},{"name":"labeledQuantitation","enable":true},{"name":"fractionsAnalyzedCount","enable":true},{"name":"columnType","enable":true}]},{"type":"Group","viewer":"Stepper Tab Accordian","totalSteps":2,"variants":"horizontal","steps":[{"sequence":1,"name":"nameOfStep1","label":"Step Label 1","description":"Little description of Step 1","enable":true,"fields":[{"name":"email","enable":true},{"name":"password","enable":true},{"name":"protocolName","enable":true},{"name":"documentName","enable":false},{"name":"startingAmount","enable":false},{"name":"labeledQuantitation","enable":true},{"name":"fractionsAnalyzedCount","enable":true},{"name":"amountOnColumn","enable":true}]},{"sequence":2,"name":"nameOfStep2","label":"Step Label 2","description":"Little description of Step 2","enable":false,"fields":[{"name":"alkylationReagent","enable":true},{"name":"amountOnColumn","enable":false},{"name":"columnLength","enable":false},{"name":"columnInnerDiameter","enable":true}]}]}];

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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAhthWRtzWHuG_C6xyKhNU3wPD_Ck9PS34",
        authDomain: "form-35b09.firebaseapp.com",
        databaseURL: "https://form-35b09.firebaseio.com",
        projectId: "form-35b09",
        storageBucket: "",
        messagingSenderId: "368882932305",
        appId: "1:368882932305:web:891e308aaacd6c73"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Rishi\projects\ex-form\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
import { __awaiter, __decorate, __metadata, __param } from 'tslib';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, Component, NgModule, Input, EventEmitter, Output, ViewChild, Inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatCardModule, MatToolbarModule, MatProgressSpinnerModule, MatGridListModule, MatStepperModule, MatSnackBar as MatSnackBar$1, MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import _ from 'lodash';
import { JsonEditorComponent, JsonEditorOptions, NgJsonEditorModule } from 'ang-jsoneditor';
import { Router, RouterModule } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog as MatDialog$1 } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { SocialLoginModule } from 'angularx-social-login';
import { AngularFireModule } from '@angular/fire';

let CommonService = class CommonService {
    constructor(http) {
        this.http = http;
        this.showHideSpinner = (show) => {
            // this.isSpinnerVisible = show;
            if (show) {
                jQuery("#loaderModal")
                    .modal({ backdrop: "static", keyboard: false })
                    .modal("show");
            }
            else {
                setTimeout(() => {
                    jQuery("#loaderModal").modal("hide");
                }, 1000);
            }
        };
        this.loadSignUpJson = () => __awaiter(this, void 0, void 0, function* () {
            this.signUpJson = yield this.http.get("./assets/signup.json").toPromise();
        });
        this.getValidationErrorMesageJson = () => __awaiter(this, void 0, void 0, function* () {
            this.errorMessageJson = yield this.http.get("./assets/validation-message.json").toPromise();
        });
    }
};
CommonService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CommonService_Factory() { return new CommonService(ɵɵinject(HttpClient)); }, token: CommonService, providedIn: "root" });
CommonService = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __metadata("design:paramtypes", [HttpClient])
], CommonService);

let AppComponent = class AppComponent {
    constructor(commonService) {
        this.commonService = commonService;
    }
    ngOnInit() {
        this.commonService.loadSignUpJson();
        this.commonService.getValidationErrorMesageJson();
    }
};
AppComponent = __decorate([
    Component({
        selector: "app-root",
        template: "<!--<nav class=\"navbar fixed-top navbar-dark bg-dark\"-->\n     <!--style=\"color: white;\">-->\n\n  <!--<a class=\"navbar-brand\">Angular Form</a>-->\n\n<!--</nav>-->\n<app-tool-bar></app-tool-bar>\n\n<div style=\"margin-top: 30px;\">\n\n  <router-outlet></router-outlet>\n  <div id=\"loaderModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"loader-dialog modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\" style=\"background-color: unset; border: unset;\">\n        <div class=\"modal-body\">\n          <app-loading-spinner></app-loading-spinner>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n\n\n\n<!--<app-loading-spinner *ngIf=\"commonService.isSpinnerVisible\"></app-loading-spinner>-->\n\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [CommonService])
], AppComponent);

let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            MatIconModule,
            MatButtonModule,
            MatNativeDateModule,
            MatDatepickerModule,
            MatCheckboxModule,
            MatInputModule,
            MatFormFieldModule,
            MatOptionModule,
            MatSelectModule,
            MatCardModule,
            MatToolbarModule,
            MatProgressSpinnerModule,
            MatGridListModule,
            MatStepperModule
        ],
        exports: [
            BrowserModule,
            BrowserAnimationsModule,
            MatIconModule,
            MatButtonModule,
            MatNativeDateModule,
            MatDatepickerModule,
            MatCheckboxModule,
            MatInputModule,
            MatFormFieldModule,
            MatOptionModule,
            MatSelectModule,
            MatCardModule,
            MatToolbarModule,
            MatGridListModule,
            MatProgressSpinnerModule,
            MatStepperModule
        ]
    })
], AngularMaterialModule);

let ValidationServiceService = class ValidationServiceService {
    constructor(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.schema = this.http.get(`url: "get ../../../assets/schema.json"`);
        this.buildForm = () => {
            const allControl = {};
            let validators = [];
            this.schema.forEach((element) => {
                //  Assign Validator to all form Control
                validators = [];
                if (element.required) {
                    validators.push(Validators.required);
                }
                if (element.dataType === "String") {
                    validators.push(Validators.minLength(element.minLength));
                    validators.push(Validators.maxLength(element.maxLength));
                    validators.push(Validators.pattern(element.pattern));
                }
                if ((element.dataType === "Number" || element.dataType === "Measure")) {
                    validators.push(Validators.max(element.max));
                    validators.push(Validators.min(element.min));
                }
                if (element.dataType === "Measure") {
                    validators = [];
                    let unitvalue = "";
                    if (element.units.length === 1) {
                        unitvalue = element.units[0];
                    }
                    if (element.required) {
                        validators = [Validators.required, Validators.min(element.min), Validators.max(element.max)];
                    }
                    allControl[element.name] = this.formBuilder.group({
                        in: ["", validators],
                        unit: [{ value: unitvalue, disabled: true }, Validators.required]
                    });
                }
                else {
                    allControl[element.name] = ["", validators];
                }
            });
            return this.formBuilder.group(allControl);
        };
    }
    getErrorMessage(control) {
        let msg = "";
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
    }
    enableUnit(field, myForm) {
        if (myForm.get(field.name).value.in && (field.units.length > 1)) {
            myForm.get(field.name).controls.unit.enable();
        }
        else {
            if (field.units.length > 1) {
                myForm.get(field.name).controls.unit.reset();
            }
            myForm.get(field.name).controls.unit.disable();
        }
    }
};
ValidationServiceService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ValidationServiceService_Factory() { return new ValidationServiceService(ɵɵinject(FormBuilder), ɵɵinject(HttpClient)); }, token: ValidationServiceService, providedIn: "root" });
ValidationServiceService = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __metadata("design:paramtypes", [FormBuilder, HttpClient])
], ValidationServiceService);

let JsonFormComponent = class JsonFormComponent {
    constructor(validationService, http) {
        this.validationService = validationService;
        this.http = http;
        this.title = "JsonForm";
        this.schema = this.http.get(`url:"../../../assets/schema.json"`);
        this.login = () => {
            console.log(this.formGroup.value);
        };
        // To Reset all Form Control
        this.reset = () => this.formGroup.reset();
        // To enable/disable measure unit field
        this.enable = (field) => {
            this.validationService.enableUnit(field, this.formGroup);
        };
    }
    ngOnInit() {
        this.formGroup = this.validationService.buildForm();
    }
    getEror(control) {
        const controls = "controls";
        if (!this.formGroup.get(control.name)[controls].unit.disabled) {
            return this.validationService.getErrorMessage(this.formGroup.get(control.name)[controls].unit);
        }
    }
    getError(control) {
        if (this.formGroup.get(control.name) instanceof FormGroup) {
            const controls = "controls";
            return this.validationService.getErrorMessage(this.formGroup.get(control.name)[controls].in);
        }
        return this.validationService.getErrorMessage(this.formGroup.get(control.name));
    }
};
JsonFormComponent = __decorate([
    Component({
        selector: "app-json-form",
        template: "<div class=\"jumbotron\">\n\n      <form [formGroup]=\"formGroup\" (ngSubmit)=\"login()\" class=\"form\">\n\n\n              <h5>Create Protocol</h5>\n\n              <ng-container *ngFor=\"let property of schema;let i=index;\">\n\n                    <!--Form field for text input  -->\n                     <div class=\"form-group\" *ngIf=\"property.dataType=='String'\">\n\n                         <mat-form-field hintLabel=\"Max {{property.maxLength}} character\"\n                                         appearance=\"outline\">\n\n                                <mat-label>{{property.alias}}\n                                  <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                </mat-label>\n\n                                <input matInput #input\n                                       formControlName={{property.name}}\n                                       maxLength={{property.maxLength}}\n                                       minLength=\"{{property.minLength}}\"\n                                       placeholder={{property.alias}} type=\"text\">\n\n                                <mat-hint align=\"end\">{{input.value.length}}/{{property.maxLength}}</mat-hint>\n\n                                <!-- <mat-error *ngIf=\"property.name + '.invalid'\">{{getError(property)}}</mat-error> -->\n                                <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                         </mat-form-field>\n\n                     </div>\n\n                    <!--Form field for number input  -->\n\n                    <div class=\"form-group\" *ngIf=\"property.dataType=='Number'\" style=\"margin-bottom:0px;\">\n\n                          <mat-form-field appearance=\"outline\">\n\n                                <mat-label>{{property.alias}}\n                                    <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                </mat-label>\n\n                                <input matInput min={{property.min}}\n                                       max={{property.max}}\n                                       formControlName={{property.name}}\n                                       type={{property.dataType|lowercase}}\n                                       placeholder={{property.alias}}>\n\n                                <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                          </mat-form-field>\n\n                    </div>\n\n                    <!--Form field for enumeration with multiselect -->\n\n                    <div class=\"form-group\" *ngIf=\"property.dataType=='Enumeration'&& property.array==true\" style=\"margin-bottom:0px;\">\n\n                          <mat-form-field appearance=\"outline\">\n\n                                 <mat-label>{{property.alias}}\n                                        <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                 </mat-label>\n\n                                 <mat-select formControlName={{property.name}} multiple>\n                                        <mat-option *ngFor=\"let opt of property.values\"\n                                                    [value]=\"opt\">{{opt}}\n                                        </mat-option>\n                                 </mat-select>\n\n                                 <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                          </mat-form-field>\n\n                    </div>\n\n                    <!--Form field for text enumeration with single selection  -->\n\n                    <div class=\"form-group\" *ngIf=\"property.dataType=='Enumeration'&& property.array==false\" style=\"margin-bottom:0px;\">\n\n                                 <mat-form-field appearance=\"outline\">\n\n                                        <mat-label>{{property.alias}}\n                                                  <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                        </mat-label>\n\n                                        <mat-select formControlName={{property.name}}>\n                                                  <mat-option>Select</mat-option>\n                                                  <mat-option *ngFor=\"let opt of property.values\"\n                                                              [value]=\"opt\">{{opt}}\n                                                  </mat-option>\n                                        </mat-select>\n\n                                        <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                                 </mat-form-field>\n\n                    </div>\n\n                    <!--Form field for Measure Datatype  -->\n\n                    <div class=\"row form-group\" *ngIf=\"property.dataType=='Measure'\" [formGroupName]=\"property.name\" style=\"margin-bottom:0px;\">\n\n                          <div class=\"col-md-6\">\n\n                                   <mat-form-field appearance=\"outline\">\n\n                                           <mat-label>{{property.alias}}\n                                                      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                           </mat-label>\n\n                                           <input matInput formControlName=\"in\"\n                                                  placeholder={{property.alias}}\n                                                  type=\"number\"\n                                                  (keyup)=\"enable(property)\"\n                                                  (focus)=\"enable(property)\" >\n\n                                   <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError(property)}}</mat-error>\n\n                                   </mat-form-field>\n                          </div>\n\n                           <div class=\"col-md-6\">\n\n                                    <mat-form-field appearance=\"outline\">\n\n                                            <mat-label>Unit\n                                                   <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n                                            </mat-label>\n\n                                            <mat-select formControlName=\"unit\">\n                                                   <mat-option>Select</mat-option>\n                                                   <mat-option *ngFor=\"let opt of property.units\" [value]=\"opt\">\n                                                   {{opt}}\n                                                   </mat-option>\n                                            </mat-select>\n\n                                            <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getEror(property)}}</mat-error>\n\n                                    </mat-form-field>\n                           </div>\n                      </div>\n\n\n              </ng-container>\n\n\n              <div>\n\n                     <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n\n              </div>\n\n              <div class=\"btn btn-toolbar\">\n\n                     <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!this.formGroup.valid\">Submit</button>\n                &nbsp; &nbsp;\n                     <button type=\"reset\" class=\"btn btn-primary\">Reset</button>\n\n              </div>\n\n       </form>\n\n</div>\n\n<!--\n    <pre>\n    formGroupForm?.value|json}}\n    </pre> -->\n\n\n\n\n<!--.mat-form-field-flex > .mat-form-field-infix {-->\n<!--padding: 0.35em 0px !important;-->\n<!--}-->\n",
        styles: [".jumbotron{background-color:#f8f9fa;padding:15px;margin-top:56px}.mat-form-field{width:100%}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.asterik{color:red}.form{background:#fff;box-shadow:0 2px 6px 4px rgba(0,0,0,.14);border-radius:15px;margin:0 30%;padding:20px}"]
    }),
    __metadata("design:paramtypes", [ValidationServiceService, HttpClient])
], JsonFormComponent);

let FormComponent = class FormComponent {
    constructor() {
        this.initialize = () => {
            const uiSchema = Object.assign({}, this.uiSchema);
            if (uiSchema.type === "Normal") {
                uiSchema.fields = this.formatFields(uiSchema);
            }
            else {
                _.each(uiSchema.steps, (step) => {
                    step.fields = this.formatFields(step);
                });
            }
            this.modifiedUiSchema = uiSchema;
            this.modifiedUiSchema.name = this.modelSchema.name;
        };
        this.formatFields = (schema) => {
            return _.map(schema.fields, (field) => {
                const matchedField = _.find(this.modelSchema.properties, { name: field.name });
                if (matchedField) {
                    return Object.assign({}, field, matchedField);
                }
            });
        };
    }
    ngOnInit() {
        this.initialize();
        // console.log(this.formGroup);
    }
    ngOnChanges(changes) {
        for (const propName in changes) {
            const chng = changes[propName];
            const cur = JSON.stringify(chng.currentValue);
            const prev = JSON.stringify(chng.previousValue);
            if (cur !== prev) {
                this.initialize();
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], FormComponent.prototype, "modelSchema", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FormComponent.prototype, "uiSchema", void 0);
FormComponent = __decorate([
    Component({
        selector: "app-form",
        template: "<app-simple *ngIf=\"modifiedUiSchema.type == 'Normal' \"\n            [uiSchema]=\"modifiedUiSchema\">\n</app-simple>\n\n\n\n<!--<app-accordian *ngIf=\"modifiedUiSchema.type =='Group'\"-->\n               <!--[uiSchema]=\"modifiedUiSchema\">-->\n<!--</app-accordian>-->\n\n\n\n<!--<app-step-form *ngIf=\"modifiedUiSchema.type =='Group'\"-->\n               <!--[uiSchema]=\"modifiedUiSchema\">-->\n<!--</app-step-form>-->\n\n<app-tab *ngIf=\"modifiedUiSchema.type =='Group'\"\n         [uiSchema]=\"modifiedUiSchema\">\n</app-tab>\n",
        styles: [".jumbotron{background-color:#f8f9fa;padding:15px;margin-top:56px}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}.asterik{color:red}.ex-form{background:#fff;box-shadow:0 2px 6px 4px rgba(0,0,0,.14);border-radius:15px;padding:20px}.padding-right-zero{padding-right:0}.padding-zero{padding:0}"]
    }),
    __metadata("design:paramtypes", [])
], FormComponent);

class RequiredValidator {
    constructor() {
        this.get = () => {
            return Validators.required;
        };
    }
}

class MinLengthValidator {
    constructor() {
        this.get = (minLength) => {
            return Validators.minLength(minLength);
        };
    }
}

class MaxLengthValidator {
    constructor() {
        this.get = (maxLength) => {
            return Validators.maxLength(maxLength);
        };
    }
}

/**
 * Created by rgarg on 08-07-2019.
 */
class PatternValidator {
    constructor() {
        this.get = (pattern) => {
            return Validators.pattern(pattern);
        };
    }
}

let ValidationMessageGeneratorService = class ValidationMessageGeneratorService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.validationMessage = this.commonService.errorMessageJson;
        this.errorMessage = (formGroup, property) => {
            let msg = "Field is Invalid";
            const control = formGroup.get(property.name);
            const fieldError = this.validationMessage.fields[property.name] ? this.validationMessage.fields[property.name] : "";
            if (control.hasError("required")) {
                if (fieldError.required) {
                    msg = fieldError.required;
                }
                else {
                    msg = this.validationMessage.common.required;
                }
            }
            else if (control.hasError("pattern") && property.name === "mobileNo") {
                if (fieldError.mobile) {
                    msg = fieldError.mobile;
                }
                else {
                    msg = this.validationMessage.common.mobile;
                }
            }
            else if (control.hasError("pattern")) {
                if (fieldError.pattern) {
                    msg = fieldError.pattern;
                }
                else {
                    msg = this.validationMessage.common.pattern;
                }
            }
            else if (control.hasError("minlength")) {
                if (fieldError.minLength) {
                    msg = fieldError.minLength;
                }
                else {
                    msg = this.validationMessage.common.minLength;
                }
            }
            else if (control.hasError("maxlength")) {
                if (fieldError.maxLength) {
                    msg = fieldError.maxLength;
                }
                else {
                    msg = this.validationMessage.common.maxLength;
                }
            }
            else if (control.hasError("min")) {
                if (fieldError.min) {
                    msg = fieldError.min;
                }
                else {
                    msg = this.validationMessage.common.min;
                }
            }
            else if (control.hasError("max")) {
                if (fieldError.max) {
                    msg = fieldError.max;
                }
                else {
                    msg = this.validationMessage.common.max;
                }
            }
            else if (control.hasError("email")) {
                if (fieldError.email) {
                    msg = fieldError.email;
                }
                else {
                    msg = this.validationMessage.common.email;
                }
            }
            const { alias, min, max, minLength, maxLength, pattern } = property;
            return Mustache.render(msg, { fieldName: alias, min, max, minLength, maxLength, pattern });
        };
    }
};
ValidationMessageGeneratorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ValidationMessageGeneratorService_Factory() { return new ValidationMessageGeneratorService(ɵɵinject(HttpClient), ɵɵinject(CommonService)); }, token: ValidationMessageGeneratorService, providedIn: "root" });
ValidationMessageGeneratorService = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __metadata("design:paramtypes", [HttpClient, CommonService])
], ValidationMessageGeneratorService);

let TextFieldComponent = class TextFieldComponent {
    constructor(formBuilder, validationMessageGenerator) {
        this.formBuilder = formBuilder;
        this.validationMessageGenerator = validationMessageGenerator;
        this.addControl = new EventEmitter();
        this.addValidator = () => {
            const validators = [];
            if (this.property.required) {
                validators.push(new RequiredValidator().get());
            }
            if (this.property.minLength && this.property.minLength != null) {
                validators.push(new MinLengthValidator().get(this.property.minLength));
            }
            if (this.property.maxLength && this.property.maxLength != null) {
                validators.push(new MaxLengthValidator().get(this.property.maxLength));
            }
            if (this.property.pattern && this.property.pattern != null) {
                validators.push(new PatternValidator().get(this.property.pattern));
            }
            this.formGroup = this.formBuilder.group({
                [this.property.name]: [{
                        value: "",
                        disabled: !this.property.enable
                    }, validators]
            });
            this.formGroup.updateValueAndValidity();
            this.addControl.emit({ key: this.property.name, value: this.formGroup });
        };
        this.getError = () => {
            return this.validationMessageGenerator.errorMessage(this.formGroup, this.property);
        };
    }
    ngOnInit() {
        this.addValidator();
    }
    ngOnChanges() {
        // if (this.formGroup) {
        //   this.formGroup.updateValueAndValidity();
        // }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TextFieldComponent.prototype, "property", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TextFieldComponent.prototype, "addControl", void 0);
TextFieldComponent = __decorate([
    Component({
        selector: "app-text-field",
        template: "<div [formGroup]=\"formGroup\">\n   <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n  <input matInput #input\n         formControlName={{property.name}}\n         placeholder={{property.alias}}\n         type=\"text\"\n         [attr.maxlength] = \"property.maxLength ? null : property.maxLength\"\n         [attr.minlength] = \"property.minLength ? null : property.minLength\">\n\n    <mat-hint align=\"end\" *ngIf = \"property.maxLength != null\">{{input.value.length}}/{{property.maxLength}}</mat-hint>\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n</div>\n",
        styles: [".mat-form-field{width:100%}.asterik{color:red}"]
    }),
    __metadata("design:paramtypes", [FormBuilder, ValidationMessageGeneratorService])
], TextFieldComponent);

/**
 * Created by rgarg on 08-07-2019.
 */
class MaxValueValidator {
    constructor() {
        this.get = (maxValue) => {
            return Validators.max(maxValue);
        };
    }
}

/**
 * Created by rgarg on 08-07-2019.
 */
class MinValueValidator {
    constructor() {
        this.get = (minValue) => {
            return Validators.min(minValue);
        };
    }
}

let NumberFieldComponent = class NumberFieldComponent {
    constructor(formBuilder, validationMessageGenerator) {
        this.formBuilder = formBuilder;
        this.validationMessageGenerator = validationMessageGenerator;
        this.addControl = new EventEmitter();
        this.addValidator = () => {
            const validators = [];
            if (this.property.required) {
                validators.push(new RequiredValidator().get());
            }
            if (this.property.max && this.property.max != null) {
                validators.push(new MaxValueValidator().get(this.property.max));
            }
            if (this.property.max && this.property.min != null) {
                validators.push(new MinValueValidator().get(this.property.min));
            }
            if (this.property.pattern && this.property.pattern != null) {
                validators.push(new PatternValidator().get(this.property.pattern));
            }
            this.formGroup = this.formBuilder.group({ [this.property.name]: [{ value: "", disabled: !this.property.enable }, validators] });
            this.formGroup.updateValueAndValidity();
            this.addControl.emit({ key: this.property.name, value: this.formGroup });
        };
        this.getError = () => {
            return this.validationMessageGenerator.errorMessage(this.formGroup, this.property);
        };
    }
    ngOnInit() {
        this.addValidator();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], NumberFieldComponent.prototype, "property", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NumberFieldComponent.prototype, "addControl", void 0);
NumberFieldComponent = __decorate([
    Component({
        selector: "app-number-field",
        template: "<div [formGroup]=\"formGroup\">\n\n  <mat-form-field appearance=\"outline\">\n    <mat-label>\n      {{property.alias}}\n      <span *ngIf=\"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n      <input  matInput\n              formControlName={{property.name}}\n              type=\"number\"\n              [attr.min] = \"property.min ? null : property.min\"\n              [attr.max] = \"property.max ? null : property.max\"\n              placeholder={{property.alias}}>\n    <!--(change)=\"fieldValueChanged()\">-->\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">\n      {{getError()}}\n    </mat-error>\n\n  </mat-form-field>\n</div>\n\n<!--formControlName={{property.name}}-->\n",
        styles: [".mat-form-field{width:100%}.asterik{color:red}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}"]
    }),
    __metadata("design:paramtypes", [FormBuilder, ValidationMessageGeneratorService])
], NumberFieldComponent);

let DropdownComponent = class DropdownComponent {
    constructor(formBuilder, validationMessageGenerator) {
        this.formBuilder = formBuilder;
        this.validationMessageGenerator = validationMessageGenerator;
        this.addControl = new EventEmitter();
        this.getError = () => {
            return this.validationMessageGenerator.errorMessage(this.formGroup, this.property);
        };
    }
    ngOnInit() {
        this.addValidator();
    }
    addValidator() {
        const validators = [];
        let dropDowninitialValue = "";
        let dropwDownDisable = false;
        if (this.property.required) {
            validators.push(new RequiredValidator().get());
        }
        if (this.property.values && this.property.values.length === 1) {
            // setUnitValue.setValue(this.property.values[0]);
            dropDowninitialValue = this.property.values[0];
            dropwDownDisable = true;
        }
        else {
            dropwDownDisable = !this.property.enable;
        }
        this.formGroup = this.formBuilder.group({ [this.property.name]: [{ value: dropDowninitialValue, disabled: dropwDownDisable }, validators] });
        this.formGroup.updateValueAndValidity();
        this.addControl.emit({ key: this.property.name, value: this.formGroup });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "property", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "addControl", void 0);
DropdownComponent = __decorate([
    Component({
        selector: "app-dropdown",
        template: "<div [formGroup]=\"formGroup\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n    <mat-select formControlName={{property.name}} multiple={{property.array}}>\n      <mat-option *ngIf=\"!property.array\">Select</mat-option>\n      <mat-option *ngFor=\"let opt of property.values\" [value]=\"opt\">\n        {{opt}}\n      </mat-option>\n    </mat-select>\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n\n</div>\n",
        styles: [".mat-form-field{width:100%}.asterik{color:red}"]
    }),
    __metadata("design:paramtypes", [FormBuilder, ValidationMessageGeneratorService])
], DropdownComponent);

let MeasureComponent = class MeasureComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({});
        this.addControl = new EventEmitter();
        this.newProperty = {
            measure: {}, unit: {}
        };
        this.onMeasureChange = (measureValue) => {
            const control = this.formGroup.controls[this.newProperty.unit.name];
            const values = "values";
            if (measureValue && this.property[values].length > 1) {
                control.enable();
            }
            else {
                if (this.property[values].length > 1) {
                    control.reset();
                }
                control.disable();
            }
        };
        this.addMeasureControl = (data) => {
            this.formGroup.addControl(data.key, data.value);
            this.formGroup.updateValueAndValidity();
            this.addControl.emit({ key: this.property.name, value: this.formGroup });
        };
    }
    ngOnInit() {
        this.newProperty.measure = Object.assign({}, this.property);
        this.newProperty.measure.name += "Measure";
        this.newProperty.unit = Object.assign({}, this.property);
        this.newProperty.unit.name += "Unit";
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], MeasureComponent.prototype, "property", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MeasureComponent.prototype, "addControl", void 0);
MeasureComponent = __decorate([
    Component({
        selector: "app-measure",
        template: "<div class=\"row col-sm-12\" style=\"padding: 0;\">\n  <div class=\"col-sm-6\" [formGroup]=\"formGroup\" style=\"padding-right: 0;\">\n    <app-number-field\n      [property]=\"newProperty.measure\"\n      (addControl)= \"addMeasureControl($event)\" >\n    </app-number-field>\n  </div>\n\n  <div class=\"col-sm-6\" [formGroup]=\"formGroup\" style=\"padding-right: 0;\">\n\n    <app-dropdown\n      [property]=\"newProperty.unit\"\n      (addControl)=\"addMeasureControl($event)\" >\n    </app-dropdown>\n  </div>\n\n</div>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [FormBuilder])
], MeasureComponent);

let DashboardService = class DashboardService {
    constructor(http) {
        this.http = http;
        this.UISchema = this.http.get(`url: "../../assets/ui-schema.json"`);
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
        this.enitityModelSchema = (name) => {
            const schema = Object.assign({}, this.modelSchema);
            const entitySchema = _.find(schema, (formSchema) => {
                if (formSchema.name === name) {
                    return formSchema;
                }
            });
            if (entitySchema.steps && entitySchema.steps !== null) {
                entitySchema.steps.forEach((step) => {
                    step.refs = [...entitySchema.refs];
                    step = this.mapsUnitToValue(step);
                });
            }
            else {
                entitySchema.properties = this.mapsUnitToValue(entitySchema);
            }
            const modelEditor = Object.assign({}, entitySchema);
            this.schema.model.form = modelEditor;
            this.schema.model.editor = _.clone(modelEditor);
            return this.schema.model.editor;
        };
        this.mapsUnitToValue = (refEntitySchema) => {
            refEntitySchema.properties = refEntitySchema.properties.map((property) => {
                if (property.dataType === "Ref") {
                    refEntitySchema.refs.forEach(ref => {
                        if (property.ref === ref.name) {
                            Object.keys(ref).forEach((key) => (ref[key] == null) && delete ref[key]);
                            delete ref.name;
                            Object.assign(property, ref);
                        }
                    });
                    //  property.values = [...property.units];
                }
                if (property.dataType === "Measure" && property.units) {
                    property.values = [...property.units];
                    delete property.units;
                }
                return property;
            });
            return refEntitySchema.properties;
        };
        this.uiSchema = (type) => {
            const uiEditor = _.find(this.UISchema, { type });
            this.schema.ui.form = _.cloneDeep(uiEditor);
            this.schema.ui.editor = _.cloneDeep(uiEditor);
            return this.schema.ui.editor;
        };
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            return this.http.get(this.schemaUrl).toPromise();
        });
    }
};
DashboardService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DashboardService_Factory() { return new DashboardService(ɵɵinject(HttpClient)); }, token: DashboardService, providedIn: "root" });
DashboardService = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __metadata("design:paramtypes", [HttpClient])
], DashboardService);

let DashboardComponent = class DashboardComponent {
    constructor(dashboardService) {
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
        this.initialize = () => {
            this.editorModelSchema = this.dashboardService.enitityModelSchema(this.selected);
            this.formModelSchema = this.dashboardService.schema.model.form;
            this.editorUISchema = this.dashboardService.uiSchema(this.selectedType);
            this.formUISchema = this.dashboardService.schema.ui.form;
        };
        this.reinitialize = () => {
            this.initialize();
        };
        this.uiSchemaChange = (data) => {
            this.formUISchema = data;
        };
        this.modelSchemaChange = (data) => {
            this.formModelSchema = data;
        };
        this.setUiSchema = (id) => {
            this.editorUISchema = this.dashboardService.uiSchema(id);
            this.formUISchema = this.dashboardService.schema.ui.form;
        };
    }
    ngOnInit() {
        this.initialize();
    }
};
__decorate([
    ViewChild(JsonEditorComponent, { static: false }),
    __metadata("design:type", JsonEditorComponent)
], DashboardComponent.prototype, "editor", void 0);
DashboardComponent = __decorate([
    Component({
        selector: "app-dashboard",
        template: "<div class=\"row\" style=\"margin:0;\">\n  &nbsp;&nbsp;&nbsp;&nbsp;<h4>angular-jsonschema-form</h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  <ul class=\"nav nav-pills mb-3\" role=\"tablist\">\n    <li class=\"nav-item\"\n        *ngFor=\"let type of formType\"\n        (click)=\"setUiSchema(type)\">\n      <a class=\"nav-link active\"\n         data-toggle=\"pill\"\n         [class.active]=\"type === selectedType\"\n         href=\"\">{{type}}</a>\n    </li>\n  </ul>\n\n</div>\n\n<div class=\"row\" style=\"margin:0;\">\n  <div class=\"col-sm-6\">\n    <app-ui-schema\n      [uiSchemaData]=\"editorUISchema\"\n      (uiSchemaChange)=\"uiSchemaChange($event)\">\n    </app-ui-schema>\n\n    <app-model-schema\n      [modelSchemaData]=\"editorModelSchema\"\n      (modelSchemaChange)=\"modelSchemaChange($event)\">\n    </app-model-schema>\n\n\n  </div>\n  <div class=\"col-sm-6\">\n\n\n\n      <!--<mat-form-field appearance=\"outline\">-->\n        <!--<mat-label>Entity</mat-label>-->\n        <!--<mat-select [(value)]=\"selected\" (selectionChange)=\"reinitialize()\">-->\n          <!--<mat-option *ngFor=\"let opt of entity\" [value]=\"opt.name\">-->\n            <!--{{opt.name}}-->\n          <!--</mat-option>-->\n        <!--</mat-select>-->\n      <!--</mat-form-field>-->\n\n      <app-form\n        [modelSchema]=\"formModelSchema\"\n        [uiSchema]=\"formUISchema\">\n      </app-form>\n\n\n  </div>\n</div>\n",
        styles: ["::ng-deep div.jsoneditor-menu{width:100%;height:35px;padding:2px;margin:0;box-sizing:border-box;color:#fff;background-color:#3883fa;border-bottom:1px solid #3883fa;display:none}mat-card{background:#f5f5f5;padding:0;border:1px solid #000}::ng-deep div.jsoneditor{border:none}"]
    }),
    __metadata("design:paramtypes", [DashboardService])
], DashboardComponent);

let AuthService = class AuthService {
    constructor(afd, afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router) {
        this.afd = afd;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        // Sign up with email/password
        this.SignUp = (email, password) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.afAuth.auth.createUserWithEmailAndPassword(email, password);
                this.SetUserData(result.user);
                return result;
            }
            catch (error) {
                return error;
            }
        });
        // && user.emailVerified !== false
        // Sign in with Google
        this.GoogleAuth = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
                this.SetUserData(result.user);
            }
            catch (error) {
                window.alert(error);
            }
        });
        // read Data from Firebase database
        this.getUsers = () => {
            const userRef = this.afd.database.ref("users/NoWPNhcWEXX5npSgSk3GdGxIdVw2");
            userRef.once("value").then((snapshot) => {
                const username = snapshot.val() || "Anonymous";
                // console.log(username);
            });
        };
        /* Saving user uiSchemaData in localstorage when
         logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem("user", JSON.stringify(this.userData));
            }
            else {
                localStorage.setItem("user", null);
                JSON.parse(localStorage.getItem("user"));
            }
        });
    }
    // Sign in with email/password
    SignIn(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }
    // Send email verfificaiton when new user sign up
    sendVerificationMail() {
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(() => {
            //  this.router.navigate(["verify-email-address"]);
        });
    }
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
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem("user"));
        return (user !== null) ? true : false;
    }
    // Auth logic to run auth providers
    AuthLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider);
    }
    // /* Setting up user uiSchemaData when sign in with username/password,
    //  sign up with username/password and sign in with social auth
    //  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user) {
        const userRef = this.afd.database.ref(`users/${user.uid}`);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName === null ? "" : user.displayName,
            photoURL: user.photoURL === null ? "" : user.photoURL,
            emailVerified: user.emailVerified
        };
        const response = userRef.set(userData);
        // console.log(response);
        return response;
    }
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
    SignOut() {
        return this.afAuth.auth.signOut().then(() => {
            localStorage.removeItem("user");
            this.router.navigate([""]);
        });
    }
};
AuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(ɵɵinject(AngularFireDatabase), ɵɵinject(AngularFirestore), ɵɵinject(AngularFireAuth), ɵɵinject(Router)); }, token: AuthService, providedIn: "root" });
AuthService = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __metadata("design:paramtypes", [AngularFireDatabase,
        AngularFirestore,
        AngularFireAuth,
        Router])
], AuthService);

let SnackBarMessageService = class SnackBarMessageService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.config = { duration: 2000 };
        this.show = (message, action) => {
            this.snackBar.open(message, action, this.config);
        };
    }
};
SnackBarMessageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SnackBarMessageService_Factory() { return new SnackBarMessageService(ɵɵinject(MatSnackBar)); }, token: SnackBarMessageService, providedIn: "root" });
SnackBarMessageService = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __metadata("design:paramtypes", [MatSnackBar$1])
], SnackBarMessageService);

let SignupComponent = class SignupComponent {
    constructor(router, dialogRef, data, formBuilder, http, authService, commonService, snackBarMessageService) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.http = http;
        this.authService = authService;
        this.commonService = commonService;
        this.snackBarMessageService = snackBarMessageService;
        this.formGroup = this.formBuilder.group({});
        this.schema = this.commonService.signUpJson;
        this.signup = () => __awaiter(this, void 0, void 0, function* () {
            this.commonService.showHideSpinner(true);
            try {
                yield this.authService.SignUp(this.formGroup.controls["email"].value["email"], this.formGroup.controls["password"].value["password"]);
                // this.authService.sendVerificationMail();
                this.commonService.showHideSpinner(false);
                this.router.navigate(["dashboard"]);
                this.snackBarMessageService.show("User Registered Successfully");
                this.dialogRef.close();
            }
            catch (error) {
                if (error) {
                    console.log(error);
                    this.snackBarMessageService.show(error.message);
                }
                this.commonService.showHideSpinner(false);
            }
        });
        this.getError = (fieldName) => {
            if (this.formGroup.controls[fieldName].hasError("required")) {
                return "You must enter a value";
            }
            if (this.formGroup.controls[fieldName].hasError("pattern") && fieldName === ("password" || "confirmPassword")) {
                return "This field contain only character value.";
            }
            if (this.formGroup.controls[fieldName].hasError("pattern")) {
                return "This field contain only character value.";
            }
            if (this.formGroup.controls[fieldName].hasError("email")) {
                return "Invalid Email !";
            }
            return "error";
        };
        this.addControl = (data) => {
            this.formGroup.addControl(data.key, data.value);
            this.formGroup.updateValueAndValidity();
        };
    }
    ngOnInit() {
    }
    cancel() {
        this.dialogRef.close();
    }
};
SignupComponent = __decorate([
    Component({
        selector: "app-signup",
        template: "<div class=\"main\">\n  <h2 mat-dialog-title>Sign Up</h2>\n  <mat-dialog-content>\n    <form [formGroup]=\"formGroup\" class=\"ex-form\">\n      <div>\n        <ng-container *ngFor=\"let property of schema.properties;let i=index;\">\n          <!--Form field for text input  -->\n          <div class=\"form-group\" *ngIf=\"property.dataType=='String'\">\n            <app-text-field [property]=\"property\"\n                            (addControl)= \"addControl($event)\" >\n            </app-text-field>\n          </div>\n\n          <!--Form field for number input  -->\n          <div class=\"form-group\" *ngIf=\"property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n            <app-number-field [property]=\"property\"\n                              (addControl)= \"addControl($event)\" >\n            </app-number-field>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"property.dataType=='Email'\" style=\"margin-bottom:0;\">\n\n            <app-email-field  [property]=\"property\"\n                              (addControl)= \"addControl($event)\" >\n            </app-email-field>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"property.dataType=='Password'\" style=\"margin-bottom:0;\">\n\n            <app-password-field  [property]=\"property\"\n                                 (addControl)= \"addControl($event)\" >\n            </app-password-field>\n          </div>\n\n        </ng-container>\n      </div>\n\n    </form>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-button (click)=\"signup()\" [disabled]=\"!formGroup.valid\" color=\"primary\">Sign Up</button>\n    <button mat-button (click)=\"cancel()\" color=\"primary\">Cancel</button>\n\n  </mat-dialog-actions>\n\n</div>\n",
        styles: [".asterik{color:red}.main{width:450px}.form-group{padding:0;margin-bottom:3px}.mat-form-field{-webkit-appearance:none;-moz-appearance:none;appearance:none}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}"]
    }),
    __param(2, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [Router, MatDialogRef, Object, FormBuilder, HttpClient, AuthService,
        CommonService, SnackBarMessageService])
], SignupComponent);

let LoginComponent = class LoginComponent {
    constructor(router, dialogRef, data, formBuilder, authService, commonService, snackBarMessageService, dialog) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.commonService = commonService;
        this.snackBarMessageService = snackBarMessageService;
        this.dialog = dialog;
        this.login = (mode) => __awaiter(this, void 0, void 0, function* () {
            this.commonService.showHideSpinner(true);
            try {
                if (mode === "google") {
                    this.commonService.showHideSpinner(false);
                    yield this.authService.GoogleAuth();
                }
                else {
                    yield this.authService.SignIn(this.formGroup.controls["email"].value, this.formGroup.controls["password"].value);
                    this.commonService.showHideSpinner(false);
                }
                this.snackBarMessageService.show("LogIn Successfull");
                this.router.navigate(["dashboard"]);
                this.dialogRef.close();
            }
            catch (error) {
                if (error) {
                    if (error.code === "auth/user-not-found") {
                        this.openSignupDialog();
                    }
                    else {
                        this.snackBarMessageService.show(error.message);
                    }
                }
                this.commonService.showHideSpinner(false);
            }
        });
        this.getError = (fieldName) => {
            if (this.formGroup.controls[fieldName].hasError("required")) {
                return fieldName + " is required. ";
            }
            if (this.formGroup.controls[fieldName].hasError("email")) {
                return "Invalid Email !";
            }
            return "error";
        };
        this.openSignupDialog = () => {
            this.dialog.closeAll();
            const dialogRef = this.dialog.open(SignupComponent);
            dialogRef.afterClosed().subscribe(result => {
            });
        };
    }
    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            email: ["r@gmail.com", [Validators.required, Validators.email]],
            password: ["rishi1997", [Validators.required]]
        });
        this.authService.getUsers();
    }
    cancel() {
        this.dialogRef.close();
    }
};
LoginComponent = __decorate([
    Component({
        selector: "app-login",
        template: "<div class=\"main\">\n  <h2 mat-dialog-title>Login</h2>\n\n  <mat-dialog-content>\n    <form class=\"example-form\" [formGroup]=\"formGroup\">\n\n      <div class=\"col-sm-12\" style=\"padding: 0;margin-top:7px\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n          <mat-error *ngIf=\"formGroup.controls['email'].invalid\">{{getError(\"email\")}}</mat-error>\n\n        </mat-form-field>\n\n      </div>\n      <div class=\"col-sm-12\" style=\"padding: 0;margin-top:7px\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input matInput  type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n          <mat-error *ngIf=\"formGroup.controls['password'].invalid\">{{getError(\"password\")}}</mat-error>\n\n        </mat-form-field>\n      </div>\n\n\n\n\n    </form>\n\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n\n      <div class=\"googleLogin\" style=\"width:100%\">\n        <button mat-raised-button color=\"warn\" (click)=\"login('google')\" style=\"width:100%\">\n          <span><i class=\"fab fa-google-plus-g\"></i>&nbsp;&nbsp;Log in with Google</span>\n        </button>\n\n\n\n      </div>\n\n    <div class=\"login-actions col-sm-12 row\">\n      <div class=\"col-sm-6\">\n        <button mat-raised-button color=\"primary\" (click)=\"login('email')\" [disabled]=\"this.formGroup.invalid\">Login</button>\n\n      </div>\n      <div class=\"col-sm-6\">\n        <button mat-raised-button (click)=\"cancel()\">Cancel</button>\n\n      </div>\n\n    </div>\n\n    <!--<button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">-->\n      <!--<i class=\"fab fa-google-plus-g\"></i>-->\n      <!--Log in with Google-->\n    <!--</button>-->\n  </mat-dialog-actions>\n\n</div>\n",
        styles: [".main{width:300px;height:280px}.mat-form-field{display:block}.googleLogin{color:#fff;margin-left:0}.login-actions{margin:6px 0 0;text-align:center;padding:0}.login-actions button{width:100%}.login-actions div{padding:0}.login-actions div:first-child{padding-right:5px}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}"]
    }),
    __param(2, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [Router, MatDialogRef, Object, FormBuilder, AuthService, CommonService,
        SnackBarMessageService, MatDialog])
], LoginComponent);

let AuthenticationGuard = class AuthenticationGuard {
    constructor(authService, router, dialog, dashboardService) {
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.dashboardService = dashboardService;
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            this.dashboardService.modelSchema = yield this.dashboardService.init();
            return true;
        });
    }
    canActivate(next, state) {
        if (!this.authService.isLoggedIn) {
            const dialogRef = this.dialog.open(LoginComponent);
            dialogRef.afterClosed().subscribe(result => {
            });
            return false;
        }
        return this.init();
    }
};
AuthenticationGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthenticationGuard_Factory() { return new AuthenticationGuard(ɵɵinject(AuthService), ɵɵinject(Router), ɵɵinject(MatDialog$1), ɵɵinject(DashboardService)); }, token: AuthenticationGuard, providedIn: "root" });
AuthenticationGuard = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __metadata("design:paramtypes", [AuthService, Router, MatDialog,
        DashboardService])
], AuthenticationGuard);

const routes = [
    { path: "dashboard", component: DashboardComponent, canActivate: [AuthenticationGuard] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);

let ToolBarComponent = class ToolBarComponent {
    constructor(dialog, authService) {
        this.dialog = dialog;
        this.authService = authService;
        this.openLoginDialog = () => {
            const dialogRef = this.dialog.open(LoginComponent);
            dialogRef.afterClosed().subscribe(result => {
            });
        };
        this.openSignupDialog = () => {
            const dialogRef = this.dialog.open(SignupComponent);
            dialogRef.afterClosed().subscribe(result => {
            });
        };
    }
    ngOnInit() {
    }
};
ToolBarComponent = __decorate([
    Component({
        selector: "app-tool-bar",
        template: "<mat-toolbar color=\"primary\">\n  <span>Dynamic Form</span>\n\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"example-fill-remaining-space\"></span>\n\n  <!-- login Button -->\n  <button mat-button (click)=\"openLoginDialog()\" *ngIf=\"!authService.isLoggedIn\">Login</button>\n  <button mat-button (click)=\"openSignupDialog()\" *ngIf=\"!authService.isLoggedIn\">Sign Up</button>\n  <button mat-button (click)=\"authService.SignOut()\" *ngIf=\"authService.isLoggedIn\">Logout</button>\n\n\n</mat-toolbar>\n",
        styles: [".example-fill-remaining-space{flex:1 1 auto}"]
    }),
    __metadata("design:paramtypes", [MatDialog, AuthService])
], ToolBarComponent);

let EmailFieldComponent = class EmailFieldComponent {
    constructor(formBuilder, validationMessageGenerator) {
        this.formBuilder = formBuilder;
        this.validationMessageGenerator = validationMessageGenerator;
        this.addControl = new EventEmitter();
        this.addValidator = () => {
            const validators = [];
            if (this.property.required) {
                validators.push(new RequiredValidator().get());
            }
            validators.push(Validators.email);
            this.formGroup = this.formBuilder.group({
                [this.property.name]: [{
                        value: "",
                        disabled: !this.property.enable
                    }, validators]
            });
            this.formGroup.updateValueAndValidity();
            this.addControl.emit({ key: this.property.name, value: this.formGroup });
        };
        this.getError = () => {
            return this.validationMessageGenerator.errorMessage(this.formGroup, this.property);
        };
    }
    ngOnInit() {
        this.addValidator();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], EmailFieldComponent.prototype, "property", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], EmailFieldComponent.prototype, "addControl", void 0);
EmailFieldComponent = __decorate([
    Component({
        selector: "app-email-field",
        template: "<div [formGroup]=\"formGroup\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n    <input matInput #input\n           formControlName={{property.name}}\n           placeholder={{property.alias}}\n           type=\"email\">\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n</div>\n",
        styles: [".mat-form-field{width:100%}.asterik{color:red}"]
    }),
    __metadata("design:paramtypes", [FormBuilder, ValidationMessageGeneratorService])
], EmailFieldComponent);

let PasswordFieldComponent = class PasswordFieldComponent {
    constructor(formBuilder, validationMessageGenerator) {
        this.formBuilder = formBuilder;
        this.validationMessageGenerator = validationMessageGenerator;
        this.addControl = new EventEmitter();
        this.addValidator = () => {
            // validators.push(new RequiredValidator());
            const validators = [];
            if (this.property.required) {
                validators.push(new RequiredValidator().get());
            }
            if (this.property.minLength && this.property.minLength != null) {
                validators.push(new MinLengthValidator().get(this.property.minLength));
            }
            if (this.property.maxLength && this.property.maxLength != null) {
                validators.push(new MaxLengthValidator().get(this.property.maxLength));
            }
            if (this.property.pattern && this.property.pattern != null) {
                validators.push(new PatternValidator().get(this.property.pattern));
            }
            this.formGroup = this.formBuilder.group({ [this.property.name]: [{ value: "", disabled: !this.property.enable }, validators] });
            this.formGroup.updateValueAndValidity();
            this.addControl.emit({ key: this.property.name, value: this.formGroup });
        };
        this.getError = () => {
            return this.validationMessageGenerator.errorMessage(this.formGroup, this.property);
        };
    }
    ngOnInit() {
        this.addValidator();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], PasswordFieldComponent.prototype, "property", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PasswordFieldComponent.prototype, "addControl", void 0);
PasswordFieldComponent = __decorate([
    Component({
        selector: "app-password-field",
        template: "<div [formGroup]=\"formGroup\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n    <input matInput #input\n           formControlName={{property.name}}\n           placeholder={{property.alias}}\n           type=\"password\"\n           [attr.maxlength] = \"property.maxLength ? null : property.maxLength\"\n           [attr.minlength] = \"property.minLength ? null : property.minLength\" >\n\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n</div>\n",
        styles: [".mat-form-field{width:100%}.asterik{color:red}"]
    }),
    __metadata("design:paramtypes", [FormBuilder, ValidationMessageGeneratorService])
], PasswordFieldComponent);

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

let LoadingSpinnerComponent = class LoadingSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoadingSpinnerComponent = __decorate([
    Component({
        selector: "app-loading-spinner",
        template: "<div class=\"spinner-wrapper\">\n  <div class=\"spinner\">\n    <div class=\"rect1\"></div>\n    <div class=\"rect2\"></div>\n    <div class=\"rect3\"></div>\n    <div class=\"rect4\"></div>\n    <div class=\"rect5\"></div>\n  </div>\n</div>\n\n\n",
        styles: [".spinner-wrapper{display:flex;z-index:9998;opacity:.5;pointer-events:none;position:absolute;top:0;right:0;left:0;bottom:0}.spinner{width:50px;height:40px;text-align:center;font-size:10px;margin:auto;z-index:9999}.spinner>div{background-color:#003cff;height:100%;width:6px;display:inline-block;-webkit-animation:1.2s ease-in-out infinite sk-stretchdelay;animation:1.2s ease-in-out infinite sk-stretchdelay}.spinner .rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.spinner .rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.spinner .rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.spinner .rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-stretchdelay{0%,100%,40%{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes sk-stretchdelay{0%,100%,40%{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}"]
    }),
    __metadata("design:paramtypes", [])
], LoadingSpinnerComponent);

let StepFormComponent = class StepFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({});
        this.addControl = (data) => {
            _.each(this.uiSchema.steps, (step) => {
                const matchedField = _.find(step.fields, (field) => {
                    return field.name === data.key;
                });
                if (matchedField) {
                    const fc = this.formGroup.controls[step.sequence - 1];
                    fc.addControl(data.key, data.value);
                    this.formGroup.updateValueAndValidity();
                }
            });
        };
        this.formValue = () => {
            console.log(this.formGroup.getRawValue());
        };
        this.reset = () => {
            this.formGroup.reset();
        };
    }
    ngOnInit() {
        const allSteps = [];
        const steps = _.range(this.uiSchema.totalSteps);
        steps.forEach((step) => {
            allSteps[step] = this.formBuilder.group({});
        });
        this.formGroup = this.formBuilder.group(allSteps);
    }
    ngOnChanges() {
        this.formGroup = this.formBuilder.group({}); // when ui or model formSchema changes re initialize form group
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], StepFormComponent.prototype, "uiSchema", void 0);
StepFormComponent = __decorate([
    Component({
        selector: "app-step-form",
        template: "  <div class=\"ex-form\">\n\n    <h5>{{uiSchema.name}}</h5>\n\n  <mat-horizontal-stepper [linear]=\"true\" labelPosition=\"bottom\" #stepper>\n\n\n    <ng-container *ngFor=\"let stepControl of formGroup.controls | keyvalue;let i = index;\">\n\n        <mat-step [stepControl]=\"stepControl.value\" [completed]=\"false\">\n          <form [formGroup]=\"stepControl.value\" >\n            <div class=\"row\">\n              <ng-container *ngFor=\"let property of uiSchema.steps[i].fields;\">\n                <ng-template matStepLabel  matStepperIcon=\"number\">{{uiSchema.steps[i].label}}</ng-template>\n\n                <!--Form field for text input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='String'\">\n                  <app-text-field [property]=\"property\"\n                                  (addControl)= \"addControl($event)\" >\n                  </app-text-field>\n                </div>\n\n                <!--Form field for email input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Email'\">\n\n                  <app-email-field  [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-email-field>\n                </div>\n\n                <!--Form field for password input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Password'\">\n\n                  <app-password-field  [property]=\"property\"\n                                       (addControl)= \"addControl($event)\" >\n                  </app-password-field>\n                </div>\n                <!--Form field for number input  -->\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n                  <app-number-field [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-number-field>\n\n                </div>\n\n                <!--Form field for enumeration-->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Enumeration'\"\n                     style=\"margin-bottom:0px;\">\n                  <app-dropdown [property]=\"property\"\n                                (addControl)= \"addControl($event)\" >\n                  </app-dropdown>\n\n                </div>\n\n                <!--Form field for Measure Datatype-->\n\n                <div class=\"form-group col-sm-6\"\n                     *ngIf=\"property && property.dataType=='Measure'\"\n                     style=\"margin-bottom:0;padding-right: 0;\">\n\n\n\n                  <app-measure\n                    [property]=\"property\"\n                    (addControl)= \"addControl($event)\" >\n                  </app-measure>\n\n                </div>\n              </ng-container>\n\n            </div>\n\n            <div>\n              <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n            </div>\n            <div class=\"btn btn-toolbar\">\n              <button mat-button matStepperPrevious *ngIf=\"i > 0\">Back</button>\n              <button\n                mat-button\n                matStepperNext\n                *ngIf=\"i < uiSchema.totalSteps-1\">\n                Next\n              </button>\n\n              <button\n                mat-raised-button\n                type=\"button\"\n                color=\"primary\"\n                *ngIf= \"i === uiSchema.totalSteps-1\"\n                (click)=\"formValue()\"\n                [disabled]=\"!formGroup.valid\">\n                Submit\n              </button>\n            </div>\n\n          </form>\n\n        </mat-step>\n\n\n    </ng-container>\n  </mat-horizontal-stepper>\n\n</div>\n\n",
        styles: [".jumbotron{background-color:#f8f9fa;padding:15px;margin-top:56px}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}.asterik{color:red}.ex-form{background:#fff;box-shadow:0 2px 6px 4px rgba(0,0,0,.14);border-radius:15px;padding:20px}.padding-right-zero{padding-right:0}.padding-zero{padding:0}::ng-deep .mat-horizontal-stepper-header{pointer-events:none!important}"]
    }),
    __metadata("design:paramtypes", [FormBuilder])
], StepFormComponent);

let SimpleComponent = class SimpleComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({});
        this.addControl = (data) => {
            this.formGroup.addControl(data.key, data.value);
            this.formGroup.updateValueAndValidity();
        };
        this.getFormValue = () => {
            console.log(this.formGroup.getRawValue());
        };
        this.reset = () => {
            console.log(this.formGroup);
            this.formGroup.reset();
        };
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.formGroup = this.formBuilder.group({}); // when ui or model formSchema changes re initialize form group
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SimpleComponent.prototype, "uiSchema", void 0);
SimpleComponent = __decorate([
    Component({
        selector: "app-simple",
        template: "<div>\n  <form [formGroup]=\"formGroup\" class=\"ex-form\">\n    <h5>{{uiSchema.name}}</h5>\n    <div class=\"row\">\n      <ng-container *ngFor=\"let property of uiSchema.fields; let i=index;\">\n        <!--Form field for text input  -->\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='String'\">\n          <app-text-field [property]=\"property\"\n                          (addControl)= \"addControl($event)\" >\n          </app-text-field>\n        </div>\n\n\n        <!--Form field for password input  -->\n\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Password'\">\n\n          <app-password-field  [property]=\"property\"\n                               (addControl)= \"addControl($event)\" >\n          </app-password-field>\n        </div>\n\n        <!--Form field for email input  -->\n\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Email'\">\n\n          <app-email-field  [property]=\"property\"\n                            (addControl)= \"addControl($event)\" >\n          </app-email-field>\n        </div>\n\n        <!--Form field for number input  -->\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n          <app-number-field [property]=\"property\"\n                            (addControl)= \"addControl($event)\" >\n          </app-number-field>\n\n        </div>\n        <!--Form field for enumeration-->\n\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Enumeration'\"\n             style=\"margin-bottom:0px;\">\n          <app-dropdown [property]=\"property\"\n                        (addControl)= \"addControl($event)\" >\n          </app-dropdown>\n\n        </div>\n\n\n\n        <div class=\"form-group col-sm-6\"\n             *ngIf=\"property && property.dataType=='Measure'\"\n             style=\"margin-bottom:0;\n                    padding-right:0;\">\n\n\n          <app-measure\n            [property]=\"property\"\n            (addControl)= \"addControl($event)\" >\n          </app-measure>\n\n        </div>\n\n      </ng-container>\n    </div>\n\n    <div>\n      <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n    </div>\n    <div class=\"btn btn-toolbar\">\n\n      <button type=\"button\" class=\"btn btn-primary\" (click)= \"getFormValue()\" [disabled]=\"!formGroup.valid\">Submit</button>\n      &nbsp; &nbsp;\n\n      <button type=\"button\" (click)=\"reset()\" class=\"btn btn-primary\">Reset</button>\n    </div>\n\n  </form>\n\n</div>\n",
        styles: [".jumbotron{background-color:#f8f9fa;padding:15px;margin-top:56px}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}.asterik{color:red}.ex-form{background:#fff;box-shadow:0 2px 6px 4px rgba(0,0,0,.14);border-radius:15px;padding:20px}.padding-right-zero{padding-right:0}.padding-zero{padding:0}"]
    }),
    __metadata("design:paramtypes", [FormBuilder])
], SimpleComponent);

let AccordianComponent = class AccordianComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({});
        this.step = 0;
        this.addControl = (data) => {
            _.each(this.uiSchema.steps, (step) => {
                const matchedField = _.find(step.fields, (field) => {
                    return field.name === data.key;
                });
                if (matchedField) {
                    const fc = this.formGroup.controls[step.sequence - 1];
                    fc.addControl(data.key, data.value);
                    this.formGroup.updateValueAndValidity();
                }
            });
        };
        this.formValue = () => {
            console.log(this.formGroup.getRawValue());
        };
        this.reset = () => {
            this.formGroup.reset();
        };
    }
    ngOnInit() {
        console.log("UI Schema", this.uiSchema);
        const allSteps = [];
        const steps = _.range(this.uiSchema.totalSteps);
        steps.forEach((step) => {
            allSteps[step] = this.formBuilder.group({});
        });
        this.formGroup = this.formBuilder.group(allSteps);
    }
    ngOnChanges() {
        this.formGroup = this.formBuilder.group({}); // when ui or model formSchema changes re initialize form group
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], AccordianComponent.prototype, "uiSchema", void 0);
AccordianComponent = __decorate([
    Component({
        selector: "app-accordian",
        template: "<div class=\"ex-form\">\n\n  <h5>{{uiSchema.name}}</h5>\n\n  <div style=\"margin: 3% 0;\">\n\n\n    <mat-accordion class=\"example-headers-align\">\n\n      <ng-container *ngFor=\"let stepControl of formGroup.controls | keyvalue;let i = index;\">\n\n        <mat-expansion-panel [expanded]=\"step === uiSchema.steps[i].sequence-1 \" (opened)=\"setStep(uiSchema.steps[i].sequence-1)\" hideToggle>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n             <b> {{uiSchema.steps[i].label}}</b>\n            </mat-panel-title>\n            <mat-panel-description>\n              {{uiSchema.steps[i].description}}\n              <!--<mat-icon>account_circle</mat-icon>-->\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n\n\n          <form [formGroup]=\"stepControl.value\" style=\"margin-top: 20px\" >\n            <div class=\"row\">\n              <ng-container *ngFor=\"let property of uiSchema.steps[i].fields;\">\n                <ng-template matStepLabel  matStepperIcon=\"number\">{{uiSchema.steps[i].label}}</ng-template>\n\n                <!--Form field for text input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='String'\">\n                  <app-text-field [property]=\"property\"\n                                  (addControl)= \"addControl($event)\" >\n                  </app-text-field>\n                </div>\n\n                <!--Form field for email input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Email'\">\n\n                  <app-email-field  [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-email-field>\n                </div>\n\n                <!--Form field for password input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Password'\">\n\n                  <app-password-field  [property]=\"property\"\n                                       (addControl)= \"addControl($event)\" >\n                  </app-password-field>\n                </div>\n                <!--Form field for number input  -->\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n                  <app-number-field [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-number-field>\n\n                </div>\n\n                <!--Form field for enumeration-->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Enumeration'\"\n                     style=\"margin-bottom:0px;\">\n                  <app-dropdown [property]=\"property\"\n                                (addControl)= \"addControl($event)\" >\n                  </app-dropdown>\n\n                </div>\n\n                <!--Form field for Measure Datatype-->\n\n                <div class=\"form-group col-sm-6\"\n                     *ngIf=\"property && property.dataType=='Measure'\"\n                     style=\"margin-bottom:0;padding-right: 0;\">\n\n\n\n                  <app-measure\n                    [property]=\"property\"\n                    (addControl)= \"addControl($event)\" >\n                  </app-measure>\n\n                </div>\n              </ng-container>\n\n            </div>\n\n            <div>\n              <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n            </div>\n            <div class=\"btn btn-toolbar\">\n              <button mat-button\n                      *ngIf=\"i > 0\"\n                      (click)=\"prevStep()\">\n                Back\n              </button>\n              <button\n                mat-button\n                [disabled]=\"!stepControl.value.valid\"\n                (click)=\"nextStep()\"\n                *ngIf=\"i < uiSchema.totalSteps-1\">\n                Next\n              </button>\n\n              <button\n                mat-raised-button\n                type=\"button\"\n                color=\"primary\"\n                *ngIf= \"i === uiSchema.totalSteps-1\"\n                (click)=\"formValue()\"\n                [disabled]=\"!formGroup.valid\">\n                Submit\n              </button>\n            </div>\n\n          </form>\n\n        </mat-expansion-panel>\n\n      </ng-container>\n\n    </mat-accordion>\n  </div>\n\n</div>\n",
        styles: ["::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}.asterik{color:red}.ex-form{background:#fff;box-shadow:0 1px 2px 2px rgba(0,0,0,.14);padding:30px}.padding-right-zero{padding-right:0}.padding-zero{padding:0}mat-expansion-panel{margin-bottom:20px}"]
    }),
    __metadata("design:paramtypes", [FormBuilder])
], AccordianComponent);

let TabComponent = class TabComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({});
        this.buildStepFormGroup = () => {
            const allSteps = [];
            const steps = _.range(this.uiSchema.totalSteps);
            steps.forEach((step) => {
                allSteps[step] = this.formBuilder.group({});
            });
            this.formGroup = this.formBuilder.group(allSteps);
        };
        this.addControl = (data) => {
            _.each(this.uiSchema.steps, (step) => {
                const matchedField = _.find(step.fields, (field) => {
                    return field.name === data.key;
                });
                if (matchedField) {
                    const fc = this.formGroup.controls[step.sequence - 1];
                    fc.addControl(data.key, data.value);
                    this.formGroup.updateValueAndValidity();
                }
            });
        };
        this.formValue = () => {
            console.log(this.formGroup.getRawValue());
        };
        this.reset = () => {
            this.formGroup.reset();
        };
    }
    ngOnInit() {
        this.buildStepFormGroup();
    }
    ngOnChanges() {
        this.buildStepFormGroup();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabComponent.prototype, "uiSchema", void 0);
TabComponent = __decorate([
    Component({
        selector: "app-tab",
        template: "\n\n\n\n<div class=\"ex-form\">\n\n  <h5>{{uiSchema.name}}</h5>\n\n  <mat-tab-group animationDuration=\"0ms\" #tabGroup>\n\n\n    <ng-container *ngFor=\"let stepControl of formGroup.controls | keyvalue;let i = index;\">\n\n      <!--<mat-step [stepControl]=\"stepControl.value\" [completed]=\"false\">-->\n        <mat-tab [label] = \"uiSchema.steps[i].label\">\n          <form [formGroup]=\"stepControl.value\" >\n            <div class=\"row\">\n              <ng-container *ngFor=\"let property of uiSchema.steps[i].fields;\">\n                <ng-template matStepLabel  matStepperIcon=\"number\">{{uiSchema.steps[i].label}}</ng-template>\n\n                <!--Form field for text input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='String'\">\n                  <app-text-field [property]=\"property\"\n                                  (addControl)= \"addControl($event)\" >\n                  </app-text-field>\n                </div>\n\n                <!--Form field for email input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Email'\">\n\n                  <app-email-field  [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-email-field>\n                </div>\n\n                <!--Form field for password input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Password'\">\n\n                  <app-password-field  [property]=\"property\"\n                                       (addControl)= \"addControl($event)\" >\n                  </app-password-field>\n                </div>\n\n                <!--Form field for number input  -->\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n                  <app-number-field [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-number-field>\n\n                </div>\n\n                <!--Form field for enumeration-->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Enumeration'\"\n                     style=\"margin-bottom:0px;\">\n                  <app-dropdown [property]=\"property\"\n                                (addControl)= \"addControl($event)\" >\n                  </app-dropdown>\n\n                </div>\n\n                <!--Form field for Measure Datatype-->\n\n                <div class=\"form-group col-sm-6\"\n                     *ngIf=\"property && property.dataType=='Measure'\"\n                     style=\"margin-bottom:0;padding-right: 0;\">\n\n\n\n                  <app-measure\n                    [property]=\"property\"\n                    (addControl)= \"addControl($event)\" >\n                  </app-measure>\n\n                </div>\n              </ng-container>\n\n            </div>\n\n            <div>\n              <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n            </div>\n            <div class=\"btn btn-toolbar\">\n              <button mat-button *ngIf=\"i > 0\"\n                      (click)=\"tabGroup.selectedIndex = i-1\">Back</button>\n              <button\n                mat-button\n                *ngIf=\"i < uiSchema.totalSteps-1\"\n                [disabled]=\"!stepControl.value.valid\"\n                (click)=\"tabGroup.selectedIndex = i+1\">\n                Next\n              </button>\n\n              <button\n                mat-raised-button\n                type=\"button\"\n                color=\"primary\"\n                *ngIf= \"i === uiSchema.totalSteps-1\"\n                (click)=\"formValue()\"\n                [disabled]=\"!formGroup.valid\">\n                Submit\n              </button>\n            </div>\n\n          </form>\n        </mat-tab>\n\n\n\n      <!--</mat-step>-->\n\n\n    </ng-container>\n  </mat-tab-group>\n\n</div>\n\n",
        styles: ["::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}.asterik{color:red}.ex-form{background:#fff;box-shadow:0 2px 6px 4px rgba(0,0,0,.14);border-radius:15px;padding:20px}.padding-right-zero{padding-right:0}.padding-zero{padding:0}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;pointer-events:none}::ng-deep .mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height .5s cubic-bezier(.35,0,.25,1);margin:25px 0 0}::ng-deep .mat-tab-body-content{overflow:visible!important}"]
    }),
    __metadata("design:paramtypes", [FormBuilder])
], TabComponent);

let UiSchemaComponent = class UiSchemaComponent {
    constructor() {
        this.uiSchemaChange = new EventEmitter();
        this.uiSchemaEditorOptions = new JsonEditorOptions();
        this.uiSchemaEditorOptions.mode = "code";
    }
    ngOnInit() {
        console.log("Old UI Schema", this.uiSchemaData);
    }
    getData(event) {
        if (this.editor.isValidJson()) {
            this.uiSchemaChange.emit(this.editor.get());
        }
        else {
            console.log("UI Schema is incorrect");
        }
    }
};
__decorate([
    ViewChild(JsonEditorComponent, { static: false }),
    __metadata("design:type", JsonEditorComponent)
], UiSchemaComponent.prototype, "editor", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], UiSchemaComponent.prototype, "uiSchemaData", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], UiSchemaComponent.prototype, "uiSchemaChange", void 0);
UiSchemaComponent = __decorate([
    Component({
        selector: "app-ui-schema",
        template: "<div style=\"margin-bottom: 10px;\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>UI Schema</mat-card-title>\n    </mat-card-header>\n\n    <mat-card-content>\n      <json-editor [options]=\"uiSchemaEditorOptions\" [data]=\"uiSchemaData\" (keyup)=\"getData($event)\"></json-editor>\n    </mat-card-content>\n  </mat-card>\n\n</div>\n",
        styles: ["::ng-deep div.jsoneditor-menu{width:100%;height:35px;padding:2px;margin:0;box-sizing:border-box;color:#fff;background-color:#3883fa;border-bottom:1px solid #3883fa;display:none}mat-card{background:#f5f5f5;padding:0;border:1px solid #000}::ng-deep div.jsoneditor{border:none}"]
    }),
    __metadata("design:paramtypes", [])
], UiSchemaComponent);

let ModelSchemaComponent = class ModelSchemaComponent {
    constructor() {
        this.modelSchemaChange = new EventEmitter();
        this.modelSchemaEditorOptions = new JsonEditorOptions();
        this.modelSchemaEditorOptions.mode = "code";
    }
    ngOnInit() {
        console.log("Old model Schema", this.modelSchemaData);
    }
    getData(event) {
        if (this.editor.isValidJson()) {
            this.modelSchemaChange.emit(this.editor.get());
            console.log("correct");
        }
        else {
            // console.log("UI Schema is incorrect");
        }
    }
};
__decorate([
    ViewChild(JsonEditorComponent, { static: false }),
    __metadata("design:type", JsonEditorComponent)
], ModelSchemaComponent.prototype, "editor", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModelSchemaComponent.prototype, "modelSchemaData", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModelSchemaComponent.prototype, "modelSchemaChange", void 0);
ModelSchemaComponent = __decorate([
    Component({
        selector: "app-model-schema",
        template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Model Schema</mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <json-editor [options]=\"modelSchemaEditorOptions\" [data]=\"modelSchemaData\" (keyup)=\"getData($event)\"></json-editor>\n  </mat-card-content>\n</mat-card>\n",
        styles: ["::ng-deep div.jsoneditor-menu{width:100%;height:35px;padding:2px;margin:0;box-sizing:border-box;color:#fff;background-color:#3883fa;border-bottom:1px solid #3883fa;display:none}mat-card{background:#f5f5f5;padding:0;border:1px solid #000}::ng-deep div.jsoneditor{border:none}"]
    }),
    __metadata("design:paramtypes", [])
], ModelSchemaComponent);

let RadioComponent = class RadioComponent {
    constructor() { }
    ngOnInit() {
    }
};
RadioComponent = __decorate([
    Component({
        selector: "app-radio",
        template: "<!--<div [formGroup]=\"formGroup\">-->\n  <!--<mat-form-field appearance=\"outline\">-->\n    <!--<mat-label>{{property.alias}}-->\n      <!--<span *ngIf = \"property.required\" class=\"asterik\">*</span>-->\n    <!--</mat-label>-->\n\n    <!--&lt;!&ndash;<mat-select formControlName={{property.name}} multiple={{property.array}}>&ndash;&gt;-->\n      <!--&lt;!&ndash;<mat-option *ngIf=\"!property.array\">Select</mat-option>&ndash;&gt;-->\n      <!--&lt;!&ndash;<mat-option *ngFor=\"let opt of property.values\" [value]=\"opt\">&ndash;&gt;-->\n        <!--&lt;!&ndash;{{opt}}&ndash;&gt;-->\n      <!--&lt;!&ndash;</mat-option>&ndash;&gt;-->\n    <!--&lt;!&ndash;</mat-select>&ndash;&gt;-->\n\n    <!--<mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>-->\n\n  <!--</mat-form-field>-->\n\n<!--</div>-->\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], RadioComponent);

let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            JsonFormComponent,
            FormComponent,
            TextFieldComponent,
            NumberFieldComponent,
            DropdownComponent,
            MeasureComponent,
            DashboardComponent,
            LoginComponent,
            ToolBarComponent,
            SignupComponent,
            EmailFieldComponent,
            PasswordFieldComponent,
            LoadingSpinnerComponent,
            StepFormComponent,
            SimpleComponent,
            AccordianComponent,
            TabComponent,
            UiSchemaComponent,
            ModelSchemaComponent,
            RadioComponent
        ],
        imports: [
            FormsModule,
            AngularMaterialModule,
            ReactiveFormsModule,
            CommonModule,
            AppRoutingModule,
            MatDialogModule,
            BrowserModule,
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFireModule,
            AngularFirestoreModule,
            MatSnackBarModule,
            AngularFireDatabaseModule,
            AngularFireAuthModule,
            MatExpansionModule,
            MatTabsModule,
            SocialLoginModule,
            HttpClientModule,
            NgJsonEditorModule
        ],
        entryComponents: [
            LoginComponent, SignupComponent
        ],
        providers: [ValidationServiceService,
            ValidationMessageGeneratorService,
            AuthService,
            CommonService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);

/**
 * Generated bundle index. Do not edit.
 */

export { AppModule, AppComponent as ɵa, CommonService as ɵb, RadioComponent as ɵba, AngularMaterialModule as ɵbb, AppRoutingModule as ɵbc, AuthenticationGuard as ɵbd, environment as ɵbe, JsonFormComponent as ɵc, ValidationServiceService as ɵd, FormComponent as ɵe, TextFieldComponent as ɵf, ValidationMessageGeneratorService as ɵg, NumberFieldComponent as ɵh, DropdownComponent as ɵi, MeasureComponent as ɵj, DashboardComponent as ɵk, DashboardService as ɵl, LoginComponent as ɵm, AuthService as ɵn, SnackBarMessageService as ɵo, ToolBarComponent as ɵp, SignupComponent as ɵq, EmailFieldComponent as ɵr, PasswordFieldComponent as ɵs, LoadingSpinnerComponent as ɵt, StepFormComponent as ɵu, SimpleComponent as ɵv, AccordianComponent as ɵw, TabComponent as ɵx, UiSchemaComponent as ɵy, ModelSchemaComponent as ɵz };
//# sourceMappingURL=angular-json-form.js.map

import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import _ from "lodash";
var TabComponent = /** @class */ (function () {
    function TabComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({});
        this.buildStepFormGroup = function () {
            var allSteps = [];
            var steps = _.range(_this.uiSchema.totalSteps);
            steps.forEach(function (step) {
                allSteps[step] = _this.formBuilder.group({});
            });
            _this.formGroup = _this.formBuilder.group(allSteps);
        };
        this.addControl = function (data) {
            _.each(_this.uiSchema.steps, function (step) {
                var matchedField = _.find(step.fields, function (field) {
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TabComponent.prototype, "uiSchema", void 0);
    TabComponent = tslib_1.__decorate([
        Component({
            selector: "app-tab",
            template: "\n\n\n\n<div class=\"ex-form\">\n\n  <h5>{{uiSchema.name}}</h5>\n\n  <mat-tab-group animationDuration=\"0ms\" #tabGroup>\n\n\n    <ng-container *ngFor=\"let stepControl of formGroup.controls | keyvalue;let i = index;\">\n\n      <!--<mat-step [stepControl]=\"stepControl.value\" [completed]=\"false\">-->\n        <mat-tab [label] = \"uiSchema.steps[i].label\">\n          <form [formGroup]=\"stepControl.value\" >\n            <div class=\"row\">\n              <ng-container *ngFor=\"let property of uiSchema.steps[i].fields;\">\n                <ng-template matStepLabel  matStepperIcon=\"number\">{{uiSchema.steps[i].label}}</ng-template>\n\n                <!--Form field for text input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='String'\">\n                  <app-text-field [property]=\"property\"\n                                  (addControl)= \"addControl($event)\" >\n                  </app-text-field>\n                </div>\n\n                <!--Form field for email input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Email'\">\n\n                  <app-email-field  [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-email-field>\n                </div>\n\n                <!--Form field for password input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Password'\">\n\n                  <app-password-field  [property]=\"property\"\n                                       (addControl)= \"addControl($event)\" >\n                  </app-password-field>\n                </div>\n\n                <!--Form field for number input  -->\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n                  <app-number-field [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-number-field>\n\n                </div>\n\n                <!--Form field for enumeration-->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Enumeration'\"\n                     style=\"margin-bottom:0px;\">\n                  <app-dropdown [property]=\"property\"\n                                (addControl)= \"addControl($event)\" >\n                  </app-dropdown>\n\n                </div>\n\n                <!--Form field for Measure Datatype-->\n\n                <div class=\"form-group col-sm-6\"\n                     *ngIf=\"property && property.dataType=='Measure'\"\n                     style=\"margin-bottom:0;padding-right: 0;\">\n\n\n\n                  <app-measure\n                    [property]=\"property\"\n                    (addControl)= \"addControl($event)\" >\n                  </app-measure>\n\n                </div>\n              </ng-container>\n\n            </div>\n\n            <div>\n              <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n            </div>\n            <div class=\"btn btn-toolbar\">\n              <button mat-button *ngIf=\"i > 0\"\n                      (click)=\"tabGroup.selectedIndex = i-1\">Back</button>\n              <button\n                mat-button\n                *ngIf=\"i < uiSchema.totalSteps-1\"\n                [disabled]=\"!stepControl.value.valid\"\n                (click)=\"tabGroup.selectedIndex = i+1\">\n                Next\n              </button>\n\n              <button\n                mat-raised-button\n                type=\"button\"\n                color=\"primary\"\n                *ngIf= \"i === uiSchema.totalSteps-1\"\n                (click)=\"formValue()\"\n                [disabled]=\"!formGroup.valid\">\n                Submit\n              </button>\n            </div>\n\n          </form>\n        </mat-tab>\n\n\n\n      <!--</mat-step>-->\n\n\n    </ng-container>\n  </mat-tab-group>\n\n</div>\n\n",
            styles: ["::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}.asterik{color:red}.ex-form{background:#fff;box-shadow:0 2px 6px 4px rgba(0,0,0,.14);border-radius:15px;padding:20px}.padding-right-zero{padding-right:0}.padding-zero{padding:0}::ng-deep .mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0;pointer-events:none}::ng-deep .mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height .5s cubic-bezier(.35,0,.25,1);margin:25px 0 0}::ng-deep .mat-tab-body-content{overflow:visible!important}"]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], TabComponent);
    return TabComponent;
}());
export { TabComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9leC1mb3JtL3ZpZXdlci9ncm91cC90YWJzL3RhYi90YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFDLFdBQVcsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQU92QjtJQUlFLHNCQUFvQixXQUF3QjtRQUE1QyxpQkFDQztRQURtQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUg1QyxjQUFTLEdBQWMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFhbEQsdUJBQWtCLEdBQUc7WUFDbkIsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoRCxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUE7UUFHRCxlQUFVLEdBQUcsVUFBQyxJQUFJO1lBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsVUFBQyxJQUFJO2dCQUMvQixJQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFLO29CQUM3QyxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLElBQU0sRUFBRSxHQUFRLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzNELEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3BDLEtBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztpQkFDekM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTtRQUVELGNBQVMsR0FBRztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQTtRQUVELFVBQUssR0FBRztZQUNOLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFBO0lBdENELENBQUM7SUFDRCwrQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBVlE7UUFBUixLQUFLLEVBQUU7O2tEQUFlO0lBRlosWUFBWTtRQUx4QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixnaUlBQW1DOztTQUVwQyxDQUFDO2lEQUtpQyxXQUFXO09BSmpDLFlBQVksQ0ErQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQS9DWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtdGFiXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGFiLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi90YWIuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7fSk7XG4gIEBJbnB1dCgpIHVpU2NoZW1hOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJ1aWxkU3RlcEZvcm1Hcm91cCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5idWlsZFN0ZXBGb3JtR3JvdXAoKTtcbiAgfVxuXG4gIGJ1aWxkU3RlcEZvcm1Hcm91cCA9ICgpID0+IHtcbiAgICBjb25zdCBhbGxTdGVwcyA9IFtdO1xuICAgIGNvbnN0IHN0ZXBzID0gXy5yYW5nZSh0aGlzLnVpU2NoZW1hLnRvdGFsU3RlcHMpO1xuICAgIHN0ZXBzLmZvckVhY2goKHN0ZXApID0+IHtcbiAgICAgIGFsbFN0ZXBzW3N0ZXBdID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7fSk7XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGFsbFN0ZXBzKTtcbiAgfVxuXG5cbiAgYWRkQ29udHJvbCA9IChkYXRhKSA9PiB7XG4gICAgXy5lYWNoKHRoaXMudWlTY2hlbWEuc3RlcHMsIChzdGVwKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVkRmllbGQgPSBfLmZpbmQoc3RlcC5maWVsZHMsIChmaWVsZCkgPT4ge1xuICAgICAgICByZXR1cm4gZmllbGQubmFtZSA9PT0gZGF0YS5rZXk7XG4gICAgICB9KTtcbiAgICAgIGlmIChtYXRjaGVkRmllbGQpIHtcbiAgICAgICAgY29uc3QgZmM6IGFueSA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3N0ZXAuc2VxdWVuY2UgLSAxXTtcbiAgICAgICAgZmMuYWRkQ29udHJvbChkYXRhLmtleSwgZGF0YS52YWx1ZSk7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvcm1WYWx1ZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cC5nZXRSYXdWYWx1ZSgpKTtcbiAgfVxuXG4gIHJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gIH1cblxuXG5cbn1cbiJdfQ==
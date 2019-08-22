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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3Vsci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvY29tcG9uZW50L2V4LWZvcm0vdmlld2VyL2dyb3VwL3RhYnMvdGFiL3RhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBT3ZCO0lBSUUsc0JBQW9CLFdBQXdCO1FBQTVDLGlCQUNDO1FBRG1CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSDVDLGNBQVMsR0FBYyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQWFsRCx1QkFBa0IsR0FBRztZQUNuQixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDcEIsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUNqQixRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQTtRQUdELGVBQVUsR0FBRyxVQUFDLElBQUk7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxVQUFDLElBQUk7Z0JBQy9CLElBQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUs7b0JBQzdDLE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNqQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLFlBQVksRUFBRTtvQkFDaEIsSUFBTSxFQUFFLEdBQVEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDM0QsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDcEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2lCQUN6QztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBRUQsY0FBUyxHQUFHO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFBO1FBRUQsVUFBSyxHQUFHO1lBQ04sS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUE7SUF0Q0QsQ0FBQztJQUNELCtCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFWUTtRQUFSLEtBQUssRUFBRTs7a0RBQWU7SUFGWixZQUFZO1FBTHhCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLGdpSUFBbUM7O1NBRXBDLENBQUM7aURBS2lDLFdBQVc7T0FKakMsWUFBWSxDQStDeEI7SUFBRCxtQkFBQztDQUFBLEFBL0NELElBK0NDO1NBL0NZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC10YWJcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi90YWIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3RhYi5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHt9KTtcbiAgQElucHV0KCkgdWlTY2hlbWE6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYnVpbGRTdGVwRm9ybUdyb3VwKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmJ1aWxkU3RlcEZvcm1Hcm91cCgpO1xuICB9XG5cbiAgYnVpbGRTdGVwRm9ybUdyb3VwID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbFN0ZXBzID0gW107XG4gICAgY29uc3Qgc3RlcHMgPSBfLnJhbmdlKHRoaXMudWlTY2hlbWEudG90YWxTdGVwcyk7XG4gICAgc3RlcHMuZm9yRWFjaCgoc3RlcCkgPT4ge1xuICAgICAgYWxsU3RlcHNbc3RlcF0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHt9KTtcbiAgICB9KTtcbiAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoYWxsU3RlcHMpO1xuICB9XG5cblxuICBhZGRDb250cm9sID0gKGRhdGEpID0+IHtcbiAgICBfLmVhY2godGhpcy51aVNjaGVtYS5zdGVwcywgKHN0ZXApID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZWRGaWVsZCA9IF8uZmluZChzdGVwLmZpZWxkcywgKGZpZWxkKSA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC5uYW1lID09PSBkYXRhLmtleTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG1hdGNoZWRGaWVsZCkge1xuICAgICAgICBjb25zdCBmYzogYW55ID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbc3RlcC5zZXF1ZW5jZSAtIDFdO1xuICAgICAgICBmYy5hZGRDb250cm9sKGRhdGEua2V5LCBkYXRhLnZhbHVlKTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9ybVZhbHVlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLmdldFJhd1ZhbHVlKCkpO1xuICB9XG5cbiAgcmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtR3JvdXAucmVzZXQoKTtcbiAgfVxuXG5cblxufVxuIl19
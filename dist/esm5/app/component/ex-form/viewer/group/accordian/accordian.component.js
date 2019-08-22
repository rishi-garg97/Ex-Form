import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import _ from "lodash";
var AccordianComponent = /** @class */ (function () {
    function AccordianComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({});
        this.step = 0;
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
    AccordianComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("UI Schema", this.uiSchema);
        var allSteps = [];
        var steps = _.range(this.uiSchema.totalSteps);
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AccordianComponent.prototype, "uiSchema", void 0);
    AccordianComponent = tslib_1.__decorate([
        Component({
            selector: "app-accordian",
            template: "<div class=\"ex-form\">\n\n  <h5>{{uiSchema.name}}</h5>\n\n  <div style=\"margin: 3% 0;\">\n\n\n    <mat-accordion class=\"example-headers-align\">\n\n      <ng-container *ngFor=\"let stepControl of formGroup.controls | keyvalue;let i = index;\">\n\n        <mat-expansion-panel [expanded]=\"step === uiSchema.steps[i].sequence-1 \" (opened)=\"setStep(uiSchema.steps[i].sequence-1)\" hideToggle>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n             <b> {{uiSchema.steps[i].label}}</b>\n            </mat-panel-title>\n            <mat-panel-description>\n              {{uiSchema.steps[i].description}}\n              <!--<mat-icon>account_circle</mat-icon>-->\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n\n\n          <form [formGroup]=\"stepControl.value\" style=\"margin-top: 20px\" >\n            <div class=\"row\">\n              <ng-container *ngFor=\"let property of uiSchema.steps[i].fields;\">\n                <ng-template matStepLabel  matStepperIcon=\"number\">{{uiSchema.steps[i].label}}</ng-template>\n\n                <!--Form field for text input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='String'\">\n                  <app-text-field [property]=\"property\"\n                                  (addControl)= \"addControl($event)\" >\n                  </app-text-field>\n                </div>\n\n                <!--Form field for email input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Email'\">\n\n                  <app-email-field  [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-email-field>\n                </div>\n\n                <!--Form field for password input  -->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Password'\">\n\n                  <app-password-field  [property]=\"property\"\n                                       (addControl)= \"addControl($event)\" >\n                  </app-password-field>\n                </div>\n                <!--Form field for number input  -->\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n                  <app-number-field [property]=\"property\"\n                                    (addControl)= \"addControl($event)\" >\n                  </app-number-field>\n\n                </div>\n\n                <!--Form field for enumeration-->\n\n                <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Enumeration'\"\n                     style=\"margin-bottom:0px;\">\n                  <app-dropdown [property]=\"property\"\n                                (addControl)= \"addControl($event)\" >\n                  </app-dropdown>\n\n                </div>\n\n                <!--Form field for Measure Datatype-->\n\n                <div class=\"form-group col-sm-6\"\n                     *ngIf=\"property && property.dataType=='Measure'\"\n                     style=\"margin-bottom:0;padding-right: 0;\">\n\n\n\n                  <app-measure\n                    [property]=\"property\"\n                    (addControl)= \"addControl($event)\" >\n                  </app-measure>\n\n                </div>\n              </ng-container>\n\n            </div>\n\n            <div>\n              <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n            </div>\n            <div class=\"btn btn-toolbar\">\n              <button mat-button\n                      *ngIf=\"i > 0\"\n                      (click)=\"prevStep()\">\n                Back\n              </button>\n              <button\n                mat-button\n                [disabled]=\"!stepControl.value.valid\"\n                (click)=\"nextStep()\"\n                *ngIf=\"i < uiSchema.totalSteps-1\">\n                Next\n              </button>\n\n              <button\n                mat-raised-button\n                type=\"button\"\n                color=\"primary\"\n                *ngIf= \"i === uiSchema.totalSteps-1\"\n                (click)=\"formValue()\"\n                [disabled]=\"!formGroup.valid\">\n                Submit\n              </button>\n            </div>\n\n          </form>\n\n        </mat-expansion-panel>\n\n      </ng-container>\n\n    </mat-accordion>\n  </div>\n\n</div>\n",
            styles: ["::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}.asterik{color:red}.ex-form{background:#fff;box-shadow:0 1px 2px 2px rgba(0,0,0,.14);padding:30px}.padding-right-zero{padding-right:0}.padding-zero{padding:0}mat-expansion-panel{margin-bottom:20px}"]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], AccordianComponent);
    return AccordianComponent;
}());
export { AccordianComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaWFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9leC1mb3JtL3ZpZXdlci9ncm91cC9hY2NvcmRpYW4vYWNjb3JkaWFuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxXQUFXLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFPdkI7SUFLRSw0QkFBb0IsV0FBd0I7UUFBNUMsaUJBQ0M7UUFEbUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKNUMsY0FBUyxHQUFjLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELFNBQUksR0FBRyxDQUFDLENBQUM7UUFtQlQsZUFBVSxHQUFHLFVBQUMsSUFBSTtZQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBSTtnQkFDL0IsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUMsS0FBSztvQkFDN0MsT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksWUFBWSxFQUFFO29CQUNoQixJQUFNLEVBQUUsR0FBUSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNwQyxLQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLENBQUM7aUJBQ3pDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFFRCxjQUFTLEdBQUc7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUE7UUFFRCxVQUFLLEdBQUc7WUFDTixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQTtJQWxDRCxDQUFDO0lBQ0QscUNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0Qsd0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBRSwrREFBK0Q7SUFDL0csQ0FBQztJQXlCRCxvQ0FBTyxHQUFQLFVBQVEsS0FBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQWxEUTtRQUFSLEtBQUssRUFBRTs7d0RBQWU7SUFIWixrQkFBa0I7UUFMOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIscytJQUF5Qzs7U0FFMUMsQ0FBQztpREFNaUMsV0FBVztPQUxqQyxrQkFBa0IsQ0FzRDlCO0lBQUQseUJBQUM7Q0FBQSxBQXRERCxJQXNEQztTQXREWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1hY2NvcmRpYW5cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9hY2NvcmRpYW4uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2FjY29yZGlhbi5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlhbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHt9KTtcbiAgc3RlcCA9IDA7XG4gIEBJbnB1dCgpIHVpU2NoZW1hOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlVJIFNjaGVtYVwiLCB0aGlzLnVpU2NoZW1hKTtcbiAgICBjb25zdCBhbGxTdGVwcyA9IFtdO1xuICAgIGNvbnN0IHN0ZXBzID0gXy5yYW5nZSh0aGlzLnVpU2NoZW1hLnRvdGFsU3RlcHMpO1xuICAgIHN0ZXBzLmZvckVhY2goKHN0ZXApID0+IHtcbiAgICAgIGFsbFN0ZXBzW3N0ZXBdID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7fSk7XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGFsbFN0ZXBzKTtcbiAgfVxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe30pOyAgLy8gd2hlbiB1aSBvciBtb2RlbCBmb3JtU2NoZW1hIGNoYW5nZXMgcmUgaW5pdGlhbGl6ZSBmb3JtIGdyb3VwXG4gIH1cblxuXG4gIGFkZENvbnRyb2wgPSAoZGF0YSkgPT4ge1xuICAgIF8uZWFjaCh0aGlzLnVpU2NoZW1hLnN0ZXBzLCAoc3RlcCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlZEZpZWxkID0gXy5maW5kKHN0ZXAuZmllbGRzLCAoZmllbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLm5hbWUgPT09IGRhdGEua2V5O1xuICAgICAgfSk7XG4gICAgICBpZiAobWF0Y2hlZEZpZWxkKSB7XG4gICAgICAgIGNvbnN0IGZjOiBhbnkgPSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tzdGVwLnNlcXVlbmNlIC0gMV07XG4gICAgICAgIGZjLmFkZENvbnRyb2woZGF0YS5rZXksIGRhdGEudmFsdWUpO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmb3JtVmFsdWUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXAuZ2V0UmF3VmFsdWUoKSk7XG4gIH1cblxuICByZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1Hcm91cC5yZXNldCgpO1xuICB9XG5cblxuICBzZXRTdGVwKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0ZXAgPSBpbmRleDtcbiAgfVxuXG4gIG5leHRTdGVwKCkge1xuICAgIHRoaXMuc3RlcCsrO1xuICB9XG5cbiAgcHJldlN0ZXAoKSB7XG4gICAgdGhpcy5zdGVwLS07XG4gIH1cbn1cbiJdfQ==
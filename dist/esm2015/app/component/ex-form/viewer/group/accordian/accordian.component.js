import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import _ from "lodash";
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
export { AccordianComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaWFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9leC1mb3JtL3ZpZXdlci9ncm91cC9hY2NvcmRpYW4vYWNjb3JkaWFuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxXQUFXLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFPdkIsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFLN0IsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKNUMsY0FBUyxHQUFjLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELFNBQUksR0FBRyxDQUFDLENBQUM7UUFtQlQsZUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNuQyxNQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDakQsT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksWUFBWSxFQUFFO29CQUNoQixNQUFNLEVBQUUsR0FBUSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLENBQUM7aUJBQ3pDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFFRCxjQUFTLEdBQUcsR0FBRyxFQUFFO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFBO1FBRUQsVUFBSyxHQUFHLEdBQUcsRUFBRTtZQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFBO0lBbENELENBQUM7SUFDRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUUsK0RBQStEO0lBQy9HLENBQUM7SUF5QkQsT0FBTyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Q0FDRixDQUFBO0FBbkRVO0lBQVIsS0FBSyxFQUFFOztvREFBZTtBQUhaLGtCQUFrQjtJQUw5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6QixzK0lBQXlDOztLQUUxQyxDQUFDOzZDQU1pQyxXQUFXO0dBTGpDLGtCQUFrQixDQXNEOUI7U0F0RFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtYWNjb3JkaWFuXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYWNjb3JkaWFuLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9hY2NvcmRpYW4uY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpYW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7fSk7XG4gIHN0ZXAgPSAwO1xuICBASW5wdXQoKSB1aVNjaGVtYTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJVSSBTY2hlbWFcIiwgdGhpcy51aVNjaGVtYSk7XG4gICAgY29uc3QgYWxsU3RlcHMgPSBbXTtcbiAgICBjb25zdCBzdGVwcyA9IF8ucmFuZ2UodGhpcy51aVNjaGVtYS50b3RhbFN0ZXBzKTtcbiAgICBzdGVwcy5mb3JFYWNoKChzdGVwKSA9PiB7XG4gICAgICBhbGxTdGVwc1tzdGVwXSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe30pO1xuICAgIH0pO1xuICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cChhbGxTdGVwcyk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHt9KTsgIC8vIHdoZW4gdWkgb3IgbW9kZWwgZm9ybVNjaGVtYSBjaGFuZ2VzIHJlIGluaXRpYWxpemUgZm9ybSBncm91cFxuICB9XG5cblxuICBhZGRDb250cm9sID0gKGRhdGEpID0+IHtcbiAgICBfLmVhY2godGhpcy51aVNjaGVtYS5zdGVwcywgKHN0ZXApID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZWRGaWVsZCA9IF8uZmluZChzdGVwLmZpZWxkcywgKGZpZWxkKSA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC5uYW1lID09PSBkYXRhLmtleTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG1hdGNoZWRGaWVsZCkge1xuICAgICAgICBjb25zdCBmYzogYW55ID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbc3RlcC5zZXF1ZW5jZSAtIDFdO1xuICAgICAgICBmYy5hZGRDb250cm9sKGRhdGEua2V5LCBkYXRhLnZhbHVlKTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9ybVZhbHVlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLmdldFJhd1ZhbHVlKCkpO1xuICB9XG5cbiAgcmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5mb3JtR3JvdXAucmVzZXQoKTtcbiAgfVxuXG5cbiAgc2V0U3RlcChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGVwID0gaW5kZXg7XG4gIH1cblxuICBuZXh0U3RlcCgpIHtcbiAgICB0aGlzLnN0ZXArKztcbiAgfVxuXG4gIHByZXZTdGVwKCkge1xuICAgIHRoaXMuc3RlcC0tO1xuICB9XG59XG4iXX0=
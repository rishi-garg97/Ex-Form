import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import _ from "lodash";
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
export { TabComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3Vsci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvY29tcG9uZW50L2V4LWZvcm0vdmlld2VyL2dyb3VwL3RhYnMvdGFiL3RhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBT3ZCLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFJdkIsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFINUMsY0FBUyxHQUFjLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBYWxELHVCQUFrQixHQUFHLEdBQUcsRUFBRTtZQUN4QixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDcEIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUE7UUFHRCxlQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ25DLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUNqRCxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLE1BQU0sRUFBRSxHQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzNELEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztpQkFDekM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTtRQUVELGNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUE7UUFFRCxVQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUE7SUF0Q0QsQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Q0FtQ0YsQ0FBQTtBQTdDVTtJQUFSLEtBQUssRUFBRTs7OENBQWU7QUFGWixZQUFZO0lBTHhCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLGdpSUFBbUM7O0tBRXBDLENBQUM7NkNBS2lDLFdBQVc7R0FKakMsWUFBWSxDQStDeEI7U0EvQ1ksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLXRhYlwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3RhYi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdGFiLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe30pO1xuICBASW5wdXQoKSB1aVNjaGVtYTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5idWlsZFN0ZXBGb3JtR3JvdXAoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuYnVpbGRTdGVwRm9ybUdyb3VwKCk7XG4gIH1cblxuICBidWlsZFN0ZXBGb3JtR3JvdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsU3RlcHMgPSBbXTtcbiAgICBjb25zdCBzdGVwcyA9IF8ucmFuZ2UodGhpcy51aVNjaGVtYS50b3RhbFN0ZXBzKTtcbiAgICBzdGVwcy5mb3JFYWNoKChzdGVwKSA9PiB7XG4gICAgICBhbGxTdGVwc1tzdGVwXSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe30pO1xuICAgIH0pO1xuICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cChhbGxTdGVwcyk7XG4gIH1cblxuXG4gIGFkZENvbnRyb2wgPSAoZGF0YSkgPT4ge1xuICAgIF8uZWFjaCh0aGlzLnVpU2NoZW1hLnN0ZXBzLCAoc3RlcCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlZEZpZWxkID0gXy5maW5kKHN0ZXAuZmllbGRzLCAoZmllbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLm5hbWUgPT09IGRhdGEua2V5O1xuICAgICAgfSk7XG4gICAgICBpZiAobWF0Y2hlZEZpZWxkKSB7XG4gICAgICAgIGNvbnN0IGZjOiBhbnkgPSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tzdGVwLnNlcXVlbmNlIC0gMV07XG4gICAgICAgIGZjLmFkZENvbnRyb2woZGF0YS5rZXksIGRhdGEudmFsdWUpO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmb3JtVmFsdWUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXAuZ2V0UmF3VmFsdWUoKSk7XG4gIH1cblxuICByZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLmZvcm1Hcm91cC5yZXNldCgpO1xuICB9XG5cblxuXG59XG4iXX0=
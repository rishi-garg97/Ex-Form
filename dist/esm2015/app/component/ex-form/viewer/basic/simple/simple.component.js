import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
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
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], SimpleComponent.prototype, "uiSchema", void 0);
SimpleComponent = tslib_1.__decorate([
    Component({
        selector: "app-simple",
        template: "<div>\n  <form [formGroup]=\"formGroup\" class=\"ex-form\">\n    <h5>{{uiSchema.name}}</h5>\n    <div class=\"row\">\n      <ng-container *ngFor=\"let property of uiSchema.fields; let i=index;\">\n        <!--Form field for text input  -->\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='String'\">\n          <app-text-field [property]=\"property\"\n                          (addControl)= \"addControl($event)\" >\n          </app-text-field>\n        </div>\n\n\n        <!--Form field for password input  -->\n\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Password'\">\n\n          <app-password-field  [property]=\"property\"\n                               (addControl)= \"addControl($event)\" >\n          </app-password-field>\n        </div>\n\n        <!--Form field for email input  -->\n\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Email'\">\n\n          <app-email-field  [property]=\"property\"\n                            (addControl)= \"addControl($event)\" >\n          </app-email-field>\n        </div>\n\n        <!--Form field for number input  -->\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n          <app-number-field [property]=\"property\"\n                            (addControl)= \"addControl($event)\" >\n          </app-number-field>\n\n        </div>\n        <!--Form field for enumeration-->\n\n        <div class=\"form-group col-sm-6\" *ngIf=\"property && property.dataType=='Enumeration'\"\n             style=\"margin-bottom:0px;\">\n          <app-dropdown [property]=\"property\"\n                        (addControl)= \"addControl($event)\" >\n          </app-dropdown>\n\n        </div>\n\n\n\n        <div class=\"form-group col-sm-6\"\n             *ngIf=\"property && property.dataType=='Measure'\"\n             style=\"margin-bottom:0;\n                    padding-right:0;\">\n\n\n          <app-measure\n            [property]=\"property\"\n            (addControl)= \"addControl($event)\" >\n          </app-measure>\n\n        </div>\n\n      </ng-container>\n    </div>\n\n    <div>\n      <p style=\"font-size:13px;\"><span class=\"asterik\" style=\"font-size:16px;\">* </span>field are mandatory</p>\n    </div>\n    <div class=\"btn btn-toolbar\">\n\n      <button type=\"button\" class=\"btn btn-primary\" (click)= \"getFormValue()\" [disabled]=\"!formGroup.valid\">Submit</button>\n      &nbsp; &nbsp;\n\n      <button type=\"button\" (click)=\"reset()\" class=\"btn btn-primary\">Reset</button>\n    </div>\n\n  </form>\n\n</div>\n",
        styles: [".jumbotron{background-color:#f8f9fa;padding:15px;margin-top:56px}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}.asterik{color:red}.ex-form{background:#fff;box-shadow:0 2px 6px 4px rgba(0,0,0,.14);border-radius:15px;padding:20px}.padding-right-zero{padding-right:0}.padding-zero{padding:0}"]
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder])
], SimpleComponent);
export { SimpleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9leC1mb3JtL3ZpZXdlci9iYXNpYy9zaW1wbGUvc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFPdEQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUkxQixZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUg1QyxjQUFTLEdBQWMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFhbEQsZUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzFDLENBQUMsQ0FBQTtRQUNELGlCQUFZLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQTtRQUVELFVBQUssR0FBRyxHQUFHLEVBQUU7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQTtJQXBCRCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLCtEQUErRDtJQUM5RyxDQUFDO0NBZUYsQ0FBQTtBQXpCVTtJQUFSLEtBQUssRUFBRTs7aURBQVU7QUFGUCxlQUFlO0lBTDNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLDBvRkFBc0M7O0tBRXZDLENBQUM7NkNBS2lDLFdBQVc7R0FKakMsZUFBZSxDQTJCM0I7U0EzQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLXNpbXBsZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3NpbXBsZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vc2ltcGxlLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe30pO1xuICBASW5wdXQoKSB1aVNjaGVtYTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe30pOyAvLyB3aGVuIHVpIG9yIG1vZGVsIGZvcm1TY2hlbWEgY2hhbmdlcyByZSBpbml0aWFsaXplIGZvcm0gZ3JvdXBcbiAgfVxuXG4gIGFkZENvbnRyb2wgPSAoZGF0YSkgPT4ge1xuICAgIHRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2woZGF0YS5rZXksIGRhdGEudmFsdWUpO1xuICAgIHRoaXMuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgfVxuICBnZXRGb3JtVmFsdWUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXAuZ2V0UmF3VmFsdWUoKSk7XG4gIH1cblxuICByZXNldCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cCk7XG4gICAgdGhpcy5mb3JtR3JvdXAucmVzZXQoKTtcbiAgfVxuXG59XG4iXX0=
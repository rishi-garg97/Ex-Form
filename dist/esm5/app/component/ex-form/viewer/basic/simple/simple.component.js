import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
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
    return SimpleComponent;
}());
export { SimpleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9leC1mb3JtL3ZpZXdlci9iYXNpYy9zaW1wbGUvc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFPdEQ7SUFJRSx5QkFBb0IsV0FBd0I7UUFBNUMsaUJBQ0M7UUFEbUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFINUMsY0FBUyxHQUFjLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBYWxELGVBQVUsR0FBRyxVQUFDLElBQUk7WUFDaEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzFDLENBQUMsQ0FBQTtRQUNELGlCQUFZLEdBQUc7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUE7UUFFRCxVQUFLLEdBQUc7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQTtJQXBCRCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLCtEQUErRDtJQUM5RyxDQUFDO0lBVlE7UUFBUixLQUFLLEVBQUU7O3FEQUFVO0lBRlAsZUFBZTtRQUwzQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0Qiwwb0ZBQXNDOztTQUV2QyxDQUFDO2lEQUtpQyxXQUFXO09BSmpDLGVBQWUsQ0EyQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTNCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtc2ltcGxlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vc2ltcGxlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zaW1wbGUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7fSk7XG4gIEBJbnB1dCgpIHVpU2NoZW1hO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7fSk7IC8vIHdoZW4gdWkgb3IgbW9kZWwgZm9ybVNjaGVtYSBjaGFuZ2VzIHJlIGluaXRpYWxpemUgZm9ybSBncm91cFxuICB9XG5cbiAgYWRkQ29udHJvbCA9IChkYXRhKSA9PiB7XG4gICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbChkYXRhLmtleSwgZGF0YS52YWx1ZSk7XG4gICAgdGhpcy5mb3JtR3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICB9XG4gIGdldEZvcm1WYWx1ZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cC5nZXRSYXdWYWx1ZSgpKTtcbiAgfVxuXG4gIHJlc2V0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5yZXNldCgpO1xuICB9XG5cbn1cbiJdfQ==
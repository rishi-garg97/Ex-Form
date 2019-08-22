import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { RequiredValidator } from "../../validators/required-validator";
import { ValidationMessageGeneratorService } from "../../validators/validation-message-generator.service";
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
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], DropdownComponent.prototype, "property", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], DropdownComponent.prototype, "addControl", void 0);
DropdownComponent = tslib_1.__decorate([
    Component({
        selector: "app-dropdown",
        template: "<div [formGroup]=\"formGroup\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n    <mat-select formControlName={{property.name}} multiple={{property.array}}>\n      <mat-option *ngIf=\"!property.array\">Select</mat-option>\n      <mat-option *ngFor=\"let opt of property.values\" [value]=\"opt\">\n        {{opt}}\n      </mat-option>\n    </mat-select>\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n\n</div>\n",
        styles: [".mat-form-field{width:100%}.asterik{color:red}"]
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, ValidationMessageGeneratorService])
], DropdownComponent);
export { DropdownComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnQvZXgtZm9ybS9mb3JtLWZpZWxkL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQVksV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFFdEUsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sdURBQXVELENBQUM7QUFNeEcsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFLNUIsWUFBb0IsV0FBd0IsRUFBVSwwQkFBNkQ7UUFBL0YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQW1DO1FBRmxHLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBbUNqRCxhQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JGLENBQUMsQ0FBQTtJQWxDRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWTtRQUVWLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUU3QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQzFCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDaEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDN0Qsa0RBQWtEO1lBQ2xELG9CQUFvQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUN6QjthQUFNO1lBQ0wsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUMxQztRQUdELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQ3JDLEVBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFDLEVBQUUsVUFBVSxDQUFDLEVBQUMsQ0FDaEcsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7SUFFekUsQ0FBQztDQUlGLENBQUE7QUF2Q1U7SUFBUixLQUFLLEVBQUU7O21EQUFVO0FBQ1I7SUFBVCxNQUFNLEVBQUU7O3FEQUF3QztBQUh0QyxpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsMm1CQUF3Qzs7S0FFekMsQ0FBQzs2Q0FNaUMsV0FBVyxFQUFzQyxpQ0FBaUM7R0FMeEcsaUJBQWlCLENBeUM3QjtTQXpDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtSZXF1aXJlZFZhbGlkYXRvcn0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvcnMvcmVxdWlyZWQtdmFsaWRhdG9yXCI7XG5pbXBvcnQgc2V0ID0gUmVmbGVjdC5zZXQ7XG5pbXBvcnQge1ZhbGlkYXRpb25NZXNzYWdlR2VuZXJhdG9yU2VydmljZX0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvcnMvdmFsaWRhdGlvbi1tZXNzYWdlLWdlbmVyYXRvci5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWRyb3Bkb3duXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZHJvcGRvd24uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2Ryb3Bkb3duLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgcHJvcGVydHk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgYWRkQ29udHJvbCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSB2YWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvcjogVmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3JTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZFZhbGlkYXRvcigpO1xuICB9XG5cbiAgYWRkVmFsaWRhdG9yKCkge1xuXG4gICAgY29uc3QgdmFsaWRhdG9ycyA9IFtdO1xuICAgIGxldCBkcm9wRG93bmluaXRpYWxWYWx1ZSA9IFwiXCI7XG4gICAgbGV0IGRyb3B3RG93bkRpc2FibGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnByb3BlcnR5LnJlcXVpcmVkKSB7XG4gICAgICB2YWxpZGF0b3JzLnB1c2gobmV3IFJlcXVpcmVkVmFsaWRhdG9yKCkuZ2V0KCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BlcnR5LnZhbHVlcyAmJiB0aGlzLnByb3BlcnR5LnZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIHNldFVuaXRWYWx1ZS5zZXRWYWx1ZSh0aGlzLnByb3BlcnR5LnZhbHVlc1swXSk7XG4gICAgICBkcm9wRG93bmluaXRpYWxWYWx1ZSA9IHRoaXMucHJvcGVydHkudmFsdWVzWzBdO1xuICAgICAgZHJvcHdEb3duRGlzYWJsZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRyb3B3RG93bkRpc2FibGUgPSAhdGhpcy5wcm9wZXJ0eS5lbmFibGU7XG4gICAgfVxuXG5cbiAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoXG4gICAgICB7W3RoaXMucHJvcGVydHkubmFtZV06IFt7dmFsdWU6IGRyb3BEb3duaW5pdGlhbFZhbHVlLCBkaXNhYmxlZDogZHJvcHdEb3duRGlzYWJsZX0sIHZhbGlkYXRvcnNdfVxuICAgICk7XG4gICAgdGhpcy5mb3JtR3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHRoaXMuYWRkQ29udHJvbC5lbWl0KHtrZXk6IHRoaXMucHJvcGVydHkubmFtZSwgdmFsdWU6IHRoaXMuZm9ybUdyb3VwfSk7XG5cbiAgfVxuICBnZXRFcnJvciA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvci5lcnJvck1lc3NhZ2UodGhpcy5mb3JtR3JvdXAsIHRoaXMucHJvcGVydHkpO1xuICB9XG59XG4iXX0=
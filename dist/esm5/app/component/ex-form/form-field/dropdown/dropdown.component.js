import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { RequiredValidator } from "../../validators/required-validator";
import { ValidationMessageGeneratorService } from "../../validators/validation-message-generator.service";
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent(formBuilder, validationMessageGenerator) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.validationMessageGenerator = validationMessageGenerator;
        this.addControl = new EventEmitter();
        this.getError = function () {
            return _this.validationMessageGenerator.errorMessage(_this.formGroup, _this.property);
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
        this.formGroup = this.formBuilder.group((_a = {}, _a[this.property.name] = [{ value: dropDowninitialValue, disabled: dropwDownDisable }, validators], _a));
        this.formGroup.updateValueAndValidity();
        this.addControl.emit({ key: this.property.name, value: this.formGroup });
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
    return DropdownComponent;
}());
export { DropdownComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFZLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBRXRFLE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBTXhHO0lBS0UsMkJBQW9CLFdBQXdCLEVBQVUsMEJBQTZEO1FBQW5ILGlCQUNDO1FBRG1CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFtQztRQUZsRyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQW1DakQsYUFBUSxHQUFHO1lBQ1QsT0FBTyxLQUFJLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JGLENBQUMsQ0FBQTtJQWxDRCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsd0NBQVksR0FBWjs7UUFFRSxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxvQkFBb0IsR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFN0IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUMxQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdELGtEQUFrRDtZQUNsRCxvQkFBb0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDekI7YUFBTTtZQUNMLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDMUM7UUFHRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxXQUNwQyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFDLEVBQUUsVUFBVSxDQUFDLE1BQy9GLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO0lBRXpFLENBQUM7SUFuQ1E7UUFBUixLQUFLLEVBQUU7O3VEQUFVO0lBQ1I7UUFBVCxNQUFNLEVBQUU7O3lEQUF3QztJQUh0QyxpQkFBaUI7UUFMN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsMm1CQUF3Qzs7U0FFekMsQ0FBQztpREFNaUMsV0FBVyxFQUFzQyxpQ0FBaUM7T0FMeEcsaUJBQWlCLENBeUM3QjtJQUFELHdCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0F6Q1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7UmVxdWlyZWRWYWxpZGF0b3J9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL3JlcXVpcmVkLXZhbGlkYXRvclwiO1xuaW1wb3J0IHNldCA9IFJlZmxlY3Quc2V0O1xuaW1wb3J0IHtWYWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvclNlcnZpY2V9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL3ZhbGlkYXRpb24tbWVzc2FnZS1nZW5lcmF0b3Iuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1kcm9wZG93blwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9kcm9wZG93bi5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIHByb3BlcnR5O1xuICBAT3V0cHV0KCkgcHVibGljIGFkZENvbnRyb2wgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgdmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3I6IFZhbGlkYXRpb25NZXNzYWdlR2VuZXJhdG9yU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRWYWxpZGF0b3IoKTtcbiAgfVxuXG4gIGFkZFZhbGlkYXRvcigpIHtcblxuICAgIGNvbnN0IHZhbGlkYXRvcnMgPSBbXTtcbiAgICBsZXQgZHJvcERvd25pbml0aWFsVmFsdWUgPSBcIlwiO1xuICAgIGxldCBkcm9wd0Rvd25EaXNhYmxlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5wcm9wZXJ0eS5yZXF1aXJlZCkge1xuICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBSZXF1aXJlZFZhbGlkYXRvcigpLmdldCgpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wZXJ0eS52YWx1ZXMgJiYgdGhpcy5wcm9wZXJ0eS52YWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBzZXRVbml0VmFsdWUuc2V0VmFsdWUodGhpcy5wcm9wZXJ0eS52YWx1ZXNbMF0pO1xuICAgICAgZHJvcERvd25pbml0aWFsVmFsdWUgPSB0aGlzLnByb3BlcnR5LnZhbHVlc1swXTtcbiAgICAgIGRyb3B3RG93bkRpc2FibGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkcm9wd0Rvd25EaXNhYmxlID0gIXRoaXMucHJvcGVydHkuZW5hYmxlO1xuICAgIH1cblxuXG4gICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKFxuICAgICAge1t0aGlzLnByb3BlcnR5Lm5hbWVdOiBbe3ZhbHVlOiBkcm9wRG93bmluaXRpYWxWYWx1ZSwgZGlzYWJsZWQ6IGRyb3B3RG93bkRpc2FibGV9LCB2YWxpZGF0b3JzXX1cbiAgICApO1xuICAgIHRoaXMuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB0aGlzLmFkZENvbnRyb2wuZW1pdCh7a2V5OiB0aGlzLnByb3BlcnR5Lm5hbWUsIHZhbHVlOiB0aGlzLmZvcm1Hcm91cH0pO1xuXG4gIH1cbiAgZ2V0RXJyb3IgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3IuZXJyb3JNZXNzYWdlKHRoaXMuZm9ybUdyb3VwLCB0aGlzLnByb3BlcnR5KTtcbiAgfVxufVxuIl19
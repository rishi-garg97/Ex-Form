import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { RequiredValidator } from "../../validators/required-validator";
import { MaxValueValidator } from "../../validators/max-value-validator";
import { MinValueValidator } from "../../validators/min-value-validator";
import { PatternValidator } from "../../validators/pattern-validator";
import { ValidationMessageGeneratorService } from "../../validators/validation-message-generator.service";
var NumberFieldComponent = /** @class */ (function () {
    function NumberFieldComponent(formBuilder, validationMessageGenerator) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.validationMessageGenerator = validationMessageGenerator;
        this.addControl = new EventEmitter();
        this.addValidator = function () {
            var _a;
            var validators = [];
            if (_this.property.required) {
                validators.push(new RequiredValidator().get());
            }
            if (_this.property.max && _this.property.max != null) {
                validators.push(new MaxValueValidator().get(_this.property.max));
            }
            if (_this.property.max && _this.property.min != null) {
                validators.push(new MinValueValidator().get(_this.property.min));
            }
            if (_this.property.pattern && _this.property.pattern != null) {
                validators.push(new PatternValidator().get(_this.property.pattern));
            }
            _this.formGroup = _this.formBuilder.group((_a = {}, _a[_this.property.name] = [{ value: "", disabled: !_this.property.enable }, validators], _a));
            _this.formGroup.updateValueAndValidity();
            _this.addControl.emit({ key: _this.property.name, value: _this.formGroup });
        };
        this.getError = function () {
            return _this.validationMessageGenerator.errorMessage(_this.formGroup, _this.property);
        };
    }
    NumberFieldComponent.prototype.ngOnInit = function () {
        this.addValidator();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NumberFieldComponent.prototype, "property", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NumberFieldComponent.prototype, "addControl", void 0);
    NumberFieldComponent = tslib_1.__decorate([
        Component({
            selector: "app-number-field",
            template: "<div [formGroup]=\"formGroup\">\n\n  <mat-form-field appearance=\"outline\">\n    <mat-label>\n      {{property.alias}}\n      <span *ngIf=\"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n      <input  matInput\n              formControlName={{property.name}}\n              type=\"number\"\n              [attr.min] = \"property.min ? null : property.min\"\n              [attr.max] = \"property.max ? null : property.max\"\n              placeholder={{property.alias}}>\n    <!--(change)=\"fieldValueChanged()\">-->\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">\n      {{getError()}}\n    </mat-error>\n\n  </mat-form-field>\n</div>\n\n<!--formControlName={{property.name}}-->\n",
            styles: [".mat-form-field{width:100%}.asterik{color:red}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}"]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, ValidationMessageGeneratorService])
    ], NumberFieldComponent);
    return NumberFieldComponent;
}());
export { NumberFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0tZmllbGQvbnVtYmVyL251bWJlci1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBTXhHO0lBS0UsOEJBQW9CLFdBQXdCLEVBQVUsMEJBQTZEO1FBQW5ILGlCQUF3SDtRQUFwRyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBbUM7UUFGbEcsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFRakQsaUJBQVksR0FBRzs7WUFFVCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtnQkFDMUIsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUNoRDtZQUNELElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFHO2dCQUNuRCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2pFO1lBQ0QsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUc7Z0JBQ25ELFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDakU7WUFDRCxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDMUQsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNwRTtZQUNELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFdBQUcsR0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRyxRQUFRLEVBQUUsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxFQUFFLFVBQVUsQ0FBQyxNQUFFLENBQUM7WUFDL0gsS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFHLEtBQUssRUFBRSxLQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztRQUU5RSxDQUFDLENBQUE7UUFDRCxhQUFRLEdBQUc7WUFDVCxPQUFPLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckYsQ0FBQyxDQUFBO0lBNUJzSCxDQUFDO0lBRXhILHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQVBRO1FBQVIsS0FBSyxFQUFFOzswREFBVTtJQUNSO1FBQVQsTUFBTSxFQUFFOzs0REFBd0M7SUFIdEMsb0JBQW9CO1FBTGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsa3VCQUE0Qzs7U0FFN0MsQ0FBQztpREFNaUMsV0FBVyxFQUFzQyxpQ0FBaUM7T0FMeEcsb0JBQW9CLENBdUNoQztJQUFELDJCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0F2Q1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge1JlcXVpcmVkVmFsaWRhdG9yfSBmcm9tIFwiLi4vLi4vdmFsaWRhdG9ycy9yZXF1aXJlZC12YWxpZGF0b3JcIjtcbmltcG9ydCB7TWF4VmFsdWVWYWxpZGF0b3J9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL21heC12YWx1ZS12YWxpZGF0b3JcIjtcbmltcG9ydCB7TWluVmFsdWVWYWxpZGF0b3J9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL21pbi12YWx1ZS12YWxpZGF0b3JcIjtcbmltcG9ydCB7UGF0dGVyblZhbGlkYXRvcn0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvcnMvcGF0dGVybi12YWxpZGF0b3JcIjtcbmltcG9ydCB7VmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdmFsaWRhdG9ycy92YWxpZGF0aW9uLW1lc3NhZ2UtZ2VuZXJhdG9yLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtbnVtYmVyLWZpZWxkXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbnVtYmVyLWZpZWxkLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9udW1iZXItZmllbGQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBwcm9wZXJ0eTtcbiAgQE91dHB1dCgpIHB1YmxpYyBhZGRDb250cm9sID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHZhbGlkYXRpb25NZXNzYWdlR2VuZXJhdG9yOiBWYWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvclNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRkVmFsaWRhdG9yKCk7XG4gIH1cblxuICBhZGRWYWxpZGF0b3IgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9ycyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5wcm9wZXJ0eS5yZXF1aXJlZCkge1xuICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChuZXcgUmVxdWlyZWRWYWxpZGF0b3IoKS5nZXQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcGVydHkubWF4ICYmIHRoaXMucHJvcGVydHkubWF4ICE9IG51bGwgKSB7XG4gICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBNYXhWYWx1ZVZhbGlkYXRvcigpLmdldCh0aGlzLnByb3BlcnR5Lm1heCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BlcnR5Lm1heCAmJiB0aGlzLnByb3BlcnR5Lm1pbiAhPSBudWxsICkge1xuICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChuZXcgTWluVmFsdWVWYWxpZGF0b3IoKS5nZXQodGhpcy5wcm9wZXJ0eS5taW4pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wZXJ0eS5wYXR0ZXJuICYmIHRoaXMucHJvcGVydHkucGF0dGVybiAhPSBudWxsKSB7XG4gICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBQYXR0ZXJuVmFsaWRhdG9yKCkuZ2V0KHRoaXMucHJvcGVydHkucGF0dGVybikpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7IFt0aGlzLnByb3BlcnR5Lm5hbWVdIDogW3t2YWx1ZTogXCJcIiAsIGRpc2FibGVkOiAhdGhpcy5wcm9wZXJ0eS5lbmFibGV9LCB2YWxpZGF0b3JzXX0pO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIHRoaXMuYWRkQ29udHJvbC5lbWl0KHtrZXk6IHRoaXMucHJvcGVydHkubmFtZSAsIHZhbHVlOiB0aGlzLmZvcm1Hcm91cH0pO1xuXG4gIH1cbiAgZ2V0RXJyb3IgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3IuZXJyb3JNZXNzYWdlKHRoaXMuZm9ybUdyb3VwLCB0aGlzLnByb3BlcnR5KTtcbiAgfVxuXG4gIC8vIGZpZWxkVmFsdWVDaGFuZ2VkID0gKCkgPT4ge1xuICAvLyAgIHRoaXMuY2hhbmdlRXZlbnQuZW1pdCh0aGlzLmZvcm1GaWVsZENvbnRyb2wudmFsdWUpO1xuICAvLyB9XG5cbn1cbiJdfQ==
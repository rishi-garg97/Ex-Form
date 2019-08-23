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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3Vsci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9udW1iZXIvbnVtYmVyLWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sdURBQXVELENBQUM7QUFNeEc7SUFLRSw4QkFBb0IsV0FBd0IsRUFBVSwwQkFBNkQ7UUFBbkgsaUJBQXdIO1FBQXBHLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFtQztRQUZsRyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVFqRCxpQkFBWSxHQUFHOztZQUVULElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO2dCQUMxQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUc7Z0JBQ25ELFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDakU7WUFDRCxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRztnQkFDbkQsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNqRTtZQUNELElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUMxRCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1lBQ0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssV0FBRyxHQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFHLFFBQVEsRUFBRSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLEVBQUUsVUFBVSxDQUFDLE1BQUUsQ0FBQztZQUMvSCxLQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDeEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUcsS0FBSyxFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBRTlFLENBQUMsQ0FBQTtRQUNELGFBQVEsR0FBRztZQUNULE9BQU8sS0FBSSxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRixDQUFDLENBQUE7SUE1QnNILENBQUM7SUFFeEgsdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBUFE7UUFBUixLQUFLLEVBQUU7OzBEQUFVO0lBQ1I7UUFBVCxNQUFNLEVBQUU7OzREQUF3QztJQUh0QyxvQkFBb0I7UUFMaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixrdUJBQTRDOztTQUU3QyxDQUFDO2lEQU1pQyxXQUFXLEVBQXNDLGlDQUFpQztPQUx4RyxvQkFBb0IsQ0F1Q2hDO0lBQUQsMkJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQXZDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7UmVxdWlyZWRWYWxpZGF0b3J9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL3JlcXVpcmVkLXZhbGlkYXRvclwiO1xuaW1wb3J0IHtNYXhWYWx1ZVZhbGlkYXRvcn0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvcnMvbWF4LXZhbHVlLXZhbGlkYXRvclwiO1xuaW1wb3J0IHtNaW5WYWx1ZVZhbGlkYXRvcn0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvcnMvbWluLXZhbHVlLXZhbGlkYXRvclwiO1xuaW1wb3J0IHtQYXR0ZXJuVmFsaWRhdG9yfSBmcm9tIFwiLi4vLi4vdmFsaWRhdG9ycy9wYXR0ZXJuLXZhbGlkYXRvclwiO1xuaW1wb3J0IHtWYWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvclNlcnZpY2V9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL3ZhbGlkYXRpb24tbWVzc2FnZS1nZW5lcmF0b3Iuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1udW1iZXItZmllbGRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9udW1iZXItZmllbGQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL251bWJlci1maWVsZC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlckZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIHByb3BlcnR5O1xuICBAT3V0cHV0KCkgcHVibGljIGFkZENvbnRyb2wgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgdmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3I6IFZhbGlkYXRpb25NZXNzYWdlR2VuZXJhdG9yU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRWYWxpZGF0b3IoKTtcbiAgfVxuXG4gIGFkZFZhbGlkYXRvciA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCB2YWxpZGF0b3JzID0gW107XG4gICAgICAgIGlmICh0aGlzLnByb3BlcnR5LnJlcXVpcmVkKSB7XG4gICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBSZXF1aXJlZFZhbGlkYXRvcigpLmdldCgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wZXJ0eS5tYXggJiYgdGhpcy5wcm9wZXJ0eS5tYXggIT0gbnVsbCApIHtcbiAgICAgICAgICB2YWxpZGF0b3JzLnB1c2gobmV3IE1heFZhbHVlVmFsaWRhdG9yKCkuZ2V0KHRoaXMucHJvcGVydHkubWF4KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcGVydHkubWF4ICYmIHRoaXMucHJvcGVydHkubWluICE9IG51bGwgKSB7XG4gICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBNaW5WYWx1ZVZhbGlkYXRvcigpLmdldCh0aGlzLnByb3BlcnR5Lm1pbikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BlcnR5LnBhdHRlcm4gJiYgdGhpcy5wcm9wZXJ0eS5wYXR0ZXJuICE9IG51bGwpIHtcbiAgICAgICAgICB2YWxpZGF0b3JzLnB1c2gobmV3IFBhdHRlcm5WYWxpZGF0b3IoKS5nZXQodGhpcy5wcm9wZXJ0eS5wYXR0ZXJuKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHsgW3RoaXMucHJvcGVydHkubmFtZV0gOiBbe3ZhbHVlOiBcIlwiICwgZGlzYWJsZWQ6ICF0aGlzLnByb3BlcnR5LmVuYWJsZX0sIHZhbGlkYXRvcnNdfSk7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgdGhpcy5hZGRDb250cm9sLmVtaXQoe2tleTogdGhpcy5wcm9wZXJ0eS5uYW1lICwgdmFsdWU6IHRoaXMuZm9ybUdyb3VwfSk7XG5cbiAgfVxuICBnZXRFcnJvciA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvci5lcnJvck1lc3NhZ2UodGhpcy5mb3JtR3JvdXAsIHRoaXMucHJvcGVydHkpO1xuICB9XG5cbiAgLy8gZmllbGRWYWx1ZUNoYW5nZWQgPSAoKSA9PiB7XG4gIC8vICAgdGhpcy5jaGFuZ2VFdmVudC5lbWl0KHRoaXMuZm9ybUZpZWxkQ29udHJvbC52YWx1ZSk7XG4gIC8vIH1cblxufVxuIl19
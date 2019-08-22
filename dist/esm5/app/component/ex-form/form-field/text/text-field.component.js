import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { RequiredValidator } from "../../validators/required-validator";
import { MinLengthValidator } from "../../validators/min-length-validators";
import { MaxLengthValidator } from "../../validators/max-length-validator";
import { PatternValidator } from "../../validators/pattern-validator";
import { FormBuilder } from "@angular/forms";
import { ValidationMessageGeneratorService } from "../../validators/validation-message-generator.service";
var TextFieldComponent = /** @class */ (function () {
    function TextFieldComponent(formBuilder, validationMessageGenerator) {
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
            if (_this.property.minLength && _this.property.minLength != null) {
                validators.push(new MinLengthValidator().get(_this.property.minLength));
            }
            if (_this.property.maxLength && _this.property.maxLength != null) {
                validators.push(new MaxLengthValidator().get(_this.property.maxLength));
            }
            if (_this.property.pattern && _this.property.pattern != null) {
                validators.push(new PatternValidator().get(_this.property.pattern));
            }
            _this.formGroup = _this.formBuilder.group((_a = {},
                _a[_this.property.name] = [{
                        value: "",
                        disabled: !_this.property.enable
                    }, validators],
                _a));
            _this.formGroup.updateValueAndValidity();
            _this.addControl.emit({ key: _this.property.name, value: _this.formGroup });
        };
        this.getError = function () {
            return _this.validationMessageGenerator.errorMessage(_this.formGroup, _this.property);
        };
    }
    TextFieldComponent.prototype.ngOnInit = function () {
        this.addValidator();
    };
    TextFieldComponent.prototype.ngOnChanges = function () {
        // if (this.formGroup) {
        //   this.formGroup.updateValueAndValidity();
        // }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TextFieldComponent.prototype, "property", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TextFieldComponent.prototype, "addControl", void 0);
    TextFieldComponent = tslib_1.__decorate([
        Component({
            selector: "app-text-field",
            template: "<div [formGroup]=\"formGroup\">\n   <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n  <input matInput #input\n         formControlName={{property.name}}\n         placeholder={{property.alias}}\n         type=\"text\"\n         [attr.maxlength] = \"property.maxLength ? null : property.maxLength\"\n         [attr.minlength] = \"property.minLength ? null : property.minLength\">\n\n    <mat-hint align=\"end\" *ngIf = \"property.maxLength != null\">{{input.value.length}}/{{property.maxLength}}</mat-hint>\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n</div>\n",
            styles: [".mat-form-field{width:100%}.asterik{color:red}"]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, ValidationMessageGeneratorService])
    ], TextFieldComponent);
    return TextFieldComponent;
}());
export { TextFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnQvZXgtZm9ybS9mb3JtLWZpZWxkL3RleHQvdGV4dC1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFDLFdBQVcsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBT3hHO0lBTUUsNEJBQW9CLFdBQXdCLEVBQVUsMEJBQTZEO1FBQW5ILGlCQUNDO1FBRG1CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFtQztRQUZsRyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWVqRCxpQkFBWSxHQUFHOztZQUViLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO2dCQUMxQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7Z0JBQzlELFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDeEU7WUFDRCxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtnQkFDOUQsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFrQixFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUN4RTtZQUNELElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUMxRCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1lBRUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUs7Z0JBQ3JDLEdBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUcsQ0FBQzt3QkFDckIsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsUUFBUSxFQUFFLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO3FCQUNoQyxFQUFFLFVBQVUsQ0FBQztvQkFDZCxDQUFDO1lBQ0gsS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUE7UUFFRCxhQUFRLEdBQUc7WUFDVCxPQUFPLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckYsQ0FBQyxDQUFBO0lBeENELENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx3Q0FBVyxHQUFYO1FBQ0Usd0JBQXdCO1FBQ3hCLDZDQUE2QztRQUM3QyxJQUFJO0lBQ04sQ0FBQztJQWRRO1FBQVIsS0FBSyxFQUFFOzt3REFBVTtJQUNSO1FBQVQsTUFBTSxFQUFFOzswREFBd0M7SUFKdEMsa0JBQWtCO1FBTDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsMnZCQUEwQzs7U0FFM0MsQ0FBQztpREFPaUMsV0FBVyxFQUFzQyxpQ0FBaUM7T0FOeEcsa0JBQWtCLENBZ0Q5QjtJQUFELHlCQUFDO0NBQUEsQUFoREQsSUFnREM7U0FoRFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXN9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JlcXVpcmVkVmFsaWRhdG9yfSBmcm9tIFwiLi4vLi4vdmFsaWRhdG9ycy9yZXF1aXJlZC12YWxpZGF0b3JcIjtcbmltcG9ydCB7TWluTGVuZ3RoVmFsaWRhdG9yfSBmcm9tIFwiLi4vLi4vdmFsaWRhdG9ycy9taW4tbGVuZ3RoLXZhbGlkYXRvcnNcIjtcbmltcG9ydCB7TWF4TGVuZ3RoVmFsaWRhdG9yfSBmcm9tIFwiLi4vLi4vdmFsaWRhdG9ycy9tYXgtbGVuZ3RoLXZhbGlkYXRvclwiO1xuaW1wb3J0IHtQYXR0ZXJuVmFsaWRhdG9yfSBmcm9tIFwiLi4vLi4vdmFsaWRhdG9ycy9wYXR0ZXJuLXZhbGlkYXRvclwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7VmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdmFsaWRhdG9ycy92YWxpZGF0aW9uLW1lc3NhZ2UtZ2VuZXJhdG9yLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC10ZXh0LWZpZWxkXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGV4dC1maWVsZC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdGV4dC1maWVsZC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgcHJvcGVydHk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgYWRkQ29udHJvbCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSB2YWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvcjogVmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3JTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZFZhbGlkYXRvcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgLy8gaWYgKHRoaXMuZm9ybUdyb3VwKSB7XG4gICAgLy8gICB0aGlzLmZvcm1Hcm91cC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgLy8gfVxuICB9XG5cbiAgYWRkVmFsaWRhdG9yID0gKCkgPT4ge1xuXG4gICAgY29uc3QgdmFsaWRhdG9ycyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BlcnR5LnJlcXVpcmVkKSB7XG4gICAgICB2YWxpZGF0b3JzLnB1c2gobmV3IFJlcXVpcmVkVmFsaWRhdG9yKCkuZ2V0KCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wZXJ0eS5taW5MZW5ndGggJiYgdGhpcy5wcm9wZXJ0eS5taW5MZW5ndGggIT0gbnVsbCkge1xuICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBNaW5MZW5ndGhWYWxpZGF0b3IoKS5nZXQodGhpcy5wcm9wZXJ0eS5taW5MZW5ndGgpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcGVydHkubWF4TGVuZ3RoICYmIHRoaXMucHJvcGVydHkubWF4TGVuZ3RoICE9IG51bGwpIHtcbiAgICAgIHZhbGlkYXRvcnMucHVzaChuZXcgTWF4TGVuZ3RoVmFsaWRhdG9yKCkuZ2V0KHRoaXMucHJvcGVydHkubWF4TGVuZ3RoKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BlcnR5LnBhdHRlcm4gJiYgdGhpcy5wcm9wZXJ0eS5wYXR0ZXJuICE9IG51bGwpIHtcbiAgICAgIHZhbGlkYXRvcnMucHVzaChuZXcgUGF0dGVyblZhbGlkYXRvcigpLmdldCh0aGlzLnByb3BlcnR5LnBhdHRlcm4pKTtcbiAgICB9XG5cbiAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgW3RoaXMucHJvcGVydHkubmFtZV06IFt7XG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICBkaXNhYmxlZDogIXRoaXMucHJvcGVydHkuZW5hYmxlXG4gICAgICB9LCB2YWxpZGF0b3JzXVxuICAgIH0pO1xuICAgIHRoaXMuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB0aGlzLmFkZENvbnRyb2wuZW1pdCh7a2V5OiB0aGlzLnByb3BlcnR5Lm5hbWUsIHZhbHVlOiB0aGlzLmZvcm1Hcm91cH0pO1xuICB9XG5cbiAgZ2V0RXJyb3IgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3IuZXJyb3JNZXNzYWdlKHRoaXMuZm9ybUdyb3VwLCB0aGlzLnByb3BlcnR5KTtcbiAgfVxufVxuIl19
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RequiredValidator } from "../../validators/required-validator";
import { MaxLengthValidator } from "../../validators/max-length-validator";
import { PatternValidator } from "../../validators/pattern-validator";
import { MinLengthValidator } from "../../validators/min-length-validators";
import { FormBuilder } from "@angular/forms";
import { ValidationMessageGeneratorService } from "../../validators/validation-message-generator.service";
var PasswordFieldComponent = /** @class */ (function () {
    function PasswordFieldComponent(formBuilder, validationMessageGenerator) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.validationMessageGenerator = validationMessageGenerator;
        this.addControl = new EventEmitter();
        this.addValidator = function () {
            // validators.push(new RequiredValidator());
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
            _this.formGroup = _this.formBuilder.group((_a = {}, _a[_this.property.name] = [{ value: "", disabled: !_this.property.enable }, validators], _a));
            _this.formGroup.updateValueAndValidity();
            _this.addControl.emit({ key: _this.property.name, value: _this.formGroup });
        };
        this.getError = function () {
            return _this.validationMessageGenerator.errorMessage(_this.formGroup, _this.property);
        };
    }
    PasswordFieldComponent.prototype.ngOnInit = function () {
        this.addValidator();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PasswordFieldComponent.prototype, "property", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], PasswordFieldComponent.prototype, "addControl", void 0);
    PasswordFieldComponent = tslib_1.__decorate([
        Component({
            selector: "app-password-field",
            template: "<div [formGroup]=\"formGroup\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n    <input matInput #input\n           formControlName={{property.name}}\n           placeholder={{property.alias}}\n           type=\"password\"\n           [attr.maxlength] = \"property.maxLength ? null : property.maxLength\"\n           [attr.minlength] = \"property.minLength ? null : property.minLength\" >\n\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n</div>\n",
            styles: [".mat-form-field{width:100%}.asterik{color:red}"]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, ValidationMessageGeneratorService])
    ], PasswordFieldComponent);
    return PasswordFieldComponent;
}());
export { PasswordFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9wYXNzd29yZC9wYXNzd29yZC1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFDLFdBQVcsRUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBT3hHO0lBTUUsZ0NBQW9CLFdBQXdCLEVBQVUsMEJBQTZEO1FBQW5ILGlCQUF3SDtRQUFwRyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBbUM7UUFGbEcsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFRakQsaUJBQVksR0FBRztZQUNiLDRDQUE0Qzs7WUFFNUMsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7Z0JBQzFCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDaEQ7WUFDRCxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRztnQkFDL0QsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFrQixFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUN4RTtZQUNELElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFHO2dCQUMvRCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2FBQ3hFO1lBQ0QsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQzFELFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDcEU7WUFFRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxXQUFHLEdBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUcsUUFBUSxFQUFFLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUMsRUFBRSxVQUFVLENBQUMsTUFBRyxDQUFDO1lBQ2hJLEtBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUN4QyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRyxLQUFLLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDMUUsQ0FBQyxDQUFBO1FBQ0QsYUFBUSxHQUFHO1lBQ1QsT0FBTyxLQUFJLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JGLENBQUMsQ0FBQTtJQTdCc0gsQ0FBQztJQUV4SCx5Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFQUTtRQUFSLEtBQUssRUFBRTs7NERBQVU7SUFDUjtRQUFULE1BQU0sRUFBRTs7OERBQXdDO0lBSnRDLHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLGdwQkFBOEM7O1NBRS9DLENBQUM7aURBT2lDLFdBQVcsRUFBc0MsaUNBQWlDO09BTnhHLHNCQUFzQixDQW9DbEM7SUFBRCw2QkFBQztDQUFBLEFBcENELElBb0NDO1NBcENZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UmVxdWlyZWRWYWxpZGF0b3J9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL3JlcXVpcmVkLXZhbGlkYXRvclwiO1xuaW1wb3J0IHtNYXhMZW5ndGhWYWxpZGF0b3J9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL21heC1sZW5ndGgtdmFsaWRhdG9yXCI7XG5pbXBvcnQge1BhdHRlcm5WYWxpZGF0b3J9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL3BhdHRlcm4tdmFsaWRhdG9yXCI7XG5pbXBvcnQge01pbkxlbmd0aFZhbGlkYXRvcn0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvcnMvbWluLWxlbmd0aC12YWxpZGF0b3JzXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtWYWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvclNlcnZpY2V9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL3ZhbGlkYXRpb24tbWVzc2FnZS1nZW5lcmF0b3Iuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLXBhc3N3b3JkLWZpZWxkXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFzc3dvcmQtZmllbGQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3Bhc3N3b3JkLWZpZWxkLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIHByb3BlcnR5O1xuICBAT3V0cHV0KCkgcHVibGljIGFkZENvbnRyb2wgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgdmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3I6IFZhbGlkYXRpb25NZXNzYWdlR2VuZXJhdG9yU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRWYWxpZGF0b3IoKTtcbiAgfVxuXG4gIGFkZFZhbGlkYXRvciA9ICgpID0+IHtcbiAgICAvLyB2YWxpZGF0b3JzLnB1c2gobmV3IFJlcXVpcmVkVmFsaWRhdG9yKCkpO1xuXG4gICAgY29uc3QgdmFsaWRhdG9ycyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BlcnR5LnJlcXVpcmVkKSB7XG4gICAgICB2YWxpZGF0b3JzLnB1c2gobmV3IFJlcXVpcmVkVmFsaWRhdG9yKCkuZ2V0KCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wZXJ0eS5taW5MZW5ndGggJiYgdGhpcy5wcm9wZXJ0eS5taW5MZW5ndGggIT0gbnVsbCApIHtcbiAgICAgIHZhbGlkYXRvcnMucHVzaChuZXcgTWluTGVuZ3RoVmFsaWRhdG9yKCkuZ2V0KHRoaXMucHJvcGVydHkubWluTGVuZ3RoKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BlcnR5Lm1heExlbmd0aCAmJiB0aGlzLnByb3BlcnR5Lm1heExlbmd0aCAhPSBudWxsICkge1xuICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBNYXhMZW5ndGhWYWxpZGF0b3IoKS5nZXQodGhpcy5wcm9wZXJ0eS5tYXhMZW5ndGgpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcGVydHkucGF0dGVybiAmJiB0aGlzLnByb3BlcnR5LnBhdHRlcm4gIT0gbnVsbCkge1xuICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBQYXR0ZXJuVmFsaWRhdG9yKCkuZ2V0KHRoaXMucHJvcGVydHkucGF0dGVybikpO1xuICAgIH1cblxuICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7IFt0aGlzLnByb3BlcnR5Lm5hbWVdIDogW3t2YWx1ZTogXCJcIiAsIGRpc2FibGVkOiAhdGhpcy5wcm9wZXJ0eS5lbmFibGV9LCB2YWxpZGF0b3JzXSB9KTtcbiAgICB0aGlzLmZvcm1Hcm91cC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgdGhpcy5hZGRDb250cm9sLmVtaXQoe2tleTogdGhpcy5wcm9wZXJ0eS5uYW1lICwgdmFsdWU6IHRoaXMuZm9ybUdyb3VwfSk7XG4gIH1cbiAgZ2V0RXJyb3IgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3IuZXJyb3JNZXNzYWdlKHRoaXMuZm9ybUdyb3VwLCB0aGlzLnByb3BlcnR5KTtcbiAgfVxufVxuIl19
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RequiredValidator } from "../../validators/required-validator";
import { FormBuilder, Validators } from "@angular/forms";
import { ValidationMessageGeneratorService } from "../../validators/validation-message-generator.service";
var EmailFieldComponent = /** @class */ (function () {
    function EmailFieldComponent(formBuilder, validationMessageGenerator) {
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
            validators.push(Validators.email);
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
    EmailFieldComponent.prototype.ngOnInit = function () {
        this.addValidator();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], EmailFieldComponent.prototype, "property", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], EmailFieldComponent.prototype, "addControl", void 0);
    EmailFieldComponent = tslib_1.__decorate([
        Component({
            selector: "app-email-field",
            template: "<div [formGroup]=\"formGroup\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>{{property.alias}}\n      <span *ngIf = \"property.required\" class=\"asterik\">*</span>\n    </mat-label>\n\n    <input matInput #input\n           formControlName={{property.name}}\n           placeholder={{property.alias}}\n           type=\"email\">\n\n    <mat-error *ngIf=\"formGroup.controls[property.name].invalid\">{{getError()}}</mat-error>\n\n  </mat-form-field>\n</div>\n",
            styles: [".mat-form-field{width:100%}.asterik{color:red}"]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, ValidationMessageGeneratorService])
    ], EmailFieldComponent);
    return EmailFieldComponent;
}());
export { EmailFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9lbWFpbC9lbWFpbC1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsaUNBQWlDLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQU94RztJQUtFLDZCQUFvQixXQUF3QixFQUFVLDBCQUE2RDtRQUFuSCxpQkFDQztRQURtQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBbUM7UUFGbEcsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFTakQsaUJBQVksR0FBRzs7WUFFYixJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtnQkFDMUIsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUNoRDtZQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWxDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO2dCQUNyQyxHQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFHLENBQUM7d0JBQ3JCLEtBQUssRUFBRSxFQUFFO3dCQUNULFFBQVEsRUFBRSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtxQkFDaEMsRUFBRSxVQUFVLENBQUM7b0JBQ2QsQ0FBQztZQUNILEtBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUN4QyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFBO1FBQ0QsYUFBUSxHQUFHO1lBQ1QsT0FBTyxLQUFJLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JGLENBQUMsQ0FBQTtJQXpCRCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBUlE7UUFBUixLQUFLLEVBQUU7O3lEQUFVO0lBQ1I7UUFBVCxNQUFNLEVBQUU7OzJEQUF3QztJQUh0QyxtQkFBbUI7UUFML0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixzZUFBMkM7O1NBRTVDLENBQUM7aURBTWlDLFdBQVcsRUFBc0MsaUNBQWlDO09BTHhHLG1CQUFtQixDQWlDL0I7SUFBRCwwQkFBQztDQUFBLEFBakNELElBaUNDO1NBakNZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UmVxdWlyZWRWYWxpZGF0b3J9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL3JlcXVpcmVkLXZhbGlkYXRvclwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7VmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdmFsaWRhdG9ycy92YWxpZGF0aW9uLW1lc3NhZ2UtZ2VuZXJhdG9yLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1lbWFpbC1maWVsZFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2VtYWlsLWZpZWxkLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9lbWFpbC1maWVsZC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEVtYWlsRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgcHJvcGVydHk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgYWRkQ29udHJvbCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSB2YWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvcjogVmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3JTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZFZhbGlkYXRvcigpO1xuICB9XG5cbiAgYWRkVmFsaWRhdG9yID0gKCkgPT4ge1xuXG4gICAgY29uc3QgdmFsaWRhdG9ycyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BlcnR5LnJlcXVpcmVkKSB7XG4gICAgICB2YWxpZGF0b3JzLnB1c2gobmV3IFJlcXVpcmVkVmFsaWRhdG9yKCkuZ2V0KCkpO1xuICAgIH1cbiAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5lbWFpbCk7XG5cbiAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgW3RoaXMucHJvcGVydHkubmFtZV06IFt7XG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICBkaXNhYmxlZDogIXRoaXMucHJvcGVydHkuZW5hYmxlXG4gICAgICB9LCB2YWxpZGF0b3JzXVxuICAgIH0pO1xuICAgIHRoaXMuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB0aGlzLmFkZENvbnRyb2wuZW1pdCh7a2V5OiB0aGlzLnByb3BlcnR5Lm5hbWUsIHZhbHVlOiB0aGlzLmZvcm1Hcm91cH0pO1xuICB9XG4gIGdldEVycm9yID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlR2VuZXJhdG9yLmVycm9yTWVzc2FnZSh0aGlzLmZvcm1Hcm91cCwgdGhpcy5wcm9wZXJ0eSk7XG4gIH1cblxufVxuIl19
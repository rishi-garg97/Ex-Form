import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RequiredValidator } from "../../validators/required-validator";
import { FormBuilder, Validators } from "@angular/forms";
import { ValidationMessageGeneratorService } from "../../validators/validation-message-generator.service";
let EmailFieldComponent = class EmailFieldComponent {
    constructor(formBuilder, validationMessageGenerator) {
        this.formBuilder = formBuilder;
        this.validationMessageGenerator = validationMessageGenerator;
        this.addControl = new EventEmitter();
        this.addValidator = () => {
            const validators = [];
            if (this.property.required) {
                validators.push(new RequiredValidator().get());
            }
            validators.push(Validators.email);
            this.formGroup = this.formBuilder.group({
                [this.property.name]: [{
                        value: "",
                        disabled: !this.property.enable
                    }, validators]
            });
            this.formGroup.updateValueAndValidity();
            this.addControl.emit({ key: this.property.name, value: this.formGroup });
        };
        this.getError = () => {
            return this.validationMessageGenerator.errorMessage(this.formGroup, this.property);
        };
    }
    ngOnInit() {
        this.addValidator();
    }
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
export { EmailFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9lbWFpbC9lbWFpbC1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsaUNBQWlDLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQU94RyxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQUs5QixZQUFvQixXQUF3QixFQUFVLDBCQUE2RDtRQUEvRixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBbUM7UUFGbEcsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFTakQsaUJBQVksR0FBRyxHQUFHLEVBQUU7WUFFbEIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7Z0JBQzFCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDaEQ7WUFDRCxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzt3QkFDckIsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO3FCQUNoQyxFQUFFLFVBQVUsQ0FBQzthQUNmLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFBO1FBQ0QsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRixDQUFDLENBQUE7SUF6QkQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztDQXVCRixDQUFBO0FBL0JVO0lBQVIsS0FBSyxFQUFFOztxREFBVTtBQUNSO0lBQVQsTUFBTSxFQUFFOzt1REFBd0M7QUFIdEMsbUJBQW1CO0lBTC9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0Isc2VBQTJDOztLQUU1QyxDQUFDOzZDQU1pQyxXQUFXLEVBQXNDLGlDQUFpQztHQUx4RyxtQkFBbUIsQ0FpQy9CO1NBakNZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UmVxdWlyZWRWYWxpZGF0b3J9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL3JlcXVpcmVkLXZhbGlkYXRvclwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7VmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdmFsaWRhdG9ycy92YWxpZGF0aW9uLW1lc3NhZ2UtZ2VuZXJhdG9yLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1lbWFpbC1maWVsZFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2VtYWlsLWZpZWxkLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9lbWFpbC1maWVsZC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEVtYWlsRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgcHJvcGVydHk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgYWRkQ29udHJvbCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSB2YWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvcjogVmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3JTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZFZhbGlkYXRvcigpO1xuICB9XG5cbiAgYWRkVmFsaWRhdG9yID0gKCkgPT4ge1xuXG4gICAgY29uc3QgdmFsaWRhdG9ycyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BlcnR5LnJlcXVpcmVkKSB7XG4gICAgICB2YWxpZGF0b3JzLnB1c2gobmV3IFJlcXVpcmVkVmFsaWRhdG9yKCkuZ2V0KCkpO1xuICAgIH1cbiAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5lbWFpbCk7XG5cbiAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgW3RoaXMucHJvcGVydHkubmFtZV06IFt7XG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICBkaXNhYmxlZDogIXRoaXMucHJvcGVydHkuZW5hYmxlXG4gICAgICB9LCB2YWxpZGF0b3JzXVxuICAgIH0pO1xuICAgIHRoaXMuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB0aGlzLmFkZENvbnRyb2wuZW1pdCh7a2V5OiB0aGlzLnByb3BlcnR5Lm5hbWUsIHZhbHVlOiB0aGlzLmZvcm1Hcm91cH0pO1xuICB9XG4gIGdldEVycm9yID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlR2VuZXJhdG9yLmVycm9yTWVzc2FnZSh0aGlzLmZvcm1Hcm91cCwgdGhpcy5wcm9wZXJ0eSk7XG4gIH1cblxufVxuIl19
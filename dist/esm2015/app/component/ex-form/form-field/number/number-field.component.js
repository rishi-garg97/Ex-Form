import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { RequiredValidator } from "../../validators/required-validator";
import { MaxValueValidator } from "../../validators/max-value-validator";
import { MinValueValidator } from "../../validators/min-value-validator";
import { PatternValidator } from "../../validators/pattern-validator";
import { ValidationMessageGeneratorService } from "../../validators/validation-message-generator.service";
let NumberFieldComponent = class NumberFieldComponent {
    constructor(formBuilder, validationMessageGenerator) {
        this.formBuilder = formBuilder;
        this.validationMessageGenerator = validationMessageGenerator;
        this.addControl = new EventEmitter();
        this.addValidator = () => {
            const validators = [];
            if (this.property.required) {
                validators.push(new RequiredValidator().get());
            }
            if (this.property.max && this.property.max != null) {
                validators.push(new MaxValueValidator().get(this.property.max));
            }
            if (this.property.max && this.property.min != null) {
                validators.push(new MinValueValidator().get(this.property.min));
            }
            if (this.property.pattern && this.property.pattern != null) {
                validators.push(new PatternValidator().get(this.property.pattern));
            }
            this.formGroup = this.formBuilder.group({ [this.property.name]: [{ value: "", disabled: !this.property.enable }, validators] });
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
export { NumberFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3Vsci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9udW1iZXIvbnVtYmVyLWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sdURBQXVELENBQUM7QUFNeEcsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFLL0IsWUFBb0IsV0FBd0IsRUFBVSwwQkFBNkQ7UUFBL0YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQW1DO1FBRmxHLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBUWpELGlCQUFZLEdBQUcsR0FBRyxFQUFFO1lBRWQsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7Z0JBQzFCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDaEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRztnQkFDbkQsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNqRTtZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFHO2dCQUNuRCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2pFO1lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQzFELFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDcEU7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFHLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLEVBQUUsVUFBVSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQy9ILElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFFOUUsQ0FBQyxDQUFBO1FBQ0QsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRixDQUFDLENBQUE7SUE1QnNILENBQUM7SUFFeEgsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBOEJGLENBQUE7QUFyQ1U7SUFBUixLQUFLLEVBQUU7O3NEQUFVO0FBQ1I7SUFBVCxNQUFNLEVBQUU7O3dEQUF3QztBQUh0QyxvQkFBb0I7SUFMaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixrdUJBQTRDOztLQUU3QyxDQUFDOzZDQU1pQyxXQUFXLEVBQXNDLGlDQUFpQztHQUx4RyxvQkFBb0IsQ0F1Q2hDO1NBdkNZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtSZXF1aXJlZFZhbGlkYXRvcn0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvcnMvcmVxdWlyZWQtdmFsaWRhdG9yXCI7XG5pbXBvcnQge01heFZhbHVlVmFsaWRhdG9yfSBmcm9tIFwiLi4vLi4vdmFsaWRhdG9ycy9tYXgtdmFsdWUtdmFsaWRhdG9yXCI7XG5pbXBvcnQge01pblZhbHVlVmFsaWRhdG9yfSBmcm9tIFwiLi4vLi4vdmFsaWRhdG9ycy9taW4tdmFsdWUtdmFsaWRhdG9yXCI7XG5pbXBvcnQge1BhdHRlcm5WYWxpZGF0b3J9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL3BhdHRlcm4tdmFsaWRhdG9yXCI7XG5pbXBvcnQge1ZhbGlkYXRpb25NZXNzYWdlR2VuZXJhdG9yU2VydmljZX0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvcnMvdmFsaWRhdGlvbi1tZXNzYWdlLWdlbmVyYXRvci5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLW51bWJlci1maWVsZFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL251bWJlci1maWVsZC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbnVtYmVyLWZpZWxkLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgcHJvcGVydHk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgYWRkQ29udHJvbCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSB2YWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvcjogVmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3JTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZFZhbGlkYXRvcigpO1xuICB9XG5cbiAgYWRkVmFsaWRhdG9yID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydHkucmVxdWlyZWQpIHtcbiAgICAgICAgICB2YWxpZGF0b3JzLnB1c2gobmV3IFJlcXVpcmVkVmFsaWRhdG9yKCkuZ2V0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BlcnR5Lm1heCAmJiB0aGlzLnByb3BlcnR5Lm1heCAhPSBudWxsICkge1xuICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChuZXcgTWF4VmFsdWVWYWxpZGF0b3IoKS5nZXQodGhpcy5wcm9wZXJ0eS5tYXgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wZXJ0eS5tYXggJiYgdGhpcy5wcm9wZXJ0eS5taW4gIT0gbnVsbCApIHtcbiAgICAgICAgICB2YWxpZGF0b3JzLnB1c2gobmV3IE1pblZhbHVlVmFsaWRhdG9yKCkuZ2V0KHRoaXMucHJvcGVydHkubWluKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcGVydHkucGF0dGVybiAmJiB0aGlzLnByb3BlcnR5LnBhdHRlcm4gIT0gbnVsbCkge1xuICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChuZXcgUGF0dGVyblZhbGlkYXRvcigpLmdldCh0aGlzLnByb3BlcnR5LnBhdHRlcm4pKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoeyBbdGhpcy5wcm9wZXJ0eS5uYW1lXSA6IFt7dmFsdWU6IFwiXCIgLCBkaXNhYmxlZDogIXRoaXMucHJvcGVydHkuZW5hYmxlfSwgdmFsaWRhdG9yc119KTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICB0aGlzLmFkZENvbnRyb2wuZW1pdCh7a2V5OiB0aGlzLnByb3BlcnR5Lm5hbWUgLCB2YWx1ZTogdGhpcy5mb3JtR3JvdXB9KTtcblxuICB9XG4gIGdldEVycm9yID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlR2VuZXJhdG9yLmVycm9yTWVzc2FnZSh0aGlzLmZvcm1Hcm91cCwgdGhpcy5wcm9wZXJ0eSk7XG4gIH1cblxuICAvLyBmaWVsZFZhbHVlQ2hhbmdlZCA9ICgpID0+IHtcbiAgLy8gICB0aGlzLmNoYW5nZUV2ZW50LmVtaXQodGhpcy5mb3JtRmllbGRDb250cm9sLnZhbHVlKTtcbiAgLy8gfVxuXG59XG4iXX0=
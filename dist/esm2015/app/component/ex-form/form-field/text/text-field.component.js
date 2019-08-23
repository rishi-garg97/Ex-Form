import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { RequiredValidator } from "../../validators/required-validator";
import { MinLengthValidator } from "../../validators/min-length-validators";
import { MaxLengthValidator } from "../../validators/max-length-validator";
import { PatternValidator } from "../../validators/pattern-validator";
import { FormBuilder } from "@angular/forms";
import { ValidationMessageGeneratorService } from "../../validators/validation-message-generator.service";
let TextFieldComponent = class TextFieldComponent {
    constructor(formBuilder, validationMessageGenerator) {
        this.formBuilder = formBuilder;
        this.validationMessageGenerator = validationMessageGenerator;
        this.addControl = new EventEmitter();
        this.addValidator = () => {
            const validators = [];
            if (this.property.required) {
                validators.push(new RequiredValidator().get());
            }
            if (this.property.minLength && this.property.minLength != null) {
                validators.push(new MinLengthValidator().get(this.property.minLength));
            }
            if (this.property.maxLength && this.property.maxLength != null) {
                validators.push(new MaxLengthValidator().get(this.property.maxLength));
            }
            if (this.property.pattern && this.property.pattern != null) {
                validators.push(new PatternValidator().get(this.property.pattern));
            }
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
    ngOnChanges() {
        // if (this.formGroup) {
        //   this.formGroup.updateValueAndValidity();
        // }
    }
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
export { TextFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0tZmllbGQvdGV4dC90ZXh0LWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sdURBQXVELENBQUM7QUFPeEcsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFNN0IsWUFBb0IsV0FBd0IsRUFBVSwwQkFBNkQ7UUFBL0YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQW1DO1FBRmxHLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBZWpELGlCQUFZLEdBQUcsR0FBRyxFQUFFO1lBRWxCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO2dCQUMxQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7Z0JBQzlELFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDeEU7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtnQkFDOUQsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFrQixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUN4RTtZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUMxRCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1lBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDdEMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQ3JCLEtBQUssRUFBRSxFQUFFO3dCQUNULFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtxQkFDaEMsRUFBRSxVQUFVLENBQUM7YUFDZixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQTtRQUVELGFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckYsQ0FBQyxDQUFBO0lBeENELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXO1FBQ1Qsd0JBQXdCO1FBQ3hCLDZDQUE2QztRQUM3QyxJQUFJO0lBQ04sQ0FBQztDQStCRixDQUFBO0FBN0NVO0lBQVIsS0FBSyxFQUFFOztvREFBVTtBQUNSO0lBQVQsTUFBTSxFQUFFOztzREFBd0M7QUFKdEMsa0JBQWtCO0lBTDlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsMnZCQUEwQzs7S0FFM0MsQ0FBQzs2Q0FPaUMsV0FBVyxFQUFzQyxpQ0FBaUM7R0FOeEcsa0JBQWtCLENBZ0Q5QjtTQWhEWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlc30gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UmVxdWlyZWRWYWxpZGF0b3J9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL3JlcXVpcmVkLXZhbGlkYXRvclwiO1xuaW1wb3J0IHtNaW5MZW5ndGhWYWxpZGF0b3J9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL21pbi1sZW5ndGgtdmFsaWRhdG9yc1wiO1xuaW1wb3J0IHtNYXhMZW5ndGhWYWxpZGF0b3J9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL21heC1sZW5ndGgtdmFsaWRhdG9yXCI7XG5pbXBvcnQge1BhdHRlcm5WYWxpZGF0b3J9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL3BhdHRlcm4tdmFsaWRhdG9yXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtWYWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvclNlcnZpY2V9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL3ZhbGlkYXRpb24tbWVzc2FnZS1nZW5lcmF0b3Iuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLXRleHQtZmllbGRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi90ZXh0LWZpZWxkLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi90ZXh0LWZpZWxkLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBwcm9wZXJ0eTtcbiAgQE91dHB1dCgpIHB1YmxpYyBhZGRDb250cm9sID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHZhbGlkYXRpb25NZXNzYWdlR2VuZXJhdG9yOiBWYWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvclNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRkVmFsaWRhdG9yKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICAvLyBpZiAodGhpcy5mb3JtR3JvdXApIHtcbiAgICAvLyAgIHRoaXMuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAvLyB9XG4gIH1cblxuICBhZGRWYWxpZGF0b3IgPSAoKSA9PiB7XG5cbiAgICBjb25zdCB2YWxpZGF0b3JzID0gW107XG4gICAgaWYgKHRoaXMucHJvcGVydHkucmVxdWlyZWQpIHtcbiAgICAgIHZhbGlkYXRvcnMucHVzaChuZXcgUmVxdWlyZWRWYWxpZGF0b3IoKS5nZXQoKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BlcnR5Lm1pbkxlbmd0aCAmJiB0aGlzLnByb3BlcnR5Lm1pbkxlbmd0aCAhPSBudWxsKSB7XG4gICAgICB2YWxpZGF0b3JzLnB1c2gobmV3IE1pbkxlbmd0aFZhbGlkYXRvcigpLmdldCh0aGlzLnByb3BlcnR5Lm1pbkxlbmd0aCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wZXJ0eS5tYXhMZW5ndGggJiYgdGhpcy5wcm9wZXJ0eS5tYXhMZW5ndGggIT0gbnVsbCkge1xuICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBNYXhMZW5ndGhWYWxpZGF0b3IoKS5nZXQodGhpcy5wcm9wZXJ0eS5tYXhMZW5ndGgpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcGVydHkucGF0dGVybiAmJiB0aGlzLnByb3BlcnR5LnBhdHRlcm4gIT0gbnVsbCkge1xuICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBQYXR0ZXJuVmFsaWRhdG9yKCkuZ2V0KHRoaXMucHJvcGVydHkucGF0dGVybikpO1xuICAgIH1cblxuICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBbdGhpcy5wcm9wZXJ0eS5uYW1lXTogW3tcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgIGRpc2FibGVkOiAhdGhpcy5wcm9wZXJ0eS5lbmFibGVcbiAgICAgIH0sIHZhbGlkYXRvcnNdXG4gICAgfSk7XG4gICAgdGhpcy5mb3JtR3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHRoaXMuYWRkQ29udHJvbC5lbWl0KHtrZXk6IHRoaXMucHJvcGVydHkubmFtZSwgdmFsdWU6IHRoaXMuZm9ybUdyb3VwfSk7XG4gIH1cblxuICBnZXRFcnJvciA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvci5lcnJvck1lc3NhZ2UodGhpcy5mb3JtR3JvdXAsIHRoaXMucHJvcGVydHkpO1xuICB9XG59XG4iXX0=
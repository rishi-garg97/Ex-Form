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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0tZmllbGQvbnVtYmVyL251bWJlci1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBTXhHLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBSy9CLFlBQW9CLFdBQXdCLEVBQVUsMEJBQTZEO1FBQS9GLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFtQztRQUZsRyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVFqRCxpQkFBWSxHQUFHLEdBQUcsRUFBRTtZQUVkLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO2dCQUMxQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUc7Z0JBQ25ELFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDakU7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRztnQkFDbkQsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNqRTtZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUMxRCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1lBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRyxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxFQUFFLFVBQVUsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUMvSCxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBRTlFLENBQUMsQ0FBQTtRQUNELGFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckYsQ0FBQyxDQUFBO0lBNUJzSCxDQUFDO0lBRXhILFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztDQThCRixDQUFBO0FBckNVO0lBQVIsS0FBSyxFQUFFOztzREFBVTtBQUNSO0lBQVQsTUFBTSxFQUFFOzt3REFBd0M7QUFIdEMsb0JBQW9CO0lBTGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsa3VCQUE0Qzs7S0FFN0MsQ0FBQzs2Q0FNaUMsV0FBVyxFQUFzQyxpQ0FBaUM7R0FMeEcsb0JBQW9CLENBdUNoQztTQXZDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7UmVxdWlyZWRWYWxpZGF0b3J9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL3JlcXVpcmVkLXZhbGlkYXRvclwiO1xuaW1wb3J0IHtNYXhWYWx1ZVZhbGlkYXRvcn0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvcnMvbWF4LXZhbHVlLXZhbGlkYXRvclwiO1xuaW1wb3J0IHtNaW5WYWx1ZVZhbGlkYXRvcn0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvcnMvbWluLXZhbHVlLXZhbGlkYXRvclwiO1xuaW1wb3J0IHtQYXR0ZXJuVmFsaWRhdG9yfSBmcm9tIFwiLi4vLi4vdmFsaWRhdG9ycy9wYXR0ZXJuLXZhbGlkYXRvclwiO1xuaW1wb3J0IHtWYWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvclNlcnZpY2V9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JzL3ZhbGlkYXRpb24tbWVzc2FnZS1nZW5lcmF0b3Iuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1udW1iZXItZmllbGRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9udW1iZXItZmllbGQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL251bWJlci1maWVsZC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlckZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIHByb3BlcnR5O1xuICBAT3V0cHV0KCkgcHVibGljIGFkZENvbnRyb2wgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgdmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3I6IFZhbGlkYXRpb25NZXNzYWdlR2VuZXJhdG9yU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRWYWxpZGF0b3IoKTtcbiAgfVxuXG4gIGFkZFZhbGlkYXRvciA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCB2YWxpZGF0b3JzID0gW107XG4gICAgICAgIGlmICh0aGlzLnByb3BlcnR5LnJlcXVpcmVkKSB7XG4gICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBSZXF1aXJlZFZhbGlkYXRvcigpLmdldCgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wZXJ0eS5tYXggJiYgdGhpcy5wcm9wZXJ0eS5tYXggIT0gbnVsbCApIHtcbiAgICAgICAgICB2YWxpZGF0b3JzLnB1c2gobmV3IE1heFZhbHVlVmFsaWRhdG9yKCkuZ2V0KHRoaXMucHJvcGVydHkubWF4KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcGVydHkubWF4ICYmIHRoaXMucHJvcGVydHkubWluICE9IG51bGwgKSB7XG4gICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKG5ldyBNaW5WYWx1ZVZhbGlkYXRvcigpLmdldCh0aGlzLnByb3BlcnR5Lm1pbikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BlcnR5LnBhdHRlcm4gJiYgdGhpcy5wcm9wZXJ0eS5wYXR0ZXJuICE9IG51bGwpIHtcbiAgICAgICAgICB2YWxpZGF0b3JzLnB1c2gobmV3IFBhdHRlcm5WYWxpZGF0b3IoKS5nZXQodGhpcy5wcm9wZXJ0eS5wYXR0ZXJuKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHsgW3RoaXMucHJvcGVydHkubmFtZV0gOiBbe3ZhbHVlOiBcIlwiICwgZGlzYWJsZWQ6ICF0aGlzLnByb3BlcnR5LmVuYWJsZX0sIHZhbGlkYXRvcnNdfSk7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgdGhpcy5hZGRDb250cm9sLmVtaXQoe2tleTogdGhpcy5wcm9wZXJ0eS5uYW1lICwgdmFsdWU6IHRoaXMuZm9ybUdyb3VwfSk7XG5cbiAgfVxuICBnZXRFcnJvciA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvci5lcnJvck1lc3NhZ2UodGhpcy5mb3JtR3JvdXAsIHRoaXMucHJvcGVydHkpO1xuICB9XG5cbiAgLy8gZmllbGRWYWx1ZUNoYW5nZWQgPSAoKSA9PiB7XG4gIC8vICAgdGhpcy5jaGFuZ2VFdmVudC5lbWl0KHRoaXMuZm9ybUZpZWxkQ29udHJvbC52YWx1ZSk7XG4gIC8vIH1cblxufVxuIl19
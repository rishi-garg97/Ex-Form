import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder } from "@angular/forms";
let MeasureComponent = class MeasureComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({});
        this.addControl = new EventEmitter();
        this.newProperty = {
            measure: {}, unit: {}
        };
        this.onMeasureChange = (measureValue) => {
            const control = this.formGroup.controls[this.newProperty.unit.name];
            const values = "values";
            if (measureValue && this.property[values].length > 1) {
                control.enable();
            }
            else {
                if (this.property[values].length > 1) {
                    control.reset();
                }
                control.disable();
            }
        };
        this.addMeasureControl = (data) => {
            this.formGroup.addControl(data.key, data.value);
            this.formGroup.updateValueAndValidity();
            this.addControl.emit({ key: this.property.name, value: this.formGroup });
        };
    }
    ngOnInit() {
        this.newProperty.measure = Object.assign({}, this.property);
        this.newProperty.measure.name += "Measure";
        this.newProperty.unit = Object.assign({}, this.property);
        this.newProperty.unit.name += "Unit";
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], MeasureComponent.prototype, "property", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], MeasureComponent.prototype, "addControl", void 0);
MeasureComponent = tslib_1.__decorate([
    Component({
        selector: "app-measure",
        template: "<div class=\"row col-sm-12\" style=\"padding: 0;\">\n  <div class=\"col-sm-6\" [formGroup]=\"formGroup\" style=\"padding-right: 0;\">\n    <app-number-field\n      [property]=\"newProperty.measure\"\n      (addControl)= \"addMeasureControl($event)\" >\n    </app-number-field>\n  </div>\n\n  <div class=\"col-sm-6\" [formGroup]=\"formGroup\" style=\"padding-right: 0;\">\n\n    <app-dropdown\n      [property]=\"newProperty.unit\"\n      (addControl)=\"addMeasureControl($event)\" >\n    </app-dropdown>\n  </div>\n\n</div>\n",
        styles: [""]
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder])
], MeasureComponent);
export { MeasureComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0tZmllbGQvbWVhc3VyZS9tZWFzdXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQXlCLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT25FLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBUTNCLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUDVDLGNBQVMsR0FBYyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVqQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRCxnQkFBVyxHQUFRO1lBQ2pCLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUU7U0FDdEIsQ0FBQztRQVdGLG9CQUFlLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUNqQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwRSxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDeEIsSUFBSyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFHO2dCQUN0RCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDbEI7aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3BDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDakI7Z0JBQ0QsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ25CO1FBQ0gsQ0FBQyxDQUFBO1FBRUMsc0JBQWlCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBRTFFLENBQUMsQ0FBQTtJQTVCK0MsQ0FBQztJQUVqRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLHFCQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxxQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQztJQUV2QyxDQUFDO0NBdUJGLENBQUE7QUFyQ1U7SUFBUixLQUFLLEVBQUU7O2tEQUFVO0FBQ1I7SUFBVCxNQUFNLEVBQUU7O29EQUF3QztBQUh0QyxnQkFBZ0I7SUFMNUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIseWhCQUF1Qzs7S0FFeEMsQ0FBQzs2Q0FTaUMsV0FBVztHQVJqQyxnQkFBZ0IsQ0F1QzVCO1NBdkNZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Rm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLW1lYXN1cmVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9tZWFzdXJlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9tZWFzdXJlLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTWVhc3VyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7fSk7XG4gIEBJbnB1dCgpIHByb3BlcnR5O1xuICBAT3V0cHV0KCkgcHVibGljIGFkZENvbnRyb2wgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbmV3UHJvcGVydHk6IGFueSA9IHtcbiAgICBtZWFzdXJlOiB7fSwgdW5pdDoge31cbiAgfTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmV3UHJvcGVydHkubWVhc3VyZSA9IHsuLi50aGlzLnByb3BlcnR5fTtcbiAgICB0aGlzLm5ld1Byb3BlcnR5Lm1lYXN1cmUubmFtZSArPSBcIk1lYXN1cmVcIjtcbiAgICB0aGlzLm5ld1Byb3BlcnR5LnVuaXQgPSB7Li4udGhpcy5wcm9wZXJ0eX07XG4gICAgdGhpcy5uZXdQcm9wZXJ0eS51bml0Lm5hbWUgKz0gXCJVbml0XCI7XG5cbiAgfVxuXG4gIG9uTWVhc3VyZUNoYW5nZSA9IChtZWFzdXJlVmFsdWUpID0+IHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5uZXdQcm9wZXJ0eS51bml0Lm5hbWVdO1xuICAgIGNvbnN0IHZhbHVlcyA9IFwidmFsdWVzXCI7XG4gICAgaWYgKCBtZWFzdXJlVmFsdWUgJiYgdGhpcy5wcm9wZXJ0eVt2YWx1ZXNdLmxlbmd0aCA+IDEgKSB7XG4gICAgICBjb250cm9sLmVuYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5wcm9wZXJ0eVt2YWx1ZXNdLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29udHJvbC5yZXNldCgpO1xuICAgICAgfVxuICAgICAgY29udHJvbC5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgICBhZGRNZWFzdXJlQ29udHJvbCA9IChkYXRhKSA9PiB7XG4gICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbChkYXRhLmtleSwgZGF0YS52YWx1ZSk7XG4gICAgdGhpcy5mb3JtR3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHRoaXMuYWRkQ29udHJvbC5lbWl0KHtrZXk6IHRoaXMucHJvcGVydHkubmFtZSAsIHZhbHVlOiB0aGlzLmZvcm1Hcm91cH0pO1xuXG4gIH1cblxuXG59XG4iXX0=
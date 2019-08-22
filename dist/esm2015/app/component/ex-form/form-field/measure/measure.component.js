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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnQvZXgtZm9ybS9mb3JtLWZpZWxkL21lYXN1cmUvbWVhc3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUF5QixXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQU9uRSxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQVEzQixZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVA1QyxjQUFTLEdBQWMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFakMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQsZ0JBQVcsR0FBUTtZQUNqQixPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFO1NBQ3RCLENBQUM7UUFXRixvQkFBZSxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDakMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ3hCLElBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRztnQkFDdEQsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2xCO2lCQUFNO2dCQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNwQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2pCO2dCQUNELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNuQjtRQUNILENBQUMsQ0FBQTtRQUVDLHNCQUFpQixHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztRQUUxRSxDQUFDLENBQUE7SUE1QitDLENBQUM7SUFFakQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxxQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUkscUJBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUM7SUFFdkMsQ0FBQztDQXVCRixDQUFBO0FBckNVO0lBQVIsS0FBSyxFQUFFOztrREFBVTtBQUNSO0lBQVQsTUFBTSxFQUFFOztvREFBd0M7QUFIdEMsZ0JBQWdCO0lBTDVCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLHloQkFBdUM7O0tBRXhDLENBQUM7NkNBU2lDLFdBQVc7R0FSakMsZ0JBQWdCLENBdUM1QjtTQXZDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1tZWFzdXJlXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbWVhc3VyZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbWVhc3VyZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE1lYXN1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe30pO1xuICBASW5wdXQoKSBwcm9wZXJ0eTtcbiAgQE91dHB1dCgpIHB1YmxpYyBhZGRDb250cm9sID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG5ld1Byb3BlcnR5OiBhbnkgPSB7XG4gICAgbWVhc3VyZToge30sIHVuaXQ6IHt9XG4gIH07XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5ld1Byb3BlcnR5Lm1lYXN1cmUgPSB7Li4udGhpcy5wcm9wZXJ0eX07XG4gICAgdGhpcy5uZXdQcm9wZXJ0eS5tZWFzdXJlLm5hbWUgKz0gXCJNZWFzdXJlXCI7XG4gICAgdGhpcy5uZXdQcm9wZXJ0eS51bml0ID0gey4uLnRoaXMucHJvcGVydHl9O1xuICAgIHRoaXMubmV3UHJvcGVydHkudW5pdC5uYW1lICs9IFwiVW5pdFwiO1xuXG4gIH1cblxuICBvbk1lYXN1cmVDaGFuZ2UgPSAobWVhc3VyZVZhbHVlKSA9PiB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMubmV3UHJvcGVydHkudW5pdC5uYW1lXTtcbiAgICBjb25zdCB2YWx1ZXMgPSBcInZhbHVlc1wiO1xuICAgIGlmICggbWVhc3VyZVZhbHVlICYmIHRoaXMucHJvcGVydHlbdmFsdWVzXS5sZW5ndGggPiAxICkge1xuICAgICAgY29udHJvbC5lbmFibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucHJvcGVydHlbdmFsdWVzXS5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnRyb2wucmVzZXQoKTtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gICAgYWRkTWVhc3VyZUNvbnRyb2wgPSAoZGF0YSkgPT4ge1xuICAgIHRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2woZGF0YS5rZXksIGRhdGEudmFsdWUpO1xuICAgIHRoaXMuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB0aGlzLmFkZENvbnRyb2wuZW1pdCh7a2V5OiB0aGlzLnByb3BlcnR5Lm5hbWUgLCB2YWx1ZTogdGhpcy5mb3JtR3JvdXB9KTtcblxuICB9XG5cblxufVxuIl19
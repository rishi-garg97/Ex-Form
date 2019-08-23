import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import _ from "lodash";
let FormComponent = class FormComponent {
    constructor() {
        this.initialize = () => {
            const uiSchema = Object.assign({}, this.uiSchema);
            if (uiSchema.type === "Normal") {
                uiSchema.fields = this.formatFields(uiSchema);
            }
            else {
                _.each(uiSchema.steps, (step) => {
                    step.fields = this.formatFields(step);
                });
            }
            this.modifiedUiSchema = uiSchema;
            this.modifiedUiSchema.name = this.modelSchema.name;
        };
        this.formatFields = (schema) => {
            return _.map(schema.fields, (field) => {
                const matchedField = _.find(this.modelSchema.properties, { name: field.name });
                if (matchedField) {
                    return Object.assign({}, field, matchedField);
                }
            });
        };
    }
    ngOnInit() {
        this.initialize();
    }
    ngOnChanges(changes) {
        for (const propName in changes) {
            const chng = changes[propName];
            const cur = JSON.stringify(chng.currentValue);
            const prev = JSON.stringify(chng.previousValue);
            if (cur !== prev) {
                this.initialize();
            }
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FormComponent.prototype, "modelSchema", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FormComponent.prototype, "uiSchema", void 0);
FormComponent = tslib_1.__decorate([
    Component({
        selector: "app-form",
        template: "<app-simple *ngIf=\"modifiedUiSchema.type == 'Normal' \"\n            [uiSchema]=\"modifiedUiSchema\">\n</app-simple>\n\n\n\n<!--<app-accordian *ngIf=\"modifiedUiSchema.type =='Group'\"-->\n               <!--[uiSchema]=\"modifiedUiSchema\">-->\n<!--</app-accordian>-->\n\n\n\n<!--<app-step-form *ngIf=\"modifiedUiSchema.type =='Group'\"-->\n               <!--[uiSchema]=\"modifiedUiSchema\">-->\n<!--</app-step-form>-->\n\n<app-tab *ngIf=\"modifiedUiSchema.type =='Group'\"\n         [uiSchema]=\"modifiedUiSchema\">\n</app-tab>\n",
        styles: [".jumbotron{background-color:#f8f9fa;padding:15px;margin-top:56px}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}.row{margin-bottom:0}.asterik{color:red}.ex-form{background:#fff;box-shadow:0 2px 6px 4px rgba(0,0,0,.14);border-radius:15px;padding:20px}.padding-right-zero{padding-right:0}.padding-zero{padding:0}"]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], FormComponent);
export { FormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBT3ZCLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFLeEI7UUFpQkEsZUFBVSxHQUFHLEdBQUcsRUFBRTtZQUNoQixNQUFNLFFBQVEsR0FBUSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdkQsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDOUIsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9DO2lCQUFNO2dCQUNMLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO29CQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDckQsQ0FBQyxDQUFBO1FBRUQsaUJBQVksR0FBRyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3BDLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQzdFLElBQUksWUFBWSxFQUFFO29CQUNoQix5QkFBVyxLQUFLLEVBQUssWUFBWSxFQUFFO2lCQUNwQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO0lBdENnQixDQUFDO0lBRWxCLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxLQUFLLE1BQU0sUUFBUSxJQUFJLE9BQU8sRUFBRTtZQUM5QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDaEQsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7U0FDRjtJQUNILENBQUM7Q0F3QkYsQ0FBQTtBQTNDVTtJQUFSLEtBQUssRUFBRTs7a0RBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOzsrQ0FBZTtBQUZaLGFBQWE7SUFMekIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsZ2lCQUFvQzs7S0FFckMsQ0FBQzs7R0FDVyxhQUFhLENBNEN6QjtTQTVDWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWZvcm1cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9mb3JtLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9mb3JtLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbW9kZWxTY2hlbWE6IGFueTtcbiAgQElucHV0KCkgdWlTY2hlbWE6IGFueTtcbiAgbW9kaWZpZWRVaVNjaGVtYTtcblxuICBjb25zdHJ1Y3RvcigpIHsgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNobmcgPSBjaGFuZ2VzW3Byb3BOYW1lXTtcbiAgICAgIGNvbnN0IGN1ciA9IEpTT04uc3RyaW5naWZ5KGNobmcuY3VycmVudFZhbHVlKTtcbiAgICAgIGNvbnN0IHByZXYgPSBKU09OLnN0cmluZ2lmeShjaG5nLnByZXZpb3VzVmFsdWUpO1xuICAgICAgaWYgKGN1ciAhPT0gcHJldikge1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIGNvbnN0IHVpU2NoZW1hOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnVpU2NoZW1hKTtcblxuICAgIGlmICh1aVNjaGVtYS50eXBlID09PSBcIk5vcm1hbFwiKSB7XG4gICAgICB1aVNjaGVtYS5maWVsZHMgPSB0aGlzLmZvcm1hdEZpZWxkcyh1aVNjaGVtYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF8uZWFjaCh1aVNjaGVtYS5zdGVwcywgKHN0ZXApID0+IHtcbiAgICAgICAgc3RlcC5maWVsZHMgPSB0aGlzLmZvcm1hdEZpZWxkcyhzdGVwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLm1vZGlmaWVkVWlTY2hlbWEgPSB1aVNjaGVtYTtcbiAgICB0aGlzLm1vZGlmaWVkVWlTY2hlbWEubmFtZSA9IHRoaXMubW9kZWxTY2hlbWEubmFtZTtcbiAgfVxuXG4gIGZvcm1hdEZpZWxkcyA9IChzY2hlbWE6IGFueSkgPT4ge1xuICAgIHJldHVybiBfLm1hcChzY2hlbWEuZmllbGRzLCAoZmllbGQpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZWRGaWVsZCA9IF8uZmluZCh0aGlzLm1vZGVsU2NoZW1hLnByb3BlcnRpZXMsIHtuYW1lOiBmaWVsZC5uYW1lfSk7XG4gICAgICBpZiAobWF0Y2hlZEZpZWxkKSB7XG4gICAgICAgIHJldHVybiB7Li4uZmllbGQsIC4uLm1hdGNoZWRGaWVsZH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
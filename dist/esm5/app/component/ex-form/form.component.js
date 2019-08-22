import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import _ from "lodash";
var FormComponent = /** @class */ (function () {
    function FormComponent() {
        var _this = this;
        this.initialize = function () {
            var uiSchema = Object.assign({}, _this.uiSchema);
            if (uiSchema.type === "Normal") {
                uiSchema.fields = _this.formatFields(uiSchema);
            }
            else {
                _.each(uiSchema.steps, function (step) {
                    step.fields = _this.formatFields(step);
                });
            }
            _this.modifiedUiSchema = uiSchema;
            _this.modifiedUiSchema.name = _this.modelSchema.name;
        };
        this.formatFields = function (schema) {
            return _.map(schema.fields, function (field) {
                var matchedField = _.find(_this.modelSchema.properties, { name: field.name });
                if (matchedField) {
                    return tslib_1.__assign({}, field, matchedField);
                }
            });
        };
    }
    FormComponent.prototype.ngOnInit = function () {
        this.initialize();
        // console.log(this.formGroup);
    };
    FormComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var chng = changes[propName];
            var cur = JSON.stringify(chng.currentValue);
            var prev = JSON.stringify(chng.previousValue);
            if (cur !== prev) {
                this.initialize();
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
    return FormComponent;
}());
export { FormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnQvZXgtZm9ybS9mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQU92QjtJQUtFO1FBQUEsaUJBQWtCO1FBa0JsQixlQUFVLEdBQUc7WUFDWCxJQUFNLFFBQVEsR0FBUSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdkQsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDOUIsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9DO2lCQUFNO2dCQUNMLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxVQUFDLElBQUk7b0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7WUFDakMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNyRCxDQUFDLENBQUE7UUFFRCxpQkFBWSxHQUFHLFVBQUMsTUFBVztZQUN6QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUs7Z0JBQ2hDLElBQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQzdFLElBQUksWUFBWSxFQUFFO29CQUNoQiw0QkFBVyxLQUFLLEVBQUssWUFBWSxFQUFFO2lCQUNwQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO0lBdkNnQixDQUFDO0lBRWxCLGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsK0JBQStCO0lBQ2pDLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsS0FBSyxJQUFNLFFBQVEsSUFBSSxPQUFPLEVBQUU7WUFDOUIsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2hELElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1NBQ0Y7SUFDSCxDQUFDO0lBcEJRO1FBQVIsS0FBSyxFQUFFOztzREFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7O21EQUFlO0lBRlosYUFBYTtRQUx6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixnaUJBQW9DOztTQUVyQyxDQUFDOztPQUNXLGFBQWEsQ0E2Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQTdDWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWZvcm1cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9mb3JtLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9mb3JtLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbW9kZWxTY2hlbWE6IGFueTtcbiAgQElucHV0KCkgdWlTY2hlbWE6IGFueTtcbiAgbW9kaWZpZWRVaVNjaGVtYTtcblxuICBjb25zdHJ1Y3RvcigpIHsgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgZm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBjaG5nID0gY2hhbmdlc1twcm9wTmFtZV07XG4gICAgICBjb25zdCBjdXIgPSBKU09OLnN0cmluZ2lmeShjaG5nLmN1cnJlbnRWYWx1ZSk7XG4gICAgICBjb25zdCBwcmV2ID0gSlNPTi5zdHJpbmdpZnkoY2huZy5wcmV2aW91c1ZhbHVlKTtcbiAgICAgIGlmIChjdXIgIT09IHByZXYpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICBjb25zdCB1aVNjaGVtYTogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy51aVNjaGVtYSk7XG5cbiAgICBpZiAodWlTY2hlbWEudHlwZSA9PT0gXCJOb3JtYWxcIikge1xuICAgICAgdWlTY2hlbWEuZmllbGRzID0gdGhpcy5mb3JtYXRGaWVsZHModWlTY2hlbWEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfLmVhY2godWlTY2hlbWEuc3RlcHMsIChzdGVwKSA9PiB7XG4gICAgICAgIHN0ZXAuZmllbGRzID0gdGhpcy5mb3JtYXRGaWVsZHMoc3RlcCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5tb2RpZmllZFVpU2NoZW1hID0gdWlTY2hlbWE7XG4gICAgdGhpcy5tb2RpZmllZFVpU2NoZW1hLm5hbWUgPSB0aGlzLm1vZGVsU2NoZW1hLm5hbWU7XG4gIH1cblxuICBmb3JtYXRGaWVsZHMgPSAoc2NoZW1hOiBhbnkpID0+IHtcbiAgICByZXR1cm4gXy5tYXAoc2NoZW1hLmZpZWxkcywgKGZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVkRmllbGQgPSBfLmZpbmQodGhpcy5tb2RlbFNjaGVtYS5wcm9wZXJ0aWVzLCB7bmFtZTogZmllbGQubmFtZX0pO1xuICAgICAgaWYgKG1hdGNoZWRGaWVsZCkge1xuICAgICAgICByZXR1cm4gey4uLmZpZWxkLCAuLi5tYXRjaGVkRmllbGR9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=
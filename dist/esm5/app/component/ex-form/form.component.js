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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBT3ZCO0lBS0U7UUFBQSxpQkFBa0I7UUFpQmxCLGVBQVUsR0FBRztZQUNYLElBQU0sUUFBUSxHQUFRLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV2RCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM5QixRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0M7aUJBQU07Z0JBQ0wsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBSTtvQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLENBQUMsQ0FBQzthQUNKO1lBQ0QsS0FBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztZQUNqQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3JELENBQUMsQ0FBQTtRQUVELGlCQUFZLEdBQUcsVUFBQyxNQUFXO1lBQ3pCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFVBQUMsS0FBSztnQkFDaEMsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztnQkFDN0UsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLDRCQUFXLEtBQUssRUFBSyxZQUFZLEVBQUU7aUJBQ3BDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7SUF0Q2dCLENBQUM7SUFFbEIsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLEtBQUssSUFBTSxRQUFRLElBQUksT0FBTyxFQUFFO1lBQzlCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5QyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNoRCxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjtTQUNGO0lBQ0gsQ0FBQztJQW5CUTtRQUFSLEtBQUssRUFBRTs7c0RBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFOzttREFBZTtJQUZaLGFBQWE7UUFMekIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsZ2lCQUFvQzs7U0FFckMsQ0FBQzs7T0FDVyxhQUFhLENBNEN6QjtJQUFELG9CQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0E1Q1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1mb3JtXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZm9ybS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZm9ybS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG1vZGVsU2NoZW1hOiBhbnk7XG4gIEBJbnB1dCgpIHVpU2NoZW1hOiBhbnk7XG4gIG1vZGlmaWVkVWlTY2hlbWE7XG5cbiAgY29uc3RydWN0b3IoKSB7ICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgZm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBjaG5nID0gY2hhbmdlc1twcm9wTmFtZV07XG4gICAgICBjb25zdCBjdXIgPSBKU09OLnN0cmluZ2lmeShjaG5nLmN1cnJlbnRWYWx1ZSk7XG4gICAgICBjb25zdCBwcmV2ID0gSlNPTi5zdHJpbmdpZnkoY2huZy5wcmV2aW91c1ZhbHVlKTtcbiAgICAgIGlmIChjdXIgIT09IHByZXYpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICBjb25zdCB1aVNjaGVtYTogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy51aVNjaGVtYSk7XG5cbiAgICBpZiAodWlTY2hlbWEudHlwZSA9PT0gXCJOb3JtYWxcIikge1xuICAgICAgdWlTY2hlbWEuZmllbGRzID0gdGhpcy5mb3JtYXRGaWVsZHModWlTY2hlbWEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfLmVhY2godWlTY2hlbWEuc3RlcHMsIChzdGVwKSA9PiB7XG4gICAgICAgIHN0ZXAuZmllbGRzID0gdGhpcy5mb3JtYXRGaWVsZHMoc3RlcCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5tb2RpZmllZFVpU2NoZW1hID0gdWlTY2hlbWE7XG4gICAgdGhpcy5tb2RpZmllZFVpU2NoZW1hLm5hbWUgPSB0aGlzLm1vZGVsU2NoZW1hLm5hbWU7XG4gIH1cblxuICBmb3JtYXRGaWVsZHMgPSAoc2NoZW1hOiBhbnkpID0+IHtcbiAgICByZXR1cm4gXy5tYXAoc2NoZW1hLmZpZWxkcywgKGZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVkRmllbGQgPSBfLmZpbmQodGhpcy5tb2RlbFNjaGVtYS5wcm9wZXJ0aWVzLCB7bmFtZTogZmllbGQubmFtZX0pO1xuICAgICAgaWYgKG1hdGNoZWRGaWVsZCkge1xuICAgICAgICByZXR1cm4gey4uLmZpZWxkLCAuLi5tYXRjaGVkRmllbGR9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=
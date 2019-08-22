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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBT3ZCO0lBS0U7UUFBQSxpQkFBa0I7UUFrQmxCLGVBQVUsR0FBRztZQUNYLElBQU0sUUFBUSxHQUFRLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV2RCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM5QixRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0M7aUJBQU07Z0JBQ0wsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBSTtvQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLENBQUMsQ0FBQzthQUNKO1lBQ0QsS0FBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztZQUNqQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3JELENBQUMsQ0FBQTtRQUVELGlCQUFZLEdBQUcsVUFBQyxNQUFXO1lBQ3pCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFVBQUMsS0FBSztnQkFDaEMsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztnQkFDN0UsSUFBSSxZQUFZLEVBQUU7b0JBQ2hCLDRCQUFXLEtBQUssRUFBSyxZQUFZLEVBQUU7aUJBQ3BDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7SUF2Q2dCLENBQUM7SUFFbEIsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQiwrQkFBK0I7SUFDakMsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxLQUFLLElBQU0sUUFBUSxJQUFJLE9BQU8sRUFBRTtZQUM5QixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDaEQsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7U0FDRjtJQUNILENBQUM7SUFwQlE7UUFBUixLQUFLLEVBQUU7O3NEQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTs7bURBQWU7SUFGWixhQUFhO1FBTHpCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLGdpQkFBb0M7O1NBRXJDLENBQUM7O09BQ1csYUFBYSxDQTZDekI7SUFBRCxvQkFBQztDQUFBLEFBN0NELElBNkNDO1NBN0NZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtZm9ybVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2Zvcm0uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2Zvcm0uY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBtb2RlbFNjaGVtYTogYW55O1xuICBASW5wdXQoKSB1aVNjaGVtYTogYW55O1xuICBtb2RpZmllZFVpU2NoZW1hO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNobmcgPSBjaGFuZ2VzW3Byb3BOYW1lXTtcbiAgICAgIGNvbnN0IGN1ciA9IEpTT04uc3RyaW5naWZ5KGNobmcuY3VycmVudFZhbHVlKTtcbiAgICAgIGNvbnN0IHByZXYgPSBKU09OLnN0cmluZ2lmeShjaG5nLnByZXZpb3VzVmFsdWUpO1xuICAgICAgaWYgKGN1ciAhPT0gcHJldikge1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIGNvbnN0IHVpU2NoZW1hOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnVpU2NoZW1hKTtcblxuICAgIGlmICh1aVNjaGVtYS50eXBlID09PSBcIk5vcm1hbFwiKSB7XG4gICAgICB1aVNjaGVtYS5maWVsZHMgPSB0aGlzLmZvcm1hdEZpZWxkcyh1aVNjaGVtYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF8uZWFjaCh1aVNjaGVtYS5zdGVwcywgKHN0ZXApID0+IHtcbiAgICAgICAgc3RlcC5maWVsZHMgPSB0aGlzLmZvcm1hdEZpZWxkcyhzdGVwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLm1vZGlmaWVkVWlTY2hlbWEgPSB1aVNjaGVtYTtcbiAgICB0aGlzLm1vZGlmaWVkVWlTY2hlbWEubmFtZSA9IHRoaXMubW9kZWxTY2hlbWEubmFtZTtcbiAgfVxuXG4gIGZvcm1hdEZpZWxkcyA9IChzY2hlbWE6IGFueSkgPT4ge1xuICAgIHJldHVybiBfLm1hcChzY2hlbWEuZmllbGRzLCAoZmllbGQpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZWRGaWVsZCA9IF8uZmluZCh0aGlzLm1vZGVsU2NoZW1hLnByb3BlcnRpZXMsIHtuYW1lOiBmaWVsZC5uYW1lfSk7XG4gICAgICBpZiAobWF0Y2hlZEZpZWxkKSB7XG4gICAgICAgIHJldHVybiB7Li4uZmllbGQsIC4uLm1hdGNoZWRGaWVsZH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
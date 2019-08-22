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
        // console.log(this.formGroup);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBT3ZCLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFLeEI7UUFrQkEsZUFBVSxHQUFHLEdBQUcsRUFBRTtZQUNoQixNQUFNLFFBQVEsR0FBUSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdkQsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDOUIsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9DO2lCQUFNO2dCQUNMLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO29CQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDckQsQ0FBQyxDQUFBO1FBRUQsaUJBQVksR0FBRyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3BDLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQzdFLElBQUksWUFBWSxFQUFFO29CQUNoQix5QkFBVyxLQUFLLEVBQUssWUFBWSxFQUFFO2lCQUNwQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO0lBdkNnQixDQUFDO0lBRWxCLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsK0JBQStCO0lBQ2pDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsS0FBSyxNQUFNLFFBQVEsSUFBSSxPQUFPLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2hELElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1NBQ0Y7SUFDSCxDQUFDO0NBd0JGLENBQUE7QUE1Q1U7SUFBUixLQUFLLEVBQUU7O2tEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTs7K0NBQWU7QUFGWixhQUFhO0lBTHpCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGdpQkFBb0M7O0tBRXJDLENBQUM7O0dBQ1csYUFBYSxDQTZDekI7U0E3Q1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1mb3JtXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZm9ybS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZm9ybS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG1vZGVsU2NoZW1hOiBhbnk7XG4gIEBJbnB1dCgpIHVpU2NoZW1hOiBhbnk7XG4gIG1vZGlmaWVkVWlTY2hlbWE7XG5cbiAgY29uc3RydWN0b3IoKSB7ICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgY29uc3QgY2huZyA9IGNoYW5nZXNbcHJvcE5hbWVdO1xuICAgICAgY29uc3QgY3VyID0gSlNPTi5zdHJpbmdpZnkoY2huZy5jdXJyZW50VmFsdWUpO1xuICAgICAgY29uc3QgcHJldiA9IEpTT04uc3RyaW5naWZ5KGNobmcucHJldmlvdXNWYWx1ZSk7XG4gICAgICBpZiAoY3VyICE9PSBwcmV2KSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgY29uc3QgdWlTY2hlbWE6IGFueSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudWlTY2hlbWEpO1xuXG4gICAgaWYgKHVpU2NoZW1hLnR5cGUgPT09IFwiTm9ybWFsXCIpIHtcbiAgICAgIHVpU2NoZW1hLmZpZWxkcyA9IHRoaXMuZm9ybWF0RmllbGRzKHVpU2NoZW1hKTtcbiAgICB9IGVsc2Uge1xuICAgICAgXy5lYWNoKHVpU2NoZW1hLnN0ZXBzLCAoc3RlcCkgPT4ge1xuICAgICAgICBzdGVwLmZpZWxkcyA9IHRoaXMuZm9ybWF0RmllbGRzKHN0ZXApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubW9kaWZpZWRVaVNjaGVtYSA9IHVpU2NoZW1hO1xuICAgIHRoaXMubW9kaWZpZWRVaVNjaGVtYS5uYW1lID0gdGhpcy5tb2RlbFNjaGVtYS5uYW1lO1xuICB9XG5cbiAgZm9ybWF0RmllbGRzID0gKHNjaGVtYTogYW55KSA9PiB7XG4gICAgcmV0dXJuIF8ubWFwKHNjaGVtYS5maWVsZHMsIChmaWVsZCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlZEZpZWxkID0gXy5maW5kKHRoaXMubW9kZWxTY2hlbWEucHJvcGVydGllcywge25hbWU6IGZpZWxkLm5hbWV9KTtcbiAgICAgIGlmIChtYXRjaGVkRmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHsuLi5maWVsZCwgLi4ubWF0Y2hlZEZpZWxkfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19
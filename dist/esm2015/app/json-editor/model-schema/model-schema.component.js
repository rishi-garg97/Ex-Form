import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { JsonEditorComponent, JsonEditorOptions } from "ang-jsoneditor";
let ModelSchemaComponent = class ModelSchemaComponent {
    constructor() {
        this.modelSchemaChange = new EventEmitter();
        this.modelSchemaEditorOptions = new JsonEditorOptions();
        this.modelSchemaEditorOptions.mode = "code";
    }
    ngOnInit() {
        console.log("Old model Schema", this.modelSchemaData);
    }
    getData(event) {
        if (this.editor.isValidJson()) {
            this.modelSchemaChange.emit(this.editor.get());
            console.log("correct");
        }
        else {
            // console.log("UI Schema is incorrect");
        }
    }
};
tslib_1.__decorate([
    ViewChild(JsonEditorComponent, { static: false }),
    tslib_1.__metadata("design:type", JsonEditorComponent)
], ModelSchemaComponent.prototype, "editor", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ModelSchemaComponent.prototype, "modelSchemaData", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ModelSchemaComponent.prototype, "modelSchemaChange", void 0);
ModelSchemaComponent = tslib_1.__decorate([
    Component({
        selector: "app-model-schema",
        template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Model Schema</mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <json-editor [options]=\"modelSchemaEditorOptions\" [data]=\"modelSchemaData\" (keyup)=\"getData($event)\"></json-editor>\n  </mat-card-content>\n</mat-card>\n",
        styles: ["::ng-deep div.jsoneditor-menu{width:100%;height:35px;padding:2px;margin:0;box-sizing:border-box;color:#fff;background-color:#3883fa;border-bottom:1px solid #3883fa;display:none}mat-card{background:#f5f5f5;padding:0;border:1px solid #000}::ng-deep div.jsoneditor{border:none}"]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ModelSchemaComponent);
export { ModelSchemaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwtc2NoZW1hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2pzb24tZWRpdG9yL21vZGVsLXNjaGVtYS9tb2RlbC1zY2hlbWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQU90RSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQVEvQjtRQUppQixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBS3RELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7SUFDOUMsQ0FBQztJQUdELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0wseUNBQXlDO1NBQzFDO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUF6QmtEO0lBQWhELFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztzQ0FBUyxtQkFBbUI7b0RBQUM7QUFFcEU7SUFBUixLQUFLLEVBQUU7OzZEQUFzQjtBQUNwQjtJQUFULE1BQU0sRUFBRTs7K0RBQStDO0FBSjdDLG9CQUFvQjtJQUxoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLHdVQUE0Qzs7S0FFN0MsQ0FBQzs7R0FDVyxvQkFBb0IsQ0EwQmhDO1NBMUJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtKc29uRWRpdG9yQ29tcG9uZW50LCBKc29uRWRpdG9yT3B0aW9uc30gZnJvbSBcImFuZy1qc29uZWRpdG9yXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtbW9kZWwtc2NoZW1hXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbW9kZWwtc2NoZW1hLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9tb2RlbC1zY2hlbWEuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RlbFNjaGVtYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoSnNvbkVkaXRvckNvbXBvbmVudCwge3N0YXRpYzogZmFsc2V9KSBlZGl0b3I6IEpzb25FZGl0b3JDb21wb25lbnQ7XG5cbiAgQElucHV0KCkgbW9kZWxTY2hlbWFEYXRhOiBhbnk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgbW9kZWxTY2hlbWFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIG1vZGVsU2NoZW1hRWRpdG9yT3B0aW9uczogSnNvbkVkaXRvck9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tb2RlbFNjaGVtYUVkaXRvck9wdGlvbnMgPSBuZXcgSnNvbkVkaXRvck9wdGlvbnMoKTtcbiAgICB0aGlzLm1vZGVsU2NoZW1hRWRpdG9yT3B0aW9ucy5tb2RlID0gXCJjb2RlXCI7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiT2xkIG1vZGVsIFNjaGVtYVwiLCB0aGlzLm1vZGVsU2NoZW1hRGF0YSk7XG4gIH1cblxuICBnZXREYXRhKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yLmlzVmFsaWRKc29uKCkpIHtcbiAgICAgIHRoaXMubW9kZWxTY2hlbWFDaGFuZ2UuZW1pdCh0aGlzLmVkaXRvci5nZXQoKSk7XG4gICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiVUkgU2NoZW1hIGlzIGluY29ycmVjdFwiKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
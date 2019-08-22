import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { JsonEditorComponent, JsonEditorOptions } from "ang-jsoneditor";
var ModelSchemaComponent = /** @class */ (function () {
    function ModelSchemaComponent() {
        this.modelSchemaChange = new EventEmitter();
        this.modelSchemaEditorOptions = new JsonEditorOptions();
        this.modelSchemaEditorOptions.mode = "code";
    }
    ModelSchemaComponent.prototype.ngOnInit = function () {
        console.log("Old model Schema", this.modelSchemaData);
    };
    ModelSchemaComponent.prototype.getData = function (event) {
        if (this.editor.isValidJson()) {
            this.modelSchemaChange.emit(this.editor.get());
            console.log("correct");
        }
        else {
            // console.log("UI Schema is incorrect");
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
    return ModelSchemaComponent;
}());
export { ModelSchemaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwtc2NoZW1hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3Vsci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvanNvbi1lZGl0b3IvbW9kZWwtc2NoZW1hL21vZGVsLXNjaGVtYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT3RFO0lBUUU7UUFKaUIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUt0RCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQzlDLENBQUM7SUFHRCx1Q0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHNDQUFPLEdBQVAsVUFBUSxLQUFLO1FBQ1gsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNMLHlDQUF5QztTQUMxQztJQUNILENBQUM7SUF4QmdEO1FBQWhELFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzswQ0FBUyxtQkFBbUI7d0RBQUM7SUFFcEU7UUFBUixLQUFLLEVBQUU7O2lFQUFzQjtJQUNwQjtRQUFULE1BQU0sRUFBRTs7bUVBQStDO0lBSjdDLG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLHdVQUE0Qzs7U0FFN0MsQ0FBQzs7T0FDVyxvQkFBb0IsQ0EwQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQTFCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SnNvbkVkaXRvckNvbXBvbmVudCwgSnNvbkVkaXRvck9wdGlvbnN9IGZyb20gXCJhbmctanNvbmVkaXRvclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLW1vZGVsLXNjaGVtYVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL21vZGVsLXNjaGVtYS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbW9kZWwtc2NoZW1hLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTW9kZWxTY2hlbWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKEpzb25FZGl0b3JDb21wb25lbnQsIHtzdGF0aWM6IGZhbHNlfSkgZWRpdG9yOiBKc29uRWRpdG9yQ29tcG9uZW50O1xuXG4gIEBJbnB1dCgpIG1vZGVsU2NoZW1hRGF0YTogYW55O1xuICBAT3V0cHV0KCkgcHVibGljIG1vZGVsU2NoZW1hQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBtb2RlbFNjaGVtYUVkaXRvck9wdGlvbnM6IEpzb25FZGl0b3JPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubW9kZWxTY2hlbWFFZGl0b3JPcHRpb25zID0gbmV3IEpzb25FZGl0b3JPcHRpb25zKCk7XG4gICAgdGhpcy5tb2RlbFNjaGVtYUVkaXRvck9wdGlvbnMubW9kZSA9IFwiY29kZVwiO1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIk9sZCBtb2RlbCBTY2hlbWFcIiwgdGhpcy5tb2RlbFNjaGVtYURhdGEpO1xuICB9XG5cbiAgZ2V0RGF0YShldmVudCkge1xuICAgIGlmICh0aGlzLmVkaXRvci5pc1ZhbGlkSnNvbigpKSB7XG4gICAgICB0aGlzLm1vZGVsU2NoZW1hQ2hhbmdlLmVtaXQodGhpcy5lZGl0b3IuZ2V0KCkpO1xuICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlVJIFNjaGVtYSBpcyBpbmNvcnJlY3RcIik7XG4gICAgfVxuICB9XG59XG4iXX0=
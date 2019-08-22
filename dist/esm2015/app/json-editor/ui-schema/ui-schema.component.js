import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { JsonEditorComponent, JsonEditorOptions } from "ang-jsoneditor";
let UiSchemaComponent = class UiSchemaComponent {
    constructor() {
        this.uiSchemaChange = new EventEmitter();
        this.uiSchemaEditorOptions = new JsonEditorOptions();
        this.uiSchemaEditorOptions.mode = "code";
    }
    ngOnInit() {
        console.log("Old UI Schema", this.uiSchemaData);
    }
    getData(event) {
        if (this.editor.isValidJson()) {
            this.uiSchemaChange.emit(this.editor.get());
        }
        else {
            console.log("UI Schema is incorrect");
        }
    }
};
tslib_1.__decorate([
    ViewChild(JsonEditorComponent, { static: false }),
    tslib_1.__metadata("design:type", JsonEditorComponent)
], UiSchemaComponent.prototype, "editor", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], UiSchemaComponent.prototype, "uiSchemaData", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], UiSchemaComponent.prototype, "uiSchemaChange", void 0);
UiSchemaComponent = tslib_1.__decorate([
    Component({
        selector: "app-ui-schema",
        template: "<div style=\"margin-bottom: 10px;\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>UI Schema</mat-card-title>\n    </mat-card-header>\n\n    <mat-card-content>\n      <json-editor [options]=\"uiSchemaEditorOptions\" [data]=\"uiSchemaData\" (keyup)=\"getData($event)\"></json-editor>\n    </mat-card-content>\n  </mat-card>\n\n</div>\n",
        styles: ["::ng-deep div.jsoneditor-menu{width:100%;height:35px;padding:2px;margin:0;box-sizing:border-box;color:#fff;background-color:#3883fa;border-bottom:1px solid #3883fa;display:none}mat-card{background:#f5f5f5;padding:0;border:1px solid #000}::ng-deep div.jsoneditor{border:none}"]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], UiSchemaComponent);
export { UiSchemaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktc2NoZW1hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3Vsci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvanNvbi1lZGl0b3IvdWktc2NoZW1hL3VpLXNjaGVtYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVcsWUFBWSxFQUFnQixLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU94RSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQVE1QjtRQUppQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFLbkQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUMzQyxDQUFDO0lBR0QsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQXhCa0Q7SUFBaEQsU0FBUyxDQUFDLG1CQUFtQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO3NDQUFTLG1CQUFtQjtpREFBQztBQUVwRTtJQUFSLEtBQUssRUFBRTs7dURBQW1CO0FBQ2pCO0lBQVQsTUFBTSxFQUFFOzt5REFBNEM7QUFKMUMsaUJBQWlCO0lBTDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLHdXQUF5Qzs7S0FFMUMsQ0FBQzs7R0FDVyxpQkFBaUIsQ0F5QjdCO1NBekJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBEb0NoZWNrLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBKc29uRWRpdG9yQ29tcG9uZW50LCBKc29uRWRpdG9yT3B0aW9ucyB9IGZyb20gXCJhbmctanNvbmVkaXRvclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLXVpLXNjaGVtYVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3VpLXNjaGVtYS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdWktc2NoZW1hLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgVWlTY2hlbWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKEpzb25FZGl0b3JDb21wb25lbnQsIHtzdGF0aWM6IGZhbHNlfSkgZWRpdG9yOiBKc29uRWRpdG9yQ29tcG9uZW50O1xuXG4gIEBJbnB1dCgpIHVpU2NoZW1hRGF0YTogYW55O1xuICBAT3V0cHV0KCkgcHVibGljIHVpU2NoZW1hQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyB1aVNjaGVtYUVkaXRvck9wdGlvbnM6IEpzb25FZGl0b3JPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudWlTY2hlbWFFZGl0b3JPcHRpb25zID0gbmV3IEpzb25FZGl0b3JPcHRpb25zKCk7XG4gICAgdGhpcy51aVNjaGVtYUVkaXRvck9wdGlvbnMubW9kZSA9IFwiY29kZVwiO1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIk9sZCBVSSBTY2hlbWFcIiwgdGhpcy51aVNjaGVtYURhdGEpO1xuICB9XG5cbiAgZ2V0RGF0YShldmVudCkge1xuICAgIGlmICh0aGlzLmVkaXRvci5pc1ZhbGlkSnNvbigpKSB7XG4gICAgICB0aGlzLnVpU2NoZW1hQ2hhbmdlLmVtaXQodGhpcy5lZGl0b3IuZ2V0KCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlVJIFNjaGVtYSBpcyBpbmNvcnJlY3RcIik7XG4gICAgfVxuICB9XG59XG4iXX0=
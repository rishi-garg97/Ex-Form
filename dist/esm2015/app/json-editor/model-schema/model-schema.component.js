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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwtc2NoZW1hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3Vsci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvanNvbi1lZGl0b3IvbW9kZWwtc2NoZW1hL21vZGVsLXNjaGVtYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT3RFLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBUS9CO1FBSmlCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFLdEQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUM5QyxDQUFDO0lBR0QsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxPQUFPLENBQUMsS0FBSztRQUNYLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hCO2FBQU07WUFDTCx5Q0FBeUM7U0FDMUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQXpCa0Q7SUFBaEQsU0FBUyxDQUFDLG1CQUFtQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO3NDQUFTLG1CQUFtQjtvREFBQztBQUVwRTtJQUFSLEtBQUssRUFBRTs7NkRBQXNCO0FBQ3BCO0lBQVQsTUFBTSxFQUFFOzsrREFBK0M7QUFKN0Msb0JBQW9CO0lBTGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsd1VBQTRDOztLQUU3QyxDQUFDOztHQUNXLG9CQUFvQixDQTBCaEM7U0ExQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0pzb25FZGl0b3JDb21wb25lbnQsIEpzb25FZGl0b3JPcHRpb25zfSBmcm9tIFwiYW5nLWpzb25lZGl0b3JcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1tb2RlbC1zY2hlbWFcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9tb2RlbC1zY2hlbWEuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL21vZGVsLXNjaGVtYS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGVsU2NoZW1hQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChKc29uRWRpdG9yQ29tcG9uZW50LCB7c3RhdGljOiBmYWxzZX0pIGVkaXRvcjogSnNvbkVkaXRvckNvbXBvbmVudDtcblxuICBASW5wdXQoKSBtb2RlbFNjaGVtYURhdGE6IGFueTtcbiAgQE91dHB1dCgpIHB1YmxpYyBtb2RlbFNjaGVtYUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgbW9kZWxTY2hlbWFFZGl0b3JPcHRpb25zOiBKc29uRWRpdG9yT3B0aW9ucztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1vZGVsU2NoZW1hRWRpdG9yT3B0aW9ucyA9IG5ldyBKc29uRWRpdG9yT3B0aW9ucygpO1xuICAgIHRoaXMubW9kZWxTY2hlbWFFZGl0b3JPcHRpb25zLm1vZGUgPSBcImNvZGVcIjtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJPbGQgbW9kZWwgU2NoZW1hXCIsIHRoaXMubW9kZWxTY2hlbWFEYXRhKTtcbiAgfVxuXG4gIGdldERhdGEoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IuaXNWYWxpZEpzb24oKSkge1xuICAgICAgdGhpcy5tb2RlbFNjaGVtYUNoYW5nZS5lbWl0KHRoaXMuZWRpdG9yLmdldCgpKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJVSSBTY2hlbWEgaXMgaW5jb3JyZWN0XCIpO1xuICAgIH1cbiAgfVxufVxuIl19
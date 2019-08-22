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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktc2NoZW1hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2pzb24tZWRpdG9yL3VpLXNjaGVtYS91aS1zY2hlbWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFXLFlBQVksRUFBZ0IsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPeEUsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFRNUI7UUFKaUIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBS25ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7SUFDM0MsQ0FBQztJQUdELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUF4QmtEO0lBQWhELFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztzQ0FBUyxtQkFBbUI7aURBQUM7QUFFcEU7SUFBUixLQUFLLEVBQUU7O3VEQUFtQjtBQUNqQjtJQUFULE1BQU0sRUFBRTs7eURBQTRDO0FBSjFDLGlCQUFpQjtJQUw3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6Qix3V0FBeUM7O0tBRTFDLENBQUM7O0dBQ1csaUJBQWlCLENBeUI3QjtTQXpCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRG9DaGVjaywgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSnNvbkVkaXRvckNvbXBvbmVudCwgSnNvbkVkaXRvck9wdGlvbnMgfSBmcm9tIFwiYW5nLWpzb25lZGl0b3JcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC11aS1zY2hlbWFcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi91aS1zY2hlbWEuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3VpLXNjaGVtYS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFVpU2NoZW1hQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChKc29uRWRpdG9yQ29tcG9uZW50LCB7c3RhdGljOiBmYWxzZX0pIGVkaXRvcjogSnNvbkVkaXRvckNvbXBvbmVudDtcblxuICBASW5wdXQoKSB1aVNjaGVtYURhdGE6IGFueTtcbiAgQE91dHB1dCgpIHB1YmxpYyB1aVNjaGVtYUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgdWlTY2hlbWFFZGl0b3JPcHRpb25zOiBKc29uRWRpdG9yT3B0aW9ucztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVpU2NoZW1hRWRpdG9yT3B0aW9ucyA9IG5ldyBKc29uRWRpdG9yT3B0aW9ucygpO1xuICAgIHRoaXMudWlTY2hlbWFFZGl0b3JPcHRpb25zLm1vZGUgPSBcImNvZGVcIjtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJPbGQgVUkgU2NoZW1hXCIsIHRoaXMudWlTY2hlbWFEYXRhKTtcbiAgfVxuXG4gIGdldERhdGEoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IuaXNWYWxpZEpzb24oKSkge1xuICAgICAgdGhpcy51aVNjaGVtYUNoYW5nZS5lbWl0KHRoaXMuZWRpdG9yLmdldCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJVSSBTY2hlbWEgaXMgaW5jb3JyZWN0XCIpO1xuICAgIH1cbiAgfVxufVxuIl19
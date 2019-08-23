import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { JsonEditorComponent, JsonEditorOptions } from "ang-jsoneditor";
var UiSchemaComponent = /** @class */ (function () {
    function UiSchemaComponent() {
        this.uiSchemaChange = new EventEmitter();
        this.uiSchemaEditorOptions = new JsonEditorOptions();
        this.uiSchemaEditorOptions.mode = "code";
    }
    UiSchemaComponent.prototype.ngOnInit = function () {
        console.log("Old UI Schema", this.uiSchemaData);
    };
    UiSchemaComponent.prototype.getData = function (event) {
        if (this.editor.isValidJson()) {
            this.uiSchemaChange.emit(this.editor.get());
        }
        else {
            console.log("UI Schema is incorrect");
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
    return UiSchemaComponent;
}());
export { UiSchemaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktc2NoZW1hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3Vsci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvanNvbi1lZGl0b3IvdWktc2NoZW1hL3VpLXNjaGVtYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVcsWUFBWSxFQUFnQixLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU94RTtJQVFFO1FBSmlCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUtuRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQzNDLENBQUM7SUFHRCxvQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsS0FBSztRQUNYLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUF2QmdEO1FBQWhELFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzswQ0FBUyxtQkFBbUI7cURBQUM7SUFFcEU7UUFBUixLQUFLLEVBQUU7OzJEQUFtQjtJQUNqQjtRQUFULE1BQU0sRUFBRTs7NkRBQTRDO0lBSjFDLGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6Qix3V0FBeUM7O1NBRTFDLENBQUM7O09BQ1csaUJBQWlCLENBeUI3QjtJQUFELHdCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F6QlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIERvQ2hlY2ssIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEpzb25FZGl0b3JDb21wb25lbnQsIEpzb25FZGl0b3JPcHRpb25zIH0gZnJvbSBcImFuZy1qc29uZWRpdG9yXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtdWktc2NoZW1hXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdWktc2NoZW1hLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi91aS1zY2hlbWEuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBVaVNjaGVtYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoSnNvbkVkaXRvckNvbXBvbmVudCwge3N0YXRpYzogZmFsc2V9KSBlZGl0b3I6IEpzb25FZGl0b3JDb21wb25lbnQ7XG5cbiAgQElucHV0KCkgdWlTY2hlbWFEYXRhOiBhbnk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgdWlTY2hlbWFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHVpU2NoZW1hRWRpdG9yT3B0aW9uczogSnNvbkVkaXRvck9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51aVNjaGVtYUVkaXRvck9wdGlvbnMgPSBuZXcgSnNvbkVkaXRvck9wdGlvbnMoKTtcbiAgICB0aGlzLnVpU2NoZW1hRWRpdG9yT3B0aW9ucy5tb2RlID0gXCJjb2RlXCI7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiT2xkIFVJIFNjaGVtYVwiLCB0aGlzLnVpU2NoZW1hRGF0YSk7XG4gIH1cblxuICBnZXREYXRhKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yLmlzVmFsaWRKc29uKCkpIHtcbiAgICAgIHRoaXMudWlTY2hlbWFDaGFuZ2UuZW1pdCh0aGlzLmVkaXRvci5nZXQoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVUkgU2NoZW1hIGlzIGluY29ycmVjdFwiKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { DashboardService } from "./dashboard.service";
import { JsonEditorComponent } from "ang-jsoneditor";
let DashboardComponent = class DashboardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.entity = [
            { name: "Aliquot" }, { name: "Case" }, { name: "Demographic" },
            { name: "Diagnosis" }, { name: "Experiment" }, { name: "Instrument" },
            { name: "InstrumentModel" }, { name: "Lab" }, { name: "Project" },
            { name: "Protocol" }, { name: "Sample" }
        ];
        this.formType = ["Normal", "Group"];
        this.selected = "Protocol";
        this.selectedType = "Normal";
        this.initialize = () => {
            this.editorModelSchema = this.dashboardService.enitityModelSchema(this.selected);
            this.formModelSchema = this.dashboardService.schema.model.form;
            this.editorUISchema = this.dashboardService.uiSchema(this.selectedType);
            this.formUISchema = this.dashboardService.schema.ui.form;
        };
        this.reinitialize = () => {
            this.initialize();
        };
        this.uiSchemaChange = (data) => {
            this.formUISchema = data;
        };
        this.modelSchemaChange = (data) => {
            this.formModelSchema = data;
        };
        this.setUiSchema = (id) => {
            this.editorUISchema = this.dashboardService.uiSchema(id);
            this.formUISchema = this.dashboardService.schema.ui.form;
        };
    }
    ngOnInit() {
        this.initialize();
    }
};
tslib_1.__decorate([
    ViewChild(JsonEditorComponent, { static: false }),
    tslib_1.__metadata("design:type", JsonEditorComponent)
], DashboardComponent.prototype, "editor", void 0);
DashboardComponent = tslib_1.__decorate([
    Component({
        selector: "app-dashboard",
        template: "<div class=\"row\" style=\"margin:0;\">\n  &nbsp;&nbsp;&nbsp;&nbsp;<h4>angular-jsonschema-form</h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  <ul class=\"nav nav-pills mb-3\" role=\"tablist\">\n    <li class=\"nav-item\"\n        *ngFor=\"let type of formType\"\n        (click)=\"setUiSchema(type)\">\n      <a class=\"nav-link active\"\n         data-toggle=\"pill\"\n         [class.active]=\"type === selectedType\"\n         href=\"\">{{type}}</a>\n    </li>\n  </ul>\n\n</div>\n\n<div class=\"row\" style=\"margin:0;\">\n  <div class=\"col-sm-6\">\n    <app-ui-schema\n      [uiSchemaData]=\"editorUISchema\"\n      (uiSchemaChange)=\"uiSchemaChange($event)\">\n    </app-ui-schema>\n\n    <app-model-schema\n      [modelSchemaData]=\"editorModelSchema\"\n      (modelSchemaChange)=\"modelSchemaChange($event)\">\n    </app-model-schema>\n\n\n  </div>\n  <div class=\"col-sm-6\">\n\n\n\n      <!--<mat-form-field appearance=\"outline\">-->\n        <!--<mat-label>Entity</mat-label>-->\n        <!--<mat-select [(value)]=\"selected\" (selectionChange)=\"reinitialize()\">-->\n          <!--<mat-option *ngFor=\"let opt of entity\" [value]=\"opt.name\">-->\n            <!--{{opt.name}}-->\n          <!--</mat-option>-->\n        <!--</mat-select>-->\n      <!--</mat-form-field>-->\n\n      <app-form\n        [modelSchema]=\"formModelSchema\"\n        [uiSchema]=\"formUISchema\">\n      </app-form>\n\n\n  </div>\n</div>\n",
        styles: ["::ng-deep div.jsoneditor-menu{width:100%;height:35px;padding:2px;margin:0;box-sizing:border-box;color:#fff;background-color:#3883fa;border-bottom:1px solid #3883fa;display:none}mat-card{background:#f5f5f5;padding:0;border:1px solid #000}::ng-deep div.jsoneditor{border:none}"]
    }),
    tslib_1.__metadata("design:paramtypes", [DashboardService])
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3Vsci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT25ELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBb0I3QixZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWxCdEQsV0FBTSxHQUFHO1lBQ1AsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFDO1lBQ3hELEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBQztZQUMvRCxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUMzRCxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7U0FDckMsQ0FBQztRQUVGLGFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUsvQixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLGlCQUFZLEdBQUcsUUFBUSxDQUFDO1FBV3hCLGVBQVUsR0FBRyxHQUFHLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDL0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztRQUMzRCxDQUFDLENBQUE7UUFHRCxpQkFBWSxHQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFBO1FBRUQsbUJBQWMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUksSUFBSSxDQUFDO1FBQzVCLENBQUMsQ0FBQTtRQUVELHNCQUFpQixHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQyxDQUFBO1FBRUQsZ0JBQVcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztRQUMzRCxDQUFDLENBQUE7SUE3QjBELENBQUM7SUFFNUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBMEJGLENBQUE7QUFqQ2tEO0lBQWhELFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztzQ0FBUyxtQkFBbUI7a0RBQUM7QUFqQmxFLGtCQUFrQjtJQUw5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6QixpNkNBQXlDOztLQUUxQyxDQUFDOzZDQXFCc0MsZ0JBQWdCO0dBcEIzQyxrQkFBa0IsQ0FrRDlCO1NBbERZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RGFzaGJvYXJkU2VydmljZX0gZnJvbSBcIi4vZGFzaGJvYXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7SnNvbkVkaXRvckNvbXBvbmVudH0gZnJvbSBcImFuZy1qc29uZWRpdG9yXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtZGFzaGJvYXJkXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9kYXNoYm9hcmQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGVudGl0eSA9IFtcbiAgICB7bmFtZTogXCJBbGlxdW90XCJ9LCB7bmFtZTogXCJDYXNlXCJ9LCB7bmFtZTogXCJEZW1vZ3JhcGhpY1wifSxcbiAgICB7bmFtZTogXCJEaWFnbm9zaXNcIn0sIHtuYW1lOiBcIkV4cGVyaW1lbnRcIn0sIHtuYW1lOiBcIkluc3RydW1lbnRcIn0sXG4gICAge25hbWU6IFwiSW5zdHJ1bWVudE1vZGVsXCJ9LCB7bmFtZTogXCJMYWJcIn0sIHtuYW1lOiBcIlByb2plY3RcIn0sXG4gICAge25hbWU6IFwiUHJvdG9jb2xcIn0sIHtuYW1lOiBcIlNhbXBsZVwifVxuICBdO1xuXG4gIGZvcm1UeXBlID0gW1wiTm9ybWFsXCIsIFwiR3JvdXBcIl07XG4gIGVkaXRvck1vZGVsU2NoZW1hOiBhbnk7XG4gIGZvcm1Nb2RlbFNjaGVtYTogYW55O1xuICBlZGl0b3JVSVNjaGVtYTogYW55O1xuICBmb3JtVUlTY2hlbWE6IGFueTtcbiAgc2VsZWN0ZWQgPSBcIlByb3RvY29sXCI7XG4gIHNlbGVjdGVkVHlwZSA9IFwiTm9ybWFsXCI7XG5cbiAgQFZpZXdDaGlsZChKc29uRWRpdG9yQ29tcG9uZW50LCB7c3RhdGljOiBmYWxzZX0pIGVkaXRvcjogSnNvbkVkaXRvckNvbXBvbmVudDtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGFzaGJvYXJkU2VydmljZTogRGFzaGJvYXJkU2VydmljZSkgeyAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICB0aGlzLmVkaXRvck1vZGVsU2NoZW1hID0gdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLmVuaXRpdHlNb2RlbFNjaGVtYSh0aGlzLnNlbGVjdGVkKTtcbiAgICB0aGlzLmZvcm1Nb2RlbFNjaGVtYSA9IHRoaXMuZGFzaGJvYXJkU2VydmljZS5zY2hlbWEubW9kZWwuZm9ybTtcbiAgICB0aGlzLmVkaXRvclVJU2NoZW1hID0gdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLnVpU2NoZW1hKHRoaXMuc2VsZWN0ZWRUeXBlKTtcbiAgICB0aGlzLmZvcm1VSVNjaGVtYSA9IHRoaXMuZGFzaGJvYXJkU2VydmljZS5zY2hlbWEudWkuZm9ybTtcbiAgfVxuXG5cbiAgcmVpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgdWlTY2hlbWFDaGFuZ2UgPSAoZGF0YSkgPT4ge1xuICAgIHRoaXMuZm9ybVVJU2NoZW1hID0gIGRhdGE7XG4gIH1cblxuICBtb2RlbFNjaGVtYUNoYW5nZSA9IChkYXRhKSA9PiB7XG4gICAgdGhpcy5mb3JtTW9kZWxTY2hlbWEgPSBkYXRhO1xuICB9XG5cbiAgc2V0VWlTY2hlbWEgPSAoaWQpID0+IHtcbiAgICB0aGlzLmVkaXRvclVJU2NoZW1hID0gdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLnVpU2NoZW1hKGlkKTtcbiAgICB0aGlzLmZvcm1VSVNjaGVtYSA9IHRoaXMuZGFzaGJvYXJkU2VydmljZS5zY2hlbWEudWkuZm9ybTtcbiAgfVxufVxuIl19
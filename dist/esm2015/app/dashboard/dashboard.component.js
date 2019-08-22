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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQU9uRCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQW9CN0IsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFsQnRELFdBQU0sR0FBRztZQUNQLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBQztZQUN4RCxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUM7WUFDL0QsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDM0QsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO1NBQ3JDLENBQUM7UUFFRixhQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFLL0IsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixpQkFBWSxHQUFHLFFBQVEsQ0FBQztRQVd4QixlQUFVLEdBQUcsR0FBRyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQy9ELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDM0QsQ0FBQyxDQUFBO1FBR0QsaUJBQVksR0FBRyxHQUFHLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQTtRQUVELG1CQUFjLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsWUFBWSxHQUFJLElBQUksQ0FBQztRQUM1QixDQUFDLENBQUE7UUFFRCxzQkFBaUIsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUMsQ0FBQTtRQUVELGdCQUFXLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDM0QsQ0FBQyxDQUFBO0lBN0IwRCxDQUFDO0lBRTVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztDQTBCRixDQUFBO0FBakNrRDtJQUFoRCxTQUFTLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7c0NBQVMsbUJBQW1CO2tEQUFDO0FBakJsRSxrQkFBa0I7SUFMOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFDekIsaTZDQUF5Qzs7S0FFMUMsQ0FBQzs2Q0FxQnNDLGdCQUFnQjtHQXBCM0Msa0JBQWtCLENBa0Q5QjtTQWxEWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Rhc2hib2FyZFNlcnZpY2V9IGZyb20gXCIuL2Rhc2hib2FyZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0pzb25FZGl0b3JDb21wb25lbnR9IGZyb20gXCJhbmctanNvbmVkaXRvclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWRhc2hib2FyZFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZGFzaGJvYXJkLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBlbnRpdHkgPSBbXG4gICAge25hbWU6IFwiQWxpcXVvdFwifSwge25hbWU6IFwiQ2FzZVwifSwge25hbWU6IFwiRGVtb2dyYXBoaWNcIn0sXG4gICAge25hbWU6IFwiRGlhZ25vc2lzXCJ9LCB7bmFtZTogXCJFeHBlcmltZW50XCJ9LCB7bmFtZTogXCJJbnN0cnVtZW50XCJ9LFxuICAgIHtuYW1lOiBcIkluc3RydW1lbnRNb2RlbFwifSwge25hbWU6IFwiTGFiXCJ9LCB7bmFtZTogXCJQcm9qZWN0XCJ9LFxuICAgIHtuYW1lOiBcIlByb3RvY29sXCJ9LCB7bmFtZTogXCJTYW1wbGVcIn1cbiAgXTtcblxuICBmb3JtVHlwZSA9IFtcIk5vcm1hbFwiLCBcIkdyb3VwXCJdO1xuICBlZGl0b3JNb2RlbFNjaGVtYTogYW55O1xuICBmb3JtTW9kZWxTY2hlbWE6IGFueTtcbiAgZWRpdG9yVUlTY2hlbWE6IGFueTtcbiAgZm9ybVVJU2NoZW1hOiBhbnk7XG4gIHNlbGVjdGVkID0gXCJQcm90b2NvbFwiO1xuICBzZWxlY3RlZFR5cGUgPSBcIk5vcm1hbFwiO1xuXG4gIEBWaWV3Q2hpbGQoSnNvbkVkaXRvckNvbXBvbmVudCwge3N0YXRpYzogZmFsc2V9KSBlZGl0b3I6IEpzb25FZGl0b3JDb21wb25lbnQ7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhc2hib2FyZFNlcnZpY2U6IERhc2hib2FyZFNlcnZpY2UpIHsgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgdGhpcy5lZGl0b3JNb2RlbFNjaGVtYSA9IHRoaXMuZGFzaGJvYXJkU2VydmljZS5lbml0aXR5TW9kZWxTY2hlbWEodGhpcy5zZWxlY3RlZCk7XG4gICAgdGhpcy5mb3JtTW9kZWxTY2hlbWEgPSB0aGlzLmRhc2hib2FyZFNlcnZpY2Uuc2NoZW1hLm1vZGVsLmZvcm07XG4gICAgdGhpcy5lZGl0b3JVSVNjaGVtYSA9IHRoaXMuZGFzaGJvYXJkU2VydmljZS51aVNjaGVtYSh0aGlzLnNlbGVjdGVkVHlwZSk7XG4gICAgdGhpcy5mb3JtVUlTY2hlbWEgPSB0aGlzLmRhc2hib2FyZFNlcnZpY2Uuc2NoZW1hLnVpLmZvcm07XG4gIH1cblxuXG4gIHJlaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIHVpU2NoZW1hQ2hhbmdlID0gKGRhdGEpID0+IHtcbiAgICB0aGlzLmZvcm1VSVNjaGVtYSA9ICBkYXRhO1xuICB9XG5cbiAgbW9kZWxTY2hlbWFDaGFuZ2UgPSAoZGF0YSkgPT4ge1xuICAgIHRoaXMuZm9ybU1vZGVsU2NoZW1hID0gZGF0YTtcbiAgfVxuXG4gIHNldFVpU2NoZW1hID0gKGlkKSA9PiB7XG4gICAgdGhpcy5lZGl0b3JVSVNjaGVtYSA9IHRoaXMuZGFzaGJvYXJkU2VydmljZS51aVNjaGVtYShpZCk7XG4gICAgdGhpcy5mb3JtVUlTY2hlbWEgPSB0aGlzLmRhc2hib2FyZFNlcnZpY2Uuc2NoZW1hLnVpLmZvcm07XG4gIH1cbn1cbiJdfQ==
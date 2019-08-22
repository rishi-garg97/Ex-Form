import { OnInit } from "@angular/core";
import { DashboardService } from "./dashboard.service";
import { JsonEditorComponent } from "ang-jsoneditor";
export declare class DashboardComponent implements OnInit {
    private dashboardService;
    entity: {
        name: string;
    }[];
    formType: string[];
    editorModelSchema: any;
    formModelSchema: any;
    editorUISchema: any;
    formUISchema: any;
    selected: string;
    selectedType: string;
    editor: JsonEditorComponent;
    constructor(dashboardService: DashboardService);
    ngOnInit(): void;
    initialize: () => void;
    reinitialize: () => void;
    uiSchemaChange: (data: any) => void;
    modelSchemaChange: (data: any) => void;
    setUiSchema: (id: any) => void;
}

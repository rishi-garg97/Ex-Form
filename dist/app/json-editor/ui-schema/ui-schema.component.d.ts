import { EventEmitter, OnInit } from "@angular/core";
import { JsonEditorComponent, JsonEditorOptions } from "ang-jsoneditor";
export declare class UiSchemaComponent implements OnInit {
    editor: JsonEditorComponent;
    uiSchemaData: any;
    uiSchemaChange: EventEmitter<{}>;
    uiSchemaEditorOptions: JsonEditorOptions;
    constructor();
    ngOnInit(): void;
    getData(event: any): void;
}

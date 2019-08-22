import { EventEmitter, OnInit } from "@angular/core";
import { JsonEditorComponent, JsonEditorOptions } from "ang-jsoneditor";
export declare class ModelSchemaComponent implements OnInit {
    editor: JsonEditorComponent;
    modelSchemaData: any;
    modelSchemaChange: EventEmitter<{}>;
    modelSchemaEditorOptions: JsonEditorOptions;
    constructor();
    ngOnInit(): void;
    getData(event: any): void;
}

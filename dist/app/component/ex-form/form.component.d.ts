import { OnChanges, OnInit, SimpleChanges } from "@angular/core";
export declare class FormComponent implements OnInit, OnChanges {
    modelSchema: any;
    uiSchema: any;
    modifiedUiSchema: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    initialize: () => void;
    formatFields: (schema: any) => any;
}

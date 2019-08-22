import { OnChanges, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
export declare class SimpleComponent implements OnInit, OnChanges {
    private formBuilder;
    formGroup: FormGroup;
    uiSchema: any;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    ngOnChanges(): void;
    addControl: (data: any) => void;
    getFormValue: () => void;
    reset: () => void;
}

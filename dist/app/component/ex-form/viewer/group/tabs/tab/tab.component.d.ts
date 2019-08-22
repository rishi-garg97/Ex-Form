import { OnChanges, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
export declare class TabComponent implements OnInit, OnChanges {
    private formBuilder;
    formGroup: FormGroup;
    uiSchema: any;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    ngOnChanges(): void;
    buildStepFormGroup: () => void;
    addControl: (data: any) => void;
    formValue: () => void;
    reset: () => void;
}

import { OnInit, OnChanges } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
export declare class StepFormComponent implements OnInit, OnChanges {
    private formBuilder;
    formGroup: FormGroup;
    uiSchema: any;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    ngOnChanges(): void;
    addControl: (data: any) => void;
    formValue: () => void;
    reset: () => void;
}

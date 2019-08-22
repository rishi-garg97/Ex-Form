import { OnChanges, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
export declare class AccordianComponent implements OnInit, OnChanges {
    private formBuilder;
    formGroup: FormGroup;
    step: number;
    uiSchema: any;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    ngOnChanges(): void;
    addControl: (data: any) => void;
    formValue: () => void;
    reset: () => void;
    setStep(index: number): void;
    nextStep(): void;
    prevStep(): void;
}

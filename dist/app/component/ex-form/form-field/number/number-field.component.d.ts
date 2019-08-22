import { EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ValidationMessageGeneratorService } from "../../validators/validation-message-generator.service";
export declare class NumberFieldComponent implements OnInit {
    private formBuilder;
    private validationMessageGenerator;
    formGroup: FormGroup;
    property: any;
    addControl: EventEmitter<{}>;
    constructor(formBuilder: FormBuilder, validationMessageGenerator: ValidationMessageGeneratorService);
    ngOnInit(): void;
    addValidator: () => void;
    getError: () => any;
}

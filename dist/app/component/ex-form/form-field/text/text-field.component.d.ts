import { OnInit, EventEmitter, OnChanges } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ValidationMessageGeneratorService } from "../../validators/validation-message-generator.service";
export declare class TextFieldComponent implements OnInit, OnChanges {
    private formBuilder;
    private validationMessageGenerator;
    formGroup: FormGroup;
    property: any;
    addControl: EventEmitter<{}>;
    constructor(formBuilder: FormBuilder, validationMessageGenerator: ValidationMessageGeneratorService);
    ngOnInit(): void;
    ngOnChanges(): void;
    addValidator: () => void;
    getError: () => any;
}

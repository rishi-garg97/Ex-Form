import { OnInit, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ValidationMessageGeneratorService } from "../../validators/validation-message-generator.service";
export declare class DropdownComponent implements OnInit {
    private formBuilder;
    private validationMessageGenerator;
    formGroup: FormGroup;
    property: any;
    addControl: EventEmitter<{}>;
    constructor(formBuilder: FormBuilder, validationMessageGenerator: ValidationMessageGeneratorService);
    ngOnInit(): void;
    addValidator(): void;
    getError: () => any;
}

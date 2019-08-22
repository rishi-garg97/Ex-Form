import { BaseValidators } from "./base-validator";
import { Validators } from "@angular/forms";
export declare class RequiredValidator implements BaseValidators {
    constructor();
    get: () => typeof Validators.required;
}

import { BaseValidators } from "./base-validator";
export declare class MinLengthValidator implements BaseValidators {
    constructor();
    get: (minLength: any) => import("@angular/forms").ValidatorFn;
}

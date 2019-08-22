/**
 * Created by rgarg on 08-07-2019.
 */
import { BaseValidators } from "./base-validator";
export declare class MaxLengthValidator implements BaseValidators {
    constructor();
    get: (maxLength: any) => import("@angular/forms").ValidatorFn;
}

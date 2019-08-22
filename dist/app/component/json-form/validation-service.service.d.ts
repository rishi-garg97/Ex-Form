import { FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
export declare class ValidationServiceService {
    private formBuilder;
    private http;
    schema: any;
    constructor(formBuilder: FormBuilder, http: HttpClient);
    getErrorMessage(control: any): string;
    enableUnit(field: any, myForm: any): void;
    buildForm: () => import("@angular/forms").FormGroup;
}

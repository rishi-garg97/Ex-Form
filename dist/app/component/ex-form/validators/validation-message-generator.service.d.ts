import { HttpClient } from "@angular/common/http";
import { CommonService } from "../../../service/common.service";
export declare class ValidationMessageGeneratorService {
    private http;
    private commonService;
    validationMessage: any;
    constructor(http: HttpClient, commonService: CommonService);
    errorMessage: (formGroup: any, property: any) => any;
}

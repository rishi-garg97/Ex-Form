import { HttpClient } from "@angular/common/http";
export declare class CommonService {
    private http;
    signUpJson: any;
    errorMessageJson: any;
    constructor(http: HttpClient);
    showHideSpinner: (show: any) => void;
    loadSignUpJson: () => Promise<void>;
    getValidationErrorMesageJson: () => Promise<void>;
}

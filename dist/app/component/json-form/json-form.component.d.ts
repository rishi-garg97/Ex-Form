import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ValidationServiceService } from "./validation-service.service";
import { HttpClient } from "@angular/common/http";
export declare class JsonFormComponent implements OnInit {
    private validationService;
    private http;
    title: string;
    formGroup: FormGroup;
    schema: any;
    constructor(validationService: ValidationServiceService, http: HttpClient);
    ngOnInit(): void;
    getEror(control: any): string;
    getError(control: any): string;
    login: () => void;
    reset: () => void;
    enable: (field: any) => void;
}

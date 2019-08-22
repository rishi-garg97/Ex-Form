import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { CommonService } from "../../service/common.service";
import { SnackBarMessageService } from "../../service/snack-bar-message.service";
import { HttpClient } from "@angular/common/http";
export declare class SignupComponent implements OnInit {
    private router;
    dialogRef: MatDialogRef<SignupComponent>;
    data: any;
    private formBuilder;
    private http;
    authService: AuthService;
    private commonService;
    private snackBarMessageService;
    formGroup: FormGroup;
    schema: any;
    constructor(router: Router, dialogRef: MatDialogRef<SignupComponent>, data: any, formBuilder: FormBuilder, http: HttpClient, authService: AuthService, commonService: CommonService, snackBarMessageService: SnackBarMessageService);
    ngOnInit(): void;
    signup: () => Promise<void>;
    cancel(): void;
    getError: (fieldName: any) => string;
    addControl: (data: any) => void;
}

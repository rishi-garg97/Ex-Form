import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { CommonService } from "../../service/common.service";
import { SnackBarMessageService } from "../../service/snack-bar-message.service";
export declare class LoginComponent implements OnInit {
    private router;
    dialogRef: MatDialogRef<LoginComponent>;
    data: any;
    private formBuilder;
    authService: AuthService;
    private commonService;
    private snackBarMessageService;
    private dialog;
    formGroup: FormGroup;
    constructor(router: Router, dialogRef: MatDialogRef<LoginComponent>, data: any, formBuilder: FormBuilder, authService: AuthService, commonService: CommonService, snackBarMessageService: SnackBarMessageService, dialog: MatDialog);
    ngOnInit(): void;
    login: (mode: any) => Promise<void>;
    cancel(): void;
    getError: (fieldName: any) => string;
    openSignupDialog: () => void;
}

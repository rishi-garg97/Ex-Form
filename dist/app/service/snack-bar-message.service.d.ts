import { MatSnackBar, MatSnackBarConfig } from "@angular/material";
export declare class SnackBarMessageService {
    private snackBar;
    config: MatSnackBarConfig;
    constructor(snackBar: MatSnackBar);
    show: (message: any, action?: any) => void;
}

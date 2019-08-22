import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AuthService } from "../../entryComponent/services/auth.service";
export declare class ToolBarComponent implements OnInit {
    private dialog;
    authService: AuthService;
    constructor(dialog: MatDialog, authService: AuthService);
    ngOnInit(): void;
    openLoginDialog: () => void;
    openSignupDialog: () => void;
}

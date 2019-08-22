import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../entryComponent/services/auth.service";
import { MatDialog } from "@angular/material";
import { DashboardService } from "../dashboard/dashboard.service";
export declare class AuthenticationGuard implements CanActivate {
    private authService;
    private router;
    private dialog;
    private dashboardService;
    constructor(authService: AuthService, router: Router, dialog: MatDialog, dashboardService: DashboardService);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
    init: () => Promise<boolean>;
}

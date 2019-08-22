import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import {AuthService} from "../entryComponent/services/auth.service";
import {MatDialog} from "@angular/material";
import {LoginComponent} from "../entryComponent/login/login.component";
import {DashboardService} from "../dashboard/dashboard.service";

@Injectable({
  providedIn: "root"
})

export class AuthenticationGuard implements CanActivate  {

  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog,
              private dashboardService: DashboardService) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.authService.isLoggedIn) {
      const dialogRef = this.dialog.open(LoginComponent);

      dialogRef.afterClosed().subscribe(result => {
      });
      return false;
    }

    return this.init();
  }

  init = async () => {
    this.dashboardService.modelSchema = await this.dashboardService.init();
    this.dashboardService.UISchema = await this.dashboardService.initUiSchema();
    return true;
  }
}

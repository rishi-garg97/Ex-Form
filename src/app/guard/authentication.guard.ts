import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import {AuthService} from "../entryComponent/services/auth.service";
import {MatDialog} from "@angular/material";
import {LoginComponent} from "../entryComponent/login/login.component";
@Injectable({
  providedIn: "root"
})

export class AuthenticationGuard implements CanActivate  {

  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.authService.isLoggedIn) {
      const dialogRef = this.dialog.open(LoginComponent);

      dialogRef.afterClosed().subscribe(result => {
      });
      return false;
    }

    return true;
  }
}

import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../entryComponent/services/auth.service";
import { MatDialog } from "@angular/material";
import { LoginComponent } from "../entryComponent/login/login.component";
import { DashboardService } from "../dashboard/dashboard.service";
import * as i0 from "@angular/core";
import * as i1 from "../entryComponent/services/auth.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/dialog";
import * as i4 from "../dashboard/dashboard.service";
var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(authService, router, dialog, dashboardService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.dashboardService = dashboardService;
        this.init = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.dashboardService;
                        return [4 /*yield*/, this.dashboardService.init()];
                    case 1:
                        _a.modelSchema = _b.sent();
                        return [2 /*return*/, true];
                }
            });
        }); };
    }
    AuthenticationGuard.prototype.canActivate = function (next, state) {
        if (!this.authService.isLoggedIn) {
            var dialogRef = this.dialog.open(LoginComponent);
            dialogRef.afterClosed().subscribe(function (result) {
            });
            return false;
        }
        return this.init();
    };
    AuthenticationGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthenticationGuard_Factory() { return new AuthenticationGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.MatDialog), i0.ɵɵinject(i4.DashboardService)); }, token: AuthenticationGuard, providedIn: "root" });
    AuthenticationGuard = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router, MatDialog,
            DashboardService])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());
export { AuthenticationGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9ndWFyZC9hdXRoZW50aWNhdGlvbi5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXNDLE1BQU0sRUFBK0IsTUFBTSxpQkFBaUIsQ0FBQztBQUUxRyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBTWhFO0lBRUUsNkJBQW9CLFdBQXdCLEVBQVUsTUFBYyxFQUFVLE1BQWlCLEVBQzNFLGdCQUFrQztRQUR0RCxpQkFHQztRQUhtQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQzNFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFnQnRELFNBQUksR0FBRzs7Ozs7d0JBQ0wsS0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUE7d0JBQWUscUJBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBdEUsR0FBc0IsV0FBVyxHQUFHLFNBQWtDLENBQUM7d0JBQ3ZFLHNCQUFPLElBQUksRUFBQzs7O2FBQ2IsQ0FBQTtJQWpCRCxDQUFDO0lBQ0QseUNBQVcsR0FBWCxVQUFZLElBQTRCLEVBQUUsS0FBMEI7UUFFbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO1lBQ2hDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRW5ELFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7O0lBakJVLG1CQUFtQjtRQUovQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO2lEQUlpQyxXQUFXLEVBQWtCLE1BQU0sRUFBa0IsU0FBUztZQUN6RCxnQkFBZ0I7T0FIM0MsbUJBQW1CLENBdUIvQjs4QkFuQ0Q7Q0FtQ0MsQUF2QkQsSUF1QkM7U0F2QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL2VudHJ5Q29tcG9uZW50L3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtNYXREaWFsb2d9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSBcIi4uL2VudHJ5Q29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEYXNoYm9hcmRTZXJ2aWNlfSBmcm9tIFwiLi4vZGFzaGJvYXJkL2Rhc2hib2FyZC5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUgIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkYXNoYm9hcmRTZXJ2aWNlOiBEYXNoYm9hcmRTZXJ2aWNlKSB7XG5cbiAgfVxuICBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG5cbiAgICBpZiAoIXRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbikge1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihMb2dpbkNvbXBvbmVudCk7XG5cbiAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgICB0aGlzLmRhc2hib2FyZFNlcnZpY2UubW9kZWxTY2hlbWEgPSBhd2FpdCB0aGlzLmRhc2hib2FyZFNlcnZpY2UuaW5pdCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=
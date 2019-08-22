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
let AuthenticationGuard = class AuthenticationGuard {
    constructor(authService, router, dialog, dashboardService) {
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.dashboardService = dashboardService;
        this.init = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.dashboardService.modelSchema = yield this.dashboardService.init();
            return true;
        });
    }
    canActivate(next, state) {
        if (!this.authService.isLoggedIn) {
            const dialogRef = this.dialog.open(LoginComponent);
            dialogRef.afterClosed().subscribe(result => {
            });
            return false;
        }
        return this.init();
    }
};
AuthenticationGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthenticationGuard_Factory() { return new AuthenticationGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.MatDialog), i0.ɵɵinject(i4.DashboardService)); }, token: AuthenticationGuard, providedIn: "root" });
AuthenticationGuard = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService, Router, MatDialog,
        DashboardService])
], AuthenticationGuard);
export { AuthenticationGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2d1YXJkL2F1dGhlbnRpY2F0aW9uLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBc0MsTUFBTSxFQUErQixNQUFNLGlCQUFpQixDQUFDO0FBRTFHLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDNUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7QUFNaEUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFFOUIsWUFBb0IsV0FBd0IsRUFBVSxNQUFjLEVBQVUsTUFBaUIsRUFDM0UsZ0JBQWtDO1FBRGxDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDM0UscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWdCdEQsU0FBSSxHQUFHLEdBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZFLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFBLENBQUE7SUFqQkQsQ0FBQztJQUNELFdBQVcsQ0FBQyxJQUE0QixFQUFFLEtBQTBCO1FBRWxFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTtZQUNoQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUVuRCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FNRixDQUFBOztBQXZCWSxtQkFBbUI7SUFKL0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQzs2Q0FJaUMsV0FBVyxFQUFrQixNQUFNLEVBQWtCLFNBQVM7UUFDekQsZ0JBQWdCO0dBSDNDLG1CQUFtQixDQXVCL0I7U0F2QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL2VudHJ5Q29tcG9uZW50L3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtNYXREaWFsb2d9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSBcIi4uL2VudHJ5Q29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEYXNoYm9hcmRTZXJ2aWNlfSBmcm9tIFwiLi4vZGFzaGJvYXJkL2Rhc2hib2FyZC5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUgIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkYXNoYm9hcmRTZXJ2aWNlOiBEYXNoYm9hcmRTZXJ2aWNlKSB7XG5cbiAgfVxuICBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG5cbiAgICBpZiAoIXRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbikge1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihMb2dpbkNvbXBvbmVudCk7XG5cbiAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgICB0aGlzLmRhc2hib2FyZFNlcnZpY2UubW9kZWxTY2hlbWEgPSBhd2FpdCB0aGlzLmRhc2hib2FyZFNlcnZpY2UuaW5pdCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=
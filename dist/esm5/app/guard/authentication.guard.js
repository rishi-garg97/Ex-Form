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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2d1YXJkL2F1dGhlbnRpY2F0aW9uLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBc0MsTUFBTSxFQUErQixNQUFNLGlCQUFpQixDQUFDO0FBRTFHLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDNUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7QUFNaEU7SUFFRSw2QkFBb0IsV0FBd0IsRUFBVSxNQUFjLEVBQVUsTUFBaUIsRUFDM0UsZ0JBQWtDO1FBRHRELGlCQUdDO1FBSG1CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDM0UscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWdCdEQsU0FBSSxHQUFHOzs7Ozt3QkFDTCxLQUFBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQTt3QkFBZSxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUF0RSxHQUFzQixXQUFXLEdBQUcsU0FBa0MsQ0FBQzt3QkFDdkUsc0JBQU8sSUFBSSxFQUFDOzs7YUFDYixDQUFBO0lBakJELENBQUM7SUFDRCx5Q0FBVyxHQUFYLFVBQVksSUFBNEIsRUFBRSxLQUEwQjtRQUVsRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7WUFDaEMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFbkQsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDeEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7SUFqQlUsbUJBQW1CO1FBSi9CLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7aURBSWlDLFdBQVcsRUFBa0IsTUFBTSxFQUFrQixTQUFTO1lBQ3pELGdCQUFnQjtPQUgzQyxtQkFBbUIsQ0F1Qi9COzhCQW5DRDtDQW1DQyxBQXZCRCxJQXVCQztTQXZCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vZW50cnlDb21wb25lbnQvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge01hdERpYWxvZ30gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi4vZW50cnlDb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQge0Rhc2hib2FyZFNlcnZpY2V9IGZyb20gXCIuLi9kYXNoYm9hcmQvZGFzaGJvYXJkLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcblxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSAge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgICAgICAgICAgICBwcml2YXRlIGRhc2hib2FyZFNlcnZpY2U6IERhc2hib2FyZFNlcnZpY2UpIHtcblxuICB9XG4gIGNhbkFjdGl2YXRlKG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcblxuICAgIGlmICghdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKSB7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKExvZ2luQ29tcG9uZW50KTtcblxuICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRoaXMuZGFzaGJvYXJkU2VydmljZS5tb2RlbFNjaGVtYSA9IGF3YWl0IHRoaXMuZGFzaGJvYXJkU2VydmljZS5pbml0KCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==
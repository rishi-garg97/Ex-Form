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
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.dashboardService;
                        return [4 /*yield*/, this.dashboardService.init()];
                    case 1:
                        _a.modelSchema = _c.sent();
                        _b = this.dashboardService;
                        return [4 /*yield*/, this.dashboardService.initUiSchema()];
                    case 2:
                        _b.UISchema = _c.sent();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9ndWFyZC9hdXRoZW50aWNhdGlvbi5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXNDLE1BQU0sRUFBK0IsTUFBTSxpQkFBaUIsQ0FBQztBQUUxRyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBTWhFO0lBRUUsNkJBQW9CLFdBQXdCLEVBQVUsTUFBYyxFQUFVLE1BQWlCLEVBQzNFLGdCQUFrQztRQUR0RCxpQkFHQztRQUhtQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQzNFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFnQnRELFNBQUksR0FBRzs7Ozs7d0JBQ0wsS0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUE7d0JBQWUscUJBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBdEUsR0FBc0IsV0FBVyxHQUFHLFNBQWtDLENBQUM7d0JBQ3ZFLEtBQUEsSUFBSSxDQUFDLGdCQUFnQixDQUFBO3dCQUFZLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsRUFBQTs7d0JBQTNFLEdBQXNCLFFBQVEsR0FBRyxTQUEwQyxDQUFDO3dCQUM1RSxzQkFBTyxJQUFJLEVBQUM7OzthQUNiLENBQUE7SUFsQkQsQ0FBQztJQUNELHlDQUFXLEdBQVgsVUFBWSxJQUE0QixFQUFFLEtBQTBCO1FBRWxFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTtZQUNoQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUVuRCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN4QyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOztJQWpCVSxtQkFBbUI7UUFKL0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztpREFJaUMsV0FBVyxFQUFrQixNQUFNLEVBQWtCLFNBQVM7WUFDekQsZ0JBQWdCO09BSDNDLG1CQUFtQixDQXdCL0I7OEJBcENEO0NBb0NDLEFBeEJELElBd0JDO1NBeEJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9lbnRyeUNvbXBvbmVudC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7TWF0RGlhbG9nfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuLi9lbnRyeUNvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7RGFzaGJvYXJkU2VydmljZX0gZnJvbSBcIi4uL2Rhc2hib2FyZC9kYXNoYm9hcmQuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlICB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgICAgICAgICAgIHByaXZhdGUgZGFzaGJvYXJkU2VydmljZTogRGFzaGJvYXJkU2VydmljZSkge1xuXG4gIH1cbiAgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuXG4gICAgaWYgKCF0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4pIHtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTG9naW5Db21wb25lbnQpO1xuXG4gICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLm1vZGVsU2NoZW1hID0gYXdhaXQgdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLmluaXQoKTtcbiAgICB0aGlzLmRhc2hib2FyZFNlcnZpY2UuVUlTY2hlbWEgPSBhd2FpdCB0aGlzLmRhc2hib2FyZFNlcnZpY2UuaW5pdFVpU2NoZW1hKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9ndWFyZC9hdXRoZW50aWNhdGlvbi5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXNDLE1BQU0sRUFBK0IsTUFBTSxpQkFBaUIsQ0FBQztBQUUxRyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBTWhFLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBRTlCLFlBQW9CLFdBQXdCLEVBQVUsTUFBYyxFQUFVLE1BQWlCLEVBQzNFLGdCQUFrQztRQURsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQzNFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFnQnRELFNBQUksR0FBRyxHQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2RSxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQSxDQUFBO0lBakJELENBQUM7SUFDRCxXQUFXLENBQUMsSUFBNEIsRUFBRSxLQUEwQjtRQUVsRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7WUFDaEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFbkQsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzQyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBTUYsQ0FBQTs7QUF2QlksbUJBQW1CO0lBSi9CLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7NkNBSWlDLFdBQVcsRUFBa0IsTUFBTSxFQUFrQixTQUFTO1FBQ3pELGdCQUFnQjtHQUgzQyxtQkFBbUIsQ0F1Qi9CO1NBdkJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9lbnRyeUNvbXBvbmVudC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7TWF0RGlhbG9nfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuLi9lbnRyeUNvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7RGFzaGJvYXJkU2VydmljZX0gZnJvbSBcIi4uL2Rhc2hib2FyZC9kYXNoYm9hcmQuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlICB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgICAgICAgICAgIHByaXZhdGUgZGFzaGJvYXJkU2VydmljZTogRGFzaGJvYXJkU2VydmljZSkge1xuXG4gIH1cbiAgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuXG4gICAgaWYgKCF0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4pIHtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTG9naW5Db21wb25lbnQpO1xuXG4gICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLm1vZGVsU2NoZW1hID0gYXdhaXQgdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLmluaXQoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { LoginComponent } from "../../entryComponent/login/login.component";
import { SignupComponent } from "../../entryComponent/signup/signup.component";
import { AuthService } from "../../entryComponent/services/auth.service";
var ToolBarComponent = /** @class */ (function () {
    function ToolBarComponent(dialog, authService) {
        var _this = this;
        this.dialog = dialog;
        this.authService = authService;
        this.openLoginDialog = function () {
            var dialogRef = _this.dialog.open(LoginComponent);
            dialogRef.afterClosed().subscribe(function (result) {
            });
        };
        this.openSignupDialog = function () {
            var dialogRef = _this.dialog.open(SignupComponent);
            dialogRef.afterClosed().subscribe(function (result) {
            });
        };
    }
    ToolBarComponent.prototype.ngOnInit = function () {
    };
    ToolBarComponent = tslib_1.__decorate([
        Component({
            selector: "app-tool-bar",
            template: "<mat-toolbar color=\"primary\">\n  <span>Dynamic Form</span>\n\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"example-fill-remaining-space\"></span>\n\n  <!-- login Button -->\n  <button mat-button (click)=\"openLoginDialog()\" *ngIf=\"!authService.isLoggedIn\">Login</button>\n  <button mat-button (click)=\"openSignupDialog()\" *ngIf=\"!authService.isLoggedIn\">Sign Up</button>\n  <button mat-button (click)=\"authService.SignOut()\" *ngIf=\"authService.isLoggedIn\">Logout</button>\n\n\n</mat-toolbar>\n",
            styles: [".example-fill-remaining-space{flex:1 1 auto}"]
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialog, AuthService])
    ], ToolBarComponent);
    return ToolBarComponent;
}());
export { ToolBarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvaGVhZGVyL3Rvb2wtYmFyL3Rvb2wtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDNUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFRdkU7SUFFRSwwQkFBb0IsTUFBaUIsRUFBUyxXQUF3QjtRQUF0RSxpQkFBMkU7UUFBdkQsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBS3RFLG9CQUFlLEdBQUc7WUFDaEIsSUFBTSxTQUFTLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFbkQsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFFTCxDQUFDLENBQUE7UUFFRCxxQkFBZ0IsR0FBRztZQUNqQixJQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVwRCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN4QyxDQUFDLENBQUMsQ0FBQztRQUVMLENBQUMsQ0FBQTtJQW5CeUUsQ0FBQztJQUUzRSxtQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUxVLGdCQUFnQjtRQUw1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4Qix1aUJBQXdDOztTQUV6QyxDQUFDO2lEQUc0QixTQUFTLEVBQXNCLFdBQVc7T0FGM0QsZ0JBQWdCLENBdUI1QjtJQUFELHVCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F2QlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtNYXREaWFsb2d9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2VudHJ5Q29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuLi8uLi9lbnRyeUNvbXBvbmVudC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL2VudHJ5Q29tcG9uZW50L3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtdG9vbC1iYXJcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi90b29sLWJhci5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdG9vbC1iYXIuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBUb29sQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLCBwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9wZW5Mb2dpbkRpYWxvZyA9ICgpOiB2b2lkICA9PiB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihMb2dpbkNvbXBvbmVudCk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICB9KTtcblxuICB9XG5cbiAgb3BlblNpZ251cERpYWxvZyA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFNpZ251cENvbXBvbmVudCk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICB9KTtcblxuICB9XG5cbn1cbiJdfQ==
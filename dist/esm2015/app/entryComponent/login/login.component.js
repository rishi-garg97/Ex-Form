import * as tslib_1 from "tslib";
import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { CommonService } from "../../service/common.service";
import { SnackBarMessageService } from "../../service/snack-bar-message.service";
import { SignupComponent } from "../signup/signup.component";
let LoginComponent = class LoginComponent {
    constructor(router, dialogRef, data, formBuilder, authService, commonService, snackBarMessageService, dialog) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.commonService = commonService;
        this.snackBarMessageService = snackBarMessageService;
        this.dialog = dialog;
        this.login = (mode) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.commonService.showHideSpinner(true);
            try {
                if (mode === "google") {
                    this.commonService.showHideSpinner(false);
                    yield this.authService.GoogleAuth();
                }
                else {
                    yield this.authService.SignIn(this.formGroup.controls["email"].value, this.formGroup.controls["password"].value);
                    this.commonService.showHideSpinner(false);
                }
                this.snackBarMessageService.show("LogIn Successfull");
                this.router.navigate(["dashboard"]);
                this.dialogRef.close();
            }
            catch (error) {
                if (error) {
                    if (error.code === "auth/user-not-found") {
                        this.openSignupDialog();
                    }
                    else {
                        this.snackBarMessageService.show(error.message);
                    }
                }
                this.commonService.showHideSpinner(false);
            }
        });
        this.getError = (fieldName) => {
            if (this.formGroup.controls[fieldName].hasError("required")) {
                return fieldName + " is required. ";
            }
            if (this.formGroup.controls[fieldName].hasError("email")) {
                return "Invalid Email !";
            }
            return "error";
        };
        this.openSignupDialog = () => {
            this.dialog.closeAll();
            const dialogRef = this.dialog.open(SignupComponent);
            dialogRef.afterClosed().subscribe(result => {
            });
        };
    }
    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            email: ["r@gmail.com", [Validators.required, Validators.email]],
            password: ["rishi1997", [Validators.required]]
        });
        this.authService.getUsers();
    }
    cancel() {
        this.dialogRef.close();
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: "app-login",
        template: "<div class=\"main\">\n  <h2 mat-dialog-title>Login</h2>\n\n  <mat-dialog-content>\n    <form class=\"example-form\" [formGroup]=\"formGroup\">\n\n      <div class=\"col-sm-12\" style=\"padding: 0;margin-top:7px\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n          <mat-error *ngIf=\"formGroup.controls['email'].invalid\">{{getError(\"email\")}}</mat-error>\n\n        </mat-form-field>\n\n      </div>\n      <div class=\"col-sm-12\" style=\"padding: 0;margin-top:7px\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input matInput  type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n          <mat-error *ngIf=\"formGroup.controls['password'].invalid\">{{getError(\"password\")}}</mat-error>\n\n        </mat-form-field>\n      </div>\n\n\n\n\n    </form>\n\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n\n      <div class=\"googleLogin\" style=\"width:100%\">\n        <button mat-raised-button color=\"warn\" (click)=\"login('google')\" style=\"width:100%\">\n          <span><i class=\"fab fa-google-plus-g\"></i>&nbsp;&nbsp;Log in with Google</span>\n        </button>\n\n\n\n      </div>\n\n    <div class=\"login-actions col-sm-12 row\">\n      <div class=\"col-sm-6\">\n        <button mat-raised-button color=\"primary\" (click)=\"login('email')\" [disabled]=\"this.formGroup.invalid\">Login</button>\n\n      </div>\n      <div class=\"col-sm-6\">\n        <button mat-raised-button (click)=\"cancel()\">Cancel</button>\n\n      </div>\n\n    </div>\n\n    <!--<button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">-->\n      <!--<i class=\"fab fa-google-plus-g\"></i>-->\n      <!--Log in with Google-->\n    <!--</button>-->\n  </mat-dialog-actions>\n\n</div>\n",
        styles: [".main{width:300px;height:280px}.mat-form-field{display:block}.googleLogin{color:#fff;margin-left:0}.login-actions{margin:6px 0 0;text-align:center;padding:0}.login-actions button{width:100%}.login-actions div{padding:0}.login-actions div:first-child{padding-right:5px}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}"]
    }),
    tslib_1.__param(2, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [Router, MatDialogRef, Object, FormBuilder, AuthService, CommonService,
        SnackBarMessageService, MatDialog])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9lbnRyeUNvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUMsV0FBVyxFQUFhLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBTTNELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFHekIsWUFBb0IsTUFBYyxFQUFTLFNBQXVDLEVBQWlDLElBQVMsRUFDeEcsV0FBd0IsRUFBUyxXQUF3QixFQUFVLGFBQTRCLEVBQy9GLHNCQUE4QyxFQUFVLE1BQWlCO1FBRnpFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUE4QjtRQUFpQyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ3hHLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMvRiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQVk3RixVQUFLLEdBQUcsQ0FBTyxJQUFJLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV6QyxJQUFJO2dCQUNGLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtvQkFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzFDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztpQkFDckM7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2pILElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMzQztnQkFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFFcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUV4QjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLElBQUksS0FBSyxFQUFFO29CQUNSLElBQUssS0FBSyxDQUFDLElBQUksS0FBSyxxQkFBcUIsRUFBRTt3QkFDekMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7cUJBQ3pCO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUNqRDtpQkFDSDtnQkFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUUzQztRQUVILENBQUMsQ0FBQSxDQUFBO1FBS0QsYUFBUSxHQUFHLENBQUMsU0FBUyxFQUFVLEVBQUU7WUFFL0IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzNELE9BQU8sU0FBUyxHQUFHLGdCQUFnQixDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3hELE9BQU8saUJBQWlCLENBQUM7YUFDMUI7WUFFRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUE7UUFDRCxxQkFBZ0IsR0FBRyxHQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUdwRCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1FBRUwsQ0FBQyxDQUFBO0lBL0RELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN0QyxLQUFLLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvRCxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FFL0MsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBOEJELE1BQU07UUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0F1QkYsQ0FBQTtBQXZFWSxjQUFjO0lBTDFCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLCs1REFBcUM7O0tBRXRDLENBQUM7SUFJcUYsbUJBQUEsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFBOzZDQUFoRixNQUFNLEVBQW9CLFlBQVksVUFDakMsV0FBVyxFQUFzQixXQUFXLEVBQXlCLGFBQWE7UUFDdkUsc0JBQXNCLEVBQWtCLFNBQVM7R0FMbEYsY0FBYyxDQXVFMUI7U0F2RVksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWZ9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtDb21tb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZS9jb21tb24uc2VydmljZVwiO1xuaW1wb3J0IHtTbmFja0Jhck1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZS9zbmFjay1iYXItbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSBcIi4uL3NpZ251cC9zaWdudXAuY29tcG9uZW50XCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWxvZ2luXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TG9naW5Db21wb25lbnQ+LCBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSlwdWJsaWMgZGF0YTogYW55LFxuICAgICAgICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBjb21tb25TZXJ2aWNlOiBDb21tb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHNuYWNrQmFyTWVzc2FnZVNlcnZpY2U6IFNuYWNrQmFyTWVzc2FnZVNlcnZpY2UsIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2cgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFtcInJAZ21haWwuY29tXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXV0sXG4gICAgICBwYXNzd29yZDogW1wicmlzaGkxOTk3XCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cblxuICAgIH0pO1xuXG4gICAgdGhpcy5hdXRoU2VydmljZS5nZXRVc2VycygpO1xuICB9XG4gIGxvZ2luID0gYXN5bmMgKG1vZGUpID0+IHtcbiAgICB0aGlzLmNvbW1vblNlcnZpY2Uuc2hvd0hpZGVTcGlubmVyKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChtb2RlID09PSBcImdvb2dsZVwiKSB7XG4gICAgICAgIHRoaXMuY29tbW9uU2VydmljZS5zaG93SGlkZVNwaW5uZXIoZmFsc2UpO1xuICAgICAgICBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLkdvb2dsZUF1dGgoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuU2lnbkluKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiZW1haWxcIl0udmFsdWUsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wicGFzc3dvcmRcIl0udmFsdWUpO1xuICAgICAgICB0aGlzLmNvbW1vblNlcnZpY2Uuc2hvd0hpZGVTcGlubmVyKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc25hY2tCYXJNZXNzYWdlU2VydmljZS5zaG93KFwiTG9nSW4gU3VjY2Vzc2Z1bGxcIik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJkYXNoYm9hcmRcIl0pO1xuXG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgaWYgKCBlcnJvci5jb2RlID09PSBcImF1dGgvdXNlci1ub3QtZm91bmRcIikge1xuICAgICAgICAgICB0aGlzLm9wZW5TaWdudXBEaWFsb2coKTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHRoaXMuc25hY2tCYXJNZXNzYWdlU2VydmljZS5zaG93KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLnNob3dIaWRlU3Bpbm5lcihmYWxzZSk7XG5cbiAgICB9XG5cbiAgfVxuICBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG4gIGdldEVycm9yID0gKGZpZWxkTmFtZSk6IHN0cmluZyA9PiB7XG5cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGROYW1lXS5oYXNFcnJvcihcInJlcXVpcmVkXCIpKSB7XG4gICAgICByZXR1cm4gZmllbGROYW1lICsgXCIgaXMgcmVxdWlyZWQuIFwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGROYW1lXS5oYXNFcnJvcihcImVtYWlsXCIpKSB7XG4gICAgICByZXR1cm4gXCJJbnZhbGlkIEVtYWlsICFcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJlcnJvclwiO1xuICB9XG4gIG9wZW5TaWdudXBEaWFsb2cgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5kaWFsb2cuY2xvc2VBbGwoKTtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFNpZ251cENvbXBvbmVudCk7XG5cblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgIH0pO1xuXG4gIH1cblxufVxuXG5cblxuIl19
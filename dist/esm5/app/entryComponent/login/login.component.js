import * as tslib_1 from "tslib";
import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { CommonService } from "../../service/common.service";
import { SnackBarMessageService } from "../../service/snack-bar-message.service";
import { SignupComponent } from "../signup/signup.component";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, dialogRef, data, formBuilder, authService, commonService, snackBarMessageService, dialog) {
        var _this = this;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.commonService = commonService;
        this.snackBarMessageService = snackBarMessageService;
        this.dialog = dialog;
        this.login = function (mode) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.commonService.showHideSpinner(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!(mode === "google")) return [3 /*break*/, 3];
                        this.commonService.showHideSpinner(false);
                        return [4 /*yield*/, this.authService.GoogleAuth()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.authService.SignIn(this.formGroup.controls["email"].value, this.formGroup.controls["password"].value)];
                    case 4:
                        _a.sent();
                        this.commonService.showHideSpinner(false);
                        _a.label = 5;
                    case 5:
                        this.snackBarMessageService.show("LogIn Successfull");
                        this.router.navigate(["dashboard"]);
                        this.dialogRef.close();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        if (error_1) {
                            if (error_1.code === "auth/user-not-found") {
                                this.openSignupDialog();
                            }
                            else {
                                this.snackBarMessageService.show(error_1.message);
                            }
                        }
                        this.commonService.showHideSpinner(false);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.getError = function (fieldName) {
            if (_this.formGroup.controls[fieldName].hasError("required")) {
                return fieldName + " is required. ";
            }
            if (_this.formGroup.controls[fieldName].hasError("email")) {
                return "Invalid Email !";
            }
            return "error";
        };
        this.openSignupDialog = function () {
            _this.dialog.closeAll();
            var dialogRef = _this.dialog.open(SignupComponent);
            dialogRef.afterClosed().subscribe(function (result) {
            });
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formBuilder.group({
            email: ["r@gmail.com", [Validators.required, Validators.email]],
            password: ["rishi1997", [Validators.required]]
        });
        this.authService.getUsers();
    };
    LoginComponent.prototype.cancel = function () {
        this.dialogRef.close();
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
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9lbnRyeUNvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUMsV0FBVyxFQUFhLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBTTNEO0lBR0Usd0JBQW9CLE1BQWMsRUFBUyxTQUF1QyxFQUFpQyxJQUFTLEVBQ3hHLFdBQXdCLEVBQVMsV0FBd0IsRUFBVSxhQUE0QixFQUMvRixzQkFBOEMsRUFBVSxNQUFpQjtRQUY3RixpQkFHQztRQUhtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBOEI7UUFBaUMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUN4RyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDL0YsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVc7UUFZN0YsVUFBSyxHQUFHLFVBQU8sSUFBSTs7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LENBQUM7UUFJcUYsbUJBQUEsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFBO2lEQUFoRixNQUFNLEVBQW9CLFlBQVksVUFDakMsV0FBVyxFQUFzQixXQUFXLEVBQXlCLGFBQWE7WUFDdkUsc0JBQXNCLEVBQWtCLFNBQVM7T0FMbEYsY0FBYyxDQXVFMUI7SUFBRCxxQkFBQztDQUFBLEFBdkVELElBdUVDO1NBdkVZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZywgTWF0RGlhbG9nUmVmfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29tbW9uU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvY29tbW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7U25hY2tCYXJNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2Uvc25hY2stYmFyLW1lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudFwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1sb2dpblwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9sb2dpbi5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPExvZ2luQ29tcG9uZW50PiwgQEluamVjdChNQVRfRElBTE9HX0RBVEEpcHVibGljIGRhdGE6IGFueSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgY29tbW9uU2VydmljZTogQ29tbW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzbmFja0Jhck1lc3NhZ2VTZXJ2aWNlOiBTbmFja0Jhck1lc3NhZ2VTZXJ2aWNlLCBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbXCJyQGdtYWlsLmNvbVwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1dLFxuICAgICAgcGFzc3dvcmQ6IFtcInJpc2hpMTk5N1wiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG5cbiAgICB9KTtcblxuICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlcnMoKTtcbiAgfVxuICBsb2dpbiA9IGFzeW5jIChtb2RlKSA9PiB7XG4gICAgdGhpcy5jb21tb25TZXJ2aWNlLnNob3dIaWRlU3Bpbm5lcih0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBpZiAobW9kZSA9PT0gXCJnb29nbGVcIikge1xuICAgICAgICB0aGlzLmNvbW1vblNlcnZpY2Uuc2hvd0hpZGVTcGlubmVyKGZhbHNlKTtcbiAgICAgICAgYXdhaXQgdGhpcy5hdXRoU2VydmljZS5Hb29nbGVBdXRoKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLlNpZ25Jbih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcImVtYWlsXCJdLnZhbHVlLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcInBhc3N3b3JkXCJdLnZhbHVlKTtcbiAgICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLnNob3dIaWRlU3Bpbm5lcihmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNuYWNrQmFyTWVzc2FnZVNlcnZpY2Uuc2hvdyhcIkxvZ0luIFN1Y2Nlc3NmdWxsXCIpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZGFzaGJvYXJkXCJdKTtcblxuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgIGlmICggZXJyb3IuY29kZSA9PT0gXCJhdXRoL3VzZXItbm90LWZvdW5kXCIpIHtcbiAgICAgICAgICAgdGhpcy5vcGVuU2lnbnVwRGlhbG9nKCk7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICB0aGlzLnNuYWNrQmFyTWVzc2FnZVNlcnZpY2Uuc2hvdyhlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY29tbW9uU2VydmljZS5zaG93SGlkZVNwaW5uZXIoZmFsc2UpO1xuXG4gICAgfVxuXG4gIH1cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxuICBnZXRFcnJvciA9IChmaWVsZE5hbWUpOiBzdHJpbmcgPT4ge1xuXG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkTmFtZV0uaGFzRXJyb3IoXCJyZXF1aXJlZFwiKSkge1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZSArIFwiIGlzIHJlcXVpcmVkLiBcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkTmFtZV0uaGFzRXJyb3IoXCJlbWFpbFwiKSkge1xuICAgICAgcmV0dXJuIFwiSW52YWxpZCBFbWFpbCAhXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiZXJyb3JcIjtcbiAgfVxuICBvcGVuU2lnbnVwRGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuZGlhbG9nLmNsb3NlQWxsKCk7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihTaWdudXBDb21wb25lbnQpO1xuXG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICB9KTtcblxuICB9XG5cbn1cblxuXG5cbiJdfQ==
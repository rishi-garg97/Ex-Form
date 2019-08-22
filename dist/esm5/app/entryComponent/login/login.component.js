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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvZW50cnlDb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDM0UsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQU0zRDtJQUdFLHdCQUFvQixNQUFjLEVBQVMsU0FBdUMsRUFBaUMsSUFBUyxFQUN4RyxXQUF3QixFQUFTLFdBQXdCLEVBQVUsYUFBNEIsRUFDL0Ysc0JBQThDLEVBQVUsTUFBaUI7UUFGN0YsaUJBR0M7UUFIbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQThCO1FBQWlDLFNBQUksR0FBSixJQUFJLENBQUs7UUFDeEcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQy9GLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBWTdGLFVBQUssR0FBRyxVQUFPLElBQUk7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QyxDQUFDO1FBSXFGLG1CQUFBLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQTtpREFBaEYsTUFBTSxFQUFvQixZQUFZLFVBQ2pDLFdBQVcsRUFBc0IsV0FBVyxFQUF5QixhQUFhO1lBQ3ZFLHNCQUFzQixFQUFrQixTQUFTO09BTGxGLGNBQWMsQ0F1RTFCO0lBQUQscUJBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQXZFWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2csIE1hdERpYWxvZ1JlZn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbW1vblNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2NvbW1vbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1NuYWNrQmFyTWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL3NuYWNrLWJhci1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi4vc2lnbnVwL3NpZ251cC5jb21wb25lbnRcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtbG9naW5cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbG9naW4uY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxMb2dpbkNvbXBvbmVudD4sIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKXB1YmxpYyBkYXRhOiBhbnksXG4gICAgICAgICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGNvbW1vblNlcnZpY2U6IENvbW1vblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgc25hY2tCYXJNZXNzYWdlU2VydmljZTogU25hY2tCYXJNZXNzYWdlU2VydmljZSwgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBlbWFpbDogW1wickBnbWFpbC5jb21cIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcbiAgICAgIHBhc3N3b3JkOiBbXCJyaXNoaTE5OTdcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuXG4gICAgfSk7XG5cbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJzKCk7XG4gIH1cbiAgbG9naW4gPSBhc3luYyAobW9kZSkgPT4ge1xuICAgIHRoaXMuY29tbW9uU2VydmljZS5zaG93SGlkZVNwaW5uZXIodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKG1vZGUgPT09IFwiZ29vZ2xlXCIpIHtcbiAgICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLnNob3dIaWRlU3Bpbm5lcihmYWxzZSk7XG4gICAgICAgIGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuR29vZ2xlQXV0aCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy5hdXRoU2VydmljZS5TaWduSW4odGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJlbWFpbFwiXS52YWx1ZSwgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJwYXNzd29yZFwiXS52YWx1ZSk7XG4gICAgICAgIHRoaXMuY29tbW9uU2VydmljZS5zaG93SGlkZVNwaW5uZXIoZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5zbmFja0Jhck1lc3NhZ2VTZXJ2aWNlLnNob3coXCJMb2dJbiBTdWNjZXNzZnVsbFwiKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImRhc2hib2FyZFwiXSk7XG5cbiAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICBpZiAoIGVycm9yLmNvZGUgPT09IFwiYXV0aC91c2VyLW5vdC1mb3VuZFwiKSB7XG4gICAgICAgICAgIHRoaXMub3BlblNpZ251cERpYWxvZygpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgdGhpcy5zbmFja0Jhck1lc3NhZ2VTZXJ2aWNlLnNob3coZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNvbW1vblNlcnZpY2Uuc2hvd0hpZGVTcGlubmVyKGZhbHNlKTtcblxuICAgIH1cblxuICB9XG4gIGNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbiAgZ2V0RXJyb3IgPSAoZmllbGROYW1lKTogc3RyaW5nID0+IHtcblxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZE5hbWVdLmhhc0Vycm9yKFwicmVxdWlyZWRcIikpIHtcbiAgICAgIHJldHVybiBmaWVsZE5hbWUgKyBcIiBpcyByZXF1aXJlZC4gXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZE5hbWVdLmhhc0Vycm9yKFwiZW1haWxcIikpIHtcbiAgICAgIHJldHVybiBcIkludmFsaWQgRW1haWwgIVwiO1xuICAgIH1cblxuICAgIHJldHVybiBcImVycm9yXCI7XG4gIH1cbiAgb3BlblNpZ251cERpYWxvZyA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLmRpYWxvZy5jbG9zZUFsbCgpO1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oU2lnbnVwQ29tcG9uZW50KTtcblxuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgfSk7XG5cbiAgfVxuXG59XG5cblxuXG4iXX0=
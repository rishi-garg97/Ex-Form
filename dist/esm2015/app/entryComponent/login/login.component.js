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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvZW50cnlDb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDM0UsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQU0zRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBR3pCLFlBQW9CLE1BQWMsRUFBUyxTQUF1QyxFQUFpQyxJQUFTLEVBQ3hHLFdBQXdCLEVBQVMsV0FBd0IsRUFBVSxhQUE0QixFQUMvRixzQkFBOEMsRUFBVSxNQUFpQjtRQUZ6RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBOEI7UUFBaUMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUN4RyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDL0YsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVc7UUFZN0YsVUFBSyxH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LENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQiwrNURBQXFDOztLQUV0QyxDQUFDO0lBSXFGLG1CQUFBLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQTs2Q0FBaEYsTUFBTSxFQUFvQixZQUFZLFVBQ2pDLFdBQVcsRUFBc0IsV0FBVyxFQUF5QixhQUFhO1FBQ3ZFLHNCQUFzQixFQUFrQixTQUFTO0dBTGxGLGNBQWMsQ0F1RTFCO1NBdkVZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZywgTWF0RGlhbG9nUmVmfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29tbW9uU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvY29tbW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7U25hY2tCYXJNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2Uvc25hY2stYmFyLW1lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudFwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1sb2dpblwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9sb2dpbi5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPExvZ2luQ29tcG9uZW50PiwgQEluamVjdChNQVRfRElBTE9HX0RBVEEpcHVibGljIGRhdGE6IGFueSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgY29tbW9uU2VydmljZTogQ29tbW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzbmFja0Jhck1lc3NhZ2VTZXJ2aWNlOiBTbmFja0Jhck1lc3NhZ2VTZXJ2aWNlLCBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbXCJyQGdtYWlsLmNvbVwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1dLFxuICAgICAgcGFzc3dvcmQ6IFtcInJpc2hpMTk5N1wiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG5cbiAgICB9KTtcblxuICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlcnMoKTtcbiAgfVxuICBsb2dpbiA9IGFzeW5jIChtb2RlKSA9PiB7XG4gICAgdGhpcy5jb21tb25TZXJ2aWNlLnNob3dIaWRlU3Bpbm5lcih0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBpZiAobW9kZSA9PT0gXCJnb29nbGVcIikge1xuICAgICAgICB0aGlzLmNvbW1vblNlcnZpY2Uuc2hvd0hpZGVTcGlubmVyKGZhbHNlKTtcbiAgICAgICAgYXdhaXQgdGhpcy5hdXRoU2VydmljZS5Hb29nbGVBdXRoKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLlNpZ25Jbih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcImVtYWlsXCJdLnZhbHVlLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcInBhc3N3b3JkXCJdLnZhbHVlKTtcbiAgICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLnNob3dIaWRlU3Bpbm5lcihmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNuYWNrQmFyTWVzc2FnZVNlcnZpY2Uuc2hvdyhcIkxvZ0luIFN1Y2Nlc3NmdWxsXCIpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZGFzaGJvYXJkXCJdKTtcblxuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgIGlmICggZXJyb3IuY29kZSA9PT0gXCJhdXRoL3VzZXItbm90LWZvdW5kXCIpIHtcbiAgICAgICAgICAgdGhpcy5vcGVuU2lnbnVwRGlhbG9nKCk7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICB0aGlzLnNuYWNrQmFyTWVzc2FnZVNlcnZpY2Uuc2hvdyhlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY29tbW9uU2VydmljZS5zaG93SGlkZVNwaW5uZXIoZmFsc2UpO1xuXG4gICAgfVxuXG4gIH1cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxuICBnZXRFcnJvciA9IChmaWVsZE5hbWUpOiBzdHJpbmcgPT4ge1xuXG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkTmFtZV0uaGFzRXJyb3IoXCJyZXF1aXJlZFwiKSkge1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZSArIFwiIGlzIHJlcXVpcmVkLiBcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkTmFtZV0uaGFzRXJyb3IoXCJlbWFpbFwiKSkge1xuICAgICAgcmV0dXJuIFwiSW52YWxpZCBFbWFpbCAhXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiZXJyb3JcIjtcbiAgfVxuICBvcGVuU2lnbnVwRGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuZGlhbG9nLmNsb3NlQWxsKCk7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihTaWdudXBDb21wb25lbnQpO1xuXG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICB9KTtcblxuICB9XG5cbn1cblxuXG5cbiJdfQ==
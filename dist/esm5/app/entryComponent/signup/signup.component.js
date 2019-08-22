import * as tslib_1 from "tslib";
import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { CommonService } from "../../service/common.service";
import { SnackBarMessageService } from "../../service/snack-bar-message.service";
import { HttpClient } from "@angular/common/http";
var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, dialogRef, data, formBuilder, http, authService, commonService, snackBarMessageService) {
        var _this = this;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.http = http;
        this.authService = authService;
        this.commonService = commonService;
        this.snackBarMessageService = snackBarMessageService;
        this.formGroup = this.formBuilder.group({});
        this.schema = this.commonService.signUpJson;
        this.signup = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.commonService.showHideSpinner(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.authService.SignUp(this.formGroup.controls["email"].value["email"], this.formGroup.controls["password"].value["password"])];
                    case 2:
                        _a.sent();
                        // this.authService.sendVerificationMail();
                        this.commonService.showHideSpinner(false);
                        this.router.navigate(["dashboard"]);
                        this.snackBarMessageService.show("User Registered Successfully");
                        this.dialogRef.close();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1) {
                            console.log(error_1);
                            this.snackBarMessageService.show(error_1.message);
                        }
                        this.commonService.showHideSpinner(false);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getError = function (fieldName) {
            if (_this.formGroup.controls[fieldName].hasError("required")) {
                return "You must enter a value";
            }
            if (_this.formGroup.controls[fieldName].hasError("pattern") && fieldName === ("password" || "confirmPassword")) {
                return "This field contain only character value.";
            }
            if (_this.formGroup.controls[fieldName].hasError("pattern")) {
                return "This field contain only character value.";
            }
            if (_this.formGroup.controls[fieldName].hasError("email")) {
                return "Invalid Email !";
            }
            return "error";
        };
        this.addControl = function (data) {
            _this.formGroup.addControl(data.key, data.value);
            _this.formGroup.updateValueAndValidity();
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    SignupComponent = tslib_1.__decorate([
        Component({
            selector: "app-signup",
            template: "<div class=\"main\">\n  <h2 mat-dialog-title>Sign Up</h2>\n  <mat-dialog-content>\n    <form [formGroup]=\"formGroup\" class=\"ex-form\">\n      <div>\n        <ng-container *ngFor=\"let property of schema.properties;let i=index;\">\n          <!--Form field for text input  -->\n          <div class=\"form-group\" *ngIf=\"property.dataType=='String'\">\n            <app-text-field [property]=\"property\"\n                            (addControl)= \"addControl($event)\" >\n            </app-text-field>\n          </div>\n\n          <!--Form field for number input  -->\n          <div class=\"form-group\" *ngIf=\"property.dataType=='Number'\" style=\"margin-bottom:0;\">\n\n            <app-number-field [property]=\"property\"\n                              (addControl)= \"addControl($event)\" >\n            </app-number-field>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"property.dataType=='Email'\" style=\"margin-bottom:0;\">\n\n            <app-email-field  [property]=\"property\"\n                              (addControl)= \"addControl($event)\" >\n            </app-email-field>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"property.dataType=='Password'\" style=\"margin-bottom:0;\">\n\n            <app-password-field  [property]=\"property\"\n                                 (addControl)= \"addControl($event)\" >\n            </app-password-field>\n          </div>\n\n        </ng-container>\n      </div>\n\n    </form>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-button (click)=\"signup()\" [disabled]=\"!formGroup.valid\" color=\"primary\">Sign Up</button>\n    <button mat-button (click)=\"cancel()\" color=\"primary\">Cancel</button>\n\n  </mat-dialog-actions>\n\n</div>\n",
            styles: [".asterik{color:red}.main{width:450px}.form-group{padding:0;margin-bottom:3px}.mat-form-field{-webkit-appearance:none;-moz-appearance:none;appearance:none}::ng-deep .mat-form-field-flex>.mat-form-field-infix{padding:.35em 0!important}::ng-deep .mat-form-field-label-wrapper{top:-1.5em}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.1em) scale(.75);transform:translateY(-1.1em) scale(.75);width:133.33333%}.mat-form-field-wrapper{padding:0}"]
        }),
        tslib_1.__param(2, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [Router, MatDialogRef, Object, FormBuilder, HttpClient, AuthService,
            CommonService, SnackBarMessageService])
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2VudHJ5Q29tcG9uZW50L3NpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFNaEQ7SUFJRSx5QkFBb0IsTUFBYyxFQUFTLFNBQXdDLEVBQWlDLElBQVMsRUFDekcsV0FBd0IsRUFBVSxJQUFnQixFQUFTLFdBQXdCLEVBQ25GLGFBQTRCLEVBQVUsc0JBQThDO1FBRnhHLGlCQUdDO1FBSG1CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUErQjtRQUFpQyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ3pHLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ25GLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUx4RyxjQUFTLEdBQWMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENB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LHNCQUFDO0NBQUEsQUE3REQsSUE2REM7U0E3RFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbW1vblNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2NvbW1vbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1NuYWNrQmFyTWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL3NuYWNrLWJhci1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLXNpZ251cFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3NpZ251cC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vc2lnbnVwLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHt9KTtcbiAgc2NoZW1hOiBhbnkgPSB0aGlzLmNvbW1vblNlcnZpY2Uuc2lnblVwSnNvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8U2lnbnVwQ29tcG9uZW50PiwgQEluamVjdChNQVRfRElBTE9HX0RBVEEpcHVibGljIGRhdGE6IGFueSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb21tb25TZXJ2aWNlOiBDb21tb25TZXJ2aWNlLCBwcml2YXRlIHNuYWNrQmFyTWVzc2FnZVNlcnZpY2U6IFNuYWNrQmFyTWVzc2FnZVNlcnZpY2UgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG5cbiAgc2lnbnVwID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgdGhpcy5jb21tb25TZXJ2aWNlLnNob3dIaWRlU3Bpbm5lcih0cnVlKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5hdXRoU2VydmljZS5TaWduVXAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJlbWFpbFwiXS52YWx1ZVtcImVtYWlsXCJdLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcInBhc3N3b3JkXCJdLnZhbHVlW1wicGFzc3dvcmRcIl0pO1xuICAgICAvLyB0aGlzLmF1dGhTZXJ2aWNlLnNlbmRWZXJpZmljYXRpb25NYWlsKCk7XG4gICAgICB0aGlzLmNvbW1vblNlcnZpY2Uuc2hvd0hpZGVTcGlubmVyKGZhbHNlKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImRhc2hib2FyZFwiXSk7XG4gICAgICB0aGlzLnNuYWNrQmFyTWVzc2FnZVNlcnZpY2Uuc2hvdyhcIlVzZXIgUmVnaXN0ZXJlZCBTdWNjZXNzZnVsbHlcIik7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHRoaXMuc25hY2tCYXJNZXNzYWdlU2VydmljZS5zaG93KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLnNob3dIaWRlU3Bpbm5lcihmYWxzZSk7XG5cbiAgICB9XG4gIH1cblxuICBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcblxuICB9XG4gIGdldEVycm9yID0gKGZpZWxkTmFtZSk6IHN0cmluZyA9PiB7XG5cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGROYW1lXS5oYXNFcnJvcihcInJlcXVpcmVkXCIpKSB7XG4gICAgICByZXR1cm4gXCJZb3UgbXVzdCBlbnRlciBhIHZhbHVlXCIgO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGROYW1lXS5oYXNFcnJvcihcInBhdHRlcm5cIikgJiYgZmllbGROYW1lID09PSAoXCJwYXNzd29yZFwiIHx8IFwiY29uZmlybVBhc3N3b3JkXCIpKSB7XG4gICAgICByZXR1cm4gXCJUaGlzIGZpZWxkIGNvbnRhaW4gb25seSBjaGFyYWN0ZXIgdmFsdWUuXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZE5hbWVdLmhhc0Vycm9yKFwicGF0dGVyblwiKSkge1xuICAgICAgcmV0dXJuIFwiVGhpcyBmaWVsZCBjb250YWluIG9ubHkgY2hhcmFjdGVyIHZhbHVlLlwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGROYW1lXS5oYXNFcnJvcihcImVtYWlsXCIpKSB7XG4gICAgICByZXR1cm4gXCJJbnZhbGlkIEVtYWlsICFcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJlcnJvclwiO1xuICB9XG5cbiAgYWRkQ29udHJvbCA9IChkYXRhKSA9PiB7XG4gICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbChkYXRhLmtleSwgZGF0YS52YWx1ZSk7XG4gICAgdGhpcy5mb3JtR3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICB9XG5cbn1cblxuXG5cblxuXG5cblxuIl19
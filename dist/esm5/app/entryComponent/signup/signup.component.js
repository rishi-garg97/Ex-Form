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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3Vsci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvZW50cnlDb21wb25lbnQvc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFFLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxXQUFXLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQU1oRDtJQUlFLHlCQUFvQixNQUFjLEVBQVMsU0FBd0MsRUFBaUMsSUFBUyxFQUN6RyxXQUF3QixFQUFVLElBQWdCLEVBQVMsV0FBd0IsRUFDbkYsYUFBNEIsRUFBVSxzQkFBOEM7UUFGeEcsaUJBR0M7UUFIbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQStCO1FBQWlDLFNBQUksR0FBSixJQUFJLENBQUs7UUFDekcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDbkYsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBTHhHLGNBQVMsR0FBYyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FB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c0JBQUM7Q0FBQSxBQTdERCxJQTZEQztTQTdEWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWZ9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29tbW9uU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvY29tbW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7U25hY2tCYXJNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2Uvc25hY2stYmFyLW1lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtc2lnbnVwXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vc2lnbnVwLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zaWdudXAuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe30pO1xuICBzY2hlbWE6IGFueSA9IHRoaXMuY29tbW9uU2VydmljZS5zaWduVXBKc29uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxTaWdudXBDb21wb25lbnQ+LCBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSlwdWJsaWMgZGF0YTogYW55LFxuICAgICAgICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGNvbW1vblNlcnZpY2U6IENvbW1vblNlcnZpY2UsIHByaXZhdGUgc25hY2tCYXJNZXNzYWdlU2VydmljZTogU25hY2tCYXJNZXNzYWdlU2VydmljZSApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cblxuICBzaWdudXAgPSBhc3luYyAoKSA9PiB7XG5cbiAgICB0aGlzLmNvbW1vblNlcnZpY2Uuc2hvd0hpZGVTcGlubmVyKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLlNpZ25VcCh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcImVtYWlsXCJdLnZhbHVlW1wiZW1haWxcIl0sIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wicGFzc3dvcmRcIl0udmFsdWVbXCJwYXNzd29yZFwiXSk7XG4gICAgIC8vIHRoaXMuYXV0aFNlcnZpY2Uuc2VuZFZlcmlmaWNhdGlvbk1haWwoKTtcbiAgICAgIHRoaXMuY29tbW9uU2VydmljZS5zaG93SGlkZVNwaW5uZXIoZmFsc2UpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZGFzaGJvYXJkXCJdKTtcbiAgICAgIHRoaXMuc25hY2tCYXJNZXNzYWdlU2VydmljZS5zaG93KFwiVXNlciBSZWdpc3RlcmVkIFN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgdGhpcy5zbmFja0Jhck1lc3NhZ2VTZXJ2aWNlLnNob3coZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbW1vblNlcnZpY2Uuc2hvd0hpZGVTcGlubmVyKGZhbHNlKTtcblxuICAgIH1cbiAgfVxuXG4gIGNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuXG4gIH1cbiAgZ2V0RXJyb3IgPSAoZmllbGROYW1lKTogc3RyaW5nID0+IHtcblxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZE5hbWVdLmhhc0Vycm9yKFwicmVxdWlyZWRcIikpIHtcbiAgICAgIHJldHVybiBcIllvdSBtdXN0IGVudGVyIGEgdmFsdWVcIiA7XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZE5hbWVdLmhhc0Vycm9yKFwicGF0dGVyblwiKSAmJiBmaWVsZE5hbWUgPT09IChcInBhc3N3b3JkXCIgfHwgXCJjb25maXJtUGFzc3dvcmRcIikpIHtcbiAgICAgIHJldHVybiBcIlRoaXMgZmllbGQgY29udGFpbiBvbmx5IGNoYXJhY3RlciB2YWx1ZS5cIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkTmFtZV0uaGFzRXJyb3IoXCJwYXR0ZXJuXCIpKSB7XG4gICAgICByZXR1cm4gXCJUaGlzIGZpZWxkIGNvbnRhaW4gb25seSBjaGFyYWN0ZXIgdmFsdWUuXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZE5hbWVdLmhhc0Vycm9yKFwiZW1haWxcIikpIHtcbiAgICAgIHJldHVybiBcIkludmFsaWQgRW1haWwgIVwiO1xuICAgIH1cblxuICAgIHJldHVybiBcImVycm9yXCI7XG4gIH1cblxuICBhZGRDb250cm9sID0gKGRhdGEpID0+IHtcbiAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKGRhdGEua2V5LCBkYXRhLnZhbHVlKTtcbiAgICB0aGlzLmZvcm1Hcm91cC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIH1cblxufVxuXG5cblxuXG5cblxuXG4iXX0=
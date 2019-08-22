import * as tslib_1 from "tslib";
import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { CommonService } from "../../service/common.service";
import { SnackBarMessageService } from "../../service/snack-bar-message.service";
import { HttpClient } from "@angular/common/http";
let SignupComponent = class SignupComponent {
    constructor(router, dialogRef, data, formBuilder, http, authService, commonService, snackBarMessageService) {
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
        this.signup = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.commonService.showHideSpinner(true);
            try {
                yield this.authService.SignUp(this.formGroup.controls["email"].value["email"], this.formGroup.controls["password"].value["password"]);
                // this.authService.sendVerificationMail();
                this.commonService.showHideSpinner(false);
                this.router.navigate(["dashboard"]);
                this.snackBarMessageService.show("User Registered Successfully");
                this.dialogRef.close();
            }
            catch (error) {
                if (error) {
                    console.log(error);
                    this.snackBarMessageService.show(error.message);
                }
                this.commonService.showHideSpinner(false);
            }
        });
        this.getError = (fieldName) => {
            if (this.formGroup.controls[fieldName].hasError("required")) {
                return "You must enter a value";
            }
            if (this.formGroup.controls[fieldName].hasError("pattern") && fieldName === ("password" || "confirmPassword")) {
                return "This field contain only character value.";
            }
            if (this.formGroup.controls[fieldName].hasError("pattern")) {
                return "This field contain only character value.";
            }
            if (this.formGroup.controls[fieldName].hasError("email")) {
                return "Invalid Email !";
            }
            return "error";
        };
        this.addControl = (data) => {
            this.formGroup.addControl(data.key, data.value);
            this.formGroup.updateValueAndValidity();
        };
    }
    ngOnInit() {
    }
    cancel() {
        this.dialogRef.close();
    }
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
export { SignupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3Vsci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvZW50cnlDb21wb25lbnQvc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFFLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxXQUFXLEVBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQU1oRCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBSTFCLFlBQW9CLE1BQWMsRUFBUyxTQUF3QyxFQUFpQyxJQUFTLEVBQ3pHLFdBQXdCLEVBQVUsSUFBZ0IsRUFBUyxXQUF3QixFQUNuRixhQUE0QixFQUFVLHNCQUE4QztRQUZwRixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBK0I7UUFBaUMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUN6RyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNuRixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFMeEcsY0FBUyxHQUFjLElBQUksQ0FBQyxXQUFX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LEVBQXNCLFdBQVc7UUFDcEUsYUFBYSxFQUFrQyxzQkFBc0I7R0FON0YsZUFBZSxDQTZEM0I7U0E3RFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbW1vblNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2NvbW1vbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1NuYWNrQmFyTWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL3NuYWNrLWJhci1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLXNpZ251cFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3NpZ251cC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vc2lnbnVwLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHt9KTtcbiAgc2NoZW1hOiBhbnkgPSB0aGlzLmNvbW1vblNlcnZpY2Uuc2lnblVwSnNvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8U2lnbnVwQ29tcG9uZW50PiwgQEluamVjdChNQVRfRElBTE9HX0RBVEEpcHVibGljIGRhdGE6IGFueSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb21tb25TZXJ2aWNlOiBDb21tb25TZXJ2aWNlLCBwcml2YXRlIHNuYWNrQmFyTWVzc2FnZVNlcnZpY2U6IFNuYWNrQmFyTWVzc2FnZVNlcnZpY2UgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG5cbiAgc2lnbnVwID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgdGhpcy5jb21tb25TZXJ2aWNlLnNob3dIaWRlU3Bpbm5lcih0cnVlKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5hdXRoU2VydmljZS5TaWduVXAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJlbWFpbFwiXS52YWx1ZVtcImVtYWlsXCJdLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcInBhc3N3b3JkXCJdLnZhbHVlW1wicGFzc3dvcmRcIl0pO1xuICAgICAvLyB0aGlzLmF1dGhTZXJ2aWNlLnNlbmRWZXJpZmljYXRpb25NYWlsKCk7XG4gICAgICB0aGlzLmNvbW1vblNlcnZpY2Uuc2hvd0hpZGVTcGlubmVyKGZhbHNlKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImRhc2hib2FyZFwiXSk7XG4gICAgICB0aGlzLnNuYWNrQmFyTWVzc2FnZVNlcnZpY2Uuc2hvdyhcIlVzZXIgUmVnaXN0ZXJlZCBTdWNjZXNzZnVsbHlcIik7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHRoaXMuc25hY2tCYXJNZXNzYWdlU2VydmljZS5zaG93KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLnNob3dIaWRlU3Bpbm5lcihmYWxzZSk7XG5cbiAgICB9XG4gIH1cblxuICBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcblxuICB9XG4gIGdldEVycm9yID0gKGZpZWxkTmFtZSk6IHN0cmluZyA9PiB7XG5cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGROYW1lXS5oYXNFcnJvcihcInJlcXVpcmVkXCIpKSB7XG4gICAgICByZXR1cm4gXCJZb3UgbXVzdCBlbnRlciBhIHZhbHVlXCIgO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGROYW1lXS5oYXNFcnJvcihcInBhdHRlcm5cIikgJiYgZmllbGROYW1lID09PSAoXCJwYXNzd29yZFwiIHx8IFwiY29uZmlybVBhc3N3b3JkXCIpKSB7XG4gICAgICByZXR1cm4gXCJUaGlzIGZpZWxkIGNvbnRhaW4gb25seSBjaGFyYWN0ZXIgdmFsdWUuXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZE5hbWVdLmhhc0Vycm9yKFwicGF0dGVyblwiKSkge1xuICAgICAgcmV0dXJuIFwiVGhpcyBmaWVsZCBjb250YWluIG9ubHkgY2hhcmFjdGVyIHZhbHVlLlwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGROYW1lXS5oYXNFcnJvcihcImVtYWlsXCIpKSB7XG4gICAgICByZXR1cm4gXCJJbnZhbGlkIEVtYWlsICFcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJlcnJvclwiO1xuICB9XG5cbiAgYWRkQ29udHJvbCA9IChkYXRhKSA9PiB7XG4gICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbChkYXRhLmtleSwgZGF0YS52YWx1ZSk7XG4gICAgdGhpcy5mb3JtR3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICB9XG5cbn1cblxuXG5cblxuXG5cblxuIl19
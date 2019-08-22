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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2VudHJ5Q29tcG9uZW50L3NpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFNaEQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUkxQixZQUFvQixNQUFjLEVBQVMsU0FBd0MsRUFBaUMsSUFBUyxFQUN6RyxXQUF3QixFQUFVLElBQWdCLEVBQVMsV0FBd0IsRUFDbkYsYUFBNEIsRUFBVSxzQkFBOEM7UUFGcEYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQStCO1FBQWlDLFNBQUksR0FBSixJQUFJLENBQUs7UUFDekcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDbkYsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBTHhHLGNBQVMsR0FBYyxJQUFJLENBQUMsV0FB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VSxFQUFzQixXQUFXO1FBQ3BFLGFBQWEsRUFBa0Msc0JBQXNCO0dBTjdGLGVBQWUsQ0E2RDNCO1NBN0RZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtDb21tb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZS9jb21tb24uc2VydmljZVwiO1xuaW1wb3J0IHtTbmFja0Jhck1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZS9zbmFjay1iYXItbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1zaWdudXBcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9zaWdudXAuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3NpZ251cC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7fSk7XG4gIHNjaGVtYTogYW55ID0gdGhpcy5jb21tb25TZXJ2aWNlLnNpZ25VcEpzb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFNpZ251cENvbXBvbmVudD4sIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKXB1YmxpYyBkYXRhOiBhbnksXG4gICAgICAgICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29tbW9uU2VydmljZTogQ29tbW9uU2VydmljZSwgcHJpdmF0ZSBzbmFja0Jhck1lc3NhZ2VTZXJ2aWNlOiBTbmFja0Jhck1lc3NhZ2VTZXJ2aWNlICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuXG4gIHNpZ251cCA9IGFzeW5jICgpID0+IHtcblxuICAgIHRoaXMuY29tbW9uU2VydmljZS5zaG93SGlkZVNwaW5uZXIodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuU2lnblVwKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiZW1haWxcIl0udmFsdWVbXCJlbWFpbFwiXSwgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJwYXNzd29yZFwiXS52YWx1ZVtcInBhc3N3b3JkXCJdKTtcbiAgICAgLy8gdGhpcy5hdXRoU2VydmljZS5zZW5kVmVyaWZpY2F0aW9uTWFpbCgpO1xuICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLnNob3dIaWRlU3Bpbm5lcihmYWxzZSk7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJkYXNoYm9hcmRcIl0pO1xuICAgICAgdGhpcy5zbmFja0Jhck1lc3NhZ2VTZXJ2aWNlLnNob3coXCJVc2VyIFJlZ2lzdGVyZWQgU3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB0aGlzLnNuYWNrQmFyTWVzc2FnZVNlcnZpY2Uuc2hvdyhlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29tbW9uU2VydmljZS5zaG93SGlkZVNwaW5uZXIoZmFsc2UpO1xuXG4gICAgfVxuICB9XG5cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG5cbiAgfVxuICBnZXRFcnJvciA9IChmaWVsZE5hbWUpOiBzdHJpbmcgPT4ge1xuXG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkTmFtZV0uaGFzRXJyb3IoXCJyZXF1aXJlZFwiKSkge1xuICAgICAgcmV0dXJuIFwiWW91IG11c3QgZW50ZXIgYSB2YWx1ZVwiIDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkTmFtZV0uaGFzRXJyb3IoXCJwYXR0ZXJuXCIpICYmIGZpZWxkTmFtZSA9PT0gKFwicGFzc3dvcmRcIiB8fCBcImNvbmZpcm1QYXNzd29yZFwiKSkge1xuICAgICAgcmV0dXJuIFwiVGhpcyBmaWVsZCBjb250YWluIG9ubHkgY2hhcmFjdGVyIHZhbHVlLlwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGROYW1lXS5oYXNFcnJvcihcInBhdHRlcm5cIikpIHtcbiAgICAgIHJldHVybiBcIlRoaXMgZmllbGQgY29udGFpbiBvbmx5IGNoYXJhY3RlciB2YWx1ZS5cIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkTmFtZV0uaGFzRXJyb3IoXCJlbWFpbFwiKSkge1xuICAgICAgcmV0dXJuIFwiSW52YWxpZCBFbWFpbCAhXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiZXJyb3JcIjtcbiAgfVxuXG4gIGFkZENvbnRyb2wgPSAoZGF0YSkgPT4ge1xuICAgIHRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2woZGF0YS5rZXksIGRhdGEudmFsdWUpO1xuICAgIHRoaXMuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgfVxuXG59XG5cblxuXG5cblxuXG5cbiJdfQ==
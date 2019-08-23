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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9oZWFkZXIvdG9vbC1iYXIvdG9vbC1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQVF2RTtJQUVFLDBCQUFvQixNQUFpQixFQUFTLFdBQXdCO1FBQXRFLGlCQUEyRTtRQUF2RCxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFLdEUsb0JBQWUsR0FBRztZQUNoQixJQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUVuRCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN4QyxDQUFDLENBQUMsQ0FBQztRQUVMLENBQUMsQ0FBQTtRQUVELHFCQUFnQixHQUFHO1lBQ2pCLElBQU0sU0FBUyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRXBELFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBRUwsQ0FBQyxDQUFBO0lBbkJ5RSxDQUFDO0lBRTNFLG1DQUFRLEdBQVI7SUFDQSxDQUFDO0lBTFUsZ0JBQWdCO1FBTDVCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLHVpQkFBd0M7O1NBRXpDLENBQUM7aURBRzRCLFNBQVMsRUFBc0IsV0FBVztPQUYzRCxnQkFBZ0IsQ0F1QjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXZCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge01hdERpYWxvZ30gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vZW50cnlDb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2VudHJ5Q29tcG9uZW50L3NpZ251cC9zaWdudXAuY29tcG9uZW50XCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vZW50cnlDb21wb25lbnQvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC10b29sLWJhclwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3Rvb2wtYmFyLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi90b29sLWJhci5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csIHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb3BlbkxvZ2luRGlhbG9nID0gKCk6IHZvaWQgID0+IHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKExvZ2luQ29tcG9uZW50KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgIH0pO1xuXG4gIH1cblxuICBvcGVuU2lnbnVwRGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oU2lnbnVwQ29tcG9uZW50KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgIH0pO1xuXG4gIH1cblxufVxuIl19
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { LoginComponent } from "../../entryComponent/login/login.component";
import { SignupComponent } from "../../entryComponent/signup/signup.component";
import { AuthService } from "../../entryComponent/services/auth.service";
let ToolBarComponent = class ToolBarComponent {
    constructor(dialog, authService) {
        this.dialog = dialog;
        this.authService = authService;
        this.openLoginDialog = () => {
            const dialogRef = this.dialog.open(LoginComponent);
            dialogRef.afterClosed().subscribe(result => {
            });
        };
        this.openSignupDialog = () => {
            const dialogRef = this.dialog.open(SignupComponent);
            dialogRef.afterClosed().subscribe(result => {
            });
        };
    }
    ngOnInit() {
    }
};
ToolBarComponent = tslib_1.__decorate([
    Component({
        selector: "app-tool-bar",
        template: "<mat-toolbar color=\"primary\">\n  <span>Dynamic Form</span>\n\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"example-fill-remaining-space\"></span>\n\n  <!-- login Button -->\n  <button mat-button (click)=\"openLoginDialog()\" *ngIf=\"!authService.isLoggedIn\">Login</button>\n  <button mat-button (click)=\"openSignupDialog()\" *ngIf=\"!authService.isLoggedIn\">Sign Up</button>\n  <button mat-button (click)=\"authService.SignOut()\" *ngIf=\"authService.isLoggedIn\">Logout</button>\n\n\n</mat-toolbar>\n",
        styles: [".example-fill-remaining-space{flex:1 1 auto}"]
    }),
    tslib_1.__metadata("design:paramtypes", [MatDialog, AuthService])
], ToolBarComponent);
export { ToolBarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvaGVhZGVyL3Rvb2wtYmFyL3Rvb2wtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDNUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFRdkUsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFFM0IsWUFBb0IsTUFBaUIsRUFBUyxXQUF3QjtRQUFsRCxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFLdEUsb0JBQWUsR0FBRyxHQUFVLEVBQUU7WUFDNUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFbkQsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVMLENBQUMsQ0FBQTtRQUVELHFCQUFnQixHQUFHLEdBQVMsRUFBRTtZQUM1QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVwRCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1FBRUwsQ0FBQyxDQUFBO0lBbkJ5RSxDQUFDO0lBRTNFLFFBQVE7SUFDUixDQUFDO0NBa0JGLENBQUE7QUF2QlksZ0JBQWdCO0lBTDVCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLHVpQkFBd0M7O0tBRXpDLENBQUM7NkNBRzRCLFNBQVMsRUFBc0IsV0FBVztHQUYzRCxnQkFBZ0IsQ0F1QjVCO1NBdkJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWF0RGlhbG9nfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuLi8uLi9lbnRyeUNvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vZW50cnlDb21wb25lbnQvc2lnbnVwL3NpZ251cC5jb21wb25lbnRcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi9lbnRyeUNvbXBvbmVudC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLXRvb2wtYmFyXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdG9vbC1iYXIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3Rvb2wtYmFyLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgVG9vbEJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZywgcHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvcGVuTG9naW5EaWFsb2cgPSAoKTogdm9pZCAgPT4ge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTG9naW5Db21wb25lbnQpO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgfSk7XG5cbiAgfVxuXG4gIG9wZW5TaWdudXBEaWFsb2cgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihTaWdudXBDb21wb25lbnQpO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgfSk7XG5cbiAgfVxuXG59XG4iXX0=
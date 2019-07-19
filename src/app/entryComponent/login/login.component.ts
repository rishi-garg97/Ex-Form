import {Component, Inject, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService } from "../services/auth.service";
import {CommonService} from "../../service/common.service";
import {SnackBarMessageService} from "../../service/snack-bar-message.service";
import {SignupComponent} from "../signup/signup.component";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private formGroup: FormGroup;

  constructor(private router: Router, public dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA)public data: any,
              private formBuilder: FormBuilder, public authService: AuthService, private commonService: CommonService,
              private snackBarMessageService: SnackBarMessageService, private dialog: MatDialog ) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ["r@gmail.com", [Validators.required, Validators.email]],
      password: ["rishi1997", [Validators.required]]

    });

    this.authService.getUsers();
  }
  login = async (mode) => {
    this.commonService.showHideSpinner(true);

    try {
      if (mode === "google") {
        this.commonService.showHideSpinner(false);
        await this.authService.GoogleAuth();
      } else {
        await this.authService.SignIn(this.formGroup.controls["email"].value, this.formGroup.controls["password"].value);
        this.commonService.showHideSpinner(false);
      }
      this.snackBarMessageService.show("LogIn Successfull");
      this.router.navigate(["dashboard"]);

      this.dialogRef.close();

    } catch (error) {
      if (error) {
         if ( error.code === "auth/user-not-found") {
           this.openSignupDialog();
         } else {
           this.snackBarMessageService.show(error.message);
         }
      }
      this.commonService.showHideSpinner(false);

    }

  }
  cancel(): void {
    this.dialogRef.close();
  }

  getError = (fieldName): string => {

    if (this.formGroup.controls[fieldName].hasError("required")) {
      return fieldName + " is required. ";
    }
    if (this.formGroup.controls[fieldName].hasError("email")) {
      return "Invalid Email !";
    }

    return "error";
  }
  openSignupDialog = (): void => {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(SignupComponent);


    dialogRef.afterClosed().subscribe(result => {
    });

  }

}




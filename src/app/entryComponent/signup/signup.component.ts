import {Component, Inject, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {CommonService} from "../../service/common.service";
import {SnackBarMessageService} from "../../service/snack-bar-message.service";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({});
  schema: any = this.commonService.signUpJson;

  constructor(private router: Router, public dialogRef: MatDialogRef<SignupComponent>, @Inject(MAT_DIALOG_DATA)public data: any,
              private formBuilder: FormBuilder, private http: HttpClient, public authService: AuthService,
              private commonService: CommonService, private snackBarMessageService: SnackBarMessageService ) {
  }

  ngOnInit() {
  }


  signup = async () => {

    this.commonService.showHideSpinner(true);
    try {
      await this.authService.SignUp(this.formGroup.controls["email"].value["email"], this.formGroup.controls["password"].value["password"]);
     // this.authService.sendVerificationMail();
      this.commonService.showHideSpinner(false);
      this.router.navigate(["dashboard"]);
      this.snackBarMessageService.show("User Registered Successfully");
      this.dialogRef.close();

    } catch (error) {
      if (error) {
        console.log(error);
        this.snackBarMessageService.show(error.message);
      }
      this.commonService.showHideSpinner(false);

    }
  }

  cancel(): void {
    this.dialogRef.close();

  }
  getError = (fieldName): string => {

    if (this.formGroup.controls[fieldName].hasError("required")) {
      return "You must enter a value" ;
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
  }

  addControl = (data) => {
    this.formGroup.addControl(data.key, data.value);
    this.formGroup.updateValueAndValidity();
  }

}








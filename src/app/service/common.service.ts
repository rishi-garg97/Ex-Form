import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
declare const jQuery: any;

@Injectable({
  providedIn: "root"
})
export class CommonService {

  signUpJson: any;
  errorMessageJson: any;

  constructor(private http: HttpClient) { }

  showHideSpinner = (show) => {
    // this.isSpinnerVisible = show;
    if (show) {
      jQuery("#loaderModal")
        .modal({backdrop: "static", keyboard: false})
        .modal("show");
    } else {
      setTimeout(() => {
        jQuery("#loaderModal").modal("hide");
      }, 1000);
    }
  }

  loadSignUpJson = async () => {
    this.signUpJson = await this.http.get("./assets/signup.json").toPromise();
  }

  getValidationErrorMesageJson = async () => {
    this.errorMessageJson = await this.http.get("./assets/validation-message.json").toPromise();
    console.log("Error Json", this.errorMessageJson);
  }
}

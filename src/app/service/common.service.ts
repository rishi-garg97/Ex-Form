import { Injectable } from "@angular/core";
declare const jQuery: any;

@Injectable({
  providedIn: "root"
})
export class CommonService {

  isSpinnerVisible = true;

  constructor() { }

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



}

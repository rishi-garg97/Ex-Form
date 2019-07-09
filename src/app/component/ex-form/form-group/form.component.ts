import {Component, OnInit, DoCheck} from "@angular/core";
import schema from "../../../../assets/schema.json";
import {FormGroup} from "@angular/forms";
import {FormBuildingService} from "../form-building.service";
@Component({
  selector: "app-form-group",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit, DoCheck {
  formGroup: FormGroup;
  schema: any;

    constructor(private formBuildingService: FormBuildingService) {
    }

    ngOnInit() {
      this.initialize();
    }
    ngDoCheck() {}

    initialize = () => {
    this.schema = this.formBuildingService.getSchema();
    this.formGroup = this.formBuildingService.buildForm();
    }

    login = () => {
      console.log(this.formGroup.getRawValue());
    }

    reset = () => {
      this.formGroup.reset();
    }

}

import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormBuildingService} from "../form-building.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit, OnChanges {
  formGroup: FormGroup = this.formBuilder.group({});
  schema: any;
  @Input() formName;

    constructor(private formBuildingService: FormBuildingService, private formBuilder: FormBuilder) {
    }

  ngOnInit() {
    this.initialize();
    // console.log(this.formGroup);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      if (cur !== prev) {
        this.initialize();
        this.formGroup = this.formBuilder.group({});
      }
    }
  }

  initialize = () => {
    this.schema = this.formBuildingService.getSchema(this.formName);
  }

    login = () => {
      console.log(this.formGroup);
    }

    reset = () => {
      this.formGroup.reset();
    }

  addControl = (data) => {
    this.formGroup.addControl(data.key, data.value);
    this.formGroup.updateValueAndValidity();
   // console.log("Root Form Group", this.formGroup);
  }

}

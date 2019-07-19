import {Component, OnInit, Input, OnChanges, SimpleChanges} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FormBuildingService} from "../form-building.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit, OnChanges {
  formGroup: FormGroup;
  schema: any;
  @Input() formName;

    constructor(private formBuildingService: FormBuildingService) {
    }

  ngOnInit() {
    this.initialize();
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      if (cur !== prev) {
        this.initialize();
      }
    }
  }
  // ngDoCheck() {
  //    this.initialize();
  // }

  initialize = () => {
    this.schema = this.formBuildingService.getSchema(this.formName);
    this.formGroup = this.formBuildingService.buildForm(this.schema);
  }

    login = () => {
      console.log(this.formGroup.getRawValue());
    }

    reset = () => {
      this.formGroup.reset();
    }

}

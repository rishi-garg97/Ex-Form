import {Component, OnInit, Input, OnChanges} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import _ from "lodash";

@Component({
  selector: "app-step-form",
  templateUrl: "./step-form.component.html",
  styleUrls: ["./step-form.component.css"]
})
export class StepFormComponent implements OnInit, OnChanges {
  formGroup: FormGroup = this.formBuilder.group({});
  @Input() uiSchema: any;

  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    const allSteps = [];
    const steps = _.range(this.uiSchema.totalSteps);
    steps.forEach((step) => {
      allSteps[step] = this.formBuilder.group({});
    });
    this.formGroup = this.formBuilder.group(allSteps);
  }

  ngOnChanges() {
    this.formGroup = this.formBuilder.group({});  // when ui or model formSchema changes re initialize form group
  }

  addControl = (data) => {
    _.each(this.uiSchema.steps, (step) => {
      const matchedField = _.find(step.fields, (field) => {
        return field.name === data.key;
      });
      if (matchedField) {
        const fc: any = this.formGroup.controls[step.sequence - 1];
        fc.addControl(data.key, data.value);
        this.formGroup.updateValueAndValidity();
      }
    });
  }

  formValue = () => {
    console.log(this.formGroup.getRawValue());
  }

  reset = () => {
    this.formGroup.reset();
  }
}

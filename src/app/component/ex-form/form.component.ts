import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";

import _ from "lodash";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit, OnChanges {
  @Input() modelSchema: any;
  @Input() uiSchema: any;
  modifiedUiSchema;

  constructor() {  }

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
        // this.formGroup = this.formBuilder.group({});
      }
    }
  }

  initialize = () => {
    // console.log(this.modelSchema);
    // console.log(this.uiSchema);

    const uiSchema: any = Object.assign({}, this.uiSchema);

    if (uiSchema.type === "Normal") {
      uiSchema.fields = this.formatFields(uiSchema);
    } else {
      _.each(uiSchema.steps, (step) => {
        step.fields = this.formatFields(step);
      });
    }
    this.modifiedUiSchema = uiSchema;
    this.modifiedUiSchema.name = this.modelSchema.name;
  }

  formatFields = (schema: any) => {
    return _.map(schema.fields, (field) => {
      const matchedField = _.find(this.modelSchema.properties, {name: field.name});
      if (matchedField) {
        return {...field, ...matchedField};
      }
    });
  }
}

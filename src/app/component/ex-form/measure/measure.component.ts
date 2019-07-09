import { Component, OnInit, Input } from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: "app-measure",
  templateUrl: "./measure.component.html",
  styleUrls: ["./measure.component.css"]
})
export class MeasureComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() formFieldControl: FormControl;
  @Input() property: {};

  newProperty: any = {
    measure: {}, unit: {}
  };
  constructor() { }

  ngOnInit() {
    this.newProperty.measure = {...this.property};
    this.newProperty.measure.name += "Measure";
    this.newProperty.unit = {...this.property};
    this.newProperty.unit.name += "Unit";
  }

  onMeasureChange = (measureValue) => {
    const control = this.formGroup.controls[this.newProperty.unit.name];
    const values = "values";
    if ( measureValue && this.property[values].length > 1 ) {
      control.enable();
    } else {
      if (this.property[values].length > 1) {
        control.reset();
      }
      control.disable();
    }
//    measureValue ? control.enable() : control.disable();
  }


}

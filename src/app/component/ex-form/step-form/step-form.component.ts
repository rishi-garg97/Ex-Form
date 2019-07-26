import {Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FormBuildingService} from "../form-building.service";

@Component({
  selector: "app-step-form",
  templateUrl: "./step-form.component.html",
  styleUrls: ["./step-form.component.css"]
})
export class StepFormComponent implements OnInit, OnChanges {
  formGroup: FormGroup;
  @Input() schema: any;

  constructor(private formBuildingService: FormBuildingService) {
  }

  ngOnInit() {
    // setTimeout(() => {
      this.formGroup = this.formBuildingService.buildForm(this.schema);
      console.log(this.formGroup.controls);
    // });
  }
  //
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      // if (cur !== prev) {
      // this.initialize();
      this.formGroup = this.formBuildingService.buildForm(chng.currentValue);
      // }
    }
  }

  //
  // }
  // ngDoCheck() {
  //   console.log(this.formGroup.controls[0].valid);
  //   console.log(this.formGroup.controls[1].valid);
  // }
  //
  // initialize = () => {
  //   this.schema = this.formBuildingService.getSchema(this.formName);
  //   console.log(this.schema);
  //   this. formGroup = this.formBuildingService.buildForm(this.schema);
  //   console.log(this.formGroup);
  //   // this.formGroup =  this.formGroup.controls[1];
  //
  // }

  formValue = () => {
    console.log(this.formGroup.getRawValue());
  }

  reset = () => {
    this.formGroup.reset();
  }


  numberOfSteps = () => {
    return Object.keys(this.formGroup.controls).length - 1;
  }



}

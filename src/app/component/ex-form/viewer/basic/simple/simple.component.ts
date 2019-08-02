import {Component, Input, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({});
  @Input() uiSchema;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  addControl = (data) => {
    this.formGroup.addControl(data.key, data.value);
    this.formGroup.updateValueAndValidity();
  }
  getFormValue = () => {
    console.log(this.formGroup.getRawValue());
  }

  reset = () => {
    this.formGroup.reset();
  }

}

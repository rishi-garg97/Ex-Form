import {AfterViewInit, Component, Input, OnChanges, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent implements OnInit, OnChanges {
  formGroup: FormGroup = this.formBuilder.group({});
  @Input() uiSchema;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.formGroup = this.formBuilder.group({}); // when ui or model formSchema changes re initialize form group
  }

  addControl = (data) => {
    this.formGroup.addControl(data.key, data.value);
    this.formGroup.updateValueAndValidity();
  }
  getFormValue = () => {
    console.log(this.formGroup.getRawValue());
  }

  reset = () => {
    console.log(this.formGroup);
    this.formGroup.reset();
  }

}

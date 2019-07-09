import {Component, OnInit, Input } from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ValidationMessageGenerator} from "../validators/validation-message-generator";
import {RequiredValidator} from "../validators/required-validator";
import set = Reflect.set;
@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"]
})
export class DropdownComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() formFieldControl: FormControl;
  @Input() property;
  constructor() { }

  ngOnInit() {
    this.addValidator();
  }
  //
  // ngAfterViewInit() {
  //
  //   setTimeout(() => {
  //     this.addValidator();
  //
  //   }, 100);
  // }

    addValidator() {

          const validators = [];
          const setUnitValue = this.formGroup.controls[this.property.name];
          if (this.property.required ) {
            validators.push(new RequiredValidator().get());
          }
          this.formGroup.controls[this.property.name].setValidators(validators);
          if (this.property.values && this.property.values.length === 1 ) {
            setUnitValue.setValue(this.property.values[0]);
          }

    }
    getError = () => {
      return ValidationMessageGenerator.errorMessage(this.formGroup, this.property);
    }
}

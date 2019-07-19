import {Component, Input, OnInit} from "@angular/core";
import {RequiredValidator} from "../validators/required-validator";
import {MaxLengthValidator} from "../validators/max-length-validator";
import {PatternValidator} from "../validators/pattern-validator";
import {MinLengthValidator} from "../validators/min-length-validators";
import {ValidationMessageGenerator} from "../validators/validation-message-generator";

@Component({
  selector: "app-password-field",
  templateUrl: "./password-field.component.html",
  styleUrls: ["./password-field.component.css"]
})
export class PasswordFieldComponent implements OnInit {


  @Input() formGroup;
  @Input() property;
  constructor() { }

  ngOnInit() {
    this.addValidator();
  }

  addValidator = () => {
    // validators.push(new RequiredValidator());

    const validators = [];
    if (this.property.required) {
      validators.push(new RequiredValidator().get());
    }
    if (this.property.minLength && this.property.minLength != null ) {
      validators.push(new MinLengthValidator().get(this.property.minLength));
    }
    if (this.property.maxLength && this.property.maxLength != null ) {
      validators.push(new MaxLengthValidator().get(this.property.maxLength));
    }
    if (this.property.pattern && this.property.pattern != null) {
      console.log(this.property.pattern)
      validators.push(new PatternValidator().get(this.property.pattern));
    }
    this.formGroup.controls[this.property.name].setValidators(validators);
  }

  getError = () => {
    return ValidationMessageGenerator.errorMessage(this.formGroup, this.property);
  }
}

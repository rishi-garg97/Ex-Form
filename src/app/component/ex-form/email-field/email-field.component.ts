import {Component, Input, OnInit} from "@angular/core";
import {RequiredValidator} from "../validators/required-validator";
import {Validators} from "@angular/forms";
import {ValidationMessageGenerator} from "../validators/validation-message-generator";

@Component({
  selector: "app-email-field",
  templateUrl: "./email-field.component.html",
  styleUrls: ["./email-field.component.css"]
})
export class EmailFieldComponent implements OnInit {


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
    validators.push(Validators.email);
    this.formGroup.controls[this.property.name].setValidators(validators);
  }

  getError = () => {
    return ValidationMessageGenerator.errorMessage(this.formGroup, this.property);
  }

}

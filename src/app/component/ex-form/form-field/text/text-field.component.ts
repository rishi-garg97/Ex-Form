import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from "@angular/core";
import {RequiredValidator} from "../../validators/required-validator";
import {MinLengthValidator} from "../../validators/min-length-validators";
import {MaxLengthValidator} from "../../validators/max-length-validator";
import {PatternValidator} from "../../validators/pattern-validator";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ValidationMessageGeneratorService} from "../../validators/validation-message-generator.service";

@Component({
  selector: "app-text-field",
  templateUrl: "./text-field.component.html",
  styleUrls: ["./text-field.component.css"]
})
export class TextFieldComponent implements OnInit, OnChanges {

  formGroup: FormGroup;
  @Input() property;
  @Output() public addControl = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private validationMessageGenerator: ValidationMessageGeneratorService) {
  }

  ngOnInit() {
    this.addValidator();
  }

  ngOnChanges() {
    // if (this.formGroup) {
    //   this.formGroup.updateValueAndValidity();
    // }
  }

  addValidator = () => {

    const validators = [];
    if (this.property.required) {
      validators.push(new RequiredValidator().get());
    }
    if (this.property.minLength && this.property.minLength != null) {
      validators.push(new MinLengthValidator().get(this.property.minLength));
    }
    if (this.property.maxLength && this.property.maxLength != null) {
      validators.push(new MaxLengthValidator().get(this.property.maxLength));
    }
    if (this.property.pattern && this.property.pattern != null) {
      validators.push(new PatternValidator().get(this.property.pattern));
    }

    this.formGroup = this.formBuilder.group({
      [this.property.name]: [{
        value: "",
        disabled: !this.property.enable
      }, validators]
    });
    this.formGroup.updateValueAndValidity();
    this.addControl.emit({key: this.property.name, value: this.formGroup});
  }

  getError = () => {
    return this.validationMessageGenerator.errorMessage(this.formGroup, this.property);
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormBuildingService} from "../../form-building.service";
import {FormBuilder, FormGroup } from "@angular/forms";
import {ValidationMessageGenerator} from "../../validators/validation-message-generator";
import {RequiredValidator} from "../../validators/required-validator";
import {MaxValueValidator} from "../../validators/max-value-validator";
import {MinValueValidator} from "../../validators/min-value-validator";
import {PatternValidator} from "../../validators/pattern-validator";
@Component({
  selector: "app-number-field",
  templateUrl: "./number-field.component.html",
  styleUrls: ["./number-field.component.css"]
})
export class NumberFieldComponent implements OnInit {
  formGroup: FormGroup;
  @Input() property;
  @Output() public addControl = new EventEmitter();

  constructor(private formService: FormBuildingService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addValidator();
  }

  addValidator = () => {

        const validators = [];
        if (this.property.required) {
          validators.push(new RequiredValidator().get());
        }
        if (this.property.max && this.property.max != null ) {
          validators.push(new MaxValueValidator().get(this.property.max));
        }
        if (this.property.max && this.property.min != null ) {
          validators.push(new MinValueValidator().get(this.property.min));
        }
        if (this.property.pattern && this.property.pattern != null) {
          validators.push(new PatternValidator().get(this.property.pattern));
        }
        this.formGroup = this.formBuilder.group({ [this.property.name] : [{value: "" , disabled: !this.property.enable}, validators]});
        this.formGroup.updateValueAndValidity();
        this.addControl.emit({key: this.property.name , value: this.formGroup});

  }


  getError = () => {
    return ValidationMessageGenerator.errorMessage(this.formGroup, this.property);
  }

  // fieldValueChanged = () => {
  //   this.changeEvent.emit(this.formFieldControl.value);
  // }

}

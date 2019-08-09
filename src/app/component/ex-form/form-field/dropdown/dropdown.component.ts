import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
import {ValidationMessageGenerator} from "../../validators/validation-message-generator";
import {RequiredValidator} from "../../validators/required-validator";
import set = Reflect.set;
@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"]
})
export class DropdownComponent implements OnInit {
  formGroup: FormGroup;
  @Input() property;
  @Output() public addControl = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addValidator();
  }
      addValidator() {

          const validators = [];
          let dropDowninitialValue = "";
          let dropwDownDisable = false;

          if (this.property.required ) {
            validators.push(new RequiredValidator().get());
          }

          if (this.property.values && this.property.values.length === 1 ) {
            // setUnitValue.setValue(this.property.values[0]);
            dropDowninitialValue = this.property.values[0];
            dropwDownDisable = true;
          } else {
              dropwDownDisable =  !this.property.enable;
          }


          this.formGroup = this.formBuilder.group(
                           { [this.property.name] : [{value: dropDowninitialValue, disabled: dropwDownDisable}, validators ]}
                           );
          this.addControl.emit({key: this.property.name , value: this.formGroup});

    }
    getError = () => {
      return ValidationMessageGenerator.errorMessage(this.formGroup, this.property);
    }
}
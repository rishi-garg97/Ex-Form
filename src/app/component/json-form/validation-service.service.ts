import { Injectable } from "@angular/core";
import schema from "../../../assets/schema.json";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";

@Injectable({
  providedIn: "root"
})

export class ValidationServiceService {

  schema: any = schema;

  constructor(private formBuilder: FormBuilder) { }


          getErrorMessage(control) {


            let msg = "";

            if (control.hasError("required")) {
              msg =  "This Field is required";
            } else if (control.hasError("pattern")) {
              msg = "This field contain only character value.";
            } else if (control.hasError("minlength")) {
              msg = "This field require minimum " + control.errors.minlength.requiredLength + " characters";
            } else if (control.hasError("maxlength")) {
              msg = "This field has maximum " + control.errors.maxlength.requiredLength + " characters";
            } else if (control.hasError("min")) {
              msg = "This field required minimum value " + control.errors.min.min;
            } else if (control.hasError("max")) {
              msg = "This field has maximum value " + control.errors.max.max;
            }
            return msg;
          }


          enableUnit(field, myForm) {
            if (myForm.get(field.name).value.in && (field.units.length > 1)) {
              myForm.get(field.name).controls.unit.enable();

            } else {
                    if ( field.units.length > 1) {
                   myForm.get(field.name).controls.unit.reset();
                 }
                    myForm.get(field.name).controls.unit.disable();
            }
          }

          buildForm = () => {
            const allControl = {};
            let validators = [];
            this.schema.forEach((element) => {

                      //  Assign Validator to all form Control
                      validators = [];

                      if ( element.required) {
                        validators.push(Validators.required);
                      }
                      if (element.dataType === "String") {
                        validators.push(Validators.minLength(element.minLength));
                        validators.push(Validators.maxLength(element.maxLength));
                        validators.push(Validators.pattern(element.pattern));
                      }
                      if ((element.dataType === "Number" || element.dataType === "Measure")) {
                        validators.push(Validators.max(element.max));
                        validators.push(Validators.min(element.min));
                      }
                      if ( element.dataType === "Measure") {
                        validators = [];
                        let unitvalue = "";

                        if ( element.units.length === 1) {
                          unitvalue = element.units[0];

                        }
                        if ( element.required) {
                             validators = [Validators.required, Validators.min(element.min), Validators.max(element.max)];
                            }
                        allControl[element.name] = this.formBuilder.group({
                              in: ["", validators],
                              unit: [{ value: unitvalue, disabled: true }, Validators.required]
                            });

                       } else {
                        allControl[element.name] = ["", validators];
                      }

                    });

            return this.formBuilder.group(allControl);
          }
}

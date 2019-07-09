export class ValidationMessageGenerator {

  static errorMessage = (formGroup, property) => {

    let msg = "Field is Invalid";
    const control = formGroup.get(property.name);
    if (control.hasError("required")) {
      msg = "This Field is required";
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

}

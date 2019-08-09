import validationMessage from "./validation-message.json";
import _ from "lodash";

declare const Mustache: any;

export class ValidationMessageGenerator {

  static errorMessage = (formGroup, property) => {

    let msg = "Field is Invalid";
    const control = formGroup.get(property.name);
    const fieldError = validationMessage.fields[property.name] ? validationMessage.fields[property.name] : "";

    if (control.hasError("required")) {
      if (fieldError.required) {
        msg = fieldError.required;
      } else {
        msg = validationMessage.common.required;
      }
    } else if (control.hasError("pattern") && property.name === "mobileNo") {
      if (fieldError.mobile) {
        msg = fieldError.mobile;
      } else {
        msg = validationMessage.common.mobile;
      }
    } else if (control.hasError("pattern")) {
      if (fieldError.pattern) {
        msg = fieldError.pattern;
      } else {
        msg = validationMessage.common.pattern;
      }
    } else if (control.hasError("minlength")) {
      if (fieldError.minLength) {
        msg = fieldError.minLength;
      } else {
        msg = validationMessage.common.minLength;
      }
    } else if (control.hasError("maxlength")) {
      if (fieldError.maxLength) {
        msg = fieldError.maxLength;
      } else {
        msg = validationMessage.common.maxLength;
      }
    } else if (control.hasError("min")) {
      if (fieldError.min) {
        msg = fieldError.min;
      } else {
        msg = validationMessage.common.min;
      }
    } else if (control.hasError("max")) {
      if (fieldError.max) {
        msg = fieldError.max;
      } else {
        msg = validationMessage.common.max;
      }
    } else if (control.hasError("email")) {
      if (fieldError.email) {
        msg = fieldError.email;
      } else {
        msg = validationMessage.common.email;
      }
    }

    const {alias, min, max, minLength, maxLength, pattern} = property;

    return Mustache.render(msg, {fieldName: alias, min, max, minLength, maxLength, pattern});
  }

}

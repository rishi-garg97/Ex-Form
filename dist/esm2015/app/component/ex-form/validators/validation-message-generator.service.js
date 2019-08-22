import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "../../../service/common.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../../service/common.service";
let ValidationMessageGeneratorService = class ValidationMessageGeneratorService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.validationMessage = this.commonService.errorMessageJson;
        this.errorMessage = (formGroup, property) => {
            let msg = "Field is Invalid";
            const control = formGroup.get(property.name);
            const fieldError = this.validationMessage.fields[property.name] ? this.validationMessage.fields[property.name] : "";
            if (control.hasError("required")) {
                if (fieldError.required) {
                    msg = fieldError.required;
                }
                else {
                    msg = this.validationMessage.common.required;
                }
            }
            else if (control.hasError("pattern") && property.name === "mobileNo") {
                if (fieldError.mobile) {
                    msg = fieldError.mobile;
                }
                else {
                    msg = this.validationMessage.common.mobile;
                }
            }
            else if (control.hasError("pattern")) {
                if (fieldError.pattern) {
                    msg = fieldError.pattern;
                }
                else {
                    msg = this.validationMessage.common.pattern;
                }
            }
            else if (control.hasError("minlength")) {
                if (fieldError.minLength) {
                    msg = fieldError.minLength;
                }
                else {
                    msg = this.validationMessage.common.minLength;
                }
            }
            else if (control.hasError("maxlength")) {
                if (fieldError.maxLength) {
                    msg = fieldError.maxLength;
                }
                else {
                    msg = this.validationMessage.common.maxLength;
                }
            }
            else if (control.hasError("min")) {
                if (fieldError.min) {
                    msg = fieldError.min;
                }
                else {
                    msg = this.validationMessage.common.min;
                }
            }
            else if (control.hasError("max")) {
                if (fieldError.max) {
                    msg = fieldError.max;
                }
                else {
                    msg = this.validationMessage.common.max;
                }
            }
            else if (control.hasError("email")) {
                if (fieldError.email) {
                    msg = fieldError.email;
                }
                else {
                    msg = this.validationMessage.common.email;
                }
            }
            const { alias, min, max, minLength, maxLength, pattern } = property;
            return Mustache.render(msg, { fieldName: alias, min, max, minLength, maxLength, pattern });
        };
    }
};
ValidationMessageGeneratorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidationMessageGeneratorService_Factory() { return new ValidationMessageGeneratorService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.CommonService)); }, token: ValidationMessageGeneratorService, providedIn: "root" });
ValidationMessageGeneratorService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient, CommonService])
], ValidationMessageGeneratorService);
export { ValidationMessageGeneratorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1tZXNzYWdlLWdlbmVyYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvY29tcG9uZW50L2V4LWZvcm0vdmFsaWRhdG9ycy92YWxpZGF0aW9uLW1lc3NhZ2UtZ2VuZXJhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQzs7OztBQU85RCxJQUFhLGlDQUFpQyxHQUE5QyxNQUFhLGlDQUFpQztJQUk1QyxZQUFvQixJQUFnQixFQUFVLGFBQTRCO1FBQXRELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUYxRSxzQkFBaUIsR0FBUSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBTTdELGlCQUFZLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFFckMsSUFBSSxHQUFHLEdBQUcsa0JBQWtCLENBQUM7WUFDN0IsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFcEgsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUU7b0JB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O0lBSDdDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7NkNBSzBCLFVBQVUsRUFBeUIsYUFBYTtHQUovRCxpQ0FBaUMsQ0FxRTdDO1NBckVZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7Q29tbW9uU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2UvY29tbW9uLnNlcnZpY2VcIjtcblxuZGVjbGFyZSBjb25zdCBNdXN0YWNoZTogYW55O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25NZXNzYWdlR2VuZXJhdG9yU2VydmljZSB7XG5cbiAgdmFsaWRhdGlvbk1lc3NhZ2U6IGFueSA9IHRoaXMuY29tbW9uU2VydmljZS5lcnJvck1lc3NhZ2VKc29uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBjb21tb25TZXJ2aWNlOiBDb21tb25TZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIGVycm9yTWVzc2FnZSA9IChmb3JtR3JvdXAsIHByb3BlcnR5KSA9PiB7XG5cbiAgICBsZXQgbXNnID0gXCJGaWVsZCBpcyBJbnZhbGlkXCI7XG4gICAgY29uc3QgY29udHJvbCA9IGZvcm1Hcm91cC5nZXQocHJvcGVydHkubmFtZSk7XG4gICAgY29uc3QgZmllbGRFcnJvciA9IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2UuZmllbGRzW3Byb3BlcnR5Lm5hbWVdID8gdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5maWVsZHNbcHJvcGVydHkubmFtZV0gOiBcIlwiO1xuXG4gICAgaWYgKGNvbnRyb2wuaGFzRXJyb3IoXCJyZXF1aXJlZFwiKSkge1xuICAgICAgaWYgKGZpZWxkRXJyb3IucmVxdWlyZWQpIHtcbiAgICAgICAgbXNnID0gZmllbGRFcnJvci5yZXF1aXJlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1zZyA9IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2UuY29tbW9uLnJlcXVpcmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29udHJvbC5oYXNFcnJvcihcInBhdHRlcm5cIikgJiYgcHJvcGVydHkubmFtZSA9PT0gXCJtb2JpbGVOb1wiKSB7XG4gICAgICBpZiAoZmllbGRFcnJvci5tb2JpbGUpIHtcbiAgICAgICAgbXNnID0gZmllbGRFcnJvci5tb2JpbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtc2cgPSB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLmNvbW1vbi5tb2JpbGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0Vycm9yKFwicGF0dGVyblwiKSkge1xuICAgICAgaWYgKGZpZWxkRXJyb3IucGF0dGVybikge1xuICAgICAgICBtc2cgPSBmaWVsZEVycm9yLnBhdHRlcm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtc2cgPSB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLmNvbW1vbi5wYXR0ZXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29udHJvbC5oYXNFcnJvcihcIm1pbmxlbmd0aFwiKSkge1xuICAgICAgaWYgKGZpZWxkRXJyb3IubWluTGVuZ3RoKSB7XG4gICAgICAgIG1zZyA9IGZpZWxkRXJyb3IubWluTGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXNnID0gdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5jb21tb24ubWluTGVuZ3RoO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29udHJvbC5oYXNFcnJvcihcIm1heGxlbmd0aFwiKSkge1xuICAgICAgaWYgKGZpZWxkRXJyb3IubWF4TGVuZ3RoKSB7XG4gICAgICAgIG1zZyA9IGZpZWxkRXJyb3IubWF4TGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXNnID0gdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5jb21tb24ubWF4TGVuZ3RoO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29udHJvbC5oYXNFcnJvcihcIm1pblwiKSkge1xuICAgICAgaWYgKGZpZWxkRXJyb3IubWluKSB7XG4gICAgICAgIG1zZyA9IGZpZWxkRXJyb3IubWluO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXNnID0gdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5jb21tb24ubWluO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29udHJvbC5oYXNFcnJvcihcIm1heFwiKSkge1xuICAgICAgaWYgKGZpZWxkRXJyb3IubWF4KSB7XG4gICAgICAgIG1zZyA9IGZpZWxkRXJyb3IubWF4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXNnID0gdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5jb21tb24ubWF4O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29udHJvbC5oYXNFcnJvcihcImVtYWlsXCIpKSB7XG4gICAgICBpZiAoZmllbGRFcnJvci5lbWFpbCkge1xuICAgICAgICBtc2cgPSBmaWVsZEVycm9yLmVtYWlsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXNnID0gdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5jb21tb24uZW1haWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qge2FsaWFzLCBtaW4sIG1heCwgbWluTGVuZ3RoLCBtYXhMZW5ndGgsIHBhdHRlcm59ID0gcHJvcGVydHk7XG5cbiAgICByZXR1cm4gTXVzdGFjaGUucmVuZGVyKG1zZywge2ZpZWxkTmFtZTogYWxpYXMsIG1pbiwgbWF4LCBtaW5MZW5ndGgsIG1heExlbmd0aCwgcGF0dGVybn0pO1xuICB9XG5cbn1cbiJdfQ==
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "../../../service/common.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../../service/common.service";
var ValidationMessageGeneratorService = /** @class */ (function () {
    function ValidationMessageGeneratorService(http, commonService) {
        var _this = this;
        this.http = http;
        this.commonService = commonService;
        this.validationMessage = this.commonService.errorMessageJson;
        this.errorMessage = function (formGroup, property) {
            var msg = "Field is Invalid";
            var control = formGroup.get(property.name);
            var fieldError = _this.validationMessage.fields[property.name] ? _this.validationMessage.fields[property.name] : "";
            if (control.hasError("required")) {
                if (fieldError.required) {
                    msg = fieldError.required;
                }
                else {
                    msg = _this.validationMessage.common.required;
                }
            }
            else if (control.hasError("pattern") && property.name === "mobileNo") {
                if (fieldError.mobile) {
                    msg = fieldError.mobile;
                }
                else {
                    msg = _this.validationMessage.common.mobile;
                }
            }
            else if (control.hasError("pattern")) {
                if (fieldError.pattern) {
                    msg = fieldError.pattern;
                }
                else {
                    msg = _this.validationMessage.common.pattern;
                }
            }
            else if (control.hasError("minlength")) {
                if (fieldError.minLength) {
                    msg = fieldError.minLength;
                }
                else {
                    msg = _this.validationMessage.common.minLength;
                }
            }
            else if (control.hasError("maxlength")) {
                if (fieldError.maxLength) {
                    msg = fieldError.maxLength;
                }
                else {
                    msg = _this.validationMessage.common.maxLength;
                }
            }
            else if (control.hasError("min")) {
                if (fieldError.min) {
                    msg = fieldError.min;
                }
                else {
                    msg = _this.validationMessage.common.min;
                }
            }
            else if (control.hasError("max")) {
                if (fieldError.max) {
                    msg = fieldError.max;
                }
                else {
                    msg = _this.validationMessage.common.max;
                }
            }
            else if (control.hasError("email")) {
                if (fieldError.email) {
                    msg = fieldError.email;
                }
                else {
                    msg = _this.validationMessage.common.email;
                }
            }
            var alias = property.alias, min = property.min, max = property.max, minLength = property.minLength, maxLength = property.maxLength, pattern = property.pattern;
            return Mustache.render(msg, { fieldName: alias, min: min, max: max, minLength: minLength, maxLength: maxLength, pattern: pattern });
        };
    }
    ValidationMessageGeneratorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidationMessageGeneratorService_Factory() { return new ValidationMessageGeneratorService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.CommonService)); }, token: ValidationMessageGeneratorService, providedIn: "root" });
    ValidationMessageGeneratorService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, CommonService])
    ], ValidationMessageGeneratorService);
    return ValidationMessageGeneratorService;
}());
export { ValidationMessageGeneratorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1tZXNzYWdlLWdlbmVyYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvY29tcG9uZW50L2V4LWZvcm0vdmFsaWRhdG9ycy92YWxpZGF0aW9uLW1lc3NhZ2UtZ2VuZXJhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQzs7OztBQU85RDtJQUlFLDJDQUFvQixJQUFnQixFQUFVLGFBQTRCO1FBQTFFLGlCQUVDO1FBRm1CLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUYxRSxzQkFBaUIsR0FBUSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBTTdELGlCQUFZLEdBQUcsVUFBQyxTQUFTLEVBQUUsUUFBUTtZQUVqQyxJQUFJLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQztZQUM3QixJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVwSCxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRTtvQkFDdkIsR0FBRyxHQUFHLFVBQVUsQ0FBQyxRQUFR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QUUsTUFBTTtTQUNuQixDQUFDO2lEQUswQixVQUFVLEVBQXlCLGFBQWE7T0FKL0QsaUNBQWlDLENBcUU3Qzs0Q0E5RUQ7Q0E4RUMsQUFyRUQsSUFxRUM7U0FyRVksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtDb21tb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZS9jb21tb24uc2VydmljZVwiO1xuXG5kZWNsYXJlIGNvbnN0IE11c3RhY2hlOiBhbnk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3JTZXJ2aWNlIHtcblxuICB2YWxpZGF0aW9uTWVzc2FnZTogYW55ID0gdGhpcy5jb21tb25TZXJ2aWNlLmVycm9yTWVzc2FnZUpzb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGNvbW1vblNlcnZpY2U6IENvbW1vblNlcnZpY2UpIHtcblxuICB9XG5cbiAgZXJyb3JNZXNzYWdlID0gKGZvcm1Hcm91cCwgcHJvcGVydHkpID0+IHtcblxuICAgIGxldCBtc2cgPSBcIkZpZWxkIGlzIEludmFsaWRcIjtcbiAgICBjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmdldChwcm9wZXJ0eS5uYW1lKTtcbiAgICBjb25zdCBmaWVsZEVycm9yID0gdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5maWVsZHNbcHJvcGVydHkubmFtZV0gPyB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLmZpZWxkc1twcm9wZXJ0eS5uYW1lXSA6IFwiXCI7XG5cbiAgICBpZiAoY29udHJvbC5oYXNFcnJvcihcInJlcXVpcmVkXCIpKSB7XG4gICAgICBpZiAoZmllbGRFcnJvci5yZXF1aXJlZCkge1xuICAgICAgICBtc2cgPSBmaWVsZEVycm9yLnJlcXVpcmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXNnID0gdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5jb21tb24ucmVxdWlyZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0Vycm9yKFwicGF0dGVyblwiKSAmJiBwcm9wZXJ0eS5uYW1lID09PSBcIm1vYmlsZU5vXCIpIHtcbiAgICAgIGlmIChmaWVsZEVycm9yLm1vYmlsZSkge1xuICAgICAgICBtc2cgPSBmaWVsZEVycm9yLm1vYmlsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1zZyA9IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2UuY29tbW9uLm1vYmlsZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzRXJyb3IoXCJwYXR0ZXJuXCIpKSB7XG4gICAgICBpZiAoZmllbGRFcnJvci5wYXR0ZXJuKSB7XG4gICAgICAgIG1zZyA9IGZpZWxkRXJyb3IucGF0dGVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1zZyA9IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2UuY29tbW9uLnBhdHRlcm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0Vycm9yKFwibWlubGVuZ3RoXCIpKSB7XG4gICAgICBpZiAoZmllbGRFcnJvci5taW5MZW5ndGgpIHtcbiAgICAgICAgbXNnID0gZmllbGRFcnJvci5taW5MZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtc2cgPSB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLmNvbW1vbi5taW5MZW5ndGg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0Vycm9yKFwibWF4bGVuZ3RoXCIpKSB7XG4gICAgICBpZiAoZmllbGRFcnJvci5tYXhMZW5ndGgpIHtcbiAgICAgICAgbXNnID0gZmllbGRFcnJvci5tYXhMZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtc2cgPSB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLmNvbW1vbi5tYXhMZW5ndGg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0Vycm9yKFwibWluXCIpKSB7XG4gICAgICBpZiAoZmllbGRFcnJvci5taW4pIHtcbiAgICAgICAgbXNnID0gZmllbGRFcnJvci5taW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtc2cgPSB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLmNvbW1vbi5taW47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0Vycm9yKFwibWF4XCIpKSB7XG4gICAgICBpZiAoZmllbGRFcnJvci5tYXgpIHtcbiAgICAgICAgbXNnID0gZmllbGRFcnJvci5tYXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtc2cgPSB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLmNvbW1vbi5tYXg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0Vycm9yKFwiZW1haWxcIikpIHtcbiAgICAgIGlmIChmaWVsZEVycm9yLmVtYWlsKSB7XG4gICAgICAgIG1zZyA9IGZpZWxkRXJyb3IuZW1haWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtc2cgPSB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLmNvbW1vbi5lbWFpbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7YWxpYXMsIG1pbiwgbWF4LCBtaW5MZW5ndGgsIG1heExlbmd0aCwgcGF0dGVybn0gPSBwcm9wZXJ0eTtcblxuICAgIHJldHVybiBNdXN0YWNoZS5yZW5kZXIobXNnLCB7ZmllbGROYW1lOiBhbGlhcywgbWluLCBtYXgsIG1pbkxlbmd0aCwgbWF4TGVuZ3RoLCBwYXR0ZXJufSk7XG4gIH1cblxufVxuIl19
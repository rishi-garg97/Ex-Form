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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1tZXNzYWdlLWdlbmVyYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnQvZXgtZm9ybS92YWxpZGF0b3JzL3ZhbGlkYXRpb24tbWVzc2FnZS1nZW5lcmF0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBTzlEO0lBSUUsMkNBQW9CLElBQWdCLEVBQVUsYUFBNEI7UUFBMUUsaUJBRUM7UUFGbUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRjFFLHNCQUFpQixHQUFRLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFNN0QsaUJBQVksR0FBRyxVQUFDLFNBQVMsRUFBRSxRQUFRO1lBRWpDLElBQUksR0FBRyxHQUFHLGtCQUFrQixDQUFDO1lBQzdCLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLElBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRXBILElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFO29CQUN2QixHQUFHLEdBQUcsVUFBVSxDQUFDLFFBQVEs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RSxNQUFNO1NBQ25CLENBQUM7aURBSzBCLFVBQVUsRUFBeUIsYUFBYTtPQUovRCxpQ0FBaUMsQ0FxRTdDOzRDQTlFRDtDQThFQyxBQXJFRCxJQXFFQztTQXJFWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge0NvbW1vblNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlL2NvbW1vbi5zZXJ2aWNlXCI7XG5cbmRlY2xhcmUgY29uc3QgTXVzdGFjaGU6IGFueTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvclNlcnZpY2Uge1xuXG4gIHZhbGlkYXRpb25NZXNzYWdlOiBhbnkgPSB0aGlzLmNvbW1vblNlcnZpY2UuZXJyb3JNZXNzYWdlSnNvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgY29tbW9uU2VydmljZTogQ29tbW9uU2VydmljZSkge1xuXG4gIH1cblxuICBlcnJvck1lc3NhZ2UgPSAoZm9ybUdyb3VwLCBwcm9wZXJ0eSkgPT4ge1xuXG4gICAgbGV0IG1zZyA9IFwiRmllbGQgaXMgSW52YWxpZFwiO1xuICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtR3JvdXAuZ2V0KHByb3BlcnR5Lm5hbWUpO1xuICAgIGNvbnN0IGZpZWxkRXJyb3IgPSB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLmZpZWxkc1twcm9wZXJ0eS5uYW1lXSA/IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2UuZmllbGRzW3Byb3BlcnR5Lm5hbWVdIDogXCJcIjtcblxuICAgIGlmIChjb250cm9sLmhhc0Vycm9yKFwicmVxdWlyZWRcIikpIHtcbiAgICAgIGlmIChmaWVsZEVycm9yLnJlcXVpcmVkKSB7XG4gICAgICAgIG1zZyA9IGZpZWxkRXJyb3IucmVxdWlyZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtc2cgPSB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLmNvbW1vbi5yZXF1aXJlZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzRXJyb3IoXCJwYXR0ZXJuXCIpICYmIHByb3BlcnR5Lm5hbWUgPT09IFwibW9iaWxlTm9cIikge1xuICAgICAgaWYgKGZpZWxkRXJyb3IubW9iaWxlKSB7XG4gICAgICAgIG1zZyA9IGZpZWxkRXJyb3IubW9iaWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXNnID0gdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5jb21tb24ubW9iaWxlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29udHJvbC5oYXNFcnJvcihcInBhdHRlcm5cIikpIHtcbiAgICAgIGlmIChmaWVsZEVycm9yLnBhdHRlcm4pIHtcbiAgICAgICAgbXNnID0gZmllbGRFcnJvci5wYXR0ZXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXNnID0gdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5jb21tb24ucGF0dGVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzRXJyb3IoXCJtaW5sZW5ndGhcIikpIHtcbiAgICAgIGlmIChmaWVsZEVycm9yLm1pbkxlbmd0aCkge1xuICAgICAgICBtc2cgPSBmaWVsZEVycm9yLm1pbkxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1zZyA9IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2UuY29tbW9uLm1pbkxlbmd0aDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzRXJyb3IoXCJtYXhsZW5ndGhcIikpIHtcbiAgICAgIGlmIChmaWVsZEVycm9yLm1heExlbmd0aCkge1xuICAgICAgICBtc2cgPSBmaWVsZEVycm9yLm1heExlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1zZyA9IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2UuY29tbW9uLm1heExlbmd0aDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzRXJyb3IoXCJtaW5cIikpIHtcbiAgICAgIGlmIChmaWVsZEVycm9yLm1pbikge1xuICAgICAgICBtc2cgPSBmaWVsZEVycm9yLm1pbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1zZyA9IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2UuY29tbW9uLm1pbjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzRXJyb3IoXCJtYXhcIikpIHtcbiAgICAgIGlmIChmaWVsZEVycm9yLm1heCkge1xuICAgICAgICBtc2cgPSBmaWVsZEVycm9yLm1heDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1zZyA9IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2UuY29tbW9uLm1heDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzRXJyb3IoXCJlbWFpbFwiKSkge1xuICAgICAgaWYgKGZpZWxkRXJyb3IuZW1haWwpIHtcbiAgICAgICAgbXNnID0gZmllbGRFcnJvci5lbWFpbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1zZyA9IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2UuY29tbW9uLmVtYWlsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHthbGlhcywgbWluLCBtYXgsIG1pbkxlbmd0aCwgbWF4TGVuZ3RoLCBwYXR0ZXJufSA9IHByb3BlcnR5O1xuXG4gICAgcmV0dXJuIE11c3RhY2hlLnJlbmRlcihtc2csIHtmaWVsZE5hbWU6IGFsaWFzLCBtaW4sIG1heCwgbWluTGVuZ3RoLCBtYXhMZW5ndGgsIHBhdHRlcm59KTtcbiAgfVxuXG59XG4iXX0=
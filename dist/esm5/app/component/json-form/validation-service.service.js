import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common/http";
var ValidationServiceService = /** @class */ (function () {
    function ValidationServiceService(formBuilder, http) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.http = http;
        this.schema = this.http.get("url: \"get ../../../assets/schema.json\"");
        this.buildForm = function () {
            var allControl = {};
            var validators = [];
            _this.schema.forEach(function (element) {
                //  Assign Validator to all form Control
                validators = [];
                if (element.required) {
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
                if (element.dataType === "Measure") {
                    validators = [];
                    var unitvalue = "";
                    if (element.units.length === 1) {
                        unitvalue = element.units[0];
                    }
                    if (element.required) {
                        validators = [Validators.required, Validators.min(element.min), Validators.max(element.max)];
                    }
                    allControl[element.name] = _this.formBuilder.group({
                        in: ["", validators],
                        unit: [{ value: unitvalue, disabled: true }, Validators.required]
                    });
                }
                else {
                    allControl[element.name] = ["", validators];
                }
            });
            return _this.formBuilder.group(allControl);
        };
    }
    ValidationServiceService.prototype.getErrorMessage = function (control) {
        var msg = "";
        if (control.hasError("required")) {
            msg = "This Field is required";
        }
        else if (control.hasError("pattern")) {
            msg = "This field contain only character value.";
        }
        else if (control.hasError("minlength")) {
            msg = "This field require minimum " + control.errors.minlength.requiredLength + " characters";
        }
        else if (control.hasError("maxlength")) {
            msg = "This field has maximum " + control.errors.maxlength.requiredLength + " characters";
        }
        else if (control.hasError("min")) {
            msg = "This field required minimum value " + control.errors.min.min;
        }
        else if (control.hasError("max")) {
            msg = "This field has maximum value " + control.errors.max.max;
        }
        return msg;
    };
    ValidationServiceService.prototype.enableUnit = function (field, myForm) {
        if (myForm.get(field.name).value.in && (field.units.length > 1)) {
            myForm.get(field.name).controls.unit.enable();
        }
        else {
            if (field.units.length > 1) {
                myForm.get(field.name).controls.unit.reset();
            }
            myForm.get(field.name).controls.unit.disable();
        }
    };
    ValidationServiceService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidationServiceService_Factory() { return new ValidationServiceService(i0.ɵɵinject(i1.FormBuilder), i0.ɵɵinject(i2.HttpClient)); }, token: ValidationServiceService, providedIn: "root" });
    ValidationServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient])
    ], ValidationServiceService);
    return ValidationServiceService;
}());
export { ValidationServiceService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1zZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnQvanNvbi1mb3JtL3ZhbGlkYXRpb24tc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7O0FBTWhEO0lBSUUsa0NBQW9CLFdBQXdCLEVBQVUsSUFBZ0I7UUFBdEUsaUJBQTJFO1FBQXZELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZ0RSxXQUFNLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMENBQXdDLENBQUMsQ0FBQztRQXVDOUQsY0FBUyxHQUFHO1lBQ1YsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBRWxCLHdDQUF3QztnQkFDeEMsVUFBVSxHQUFHLEVBQUUsQ0FBQztnQkFFaEIsSUFBSyxPQUFPLENBQUMsUUFBUSxFQUFFO29CQUNyQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdEM7Z0JBQ0QsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtvQkFDakMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxV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T0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQyxHQUFHLEdBQUcsK0JBQStCLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1NBQ2hFO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBR0QsNkNBQVUsR0FBVixVQUFXLEtBQUssRUFBRSxNQUFNO1FBQ3RCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQy9ELE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FFL0M7YUFBTTtZQUNDLElBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQzlDO1lBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN0RDtJQUNILENBQUM7O0lBdkNFLHdCQUF3QjtRQUpwQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO2lEQU1pQyxXQUFXLEVBQWdCLFVBQVU7T0FKM0Qsd0JBQXdCLENBcUZwQzttQ0E5RkQ7Q0E4RkMsQUFyRkQsSUFxRkM7U0FyRlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TZXJ2aWNlU2VydmljZSB7XG5cbiAgc2NoZW1hOiBhbnkgPSB0aGlzLmh0dHAuZ2V0KGB1cmw6IFwiZ2V0IC4uLy4uLy4uL2Fzc2V0cy9zY2hlbWEuanNvblwiYCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cblxuICAgICAgICAgIGdldEVycm9yTWVzc2FnZShjb250cm9sKSB7XG5cblxuICAgICAgICAgICAgbGV0IG1zZyA9IFwiXCI7XG5cbiAgICAgICAgICAgIGlmIChjb250cm9sLmhhc0Vycm9yKFwicmVxdWlyZWRcIikpIHtcbiAgICAgICAgICAgICAgbXNnID0gIFwiVGhpcyBGaWVsZCBpcyByZXF1aXJlZFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0Vycm9yKFwicGF0dGVyblwiKSkge1xuICAgICAgICAgICAgICBtc2cgPSBcIlRoaXMgZmllbGQgY29udGFpbiBvbmx5IGNoYXJhY3RlciB2YWx1ZS5cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udHJvbC5oYXNFcnJvcihcIm1pbmxlbmd0aFwiKSkge1xuICAgICAgICAgICAgICBtc2cgPSBcIlRoaXMgZmllbGQgcmVxdWlyZSBtaW5pbXVtIFwiICsgY29udHJvbC5lcnJvcnMubWlubGVuZ3RoLnJlcXVpcmVkTGVuZ3RoICsgXCIgY2hhcmFjdGVyc1wiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0Vycm9yKFwibWF4bGVuZ3RoXCIpKSB7XG4gICAgICAgICAgICAgIG1zZyA9IFwiVGhpcyBmaWVsZCBoYXMgbWF4aW11bSBcIiArIGNvbnRyb2wuZXJyb3JzLm1heGxlbmd0aC5yZXF1aXJlZExlbmd0aCArIFwiIGNoYXJhY3RlcnNcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udHJvbC5oYXNFcnJvcihcIm1pblwiKSkge1xuICAgICAgICAgICAgICBtc2cgPSBcIlRoaXMgZmllbGQgcmVxdWlyZWQgbWluaW11bSB2YWx1ZSBcIiArIGNvbnRyb2wuZXJyb3JzLm1pbi5taW47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzRXJyb3IoXCJtYXhcIikpIHtcbiAgICAgICAgICAgICAgbXNnID0gXCJUaGlzIGZpZWxkIGhhcyBtYXhpbXVtIHZhbHVlIFwiICsgY29udHJvbC5lcnJvcnMubWF4Lm1heDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtc2c7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBlbmFibGVVbml0KGZpZWxkLCBteUZvcm0pIHtcbiAgICAgICAgICAgIGlmIChteUZvcm0uZ2V0KGZpZWxkLm5hbWUpLnZhbHVlLmluICYmIChmaWVsZC51bml0cy5sZW5ndGggPiAxKSkge1xuICAgICAgICAgICAgICBteUZvcm0uZ2V0KGZpZWxkLm5hbWUpLmNvbnRyb2xzLnVuaXQuZW5hYmxlKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggZmllbGQudW5pdHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgIG15Rm9ybS5nZXQoZmllbGQubmFtZSkuY29udHJvbHMudW5pdC5yZXNldCgpO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG15Rm9ybS5nZXQoZmllbGQubmFtZSkuY29udHJvbHMudW5pdC5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnVpbGRGb3JtID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWxsQ29udHJvbCA9IHt9O1xuICAgICAgICAgICAgbGV0IHZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hLmZvckVhY2goKGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgIC8vICBBc3NpZ24gVmFsaWRhdG9yIHRvIGFsbCBmb3JtIENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVsZW1lbnQucmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGF0YVR5cGUgPT09IFwiU3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aChlbGVtZW50Lm1pbkxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4TGVuZ3RoKGVsZW1lbnQubWF4TGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKGVsZW1lbnQucGF0dGVybikpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoKGVsZW1lbnQuZGF0YVR5cGUgPT09IFwiTnVtYmVyXCIgfHwgZWxlbWVudC5kYXRhVHlwZSA9PT0gXCJNZWFzdXJlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXgoZWxlbWVudC5tYXgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbihlbGVtZW50Lm1pbikpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVsZW1lbnQuZGF0YVR5cGUgPT09IFwiTWVhc3VyZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdW5pdHZhbHVlID0gXCJcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlbGVtZW50LnVuaXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0dmFsdWUgPSBlbGVtZW50LnVuaXRzWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVsZW1lbnQucmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycyA9IFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbihlbGVtZW50Lm1pbiksIFZhbGlkYXRvcnMubWF4KGVsZW1lbnQubWF4KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsQ29udHJvbFtlbGVtZW50Lm5hbWVdID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbjogW1wiXCIsIHZhbGlkYXRvcnNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdDogW3sgdmFsdWU6IHVuaXR2YWx1ZSwgZGlzYWJsZWQ6IHRydWUgfSwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsQ29udHJvbFtlbGVtZW50Lm5hbWVdID0gW1wiXCIsIHZhbGlkYXRvcnNdO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoYWxsQ29udHJvbCk7XG4gICAgICAgICAgfVxufVxuIl19
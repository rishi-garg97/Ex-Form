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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1zZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9qc29uLWZvcm0vdmFsaWRhdGlvbi1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFNaEQ7SUFJRSxrQ0FBb0IsV0FBd0IsRUFBVSxJQUFnQjtRQUF0RSxpQkFBMkU7UUFBdkQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnRFLFdBQU0sR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQ0FBd0MsQ0FBQyxDQUFDO1FBdUM5RCxjQUFTLEdBQUc7WUFDVixJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFFbEIsd0NBQXdDO2dCQUN4QyxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUVoQixJQUFLLE9BQU8sQ0FBQyxRQUFRLEVBQUU7b0JBQ3JCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN0QztnQkFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO29CQUNqQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pELFVB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QUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLEdBQUcsR0FBRywrQkFBK0IsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7U0FDaEU7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFHRCw2Q0FBVSxHQUFWLFVBQVcsS0FBSyxFQUFFLE1BQU07UUFDdEIsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDL0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUUvQzthQUFNO1lBQ0MsSUFBSyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDOUM7WUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7SUF2Q0Usd0JBQXdCO1FBSnBDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7aURBTWlDLFdBQVcsRUFBZ0IsVUFBVTtPQUozRCx3QkFBd0IsQ0FxRnBDO21DQTlGRDtDQThGQyxBQXJGRCxJQXFGQztTQXJGWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblNlcnZpY2VTZXJ2aWNlIHtcblxuICBzY2hlbWE6IGFueSA9IHRoaXMuaHR0cC5nZXQoYHVybDogXCJnZXQgLi4vLi4vLi4vYXNzZXRzL3NjaGVtYS5qc29uXCJgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuXG4gICAgICAgICAgZ2V0RXJyb3JNZXNzYWdlKGNvbnRyb2wpIHtcblxuXG4gICAgICAgICAgICBsZXQgbXNnID0gXCJcIjtcblxuICAgICAgICAgICAgaWYgKGNvbnRyb2wuaGFzRXJyb3IoXCJyZXF1aXJlZFwiKSkge1xuICAgICAgICAgICAgICBtc2cgPSAgXCJUaGlzIEZpZWxkIGlzIHJlcXVpcmVkXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzRXJyb3IoXCJwYXR0ZXJuXCIpKSB7XG4gICAgICAgICAgICAgIG1zZyA9IFwiVGhpcyBmaWVsZCBjb250YWluIG9ubHkgY2hhcmFjdGVyIHZhbHVlLlwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0Vycm9yKFwibWlubGVuZ3RoXCIpKSB7XG4gICAgICAgICAgICAgIG1zZyA9IFwiVGhpcyBmaWVsZCByZXF1aXJlIG1pbmltdW0gXCIgKyBjb250cm9sLmVycm9ycy5taW5sZW5ndGgucmVxdWlyZWRMZW5ndGggKyBcIiBjaGFyYWN0ZXJzXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzRXJyb3IoXCJtYXhsZW5ndGhcIikpIHtcbiAgICAgICAgICAgICAgbXNnID0gXCJUaGlzIGZpZWxkIGhhcyBtYXhpbXVtIFwiICsgY29udHJvbC5lcnJvcnMubWF4bGVuZ3RoLnJlcXVpcmVkTGVuZ3RoICsgXCIgY2hhcmFjdGVyc1wiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0Vycm9yKFwibWluXCIpKSB7XG4gICAgICAgICAgICAgIG1zZyA9IFwiVGhpcyBmaWVsZCByZXF1aXJlZCBtaW5pbXVtIHZhbHVlIFwiICsgY29udHJvbC5lcnJvcnMubWluLm1pbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udHJvbC5oYXNFcnJvcihcIm1heFwiKSkge1xuICAgICAgICAgICAgICBtc2cgPSBcIlRoaXMgZmllbGQgaGFzIG1heGltdW0gdmFsdWUgXCIgKyBjb250cm9sLmVycm9ycy5tYXgubWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1zZztcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIGVuYWJsZVVuaXQoZmllbGQsIG15Rm9ybSkge1xuICAgICAgICAgICAgaWYgKG15Rm9ybS5nZXQoZmllbGQubmFtZSkudmFsdWUuaW4gJiYgKGZpZWxkLnVuaXRzLmxlbmd0aCA+IDEpKSB7XG4gICAgICAgICAgICAgIG15Rm9ybS5nZXQoZmllbGQubmFtZSkuY29udHJvbHMudW5pdC5lbmFibGUoKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmaWVsZC51bml0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgbXlGb3JtLmdldChmaWVsZC5uYW1lKS5jb250cm9scy51bml0LnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbXlGb3JtLmdldChmaWVsZC5uYW1lKS5jb250cm9scy51bml0LmRpc2FibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBidWlsZEZvcm0gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbGxDb250cm9sID0ge307XG4gICAgICAgICAgICBsZXQgdmFsaWRhdG9ycyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5zY2hlbWEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gIEFzc2lnbiBWYWxpZGF0b3IgdG8gYWxsIGZvcm0gQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgIGlmICggZWxlbWVudC5yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5kYXRhVHlwZSA9PT0gXCJTdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKGVsZW1lbnQubWluTGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgoZWxlbWVudC5tYXhMZW5ndGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4oZWxlbWVudC5wYXR0ZXJuKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmICgoZWxlbWVudC5kYXRhVHlwZSA9PT0gXCJOdW1iZXJcIiB8fCBlbGVtZW50LmRhdGFUeXBlID09PSBcIk1lYXN1cmVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1heChlbGVtZW50Lm1heCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluKGVsZW1lbnQubWluKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmICggZWxlbWVudC5kYXRhVHlwZSA9PT0gXCJNZWFzdXJlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1bml0dmFsdWUgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVsZW1lbnQudW5pdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXR2YWx1ZSA9IGVsZW1lbnQudW5pdHNbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZWxlbWVudC5yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzID0gW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluKGVsZW1lbnQubWluKSwgVmFsaWRhdG9ycy5tYXgoZWxlbWVudC5tYXgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxDb250cm9sW2VsZW1lbnQubmFtZV0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluOiBbXCJcIiwgdmFsaWRhdG9yc10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0OiBbeyB2YWx1ZTogdW5pdHZhbHVlLCBkaXNhYmxlZDogdHJ1ZSB9LCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxDb250cm9sW2VsZW1lbnQubmFtZV0gPSBbXCJcIiwgdmFsaWRhdG9yc107XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtQnVpbGRlci5ncm91cChhbGxDb250cm9sKTtcbiAgICAgICAgICB9XG59XG4iXX0=
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common/http";
let ValidationServiceService = class ValidationServiceService {
    constructor(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.schema = this.http.get(`url: "get ../../../assets/schema.json"`);
        this.buildForm = () => {
            const allControl = {};
            let validators = [];
            this.schema.forEach((element) => {
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
                    let unitvalue = "";
                    if (element.units.length === 1) {
                        unitvalue = element.units[0];
                    }
                    if (element.required) {
                        validators = [Validators.required, Validators.min(element.min), Validators.max(element.max)];
                    }
                    allControl[element.name] = this.formBuilder.group({
                        in: ["", validators],
                        unit: [{ value: unitvalue, disabled: true }, Validators.required]
                    });
                }
                else {
                    allControl[element.name] = ["", validators];
                }
            });
            return this.formBuilder.group(allControl);
        };
    }
    getErrorMessage(control) {
        let msg = "";
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
    }
    enableUnit(field, myForm) {
        if (myForm.get(field.name).value.in && (field.units.length > 1)) {
            myForm.get(field.name).controls.unit.enable();
        }
        else {
            if (field.units.length > 1) {
                myForm.get(field.name).controls.unit.reset();
            }
            myForm.get(field.name).controls.unit.disable();
        }
    }
};
ValidationServiceService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidationServiceService_Factory() { return new ValidationServiceService(i0.ɵɵinject(i1.FormBuilder), i0.ɵɵinject(i2.HttpClient)); }, token: ValidationServiceService, providedIn: "root" });
ValidationServiceService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient])
], ValidationServiceService);
export { ValidationServiceService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1zZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudC9qc29uLWZvcm0vdmFsaWRhdGlvbi1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFNaEQsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFJbkMsWUFBb0IsV0FBd0IsRUFBVSxJQUFnQjtRQUFsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFGdEUsV0FBTSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7UUF1QzlELGNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDZixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBRXRCLHdDQUF3QztnQkFDeEMsVUFBVSxHQUFHLEVBQUUsQ0FBQztnQkFFaEIsSUFBSyxPQUFPLENBQUMsUUFBUSxFQUFFO29CQUNyQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdEM7Z0JBQ0QsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtvQkFDakMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pELFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDdEQ7Z0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLEVBQUU7b0JBQ3JFLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDN0MsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUM5QztnQkFDRCxJQUFLLE9BQU8sQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO29CQUNuQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNoQixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBRW5CLElBQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO3dCQUMvQixTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFFOUI7b0JBQ0QsSUFBSyxPQUFPLENBQUMsUUFBUSxFQUFFO3dCQUNsQixVQUFVLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQzdGO29CQUNMLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7d0JBQzVDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUM7d0JBQ3BCLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztxQkFDbEUsQ0FBQyxDQUFDO2lCQUVQO3FCQUFNO29CQUNOLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7aUJBQzdDO1lBRUgsQ0FBQyxDQUFDLENBQUM7WUFFWCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQTtJQWhGaUUsQ0FBQztJQUduRSxlQUFlLENBQUMsT0FBTztRQUdyQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFFYixJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDaEMsR0FBRyxHQUFJLHdCQUF3QixDQUFDO1NBQ2pDO2FBQU0sSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3RDLEdBQUcsR0FBRywwQ0FBMEMsQ0FBQztTQUNsRDthQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN4QyxHQUFHLEdBQUcsNkJBQTZCLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztTQUMvRjthQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN4QyxHQUFHLEdBQUcseUJBQXlCLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztTQUMzRjthQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQyxHQUFHLEdBQUcsb0NBQW9DLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1NBQ3JFO2FBQU0sSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLEdBQUcsR0FBRywrQkFBK0IsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7U0FDaEU7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFHRCxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU07UUFDdEIsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDL0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUUvQzthQUFNO1lBQ0MsSUFBSyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDOUM7WUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztDQThDVixDQUFBOztBQXJGWSx3QkFBd0I7SUFKcEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQzs2Q0FNaUMsV0FBVyxFQUFnQixVQUFVO0dBSjNELHdCQUF3QixDQXFGcEM7U0FyRlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TZXJ2aWNlU2VydmljZSB7XG5cbiAgc2NoZW1hOiBhbnkgPSB0aGlzLmh0dHAuZ2V0KGB1cmw6IFwiZ2V0IC4uLy4uLy4uL2Fzc2V0cy9zY2hlbWEuanNvblwiYCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cblxuICAgICAgICAgIGdldEVycm9yTWVzc2FnZShjb250cm9sKSB7XG5cblxuICAgICAgICAgICAgbGV0IG1zZyA9IFwiXCI7XG5cbiAgICAgICAgICAgIGlmIChjb250cm9sLmhhc0Vycm9yKFwicmVxdWlyZWRcIikpIHtcbiAgICAgICAgICAgICAgbXNnID0gIFwiVGhpcyBGaWVsZCBpcyByZXF1aXJlZFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0Vycm9yKFwicGF0dGVyblwiKSkge1xuICAgICAgICAgICAgICBtc2cgPSBcIlRoaXMgZmllbGQgY29udGFpbiBvbmx5IGNoYXJhY3RlciB2YWx1ZS5cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udHJvbC5oYXNFcnJvcihcIm1pbmxlbmd0aFwiKSkge1xuICAgICAgICAgICAgICBtc2cgPSBcIlRoaXMgZmllbGQgcmVxdWlyZSBtaW5pbXVtIFwiICsgY29udHJvbC5lcnJvcnMubWlubGVuZ3RoLnJlcXVpcmVkTGVuZ3RoICsgXCIgY2hhcmFjdGVyc1wiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250cm9sLmhhc0Vycm9yKFwibWF4bGVuZ3RoXCIpKSB7XG4gICAgICAgICAgICAgIG1zZyA9IFwiVGhpcyBmaWVsZCBoYXMgbWF4aW11bSBcIiArIGNvbnRyb2wuZXJyb3JzLm1heGxlbmd0aC5yZXF1aXJlZExlbmd0aCArIFwiIGNoYXJhY3RlcnNcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udHJvbC5oYXNFcnJvcihcIm1pblwiKSkge1xuICAgICAgICAgICAgICBtc2cgPSBcIlRoaXMgZmllbGQgcmVxdWlyZWQgbWluaW11bSB2YWx1ZSBcIiArIGNvbnRyb2wuZXJyb3JzLm1pbi5taW47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRyb2wuaGFzRXJyb3IoXCJtYXhcIikpIHtcbiAgICAgICAgICAgICAgbXNnID0gXCJUaGlzIGZpZWxkIGhhcyBtYXhpbXVtIHZhbHVlIFwiICsgY29udHJvbC5lcnJvcnMubWF4Lm1heDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtc2c7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBlbmFibGVVbml0KGZpZWxkLCBteUZvcm0pIHtcbiAgICAgICAgICAgIGlmIChteUZvcm0uZ2V0KGZpZWxkLm5hbWUpLnZhbHVlLmluICYmIChmaWVsZC51bml0cy5sZW5ndGggPiAxKSkge1xuICAgICAgICAgICAgICBteUZvcm0uZ2V0KGZpZWxkLm5hbWUpLmNvbnRyb2xzLnVuaXQuZW5hYmxlKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggZmllbGQudW5pdHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgIG15Rm9ybS5nZXQoZmllbGQubmFtZSkuY29udHJvbHMudW5pdC5yZXNldCgpO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG15Rm9ybS5nZXQoZmllbGQubmFtZSkuY29udHJvbHMudW5pdC5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnVpbGRGb3JtID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWxsQ29udHJvbCA9IHt9O1xuICAgICAgICAgICAgbGV0IHZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hLmZvckVhY2goKGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgIC8vICBBc3NpZ24gVmFsaWRhdG9yIHRvIGFsbCBmb3JtIENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVsZW1lbnQucmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGF0YVR5cGUgPT09IFwiU3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aChlbGVtZW50Lm1pbkxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4TGVuZ3RoKGVsZW1lbnQubWF4TGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKGVsZW1lbnQucGF0dGVybikpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoKGVsZW1lbnQuZGF0YVR5cGUgPT09IFwiTnVtYmVyXCIgfHwgZWxlbWVudC5kYXRhVHlwZSA9PT0gXCJNZWFzdXJlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXgoZWxlbWVudC5tYXgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbihlbGVtZW50Lm1pbikpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVsZW1lbnQuZGF0YVR5cGUgPT09IFwiTWVhc3VyZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdW5pdHZhbHVlID0gXCJcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlbGVtZW50LnVuaXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0dmFsdWUgPSBlbGVtZW50LnVuaXRzWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVsZW1lbnQucmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycyA9IFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbihlbGVtZW50Lm1pbiksIFZhbGlkYXRvcnMubWF4KGVsZW1lbnQubWF4KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsQ29udHJvbFtlbGVtZW50Lm5hbWVdID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbjogW1wiXCIsIHZhbGlkYXRvcnNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdDogW3sgdmFsdWU6IHVuaXR2YWx1ZSwgZGlzYWJsZWQ6IHRydWUgfSwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsQ29udHJvbFtlbGVtZW50Lm5hbWVdID0gW1wiXCIsIHZhbGlkYXRvcnNdO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoYWxsQ29udHJvbCk7XG4gICAgICAgICAgfVxufVxuIl19
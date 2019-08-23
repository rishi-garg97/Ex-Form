import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let CommonService = class CommonService {
    constructor(http) {
        this.http = http;
        this.showHideSpinner = (show) => {
            // this.isSpinnerVisible = show;
            if (show) {
                jQuery("#loaderModal")
                    .modal({ backdrop: "static", keyboard: false })
                    .modal("show");
            }
            else {
                setTimeout(() => {
                    jQuery("#loaderModal").modal("hide");
                }, 1000);
            }
        };
        this.loadSignUpJson = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.signUpJson = yield this.http.get("./assets/signup.json").toPromise();
        });
        this.getValidationErrorMesageJson = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.errorMessageJson = yield this.http.get("./assets/validation-message.json").toPromise();
        });
    }
};
CommonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CommonService_Factory() { return new CommonService(i0.ɵɵinject(i1.HttpClient)); }, token: CommonService, providedIn: "root" });
CommonService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], CommonService);
export { CommonService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL3NlcnZpY2UvY29tbW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7QUFNaEQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUt4QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRXBDLG9CQUFlLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN6QixnQ0FBZ0M7WUFDaEMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsTUFBTSxDQUFDLGNBQWMsQ0FBQztxQkFDbkIsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDLENBQUM7cUJBQzVDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQjtpQkFBTTtnQkFDTCxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNWO1FBQ0gsQ0FBQyxDQUFBO1FBRUQsbUJBQWMsR0FBRyxHQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUUsQ0FBQyxDQUFBLENBQUE7UUFFRCxpQ0FBNEIsR0FBRyxHQUFTLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5RixDQUFDLENBQUEsQ0FBQTtJQXJCdUMsQ0FBQztDQXNCMUMsQ0FBQTs7QUEzQlksYUFBYTtJQUh6QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDOzZDQU0wQixVQUFVO0dBTHpCLGFBQWEsQ0EyQnpCO1NBM0JZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5kZWNsYXJlIGNvbnN0IGpRdWVyeTogYW55O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vblNlcnZpY2Uge1xuXG4gIHNpZ25VcEpzb246IGFueTtcbiAgZXJyb3JNZXNzYWdlSnNvbjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgc2hvd0hpZGVTcGlubmVyID0gKHNob3cpID0+IHtcbiAgICAvLyB0aGlzLmlzU3Bpbm5lclZpc2libGUgPSBzaG93O1xuICAgIGlmIChzaG93KSB7XG4gICAgICBqUXVlcnkoXCIjbG9hZGVyTW9kYWxcIilcbiAgICAgICAgLm1vZGFsKHtiYWNrZHJvcDogXCJzdGF0aWNcIiwga2V5Ym9hcmQ6IGZhbHNlfSlcbiAgICAgICAgLm1vZGFsKFwic2hvd1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGpRdWVyeShcIiNsb2FkZXJNb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH1cblxuICBsb2FkU2lnblVwSnNvbiA9IGFzeW5jICgpID0+IHtcbiAgICB0aGlzLnNpZ25VcEpzb24gPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KFwiLi9hc3NldHMvc2lnbnVwLmpzb25cIikudG9Qcm9taXNlKCk7XG4gIH1cblxuICBnZXRWYWxpZGF0aW9uRXJyb3JNZXNhZ2VKc29uID0gYXN5bmMgKCkgPT4ge1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlSnNvbiA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoXCIuL2Fzc2V0cy92YWxpZGF0aW9uLW1lc3NhZ2UuanNvblwiKS50b1Byb21pc2UoKTtcbiAgfVxufVxuIl19
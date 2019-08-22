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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlL2NvbW1vbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBTWhELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFLeEIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUVwQyxvQkFBZSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDekIsZ0NBQWdDO1lBQ2hDLElBQUksSUFBSSxFQUFFO2dCQUNSLE1BQU0sQ0FBQyxjQUFjLENBQUM7cUJBQ25CLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDO3FCQUM1QyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEI7aUJBQU07Z0JBQ0wsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDZCxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDVjtRQUNILENBQUMsQ0FBQTtRQUVELG1CQUFjLEdBQUcsR0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVFLENBQUMsQ0FBQSxDQUFBO1FBRUQsaUNBQTRCLEdBQUcsR0FBUyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUYsQ0FBQyxDQUFBLENBQUE7SUFyQnVDLENBQUM7Q0FzQjFDLENBQUE7O0FBM0JZLGFBQWE7SUFIekIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQzs2Q0FNMEIsVUFBVTtHQUx6QixhQUFhLENBMkJ6QjtTQTNCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuZGVjbGFyZSBjb25zdCBqUXVlcnk6IGFueTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25TZXJ2aWNlIHtcblxuICBzaWduVXBKc29uOiBhbnk7XG4gIGVycm9yTWVzc2FnZUpzb246IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIHNob3dIaWRlU3Bpbm5lciA9IChzaG93KSA9PiB7XG4gICAgLy8gdGhpcy5pc1NwaW5uZXJWaXNpYmxlID0gc2hvdztcbiAgICBpZiAoc2hvdykge1xuICAgICAgalF1ZXJ5KFwiI2xvYWRlck1vZGFsXCIpXG4gICAgICAgIC5tb2RhbCh7YmFja2Ryb3A6IFwic3RhdGljXCIsIGtleWJvYXJkOiBmYWxzZX0pXG4gICAgICAgIC5tb2RhbChcInNob3dcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBqUXVlcnkoXCIjbG9hZGVyTW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZFNpZ25VcEpzb24gPSBhc3luYyAoKSA9PiB7XG4gICAgdGhpcy5zaWduVXBKc29uID0gYXdhaXQgdGhpcy5odHRwLmdldChcIi4vYXNzZXRzL3NpZ251cC5qc29uXCIpLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgZ2V0VmFsaWRhdGlvbkVycm9yTWVzYWdlSnNvbiA9IGFzeW5jICgpID0+IHtcbiAgICB0aGlzLmVycm9yTWVzc2FnZUpzb24gPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KFwiLi9hc3NldHMvdmFsaWRhdGlvbi1tZXNzYWdlLmpzb25cIikudG9Qcm9taXNlKCk7XG4gIH1cbn1cbiJdfQ==
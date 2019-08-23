import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var CommonService = /** @class */ (function () {
    function CommonService(http) {
        var _this = this;
        this.http = http;
        this.showHideSpinner = function (show) {
            // this.isSpinnerVisible = show;
            if (show) {
                jQuery("#loaderModal")
                    .modal({ backdrop: "static", keyboard: false })
                    .modal("show");
            }
            else {
                setTimeout(function () {
                    jQuery("#loaderModal").modal("hide");
                }, 1000);
            }
        };
        this.loadSignUpJson = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.http.get("./assets/signup.json").toPromise()];
                    case 1:
                        _a.signUpJson = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.getValidationErrorMesageJson = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.http.get("./assets/validation-message.json").toPromise()];
                    case 1:
                        _a.errorMessageJson = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
    }
    CommonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CommonService_Factory() { return new CommonService(i0.ɵɵinject(i1.HttpClient)); }, token: CommonService, providedIn: "root" });
    CommonService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CommonService);
    return CommonService;
}());
export { CommonService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL3NlcnZpY2UvY29tbW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7QUFNaEQ7SUFLRSx1QkFBb0IsSUFBZ0I7UUFBcEMsaUJBQXlDO1FBQXJCLFNBQUksR0FBSixJQUFJLENBQVk7UUFFcEMsb0JBQWUsR0FBRyxVQUFDLElBQUk7WUFDckIsZ0NBQWdDO1lBQ2hDLElBQUksSUFBSSxFQUFFO2dCQUNSLE1BQU0sQ0FBQyxjQUFjLENBQUM7cUJBQ25CLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDO3FCQUM1QyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEI7aUJBQU07Z0JBQ0wsVUFBVSxDQUFDO29CQUNULE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNWO1FBQ0gsQ0FBQyxDQUFBO1FBRUQsbUJBQWMsR0FBRzs7Ozs7d0JBQ2YsS0FBQSxJQUFJLENBQUE7d0JBQWMscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQXpFLEdBQUssVUFBVSxHQUFHLFNBQXVELENBQUM7Ozs7YUFDM0UsQ0FBQTtRQUVELGlDQUE0QixHQUFHOzs7Ozt3QkFDN0IsS0FBQSxJQUFJLENBQUE7d0JBQW9CLHFCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUEzRixHQUFLLGdCQUFnQixHQUFHLFNBQW1FLENBQUM7Ozs7YUFDN0YsQ0FBQTtJQXJCdUMsQ0FBQzs7SUFMOUIsYUFBYTtRQUh6QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO2lEQU0wQixVQUFVO09BTHpCLGFBQWEsQ0EyQnpCO3dCQWxDRDtDQWtDQyxBQTNCRCxJQTJCQztTQTNCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuZGVjbGFyZSBjb25zdCBqUXVlcnk6IGFueTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25TZXJ2aWNlIHtcblxuICBzaWduVXBKc29uOiBhbnk7XG4gIGVycm9yTWVzc2FnZUpzb246IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIHNob3dIaWRlU3Bpbm5lciA9IChzaG93KSA9PiB7XG4gICAgLy8gdGhpcy5pc1NwaW5uZXJWaXNpYmxlID0gc2hvdztcbiAgICBpZiAoc2hvdykge1xuICAgICAgalF1ZXJ5KFwiI2xvYWRlck1vZGFsXCIpXG4gICAgICAgIC5tb2RhbCh7YmFja2Ryb3A6IFwic3RhdGljXCIsIGtleWJvYXJkOiBmYWxzZX0pXG4gICAgICAgIC5tb2RhbChcInNob3dcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBqUXVlcnkoXCIjbG9hZGVyTW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZFNpZ25VcEpzb24gPSBhc3luYyAoKSA9PiB7XG4gICAgdGhpcy5zaWduVXBKc29uID0gYXdhaXQgdGhpcy5odHRwLmdldChcIi4vYXNzZXRzL3NpZ251cC5qc29uXCIpLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgZ2V0VmFsaWRhdGlvbkVycm9yTWVzYWdlSnNvbiA9IGFzeW5jICgpID0+IHtcbiAgICB0aGlzLmVycm9yTWVzc2FnZUpzb24gPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KFwiLi9hc3NldHMvdmFsaWRhdGlvbi1tZXNzYWdlLmpzb25cIikudG9Qcm9taXNlKCk7XG4gIH1cbn1cbiJdfQ==
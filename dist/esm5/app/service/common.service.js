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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlL2NvbW1vbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBTWhEO0lBS0UsdUJBQW9CLElBQWdCO1FBQXBDLGlCQUF5QztRQUFyQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRXBDLG9CQUFlLEdBQUcsVUFBQyxJQUFJO1lBQ3JCLGdDQUFnQztZQUNoQyxJQUFJLElBQUksRUFBRTtnQkFDUixNQUFNLENBQUMsY0FBYyxDQUFDO3FCQUNuQixLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBQztxQkFDNUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xCO2lCQUFNO2dCQUNMLFVBQVUsQ0FBQztvQkFDVCxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDVjtRQUNILENBQUMsQ0FBQTtRQUVELG1CQUFjLEdBQUc7Ozs7O3dCQUNmLEtBQUEsSUFBSSxDQUFBO3dCQUFjLHFCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUF6RSxHQUFLLFVBQVUsR0FBRyxTQUF1RCxDQUFDOzs7O2FBQzNFLENBQUE7UUFFRCxpQ0FBNEIsR0FBRzs7Ozs7d0JBQzdCLEtBQUEsSUFBSSxDQUFBO3dCQUFvQixxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBM0YsR0FBSyxnQkFBZ0IsR0FBRyxTQUFtRSxDQUFDOzs7O2FBQzdGLENBQUE7SUFyQnVDLENBQUM7O0lBTDlCLGFBQWE7UUFIekIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztpREFNMEIsVUFBVTtPQUx6QixhQUFhLENBMkJ6Qjt3QkFsQ0Q7Q0FrQ0MsQUEzQkQsSUEyQkM7U0EzQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmRlY2xhcmUgY29uc3QgalF1ZXJ5OiBhbnk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uU2VydmljZSB7XG5cbiAgc2lnblVwSnNvbjogYW55O1xuICBlcnJvck1lc3NhZ2VKc29uOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBzaG93SGlkZVNwaW5uZXIgPSAoc2hvdykgPT4ge1xuICAgIC8vIHRoaXMuaXNTcGlubmVyVmlzaWJsZSA9IHNob3c7XG4gICAgaWYgKHNob3cpIHtcbiAgICAgIGpRdWVyeShcIiNsb2FkZXJNb2RhbFwiKVxuICAgICAgICAubW9kYWwoe2JhY2tkcm9wOiBcInN0YXRpY1wiLCBrZXlib2FyZDogZmFsc2V9KVxuICAgICAgICAubW9kYWwoXCJzaG93XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgalF1ZXJ5KFwiI2xvYWRlck1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRTaWduVXBKc29uID0gYXN5bmMgKCkgPT4ge1xuICAgIHRoaXMuc2lnblVwSnNvbiA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoXCIuL2Fzc2V0cy9zaWdudXAuanNvblwiKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGdldFZhbGlkYXRpb25FcnJvck1lc2FnZUpzb24gPSBhc3luYyAoKSA9PiB7XG4gICAgdGhpcy5lcnJvck1lc3NhZ2VKc29uID0gYXdhaXQgdGhpcy5odHRwLmdldChcIi4vYXNzZXRzL3ZhbGlkYXRpb24tbWVzc2FnZS5qc29uXCIpLnRvUHJvbWlzZSgpO1xuICB9XG59XG4iXX0=
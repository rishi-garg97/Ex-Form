import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
var SnackBarMessageService = /** @class */ (function () {
    function SnackBarMessageService(snackBar) {
        var _this = this;
        this.snackBar = snackBar;
        this.config = { duration: 2000 };
        this.show = function (message, action) {
            _this.snackBar.open(message, action, _this.config);
        };
    }
    SnackBarMessageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SnackBarMessageService_Factory() { return new SnackBarMessageService(i0.ɵɵinject(i1.MatSnackBar)); }, token: SnackBarMessageService, providedIn: "root" });
    SnackBarMessageService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [MatSnackBar])
    ], SnackBarMessageService);
    return SnackBarMessageService;
}());
export { SnackBarMessageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3Vsci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvc2VydmljZS9zbmFjay1iYXItbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxXQUFXLEVBQW9CLE1BQU0sbUJBQW1CLENBQUM7OztBQUlqRTtJQUlFLGdDQUFvQixRQUFxQjtRQUF6QyxpQkFBOEM7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUZ6QyxXQUFNLEdBQXNCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1FBSS9DLFNBQUksR0FBRyxVQUFDLE9BQU8sRUFBRSxNQUFPO1lBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQTtJQUo0QyxDQUFDOztJQUpuQyxzQkFBc0I7UUFIbEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztpREFLOEIsV0FBVztPQUo5QixzQkFBc0IsQ0FTbEM7aUNBZEQ7Q0FjQyxBQVRELElBU0M7U0FUWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWF0U25hY2tCYXIsIE1hdFNuYWNrQmFyQ29uZmlnfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJNZXNzYWdlU2VydmljZSB7XG5cbiAgY29uZmlnOiBNYXRTbmFja0JhckNvbmZpZyA9IHsgZHVyYXRpb246IDIwMDAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcikgeyB9XG5cbiAgc2hvdyA9IChtZXNzYWdlLCBhY3Rpb24/KSA9PiB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIGFjdGlvbiwgdGhpcy5jb25maWcpO1xuICB9XG59XG4iXX0=
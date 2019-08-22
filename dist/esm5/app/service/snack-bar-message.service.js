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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL3NlcnZpY2Uvc25hY2stYmFyLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsV0FBVyxFQUFvQixNQUFNLG1CQUFtQixDQUFDOzs7QUFJakU7SUFJRSxnQ0FBb0IsUUFBcUI7UUFBekMsaUJBQThDO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFGekMsV0FBTSxHQUFzQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUkvQyxTQUFJLEdBQUcsVUFBQyxPQUFPLEVBQUUsTUFBTztZQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUE7SUFKNEMsQ0FBQzs7SUFKbkMsc0JBQXNCO1FBSGxDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7aURBSzhCLFdBQVc7T0FKOUIsc0JBQXNCLENBU2xDO2lDQWREO0NBY0MsQUFURCxJQVNDO1NBVFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge01hdFNuYWNrQmFyLCBNYXRTbmFja0JhckNvbmZpZ30gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyTWVzc2FnZVNlcnZpY2Uge1xuXG4gIGNvbmZpZzogTWF0U25hY2tCYXJDb25maWcgPSB7IGR1cmF0aW9uOiAyMDAwIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxuXG4gIHNob3cgPSAobWVzc2FnZSwgYWN0aW9uPykgPT4ge1xuICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIHRoaXMuY29uZmlnKTtcbiAgfVxufVxuIl19
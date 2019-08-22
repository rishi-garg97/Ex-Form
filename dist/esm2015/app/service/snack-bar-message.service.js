import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
let SnackBarMessageService = class SnackBarMessageService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.config = { duration: 2000 };
        this.show = (message, action) => {
            this.snackBar.open(message, action, this.config);
        };
    }
};
SnackBarMessageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SnackBarMessageService_Factory() { return new SnackBarMessageService(i0.ɵɵinject(i1.MatSnackBar)); }, token: SnackBarMessageService, providedIn: "root" });
SnackBarMessageService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    }),
    tslib_1.__metadata("design:paramtypes", [MatSnackBar])
], SnackBarMessageService);
export { SnackBarMessageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3Vsci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvc2VydmljZS9zbmFjay1iYXItbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxXQUFXLEVBQW9CLE1BQU0sbUJBQW1CLENBQUM7OztBQUlqRSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUlqQyxZQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBRnpDLFdBQU0sR0FBc0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFJL0MsU0FBSSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU8sRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQTtJQUo0QyxDQUFDO0NBSy9DLENBQUE7O0FBVFksc0JBQXNCO0lBSGxDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7NkNBSzhCLFdBQVc7R0FKOUIsc0JBQXNCLENBU2xDO1NBVFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge01hdFNuYWNrQmFyLCBNYXRTbmFja0JhckNvbmZpZ30gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyTWVzc2FnZVNlcnZpY2Uge1xuXG4gIGNvbmZpZzogTWF0U25hY2tCYXJDb25maWcgPSB7IGR1cmF0aW9uOiAyMDAwIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxuXG4gIHNob3cgPSAobWVzc2FnZSwgYWN0aW9uPykgPT4ge1xuICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIHRoaXMuY29uZmlnKTtcbiAgfVxufVxuIl19
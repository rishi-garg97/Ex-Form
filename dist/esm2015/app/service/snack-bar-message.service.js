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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL3NlcnZpY2Uvc25hY2stYmFyLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsV0FBVyxFQUFvQixNQUFNLG1CQUFtQixDQUFDOzs7QUFJakUsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFJakMsWUFBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUZ6QyxXQUFNLEdBQXNCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1FBSS9DLFNBQUksR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFPLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUE7SUFKNEMsQ0FBQztDQUsvQyxDQUFBOztBQVRZLHNCQUFzQjtJQUhsQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDOzZDQUs4QixXQUFXO0dBSjlCLHNCQUFzQixDQVNsQztTQVRZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtNYXRTbmFja0JhciwgTWF0U25hY2tCYXJDb25maWd9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBTbmFja0Jhck1lc3NhZ2VTZXJ2aWNlIHtcblxuICBjb25maWc6IE1hdFNuYWNrQmFyQ29uZmlnID0geyBkdXJhdGlvbjogMjAwMCB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cblxuICBzaG93ID0gKG1lc3NhZ2UsIGFjdGlvbj8pID0+IHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgYWN0aW9uLCB0aGlzLmNvbmZpZyk7XG4gIH1cbn1cbiJdfQ==
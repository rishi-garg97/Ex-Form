import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { CommonService } from "./service/common.service";
var AppComponent = /** @class */ (function () {
    function AppComponent(commonService) {
        this.commonService = commonService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.commonService.loadSignUpJson();
        this.commonService.getValidationErrorMesageJson();
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: "app-root",
            template: "<!--<nav class=\"navbar fixed-top navbar-dark bg-dark\"-->\n     <!--style=\"color: white;\">-->\n\n  <!--<a class=\"navbar-brand\">Angular Form</a>-->\n\n<!--</nav>-->\n<app-tool-bar></app-tool-bar>\n\n<div style=\"margin-top: 30px;\">\n\n  <router-outlet></router-outlet>\n  <div id=\"loaderModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"loader-dialog modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\" style=\"background-color: unset; border: unset;\">\n        <div class=\"modal-body\">\n          <app-loading-spinner></app-loading-spinner>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n\n\n\n<!--<app-loading-spinner *ngIf=\"commonService.isSpinnerVisible\"></app-loading-spinner>-->\n\n",
            styles: [""]
        }),
        tslib_1.__metadata("design:paramtypes", [CommonService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBTXhEO0lBQ0Usc0JBQW1CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBRS9DLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDcEQsQ0FBQztJQVJVLFlBQVk7UUFMeEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsa3pCQUFtQzs7U0FFcEMsQ0FBQztpREFFa0MsYUFBYTtPQURwQyxZQUFZLENBV3hCO0lBQUQsbUJBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uU2VydmljZX0gZnJvbSBcIi4vc2VydmljZS9jb21tb24uc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1yb290XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9hcHAuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tbW9uU2VydmljZTogQ29tbW9uU2VydmljZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbW1vblNlcnZpY2UubG9hZFNpZ25VcEpzb24oKTtcbiAgICB0aGlzLmNvbW1vblNlcnZpY2UuZ2V0VmFsaWRhdGlvbkVycm9yTWVzYWdlSnNvbigpO1xuICB9XG5cblxufVxuIl19
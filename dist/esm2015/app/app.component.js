import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { CommonService } from "./service/common.service";
let AppComponent = class AppComponent {
    constructor(commonService) {
        this.commonService = commonService;
    }
    ngOnInit() {
        this.commonService.loadSignUpJson();
        this.commonService.getValidationErrorMesageJson();
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: "app-root",
        template: "<!--<nav class=\"navbar fixed-top navbar-dark bg-dark\"-->\n     <!--style=\"color: white;\">-->\n\n  <!--<a class=\"navbar-brand\">Angular Form</a>-->\n\n<!--</nav>-->\n<app-tool-bar></app-tool-bar>\n\n<div style=\"margin-top: 30px;\">\n\n  <router-outlet></router-outlet>\n  <div id=\"loaderModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"loader-dialog modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\" style=\"background-color: unset; border: unset;\">\n        <div class=\"modal-body\">\n          <app-loading-spinner></app-loading-spinner>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n\n\n\n<!--<app-loading-spinner *ngIf=\"commonService.isSpinnerVisible\"></app-loading-spinner>-->\n\n",
        styles: [""]
    }),
    tslib_1.__metadata("design:paramtypes", [CommonService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBTXhELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFDdkIsWUFBbUIsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFFL0MsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0NBR0YsQ0FBQTtBQVhZLFlBQVk7SUFMeEIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsa3pCQUFtQzs7S0FFcEMsQ0FBQzs2Q0FFa0MsYUFBYTtHQURwQyxZQUFZLENBV3hCO1NBWFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vblNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2UvY29tbW9uLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtcm9vdFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYXBwLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbW1vblNlcnZpY2U6IENvbW1vblNlcnZpY2UpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb21tb25TZXJ2aWNlLmxvYWRTaWduVXBKc29uKCk7XG4gICAgdGhpcy5jb21tb25TZXJ2aWNlLmdldFZhbGlkYXRpb25FcnJvck1lc2FnZUpzb24oKTtcbiAgfVxuXG5cbn1cbiJdfQ==
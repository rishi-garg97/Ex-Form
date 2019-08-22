import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthenticationGuard } from "./guard/authentication.guard";
var routes = [
    { path: "dashboard", component: DashboardComponent, canActivate: [AuthenticationGuard] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUdqRSxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7Q0FDekYsQ0FBQztBQVFGO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixnQkFBZ0I7UUFONUIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxPQUFPLEVBQUUsQ0FBRSxZQUFZLENBQUU7U0FDMUIsQ0FBQztPQUdXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQSxBQUFoQyxJQUFnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkd1YXJkfSBmcm9tIFwiLi9ndWFyZC9hdXRoZW50aWNhdGlvbi5ndWFyZFwiO1xuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6IFwiZGFzaGJvYXJkXCIsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhlbnRpY2F0aW9uR3VhcmRdIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gIGV4cG9ydHM6IFsgUm91dGVyTW9kdWxlIF1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge31cbiJdfQ==
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {DashboardComponent} from "./component/ex-form/dashboard/dashboard.component";
import {AuthenticationGuard} from "./guard/authentication.guard";


const routes: Routes = [
   { path: "dashboard", component: DashboardComponent, canActivate: [AuthenticationGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}

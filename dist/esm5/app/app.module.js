import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AngularMaterialModule } from "./Modules/angular-material.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JsonFormComponent } from "./component/json-form/json-form.component";
import { ValidationServiceService } from "./component/json-form/validation-service.service";
import { FormComponent } from "./component/ex-form/form.component";
import { TextFieldComponent } from "./component/ex-form/form-field/text/text-field.component";
import { NumberFieldComponent } from "./component/ex-form/form-field/number/number-field.component";
import { DropdownComponent } from "./component/ex-form/form-field/dropdown/dropdown.component";
import { MeasureComponent } from "./component/ex-form/form-field/measure/measure.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./entryComponent/login/login.component";
import { ToolBarComponent } from "./header/tool-bar/tool-bar.component";
import { MatDialogModule } from "@angular/material";
import { SignupComponent } from "./entryComponent/signup/signup.component";
import { EmailFieldComponent } from "./component/ex-form/form-field/email/email-field.component";
import { PasswordFieldComponent } from "./component/ex-form/form-field/password/password-field.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { SocialLoginModule } from "angularx-social-login";
import { HttpClientModule } from "@angular/common/http";
import { NgJsonEditorModule } from "ang-jsoneditor";
// firebase
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AuthService } from "./entryComponent/services/auth.service";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { CommonService } from "./service/common.service";
import { StepFormComponent } from "./component/ex-form/viewer/group/step-wizard/step-form.component";
import { SimpleComponent } from "./component/ex-form/viewer/basic/simple/simple.component";
import { AccordianComponent } from "./component/ex-form/viewer/group/accordian/accordian.component";
import { TabComponent } from "./component/ex-form/viewer/group/tabs/tab/tab.component";
import { UiSchemaComponent } from "./json-editor/ui-schema/ui-schema.component";
import { ModelSchemaComponent } from "./json-editor/model-schema/model-schema.component";
import { RadioComponent } from "./component/ex-form/form-field/radio/radio.component";
import { ValidationMessageGeneratorService } from "./component/ex-form/validators/validation-message-generator.service";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                JsonFormComponent,
                FormComponent,
                TextFieldComponent,
                NumberFieldComponent,
                DropdownComponent,
                MeasureComponent,
                DashboardComponent,
                LoginComponent,
                ToolBarComponent,
                SignupComponent,
                EmailFieldComponent,
                PasswordFieldComponent,
                LoadingSpinnerComponent,
                StepFormComponent,
                SimpleComponent,
                AccordianComponent,
                TabComponent,
                UiSchemaComponent,
                ModelSchemaComponent,
                RadioComponent
            ],
            imports: [
                FormsModule,
                AngularMaterialModule,
                ReactiveFormsModule,
                CommonModule,
                AppRoutingModule,
                MatDialogModule,
                BrowserModule,
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFireModule,
                AngularFirestoreModule,
                MatSnackBarModule,
                AngularFireDatabaseModule,
                AngularFireAuthModule,
                MatExpansionModule,
                MatTabsModule,
                SocialLoginModule,
                HttpClientModule,
                NgJsonEditorModule
            ],
            entryComponents: [
                LoginComponent, SignupComponent
            ],
            providers: [ValidationServiceService,
                ValidationMessageGeneratorService,
                AuthService,
                CommonService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3Vsci1qc29uLWZvcm0vIiwic291cmNlcyI6WyJhcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDakUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sMERBQTBELENBQUM7QUFDNUYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sOERBQThELENBQUM7QUFDbEcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNERBQTRELENBQUM7QUFDN0YsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMERBQTBELENBQUM7QUFDMUYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFP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Z0JBQ2YsY0FBYyxFQUFFLGVBQWU7YUFDaEM7WUFFRCxTQUFTLEVBQUUsQ0FBQyx3QkFBd0I7Z0JBQ2xDLGlDQUFpQztnQkFDakMsV0FBVztnQkFDWCxhQUFhO2FBQ2Q7WUFDRCxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDMUIsQ0FBQztPQUNXLFNBQVMsQ0FDckI7SUFBRCxnQkFBQztDQUFBLEFBREQsSUFDQztTQURZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBbmd1bGFyTWF0ZXJpYWxNb2R1bGV9IGZyb20gXCIuL01vZHVsZXMvYW5ndWxhci1tYXRlcmlhbC5tb2R1bGVcIjtcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtKc29uRm9ybUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50L2pzb24tZm9ybS9qc29uLWZvcm0uY29tcG9uZW50XCI7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50L2pzb24tZm9ybS92YWxpZGF0aW9uLXNlcnZpY2Uuc2VydmljZVwiO1xuaW1wb3J0IHtGb3JtQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnQvZXgtZm9ybS9mb3JtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUZXh0RmllbGRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0tZmllbGQvdGV4dC90ZXh0LWZpZWxkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOdW1iZXJGaWVsZENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9udW1iZXIvbnVtYmVyLWZpZWxkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEcm9wZG93bkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVhc3VyZUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9tZWFzdXJlL21lYXN1cmUuY29tcG9uZW50XCI7XG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7QXBwUm91dGluZ01vZHVsZX0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9lbnRyeUNvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7VG9vbEJhckNvbXBvbmVudH0gZnJvbSBcIi4vaGVhZGVyL3Rvb2wtYmFyL3Rvb2wtYmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNYXREaWFsb2dNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL2VudHJ5Q29tcG9uZW50L3NpZ251cC9zaWdudXAuY29tcG9uZW50XCI7XG5pbXBvcnQge0VtYWlsRmllbGRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0tZmllbGQvZW1haWwvZW1haWwtZmllbGQuY29tcG9uZW50XCI7XG5pbXBvcnQge1Bhc3N3b3JkRmllbGRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudC9leC1mb3JtL2Zvcm0tZmllbGQvcGFzc3dvcmQvcGFzc3dvcmQtZmllbGQuY29tcG9uZW50XCI7XG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQge01hdFNuYWNrQmFyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyXCI7XG5pbXBvcnQge01hdEV4cGFuc2lvbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvblwiO1xuaW1wb3J0IHtNYXRUYWJzTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdGFic1wiO1xuXG5pbXBvcnQge1NvY2lhbExvZ2luTW9kdWxlLCBBdXRoU2VydmljZUNvbmZpZywgRmFjZWJvb2tMb2dpblByb3ZpZGVyfSBmcm9tIFwiYW5ndWxhcngtc29jaWFsLWxvZ2luXCI7XG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtOZ0pzb25FZGl0b3JNb2R1bGV9IGZyb20gXCJhbmctanNvbmVkaXRvclwiO1xuXG5cbi8vIGZpcmViYXNlXG5pbXBvcnQge0FuZ3VsYXJGaXJlTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZVwiO1xuaW1wb3J0IHtlbnZpcm9ubWVudH0gZnJvbSBcIi4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudFwiO1xuaW1wb3J0IHtBbmd1bGFyRmlyZUF1dGhNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9maXJlL2F1dGhcIjtcbmltcG9ydCB7QW5ndWxhckZpcmVzdG9yZU1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlXCI7XG5pbXBvcnQge0FuZ3VsYXJGaXJlRGF0YWJhc2VNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9maXJlL2RhdGFiYXNlXCI7XG5cblxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vZW50cnlDb21wb25lbnQvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0xvYWRpbmdTcGlubmVyQ29tcG9uZW50fSBmcm9tIFwiLi9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb21tb25TZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlL2NvbW1vbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0ZXBGb3JtQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnQvZXgtZm9ybS92aWV3ZXIvZ3JvdXAvc3RlcC13aXphcmQvc3RlcC1mb3JtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaW1wbGVDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudC9leC1mb3JtL3ZpZXdlci9iYXNpYy9zaW1wbGUvc2ltcGxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBY2NvcmRpYW5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudC9leC1mb3JtL3ZpZXdlci9ncm91cC9hY2NvcmRpYW4vYWNjb3JkaWFuLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUYWJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudC9leC1mb3JtL3ZpZXdlci9ncm91cC90YWJzL3RhYi90YWIuY29tcG9uZW50XCI7XG5pbXBvcnQge1VpU2NoZW1hQ29tcG9uZW50fSBmcm9tIFwiLi9qc29uLWVkaXRvci91aS1zY2hlbWEvdWktc2NoZW1hLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNb2RlbFNjaGVtYUNvbXBvbmVudH0gZnJvbSBcIi4vanNvbi1lZGl0b3IvbW9kZWwtc2NoZW1hL21vZGVsLXNjaGVtYS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJhZGlvQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50L2V4LWZvcm0vZm9ybS1maWVsZC9yYWRpby9yYWRpby5jb21wb25lbnRcIjtcbmltcG9ydCB7VmFsaWRhdGlvbk1lc3NhZ2VHZW5lcmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnQvZXgtZm9ybS92YWxpZGF0b3JzL3ZhbGlkYXRpb24tbWVzc2FnZS1nZW5lcmF0b3Iuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgSnNvbkZvcm1Db21wb25lbnQsXG4gICAgRm9ybUNvbXBvbmVudCxcbiAgICBUZXh0RmllbGRDb21wb25lbnQsXG4gICAgTnVtYmVyRmllbGRDb21wb25lbnQsXG4gICAgRHJvcGRvd25Db21wb25lbnQsXG4gICAgTWVhc3VyZUNvbXBvbmVudCxcbiAgICBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gICAgVG9vbEJhckNvbXBvbmVudCxcbiAgICBTaWdudXBDb21wb25lbnQsXG4gICAgRW1haWxGaWVsZENvbXBvbmVudCxcbiAgICBQYXNzd29yZEZpZWxkQ29tcG9uZW50LFxuICAgIExvYWRpbmdTcGlubmVyQ29tcG9uZW50LFxuICAgIFN0ZXBGb3JtQ29tcG9uZW50LFxuICAgIFNpbXBsZUNvbXBvbmVudCxcbiAgICBBY2NvcmRpYW5Db21wb25lbnQsXG4gICAgVGFiQ29tcG9uZW50LFxuICAgIFVpU2NoZW1hQ29tcG9uZW50LFxuICAgIE1vZGVsU2NoZW1hQ29tcG9uZW50LFxuICAgIFJhZGlvQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBBbmd1bGFyTWF0ZXJpYWxNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBBbmd1bGFyRmlyZU1vZHVsZS5pbml0aWFsaXplQXBwKGVudmlyb25tZW50LmZpcmViYXNlQ29uZmlnKSxcbiAgICBBbmd1bGFyRmlyZU1vZHVsZSwgLy8gT25seSByZXF1aXJlZCBmb3IgYXV0aCBmZWF0dXJlcyxcbiAgICBBbmd1bGFyRmlyZXN0b3JlTW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIEFuZ3VsYXJGaXJlRGF0YWJhc2VNb2R1bGUsXG4gICAgQW5ndWxhckZpcmVBdXRoTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIFNvY2lhbExvZ2luTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTmdKc29uRWRpdG9yTW9kdWxlXG5cbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgTG9naW5Db21wb25lbnQsIFNpZ251cENvbXBvbmVudFxuICBdLFxuXG4gIHByb3ZpZGVyczogW1ZhbGlkYXRpb25TZXJ2aWNlU2VydmljZSxcbiAgICBWYWxpZGF0aW9uTWVzc2FnZUdlbmVyYXRvclNlcnZpY2UsXG4gICAgQXV0aFNlcnZpY2UsXG4gICAgQ29tbW9uU2VydmljZVxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG5cbiJdfQ==
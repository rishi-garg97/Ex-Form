import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AngularMaterialModule } from "./Modules/angular-material.module";
import { CommonModule } from "@angular/common";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { JsonFormComponent } from "./component/json-form/json-form.component";
import { ValidationServiceService } from "./component/json-form/validation-service.service";
import { FormComponent } from "./component/ex-form/form-group/form.component";
import { TextFieldComponent } from "./component/ex-form/text-field/text-field.component";
import { NumberFieldComponent } from "./component/ex-form/number-field/number-field.component";
import { DropdownComponent } from "./component/ex-form/dropdown/dropdown.component";
import { MeasureComponent } from "./component/ex-form/measure/measure.component";
import { DashboardComponent } from "./component/ex-form/dashboard/dashboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./entryComponent/login/login.component";
import { ToolBarComponent } from "./header/tool-bar/tool-bar.component";
import {MatDialogModule} from "@angular/material";
import { SignupComponent } from "./entryComponent/signup/signup.component";
import { EmailFieldComponent } from "./component/ex-form/email-field/email-field.component";
import { PasswordFieldComponent } from "./component/ex-form/password-field/password-field.component";
import { BrowserModule } from "@angular/platform-browser";
import {MatSnackBarModule} from "@angular/material/snack-bar";


// firebase
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/database";


import {AuthService} from "./entryComponent/services/auth.service";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import {CommonService} from "./service/common.service";


@NgModule({
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
    LoadingSpinnerComponent
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
    AngularFireAuthModule, // Only required for auth features,
    AngularFirestoreModule,
    MatSnackBarModule,
    AngularFireDatabaseModule

  ],
  entryComponents: [
LoginComponent, SignupComponent
  ],

  providers: [ValidationServiceService, AuthService, CommonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


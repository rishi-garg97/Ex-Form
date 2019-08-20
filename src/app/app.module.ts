import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {AngularMaterialModule} from "./Modules/angular-material.module";
import {CommonModule} from "@angular/common";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JsonFormComponent} from "./component/json-form/json-form.component";
import {ValidationServiceService} from "./component/json-form/validation-service.service";
import {FormComponent} from "./component/ex-form/form.component";
import {TextFieldComponent} from "./component/ex-form/form-field/text/text-field.component";
import {NumberFieldComponent} from "./component/ex-form/form-field/number/number-field.component";
import {DropdownComponent} from "./component/ex-form/form-field/dropdown/dropdown.component";
import {MeasureComponent} from "./component/ex-form/form-field/measure/measure.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {LoginComponent} from "./entryComponent/login/login.component";
import {ToolBarComponent} from "./header/tool-bar/tool-bar.component";
import {MatDialogModule} from "@angular/material";
import {SignupComponent} from "./entryComponent/signup/signup.component";
import {EmailFieldComponent} from "./component/ex-form/form-field/email/email-field.component";
import {PasswordFieldComponent} from "./component/ex-form/form-field/password/password-field.component";
import {BrowserModule} from "@angular/platform-browser";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTabsModule} from "@angular/material/tabs";

import {SocialLoginModule, AuthServiceConfig, FacebookLoginProvider} from "angularx-social-login";
import {HttpClientModule} from "@angular/common/http";
import {NgJsonEditorModule} from "ang-jsoneditor"


// firebase
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/database";


import {AuthService} from "./entryComponent/services/auth.service";
import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";
import {CommonService} from "./service/common.service";
import {StepFormComponent} from "./component/ex-form/viewer/group/step-wizard/step-form.component";
import {SimpleComponent} from "./component/ex-form/viewer/basic/simple/simple.component";
import {AccordianComponent} from "./component/ex-form/viewer/group/accordian/accordian.component";
import {TabComponent} from "./component/ex-form/viewer/group/tabs/tab/tab.component";
import {UiSchemaComponent} from "./json-editor/ui-schema/ui-schema.component";
import {ModelSchemaComponent} from "./json-editor/model-schema/model-schema.component";
import { RadioComponent } from './component/ex-form/form-field/radio/radio.component';

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
    AngularFireModule, // Only required for auth features,
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
    AuthService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AngularMaterialModule } from "./Modules/angular-material.module"
import { CommonModule } from "@angular/common";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { JsonFormComponent } from "./component/json-form/json-form.component";
import { ValidationServiceService } from "./component/json-form/validation-service.service";
import { FormComponent } from "./component/ex-form/form-group/form.component";
import { TextFieldComponent } from "./component/ex-form/text-field/text-field.component";
import { NumberFieldComponent } from "./component/ex-form/number-field/number-field.component";
import { DropdownComponent } from "./component/ex-form/dropdown/dropdown.component";
import { MeasureComponent } from "./component/ex-form/measure/measure.component";
import { ProtocolComponent } from "./component/protocol/protocol.component";
@NgModule({
  declarations: [
    AppComponent,
    JsonFormComponent,
    FormComponent,
    TextFieldComponent,
    NumberFieldComponent,
    DropdownComponent,
    MeasureComponent,
    ProtocolComponent
  ],
  imports: [
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [ValidationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


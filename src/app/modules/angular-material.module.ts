import { NgModule } from "@angular/core";
import {MatButtonModule, MatIconModule, MatCheckboxModule, MatNativeDateModule, MatFormFieldModule, MatDatepickerModule,
        MatOptionModule, MatSelectModule, MatInputModule, MatCardModule, MatToolbarModule, MatGridListModule } from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
     MatCheckboxModule,
     MatInputModule,
     MatFormFieldModule,
     MatOptionModule,
     MatSelectModule,
     MatCardModule,
     MatToolbarModule,
    MatGridListModule],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
     MatCheckboxModule,
     MatInputModule,
     MatFormFieldModule,
     MatOptionModule,
     MatSelectModule,
     MatCardModule,
     MatToolbarModule,
     MatGridListModule
  ]
})
export class AngularMaterialModule { }

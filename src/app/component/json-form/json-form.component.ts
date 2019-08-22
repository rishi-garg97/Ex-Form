import { Component, OnInit } from "@angular/core";
import {  FormGroup } from "@angular/forms";
import {ValidationServiceService} from "./validation-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: "app-json-form",
  templateUrl: "./json-form.component.html",
  styleUrls: ["./json-form.component.css"],
})

export class JsonFormComponent implements OnInit {
  title = "JsonForm";
  formGroup: FormGroup;
  schema: any;

  constructor(private validationService: ValidationServiceService, private http: HttpClient) {
    this.schema  = this.http.get("./assets/schema.json").toPromise();
  }

  ngOnInit() {


    this.formGroup = this.validationService.buildForm();

      }

      getEror(control) {
        const controls = "controls";
        if (!this.formGroup.get(control.name)[controls].unit.disabled) {
          return this.validationService.getErrorMessage(this.formGroup.get(control.name)[controls].unit);

        }
      }

      getError(control) {
        if ( this.formGroup.get(control.name) instanceof FormGroup) {
          const controls = "controls";
          return this.validationService.getErrorMessage(this.formGroup.get(control.name)[controls].in);
        }
        return this.validationService.getErrorMessage(this.formGroup.get(control.name));
      }

      login = () => {
        console.log(this.formGroup.value);
      }

      // To Reset all Form Control
      reset = () => this.formGroup.reset();

      // To enable/disable measure unit field
      enable = (field) => {
        this.validationService.enableUnit(field, this.formGroup);
      }



}

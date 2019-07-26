import { Component, OnInit } from "@angular/core";
import {FormBuildingService} from "../form-building.service";
import {FormGroup} from "@angular/forms";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  entity =  [
               { name: "Aliquot" }, { name: "Case" }, { name: "Demographic" },
               { name: "Diagnosis" }, { name: "Experiment" }, { name: "Instrument" },
               { name: "InstrumentModel" }, { name: "Lab" }, { name: "Project" },
               { name: "Protocol" }, { name: "Sample" }
            ];

  schema: any;
  formGroup: FormGroup;
  selected = "Aliquot";

  constructor(private formBuildingService: FormBuildingService) { }

  ngOnInit() {
     this.initialize();
  }

  initialize = () => {
    this.schema = this.formBuildingService.getSchema(this.selected);
  }

  reinitialize = () => {
    this.initialize();
  }


}

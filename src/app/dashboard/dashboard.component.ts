import {Component, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {DashboardService} from "./dashboard.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  entity = [
    {name: "Aliquot"}, {name: "Case"}, {name: "Demographic"},
    {name: "Diagnosis"}, {name: "Experiment"}, {name: "Instrument"},
    {name: "InstrumentModel"}, {name: "Lab"}, {name: "Project"},
    {name: "Protocol"}, {name: "Sample"}
  ];

  modelSchema: any;
  formGroup: FormGroup;
  selected = "Protocol";
  uiSchema: any;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.initialize();
  }

  initialize = () => {
    this.modelSchema = this.dashboardService.getSchema(this.selected);
    this.uiSchema = this.dashboardService.getUISchema(this.modelSchema.type);
   }


  reinitialize = () => {
    this.initialize();
  }


}

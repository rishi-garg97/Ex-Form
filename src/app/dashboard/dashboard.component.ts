import {Component, OnInit, ViewChild} from "@angular/core";
import {DashboardService} from "./dashboard.service";
import {JsonEditorComponent} from "ang-jsoneditor";

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

  formType = ["Normal", "Group"];
  editorModelSchema: any;
  formModelSchema: any;
  editorUISchema: any;
  formUISchema: any;
  selected = "Protocol";
  selectedType = "Normal";

  @ViewChild(JsonEditorComponent, {static: false}) editor: JsonEditorComponent;


  constructor(private dashboardService: DashboardService) {  }

  ngOnInit() {
    this.initialize();
  }

  initialize = () => {
    this.editorModelSchema = this.dashboardService.enitityModelSchema(this.selected);
    this.formModelSchema = this.dashboardService.schema.model.form;
    this.editorUISchema = this.dashboardService.uiSchema(this.selectedType);
    this.formUISchema = this.dashboardService.schema.ui.form;
  }


  reinitialize = () => {
    this.initialize();
  }

  uiSchemaChange = (data) => {
    this.formUISchema =  data;
  }

  modelSchemaChange = (data) => {
    this.formModelSchema = data;
  }

  setUiSchema = (id) => {
    this.editorUISchema = this.dashboardService.uiSchema(id);
    this.formUISchema = this.dashboardService.schema.ui.form;
  }
}

import {Component, Input, OnInit, ViewChild} from "@angular/core";
import { JsonEditorComponent, JsonEditorOptions } from "ang-jsoneditor";

@Component({
  selector: "app-model-schema",
  templateUrl: "./model-schema.component.html",
  styleUrls: ["./model-schema.component.css"]
})
export class ModelSchemaComponent implements OnInit {
  @ViewChild(JsonEditorComponent, {static: false}) editor: JsonEditorComponent;

  @Input() modelSchemaData: any;

  public modelSchemaEditorOptions: JsonEditorOptions;

  constructor() {
    this.modelSchemaEditorOptions = new JsonEditorOptions();
    this.modelSchemaEditorOptions.mode = "code";
  }

  ngOnInit() {
  }

}

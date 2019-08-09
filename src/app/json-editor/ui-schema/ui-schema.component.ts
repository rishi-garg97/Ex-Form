import {Component, Input, OnInit, ViewChild} from "@angular/core";
import { JsonEditorComponent, JsonEditorOptions } from "ang-jsoneditor";

@Component({
  selector: "app-ui-schema",
  templateUrl: "./ui-schema.component.html",
  styleUrls: ["./ui-schema.component.css"]
})
export class UiSchemaComponent implements OnInit {
  @ViewChild(JsonEditorComponent, {static: false}) editor: JsonEditorComponent;

  @Input() uiSchemaData: any;

  public uiSchemaEditorOptions: JsonEditorOptions;

  constructor() {
    this.uiSchemaEditorOptions = new JsonEditorOptions();
    this.uiSchemaEditorOptions.mode = "code";
  }

  ngOnInit() {

  }

}

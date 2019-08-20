import {Component, DoCheck, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from "@angular/core";
import { JsonEditorComponent, JsonEditorOptions } from "ang-jsoneditor";

@Component({
  selector: "app-ui-schema",
  templateUrl: "./ui-schema.component.html",
  styleUrls: ["./ui-schema.component.css"]
})
export class UiSchemaComponent implements OnInit {
  @ViewChild(JsonEditorComponent, {static: false}) editor: JsonEditorComponent;

  @Input() uiSchemaData: any;
  @Output() public uiSchemaChange = new EventEmitter();

  public uiSchemaEditorOptions: JsonEditorOptions;

  constructor() {
    this.uiSchemaEditorOptions = new JsonEditorOptions();
    this.uiSchemaEditorOptions.mode = "code";
  }


  ngOnInit() {
    console.log("Old UI Schema", this.uiSchemaData);
  }

  getData(event) {
    if (this.editor.isValidJson()) {
      this.uiSchemaChange.emit(this.editor.get());
    } else {
      console.log("UI Schema is incorrect");
    }
  }
}

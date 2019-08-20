import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {JsonEditorComponent, JsonEditorOptions} from "ang-jsoneditor";

@Component({
  selector: "app-model-schema",
  templateUrl: "./model-schema.component.html",
  styleUrls: ["./model-schema.component.css"]
})
export class ModelSchemaComponent implements OnInit {
  @ViewChild(JsonEditorComponent, {static: false}) editor: JsonEditorComponent;

  @Input() modelSchemaData: any;
  @Output() public modelSchemaChange = new EventEmitter();

  public modelSchemaEditorOptions: JsonEditorOptions;

  constructor() {
    this.modelSchemaEditorOptions = new JsonEditorOptions();
    this.modelSchemaEditorOptions.mode = "code";
  }


  ngOnInit() {
    console.log("Old model Schema", this.modelSchemaData);
  }

  getData(event) {
    if (this.editor.isValidJson()) {
      this.modelSchemaChange.emit(this.editor.get());
      console.log("correct");
    } else {
      // console.log("UI Schema is incorrect");
    }
  }
}

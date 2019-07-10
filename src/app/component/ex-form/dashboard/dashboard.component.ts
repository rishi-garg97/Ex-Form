import { Component, OnInit } from "@angular/core";
import SchemaJson from "../../../../assets/schema.json";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  schema: any = SchemaJson;
  selected = "Protocol";
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from "@angular/core";
import {MatDialog} from "@angular/material";
import {LoginComponent} from "../../entryComponent/login/login.component";
import {SignupComponent} from "../../entryComponent/signup/signup.component";
import {AuthService} from "../../entryComponent/services/auth.service";


@Component({
  selector: "app-tool-bar",
  templateUrl: "./tool-bar.component.html",
  styleUrls: ["./tool-bar.component.css"]
})
export class ToolBarComponent implements OnInit {

  constructor(private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit() {
  }

  openLoginDialog = (): void  => {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
    });

  }

  openSignupDialog = (): void => {
    const dialogRef = this.dialog.open(SignupComponent);

    dialogRef.afterClosed().subscribe(result => {
    });

  }

}

import { Injectable } from "@angular/core";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";
@Injectable({
  providedIn: "root"
})
export class SnackBarMessageService {

  config: MatSnackBarConfig = { duration: 2000 };

  constructor(private snackBar: MatSnackBar) { }

  show = (message, action?) => {
    this.snackBar.open(message, action, this.config);
  }
}

import { OnInit } from "@angular/core";
import { CommonService } from "./service/common.service";
export declare class AppComponent implements OnInit {
    commonService: CommonService;
    constructor(commonService: CommonService);
    ngOnInit(): void;
}

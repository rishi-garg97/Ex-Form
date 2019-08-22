import { OnInit, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
export declare class MeasureComponent implements OnInit {
    private formBuilder;
    formGroup: FormGroup;
    property: any;
    addControl: EventEmitter<{}>;
    newProperty: any;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    onMeasureChange: (measureValue: any) => void;
    addMeasureControl: (data: any) => void;
}

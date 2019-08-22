import { HttpClient } from "@angular/common/http";
export declare class DashboardService {
    private http;
    UISchema: any;
    constructor(http: HttpClient);
    modelSchema: any;
    schemaUrl: string;
    schema: {
        model: {
            form: {};
            editor: {};
        };
        ui: {
            form: {};
            editor: {};
        };
    };
    enitityModelSchema: (name: any) => {};
    mapsUnitToValue: (refEntitySchema: any) => any;
    uiSchema: (type: any) => {};
    init: () => Promise<Object>;
    initUiSchema: () => Promise<Object>;
}

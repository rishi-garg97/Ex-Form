import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import _ from "lodash";
import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let DashboardService = class DashboardService {
    constructor(http) {
        this.http = http;
        // formSchema: any;
        this.schemaUrl = "assets/schema.json";
        this.schema = {
            model: {
                form: {},
                editor: {}
            },
            ui: {
                form: {},
                editor: {}
            }
        };
        this.enitityModelSchema = (name) => {
            const schema = Object.assign({}, this.modelSchema);
            const entitySchema = _.find(schema, (formSchema) => {
                if (formSchema.name === name) {
                    return formSchema;
                }
            });
            if (entitySchema.steps && entitySchema.steps !== null) {
                entitySchema.steps.forEach((step) => {
                    step.refs = [...entitySchema.refs];
                    step = this.mapsUnitToValue(step);
                });
            }
            else {
                entitySchema.properties = this.mapsUnitToValue(entitySchema);
            }
            const modelEditor = Object.assign({}, entitySchema);
            this.schema.model.form = modelEditor;
            this.schema.model.editor = _.clone(modelEditor);
            return this.schema.model.editor;
        };
        this.mapsUnitToValue = (refEntitySchema) => {
            refEntitySchema.properties = refEntitySchema.properties.map((property) => {
                if (property.dataType === "Ref") {
                    refEntitySchema.refs.forEach(ref => {
                        if (property.ref === ref.name) {
                            Object.keys(ref).forEach((key) => (ref[key] == null) && delete ref[key]);
                            delete ref.name;
                            Object.assign(property, ref);
                        }
                    });
                    //  property.values = [...property.units];
                }
                if (property.dataType === "Measure" && property.units) {
                    property.values = [...property.units];
                    delete property.units;
                }
                return property;
            });
            return refEntitySchema.properties;
        };
        this.uiSchema = (type) => {
            const uiEditor = _.find(this.UISchema, { type });
            this.schema.ui.form = _.cloneDeep(uiEditor);
            this.schema.ui.editor = _.cloneDeep(uiEditor);
            return this.schema.ui.editor;
        };
        this.init = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.http.get(this.schemaUrl).toPromise();
        });
        this.initUiSchema = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.http.get("./assets/ui-schema.json").toPromise();
        });
    }
};
DashboardService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DashboardService_Factory() { return new DashboardService(i0.ɵɵinject(i1.HttpClient)); }, token: DashboardService, providedIn: "root" });
DashboardService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], DashboardService);
export { DashboardService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFNbEQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFJM0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUVwQyxtQkFBbUI7UUFDbkIsY0FBUyxHQUFHLG9CQUFvQixDQUFDO1FBQ2pDLFdBQU0sR0FBRztZQUNQLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsRUFBRTtnQkFDUixNQUFNLEVBQUUsRUFBRTthQUNYO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLElBQUksRUFBRSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxFQUFFO2FBQ1g7U0FDRixDQUFBO1FBRUQsdUJBQWtCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM1QixNQUFNLE1BQU0scUJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLE1BQU8sWUFBWSxHQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUU7Z0JBQ25ELElBQUksVUFBVSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQzVCLE9BQU8sVUFBVSxDQUFDO2lCQUNuQjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSyxZQUFZLENBQUMsS0FBSyxJQUFJLFlBQVksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUN0RCxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxF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QkFBeUIsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlELENBQUMsQ0FBQSxDQUFBO0lBMUV1QyxDQUFDO0NBMkUxQyxDQUFBOztBQS9FWSxnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQzs2Q0FLMEIsVUFBVTtHQUp6QixnQkFBZ0IsQ0ErRTVCO1NBL0VZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkU2VydmljZSB7XG5cbiAgVUlTY2hlbWE6IGFueTsgLy8gaXQgaXMgaW5pdGlhbGl6ZWQgaW4gYXV0aCBzZXJ2aWNlLlxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG4gIG1vZGVsU2NoZW1hOiBhbnk7ICAvLyBpdCBpcyBpbml0aWFsaXplZCBpbiBhdXRoIHNlcnZpY2UuXG4gIC8vIGZvcm1TY2hlbWE6IGFueTtcbiAgc2NoZW1hVXJsID0gXCJhc3NldHMvc2NoZW1hLmpzb25cIjtcbiAgc2NoZW1hID0ge1xuICAgIG1vZGVsOiB7XG4gICAgICBmb3JtOiB7fSxcbiAgICAgIGVkaXRvcjoge31cbiAgICB9LFxuICAgIHVpOiB7XG4gICAgICBmb3JtOiB7fSxcbiAgICAgIGVkaXRvcjoge31cbiAgICB9XG4gIH1cblxuICBlbml0aXR5TW9kZWxTY2hlbWEgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHNjaGVtYSA9IHsuLi50aGlzLm1vZGVsU2NoZW1hfTtcbiAgICBjb25zdCAgZW50aXR5U2NoZW1hID0gIF8uZmluZChzY2hlbWEsIChmb3JtU2NoZW1hKSA9PiB7XG4gICAgICBpZiAoZm9ybVNjaGVtYS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiBmb3JtU2NoZW1hO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICggZW50aXR5U2NoZW1hLnN0ZXBzICYmIGVudGl0eVNjaGVtYS5zdGVwcyAhPT0gbnVsbCkge1xuICAgICAgZW50aXR5U2NoZW1hLnN0ZXBzLmZvckVhY2goKHN0ZXApID0+IHtcbiAgICAgICAgc3RlcC5yZWZzID0gWy4uLmVudGl0eVNjaGVtYS5yZWZzXTtcbiAgICAgICAgc3RlcCA9IHRoaXMubWFwc1VuaXRUb1ZhbHVlKHN0ZXApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGl0eVNjaGVtYS5wcm9wZXJ0aWVzID0gIHRoaXMubWFwc1VuaXRUb1ZhbHVlKGVudGl0eVNjaGVtYSk7XG4gICAgfVxuICAgIGNvbnN0IG1vZGVsRWRpdG9yID0gey4uLmVudGl0eVNjaGVtYX07XG4gICAgdGhpcy5zY2hlbWEubW9kZWwuZm9ybSA9IG1vZGVsRWRpdG9yO1xuICAgIHRoaXMuc2NoZW1hLm1vZGVsLmVkaXRvciA9IF8uY2xvbmUobW9kZWxFZGl0b3IpO1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5tb2RlbC5lZGl0b3I7XG4gIH1cblxuICBtYXBzVW5pdFRvVmFsdWUgPSAocmVmRW50aXR5U2NoZW1hKSA9PiB7XG5cbiAgICByZWZFbnRpdHlTY2hlbWEucHJvcGVydGllcyA9IHJlZkVudGl0eVNjaGVtYS5wcm9wZXJ0aWVzLm1hcCgocHJvcGVydHk6IGFueSkgPT4ge1xuICAgICAgaWYgKHByb3BlcnR5LmRhdGFUeXBlID09PSBcIlJlZlwiKSB7XG4gICAgICAgIHJlZkVudGl0eVNjaGVtYS5yZWZzLmZvckVhY2gocmVmID0+IHtcbiAgICAgICAgICBpZiAocHJvcGVydHkucmVmID09PSByZWYubmFtZSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocmVmKS5mb3JFYWNoKChrZXkpID0+IChyZWZba2V5XSA9PSBudWxsKSAmJiBkZWxldGUgcmVmW2tleV0pO1xuICAgICAgICAgICAgZGVsZXRlIHJlZi5uYW1lO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0eSwgcmVmKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyAgcHJvcGVydHkudmFsdWVzID0gWy4uLnByb3BlcnR5LnVuaXRzXTtcblxuICAgICAgfVxuICAgICAgaWYgKHByb3BlcnR5LmRhdGFUeXBlID09PSBcIk1lYXN1cmVcIiAmJiBwcm9wZXJ0eS51bml0cykge1xuICAgICAgICBwcm9wZXJ0eS52YWx1ZXMgPSBbLi4ucHJvcGVydHkudW5pdHNdO1xuICAgICAgICBkZWxldGUgcHJvcGVydHkudW5pdHM7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlZkVudGl0eVNjaGVtYS5wcm9wZXJ0aWVzO1xuICB9XG5cblxuICB1aVNjaGVtYSA9ICh0eXBlKSA9PiB7XG4gICAgY29uc3QgdWlFZGl0b3IgPSBfLmZpbmQodGhpcy5VSVNjaGVtYSwge3R5cGV9KTtcbiAgICB0aGlzLnNjaGVtYS51aS5mb3JtID0gXy5jbG9uZURlZXAodWlFZGl0b3IpO1xuICAgIHRoaXMuc2NoZW1hLnVpLmVkaXRvciA9IF8uY2xvbmVEZWVwKHVpRWRpdG9yKTtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEudWkuZWRpdG9yO1xuICB9XG5cblxuICBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2NoZW1hVXJsKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGluaXRVaVNjaGVtYSA9IGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcIi4vYXNzZXRzL3VpLXNjaGVtYS5qc29uXCIpLnRvUHJvbWlzZSgpO1xuICB9XG59XG4iXX0=
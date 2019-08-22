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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBTWxELElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBSTNCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFFcEMsbUJBQW1CO1FBQ25CLGNBQVMsR0FBRyxvQkFBb0IsQ0FBQztRQUNqQyxXQUFNLEdBQUc7WUFDUCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLEVBQUU7YUFDWDtZQUNELEVBQUUsRUFBRTtnQkFDRixJQUFJLEVBQUUsRUFBRTtnQkFDUixNQUFNLEVBQUUsRUFBRTthQUNYO1NBQ0YsQ0FBQTtRQUVELHVCQUFrQixHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDNUIsTUFBTSxNQUFNLHFCQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyQyxNQUFPLFlBQVksR0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUNuRCxJQUFJLFVBQVUsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUM1QixPQUFPLFVBQVUsQ0FBQztpQkFDbkI7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUssWUFBWSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtnQkFDdEQsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUs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eUJBQXlCLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5RCxDQUFDLENBQUEsQ0FBQTtJQTFFdUMsQ0FBQztDQTJFMUMsQ0FBQTs7QUEvRVksZ0JBQWdCO0lBSDVCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7NkNBSzBCLFVBQVU7R0FKekIsZ0JBQWdCLENBK0U1QjtTQS9FWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFNlcnZpY2Uge1xuXG4gIFVJU2NoZW1hOiBhbnk7IC8vIGl0IGlzIGluaXRpYWxpemVkIGluIGF1dGggc2VydmljZS5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICBtb2RlbFNjaGVtYTogYW55OyAgLy8gaXQgaXMgaW5pdGlhbGl6ZWQgaW4gYXV0aCBzZXJ2aWNlLlxuICAvLyBmb3JtU2NoZW1hOiBhbnk7XG4gIHNjaGVtYVVybCA9IFwiYXNzZXRzL3NjaGVtYS5qc29uXCI7XG4gIHNjaGVtYSA9IHtcbiAgICBtb2RlbDoge1xuICAgICAgZm9ybToge30sXG4gICAgICBlZGl0b3I6IHt9XG4gICAgfSxcbiAgICB1aToge1xuICAgICAgZm9ybToge30sXG4gICAgICBlZGl0b3I6IHt9XG4gICAgfVxuICB9XG5cbiAgZW5pdGl0eU1vZGVsU2NoZW1hID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBzY2hlbWEgPSB7Li4udGhpcy5tb2RlbFNjaGVtYX07XG4gICAgY29uc3QgIGVudGl0eVNjaGVtYSA9ICBfLmZpbmQoc2NoZW1hLCAoZm9ybVNjaGVtYSkgPT4ge1xuICAgICAgaWYgKGZvcm1TY2hlbWEubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gZm9ybVNjaGVtYTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIGVudGl0eVNjaGVtYS5zdGVwcyAmJiBlbnRpdHlTY2hlbWEuc3RlcHMgIT09IG51bGwpIHtcbiAgICAgIGVudGl0eVNjaGVtYS5zdGVwcy5mb3JFYWNoKChzdGVwKSA9PiB7XG4gICAgICAgIHN0ZXAucmVmcyA9IFsuLi5lbnRpdHlTY2hlbWEucmVmc107XG4gICAgICAgIHN0ZXAgPSB0aGlzLm1hcHNVbml0VG9WYWx1ZShzdGVwKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRpdHlTY2hlbWEucHJvcGVydGllcyA9ICB0aGlzLm1hcHNVbml0VG9WYWx1ZShlbnRpdHlTY2hlbWEpO1xuICAgIH1cbiAgICBjb25zdCBtb2RlbEVkaXRvciA9IHsuLi5lbnRpdHlTY2hlbWF9O1xuICAgIHRoaXMuc2NoZW1hLm1vZGVsLmZvcm0gPSBtb2RlbEVkaXRvcjtcbiAgICB0aGlzLnNjaGVtYS5tb2RlbC5lZGl0b3IgPSBfLmNsb25lKG1vZGVsRWRpdG9yKTtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEubW9kZWwuZWRpdG9yO1xuICB9XG5cbiAgbWFwc1VuaXRUb1ZhbHVlID0gKHJlZkVudGl0eVNjaGVtYSkgPT4ge1xuXG4gICAgcmVmRW50aXR5U2NoZW1hLnByb3BlcnRpZXMgPSByZWZFbnRpdHlTY2hlbWEucHJvcGVydGllcy5tYXAoKHByb3BlcnR5OiBhbnkpID0+IHtcbiAgICAgIGlmIChwcm9wZXJ0eS5kYXRhVHlwZSA9PT0gXCJSZWZcIikge1xuICAgICAgICByZWZFbnRpdHlTY2hlbWEucmVmcy5mb3JFYWNoKHJlZiA9PiB7XG4gICAgICAgICAgaWYgKHByb3BlcnR5LnJlZiA9PT0gcmVmLm5hbWUpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlZikuZm9yRWFjaCgoa2V5KSA9PiAocmVmW2tleV0gPT0gbnVsbCkgJiYgZGVsZXRlIHJlZltrZXldKTtcbiAgICAgICAgICAgIGRlbGV0ZSByZWYubmFtZTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydHksIHJlZik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gIHByb3BlcnR5LnZhbHVlcyA9IFsuLi5wcm9wZXJ0eS51bml0c107XG5cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wZXJ0eS5kYXRhVHlwZSA9PT0gXCJNZWFzdXJlXCIgJiYgcHJvcGVydHkudW5pdHMpIHtcbiAgICAgICAgcHJvcGVydHkudmFsdWVzID0gWy4uLnByb3BlcnR5LnVuaXRzXTtcbiAgICAgICAgZGVsZXRlIHByb3BlcnR5LnVuaXRzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH0pO1xuICAgIHJldHVybiByZWZFbnRpdHlTY2hlbWEucHJvcGVydGllcztcbiAgfVxuXG5cbiAgdWlTY2hlbWEgPSAodHlwZSkgPT4ge1xuICAgIGNvbnN0IHVpRWRpdG9yID0gXy5maW5kKHRoaXMuVUlTY2hlbWEsIHt0eXBlfSk7XG4gICAgdGhpcy5zY2hlbWEudWkuZm9ybSA9IF8uY2xvbmVEZWVwKHVpRWRpdG9yKTtcbiAgICB0aGlzLnNjaGVtYS51aS5lZGl0b3IgPSBfLmNsb25lRGVlcCh1aUVkaXRvcik7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnVpLmVkaXRvcjtcbiAgfVxuXG5cbiAgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNjaGVtYVVybCkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBpbml0VWlTY2hlbWEgPSBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCIuL2Fzc2V0cy91aS1zY2hlbWEuanNvblwiKS50b1Byb21pc2UoKTtcbiAgfVxufVxuIl19
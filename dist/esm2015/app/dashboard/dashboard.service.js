import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import _ from "lodash";
import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let DashboardService = class DashboardService {
    constructor(http) {
        this.http = http;
        this.UISchema = this.http.get(`url: "../../assets/ui-schema.json"`);
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
        // getSchemaByHttp() {
        //   return this.http.get(this.configUrl);
        // }
        //   formModelSchema = (name) => {
        //
        //   const schema = {...this.modelSchema};
        //   const  entitySchema =  _.find(schema, (formSchema) => {
        //     if (formSchema.name === name) {
        //       return formSchema;
        //     }
        //   });
        //   if ( entitySchema.steps && entitySchema.steps !== null) {
        //     entitySchema.steps.forEach((step) => {
        //       step.refs = [...entitySchema.refs];
        //       step = this.mapsUnitToValue(step);
        //     });
        //   } else {
        //     entitySchema.properties =  this.mapsUnitToValue(entitySchema);
        //   }
        //   this.schema.model.form = {...entitySchema};
        //   return this.schema.model.form;
        // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFNbEQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFJM0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxhQUFRLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUlwRSxtQkFBbUI7UUFDbkIsY0FBUyxHQUFHLG9CQUFvQixDQUFDO1FBQ2pDLFdBQU0sR0FBRztZQUNQLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsRUFBRTtnQkFDUixNQUFNLEVBQUUsRUFBRTthQUNYO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLElBQUksRUFBRSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxFQUFFO2FBQ1g7U0FDRixDQUFBO1FBQ0Qsc0JBQXNCO1FBQ3RCLDBDQUEwQztRQUMxQyxJQUFJO1FBRU4sa0NBQWtDO1FBQ2xDLEVBQUU7UUFDRiwwQ0FBMEM7UUFDMUMsNERBQTREO1FBQzVELHNDQUFzQztRQUN0QywyQkFBMkI7UUFDM0IsUUFBUTtRQUNSLFFBQVE7UUFDUiw4REFBOEQ7UUFDOUQsNkNBQTZDO1FBQzdDLDRDQUE0QztRQUM1QywyQ0FBMkM7UUFDM0MsVUFBVTtRQUNWLGFBQWE7UUFDYixxRUFBcUU7UUFDckUsTUFBTTtRQUNOLGdEQUFnRDtRQUNoRCxtQ0FBbUM7UUFDbkMsSUFBSTtRQUVGLHVCQUFrQixHQUFHLENBQUMsSUFBSSxFQUFFLEVB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QU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDL0IsQ0FBQyxDQUFBO1FBR0QsU0FBSSxHQUFHLEdBQVMsRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuRCxDQUFDLENBQUEsQ0FBQTtJQTdGdUMsQ0FBQztDQThGMUMsQ0FBQTs7QUFsR1ksZ0JBQWdCO0lBSDVCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7NkNBSzBCLFVBQVU7R0FKekIsZ0JBQWdCLENBa0c1QjtTQWxHWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFNlcnZpY2Uge1xuXG4gIFVJU2NoZW1hOiBhbnkgPSB0aGlzLmh0dHAuZ2V0KGB1cmw6IFwiLi4vLi4vYXNzZXRzL3VpLXNjaGVtYS5qc29uXCJgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICBtb2RlbFNjaGVtYTogYW55OyAgLy8gaXQgaXMgaW5pdGlhbGl6ZWQgaW4gYXV0aCBzZXJ2aWNlLlxuICAvLyBmb3JtU2NoZW1hOiBhbnk7XG4gIHNjaGVtYVVybCA9IFwiYXNzZXRzL3NjaGVtYS5qc29uXCI7XG4gIHNjaGVtYSA9IHtcbiAgICBtb2RlbDoge1xuICAgICAgZm9ybToge30sXG4gICAgICBlZGl0b3I6IHt9XG4gICAgfSxcbiAgICB1aToge1xuICAgICAgZm9ybToge30sXG4gICAgICBlZGl0b3I6IHt9XG4gICAgfVxuICB9XG4gIC8vIGdldFNjaGVtYUJ5SHR0cCgpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbmZpZ1VybCk7XG4gIC8vIH1cblxuLy8gICBmb3JtTW9kZWxTY2hlbWEgPSAobmFtZSkgPT4ge1xuLy9cbi8vICAgY29uc3Qgc2NoZW1hID0gey4uLnRoaXMubW9kZWxTY2hlbWF9O1xuLy8gICBjb25zdCAgZW50aXR5U2NoZW1hID0gIF8uZmluZChzY2hlbWEsIChmb3JtU2NoZW1hKSA9PiB7XG4vLyAgICAgaWYgKGZvcm1TY2hlbWEubmFtZSA9PT0gbmFtZSkge1xuLy8gICAgICAgcmV0dXJuIGZvcm1TY2hlbWE7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vICAgaWYgKCBlbnRpdHlTY2hlbWEuc3RlcHMgJiYgZW50aXR5U2NoZW1hLnN0ZXBzICE9PSBudWxsKSB7XG4vLyAgICAgZW50aXR5U2NoZW1hLnN0ZXBzLmZvckVhY2goKHN0ZXApID0+IHtcbi8vICAgICAgIHN0ZXAucmVmcyA9IFsuLi5lbnRpdHlTY2hlbWEucmVmc107XG4vLyAgICAgICBzdGVwID0gdGhpcy5tYXBzVW5pdFRvVmFsdWUoc3RlcCk7XG4vLyAgICAgfSk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgZW50aXR5U2NoZW1hLnByb3BlcnRpZXMgPSAgdGhpcy5tYXBzVW5pdFRvVmFsdWUoZW50aXR5U2NoZW1hKTtcbi8vICAgfVxuLy8gICB0aGlzLnNjaGVtYS5tb2RlbC5mb3JtID0gey4uLmVudGl0eVNjaGVtYX07XG4vLyAgIHJldHVybiB0aGlzLnNjaGVtYS5tb2RlbC5mb3JtO1xuLy8gfVxuXG4gIGVuaXRpdHlNb2RlbFNjaGVtYSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3Qgc2NoZW1hID0gey4uLnRoaXMubW9kZWxTY2hlbWF9O1xuICAgIGNvbnN0ICBlbnRpdHlTY2hlbWEgPSAgXy5maW5kKHNjaGVtYSwgKGZvcm1TY2hlbWEpID0+IHtcbiAgICAgIGlmIChmb3JtU2NoZW1hLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1TY2hlbWE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCBlbnRpdHlTY2hlbWEuc3RlcHMgJiYgZW50aXR5U2NoZW1hLnN0ZXBzICE9PSBudWxsKSB7XG4gICAgICBlbnRpdHlTY2hlbWEuc3RlcHMuZm9yRWFjaCgoc3RlcCkgPT4ge1xuICAgICAgICBzdGVwLnJlZnMgPSBbLi4uZW50aXR5U2NoZW1hLnJlZnNdO1xuICAgICAgICBzdGVwID0gdGhpcy5tYXBzVW5pdFRvVmFsdWUoc3RlcCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50aXR5U2NoZW1hLnByb3BlcnRpZXMgPSAgdGhpcy5tYXBzVW5pdFRvVmFsdWUoZW50aXR5U2NoZW1hKTtcbiAgICB9XG4gICAgY29uc3QgbW9kZWxFZGl0b3IgPSB7Li4uZW50aXR5U2NoZW1hfTtcbiAgICB0aGlzLnNjaGVtYS5tb2RlbC5mb3JtID0gbW9kZWxFZGl0b3I7XG4gICAgdGhpcy5zY2hlbWEubW9kZWwuZWRpdG9yID0gXy5jbG9uZShtb2RlbEVkaXRvcik7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1vZGVsLmVkaXRvcjtcbiAgfVxuXG4gIG1hcHNVbml0VG9WYWx1ZSA9IChyZWZFbnRpdHlTY2hlbWEpID0+IHtcblxuICAgIHJlZkVudGl0eVNjaGVtYS5wcm9wZXJ0aWVzID0gcmVmRW50aXR5U2NoZW1hLnByb3BlcnRpZXMubWFwKChwcm9wZXJ0eTogYW55KSA9PiB7XG4gICAgICBpZiAocHJvcGVydHkuZGF0YVR5cGUgPT09IFwiUmVmXCIpIHtcbiAgICAgICAgcmVmRW50aXR5U2NoZW1hLnJlZnMuZm9yRWFjaChyZWYgPT4ge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eS5yZWYgPT09IHJlZi5uYW1lKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyZWYpLmZvckVhY2goKGtleSkgPT4gKHJlZltrZXldID09IG51bGwpICYmIGRlbGV0ZSByZWZba2V5XSk7XG4gICAgICAgICAgICBkZWxldGUgcmVmLm5hbWU7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHByb3BlcnR5LCByZWYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vICBwcm9wZXJ0eS52YWx1ZXMgPSBbLi4ucHJvcGVydHkudW5pdHNdO1xuXG4gICAgICB9XG4gICAgICBpZiAocHJvcGVydHkuZGF0YVR5cGUgPT09IFwiTWVhc3VyZVwiICYmIHByb3BlcnR5LnVuaXRzKSB7XG4gICAgICAgIHByb3BlcnR5LnZhbHVlcyA9IFsuLi5wcm9wZXJ0eS51bml0c107XG4gICAgICAgIGRlbGV0ZSBwcm9wZXJ0eS51bml0cztcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVmRW50aXR5U2NoZW1hLnByb3BlcnRpZXM7XG4gIH1cblxuXG4gIHVpU2NoZW1hID0gKHR5cGUpID0+IHtcbiAgICBjb25zdCB1aUVkaXRvciA9IF8uZmluZCh0aGlzLlVJU2NoZW1hLCB7dHlwZX0pO1xuICAgIHRoaXMuc2NoZW1hLnVpLmZvcm0gPSBfLmNsb25lRGVlcCh1aUVkaXRvcik7XG4gICAgdGhpcy5zY2hlbWEudWkuZWRpdG9yID0gXy5jbG9uZURlZXAodWlFZGl0b3IpO1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS51aS5lZGl0b3I7XG4gIH1cblxuXG4gIGluaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zY2hlbWFVcmwpLnRvUHJvbWlzZSgpO1xuICB9XG59XG4iXX0=
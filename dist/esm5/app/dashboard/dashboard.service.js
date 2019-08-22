import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import _ from "lodash";
import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        var _this = this;
        this.http = http;
        this.UISchema = this.http.get("url: \"../../assets/ui-schema.json\"");
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
        this.enitityModelSchema = function (name) {
            var schema = tslib_1.__assign({}, _this.modelSchema);
            var entitySchema = _.find(schema, function (formSchema) {
                if (formSchema.name === name) {
                    return formSchema;
                }
            });
            if (entitySchema.steps && entitySchema.steps !== null) {
                entitySchema.steps.forEach(function (step) {
                    step.refs = tslib_1.__spread(entitySchema.refs);
                    step = _this.mapsUnitToValue(step);
                });
            }
            else {
                entitySchema.properties = _this.mapsUnitToValue(entitySchema);
            }
            var modelEditor = tslib_1.__assign({}, entitySchema);
            _this.schema.model.form = modelEditor;
            _this.schema.model.editor = _.clone(modelEditor);
            return _this.schema.model.editor;
        };
        this.mapsUnitToValue = function (refEntitySchema) {
            refEntitySchema.properties = refEntitySchema.properties.map(function (property) {
                if (property.dataType === "Ref") {
                    refEntitySchema.refs.forEach(function (ref) {
                        if (property.ref === ref.name) {
                            Object.keys(ref).forEach(function (key) { return (ref[key] == null) && delete ref[key]; });
                            delete ref.name;
                            Object.assign(property, ref);
                        }
                    });
                    //  property.values = [...property.units];
                }
                if (property.dataType === "Measure" && property.units) {
                    property.values = tslib_1.__spread(property.units);
                    delete property.units;
                }
                return property;
            });
            return refEntitySchema.properties;
        };
        this.uiSchema = function (type) {
            var uiEditor = _.find(_this.UISchema, { type: type });
            _this.schema.ui.form = _.cloneDeep(uiEditor);
            _this.schema.ui.editor = _.cloneDeep(uiEditor);
            return _this.schema.ui.editor;
        };
        this.init = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.http.get(this.schemaUrl).toPromise()];
            });
        }); };
    }
    DashboardService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DashboardService_Factory() { return new DashboardService(i0.ɵɵinject(i1.HttpClient)); }, token: DashboardService, providedIn: "root" });
    DashboardService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DashboardService);
    return DashboardService;
}());
export { DashboardService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFNbEQ7SUFJRSwwQkFBb0IsSUFBZ0I7UUFBcEMsaUJBQXlDO1FBQXJCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsYUFBUSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHNDQUFvQyxDQUFDLENBQUM7UUFJcEUsbUJBQW1CO1FBQ25CLGNBQVMsR0FBRyxvQkFBb0IsQ0FBQztRQUNqQyxXQUFNLEdBQUc7WUFDUCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLEVBQUU7YUFDWDtZQUNELEVBQUUsRUFBRTtnQkFDRixJQUFJLEVBQUUsRUFBRTtnQkFDUixNQUFNLEVBQUUsRUFBRTthQUNYO1NBQ0YsQ0FBQTtRQUNELHNCQUFzQjtRQUN0QiwwQ0FBMEM7UUFDMUMsSUFBSTtRQUVOLGtDQUFrQztRQUNsQyxFQUFFO1FBQ0YsMENBQTBDO1FBQzFDLDREQUE0RDtRQUM1RCxzQ0FBc0M7UUFDdEMsMkJBQTJCO1FBQzNCLFFBQVE7UUFDUixRQUFRO1FBQ1IsOERBQThEO1FBQzlELDZDQUE2QztRQUM3Qyw0Q0FBNEM7UUFDNUMsMkNBQTJDO1FBQzNDLFVBQVU7UUFDVixhQUFhO1FBQ2IscUVBQXFFO1FBQ3JFLE1BQU07UUFDTixnREFBZ0Q7UUFDaEQsbUNBQW1DO1FBQ25DLElBQUk7UUFFRix1QkFBa0IsR0FBRyxVQUFDLElBQUk7WUFDeEIsSUFBTSxNQUFNLHdCQUFPLEtB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Q0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQy9CLENBQUMsQ0FBQTtRQUdELFNBQUksR0FBRzs7Z0JBQ0wsc0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFDOzthQUNsRCxDQUFBO0lBN0Z1QyxDQUFDOztJQUo5QixnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztpREFLMEIsVUFBVTtPQUp6QixnQkFBZ0IsQ0FrRzVCOzJCQTFHRDtDQTBHQyxBQWxHRCxJQWtHQztTQWxHWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFNlcnZpY2Uge1xuXG4gIFVJU2NoZW1hOiBhbnkgPSB0aGlzLmh0dHAuZ2V0KGB1cmw6IFwiLi4vLi4vYXNzZXRzL3VpLXNjaGVtYS5qc29uXCJgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICBtb2RlbFNjaGVtYTogYW55OyAgLy8gaXQgaXMgaW5pdGlhbGl6ZWQgaW4gYXV0aCBzZXJ2aWNlLlxuICAvLyBmb3JtU2NoZW1hOiBhbnk7XG4gIHNjaGVtYVVybCA9IFwiYXNzZXRzL3NjaGVtYS5qc29uXCI7XG4gIHNjaGVtYSA9IHtcbiAgICBtb2RlbDoge1xuICAgICAgZm9ybToge30sXG4gICAgICBlZGl0b3I6IHt9XG4gICAgfSxcbiAgICB1aToge1xuICAgICAgZm9ybToge30sXG4gICAgICBlZGl0b3I6IHt9XG4gICAgfVxuICB9XG4gIC8vIGdldFNjaGVtYUJ5SHR0cCgpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbmZpZ1VybCk7XG4gIC8vIH1cblxuLy8gICBmb3JtTW9kZWxTY2hlbWEgPSAobmFtZSkgPT4ge1xuLy9cbi8vICAgY29uc3Qgc2NoZW1hID0gey4uLnRoaXMubW9kZWxTY2hlbWF9O1xuLy8gICBjb25zdCAgZW50aXR5U2NoZW1hID0gIF8uZmluZChzY2hlbWEsIChmb3JtU2NoZW1hKSA9PiB7XG4vLyAgICAgaWYgKGZvcm1TY2hlbWEubmFtZSA9PT0gbmFtZSkge1xuLy8gICAgICAgcmV0dXJuIGZvcm1TY2hlbWE7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vICAgaWYgKCBlbnRpdHlTY2hlbWEuc3RlcHMgJiYgZW50aXR5U2NoZW1hLnN0ZXBzICE9PSBudWxsKSB7XG4vLyAgICAgZW50aXR5U2NoZW1hLnN0ZXBzLmZvckVhY2goKHN0ZXApID0+IHtcbi8vICAgICAgIHN0ZXAucmVmcyA9IFsuLi5lbnRpdHlTY2hlbWEucmVmc107XG4vLyAgICAgICBzdGVwID0gdGhpcy5tYXBzVW5pdFRvVmFsdWUoc3RlcCk7XG4vLyAgICAgfSk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgZW50aXR5U2NoZW1hLnByb3BlcnRpZXMgPSAgdGhpcy5tYXBzVW5pdFRvVmFsdWUoZW50aXR5U2NoZW1hKTtcbi8vICAgfVxuLy8gICB0aGlzLnNjaGVtYS5tb2RlbC5mb3JtID0gey4uLmVudGl0eVNjaGVtYX07XG4vLyAgIHJldHVybiB0aGlzLnNjaGVtYS5tb2RlbC5mb3JtO1xuLy8gfVxuXG4gIGVuaXRpdHlNb2RlbFNjaGVtYSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3Qgc2NoZW1hID0gey4uLnRoaXMubW9kZWxTY2hlbWF9O1xuICAgIGNvbnN0ICBlbnRpdHlTY2hlbWEgPSAgXy5maW5kKHNjaGVtYSwgKGZvcm1TY2hlbWEpID0+IHtcbiAgICAgIGlmIChmb3JtU2NoZW1hLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1TY2hlbWE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCBlbnRpdHlTY2hlbWEuc3RlcHMgJiYgZW50aXR5U2NoZW1hLnN0ZXBzICE9PSBudWxsKSB7XG4gICAgICBlbnRpdHlTY2hlbWEuc3RlcHMuZm9yRWFjaCgoc3RlcCkgPT4ge1xuICAgICAgICBzdGVwLnJlZnMgPSBbLi4uZW50aXR5U2NoZW1hLnJlZnNdO1xuICAgICAgICBzdGVwID0gdGhpcy5tYXBzVW5pdFRvVmFsdWUoc3RlcCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50aXR5U2NoZW1hLnByb3BlcnRpZXMgPSAgdGhpcy5tYXBzVW5pdFRvVmFsdWUoZW50aXR5U2NoZW1hKTtcbiAgICB9XG4gICAgY29uc3QgbW9kZWxFZGl0b3IgPSB7Li4uZW50aXR5U2NoZW1hfTtcbiAgICB0aGlzLnNjaGVtYS5tb2RlbC5mb3JtID0gbW9kZWxFZGl0b3I7XG4gICAgdGhpcy5zY2hlbWEubW9kZWwuZWRpdG9yID0gXy5jbG9uZShtb2RlbEVkaXRvcik7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1vZGVsLmVkaXRvcjtcbiAgfVxuXG4gIG1hcHNVbml0VG9WYWx1ZSA9IChyZWZFbnRpdHlTY2hlbWEpID0+IHtcblxuICAgIHJlZkVudGl0eVNjaGVtYS5wcm9wZXJ0aWVzID0gcmVmRW50aXR5U2NoZW1hLnByb3BlcnRpZXMubWFwKChwcm9wZXJ0eTogYW55KSA9PiB7XG4gICAgICBpZiAocHJvcGVydHkuZGF0YVR5cGUgPT09IFwiUmVmXCIpIHtcbiAgICAgICAgcmVmRW50aXR5U2NoZW1hLnJlZnMuZm9yRWFjaChyZWYgPT4ge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eS5yZWYgPT09IHJlZi5uYW1lKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyZWYpLmZvckVhY2goKGtleSkgPT4gKHJlZltrZXldID09IG51bGwpICYmIGRlbGV0ZSByZWZba2V5XSk7XG4gICAgICAgICAgICBkZWxldGUgcmVmLm5hbWU7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHByb3BlcnR5LCByZWYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vICBwcm9wZXJ0eS52YWx1ZXMgPSBbLi4ucHJvcGVydHkudW5pdHNdO1xuXG4gICAgICB9XG4gICAgICBpZiAocHJvcGVydHkuZGF0YVR5cGUgPT09IFwiTWVhc3VyZVwiICYmIHByb3BlcnR5LnVuaXRzKSB7XG4gICAgICAgIHByb3BlcnR5LnZhbHVlcyA9IFsuLi5wcm9wZXJ0eS51bml0c107XG4gICAgICAgIGRlbGV0ZSBwcm9wZXJ0eS51bml0cztcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVmRW50aXR5U2NoZW1hLnByb3BlcnRpZXM7XG4gIH1cblxuXG4gIHVpU2NoZW1hID0gKHR5cGUpID0+IHtcbiAgICBjb25zdCB1aUVkaXRvciA9IF8uZmluZCh0aGlzLlVJU2NoZW1hLCB7dHlwZX0pO1xuICAgIHRoaXMuc2NoZW1hLnVpLmZvcm0gPSBfLmNsb25lRGVlcCh1aUVkaXRvcik7XG4gICAgdGhpcy5zY2hlbWEudWkuZWRpdG9yID0gXy5jbG9uZURlZXAodWlFZGl0b3IpO1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS51aS5lZGl0b3I7XG4gIH1cblxuXG4gIGluaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zY2hlbWFVcmwpLnRvUHJvbWlzZSgpO1xuICB9XG59XG4iXX0=
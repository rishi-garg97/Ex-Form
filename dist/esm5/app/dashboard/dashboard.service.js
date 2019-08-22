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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBTWxEO0lBSUUsMEJBQW9CLElBQWdCO1FBQXBDLGlCQUF5QztRQUFyQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLGFBQVEsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQ0FBb0MsQ0FBQyxDQUFDO1FBSXBFLG1CQUFtQjtRQUNuQixjQUFTLEdBQUcsb0JBQW9CLENBQUM7UUFDakMsV0FBTSxHQUFHO1lBQ1AsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxFQUFFO2FBQ1g7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLEVBQUU7YUFDWDtTQUNGLENBQUE7UUFDRCxzQkFBc0I7UUFDdEIsMENBQTBDO1FBQzFDLElBQUk7UUFFTixrQ0FBa0M7UUFDbEMsRUFBRTtRQUNGLDBDQUEwQztRQUMxQyw0REFBNEQ7UUFDNUQsc0NBQXNDO1FBQ3RDLDJCQUEyQjtRQUMzQixRQUFRO1FBQ1IsUUFBUTtRQUNSLDhEQUE4RDtRQUM5RCw2Q0FBNkM7UUFDN0MsNENBQTRDO1FBQzVDLDJDQUEyQztRQUMzQyxVQUFVO1FBQ1YsYUFBYTtRQUNiLHFFQUFxRTtRQUNyRSxNQUFNO1FBQ04sZ0RBQWdEO1FBQ2hELG1DQUFtQztRQUNuQyxJQUFJO1FBRUYsdUJBQWtCLEdBQUcsVUFBQyxJQUFJO1lBQ3hCLElBQU0sTUFBTSx3QkFBTyxL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LENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUMvQixDQUFDLENBQUE7UUFHRCxTQUFJLEdBQUc7O2dCQUNMLHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQzs7YUFDbEQsQ0FBQTtJQTdGdUMsQ0FBQzs7SUFKOUIsZ0JBQWdCO1FBSDVCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7aURBSzBCLFVBQVU7T0FKekIsZ0JBQWdCLENBa0c1QjsyQkExR0Q7Q0EwR0MsQUFsR0QsSUFrR0M7U0FsR1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRTZXJ2aWNlIHtcblxuICBVSVNjaGVtYTogYW55ID0gdGhpcy5odHRwLmdldChgdXJsOiBcIi4uLy4uL2Fzc2V0cy91aS1zY2hlbWEuanNvblwiYCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cbiAgbW9kZWxTY2hlbWE6IGFueTsgIC8vIGl0IGlzIGluaXRpYWxpemVkIGluIGF1dGggc2VydmljZS5cbiAgLy8gZm9ybVNjaGVtYTogYW55O1xuICBzY2hlbWFVcmwgPSBcImFzc2V0cy9zY2hlbWEuanNvblwiO1xuICBzY2hlbWEgPSB7XG4gICAgbW9kZWw6IHtcbiAgICAgIGZvcm06IHt9LFxuICAgICAgZWRpdG9yOiB7fVxuICAgIH0sXG4gICAgdWk6IHtcbiAgICAgIGZvcm06IHt9LFxuICAgICAgZWRpdG9yOiB7fVxuICAgIH1cbiAgfVxuICAvLyBnZXRTY2hlbWFCeUh0dHAoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWdVcmwpO1xuICAvLyB9XG5cbi8vICAgZm9ybU1vZGVsU2NoZW1hID0gKG5hbWUpID0+IHtcbi8vXG4vLyAgIGNvbnN0IHNjaGVtYSA9IHsuLi50aGlzLm1vZGVsU2NoZW1hfTtcbi8vICAgY29uc3QgIGVudGl0eVNjaGVtYSA9ICBfLmZpbmQoc2NoZW1hLCAoZm9ybVNjaGVtYSkgPT4ge1xuLy8gICAgIGlmIChmb3JtU2NoZW1hLm5hbWUgPT09IG5hbWUpIHtcbi8vICAgICAgIHJldHVybiBmb3JtU2NoZW1hO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyAgIGlmICggZW50aXR5U2NoZW1hLnN0ZXBzICYmIGVudGl0eVNjaGVtYS5zdGVwcyAhPT0gbnVsbCkge1xuLy8gICAgIGVudGl0eVNjaGVtYS5zdGVwcy5mb3JFYWNoKChzdGVwKSA9PiB7XG4vLyAgICAgICBzdGVwLnJlZnMgPSBbLi4uZW50aXR5U2NoZW1hLnJlZnNdO1xuLy8gICAgICAgc3RlcCA9IHRoaXMubWFwc1VuaXRUb1ZhbHVlKHN0ZXApO1xuLy8gICAgIH0pO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIGVudGl0eVNjaGVtYS5wcm9wZXJ0aWVzID0gIHRoaXMubWFwc1VuaXRUb1ZhbHVlKGVudGl0eVNjaGVtYSk7XG4vLyAgIH1cbi8vICAgdGhpcy5zY2hlbWEubW9kZWwuZm9ybSA9IHsuLi5lbnRpdHlTY2hlbWF9O1xuLy8gICByZXR1cm4gdGhpcy5zY2hlbWEubW9kZWwuZm9ybTtcbi8vIH1cblxuICBlbml0aXR5TW9kZWxTY2hlbWEgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHNjaGVtYSA9IHsuLi50aGlzLm1vZGVsU2NoZW1hfTtcbiAgICBjb25zdCAgZW50aXR5U2NoZW1hID0gIF8uZmluZChzY2hlbWEsIChmb3JtU2NoZW1hKSA9PiB7XG4gICAgICBpZiAoZm9ybVNjaGVtYS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiBmb3JtU2NoZW1hO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICggZW50aXR5U2NoZW1hLnN0ZXBzICYmIGVudGl0eVNjaGVtYS5zdGVwcyAhPT0gbnVsbCkge1xuICAgICAgZW50aXR5U2NoZW1hLnN0ZXBzLmZvckVhY2goKHN0ZXApID0+IHtcbiAgICAgICAgc3RlcC5yZWZzID0gWy4uLmVudGl0eVNjaGVtYS5yZWZzXTtcbiAgICAgICAgc3RlcCA9IHRoaXMubWFwc1VuaXRUb1ZhbHVlKHN0ZXApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGl0eVNjaGVtYS5wcm9wZXJ0aWVzID0gIHRoaXMubWFwc1VuaXRUb1ZhbHVlKGVudGl0eVNjaGVtYSk7XG4gICAgfVxuICAgIGNvbnN0IG1vZGVsRWRpdG9yID0gey4uLmVudGl0eVNjaGVtYX07XG4gICAgdGhpcy5zY2hlbWEubW9kZWwuZm9ybSA9IG1vZGVsRWRpdG9yO1xuICAgIHRoaXMuc2NoZW1hLm1vZGVsLmVkaXRvciA9IF8uY2xvbmUobW9kZWxFZGl0b3IpO1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5tb2RlbC5lZGl0b3I7XG4gIH1cblxuICBtYXBzVW5pdFRvVmFsdWUgPSAocmVmRW50aXR5U2NoZW1hKSA9PiB7XG5cbiAgICByZWZFbnRpdHlTY2hlbWEucHJvcGVydGllcyA9IHJlZkVudGl0eVNjaGVtYS5wcm9wZXJ0aWVzLm1hcCgocHJvcGVydHk6IGFueSkgPT4ge1xuICAgICAgaWYgKHByb3BlcnR5LmRhdGFUeXBlID09PSBcIlJlZlwiKSB7XG4gICAgICAgIHJlZkVudGl0eVNjaGVtYS5yZWZzLmZvckVhY2gocmVmID0+IHtcbiAgICAgICAgICBpZiAocHJvcGVydHkucmVmID09PSByZWYubmFtZSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocmVmKS5mb3JFYWNoKChrZXkpID0+IChyZWZba2V5XSA9PSBudWxsKSAmJiBkZWxldGUgcmVmW2tleV0pO1xuICAgICAgICAgICAgZGVsZXRlIHJlZi5uYW1lO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0eSwgcmVmKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyAgcHJvcGVydHkudmFsdWVzID0gWy4uLnByb3BlcnR5LnVuaXRzXTtcblxuICAgICAgfVxuICAgICAgaWYgKHByb3BlcnR5LmRhdGFUeXBlID09PSBcIk1lYXN1cmVcIiAmJiBwcm9wZXJ0eS51bml0cykge1xuICAgICAgICBwcm9wZXJ0eS52YWx1ZXMgPSBbLi4ucHJvcGVydHkudW5pdHNdO1xuICAgICAgICBkZWxldGUgcHJvcGVydHkudW5pdHM7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlZkVudGl0eVNjaGVtYS5wcm9wZXJ0aWVzO1xuICB9XG5cblxuICB1aVNjaGVtYSA9ICh0eXBlKSA9PiB7XG4gICAgY29uc3QgdWlFZGl0b3IgPSBfLmZpbmQodGhpcy5VSVNjaGVtYSwge3R5cGV9KTtcbiAgICB0aGlzLnNjaGVtYS51aS5mb3JtID0gXy5jbG9uZURlZXAodWlFZGl0b3IpO1xuICAgIHRoaXMuc2NoZW1hLnVpLmVkaXRvciA9IF8uY2xvbmVEZWVwKHVpRWRpdG9yKTtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEudWkuZWRpdG9yO1xuICB9XG5cblxuICBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2NoZW1hVXJsKS50b1Byb21pc2UoKTtcbiAgfVxufVxuIl19
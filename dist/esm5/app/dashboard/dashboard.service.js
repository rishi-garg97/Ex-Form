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
        this.initUiSchema = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.http.get("./assets/ui-schema.json").toPromise()];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bHItanNvbi1mb3JtLyIsInNvdXJjZXMiOlsiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFNbEQ7SUFJRSwwQkFBb0IsSUFBZ0I7UUFBcEMsaUJBQXlDO1FBQXJCLFNBQUksR0FBSixJQUFJLENBQVk7UUFFcEMsbUJBQW1CO1FBQ25CLGNBQVMsR0FBRyxvQkFBb0IsQ0FBQztRQUNqQyxXQUFNLEdBQUc7WUFDUCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLEVBQUU7YUFDWDtZQUNELEVBQUUsRUFBRTtnQkFDRixJQUFJLEVBQUUsRUFBRTtnQkFDUixNQUFNLEVBQUUsRUFBRTthQUNYO1NBQ0YsQ0FBQTtRQUVELHVCQUFrQixHQUFHLFVBQUMsSUFBSTtZQUN4QixJQUFNLE1BQU0sd0JBQU8sS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLElBQU8sWUFBWSxHQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUMsVUFBVTtnQkFDL0MsSUFBSSxVQUFVLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDNUIsT0FBTyxVQUFVLENBQUM7aUJBQ25CO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFLLFlBQVksQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7Z0JBQ3RELFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtvQkFDOUIsSUFBSSxDQUFDLElBQUksb0JBQU8sWUFBWSxDQUFDLElBQUks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QztpREFLMEIsVUFBVTtPQUp6QixnQkFBZ0IsQ0ErRTVCOzJCQXZGRDtDQXVGQyxBQS9FRCxJQStFQztTQS9FWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFNlcnZpY2Uge1xuXG4gIFVJU2NoZW1hOiBhbnk7IC8vIGl0IGlzIGluaXRpYWxpemVkIGluIGF1dGggc2VydmljZS5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICBtb2RlbFNjaGVtYTogYW55OyAgLy8gaXQgaXMgaW5pdGlhbGl6ZWQgaW4gYXV0aCBzZXJ2aWNlLlxuICAvLyBmb3JtU2NoZW1hOiBhbnk7XG4gIHNjaGVtYVVybCA9IFwiYXNzZXRzL3NjaGVtYS5qc29uXCI7XG4gIHNjaGVtYSA9IHtcbiAgICBtb2RlbDoge1xuICAgICAgZm9ybToge30sXG4gICAgICBlZGl0b3I6IHt9XG4gICAgfSxcbiAgICB1aToge1xuICAgICAgZm9ybToge30sXG4gICAgICBlZGl0b3I6IHt9XG4gICAgfVxuICB9XG5cbiAgZW5pdGl0eU1vZGVsU2NoZW1hID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBzY2hlbWEgPSB7Li4udGhpcy5tb2RlbFNjaGVtYX07XG4gICAgY29uc3QgIGVudGl0eVNjaGVtYSA9ICBfLmZpbmQoc2NoZW1hLCAoZm9ybVNjaGVtYSkgPT4ge1xuICAgICAgaWYgKGZvcm1TY2hlbWEubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gZm9ybVNjaGVtYTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIGVudGl0eVNjaGVtYS5zdGVwcyAmJiBlbnRpdHlTY2hlbWEuc3RlcHMgIT09IG51bGwpIHtcbiAgICAgIGVudGl0eVNjaGVtYS5zdGVwcy5mb3JFYWNoKChzdGVwKSA9PiB7XG4gICAgICAgIHN0ZXAucmVmcyA9IFsuLi5lbnRpdHlTY2hlbWEucmVmc107XG4gICAgICAgIHN0ZXAgPSB0aGlzLm1hcHNVbml0VG9WYWx1ZShzdGVwKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRpdHlTY2hlbWEucHJvcGVydGllcyA9ICB0aGlzLm1hcHNVbml0VG9WYWx1ZShlbnRpdHlTY2hlbWEpO1xuICAgIH1cbiAgICBjb25zdCBtb2RlbEVkaXRvciA9IHsuLi5lbnRpdHlTY2hlbWF9O1xuICAgIHRoaXMuc2NoZW1hLm1vZGVsLmZvcm0gPSBtb2RlbEVkaXRvcjtcbiAgICB0aGlzLnNjaGVtYS5tb2RlbC5lZGl0b3IgPSBfLmNsb25lKG1vZGVsRWRpdG9yKTtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEubW9kZWwuZWRpdG9yO1xuICB9XG5cbiAgbWFwc1VuaXRUb1ZhbHVlID0gKHJlZkVudGl0eVNjaGVtYSkgPT4ge1xuXG4gICAgcmVmRW50aXR5U2NoZW1hLnByb3BlcnRpZXMgPSByZWZFbnRpdHlTY2hlbWEucHJvcGVydGllcy5tYXAoKHByb3BlcnR5OiBhbnkpID0+IHtcbiAgICAgIGlmIChwcm9wZXJ0eS5kYXRhVHlwZSA9PT0gXCJSZWZcIikge1xuICAgICAgICByZWZFbnRpdHlTY2hlbWEucmVmcy5mb3JFYWNoKHJlZiA9PiB7XG4gICAgICAgICAgaWYgKHByb3BlcnR5LnJlZiA9PT0gcmVmLm5hbWUpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlZikuZm9yRWFjaCgoa2V5KSA9PiAocmVmW2tleV0gPT0gbnVsbCkgJiYgZGVsZXRlIHJlZltrZXldKTtcbiAgICAgICAgICAgIGRlbGV0ZSByZWYubmFtZTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydHksIHJlZik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gIHByb3BlcnR5LnZhbHVlcyA9IFsuLi5wcm9wZXJ0eS51bml0c107XG5cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wZXJ0eS5kYXRhVHlwZSA9PT0gXCJNZWFzdXJlXCIgJiYgcHJvcGVydHkudW5pdHMpIHtcbiAgICAgICAgcHJvcGVydHkudmFsdWVzID0gWy4uLnByb3BlcnR5LnVuaXRzXTtcbiAgICAgICAgZGVsZXRlIHByb3BlcnR5LnVuaXRzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH0pO1xuICAgIHJldHVybiByZWZFbnRpdHlTY2hlbWEucHJvcGVydGllcztcbiAgfVxuXG5cbiAgdWlTY2hlbWEgPSAodHlwZSkgPT4ge1xuICAgIGNvbnN0IHVpRWRpdG9yID0gXy5maW5kKHRoaXMuVUlTY2hlbWEsIHt0eXBlfSk7XG4gICAgdGhpcy5zY2hlbWEudWkuZm9ybSA9IF8uY2xvbmVEZWVwKHVpRWRpdG9yKTtcbiAgICB0aGlzLnNjaGVtYS51aS5lZGl0b3IgPSBfLmNsb25lRGVlcCh1aUVkaXRvcik7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnVpLmVkaXRvcjtcbiAgfVxuXG5cbiAgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNjaGVtYVVybCkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBpbml0VWlTY2hlbWEgPSBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCIuL2Fzc2V0cy91aS1zY2hlbWEuanNvblwiKS50b1Byb21pc2UoKTtcbiAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWpzb24tZm9ybS8iLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBTWxELElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBSTNCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsYUFBUSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFJcEUsbUJBQW1CO1FBQ25CLGNBQVMsR0FBRyxvQkFBb0IsQ0FBQztRQUNqQyxXQUFNLEdBQUc7WUFDUCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLEVBQUU7YUFDWDtZQUNELEVBQUUsRUFBRTtnQkFDRixJQUFJLEVBQUUsRUFBRTtnQkFDUixNQUFNLEVBQUUsRUFBRTthQUNYO1NBQ0YsQ0FBQTtRQUNELHNCQUFzQjtRQUN0QiwwQ0FBMEM7UUFDMUMsSUFBSTtRQUVOLGtDQUFrQztRQUNsQyxFQUFFO1FBQ0YsMENBQTBDO1FBQzFDLDREQUE0RDtRQUM1RCxzQ0FBc0M7UUFDdEMsMkJBQTJCO1FBQzNCLFFBQVE7UUFDUixRQUFRO1FBQ1IsOERBQThEO1FBQzlELDZDQUE2QztRQUM3Qyw0Q0FBNEM7UUFDNUMsMkNBQTJDO1FBQzNDLFVBQVU7UUFDVixhQUFhO1FBQ2IscUVBQXFFO1FBQ3JFLE1BQU07UUFDTixnREFBZ0Q7UUFDaEQsbUNBQW1DO1FBQ25DLElBQUk7UUFFRix1QkFBa0IsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzVCLE1BQU0sTUFBTSxxQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckMsTUFBTyxZQUFZLEdBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDbkQsSUFBSSxVQUFVLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDNUIsT0FBTyxVQUFVLENBQUM7aUJBQ25CO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFLLFlBQVksQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7Z0JBQ3RELFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsWUFBWSxDQUFDLFVBQVUsR0FBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQy9EO1lBQ0QsTUFBTSxXQUFXLHFCQUFPLFlBQVksQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDbEMsQ0FBQyxDQUFBO1FBRUQsb0JBQWUsR0FBRyxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBRXBDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtnQkFDNUUsSUFBSSxRQUFRLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtvQkFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ2pDLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFOzRCQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekUsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDOzRCQUNoQixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQzt5QkFDOUI7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsMENBQTBDO2lCQUUzQztnQkFDRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7b0JBQ3JELFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDO2lCQUN2QjtnQkFDRCxPQUFPLFFBQVEsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxDQUFDLENBQUE7UUFHRCxhQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNsQixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQy9CLENBQUMsQ0FBQTtRQUdELFNBQUksR0FBRyxHQUFTLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkQsQ0FBQyxDQUFBLENBQUE7SUE3RnVDLENBQUM7Q0E4RjFDLENBQUE7O0FBbEdZLGdCQUFnQjtJQUg1QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDOzZDQUswQixVQUFVO0dBSnpCLGdCQUFnQixDQWtHNUI7U0FsR1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRTZXJ2aWNlIHtcblxuICBVSVNjaGVtYTogYW55ID0gdGhpcy5odHRwLmdldChgdXJsOiBcIi4uLy4uL2Fzc2V0cy91aS1zY2hlbWEuanNvblwiYCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cbiAgbW9kZWxTY2hlbWE6IGFueTsgIC8vIGl0IGlzIGluaXRpYWxpemVkIGluIGF1dGggc2VydmljZS5cbiAgLy8gZm9ybVNjaGVtYTogYW55O1xuICBzY2hlbWFVcmwgPSBcImFzc2V0cy9zY2hlbWEuanNvblwiO1xuICBzY2hlbWEgPSB7XG4gICAgbW9kZWw6IHtcbiAgICAgIGZvcm06IHt9LFxuICAgICAgZWRpdG9yOiB7fVxuICAgIH0sXG4gICAgdWk6IHtcbiAgICAgIGZvcm06IHt9LFxuICAgICAgZWRpdG9yOiB7fVxuICAgIH1cbiAgfVxuICAvLyBnZXRTY2hlbWFCeUh0dHAoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWdVcmwpO1xuICAvLyB9XG5cbi8vICAgZm9ybU1vZGVsU2NoZW1hID0gKG5hbWUpID0+IHtcbi8vXG4vLyAgIGNvbnN0IHNjaGVtYSA9IHsuLi50aGlzLm1vZGVsU2NoZW1hfTtcbi8vICAgY29uc3QgIGVudGl0eVNjaGVtYSA9ICBfLmZpbmQoc2NoZW1hLCAoZm9ybVNjaGVtYSkgPT4ge1xuLy8gICAgIGlmIChmb3JtU2NoZW1hLm5hbWUgPT09IG5hbWUpIHtcbi8vICAgICAgIHJldHVybiBmb3JtU2NoZW1hO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyAgIGlmICggZW50aXR5U2NoZW1hLnN0ZXBzICYmIGVudGl0eVNjaGVtYS5zdGVwcyAhPT0gbnVsbCkge1xuLy8gICAgIGVudGl0eVNjaGVtYS5zdGVwcy5mb3JFYWNoKChzdGVwKSA9PiB7XG4vLyAgICAgICBzdGVwLnJlZnMgPSBbLi4uZW50aXR5U2NoZW1hLnJlZnNdO1xuLy8gICAgICAgc3RlcCA9IHRoaXMubWFwc1VuaXRUb1ZhbHVlKHN0ZXApO1xuLy8gICAgIH0pO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIGVudGl0eVNjaGVtYS5wcm9wZXJ0aWVzID0gIHRoaXMubWFwc1VuaXRUb1ZhbHVlKGVudGl0eVNjaGVtYSk7XG4vLyAgIH1cbi8vICAgdGhpcy5zY2hlbWEubW9kZWwuZm9ybSA9IHsuLi5lbnRpdHlTY2hlbWF9O1xuLy8gICByZXR1cm4gdGhpcy5zY2hlbWEubW9kZWwuZm9ybTtcbi8vIH1cblxuICBlbml0aXR5TW9kZWxTY2hlbWEgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHNjaGVtYSA9IHsuLi50aGlzLm1vZGVsU2NoZW1hfTtcbiAgICBjb25zdCAgZW50aXR5U2NoZW1hID0gIF8uZmluZChzY2hlbWEsIChmb3JtU2NoZW1hKSA9PiB7XG4gICAgICBpZiAoZm9ybVNjaGVtYS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiBmb3JtU2NoZW1hO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICggZW50aXR5U2NoZW1hLnN0ZXBzICYmIGVudGl0eVNjaGVtYS5zdGVwcyAhPT0gbnVsbCkge1xuICAgICAgZW50aXR5U2NoZW1hLnN0ZXBzLmZvckVhY2goKHN0ZXApID0+IHtcbiAgICAgICAgc3RlcC5yZWZzID0gWy4uLmVudGl0eVNjaGVtYS5yZWZzXTtcbiAgICAgICAgc3RlcCA9IHRoaXMubWFwc1VuaXRUb1ZhbHVlKHN0ZXApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGl0eVNjaGVtYS5wcm9wZXJ0aWVzID0gIHRoaXMubWFwc1VuaXRUb1ZhbHVlKGVudGl0eVNjaGVtYSk7XG4gICAgfVxuICAgIGNvbnN0IG1vZGVsRWRpdG9yID0gey4uLmVudGl0eVNjaGVtYX07XG4gICAgdGhpcy5zY2hlbWEubW9kZWwuZm9ybSA9IG1vZGVsRWRpdG9yO1xuICAgIHRoaXMuc2NoZW1hLm1vZGVsLmVkaXRvciA9IF8uY2xvbmUobW9kZWxFZGl0b3IpO1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5tb2RlbC5lZGl0b3I7XG4gIH1cblxuICBtYXBzVW5pdFRvVmFsdWUgPSAocmVmRW50aXR5U2NoZW1hKSA9PiB7XG5cbiAgICByZWZFbnRpdHlTY2hlbWEucHJvcGVydGllcyA9IHJlZkVudGl0eVNjaGVtYS5wcm9wZXJ0aWVzLm1hcCgocHJvcGVydHk6IGFueSkgPT4ge1xuICAgICAgaWYgKHByb3BlcnR5LmRhdGFUeXBlID09PSBcIlJlZlwiKSB7XG4gICAgICAgIHJlZkVudGl0eVNjaGVtYS5yZWZzLmZvckVhY2gocmVmID0+IHtcbiAgICAgICAgICBpZiAocHJvcGVydHkucmVmID09PSByZWYubmFtZSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocmVmKS5mb3JFYWNoKChrZXkpID0+IChyZWZba2V5XSA9PSBudWxsKSAmJiBkZWxldGUgcmVmW2tleV0pO1xuICAgICAgICAgICAgZGVsZXRlIHJlZi5uYW1lO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0eSwgcmVmKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyAgcHJvcGVydHkudmFsdWVzID0gWy4uLnByb3BlcnR5LnVuaXRzXTtcblxuICAgICAgfVxuICAgICAgaWYgKHByb3BlcnR5LmRhdGFUeXBlID09PSBcIk1lYXN1cmVcIiAmJiBwcm9wZXJ0eS51bml0cykge1xuICAgICAgICBwcm9wZXJ0eS52YWx1ZXMgPSBbLi4ucHJvcGVydHkudW5pdHNdO1xuICAgICAgICBkZWxldGUgcHJvcGVydHkudW5pdHM7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlZkVudGl0eVNjaGVtYS5wcm9wZXJ0aWVzO1xuICB9XG5cblxuICB1aVNjaGVtYSA9ICh0eXBlKSA9PiB7XG4gICAgY29uc3QgdWlFZGl0b3IgPSBfLmZpbmQodGhpcy5VSVNjaGVtYSwge3R5cGV9KTtcbiAgICB0aGlzLnNjaGVtYS51aS5mb3JtID0gXy5jbG9uZURlZXAodWlFZGl0b3IpO1xuICAgIHRoaXMuc2NoZW1hLnVpLmVkaXRvciA9IF8uY2xvbmVEZWVwKHVpRWRpdG9yKTtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEudWkuZWRpdG9yO1xuICB9XG5cblxuICBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2NoZW1hVXJsKS50b1Byb21pc2UoKTtcbiAgfVxufVxuIl19
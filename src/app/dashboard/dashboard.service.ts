import { Injectable } from "@angular/core";
import ModelSchema from "../../assets/schema.json";
import UISchema from "../../assets/ui-schema.json";
import _ from "lodash";


@Injectable({
  providedIn: "root"
})
export class DashboardService {

  constructor() { }

  schema: any;

  getSchema = (name) => {

    const schema = [...ModelSchema];
    // const schema = await Promise.resolve(ModelSchema);
    // const properties = "properties";
    const  entitySchema =  _.find(schema, (formSchema) => {
      if (formSchema.name === name) {
        return formSchema;
      }
    });
    if ( entitySchema.steps && entitySchema.steps !== null) {
      entitySchema.steps.forEach((step) => {
        step.refs = [...entitySchema.refs];
        step = this.mapsUnitToValue(step);
      });
    } else {
      entitySchema.properties =  this.mapsUnitToValue(entitySchema);
    }
    this.schema = {...entitySchema};
    return this.schema;

  }

  mapsUnitToValue = (refEntitySchema) => {

    refEntitySchema.properties = refEntitySchema.properties.map((property: any) => {
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
  }


  getUISchema = (type) => {
    return _.find(UISchema, {type});
  }

}

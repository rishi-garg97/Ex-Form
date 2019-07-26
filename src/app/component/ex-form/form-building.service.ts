import {Injectable} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import SchemaJson from "../../../assets/schema.json";
import _ from "lodash";

@Injectable({
  providedIn: "root"
})

export class FormBuildingService {

  schema: any;

  constructor(private formBuilder: FormBuilder) { }

  getSchema = (name) => {

    const schema = [...SchemaJson];
      // const schema = await Promise.resolve(SchemaJson);
    // const properties = "properties";
    const  entitySchema = _.find(schema, (formSchema) => {
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

 buildForm = (schema) => {
    if (schema.steps && schema.steps !== null) {
      const allSteps = [];
      schema.steps.forEach((step, index) => {
        allSteps[index] = this.buildControl(step);
      });
      return this.formBuilder.group(allSteps);
    } else {
      return this.buildControl(schema);
    }
 }





  buildControl = (schema) => {
    const allControl = {};
    schema.properties.forEach((property) => {

      if (property.dataType === "Measure") {
        const measureGroup = {};
        let initialUnitValue = "";
        if (property.values.length === 1) {
          initialUnitValue = property.values[0];
        }
        measureGroup[`${property.name}Measure`] = [{value: ""}, []];
        measureGroup[`${property.name}Unit`] = [{value: initialUnitValue, disabled: true},[]];
        allControl[property.name] = this.formBuilder.group(measureGroup);
      } else {
        allControl[property.name] = ["", []];

      }

    });

    return this.formBuilder.group(allControl);
  }


}

import {Injectable} from "@angular/core";


@Injectable({
  providedIn: "root"
})

export class FormBuildingService {

  constructor() { }


}

  //
  // getSchema = (name) => {
  //
  //   const formSchema = [...SchemaJson];
  //     // const formSchema = await Promise.resolve(SchemaJson);
  //   // const properties = "properties";
  //   const  entitySchema = _.find(formSchema, (formSchema) => {
  //     if (formSchema.name === name) {
  //       return formSchema;
  //     }
  //   });
  //   if ( entitySchema.steps && entitySchema.steps !== null) {
  //          entitySchema.steps.forEach((step) => {
  //            step.refs = [...entitySchema.refs];
  //            step = this.mapsUnitToValue(step);
  //          });
  //   } else {
  //     entitySchema.properties =  this.mapsUnitToValue(entitySchema);
  //   }
  //   this.formSchema = {...entitySchema};
  //   return this.formSchema;
  //
  // }
  //
  // mapsUnitToValue = (refEntitySchema) => {
  //
  //   refEntitySchema.properties = refEntitySchema.properties.map((property: any) => {
  //     if (property.dataType === "Ref") {
  //       refEntitySchema.refs.forEach(ref => {
  //         if (property.ref === ref.name) {
  //           Object.keys(ref).forEach((key) => (ref[key] == null) && delete ref[key]);
  //           delete ref.name;
  //           Object.assign(property, ref);
  //         }
  //       });
  //     //  property.values = [...property.units];
  //
  //     }
  //     if (property.dataType === "Measure" && property.units) {
  //       property.values = [...property.units];
  //       delete property.units;
  //     }
  //     return property;
  //   });
  //   return refEntitySchema.properties;
  // }

 // buildForm = (formSchema) => {
  //    if (formSchema.steps && formSchema.steps !== null) {
  //      const allSteps = [];
  //      formSchema.steps.forEach((step, index) => {
  //        allSteps[index] = this.buildControl(step);
  //      });
  //      return this.formBuilder.group(allSteps);
  //    } else {
  //      return this.buildControl(formSchema);
  //    }
  // }




  //
  // buildControl = (formSchema) => {
  //   const allControl = {};
  //   formSchema.properties.forEach((property) => {
  //
  //     if (property.dataType === "Measure") {
  //       const measureGroup = {};
  //       let initialUnitValue = "";
  //       if (property.values.length === 1) {
  //         initialUnitValue = property.values[0];
  //       }
  //       measureGroup[`${property.name}Measure`] = [{value: ""}, []];
  //       measureGroup[`${property.name}Unit`] = [{value: initialUnitValue, disabled: true},[]];
  //       allControl[property.name] = this.formBuilder.group(measureGroup);
  //     } else {
  //       allControl[property.name] = ["", []];
  //
  //     }
  //
  //   });
  //
  //   return this.formBuilder.group(allControl);
  // }
  //

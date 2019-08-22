import { Injectable } from "@angular/core";
import _ from "lodash";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class DashboardService {

  UISchema: any = this.http.get(`url: "../../assets/ui-schema.json"`);

  constructor(private http: HttpClient) { }
  modelSchema: any;  // it is initialized in auth service.
  // formSchema: any;
  schemaUrl = "assets/schema.json";
  schema = {
    model: {
      form: {},
      editor: {}
    },
    ui: {
      form: {},
      editor: {}
    }
  }
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

  enitityModelSchema = (name) => {
    const schema = {...this.modelSchema};
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
    const modelEditor = {...entitySchema};
    this.schema.model.form = modelEditor;
    this.schema.model.editor = _.clone(modelEditor);
    return this.schema.model.editor;
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


  uiSchema = (type) => {
    const uiEditor = _.find(this.UISchema, {type});
    this.schema.ui.form = _.cloneDeep(uiEditor);
    this.schema.ui.editor = _.cloneDeep(uiEditor);
    return this.schema.ui.editor;
  }


  init = async () => {
    return this.http.get(this.schemaUrl).toPromise();
  }
}

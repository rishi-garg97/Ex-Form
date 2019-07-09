import {Injectable} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import SchemaJson from "../../../assets/schema.json";

@Injectable({
  providedIn: "root"
})

export class FormBuildingService {

  schema: any = SchemaJson;

  constructor(private formBuilder: FormBuilder) {}


  getSchema = () => {
      // const schema = await Promise.resolve(SchemaJson);
    const properties = "properties";
    this.schema = this.schema[properties].map((property: any) => {
      if (property.dataType === "Ref") {
        const refs = "refs";
        this.schema[refs].forEach( ref => {
          if (property.ref === ref.name ) {
            Object.keys(ref).forEach((key) => (ref[key] == null) && delete ref[key]);
            delete ref.name;
            Object.assign(property, ref);
           }
        });
      }
      if (property.dataType === "Measure") {
        property.values = [...property.units];
        delete property.units;
      }
      return property;
    });
    console.log(this.schema);
    return this.schema;

  }


  buildForm = () => {
    const allControl = {};

    this.schema.forEach((property) => {

      if ( property.dataType === "Measure") {
        const measureGroup = {};
        let initialUnitValue = "";
        if (property.values.length === 1) {
          initialUnitValue = property.values[0];
        }
        measureGroup[`${property.name}Measure`] =  [{value: ""}];
        measureGroup[`${property.name}Unit`] =  [{value: initialUnitValue, disabled: true } ];
        allControl[property.name] = this.formBuilder.group(measureGroup);
      } else {
        allControl[property.name] = [""];

      }

    });

    return this.formBuilder.group(allControl);
  }


}

//
//
// {
//   "dataType": "Ref",
//   "name": "protocolName",
//   "alias": "Protocol name",
//   "required": null,
//   "ref": "string",
//   "unique": null,
//   "sequence": null,
//   "isArray": false,
//   "delimiter": null,
//   "array": false
// },
//
// {
//   "dataType": "String",
//   "name": "string",
//   "alias": null,
//   "required": true,
//   "array": false,
//   "delimiter": null,
//   "minLength": null,
//   "maxLength": 255,
//   "pattern": null,
//   "unique": true,
//   "sequence": null,
//   "isArray": false
// },

import { Validators } from '@angular/forms';
import { FormConfig } from '../models/form-config.model';

export class FormConfigA {
  public config: FormConfig = {
    type: "splitedFG",
    title: "Registration",
    wrapperClass: 'd-flex',
    formGroup: [
      {
        subTitle: 'Personal',
        formWrapperStyle: 'border border-5 rounded border-dark p-3',
        fields: [
          {
            type: "input",
            label: "Username",
            name: "name",
            validations: [
              {
                name: "required",
                validator: Validators.required,
                message: "Name Required"
              },
              {
                name: "pattern",
                validator: Validators.pattern("^[a-zA-Z]+$"),
                message: "Accept only text"
              }
            ]
          },
          {
            type: "input",
            label: "Email Address",
            name: "email",
            validations: [
              {
                name: "required",
                validator: Validators.required,
                message: "Email Required"
              },
              {
                name: "pattern",
                validator: Validators.pattern(
                  "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
                ),
                message: "Invalid email"
              }
            ]
          },
          {
            type: "input",
            label: "Password",
            name: "password",
            validations: [
              {
                name: "required",
                validator: Validators.required,
                message: "Password Required"
              }
            ]
          },
          {
            type: "radioBtn",
            label: "Gender",
            name: "gender",
            options: [{ label: "Male", value: "Male" }, { label: "Female", value: "Female" }],
            value: "Male",
            validations: []
          },
          {
            type: "datePicker",
            label: "Date Of Birth",
            name: "dob",
            value: new Date(),
            formData: {
              maxDate: new Date()
            },
            validations: [
              {
                name: "required",
                validator: Validators.required,
                message: "Date of Birth Required"
              }
            ]
          },
          {
            type: "selectDropdown",
            label: "Country",
            name: "country",
            value: "UK",
            validations: [],
            formData:
            {
              optionList: [{ label: "India", value: "India" }, { label: "UAE", value: "UAE" }, { label: "UK", value: "UK" }, { label: "US", value: "US" }]
            }
          },
          {
            type: "checkbox",
            label: "Accept Terms",
            name: "term",
            value: false,
            formData: { optionList: [{ label: "Accept", value: true }] },
            validations: []
          },
          {
            type: "button",
            label: "Save",
            style: "btn-success",
            formData: {
              onClick: (ev) => this.submit(ev)
            }
          }
        ]
      },
      {
        subTitle: 'Address',
        fields: [
          {
            type: 'input',
            label: 'Address',
            name: "address",
            validations: [],
            value: '',
          },
          {
            type: 'input',
            label: 'City',
            name: "city",
            validations: [],
            value: '',
          },
          {
            type: 'input',
            label: 'Country',
            name: "country",
            validations: [],
            value: '',
          }
        ]
      }

    ],
  };
  public submit(ev): void {
    console.log(ev)
  }

}

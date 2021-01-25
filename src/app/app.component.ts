import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from './forms/dynamic-form/dynamic-form.component';
import { Field } from './models/field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'config-forms';
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  public formConfig = {
    title: "Registration",
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
      formData: {optionList: [{label:"Accept", value: true }]},
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
  }

  public submit(ev): void {
    console.log(ev)
  }


}

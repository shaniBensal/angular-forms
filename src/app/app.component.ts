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
      options: [{label: "Male", value: "Male"}, {label: "Female", value: "Female"}],
      value:"Male",
      validations: []
      },
      // {
      // type: "date",
      // label: "DOB",
      // name: "dob",
      // validations: [
      // {
      // name: "required",
      // validator: Validators.required,
      // message: "Date of Birth Required"
      // }
      // ]
      // },
      // {
      // type: "select",
      // label: "Country",
      // name: "country",
      // value: "UK",
      // validations: [],
      // options: ["India", "UAE", "UK", "US"]
      // },
      // {
      // type: "checkbox",
      // label: "Accept Terms",
      // name: "term",
      // value: true,
      // validations: []
      // },
      {
        type: "button",
        label: "Save",
        style: "btn-success"
      }
    ]
  }

  public submit(ev): void {
    console.log(ev)
  }


}

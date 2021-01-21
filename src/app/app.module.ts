import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './forms/input/input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './forms/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { ButtonComponent } from './forms/button/button.component';
import { FormBaseComponent } from './forms/form-base/form-base.component';
import { RadioBtnComponent } from './forms/radio-btn/radio-btn.component';
import { DateInputComponent } from './forms/date-input/date-input.component';

import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FieldErrorComponent } from './forms/field-error/field-error.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    ButtonComponent,
    FormBaseComponent,
    RadioBtnComponent,
    DateInputComponent,
    FieldErrorComponent
    ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule

  ],
  providers: [],
  entryComponents:[ButtonComponent,InputComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

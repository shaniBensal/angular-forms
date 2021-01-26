import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './forms/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { formComponentList, primngModules } from './forms/component-list';
import { FormConfigA } from './form-config/config-a';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    formComponentList
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    primngModules,

  ],
  providers: [FormConfigA],
  entryComponents: [formComponentList],
  bootstrap: [AppComponent]
})
export class AppModule { }

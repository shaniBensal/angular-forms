import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormConfigA } from './form-config/config-a';
import { DynamicFormComponent } from './forms/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent{
  title = 'config-forms';
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  constructor(public formConfig: FormConfigA){}
}

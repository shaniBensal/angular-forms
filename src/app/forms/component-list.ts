//modules
import {DropdownModule} from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';

//CMP
import { ButtonComponent } from "./button/button.component";
import { DateInputComponent } from "./date-input/date-input.component";
import { FieldErrorComponent } from "./field-error/field-error.component";
import { FormBaseComponent } from "./form-base/form-base.component";
import { InputComponent } from "./input/input.component";
import { RadioBtnComponent } from "./radio-btn/radio-btn.component";
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

export const formComponentList = [
  FormBaseComponent,
    FieldErrorComponent,
    InputComponent,
    ButtonComponent,
    RadioBtnComponent,
    DateInputComponent,
    SelectDropdownComponent,
    CheckboxComponent
];

export const primngModules = [
  CalendarModule,
  DropdownModule,
  CheckboxModule

]


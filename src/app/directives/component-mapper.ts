import { ButtonComponent } from '../forms/button/button.component';
import { CheckboxComponent } from '../forms/checkbox/checkbox.component';
import { DateInputComponent } from '../forms/date-input/date-input.component';
import { InputComponent } from "../forms/input/input.component";
import { RadioBtnComponent } from '../forms/radio-btn/radio-btn.component';
import { SelectDropdownComponent } from '../forms/select-dropdown/select-dropdown.component';

export const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  radioBtn: RadioBtnComponent,
  datePicker: DateInputComponent,
  selectDropdown: SelectDropdownComponent,
  checkbox: CheckboxComponent

  };

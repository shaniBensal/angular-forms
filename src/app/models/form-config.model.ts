import { Field } from './field';

export interface FormConfig {
  type: string;
  title: string;
  formGroup: SingleForm[];
  wrapperClass?: string;
}

export interface SingleForm {
 fields: Field[];
 subTitle: string;
 formWrapperStyle?: string;
}

export class Field {
  type: string;
  name?: string;
  key?: string;
  options?: string[];
  label: string;
  value?: any;
  validations?: Validation[];
}

class Validation {
  name: string;
  validator: any;
  message: string;
}

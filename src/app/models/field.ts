export class Field {
  type: string;
  name?: string;
  key?: string;
  options?: Options[];
  label: string;
  value?: any;
  style?: string;
  validations?: Validation[];
}

interface Options {
  label: string;
  value: string;
}

class Validation {
  name: string;
  validator: any;
  message: string;
}

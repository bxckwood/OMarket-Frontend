export interface IHeaderTabs {
  img: any;
  title: string;
  url: string;
}

export interface IInput {
  placeholder: string;
  errors?: any;
  inputName: string;
  register?: any;
  required: boolean;
  type?: string;
  maxLength?: number;
  minLength?: number;
  watch: any
}

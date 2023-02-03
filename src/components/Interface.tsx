export interface Data {
  species: string;
  planet: string;
  numOfBeings: string;
  select: string;
  text: string;
}

export interface FormProp {
  onSubmit: (data: Data) => void;
}

export interface OptionProp {
  value: string;
  children: React.ReactNode;
}

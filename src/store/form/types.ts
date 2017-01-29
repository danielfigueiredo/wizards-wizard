export interface ICharacter {
  name?: string;
  bioSummary: {
    age: number;
    size: string;
  };
  skills: string[];
}

export interface IForm {
  character: ICharacter;
}

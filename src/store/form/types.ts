export interface ICharacter {
  name?: string;
  bioSummary: {
    age: number;
    size: string;
    alignment: string;
    race: string;
  };
  skills: string[];
}

export interface IForm {
  character: ICharacter;
}

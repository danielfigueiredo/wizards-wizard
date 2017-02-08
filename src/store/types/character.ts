type TSkills = string[];

export interface IBioSummary {
  age: number;
  size: string;
  alignment: string;
  race: string;
}

export interface ICharacter {
  name?: string;
  bioSummary: IBioSummary;
  skills: TSkills;
}

export interface ICharacterForm {
  character: ICharacter;
}

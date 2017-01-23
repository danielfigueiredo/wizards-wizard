export interface ICharacter {
  name?: string;
  class?: string;
  attributes?: {
    str: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
}

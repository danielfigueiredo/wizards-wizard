import {ICharacter} from './types';

const initialState: ICharacter = {
  name: undefined,
  class: undefined,
  attributes: {
    str: undefined,
    dexterity: undefined,
    constitution: undefined,
    intelligence: undefined,
    wisdom: undefined,
    charisma: undefined,
  }
};

export function characterReducer(state = initialState, action) {
  return state;
}

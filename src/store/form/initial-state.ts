import {
  ICharacter,
  IForm
} from './types';

export const characterInitialState: ICharacter = {
  name: undefined,
  bioSummary: {
    age: undefined,
    size: undefined,
    alignment: undefined,
    race: undefined,
  },
  skills: []
};

export const initialState: IForm = {
  character: characterInitialState
};

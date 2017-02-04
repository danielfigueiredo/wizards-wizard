import {
  ICharacter,
  IForm
} from './types';

export const characterInitialState: ICharacter = {
  name: 'Elminster',
  bioSummary: {
    age: 230,
    size: '',
    alignment: '',
    race: '',
  },
  skills: ['Knowledge Arcana']
};

export const initialState: IForm = {
  character: characterInitialState
};

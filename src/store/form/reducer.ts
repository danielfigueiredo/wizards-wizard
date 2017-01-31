import {
  ICharacter,
  IForm
} from './types';
import {IPayloadAction} from '../../actions/index';
import * as R from 'ramda';

const characterInitialState: ICharacter = {
  name: 'Elminster',
  bioSummary: {
    age: 230,
    size: 'Medium',
    alignment: 'Neutral',
    race: 'Human',
  },
  skills: ['Knowledge Arcana']
};

const initialState: IForm = {
  character: characterInitialState
};

export function formReducer(state = initialState, action: IPayloadAction) {
  switch (action.type) {
  case 'SAVE_FORM':
    return R.assoc(
      'character',
      R.merge(state.character, action.payload),
      state
    );
  case 'ADD_SKILL':
    return R.assocPath(
      ['character', 'skills'],
      R.concat(state.character.skills, ['']),
      state
    );
  case 'REMOVE_SKILL':
    return R.assocPath(
      ['character', 'skills'],
      R.remove(
        action.payload,
        1,
        state.character.skills
      ),
      state
    );
  case 'SELECT_SKILL':
    return R.assocPath(
      ['character', 'skills'],
      R.update(
        action.payload.index,
        action.payload.skill,
        state.character.skills
      ),
      state
    );

  default:
    return state;
  }
}

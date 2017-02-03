import {TPayloadAction} from '../types';
import {IWizard} from './types';
import {merge} from 'ramda';

const initialState: IWizard = {
  racesAndAlignments: {
    tiefling: [],
    human: [],
    elf: []
  }
};

export function wizardReducer(state = initialState, action: TPayloadAction) {
  switch (action.type) {
  case 'FETCH_RACES_ALIGNMENTS_COMPLETED':
    return merge(
      state,
      {racesAndAlignments: action.payload}
    );
  default:
    return state;
  }
}
